import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs']
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
}
export const PageErrorDark: Story = {
  decorators: [ThemeDecorator]
}
