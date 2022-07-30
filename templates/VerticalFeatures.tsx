import { Section } from '../components/Section';
import { VerticalRow } from '../components/VerticalRow';

const VerticalFeatures = () => (
  <Section
    title="Who are we?"
    description="National School is run along the lines of the best school's in the Kerala's educational practices. It provides a cutting edge academic programme with state of the art infrastructure and facilities for not just the gifted but any upwardly mobile Kerala students here, students acquire an excellent education in a rich kerala context."
  >
    <VerticalRow
      title="Our Vision"
      description="It is our vision to create a generation of Good people with cultural values, indomitable intelligence and ultimately a good human being."
      image="/assets/images/vision.svg"
      imageAlt="First feature alt text"
    />
    <VerticalRow
      title="Our Mission"
      description="Our mission is Learn, Love, Lead for the progressive needs of the nation."
      image="/assets/images/mission.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
