import { GridOneColumn } from '.';

export default {
  title: 'GridOneColumn',
  component: GridOneColumn,
  args: {
    title: 'Grid One Column',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi at temporibus. Officia repellendus culpa id atque placeat minima ea consequuntur ex maxime veniam ullam, delectus, nisi, natus rerum tempore?',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridOneColumn {...args} />
    </div>
  );
};
