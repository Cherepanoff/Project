import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {
}
export const NavbarDark: Story = {
  decorators: [ThemeDecorator]
}
