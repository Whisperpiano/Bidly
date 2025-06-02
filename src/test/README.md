# Automated Tests for Bidlify

This folder contains the automated tests implemented as an enhancement for the Bidlify project, an auction platform developed with React, TypeScript, and Zustand.

## Structure

- `/components` - Tests for React components (Button, Badge, GridItemCard)
- `/utils` - Tests for utility functions (formatDateFromISO, formatNumber, sortListings, etc.)
- `/mocks` - Mocks for tests (prepared for MSW)
- `/types` - Testing-specific types
- `setup.ts` - Global setup for Vitest

## Tools Used

- **Vitest**: Testing framework compatible with Vite
- **Testing Library**: Library for testing React components
- **jsdom**: DOM environment for tests
- **Jest DOM**: Matcher extensions for DOM

## How to Run Tests

- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with visual UI
- `npm run coverage` - Generate coverage report

## Mocking Strategy

When testing components that use external dependencies:

- **React Router**: Mock `useNavigate`, `Link` and other router components
- **Zustand Stores**: Mock store selectors and actions
- **Authentication**: Use the `AuthGuard` utility for simulating logged-in/logged-out states
