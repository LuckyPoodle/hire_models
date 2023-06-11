
import styled from 'styled-components';
import { QUERIES } from "../utils/constants";


interface IProps {
  image: string;
  name: string;
}


const ModelCard = ({ image, name }: IProps) => {



  return (
    <CardWrapper>
      <ModelImage src={image} />
      <ModelInfo><ModelName>{name}</ModelName></ModelInfo>
    </CardWrapper>
  );
};

export default ModelCard;


const CardWrapper = styled.div`
    width: 100px;
    height: 300px;
    position: relative;
    flex: 0 0 calc(33.33% - 10px);
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;

 

    
  
`

const ModelImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }
`

const ModelInfo = styled.div`

position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(172, 177, 230, 0.5);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${CardWrapper}:hover & {
    opacity: 1;
  }


  
`

const ModelName = styled.span`
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
`