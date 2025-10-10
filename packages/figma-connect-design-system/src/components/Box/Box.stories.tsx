import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['flex', 'block', 'inline', 'inline-block', 'inline-flex', 'grid', 'none'],
    },
    alignItems: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    },
    justifyContent: {
      control: 'select',
      options: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'],
    },
    paddingTop: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    marginTop: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    backgroundColor: {
      control: 'select',
      options: ['default', 'neutral', 'info', 'warning', 'danger', 'transparent'],
    },
    borderColor: {
      control: 'select',
      options: ['clear', 'default', 'info', 'warning', 'danger'],
    },
    borderRadius: {
      control: 'select',
      options: ['clear', 'sm', 'md'],
    },
    boxShadow: {
      control: 'select',
      options: ['clear', 'weak', 'strong'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box component',
    padding: 4,
    backgroundColor: 'neutral',
    borderRadius: 'md',
  },
};

export const FlexContainer: Story = {
  args: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
    gap: 4,
    backgroundColor: 'neutral',
    borderRadius: 'md',
    children: (
      <>
        <Box backgroundColor="info" color="white" padding={2} borderRadius="md">
          Item 1
        </Box>
        <Box backgroundColor="warning" color="black" padding={2} borderRadius="md">
          Item 2
        </Box>
        <Box backgroundColor="info" color="white" padding={2} borderRadius="md">
          Item 3
        </Box>
      </>
    ),
  },
};

export const GridContainer: Story = {
  args: {
    display: 'grid',
    gap: 4,
    padding: 6,
    backgroundColor: 'neutral',
    borderRadius: 'md',
    children: (
      <>
        <Box backgroundColor="info" color="white" padding={4} borderRadius="md" textAlign="center">
          Grid Item 1
        </Box>
        <Box backgroundColor="warning" color="black" padding={4} borderRadius="md" textAlign="center">
          Grid Item 2
        </Box>
        <Box backgroundColor="info" color="white" padding={4} borderRadius="md" textAlign="center">
          Grid Item 3
        </Box>
        <Box backgroundColor="warning" color="black" padding={4} borderRadius="md" textAlign="center">
          Grid Item 4
        </Box>
      </>
    ),
  },
};

export const ResponsiveExample: Story = {
  args: {
    display: { mobile: 'block', tablet: 'flex' },
    flexDirection: { tablet: 'row' },
    gap: { mobile: 2, tablet: 4 },
    padding: { mobile: 4, tablet: 6 },
    backgroundColor: 'neutral',
    borderRadius: 'md',
    children: (
      <>
        <Box backgroundColor="info" color="white" padding={3} borderRadius="md" marginBottom={{ mobile: 2, tablet: 0 }}>
          Responsive Box 1
        </Box>
        <Box backgroundColor="warning" color="black" padding={3} borderRadius="md">
          Responsive Box 2
        </Box>
      </>
    ),
  },
};

export const AsOtherElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box as="header" backgroundColor="info" color="white" padding={4} borderRadius="md">
        Header Element
      </Box>
      <Box as="section" backgroundColor="neutral" padding={4} borderRadius="md">
        Section Element
      </Box>
      <Box as="aside" backgroundColor="warning" color="black" padding={4} borderRadius="md">
        Aside Element
      </Box>
      <Box as="footer" backgroundColor="info" color="white" padding={4} borderRadius="md">
        Footer Element
      </Box>
    </div>
  ),
};

export const BordersAndShadows: Story = {
  args: {
    padding: 6,
    borderRadius: 'md',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'default',
    boxShadow: 'strong',
    backgroundColor: 'default',
    children: 'Box with borders and shadow',
  },
};

export const BackgroundColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={1} borderStyle="solid" borderColor="default">
        Default (White)
      </Box>
      <Box backgroundColor="neutral" padding={4} borderRadius="md">
        Neutral (Gray)
      </Box>
      <Box backgroundColor="info" color="white" padding={4} borderRadius="md">
        Info (Blue)
      </Box>
      <Box backgroundColor="warning" color="black" padding={4} borderRadius="md">
        Warning (Yellow)
      </Box>
      <Box backgroundColor="danger" color="white" padding={4} borderRadius="md">
        Danger (Red)
      </Box>
    </div>
  ),
};

export const BorderColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
      <Box backgroundColor="default" padding={4} borderRadius="md" borderWidth={2} borderStyle="solid" borderColor="danger">
        Danger Border
      </Box>
    </div>
  ),
};

export const BoxShadows: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="clear">
        Clear Shadow
      </Box>
      <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="weak">
        Weak Shadow
      </Box>
      <Box backgroundColor="default" padding={4} borderRadius="md" boxShadow="strong">
        Strong Shadow
      </Box>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Box backgroundColor="info" color="white" padding={4} borderRadius="clear">
        Clear (Sharp)
      </Box>
      <Box backgroundColor="info" color="white" padding={4} borderRadius="sm">
        Small Radius
      </Box>
      <Box backgroundColor="info" color="white" padding={4} borderRadius="md">
        Medium Radius
      </Box>
    </div>
  ),
};
