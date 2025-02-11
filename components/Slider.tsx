import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';

type DT = {
  data: { image: string }[];
  height: string;
  width: string;
};

const Slider = ({ data, width, height }: DT) => {
  const images = Object.values(data).map((v) => {
    return {
      url: v.image,
    };
  });

  return (
    <>
      <Slide
    
        autoplay={true}
        // onChange={function noRefCheck(){}}
        // onStartChange={function noRefCheck(){}}
      >
        {images.map((fadeImage, index) => (
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
          ></div>
        ))}
      </Slide>
    </>
  );
};

export default Slider;
