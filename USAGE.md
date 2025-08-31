# Using the Figma Connect Design System

## Workspace Development

This project uses npm workspaces to separate the design system package from demo applications.

### Development Workflow

1. **Build the design system package**:
   ```bash
   npm run build:lib
   ```

2. **Start the demo app**:
   ```bash
   npm run dev:demo
   ```

3. **View component documentation**:
   ```bash
   npm run storybook
   ```

## As an External Package

If this package were published to npm, here's how you would use it:

### Installation

```bash
npm install figma-connect-design-system
```

### Usage

```tsx
import React from 'react';
import { 
  Button, 
  Heading, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  colors,
  spacing,
  typography 
} from 'figma-connect-design-system';

// Import the CSS (required for styling)
import 'figma-connect-design-system/styles';

function App() {
  return (
    <div>
      <Heading level="h1" variant="primary">
        Welcome to My App
      </Heading>

      <Card>
        <CardHeader>
          <Heading level="h3">Feature Card</Heading>
        </CardHeader>
        <CardContent>
          <p>This is some content in the card.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" onClick={() => console.log('Clicked!')}>
            Get Started
          </Button>
          <Button variant="secondary">
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <div style={{ marginTop: spacing[4] }}>
        <Button variant="ghost" size="lg">
          Large Ghost Button
        </Button>
      </div>
    </div>
  );
}

export default App;
```

## Available Components

### Button
```tsx
<Button 
  variant="primary" // "primary" | "secondary" | "ghost"
  size="md"         // "sm" | "md" | "lg"
  disabled={false}
  onClick={handleClick}
>
  Click me
</Button>
```

### Heading
```tsx
<Heading 
  level="h1"        // "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  variant="default" // "default" | "primary" | "secondary" | "muted"
>
  My Heading
</Heading>
```

### Card
```tsx
<Card 
  variant="default" // "default" | "elevated" | "flat"
  padding="none"    // "none" | "sm" | "md" | "lg"
  onClick={handleCardClick} // optional
>
  <CardHeader>
    <Heading level="h3">Card Title</Heading>
  </CardHeader>
  
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

## Design Tokens

Access design tokens directly:

```tsx
import { colors, spacing, typography, borderRadius, shadows } from 'figma-connect-design-system';

const customStyles = {
  color: colors.primary[600],
  padding: spacing[4],
  fontFamily: typography.fontFamily.sans.join(', '),
  borderRadius: borderRadius.lg,
  boxShadow: shadows.md,
};
```

## TypeScript Support

The package includes full TypeScript definitions. All component props are fully typed for excellent developer experience.

## Workspace Structure

```
figma-connect/
├── packages/
│   └── figma-connect-design-system/    # The actual package
│       ├── src/                        # Source code
│       ├── dist/                       # Built files
│       └── package.json                # Package configuration
└── apps/
    └── demo/                           # Demo app that imports the package
        └── src/main.tsx                # Demo consuming the design system
```

The demo app imports the design system exactly as external consumers would:

```tsx
// This works because of npm workspaces symlinking
import { Button, Heading } from 'figma-connect-design-system';
import 'figma-connect-design-system/styles';
```
