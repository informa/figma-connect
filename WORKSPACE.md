# Workspace Structure

This is the root of the Figma Connect Design System workspace.

## Quick Start

```bash
# Install all dependencies
npm install

# Build the design system package
npm run build:lib

# Start the demo app
npm run dev:demo

# Start Storybook
npm run storybook
```

## Workspace Contents

- `packages/figma-connect-design-system/` - The design system package
- `apps/demo/` - Demo application that consumes the design system

## Development Workflow

1. Make changes to components in `packages/figma-connect-design-system/src/`
2. Build the package: `npm run build:lib`
3. Changes are automatically available in the demo app via symlinks
4. Test in demo app: `npm run dev:demo`
5. Document in Storybook: `npm run storybook`

Each package and app has its own `package.json`, `tsconfig.json`, and build configuration.
