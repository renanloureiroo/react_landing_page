import { GoTop } from './index';

export default {
  title: 'GoTop',
  component: GoTop,
};

export const Template = (args) => {
  return (
    <div style={{ height: '2000px' }}>
      <GoTop {...args} />
    </div>
  );
};
