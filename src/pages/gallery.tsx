import CustomCard from '../components/CustomCard';

const projectsData = [
  {
    title: 'Event Name',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: '/assets/images/google.png',
    href: '/gallery/event-name1',
  },
  {
    title: 'Event Name',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: '/assets/images/google.png',
    href: '/gallery/event-name1',
  },
  {
    title: 'Event Name',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: '/assets/images/google.png',
    href: '/gallery/event-name1',
  },
  {
    title: 'Event Name',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: '/assets/images/google.png',
    href: '/gallery/event-name1',
  },
];

const Gallery = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-screen-lg mx-auto px-3">
      <div className="pt-6 pb-6 space-y-2 md:space-y-5">
        <p className="text-3xl leading-7 tracking-tight text-gray-600  dark:text-gray-400 sm:text-4xl md:text-3xl">
          2020 Events
        </p>
      </div>
      <div className="container py-6">
        <div className="flex flex-wrap -m-4">
          {projectsData.map((d) => (
            <CustomCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
