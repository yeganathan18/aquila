import { useRouter } from 'next/router';

import { Section } from '../../components/Section';
import Custom404 from '../404';

const Event = () => {
  const router = useRouter();
  if (!router.isFallback) {
    return <Custom404 />;
  }
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Section>
      <h1>Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quibusdam quisquam, quidem quisquam quisquam quisquam
        dignissimos.
      </p>
    </Section>
  );
};

export default Event;
