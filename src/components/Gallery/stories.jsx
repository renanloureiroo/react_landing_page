import { Gallery } from '.';

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    children: 'Gallery',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Gallery {...args} />
    </div>
  );
};
