# Developer Documentation

## Project Overview

The Risk-Reward Simulator is a Next.js application built with TypeScript and Tailwind CSS. This documentation provides technical details for developers working on the project.

## Tech Stack

- **Frontend Framework**: Next.js 13+
- **Language**: TypeScript 4.9+
- **Styling**: Tailwind CSS 3.3+
- **State Management**: React Context + Hooks
- **Authentication**: NextAuth.js
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Build Tool**: Webpack (via Next.js)

## Project Structure

```
src/
├── app/                    # Next.js 13 app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── simulator/         # Simulator pages
│   ├── education/         # Educational content
│   └── dashboard/         # Analytics dashboard
├── components/            # Reusable components
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   ├── simulator/        # Simulator-specific components
│   └── analytics/        # Analytics components
│       ├── AnalyticsDashboard.tsx       # Basic analytics dashboard
│       ├── RealTimeAnalyticsDashboard.tsx # Enhanced real-time analytics
│       └── [Other analytics components]
├── lib/                   # Utility functions and helpers
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
│   ├── auth.ts           # Authentication utilities
│   ├── analyticsUtils.ts # Analytics processing utilities
│   └── [Other utility files]
└── styles/               # Global styles and Tailwind config
```

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/hpkushal/AI-SITE-Responsible-Gambling.git
cd AI-SITE-Responsible-Gambling
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

## Component Architecture

### Base Components

```typescript
// components/common/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  disabled
}) => {
  // Component implementation
};
```

### Layout Components

```typescript
// components/layout/Header.tsx
interface HeaderProps {
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogout
}) => {
  // Component implementation
};
```

## State Management

### Context Setup

```typescript
// lib/context/SimulatorContext.tsx
interface SimulatorState {
  balance: number;
  bets: Bet[];
  riskScore: number;
}

const SimulatorContext = createContext<{
  state: SimulatorState;
  dispatch: React.Dispatch<SimulatorAction>;
}>({
  state: initialState,
  dispatch: () => null
});

export const SimulatorProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(simulatorReducer, initialState);
  
  return (
    <SimulatorContext.Provider value={{ state, dispatch }}>
      {children}
    </SimulatorContext.Provider>
  );
};
```

## Real-Time Analytics

The application includes enhanced real-time analytics capabilities to provide users with comprehensive insights into their gambling behavior.

### Analytics Utilities

```typescript
// utils/analyticsUtils.ts
export type GameEvent = {
  timestamp: number;
  gameType: string;
  betAmount: number;
  result: 'win' | 'loss';
  payout: number;
  balanceChange: number;
  multiplier: number;
  bankrollPercentage: number;
  responseTime?: number;
};

export type AnalyticsSnapshot = {
  // Financial metrics
  netProfit: number;
  roi: number;
  winRate: number;
  // ...other metrics
  
  // Overall assessment
  responsibleGamblingScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  
  // Detected patterns
  detectedPatterns: Array<{
    id: string;
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    recommendation: string;
  }>;
};

// Hook for real-time analytics
export const useRealTimeAnalytics = (
  gameHistory: Array<GameEvent>,
  currentBalance: number,
  initialBalance: number
): AnalyticsSnapshot => {
  // Implementation details
};
```

### Data Conversion

When integrating with existing components, game history data often needs conversion:

```typescript
// Example from RiskRewardSimulator.tsx
const convertGameHistory = (history: Array<{ 
  type: string; 
  amount: number; 
  result: string; 
  balanceChange: number;
  multiplier: number;
}>): Array<GameEvent> => {
  return history.map((bet, index) => {
    const timestamp = Date.now() - (history.length - index) * 60000;
    return {
      timestamp,
      gameType: bet.type,
      betAmount: bet.amount,
      result: bet.result as 'win' | 'loss',
      // ...other properties
    };
  });
};
```

### Analytics Components

The real-time analytics dashboard is composed of several sub-components:

- `RiskLevel`: Visual indicator for different risk levels
- `Metric`: Displays various metrics with trend indicators
- `PatternCard`: Shows detected patterns with severity and recommendations

These components work together to provide a comprehensive view of gambling behavior that updates in real-time as users interact with the simulator.

## API Integration

### API Client

```typescript
// lib/api/client.ts
export const api = {
  async getBetHistory(userId: string): Promise<Bet[]> {
    const response = await fetch(`/api/bets/${userId}`);
    return response.json();
  },
  
  async updateRiskScore(userId: string, score: number): Promise<void> {
    await fetch(`/api/risk-score/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ score })
    });
  }
};
```

## Authentication

### NextAuth Configuration

```typescript
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Implement authentication logic
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // Customize JWT token
      return token;
    }
  }
});
```

## Testing

### Component Testing

```typescript
// components/__tests__/Button.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../common/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button variant="primary" size="md">
        Click me
      </Button>
    );
    
    expect(getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button variant="primary" size="md" onClick={onClick}>
        Click me
      </Button>
    );
    
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Styling

### Tailwind Configuration

```typescript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
```

## Build and Deployment

### Production Build

```bash
# Create production build
npm run build

# Analyze bundle size
npm run analyze

# Run type checking
npm run type-check
```

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## Performance Optimization

### Code Splitting

```typescript
// app/simulator/page.tsx
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('@/components/Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false
});
```

### Image Optimization

```typescript
// components/common/OptimizedImage.tsx
import Image from 'next/image';

export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    placeholder="blur"
  />
);
```

## Best Practices

1. **Code Organization**
   - Use feature-based folder structure
   - Keep components small and focused
   - Implement proper TypeScript types

2. **Performance**
   - Implement code splitting
   - Optimize images and assets
   - Use proper caching strategies

3. **Security**
   - Validate all user inputs
   - Implement proper authentication
   - Follow OWASP guidelines

4. **Testing**
   - Write unit tests for components
   - Add integration tests for features
   - Maintain good test coverage

## Troubleshooting

### Common Issues

1. **Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

2. **Type Errors**
```bash
# Update TypeScript definitions
npm run type-check
```

3. **Styling Issues**
```bash
# Rebuild Tailwind CSS
npm run build:css
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) 