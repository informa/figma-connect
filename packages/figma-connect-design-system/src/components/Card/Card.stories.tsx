import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Button } from '../Button';
import { Text } from '../Text'

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
      <Text type="paragraph">
        This is a basic card with some content inside.
      </Text>
    ),
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    variant: 'elevated',
    children: (
      <Text type="paragraph">
        This card has an elevated appearance with more shadow.
      </Text>
    ),
  },
};

export const Flat: Story = {
  args: {
    title: "Flat Card",
    variant: 'flat',
    children: (
      <Text type="paragraph">
        This card has a flat appearance with no shadow.
      </Text>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: "Card with Actions",
    children: (
      <Text type="paragraph">
        This card has a flat appearance with no shadow.
      </Text>
    ),
    actions: [
      <Button key="action1" variant="primary">Action 1</Button>,
      <Button key="action2" variant="secondary">Action 2</Button>,
    ],
  }
};

export const Interactive: Story = {
  args: {
    title: "Interactive Card",
    onClick: () => alert('Card clicked!'),
    children: (
      <Text type="paragraph">
        Click this card to see the interaction.
      </Text>
    ),
  },
};
