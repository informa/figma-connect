import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label text',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label text',
    placeholder: 'input text',
  },
};

export const WithError: Story = {
  args: {
    label: 'Label text',
    placeholder: 'Input text',
    errorMessage: 'Error message',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'input text',
  },
};



export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Input label="Default Input" placeholder="input text" />
      <Input label="Input with Error" placeholder="Input text" errorMessage="Error message" />
      <Input placeholder="Input without label" />
      <Input label="Email Input" type="email" placeholder="Enter your email" />
      <Input label="Password Input" type="password" placeholder="Enter your password" />
    </div>
  ),
};