import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  )
}