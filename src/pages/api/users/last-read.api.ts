import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { prisma } from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const rating = await prisma.rating.findFirst({
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 1,
    include: {
      book: true,
    },
  })

  if (!rating) {
    return res.status(400).end()
  }

  const lastRating = {
    createdAt: rating?.created_at,
    rate: rating.rate,
    description: rating.description,
    book: {
      coverUrl: rating.book.cover_url,
      author: rating.book.author,
      name: rating.book.name,
    },
  }

  return res.send({
    lastRating,
  })
}
