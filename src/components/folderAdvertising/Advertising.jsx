import React from 'react';
import style from '../folderAdvertising/advertising.module.css';

function Advertising({ imgAdvertisingPaths }) {
  const [currentIndex1, setCurrentIndex1] = React.useState(0);
  const [currentIndex2, setCurrentIndex2] = React.useState(0);
  const [currentIndex3, setCurrentIndex3] = React.useState(0);
  // массив путей к изображениям
  const arrayPathsToImgMegaSale = [
    imgAdvertisingPaths[0],
    imgAdvertisingPaths[1],
  ];
  const arrayPathsPeopleLeft = [
    imgAdvertisingPaths[2],
    imgAdvertisingPaths[3]
  ];
  const arrayPathsPeopleRight = [
    imgAdvertisingPaths[4],
    imgAdvertisingPaths[5],
  ];

  React.useEffect(() => {
    const interval_1 = setInterval(() => {
      setCurrentIndex1((prevIndex) =>
        prevIndex === arrayPathsToImgMegaSale.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    // функция интервал задержки, она нужна для запуска других интервалов с задержкой
    const delayedInterval = (
      arrayPaths,
      timeoutDelayValue,
      valueUpdateFunction
    ) => {
      setTimeout(() => {
        setInterval(() => {
          valueUpdateFunction((prevIndex) =>
            prevIndex === arrayPaths.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      }, timeoutDelayValue);
    };

    // Вызываем функцию delayedInterval
    delayedInterval(arrayPathsPeopleLeft, 1000, setCurrentIndex2);
    delayedInterval(arrayPathsPeopleRight, 2000, setCurrentIndex3);

    return () => {
      clearInterval(interval_1);
      clearTimeout(delayedInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('Перерисовка');

  return (
    <div className={style['wrapper']}>
      <img
        className={`${style['advertising-photos-img1']}`}
        src={arrayPathsToImgMegaSale[currentIndex1]}
        alt='imgMegaSale'
      />
      <img
        className={style['advertising-photos-img2']}
        src={arrayPathsPeopleLeft[currentIndex2]}
        alt='img'
      />
      <img
        className={style['advertising-photos-img2']}
        src={arrayPathsPeopleRight[currentIndex3]}
        alt='img'
      />
    </div>
  );
}

export default Advertising;
