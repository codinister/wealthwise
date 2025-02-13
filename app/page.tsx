'use client';

import Slider from '@/components/Slider';
import useGetQuery from '@/data/query/queryprovider/useGetQuery';
import { useEffect, useState } from 'react';
import Sectiontwo from '@/components/home/Sectiontwo';
import Sectionthree from '@/components/home/Sectionthree';
import Sectionfour from '@/components/home/Sectionfour';
import Sectionfive from '@/components/home/Sectionfive';

export default function Home() {
  const data = useGetQuery('slider', '/slider') || [];
  const [getHeight, setHeight] = useState('100vh');

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 769) {
      setHeight('60vh');
    }
  }, []);

  return (
    <>
      <section className="slide-wrapper">
        {data.length > 0 ? (
          <Slider data={data} width="100%" height={getHeight} />
        ) : (
          ''
        )}
      </section>

      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
    </>
  );
}
