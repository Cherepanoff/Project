import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const ThemeSwitcherLight: Story = {
}
export const ThemeSwitcherDark: Story = {
  decorators: [ThemeDecorator]
}
