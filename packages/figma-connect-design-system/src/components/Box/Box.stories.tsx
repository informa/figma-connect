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
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    backgroundColor: {
      control: 'select',
      options: ['white', 'transparent', 50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box component',
    padding: 4,
    backgroundColor: '100',
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
    backgroundColor: '50',
    borderRadius: 'lg',
    children: (
      <>
        <Box backgroundColor="500" color="white" padding={2} borderRadius="md">
          Item 1
        </Box>
        <Box backgroundColor="600" color="white" padding={2} borderRadius="md">
          Item 2
        </Box>
        <Box backgroundColor="700" color="white" padding={2} borderRadius="md">
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
    backgroundColor: '50',
    borderRadius: 'lg',
    children: (
      <>
        <Box backgroundColor="400" color="white" padding={4} borderRadius="md" textAlign="center">
          Grid Item 1
        </Box>
        <Box backgroundColor="500" color="white" padding={4} borderRadius="md" textAlign="center">
          Grid Item 2
        </Box>
        <Box backgroundColor="600" color="white" padding={4} borderRadius="md" textAlign="center">
          Grid Item 3
        </Box>
        <Box backgroundColor="700" color="white" padding={4} borderRadius="md" textAlign="center">
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
    backgroundColor: '100',
    borderRadius: 'lg',
    children: (
      <>
        <Box backgroundColor="500" color="white" padding={3} borderRadius="md" marginBottom={{ mobile: 2, tablet: 0 }}>
          Responsive Box 1
        </Box>
        <Box backgroundColor="600" color="white" padding={3} borderRadius="md">
          Responsive Box 2
        </Box>
      </>
    ),
  },
};

export const AsOtherElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box as="header" backgroundColor="500" color="white" padding={4} borderRadius="md">
        Header Element
      </Box>
      <Box as="section" backgroundColor="100" padding={4} borderRadius="md">
        Section Element
      </Box>
      <Box as="aside" backgroundColor="200" padding={4} borderRadius="md">
        Aside Element
      </Box>
      <Box as="footer" backgroundColor="600" color="white" padding={4} borderRadius="md">
        Footer Element
      </Box>
    </div>
  ),
};

export const BordersAndShadows: Story = {
  args: {
    padding: 6,
    borderRadius: 'lg',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '300',
    boxShadow: 'md',
    backgroundColor: 'white',
    children: 'Box with borders and shadow',
  },
};
