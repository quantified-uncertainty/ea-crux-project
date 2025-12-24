/**
 * PageStatus Component
 *
 * Displays editorial metadata for knowledge base pages including:
 * - Quality rating (1-5 stars)
 * - LLM summary (short explanation)
 * - Last edited date
 * - Optional todo/notes
 *
 * Supports dev-only mode: only shows when ?dev=true in URL or in development
 */

import React, { useState, useEffect } from 'react';

interface PageStatusProps {
  quality?: 1 | 2 | 3 | 4 | 5;
  llmSummary?: string;
  lastEdited?: string;
  todo?: string;
  /** If true, only show in dev mode (URL has ?dev=true) */
  devOnly?: boolean;
}

const qualityLabels: Record<number, string> = {
  1: 'Stub',
  2: 'Draft',
  3: 'Needs Work',
  4: 'Good',
  5: 'Comprehensive',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="page-status-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`page-status-star ${star <= rating ? 'page-status-star--filled' : 'page-status-star--empty'}`}
        >
          ★
        </span>
      ))}
      <span className="page-status-quality-label">({qualityLabels[rating]})</span>
    </span>
  );
}

function useDevMode(): boolean {
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Check URL param
    const params = new URLSearchParams(window.location.search);
    const devParam = params.get('dev');
    // Check localStorage for persistent dev mode
    const storedDev = localStorage.getItem('pageStatusDevMode');

    let devModeActive = false;

    if (devParam === 'true') {
      devModeActive = true;
      localStorage.setItem('pageStatusDevMode', 'true');
    } else if (devParam === 'false') {
      devModeActive = false;
      localStorage.removeItem('pageStatusDevMode');
    } else if (storedDev === 'true') {
      devModeActive = true;
    }

    setIsDevMode(devModeActive);

    // Update root class for sidebar badges and other dev-mode styles
    if (devModeActive) {
      document.documentElement.classList.add('page-status-dev-mode');
    } else {
      document.documentElement.classList.remove('page-status-dev-mode');
    }
  }, []);

  return isDevMode;
}

export function PageStatus({ quality, llmSummary, lastEdited, todo, devOnly = false }: PageStatusProps) {
  const isDevMode = useDevMode();

  // Don't render if no metadata provided
  if (!quality && !llmSummary && !lastEdited && !todo) {
    return null;
  }

  // In devOnly mode, only render if dev mode is active
  if (devOnly && !isDevMode) {
    return null;
  }

  return (
    <div className="page-status">
      <div className="page-status-header">
        <span className="page-status-icon">📋</span>
        <span className="page-status-title">Page Status</span>
      </div>

      <div className="page-status-content">
        {quality && (
          <div className="page-status-row">
            <span className="page-status-label">Quality:</span>
            <StarRating rating={quality} />
          </div>
        )}

        {lastEdited && (
          <div className="page-status-row">
            <span className="page-status-label">Last edited:</span>
            <span className="page-status-value">{lastEdited}</span>
          </div>
        )}

        {llmSummary && (
          <div className="page-status-row page-status-row--full">
            <span className="page-status-label">LLM Summary:</span>
            <span className="page-status-summary">{llmSummary}</span>
          </div>
        )}

        {todo && (
          <div className="page-status-row page-status-row--todo">
            <span className="page-status-label">Todo:</span>
            <span className="page-status-todo">{todo}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageStatus;
