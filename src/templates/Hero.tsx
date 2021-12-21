/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/Navbar';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/alumni">
            <a>Alumni</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

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
    {/* <div>
      <Image
        src="/../public/assets/images/hero.jpeg"
        alt="hi"
        layout="responsive"
        objectFit="inherit"
        height={170}
        width={500}
      />
    </div> */}
  </Background>
);

export { Hero };
