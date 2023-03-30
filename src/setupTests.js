import '@testing-library/jest-dom';
import { vi } from 'vitest';

class IntersectionObserver {
  observe = vi.fn();

  disconnect = vi.fn();

  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
