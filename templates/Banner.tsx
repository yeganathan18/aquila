import Link from 'next/link';

import { Button } from '../components/Button';
import { CTABanner } from '../components/CTABanner';
import { Section } from '../components/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Love blogs? We have a lot of interesting articles for you."
      subtitle="Check out our blog section."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Start Reading</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
