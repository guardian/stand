import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserMenu } from './UserMenu';

const meta = {
    title: 'Stand/UserMenu',
    component: UserMenu,
} satisfies Meta<typeof UserMenu>;

type Story = StoryObj<typeof UserMenu>;

export const Default:Story = {
    args: {
        theme: {
            
        }
    }
}

export const Themed:Story = {
    args: {
        theme: {
            heading: {
                backgroundColor: 'pink'
            }
        }
    }
}

export default meta
