import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.id)

  const prismaBook = await prisma.book.findUnique({
    where: {
      id: bookId,
    },

    include: {
      ratings: {
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: {
            select: {
              name: true,
              avatar_url: true,
              id: true,
            },
          },
        },
      },

      categories: {
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  if (!prismaBook) {
    return res.status(404).send({ message: 'Book not found.' })
  }

  const ratings = prismaBook.ratings.map((rating) => {
    return {
      id: rating.id,
      description: rating.description,
      createdAt: rating.created_at,
      rate: rating.rate,
      user: {
        name: rating.user.name,
        avatarUrl: rating.user.avatar_url,
        id: rating.user.id,
      },
    }
  })

  const rateSum = ratings.reduce((acc, rating) => {
    return acc + rating.rate
  }, 0)

  const book = {
    id: prismaBook.id,
    name: prismaBook.name,
    author: prismaBook.author,
    coverUrl: prismaBook.cover_url,
    totalPages: prismaBook.total_pages,
    categories: prismaBook.categories,
    ratings,
    averageRate: rateSum / ratings.length,
    ratingsCount: ratings.length,
  }

  return res.send({
    book,
  })
}
