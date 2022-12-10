import { useState } from "react";

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

  const handleClick = (event:React.MouseEvent<HTMLInputElement>) => {
    console.log('CLICKED')
    if (!(event.target instanceof HTMLElement)){
      return;
    }
    if(event.target.dataset.index){
      setActive(parseInt(event.target.dataset.index));
    }
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="model" />
      <div className="carousel-smaller">
      {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={(event)=>handleClick}
              data-index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
