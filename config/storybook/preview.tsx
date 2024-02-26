import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/storybook/StyleDecorator/StyleDecorator'
import '../../src/app/styles/index.scss'
import { RouterDecorator } from 'shared/storybook/RouterDecorator/RouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    StyleDecorator, RouterDecorator
  ]

}

export default preview
