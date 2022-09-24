import React, {useState} from 'react';

interface ISliderProps {
  items: Array<React.ReactElement>
}

const Slider: React.FC<ISliderProps> = (props: ISliderProps) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {

  }

  const previousSlide = () => {

  }

  return (
    <div className="slider">
      {
        props.items.map((item) => {
          return (
            <div className="slider__item">
              {item}
            </div>
          )
        })
      }
    </div>
  );
};

export default Slider;