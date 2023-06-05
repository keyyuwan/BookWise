import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const prismaRatings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },

    include: {
      book: true,
      user: true,
    },
  })

  const recentRatings = prismaRatings.map((rating) => {
    return {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      createdAt: rating.created_at,
      book: {
        coverUrl: rating.book.cover_url,
        name: rating.book.name,
        author: rating.book.author,
      },
      user: {
        avatarUrl: rating.user.avatar_url,
        name: rating.user.name,
      },
    }
  })

  return res.send({
    recentRatings,
  })
}
