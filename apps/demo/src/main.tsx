import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Button,
  Text,
  Card,
  Box
} from 'figma-connect-design-system';
import 'figma-connect-design-system/styles';

function Demo() {
  return (
    <Box padding={8} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Text type="h1">
        Design System Demo - Workspace Setup
      </Text>

      <Box marginTop={8}>
        <Text type="h2">Box Component with New Properties</Text>
        
        {/* Background Colors */}
        <Box marginTop={6}>
          <Text type="h3">Background Colors</Text>
          <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
            <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={1} borderStyle="solid" borderColor="default">
              Default (White)
            </Box>
            <Box backgroundColor="neutral" padding={4} borderRadius="md">
              Neutral (Gray)
            </Box>
            <Box backgroundColor="info" padding={4} borderRadius="md" color="white">
              Info (Blue)
            </Box>
            <Box backgroundColor="warning" padding={4} borderRadius="md" color="black">
              Warning (Yellow)
            </Box>
          </Box>
        </Box>

        {/* Border Colors */}
        <Box marginTop={6}>
          <Text type="h3">Border Colors</Text>
          <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
            <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={2} borderStyle="solid" borderColor="clear">
              Clear Border
            </Box>
            <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={2} borderStyle="solid" borderColor="default">
              Default Border
            </Box>
            <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={2} borderStyle="solid" borderColor="info">
              Info Border
            </Box>
            <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={2} borderStyle="solid" borderColor="warning">
              Warning Border
            </Box>
          </Box>
        </Box>

        {/* Box Shadows */}
        <Box marginTop={6}>
          <Text type="h3">Box Shadows</Text>
          <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
            <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="clear">
              Clear Shadow
            </Box>
            <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="weak">
              Weak Shadow
            </Box>
            <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="strong">
              Strong Shadow
            </Box>
          </Box>
        </Box>

        {/* Border Radius */}
        <Box marginTop={6}>
          <Text type="h3">Border Radius</Text>
          <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
            <Box backgroundColor="info" padding={4} borderRadius="clear" color="white">
              Clear (Sharp corners)
            </Box>
            <Box backgroundColor="info" padding={4} borderRadius="sm" color="white">
              Small Radius
            </Box>
            <Box backgroundColor="info" padding={4} borderRadius="md" color="white">
              Medium Radius
            </Box>
          </Box>
        </Box>
      </Box>

      <Box marginTop={8}>
        <Text type="h2">Buttons</Text>
        <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </Box>

        <Box display="flex" gap={4} marginTop={4} alignItems="center" flexWrap="wrap">
          <Button size="small">Small</Button>
          <Button size="large">Large</Button>
          <Button size="small" variant="destructive">
            Delete
          </Button>
        </Box>
      </Box>

      <Box marginTop={8}>
        <Text type="h2">Text Components</Text>
        <Box marginTop={4}>
          <Text type="h1">Heading 1</Text>
          <Text type="h2">Heading 2</Text>
          <Text type="h3">Heading 3</Text>
          <Text type="h4">Heading 4</Text>
          <Text type="h5">Heading 5</Text>
          <Text type="h6">Heading 6</Text>
          <Text type="paragraph">This is a paragraph showing the new Text component with paragraph type.</Text>
          <Text type="paragraph" color="neutral">This is a neutral colored paragraph.</Text>
          <Text type="paragraph" color="danger">This is a danger colored paragraph.</Text>
        </Box>
      </Box>

      <Box marginTop={8}>
        <Text type="h2">Cards</Text>
        <div
          style={{
            display: 'grid',
            gap: '1rem',
            marginTop: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          <Card
            title="Demo Card"
            variant="default"
            actions={[
              <Button key="go" size="small" variant="primary">Action</Button>,
              <Button key="cancel" size="small" variant="secondary">Cancel</Button>,
              <Button key="remove" size="small" variant="destructive">Remove</Button>,
            ]}
          >
            <Text type="paragraph">
              This demo app imports from the workspace package using "figma-connect-design-system" -
              demonstrating how it would work as a real npm dependency!
            </Text>
          </Card>

          <Card title="Workspace Benefits" variant="elevated">
            <Text type="paragraph">
              With workspaces, we get proper separation of concerns and can develop
              against the package as if it were published to npm!
            </Text>
          </Card>
        </div>
      </Box>
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
);
