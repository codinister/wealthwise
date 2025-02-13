import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type DT = {
  data: { image: string; title: string }[];
  height: string;
  width: string;
};

const Slider = ({ data, width, height }: DT) => {
  const images = Object.values(data).map((v) => {
    return {
      url: v.image,
      title: v.title,
    };
  });

  return (
    <>
      <Zoom
        scale={0.4}
        autoplay={true}
        // onChange={function noRefCheck(){}}
        // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => {
          const title = fadeImage?.title.split(' ').join('');
          let content;

          if (title === 'Slider1') {
            content = (
              <div>
                <h1>Financial Services</h1>
                <p>
                  It is no mean achievement to have over 6,000 global work force
                </p>
              </div>
            );
          } else if (title === 'Slider2') {
            content = (
              <div>
                <h1>Insurance</h1>
                <p>
                  It is no mean achievement to have over 6,000 global work force
                </p>
              </div>
            );
          } else if (title === 'Slider3') {
            content = (
              <div>
                <h1>Real Estate</h1>
                <p>
                  It is no mean achievement to have over 6,000 global work force
                </p>
              </div>
            );
          } else if (title === 'Slider4') {
            content = (
              <div>
                <h1>Roofing Production</h1>
                <p>
                  It is no mean achievement to have over 6,000 global work force
                </p>
              </div>
            );
          } else if (title === 'Slider5') {
            content = (
              <div>
                <h1>Travel & Tour</h1>
                <p>
                  It is no mean achievement to have over 6,000 global work force
                </p>
              </div>
            );
          }

          return (
            <div
              className="each-slide-effect"
              key={index}
              style={{
                backgroundImage: `url(${fadeImage?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height,
                width,
              }}
            >
              <div className="captionbox">{content}</div>
            </div>
          );
        })}
      </Zoom>
    </>
  );
};

export default Slider;
