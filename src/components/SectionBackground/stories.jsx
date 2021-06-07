import { SectionBackground } from '.';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <>
        <Heading>Section Background</Heading>
        <TextComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit animi
          numquam laudantium blanditiis sed hic aspernatur explicabo eveniet
          illum dolorem dolorum veritatis, reprehenderit eligendi natus enim
          mollitia praesentium voluptatem!
        </TextComponent>
      </>
    ),
    bg: true,
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
