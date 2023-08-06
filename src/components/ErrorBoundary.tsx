import { Component, ErrorInfo, ReactElement } from "react";

class ErrorBoundary extends Component<{
  children: ReactElement;
  errorComponent: ReactElement;
}> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    //send error to errors tracking services like TrackJS or NewRelic
    console.error("ErrorBoundary caught an error ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
