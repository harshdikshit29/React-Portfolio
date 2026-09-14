import { useState, useCallback } from 'react';

/**
 * Hook for copying text to clipboard with automatic reset timer
 * @param {number} timeoutMs Duration in ms to keep the copied state active
 */
export function useClipboard(timeoutMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text) => {
    if (!text) return false;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), timeoutMs);
      return true;
    } catch (err) {
      console.warn('Failed to copy to clipboard', err);
      return false;
    }
  }, [timeoutMs]);

  return { copied, copy };
}
