import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
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
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    children: (
      <p style={{ margin: 0, color: '#6b7280' }}>
        This is a basic card with some content inside.
      </p>
    ),
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    variant: 'elevated',
    children: (
      <p style={{ margin: 0, color: '#6b7280' }}>
        This card has an elevated appearance with more shadow.
      </p>
    ),
  },
};

export const Flat: Story = {
  args: {
    title: "Flat Card",
    variant: 'flat',
    children: (
      <p style={{ margin: 0, color: '#6b7280' }}>
        This card has a flat appearance with no shadow.
      </p>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: "Card with Actions",
    children: (
      <p style={{ margin: 0, color: '#6b7280' }}>
        This card has a flat appearance with no shadow.
      </p>
    ),
    actions: <><Button key="action1" variant="primary">Action 1</Button><Button key="action2" variant="secondary">Action 2</Button></>,
  }
};

export const Interactive: Story = {
  args: {
    title: "Interactive Card",
    onClick: () => alert('Card clicked!'),
    children: (
      <p style={{ margin: 0, color: '#6b7280' }}>
        Click this card to see the interaction.
      </p>
    ),
  },
};
