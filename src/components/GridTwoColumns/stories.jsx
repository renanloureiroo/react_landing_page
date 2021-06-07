import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Column',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in facere aspernatur, recusandae molestias sapiente dicta nulla inventore veritatis eligendi distinctio temporibus, qui obcaecati earum! Sunt ullam illum neque perspiciatis.',
    srcImg: 'assets/images/javascript.svg',
    bg: true,
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
