import Link from 'next/link';

import { Background } from './Background';
import { Button } from './Button';
import { HeroOneButton } from './HeroOneButton';
import { Section } from './Section';

const HeroBox = () => {
  return (
    <>
      <Background color="bg-gray-100">
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'National Higher Secondary School\n'}
                <span className="text-primary-500">React developers</span>
              </>
            }
            description="The easiest way to build a React landing page in seconds."
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <a>
                  <Button xl>Know More</Button>
                </a>
              </Link>
            }
          />
        </Section>
      </Background>
    </>
  );
};

export default HeroBox;
