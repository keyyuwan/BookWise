import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { prisma } from '@/lib/prisma'
import { authOptions } from '@/pages/api/auth/[...nextauth].api'

interface BodyRequest {
  evaluatorId: string
  description: string
  rate: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const bookId = String(req.query.bookId)
  const { evaluatorId, description, rate } = req.body as BodyRequest

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  })

  if (!book) {
    return res.status(404).send({ message: 'Book not found.' })
  }

  const user = await prisma.user.findUnique({
    where: {
      id: evaluatorId,
    },
  })

  if (!user) {
    return res.status(400).send({ message: 'User not found.' })
  }

  await prisma.rating.create({
    data: {
      book_id: bookId,
      user_id: user.id,
      description,
      rate,
    },
  })

  return res.status(201).end()
}
