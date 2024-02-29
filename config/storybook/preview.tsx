import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'

const preview: Preview = {
  decorators: [(Story) => <Story />],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
