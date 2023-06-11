import { useState } from "react";
import styled from 'styled-components';

interface IProps{
  images:string[];
}

//details of each supermodel
const Carousel = ({images}:IProps) => {
  if (!images) {
    images = [
      "https://images.pexels.com/photos/34700/bear-animals-zoo-captivity.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
  }

  const [active, setActive] = useState(0);

  const handleClick = (event:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    console.log('CLICKED!!!')
    if (!(event.target instanceof HTMLElement)){
      return;
    }
    if(event.target.dataset.index){
      setActive(parseInt(event.target.dataset.index));
    }
  };

  return (
    <CarouselWrapper>
      <img src={images[active]} alt="model" />
      <SmallCarousel>
      {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={(e)=>{
                handleClick(e);
                console.log("HOHO")
              }}
              data-index={index}
            />
          ))}
      </SmallCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;


const CarouselWrapper=styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  margin-top: 8px;

  img {
  max-width: 45%;
  max-height: 400px;
}
`

const SmallCarousel=styled.div`
  width: 50%;
  img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  margin: 15px;
  cursor: pointer;
  border: 2px solid #333;

  img.active {
  border-color: #333;
  opacity: 0.6;
}
}
`