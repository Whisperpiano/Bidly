# Test Documentation for Bidlify

This document describes the implementation of automated tests for Bidlify, an auction platform developed with React, TypeScript, Vite, React Router, Tailwind CSS, and Zustand.

## Testing Strategy

Automated tests have been implemented using [Vitest](https://vitest.dev/), a fast and lightweight testing framework compatible with Vite. The choice of Vitest is based on:

- Native compatibility with Vite
- Syntax similar to Jest, widely known
- Excellent performance in development environments
- Support for TypeScript without additional configuration

## Test Structure

Tests are organized under the `src/test/` directory following a structure that mirrors the source code structure:

```
src/test/
│── components/               # Tests for React components
│   │── elements/            # Basic components (Button, Badge, etc.)
│   └── grid/                # Complex components (GridItemCard, etc.)
│── utils/                   # Tests for utility functions
│   │── formatDateFromISO.test.ts
│   │── formatNumber.test.ts
│   │── sortListings.test.ts
│   │── transformDuration.test.ts
│   └── AuthGuard.test.ts
│── mocks/                   # Mocks for tests
│   └── handlers.ts         # Handlers for MSW (if implemented)
│── types/                   # Testing-specific types
│   └── vitest.d.ts
└── setup.ts                 # Global setup for Vitest
```

## Types of Tests Implemented

### 1. Unit Tests for Functions

Tests have been implemented for the following utility functions:

- `formatDateFromISO`: Formats ISO dates into a readable format
- `formatNumber`: Formats numbers to display K, M, etc.
- `sortListings`: Sorts listings according to different criteria
- `transformDuration`: Transforms a duration into a future date
- `AuthGuard`: Verifies if a user is authenticated

### 2. Component Tests

Tests have been implemented for the following components:

- `Button`: Basic button component with different styles
- `Badge`: Component to display tags with different styles
- `GridItemCard`: Card component to display listings

## Configuration

### Installed Dependencies

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Vitest Configuration in `vite.config.ts`

```typescript
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    reporters: ['verbose'],
    passWithNoTests: false,
    isolate: true
  }
});
```

### Configuration in `setup.ts`

```typescript
import '@testing-library/jest-dom';
import { vi, expect } from 'vitest';

// Extend expect matchers
expect.extend({
  toBeInTheDocument: (received) => {
    const pass = received !== null && received !== undefined;
    return {
      pass,
      message: () => `expected ${received} to be in the document`,
    };
  },
  // ... other custom matchers
});

// LocalStorage Mock
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Global configuration to silence warnings
vi.spyOn(console, 'warn').mockImplementation(() => {});
vi.spyOn(console, 'error').mockImplementation(() => {});

// Configure global localStorage
global.localStorage = localStorageMock;
```

## Test Scripts

The following scripts have been configured in `package.json`:

```json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run",
  "coverage": "vitest run --coverage"
}
```

## How to Run Tests

- To run tests in watch mode (development): `npm test`
- To run tests once: `npm run test:run`
- To generate a coverage report: `npm run coverage`

## Test Examples

### Component Test Example (Button)

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/elements/Button';

describe('Button Component', () => {
  it('renders with primary style by default', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-purple-600');
  });

  it('calls handleClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Utility Test Example (formatNumber)

```typescript
import { describe, it, expect } from 'vitest';
import { formatNumber } from '../../utils/formatNumber';

describe('formatNumber', () => {
  it('should return the number as is when less than 1000', () => {
    expect(formatNumber(999)).toBe('999');
    expect(formatNumber(0)).toBe('0');
    expect(formatNumber(1)).toBe('1');
  });

  it('should format thousands with K suffix and one decimal place', () => {
    expect(formatNumber(1000)).toBe('1.0K');
    expect(formatNumber(1500)).toBe('1.5K');
    expect(formatNumber(10500)).toBe('10.5K');
  });
});
```

### Complex Component Test Example (GridItemCard)

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import GridItemCard from '../../../components/grid/GridItemCard';

// Mock for navigate
const mockNavigate = vi.fn();

// Mock for handleLoginOpen
const mockHandleLoginOpen = vi.fn();

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Link: ({ children, to }: { children: React.ReactNode, to: string }) => <a href={to}>{children}</a>
}));

// Mock for authentication state
vi.mock('../../../utils/AuthGuard', () => ({
  AuthGuard: () => false // Default: user not logged in
}));

// Mock for modalStore
vi.mock('../../../store/modalStore', () => ({
  useModalStore: () => ({
    handleLoginOpen: mockHandleLoginOpen
  })
}));

describe('GridItemCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(
      <GridItemCard item={mockItem} />
    );
    
    // Verify that the item title is displayed correctly
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});
```

## Best Practices Implemented

1. **Mocking external dependencies**: Mocks have been created for React Router, Zustand, and other dependencies.
2. **Test isolation**: Each test is isolated and does not depend on the result of other tests.
3. **Cleanup after each test**: Mocks are restored after each test with `vi.clearAllMocks()`.
4. **Descriptive names**: Tests have descriptive names that clearly indicate what is being tested.
5. **Structured organization**: The test folder structure mirrors the source code structure.

## Challenges and Solutions

### Challenge 1: Mocking Zustand Stores

Zustand stores with selectors required special handling in tests. The solution implemented was to mock the store with a function that returns the necessary state and actions:

```typescript
vi.mock('../../../store/modalStore', () => ({
  useModalStore: (selector) => {
    // Create a mock state with only what's needed
    const state = {
      handleLoginOpen: mockHandleLoginOpen,
    };
    // Apply the selector to the mock state if it's a function
    if (typeof selector === 'function') {
      return selector(state);
    }
    return state;
  },
}));
```

### Challenge 2: Mocking React Router

The solution for React Router was to import the actual module and only override the specific functions needed:

```typescript
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  Link: ({ children, to }) => <a href={to}>{children}</a>
}));
```

## Next Steps

1. Implement integration tests with MSW (Mock Service Worker) to simulate API requests.
2. Increase test coverage for more application components.
3. Implement end-to-end (E2E) tests with Playwright or Cypress.
4. Configure GitHub Actions to run tests automatically on each push.

## Useful Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
