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

  // gets user from prisma
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

  // calculates pages read amount
  const pagesReadCount = prismaUser.ratings.reduce((acc, rating) => {
    return acc + rating.book.total_pages
  }, 0)

  // gets books read amount
  const booksRatedCount = prismaUser.ratings.length

  // gets an array of all authors read
  const authorsRead = prismaUser.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }

    return acc
  }, [] as string[])

  // gets amount of authors read
  const authorsReadCount = authorsRead.length

  // gets all categories read (includes repeated categories)
  const categoriesOnRatingsBooks = prismaUser.ratings.reduce((acc, rating) => {
    rating.book.categories.forEach((category) => {
      acc.push(category.category.name)
    })

    return acc
  }, [] as string[])

  // gets the most read category in the array of categories read
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
    ratings: prismaUser.ratings.map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        createdAt: rating.created_at,
        book: {
          author: rating.book.author,
          name: rating.book.name,
          coverUrl: rating.book.cover_url,
        },
      }
    }),
  }

  return res.send({
    user,
  })
}
