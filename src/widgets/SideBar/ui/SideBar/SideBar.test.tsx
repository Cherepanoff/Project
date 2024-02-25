import { fireEvent, render, screen } from '@testing-library/react'
import { SideBar } from './SideBar'

describe('sidebar', () => {
  test('render sidebar', () => {
    render(<SideBar />)
    expect(screen.getByTestId('SideBar')).toBeInTheDocument()
  })
  test('toggle sidebar', () => {
    render(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('SideBar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('SideBar')).toHaveClass('collapsed')
  })
})
