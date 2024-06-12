import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from '@testing-library/user-event'

// funcao que nao tem nenhum comportamento mas que garante que chegou em algum lugar
const onPageChangeCallback = vi.fn()
// resetar a cada teste
beforeEach(() => {
  onPageChangeCallback.mockClear()
})
describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render( 
     <Pagination 
      pageIndex={0}
      totalCount={200}
      perPage={10}
      onPageChange={() => {}}
     />
    )
    //  expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    // realiza eventos como um usuario, ex cliques, digitacao:
    const user = userEvent.setup()

    const wrapper = render( 
     <Pagination 
      pageIndex={0}
      totalCount={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
     />
    )
    // buscando um elemento button onde o conteudo dele tenha texto...
    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    // simulando clique no button (é uma promise)
    await user.click(nextPageButton)

    // eu espero que essa funcao tenha sido chamado com o parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    // realiza eventos como um usuario, ex cliques, digitacao:
    const user = userEvent.setup()

    const wrapper = render( 
     <Pagination 
      pageIndex={5}
      totalCount={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
     />
    )
    // buscando um elemento button onde o conteudo dele tenha texto...
    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    // simulando clique no button (é uma promise)
    await user.click(nextPageButton)

    // eu espero que essa funcao tenha sido chamado com o parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    // realiza eventos como um usuario, ex cliques, digitacao:
    const user = userEvent.setup()

    const wrapper = render( 
     <Pagination 
      pageIndex={5}
      totalCount={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
     />
    )
    // buscando um elemento button onde o conteudo dele tenha texto...
    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    // simulando clique no button (é uma promise)
    await user.click(nextPageButton)

    // eu espero que essa funcao tenha sido chamado com o parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    // realiza eventos como um usuario, ex cliques, digitacao:
    const user = userEvent.setup()

    const wrapper = render( 
     <Pagination 
      pageIndex={0}
      totalCount={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
     />
    )
    // buscando um elemento button onde o conteudo dele tenha texto...
    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    // simulando clique no button (é uma promise)
    await user.click(nextPageButton)

    // eu espero que essa funcao tenha sido chamado com o parametro 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})