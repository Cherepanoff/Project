import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/storybook/StyleDecorator/StyleDecorator'
import '../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
    // themes: {
    //   default: 'light',
    //   list: [
    //     { name: 'light' },
    //     { name: 'dark', class: 'app.dark' }
    //   ]
    // }
  },
  decorators: [
    StyleDecorator
  ]

}

export default preview
