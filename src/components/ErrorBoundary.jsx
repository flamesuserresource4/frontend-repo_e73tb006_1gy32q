import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You could log to a monitoring service here
    // console.warn('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80">
          <div className="text-center px-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur" />
            <h3 className="text-white font-semibold text-lg">Chargement de la scène 3D indisponible</h3>
            <p className="text-slate-400 text-sm mt-2">Une nébuleuse statique s’affiche en attendant. Veuillez rafraîchir la page.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
