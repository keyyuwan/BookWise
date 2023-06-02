import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const q = String(req.query.q)
  const query = q ?? ''

  const prismaBooks = await prisma.book.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          author: {
            contains: query,
          },
        },
      ],
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
