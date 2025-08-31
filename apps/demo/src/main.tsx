import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Button, 
  Heading, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  Box
} from 'figma-connect-design-system';
import 'figma-connect-design-system/styles';

function Demo() {
  return (
    <Box padding={8} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Heading level="h1" variant="primary">
        Design System Demo - Workspace Setup
      </Heading>
      
      <Box marginTop={8}>
        <Heading level="h2">Box Component with Sprinkles</Heading>
        <Box marginTop={4}>
          <Box 
            display="inline-flex" 
            borderRadius="md" 
            backgroundColor="100" 
            padding={4}
            marginBottom={4}
          >
            Box with inline-flex display and medium border radius
          </Box>
          
          <Box
            display="flex"
            gap={4}
            padding={6}
            backgroundColor="50"
            borderRadius="lg"
            marginBottom={4}
          >
            <Box backgroundColor="500" color="white" padding={3} borderRadius="md">
              Flex Item 1
            </Box>
            <Box backgroundColor="600" color="white" padding={3} borderRadius="md">
              Flex Item 2
            </Box>
            <Box backgroundColor="700" color="white" padding={3} borderRadius="md">
              Flex Item 3
            </Box>
          </Box>
          
          <Box
            as="section"
            borderWidth={2}
            borderStyle="solid"
            borderColor="300"
            borderRadius="lg"
            padding={6}
            boxShadow="md"
            backgroundColor="white"
          >
            Box rendered as a section element with borders and shadow
          </Box>
        </Box>
      </Box>
      
      <Box marginTop={8}>
        <Heading level="h2">Buttons</Heading>
        <Box display="flex" gap={4} marginTop={4} flexWrap="wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </Box>
        
        <Box display="flex" gap={4} marginTop={4} alignItems="center" flexWrap="wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Box>
      </Box>
      
      <Box marginTop={8}>
        <Heading level="h2">Headings</Heading>
        <Box marginTop={4}>
          <Heading level="h1">Heading 1</Heading>
          <Heading level="h2">Heading 2</Heading>
          <Heading level="h3">Heading 3</Heading>
          <Heading level="h4">Heading 4</Heading>
          <Heading level="h5">Heading 5</Heading>
          <Heading level="h6">Heading 6</Heading>
        </Box>
      </Box>
      
      <Box marginTop={8}>
        <Heading level="h2">Cards</Heading>
        <div 
          style={{ 
            display: 'grid', 
            gap: '1rem', 
            marginTop: '1rem', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
          }}
        >
          <Card>
            <CardHeader>
              <Heading level="h3">Card Title</Heading>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, color: '#6b7280' }}>
                This demo app imports from the workspace package using "figma-connect-design-system" - 
                demonstrating how it would work as a real npm dependency!
              </p>
            </CardContent>
            <CardFooter>
              <Box display="flex" gap={2}>
                <Button size="sm" variant="primary">
                  Action
                </Button>
                <Button size="sm" variant="secondary">
                  Cancel
                </Button>
              </Box>
            </CardFooter>
          </Card>
          
          <Card variant="elevated" padding="md">
            <Box marginBottom={2}>
              <Heading level="h4">
                Workspace Benefits
              </Heading>
            </Box>
            <p style={{ margin: 0, color: '#6b7280' }}>
              With workspaces, we get proper separation of concerns and can develop 
              against the package as if it were published to npm!
            </p>
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
