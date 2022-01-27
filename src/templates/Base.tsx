import HeroBox from '../components/HeroBox';
import { Banner } from './Banner';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <HeroBox />
    <VerticalFeatures />
    <Banner />
  </div>
);

export { Base };
