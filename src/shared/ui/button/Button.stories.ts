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

export const PrimaryLight: Story = {
  args: {
    children: 'primary',
    variant: ButtonVariant.PRIMARY
  }
}
export const PrimaryDark: Story = {
  args: {
    children: 'primary',
    variant: ButtonVariant.PRIMARY
  }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: ButtonVariant.SECONDARY
  }
}
export const SecondaryDark: Story = {
  args: {
    children: 'secondary',
    variant: ButtonVariant.SECONDARY
  }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
