import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../utils/constants";

interface IProps {
  image: string;
  name: string;
  id: string;
}

const ModelCard = ({ image, name, id }: IProps) => {
  return (
    <CardWrapper>
      <Link to={`/details/${id}`}>
        <ModelImage src={image} />
        <ModelInfo>
          <ModelName>{name}</ModelName>
        </ModelInfo>
      </Link>
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

  @media ${QUERIES.tabletAndSmaller} {
    width: 80px;
    height: 240px;
    flex: 0 0 calc(50% - 10px);
  }
`;

const ModelImage = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 80%;
  }
`;

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

  @media ${QUERIES.tabletAndSmaller} {
    opacity: 1;
    top: 80%;
    bottom: 0;
    height: unset;
  }
`;

const ModelName = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding: 16px;
`;
