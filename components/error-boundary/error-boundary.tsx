'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryState {
  errorMessage: string;
}
class ErrorBoundary extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public state: ErrorBoundaryState = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { errorMessage: error.message };
  }

  render() {
    if (this.state.errorMessage) {
      console.log('this.state.hasError', this.state.errorMessage);
      return (
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="rounded-xl bg-gray p-8 text-center">
            <strong>Unable to render the component.</strong>
            <pre>{this.state.errorMessage}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
