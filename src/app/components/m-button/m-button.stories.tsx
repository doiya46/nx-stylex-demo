import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './m-button';

const meta: Meta<typeof Button> = {
  component: Button,
  //   parameters: {
  //     design: {
  //       type: 'figma',
  //       url: 'https://www.figma.com/file/F328xEjCSPTEAbSmpNlyeL/Untitled?type=design&node-id=0%3A1&mode=design&t=xOAEwtPN1CJWnj1j-1',
  //     },
  //   },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
