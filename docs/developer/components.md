# Component Documentation

This document provides detailed information about the key components in the Risk-Reward Simulator application.

## Table of Contents

- [Layout Components](#layout-components)
  - [ClientLayout](#clientlayout)
  - [Header](#header)
- [Simulator Components](#simulator-components)
  - [RiskRewardSimulator](#riskrewardsimulator)
  - [RiskRewardFullTool](#riskrewardfulltool)
- [Dashboard Components](#dashboard-components)
- [Education Components](#education-components)
- [Authentication Components](#authentication-components)

---

## Layout Components

### ClientLayout

**File Path**: `src/components/ClientLayout.tsx`

**Description**: The main layout wrapper for client-side rendered pages. It includes the header, footer, and main content area.

**Props**:
```typescript
interface ClientLayoutProps {
  children: React.ReactNode;
}
```

**Example Usage**:
```tsx
<ClientLayout>
  <YourPageContent />
</ClientLayout>
```

### Header

**File Path**: `src/components/layout/Header.tsx`

**Description**: The site navigation header with responsive mobile menu.

**Key Features**:
- Responsive design with mobile menu
- Navigation links
- Auth-aware display (login/signup or user profile based on auth status)

---

## Simulator Components

### RiskRewardSimulator

**File Path**: `src/components/simulator/RiskRewardSimulator.tsx`

**Description**: The basic simulator component available to all users. It provides a simplified gambling simulation experience with limited features to encourage signup.

**Props**:
```typescript
type SimulatorProps = {
  initialBalance?: number;
  targetBalance?: number;
};
```

**State**:
- `currentBalance`: The user's current simulation balance
- `riskScore`: A calculated score representing the user's risk level
- `betAmount`: The amount the user wants to bet
- `gameHistory`: Array of past bets and results
- `showProFeaturePrompt`: Controls visibility of the signup prompt modal

**Key Methods**:
- `handleBet()`: Processes the betting action
- `resetGame()`: Resets the simulator to initial state
- `handleAdvancedEventSelection()`: Shows pro feature prompt for event types
- `handleAdvancedAnalytics()`: Shows pro feature prompt for analytics

### RiskRewardFullTool

**File Path**: `src/components/simulator/RiskRewardFullTool.tsx`

**Description**: The professional version of the simulator with advanced features, accessible only to registered users.

**State**:
- `currentBalance`: The user's current simulation balance
- `riskScore`: A calculated score representing the user's risk level
- `betAmount`: The amount the user wants to bet
- `betHistory`: Array of past bets and results
- `selectedPersona`: Current user persona based on risk behavior
- `selectedEvent`: Currently selected betting event
- `bettingData`: Historical betting data over time
- `simulationHistory`: Past completed simulation sessions

**Key Features**:
- Advanced event selection with varying risk levels
- Real-time risk score calculation
- Persona-based behavioral analysis
- Historical trends and analytics
- Session history tracking

---

## Dashboard Components

**File Path**: `src/app/dashboard/page.tsx`

**Description**: Analytics dashboard displaying user betting patterns and history.

**Key Components**:
- Statistics cards showing win rate, profit, risk score, etc.
- Interactive charts for balance history, risk score, win rates
- Session history table
- Behavioral analysis and recommendations

**Data Visualization**:
- `renderBalanceChart()`: Displays balance over time
- `renderRiskChart()`: Shows risk score fluctuations
- `renderWinRateChart()`: Visualizes win rate by session

---

## Education Components

The application includes several educational content pages:

### Risk Management

**File Path**: `src/app/education/risk-management/page.tsx`

**Description**: Educational content about gambling risk management strategies.

### Event Selection

**File Path**: `src/app/education/event-selection/page.tsx`

**Description**: Information about different betting events and selection strategies.

### Session Planning

**File Path**: `src/app/education/session-planning/page.tsx`

**Description**: Guidelines for planning gambling sessions to maintain control.

---

## Authentication Components

### Signup Page

**File Path**: `src/app/signup/page.tsx`

**Description**: User registration page with form validation.

**Form Fields**:
- First Name
- Last Name
- Email
- Password
- Terms acceptance

**Features**:
- Form validation
- Benefits section explaining advantages of signing up
- Link to login for existing users 