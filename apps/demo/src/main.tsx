import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Button, 
  Heading, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from 'figma-connect-design-system';
import 'figma-connect-design-system/styles';

function Demo() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Heading level="h1" variant="primary">
        Design System Demo - Workspace Setup
      </Heading>
      
      <div style={{ marginTop: '2rem' }}>
        <Heading level="h2">Buttons</Heading>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Heading level="h2">Headings</Heading>
        <div style={{ marginTop: '1rem' }}>
          <Heading level="h1">Heading 1</Heading>
          <Heading level="h2">Heading 2</Heading>
          <Heading level="h3">Heading 3</Heading>
          <Heading level="h4">Heading 4</Heading>
          <Heading level="h5">Heading 5</Heading>
          <Heading level="h6">Heading 6</Heading>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Heading level="h2">Cards</Heading>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button size="sm" variant="primary">
                  Action
                </Button>
                <Button size="sm" variant="secondary">
                  Cancel
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          <Card variant="elevated" padding="md">
            <div style={{ marginBottom: '0.5rem' }}>
              <Heading level="h4">
                Workspace Benefits
              </Heading>
            </div>
            <p style={{ margin: 0, color: '#6b7280' }}>
              With workspaces, we get proper separation of concerns and can develop 
              against the package as if it were published to npm!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
);
