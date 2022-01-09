import Link from 'next/link';

import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';
import { Background } from './Background';
import Footer from './Footer';
import { headerNavLinks } from './headerNavLinks';
import { Meta } from './Meta';
import MobileNav from './MobileNav';
import { Section } from './Section';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
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
                {headerNavLinks.map((link) => (
                  <Link key={link.title} href={link.href}>
                    <a className="font-medium text-xl text-gray-900 sm:p-3 dark:text-gray-100">
                      {link.title}
                    </a>
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div>
          </header>
        </Section>
      </Background>
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
