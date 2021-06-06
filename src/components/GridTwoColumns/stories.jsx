import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor illo aliquam? Id rem dolore esse? Provident error, modi eaque natus quo eius voluptas inventore ad alias maxime doloribus iusto.',
    img: 'assets/images/javascript.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
