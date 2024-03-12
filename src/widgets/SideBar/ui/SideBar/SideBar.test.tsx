import { fireEvent, render, screen } from '@testing-library/react'
import { SideBar } from './SideBar'
import { componentRender } from 'shared/tests/componentRender/componentRender'

describe('sidebar', () => {
  test('render sidebar', () => {
    componentRender(<SideBar />)
    expect(screen.getByTestId('SideBar')).toBeInTheDocument()
  })
  test('toggle sidebar', () => {
    componentRender(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('SideBar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('SideBar')).toHaveClass('collapsed')
  })
})
