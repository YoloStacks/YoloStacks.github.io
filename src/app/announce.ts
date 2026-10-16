/**
 * Accessible announcement dispatcher for assistive technologies (screen readers)
 */
export function announce(message: string) {
  if (typeof document === 'undefined') return;
  const container = document.getElementById('sr-announcements');
  if (!container) return;
  container.textContent = '';
  setTimeout(() => {
    container.textContent = message;
  }, 50);
}
