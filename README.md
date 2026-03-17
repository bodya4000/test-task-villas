# Villa Rentals App

A React Native (Expo) app for browsing and viewing villa rental listings. Features a dashboard with villa cards, detail pages with specs and pricing, skeleton loading states, and haptic feedback.

## Project Structure

```
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx         # Root layout
│   ├── index.tsx           # Villa dashboard (home)
│   └── villa/[id].tsx      # Villa detail
├── src/
│   ├── api/                # Data fetching
│   │   ├── data/           # Mock data
│   │   ├── villas.ts       # fetchVillas
│   │   ├── villa.ts        # fetchVillaById
│   │   ├── use-villas.ts   # useVillas hook
│   │   └── use-villa.ts    # useVilla hook
│   ├── components/         # Shared UI
│   │   ├── buttons/        # BackButton, BookButton
│   │   └── pressable-scale.tsx
│   ├── core/               # Config (colors, spacing, layout)
│   ├── screens/            # Screen-specific UI
│   │   ├── villa-dashboard/
│   │   └── villa-detail/
│   └── utils/              # Dimensions, constants
└── assets/                 # Images, videos
```

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- Xcode (iOS) / Android Studio (Android)
- CocoaPods (iOS)

### Install

```bash
yarn install
```

### iOS

```bash
cd ios
pod install
cd ..
npm run ios
```

### Android

```bash
npm run android
```

### Development server

```bash
yarn start
```

## App Preview

[▶ **Watch app demo**](./assets/delivery/demo.mp4) — click to open and play in GitHub
