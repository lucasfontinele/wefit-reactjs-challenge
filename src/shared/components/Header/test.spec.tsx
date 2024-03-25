import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { Header } from '.'
import { act } from 'react-dom/test-utils'

describe("Header component", () => {
  it("should render header successfully", () => {
    const { getByText, getByTestId } = render(<Header />)

    const header = getByText(/WeMovies/)
    const cart = getByTestId(/cart-testid/)
    const cartLength = getByText(/0 itens/)

    expect(header).toBeInTheDocument()
    expect(header.innerText).toBe("WeMovies")
    expect(cart).toBeInTheDocument()
    expect(cartLength.innerText).toBe("0 itens")
  })

  it("should not render cart text on responsive layout", () => {
    const { getByTestId } = render(<Header />)

    act(() => {
      window.innerWidth = 500
    })

    const cart = getByTestId(/cart-testid/)

    expect(cart).not.toBeInTheDocument()
  })
})