import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Olá pessoas do mundo inteiro, como vocês estão, nesta madrugada de terça-feira?!',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const Dark = (args) => <TextComponent {...args} />;
export const Light = (args) => <TextComponent {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  colorDark: false,
};
