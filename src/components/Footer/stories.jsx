import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="https://www.instagram.com/renanloureiroo">&nbsp;@renanloureiroo</a><br>&nbsp;</p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
