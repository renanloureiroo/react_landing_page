import { NavLinks } from '.';
import links from './mock';
export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    Links: links,
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
