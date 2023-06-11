
import { TypeSupermodelsFields } from "../utils/APIResponsesTypes"
import ModelCard from "./ModelCard";
import styled from 'styled-components';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// function Image({ image, name, id }: { image: string, name: string, id: string }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section>

//       <motion.div style={{ y }}> <ModelCard key={id} image={image} name={name} />  </motion.div>

//     </section>
//   );
// }

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
          // <Supermodel
          //   name={model.name?.toString()?? ""}
          //   images={model.imagesUrls as string[]  }
          //   location={model.location?.toString()?? ""}
          //   nationality={model.nationality?.toString()?? ""}
          //   species={model.species?.toString()??""}
          //   subspecies={model.species?.toString()??""}
          //   height={model.height as number}
          //   key={model.id?.toString()?? ""}
          //   id={model.id as number}
          // />
          <ModelCard key={model.id?.toString() ?? ""}  image={model.imagesUrls?.[0] as string} name={model.name?.toString() ?? ""} />
        ))
        
        // <ModelCard key={model.id?.toString()??""} image={model.imagesUrls?.[0] as string} name={model.name?.toString()??""} /> 

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














