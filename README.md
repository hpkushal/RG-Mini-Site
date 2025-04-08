bit# Responsible Gambling Website

An educational platform designed to help users understand and develop healthier gambling habits through risk-free simulation, education, and support resources.

## Project Overview

This website aims to help users:
1. Explore their gambling behaviors in a safe environment
2. Understand cognitive biases that affect gambling decisions
3. Learn risk management strategies
4. Access support resources for responsible gambling

## Key Features

- **Virtual Bet Simulator**: A risk-free environment to experience betting mechanics without real money
- **Risk Assessment**: Tools to understand gambling patterns and identify potential risks
- **Educational Resources**: Materials about cognitive biases, financial management, and warning signs
- **Self-Assessment Tools**: Quick questionnaires to evaluate gambling habits
- **Success Stories**: Real experiences from users who developed healthier gambling habits
- **Real-Time Analytics Dashboard**: Comprehensive analytics that provide detailed insights into gambling behavior with personalized recommendations (for logged-in users)
  - Pattern detection with severity classification
  - Risk level indicators with visual cues
  - Trend analysis with directional indicators
  - Behavioral insights with actionable recommendations

## Project Structure

The project follows a modular component-based architecture for better maintainability and reusability:

```
src/
├── app/                 # Next.js app directory
│   └── page.tsx         # Homepage (composed of section components)
├── components/          # Reusable components
│   ├── sections/        # Page sections (composable page blocks)
│   │   ├── HeroSection.tsx
│   │   ├── SimulatorFeaturesSection.tsx
│   │   ├── DashboardFeaturesSection.tsx
│   │   ├── AssessmentToolSection.tsx
│   │   ├── SuccessStoriesSection.tsx
│   │   └── ResourcesPreviewSection.tsx
│   ├── ui/              # UI components (buttons, cards, etc.)
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx 
│   │   ├── FloatingHelpButton.tsx
│   │   └── AnimationStyles.tsx
│   └── ClientLayout.tsx # Main layout wrapper
└── types.d.ts           # TypeScript type definitions
```

### Component Organization

The website is built using a composable component architecture:

1. **Section Components**: Large page sections that encapsulate specific content areas
2. **UI Components**: Smaller, reusable UI elements used across different sections
3. **Page Composition**: The main page composes these sections together

## Development Guidelines

When working with this project:

1. **Component Reusability**: 
   - Create new UI components for elements that appear in multiple places
   - Keep components focused on a single responsibility

2. **Type Safety**:
   - Use TypeScript interfaces/types for all component props
   - Export shared types when needed across multiple components

3. **Animation Standards**:
   - Use the `AnimationStyles` component for consistent animations
   - Apply animation classes according to established patterns

4. **Styling Approach**:
   - Use Tailwind CSS for styling
   - Maintain consistent naming conventions for custom styles

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Access the development server at [http://localhost:3000](http://localhost:3000).

## Documentation

- [Developer Guide](docs/developer/README.md)
- [Product Documentation](docs/product/README.md)
- [Design System](docs/designer/design-system.md)
- [Responsible Gambling Guidelines](docs/responsible-gambling/guidelines.md)
- [Deployment Guide](docs/deployment/deployment-guide.md)

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Live Demo

Visit [ai-site-responsible-gambling.vercel.app](https://ai-site-responsible-gambling.vercel.app) to see the live application. 