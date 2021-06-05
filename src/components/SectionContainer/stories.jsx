import { SectionContainer } from '.';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <>
        <Heading>SectionContainer</Heading>
        <TextComponent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          rerum, accusamus at iure quis numquam fugiat eos quisquam ipsam ex
          iusto soluta enim voluptates, ut, explicabo rem odit sit omnis?
        </TextComponent>
      </>
    ),
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
