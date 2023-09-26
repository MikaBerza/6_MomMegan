import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={1}
    width={280}
    height={457}
    viewBox='0 0 280 457'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='140' cy='141' r='125' />
    <rect x='0' y='280' rx='5' ry='5' width='280' height='26' />
    <rect x='0' y='320' rx='5' ry='5' width='280' height='72' />
    <rect x='0' y='405' rx='5' ry='5' width='90' height='28' />
    <rect x='125' y='405' rx='30' ry='30' width='155' height='40' />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
