import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = String(req.query.categoryId)

  const prismaBooks = await prisma.book.findMany({
    where:
      categoryId === 'all'
        ? undefined
        : {
            categories: {
              some: {
                categoryId,
              },
            },
          },

    include: {
      ratings: {
        include: {
          user: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  })

  const books = prismaBooks.map((book) => {
    let bookRateSum = 0

    book.ratings.forEach((rating) => {
      bookRateSum += rating.rate
    })

    return {
      id: book.id,
      name: book.name,
      author: book.author,
      coverUrl: book.cover_url,
      averageRate: bookRateSum / book.ratings.length,
      ratings: book.ratings,
    }
  })

  return res.send({
    books,
  })
}
