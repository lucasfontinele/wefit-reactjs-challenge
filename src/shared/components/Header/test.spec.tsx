import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '.'

describe("Header component", () => {
  it("should render header successfully", () => {
    const { getByText, getByTestId } = render(<Header />)

    const header = getByText(/WeMovies/)
    const cart = getByTestId(/cart-testid/)
    const cartLength = getByText(/0 itens/)

    expect(header).toBeInTheDocument()
    expect(header.innerHTML).toBe("WeMovies")
    expect(cart).toBeInTheDocument()
    expect(cartLength.innerHTML).toBe("0 itens")
  })
})