import { Story } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import cn from 'classnames'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={cn('app', theme)}>
    <StoryComponent />
  </div>
)
