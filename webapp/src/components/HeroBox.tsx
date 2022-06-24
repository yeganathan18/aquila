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
                <span className="text-primary-500">Welcomes you</span>
              </>
            }
            description={JSON.stringify("The ink of the scholar is more holy than the blood of the martyr")}
            button={
              <Link href="#">
                <a className="text-blue">
                 <Button>Know More ↓</Button> 
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
