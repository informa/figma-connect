# Demo Figma Connect Design System Workspace

A modern design system workspace built with React, TypeScript, and Vanilla Extract using npm workspaces for proper separation of concerns.

## 🏗️ Workspace Structure

```
figma-connect/
├── packages/
│   └── figma-connect-design-system/    # The design system package
│       ├── src/
│       │   ├── components/             # React components
│       │   ├── theme/                  # Design tokens
│       │   └── index.ts               # Package entry point
│       ├── .storybook/                # Storybook configuration
│       ├── dist/                      # Built package files
│       ├── tsconfig.json              # TypeScript config
│       ├── vite.config.ts             # Vite build config
│       └── package.json               # Package configuration
├── apps/
│   └── demo/                          # Demo application
│       ├── src/
│       │   └── main.tsx              # Demo app consuming the design system
│       ├── index.html
│       ├── tsconfig.json              # TypeScript config
│       ├── vite.config.ts             # Vite dev config
│       └── package.json               # App dependencies
├── tsconfig.json                      # Workspace-wide TypeScript references
└── package.json                      # Workspace root configuration
```

## 🚀 Features

- **npm Workspaces**: Proper separation between the design system package and demo app
- **Symlinked Dependencies**: Demo app imports from the local package as if it were published to npm
- **React + TypeScript**: Type-safe components with excellent developer experience
- **Vanilla Extract**: CSS-in-TS with zero-runtime styling
- **Storybook**: Component documentation and visual testing
- **Design Tokens**: Consistent spacing, colors, typography, and more
- **Build System**: Library-optimized builds with TypeScript declarations

## 📦 Installation

```bash
# Install all workspace dependencies
npm install
```

## 🎯 Development

### Build the Design System Package

```bash
# Build the design system for use by the demo app
npm run build:lib
```

### Run the Demo Application

```bash
# Start the demo app (imports from the design system package)
npm run dev:demo
```

The demo app imports the design system exactly as it would from npm:

```tsx
import { Button, Heading, Card } from 'figma-connect-design-system';
import 'figma-connect-design-system/styles';
```

### Storybook Documentation

```bash
# Start Storybook for component documentation
npm run storybook
```

## 📚 Available Scripts

### Root Workspace
- `npm run dev:demo` - Start the demo application
- `npm run build:lib` - Build the design system package
- `npm run storybook` - Start Storybook documentation
- `npm run build-storybook` - Build Storybook for deployment

### Design System Package
- `npm run build:lib --workspace=packages/figma-connect-design-system`
- `npm run storybook --workspace=packages/figma-connect-design-system`

### Demo App
- `npm run dev --workspace=apps/demo`
- `npm run build --workspace=apps/demo`

## 🎨 Components

### Button
A versatile button component with multiple variants and sizes.

**Variants**: `primary`, `secondary`, `ghost`  
**Sizes**: `sm`, `md`, `lg`

### Heading
Semantic heading component with different levels and visual variants.

**Levels**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`  
**Variants**: `default`, `primary`, `secondary`, `muted`

### Card
Flexible card component with optional header, content, and footer sections.

**Variants**: `default`, `elevated`, `flat`  
**Padding**: `none`, `sm`, `md`, `lg`

## � Usage Example

In any app within the workspace (or external projects):

```tsx
import React from 'react';
import { 
  Button, 
  Heading, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from 'figma-connect-design-system';
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
          <p>This is imported from the workspace package!</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

## 🎨 Design Tokens

Access design tokens directly:

```tsx
import { colors, spacing, typography } from 'figma-connect-design-system';

const customStyles = {
  color: colors.primary[600],
  padding: spacing[4],
  fontFamily: typography.fontFamily.sans.join(', '),
};
```

## 🔧 Workspace Benefits

1. **Separation of Concerns**: Clear boundaries between package and applications
2. **Real-world Testing**: Demo app consumes the package exactly like external consumers would
3. **Symlinked Dependencies**: Changes to the package are immediately available to the demo
4. **Scalability**: Easy to add more packages or apps to the workspace
5. **Publishing Ready**: The package can be published to npm without changes

## 🏗️ Package Structure

The `figma-connect-design-system` package generates:

- `dist/index.js` - CommonJS build
- `dist/index.es.js` - ES modules build  
- `dist/index.d.ts` - TypeScript declarations
- `dist/style.css` - Compiled CSS

## 🔧 Technologies

- **npm Workspaces**: Monorepo management
- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool and dev server
- **Vanilla Extract**: Type-safe CSS-in-TS
- **Storybook**: Component documentation and testing

## 📖 Live Applications

- **Demo App**: http://localhost:5174/ (when running `npm run dev:demo`)
- **Storybook**: http://localhost:6006/ (when running `npm run storybook`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes to the design system in `packages/figma-connect-design-system/`
4. Test changes in the demo app at `apps/demo/`
5. Update Storybook documentation
6. Submit a pull request

## 📝 License

MIT License - see LICENSE file for details.