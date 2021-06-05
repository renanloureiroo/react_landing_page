import { Menu } from '.';
import links from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    logoData: {
      srcImg: 'assets/images/logo.svg',
      text: 'Logo',
      link: '#target',
    },
    Links: links,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
