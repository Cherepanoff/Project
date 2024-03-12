import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ThemeButton } from './Button'
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
export const OutlineM: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.M

  }
}
export const OutlineL: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
  }
}
export const OutlineXL: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
  }
}
export const SquareM: Story = {
  args: {
    children: '1',
    square: true,
    size: ButtonSize.M

  },
}
export const SquareL: Story = {
  args: {
    children: '1',
    square: true,
    size: ButtonSize.L

  },
}
export const SquareXL: Story = {
  args: {
    children: '1',
    square: true,
    size: ButtonSize.XL

  },
}

