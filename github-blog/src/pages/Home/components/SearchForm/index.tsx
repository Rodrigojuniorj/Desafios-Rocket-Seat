import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormaSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormaSchema>

export function SearchForm() {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormaSchema),
  })

  return (
    <SearchFormContainer >
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
