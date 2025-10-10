import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'TextArea label text',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'TextArea placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    cols: {
      control: 'number',
      description: 'Visible width of the text area',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Paragraph text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Paragraph text',
    errorMessage: 'Error Message',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Paragraph text',
  },
};

export const WithRows: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Paragraph text',
    rows: 6,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <TextArea label="Default TextArea" placeholder="Paragraph text" />
      <TextArea label="TextArea with Error" placeholder="Paragraph text" errorMessage="Error Message" />
      <TextArea placeholder="TextArea without label" />
      <TextArea label="TextArea with 6 rows" placeholder="Paragraph text" rows={6} />
    </div>
  ),
};