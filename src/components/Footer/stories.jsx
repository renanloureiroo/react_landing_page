import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children:
      '<p><a href="https://www.instagram.com/renanloureiroo">&nbsp;@renanloureiroo</a><br>&nbsp;</p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
