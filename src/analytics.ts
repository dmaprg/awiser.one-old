const measurementId = 'G-JVW9FKW0QF'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackPage(path: string) {
  window.gtag?.('config', measurementId, { page_path: path })
}
