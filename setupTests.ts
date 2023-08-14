// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import { server } from './src/api/mocks/setupServer';
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-test-id',
  asyncUtilTimeout: 5000,
});

// MSW Server Boot
beforeAll(() => {
  server.listen();
});

afterEach(async () => {
  await new Promise(requestAnimationFrame);
});

afterAll(() => {
  server.close();
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
});

Object.defineProperty(window, 'open', {
  writable: false,
  value: jest.fn(),
});

window.URL.createObjectURL = () => 'example.pdf';

jest.setTimeout(30000);

window.HTMLElement.prototype.scrollIntoView = function () {};
