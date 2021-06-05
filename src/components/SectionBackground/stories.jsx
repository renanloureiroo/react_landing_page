import { SectionBackground } from '.';
import { Heading } from '../Heading';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    background: true,
    children: (
      <SectionContainer>
        <Heading>SectionBackground</Heading>
        <TextComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          cupiditate unde dolorum! Aliquid voluptatum, perferendis perspiciatis
          ullam iusto quaerat distinctio veniam molestias fuga natus blanditiis
          libero molestiae maxime, iure architecto.
        </TextComponent>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
