import React, { Suspense, type ErrorInfo } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
}
type ErrorBoundaryRender = string | number | boolean | Iterable<React.ReactNode> | JSX.Element
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render (): ErrorBoundaryRender {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=""><PageError/></Suspense>
    }

    return this.props.children
  }
}

export default ErrorBoundary
