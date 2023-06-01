import { Check, X } from 'phosphor-react'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { api } from '@/lib/api'
import { queryClient } from '@/lib/react-query'
import { Avatar } from '@/components/Avatar'
import { RatingStars } from '@/components/RatingStars'
import {
  BookRatingFormContainer,
  BookRatingFormFooter,
  BookRatingFormHeader,
  BookRatingFormTextareaContainer,
  FormErrorMessage,
} from './styles'

const rateBookFormSchema = z.object({
  description: z
    .string()
    .min(1, { message: 'Descrição é obrigatória.' })
    .max(450, { message: 'Máximo de 450 caracteres.' }),
  rate: z.number().min(1, { message: 'Dê uma nota ao livro.' }).max(5),
})

type RateBookFormData = z.infer<typeof rateBookFormSchema>

interface BookRatingFormProps {
  onClose: () => void
  bookId: string
}

export function BookRatingForm({ onClose, bookId }: BookRatingFormProps) {
  const { data: session } = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    watch,
  } = useForm<RateBookFormData>({
    resolver: zodResolver(rateBookFormSchema),
    defaultValues: {
      description: '',
      rate: 0,
    },
  })

  const description = watch('description')

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: RateBookFormData) => {
      try {
        await api.post(`/books/rate/${bookId}`, {
          evaluatorId: session?.user.id,
          description: data.description,
          rate: data.rate,
        })

        onClose()

        window.alert('Avaliação enviada.')
      } catch (err) {
        console.log(err)
        window.alert('Não foi possível enviar sua avaliação.')
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['book', bookId])
    },
  })

  async function handleSubmitRating(data: RateBookFormData) {
    await mutateAsync(data)
  }

  return (
    <BookRatingFormContainer onSubmit={handleSubmit(handleSubmitRating)}>
      <BookRatingFormHeader>
        <div className="user">
          <Avatar src="https://github.com/keyyuwan.png" alt="" size="medium" />
          <strong>Key Yu Wan</strong>
        </div>

        <Controller
          control={control}
          name="rate"
          render={({ field }) => {
            return <RatingStars value={field.value} onChange={field.onChange} />
          }}
        />
      </BookRatingFormHeader>

      <BookRatingFormTextareaContainer>
        <textarea
          placeholder="Escreva sua avaliação"
          {...register('description')}
        />
        <span>{description.length}/450</span>
      </BookRatingFormTextareaContainer>

      {errors.description && (
        <FormErrorMessage>{errors.description.message}</FormErrorMessage>
      )}

      {errors.rate && (
        <FormErrorMessage>{errors.rate.message}</FormErrorMessage>
      )}

      <BookRatingFormFooter>
        <button type="button" onClick={onClose}>
          <X size={24} color="#8381D9" />
        </button>
        <button type="submit" disabled={isSubmitting || isLoading}>
          <Check size={24} color="#50B2C0" />
        </button>
      </BookRatingFormFooter>
    </BookRatingFormContainer>
  )
}
