import { GridTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumns,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
