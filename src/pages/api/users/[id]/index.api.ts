import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { getMostFrequentStringInArray } from '@/utils/get-most-frequent-string-in-array'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.id)

  const prismaUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (!prismaUser) {
    return res.status(404).send({ message: 'User not found' })
  }

  const pagesReadCount = prismaUser.ratings.reduce((acc, rating) => {
    return acc + rating.book.total_pages
  }, 0)

  const booksRatedCount = prismaUser.ratings.length

  const authorsRead = prismaUser.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }

    return acc
  }, [] as string[])

  const authorsReadCount = authorsRead.length

  const categoriesOnRatingsBooks = prismaUser.ratings.reduce((acc, rating) => {
    rating.book.categories.forEach((category) => {
      acc.push(category.category.name)
    })

    return acc
  }, [] as string[])

  const mostReadCategory = getMostFrequentStringInArray(
    categoriesOnRatingsBooks,
  )

  const user = {
    name: prismaUser.name,
    avatarUrl: prismaUser.avatar_url,
    memberSince: prismaUser.created_at,
    metrics: {
      pagesReadCount,
      booksRatedCount,
      authorsReadCount,
      mostReadCategory,
    },
  }

  return res.send({
    user,
  })
}
