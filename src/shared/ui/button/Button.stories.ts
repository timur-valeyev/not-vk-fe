import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { Button } from 'shared'
import { ThemeDecorator } from 'shared/config/decorators/storybook/ThemeDecorator'
import { ButtonVariant } from 'shared/ui/button/types'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'primary',
    variant: ButtonVariant.PRIMARY
  }
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: ButtonVariant.SECONDARY
  }
}
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)]
