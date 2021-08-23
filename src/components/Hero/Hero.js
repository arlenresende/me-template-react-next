import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noppading>
    <LeftSection>
      <SectionTitle mains center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum repellat minus qui eius ullam, ducimus delectus harum quae, beatae dolore atque nesciunt, nisi exercitationem veniam iure corrupti optio id.
      </SectionText>
      <Button>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;