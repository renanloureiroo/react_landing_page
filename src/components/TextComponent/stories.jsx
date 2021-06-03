import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt provident fugiat facere eveniet reiciendis nesciunt reprehenderit, sunt, maiores perspiciatis at non animi dolorum est, nostrum et error. Maiores, modi?',
  },
  agrTypes: {
    children: { type: 'string' },
  },
  parameters: {
    background: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <TextComponent {...args} />;
export const Light = (args) => <TextComponent {...args} />;

Light.parameters = {
  background: {
    default: 'light',
  },
};

Dark.args = {
  colorDark: false,
};
