# Contributing to Risk-Reward Simulator

Thank you for your interest in contributing to the Risk-Reward Simulator project! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How to Contribute

### Reporting Issues

1. Check if the issue already exists in the [GitHub Issues](https://github.com/hpkushal/AI-SITE-Responsible-Gambling/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details

### Submitting Changes

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/your-fix-name
   ```

3. Make your changes following our coding standards
4. Write meaningful commit messages:
   ```bash
   git commit -m "feat: add new simulator feature"
   git commit -m "fix: resolve analytics dashboard bug"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Submit a Pull Request (PR)

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/hpkushal/AI-SITE-Responsible-Gambling.git
cd AI-SITE-Responsible-Gambling
```

2. Install dependencies:
```bash
npm install
```

3. Create a local environment file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid using `any`
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components focused and small
- Follow the container/presentation pattern
- Document props using TypeScript interfaces

### Styling

- Use Tailwind CSS utility classes
- Follow the design system guidelines
- Maintain responsive design principles
- Ensure accessibility compliance

### Testing

- Write tests for new features
- Maintain existing test coverage
- Use React Testing Library
- Follow testing best practices

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update the README if needed
5. Link the PR to any related issues
6. Request review from maintainers

## Review Process

1. Automated checks must pass
2. Code review by at least one maintainer
3. Changes requested must be addressed
4. Final approval from maintainer

## Documentation

- Update documentation for new features
- Include inline code comments
- Update README if needed
- Add examples when appropriate

## Responsible Gambling Guidelines

When contributing, ensure your changes:

1. Promote responsible gambling
2. Include appropriate warnings
3. Follow ethical guidelines
4. Protect user privacy
5. Include support resources

## Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

## Commit Messages

Follow conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

## Release Process

1. Version bump following semver
2. Update CHANGELOG.md
3. Create release notes
4. Tag the release
5. Deploy to production

## Getting Help

- Check the [documentation](docs/)
- Join our [Discord community](#)
- Contact maintainers
- Open a discussion

## Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 