import { render, screen } from '@testing-library/react'
import { Button } from 'shared'

describe('Button', () => {
  test('testBtn', () => {
    render(<Button>TestBTN</Button>)
    expect(screen.getByText('TestBTN')).toBeInTheDocument()
  })
})
