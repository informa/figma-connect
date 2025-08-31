import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'muted'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Heading Level 5',
    level: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Heading Level 6',
    level: 'h6',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Heading',
    level: 'h2',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Heading',
    level: 'h2',
    variant: 'secondary',
  },
};

export const Muted: Story = {
  args: {
    children: 'Muted Heading',
    level: 'h2',
    variant: 'muted',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
      <Heading level="h5">Heading 5</Heading>
      <Heading level="h6">Heading 6</Heading>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level="h2" variant="default">Default Heading</Heading>
      <Heading level="h2" variant="primary">Primary Heading</Heading>
      <Heading level="h2" variant="secondary">Secondary Heading</Heading>
      <Heading level="h2" variant="muted">Muted Heading</Heading>
    </div>
  ),
};
