declare global {
  interface Window {
    gtag?: {
      (command: 'config', targetId: string, config?: Record<string, string | number | boolean | null>): void;
      (command: 'event', eventName: string, config?: Record<string, string | number | boolean | null>): void;
      (command: 'consent', action: string, config?: Record<string, string | number | boolean | null>): void;
    };
  }
}

export {};