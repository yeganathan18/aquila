import Link from 'next/link';

import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';
import Footer from './Footer';
import { Meta } from './Meta';
import MobileNav from './MobileNav';
import { Section } from './Section';
import HeaderNavLinks from './HeaderNavLinks';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className='bg-blue-50'>
        <Section yPadding="py-4">
          <header className="flex items-center justify-between">
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <div>
              <Link href="/" aria-label="NHSS" passHref>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo xl />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {HeaderNavLinks.map((link) => (
                  <Link key={link.title} href={link.href}>
                    <a className="font-medium text-xl text-gray-600 sm:p-3">
                      {link.title}
                    </a>
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div>
          </header>
        </Section>
      </div>
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
