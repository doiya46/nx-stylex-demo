import type { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from './button';

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

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'solid',
  color: 'primary',
  children: 'Button',
};
