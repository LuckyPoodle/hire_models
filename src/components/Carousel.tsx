import { useState } from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../utils/constants";

interface IProps {
  images: string[];
  name: string;
}

//details of each supermodel
const Carousel = ({ images, name }: IProps) => {
  if (!images) {
    images = [
      "https://images.pexels.com/photos/34700/bear-animals-zoo-captivity.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
  }

  const [active, setActive] = useState(0);

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    console.log("CLICKED!!!");
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      setActive(parseInt(event.target.dataset.index));
    }
  };

  return (
    <CarouselWrapper>
      <ModelName>{name}</ModelName>
      <img src={images[active]} alt="model" />
      <SmallCarousel>
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={(e) => {
              handleClick(e);
              console.log("HOHO");
            }}
            data-index={index}
          />
        ))}
      </SmallCarousel>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 400px;
  margin-top: 8px;
  position: relative;

  img {
    max-width: 80%;
    max-height: 400px;
  }
`;

const SmallCarousel = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
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

    @media ${QUERIES.tabletAndSmaller} {
      width: 80px;
      height: 80px;
    }
  }
`;

const ModelName = styled.h2`
  font-weight: bold;
  text-shadow: 2px black;
  color: var(--color-gray-900);
  font-size: 4rem;
  width: 100%;
  align-self: center;
  position: absolute;
  right: 0;
  bottom: 380px;
  left: 40%;
  z-index: 999;
  white-space: nowrap;

  @media ${QUERIES.laptopAndSmaller} {
    font-size: 3rem;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 2.5rem;
    position: unset;
    text-align: center;
  }
`;
