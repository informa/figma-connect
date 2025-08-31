import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Heading } from '../Heading';
import { Button } from '../Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'flat'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          This is a basic card with some content inside.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Elevated Card</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          This card has an elevated appearance with more shadow.
        </p>
      </div>
    ),
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Flat Card</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          This card has a flat appearance with no shadow.
        </p>
      </div>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card style={{ width: '300px' }}>
      <CardHeader>
        <Heading level="h3" variant="default">
          Card with Header
        </Heading>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0, color: '#6b7280' }}>
          This card demonstrates the use of CardHeader, CardContent, and CardFooter components.
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
  ),
};

export const Interactive: Story = {
  args: {
    onClick: () => alert('Card clicked!'),
    children: (
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Interactive Card</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Click this card to see the interaction.
        </p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card style={{ width: '200px', padding: '1.5rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Default</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
          Default card variant
        </p>
      </Card>
      
      <Card variant="elevated" style={{ width: '200px', padding: '1.5rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Elevated</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
          Elevated card variant
        </p>
      </Card>
      
      <Card variant="flat" style={{ width: '200px', padding: '1.5rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Flat</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
          Flat card variant
        </p>
      </Card>
    </div>
  ),
};
