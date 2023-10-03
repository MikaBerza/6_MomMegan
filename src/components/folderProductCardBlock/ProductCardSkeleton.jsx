import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './ProductCard.module.css';

const ProductCardSkeleton = () => (
  <ContentLoader
    className={style['product-card']}
    speed={1}
    width={280}
    height={457}
    viewBox='0 0 280 457'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='-1' y='290' rx='5' ry='5' width='280' height='26' />
    <rect x='0' y='330' rx='5' ry='5' width='280' height='72' />
    <rect x='0' y='415' rx='5' ry='5' width='90' height='28' />
    <rect x='126' y='415' rx='5' ry='5' width='155' height='40' />
    <rect x='10' y='13' rx='0' ry='0' width='260' height='260' />
  </ContentLoader>
);

export default ProductCardSkeleton;
