import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'paragraph'],
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'danger'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: 'Heading Level 1',
    type: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading Level 2',
    type: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Heading Level 3',
    type: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Heading Level 4',
    type: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Heading Level 5',
    type: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Heading Level 6',
    type: 'h6',
  },
};

export const Paragraph: Story = {
  args: {
    children: 'This is a paragraph of text that demonstrates the paragraph type.',
    type: 'paragraph',
  },
};

export const Default: Story = {
  args: {
    children: 'Default Text Color',
    type: 'h2',
    color: 'default',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutral Text Color',
    type: 'h2',
    color: 'neutral',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Text Color',
    type: 'h2',
    color: 'danger',
  },
};

export const AllTypes: Story = {
  args: {
    children: 'Example text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text type="h1">Heading 1</Text>
      <Text type="h2">Heading 2</Text>
      <Text type="h3">Heading 3</Text>
      <Text type="h4">Heading 4</Text>
      <Text type="h5">Heading 5</Text>
      <Text type="h6">Heading 6</Text>
      <Text type="paragraph">This is a paragraph of text that shows how regular text content appears.</Text>
    </div>
  ),
};

export const AllColors: Story = {
  args: {
    children: 'Example text',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Text type="h2" color="default">Default Color Text</Text>
      <Text type="h2" color="neutral">Neutral Color Text</Text>
      <Text type="h2" color="danger">Danger Color Text</Text>
      <Text type="paragraph" color="default">Default paragraph text</Text>
      <Text type="paragraph" color="neutral">Neutral paragraph text</Text>
      <Text type="paragraph" color="danger">Danger paragraph text</Text>
    </div>
  ),
};
