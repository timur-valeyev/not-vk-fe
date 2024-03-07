import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/decorators/storybook/ThemeDecorator'

const preview: Preview = {
  decorators: [(Story) => <Story />, ThemeDecorator(Theme.LIGHT)],
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
