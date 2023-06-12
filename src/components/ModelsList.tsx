
import { TypeSupermodelsFields } from "../utils/APIResponsesTypes"
import ModelCard from "./ModelCard";
import styled from 'styled-components';

import {
  useScroll,
  useSpring,
} from "framer-motion";



const Modellist = ({ models }: { models: TypeSupermodelsFields[] }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (

     <ModelList>
      {!models.length ? (
        <h1>Our models are not free!</h1>
      ) : (
        models.map((model) => (
       
          <ModelCard id={model.id?.toString() ?? ""} key={model.id?.toString() ?? ""}  image={model.imagesUrls?.[0] as string} name={model.name?.toString() ?? ""} />
        ))
        

      )}

    </ModelList>

  );
};

export default Modellist;

const ModelList = styled.div`
  display: flex;
  width: 60%;
  padding:50px;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  align-self:center;
  
`














