import { Component, ErrorInfo, ReactNode } from 'react'
import { PageError } from 'widgets'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: error
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack)
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return <PageError />
    }

    return this.props.children
  }
}
