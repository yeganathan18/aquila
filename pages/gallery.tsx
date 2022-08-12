import GalleryCard from '../components/GalleryCard';
import GalleryLanding from '../components/GalleryLanding';

import { Typography } from '@mui/material';

const Gallery = () => {
  return (
    <div className="divide-y divide-gray-200 max-w-screen-lg mx-auto px-3">
      <div className="pt-6 pb-6 space-y-2 md:space-y-5">
        <p className="text-3xl leading-7 tracking-tight text-gray-600 sm:text-4xl md:text-3xl">
          Our Gallery
        </p>
      </div>
    </div>
  );
};

export default Gallery;
