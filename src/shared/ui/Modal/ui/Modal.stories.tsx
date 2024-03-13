import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text',
    isOpen: true
  }
}
