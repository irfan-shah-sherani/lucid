'use client'; // Error components MUST be Client Components

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service (e.g., Sentry, LogRocket)
    console.error('Application Error Logged:', error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-200 font-sans flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-neutral-900 border border-red-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/20 text-center">
        
        {/* Animated Warning Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6 animate-pulse">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              path="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Headers */}
        <h1 className="text-xl font-black tracking-wider text-white uppercase mb-2">
          Runtime Crash [400_ERR]
        </h1>
        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          The application execution shell encountered an unexpected fatal error. The current state has been dumped safely.
        </p>

        {/* Collapsible Error Code / Digest Details */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 mb-6 font-mono text-xs text-left overflow-x-auto text-red-400 max-h-24">
          <span className="text-neutral-500 block font-sans font-bold uppercase tracking-widest text-[9px] mb-1">
            System Message
          </span>
          {error.message || 'Unknown runtime compilation failure.'}
          {error.digest && (
            <div className="mt-2 text-neutral-500 text-[10px]">
              ID: <span className="text-neutral-400 select-all">{error.digest}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 py-3 px-4 text-xs font-bold bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white rounded-xl transition duration-150 tracking-widest uppercase shadow-lg shadow-red-600/10"
          >
            [ Reset Segment ]
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 py-3 px-4 text-xs font-bold bg-neutral-800 hover:bg-neutral-700 active:scale-[0.99] text-neutral-300 rounded-xl transition duration-150 tracking-widest uppercase border border-neutral-700"
          >
            Hard Reload
          </button>
        </div>

        {/* Footer Brand linking back to app context */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-center gap-2">
          <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
            Secure Core Environment
          </span>
        </div>
      </div>
    </div>
  );
}   