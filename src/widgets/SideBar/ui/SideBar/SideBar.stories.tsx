import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'widgets/SideBar',
  component: SideBar,
  tags: ['autodocs']
} satisfies Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof meta>

export const SideBarLight: Story = {
}
export const SideBarDark: Story = {
  decorators: [ThemeDecorator]
}
