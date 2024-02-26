import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}
export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  },
  decorators: [ThemeDecorator]
}
export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ThemeDecorator]
}
