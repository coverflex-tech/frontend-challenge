# Coverflex Frontend Challenge

Hello!

During this code interview, you will be working on a universal React application with us.

The session lasts one hour, with the last 15 minutes reserved for questions from both sides.

This challenge helps us understand how you reason through frontend problems, collaborate in real time, and make technical decisions under realistic constraints.

## Technologies

- **Expo**
- **React Native** + **React Native Web**
- **TypeScript**
- **Node.js**
- **pnpm**
- **Fetch API** or **Axios**
- **Jest** with **@testing-library/react-native**
- **Git**
- **Live Share plugin for VSCode**

## Preparation

- Install Node.js (LTS recommended) and `pnpm`.
- Install dependencies and verify setup:
  - `pnpm install`
  - `pnpm validate`
- During the interview, we will pair program. Please make sure your environment is ready before the call.

## Running the project

- `pnpm start` to start Expo dev tools
- `pnpm web` to run in the browser
- `pnpm android` to run on Android
- `pnpm ios` to run on iOS

## Routing scaffold

This starter uses `expo-router` with an `app/` directory:

- `app/(tabs)/index.tsx` for the Home/List screen
- `app/(tabs)/saved.tsx` for the Saved tab
- `app/benefits/[id].tsx` for benefit detail

The Saved tab is intentionally scaffolded without state management so candidates can discuss and implement their preferred approach during the interview.

## Challenge Context

This branch focuses on **benefits management** in a universal app setup.

The challenge keeps the same interview flow:

1. Fetch benefit data from an API endpoint.
2. Build or extend a component that renders that data.
3. Manipulate data (for example filter/sort/group) and reflect it in the UI.
4. Discuss and implement a state-management approach for saving benefits across screens.
5. Add tests to verify expected behavior.

### Included scaffold

- Domain types and mock objects:
  - `src/domain/benefits/types.ts`
  - `src/domain/benefits/mockBenefits.ts`
  - `src/domain/benefits/mockUsers.ts`
- API contracts and endpoint helpers:
  - `src/api/contracts.ts`
  - `src/api/endpoints.ts`

Candidates can decide how to integrate data during the interview (`fetch`, another client, or local adapter).

## Notes

- The starter intentionally includes TODOs and a simple baseline UI.
- The starter includes tab navigation (`Home`, `Saved`) plus a detail route.
- The challenge logic is intentionally not pre-solved.
