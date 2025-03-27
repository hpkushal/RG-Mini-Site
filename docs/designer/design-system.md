# Design System Documentation

## Color Palette

### Primary Colors
- Primary Blue: `#2563EB` (Tailwind: `blue-600`)
  - Hover: `#1D4ED8` (Tailwind: `blue-700`)
  - Light: `#DBEAFE` (Tailwind: `blue-100`)
- Secondary Gray: `#4B5563` (Tailwind: `gray-600`)
  - Hover: `#374151` (Tailwind: `gray-700`)
  - Light: `#F3F4F6` (Tailwind: `gray-100`)

### Semantic Colors
- Success: `#059669` (Tailwind: `green-600`)
- Warning: `#D97706` (Tailwind: `yellow-600`)
- Error: `#DC2626` (Tailwind: `red-600`)
- Info: `#2563EB` (Tailwind: `blue-600`)

## Typography

### Font Family
- Primary: Inter (sans-serif)
- Monospace: JetBrains Mono (for code)

### Type Scale
- Heading 1: 2.25rem/36px (Tailwind: `text-4xl`)
- Heading 2: 1.875rem/30px (Tailwind: `text-3xl`)
- Heading 3: 1.5rem/24px (Tailwind: `text-2xl`)
- Body: 1rem/16px (Tailwind: `text-base`)
- Small: 0.875rem/14px (Tailwind: `text-sm`)

### Line Heights
- Tight: 1.25 (Tailwind: `leading-tight`)
- Normal: 1.5 (Tailwind: `leading-normal`)
- Relaxed: 1.75 (Tailwind: `leading-relaxed`)

## Components

### Buttons

#### Primary Button
```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button Text
</button>
```

#### Secondary Button
```html
<button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
  Button Text
</button>
```

### Cards
```html
<div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here</p>
</div>
```

### Form Elements

#### Text Input
```html
<input 
  type="text"
  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter text"
/>
```

## Spacing & Layout

### Spacing Scale
- 4px = 0.25rem (Tailwind: `space-1`)
- 8px = 0.5rem (Tailwind: `space-2`)
- 16px = 1rem (Tailwind: `space-4`)
- 24px = 1.5rem (Tailwind: `space-6`)
- 32px = 2rem (Tailwind: `space-8`)
- 48px = 3rem (Tailwind: `space-12`)

### Container
- Max width: 1280px (Tailwind: `container`)
- Padding: 1rem (16px) on each side

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

## Iconography

We use [Heroicons](https://heroicons.com/) for our icon system.

### Icon Sizes
- Small: 16x16px (Tailwind: `w-4 h-4`)
- Medium: 20x20px (Tailwind: `w-5 h-5`)
- Large: 24x24px (Tailwind: `w-6 h-6`)

### Example Usage
```html
<svg class="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <!-- Icon path -->
</svg>
```

## Illustrations

Our illustration style focuses on educational content:
- Clean, minimal lines
- Blue primary color with complementary accents
- Abstract representations of gambling concepts
- Avoid casino-style imagery
- Use geometric shapes and data visualization elements

## Accessibility

### Color Contrast
- All text must meet WCAG 2.1 AA standards
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text

### Focus States
- Visible focus rings on all interactive elements
- High contrast focus indicators
- Never remove focus outlines

### Text Sizes
- Minimum body text size of 16px
- Minimum form input text size of 16px on mobile

### Touch Targets
- Minimum touch target size of 44x44px
- Adequate spacing between interactive elements

## Implementation Notes

1. Always use Tailwind utility classes for consistency
2. Follow mobile-first responsive design
3. Maintain semantic HTML structure
4. Test all components for accessibility
5. Document any custom components in Storybook 