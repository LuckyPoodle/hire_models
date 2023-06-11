import Search from "./components/Search";
import { useContext } from "react";
import SelectedModelContext from "./context/selectedModel";
import { TypeSupermodelsFields } from "./utils/APIResponsesTypes";
import Hero from "./components/Hero";
import Header from "./components/Header";

import styled from 'styled-components';
import { motion, useTransform ,useScroll} from 'framer-motion';
import { useRef } from 'react';

function App() {

  // const selectedModel = useState(null as TypeSupermodelsFields | null);
  const [selected, _] = useContext(SelectedModelContext);


  const targetRef=useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target:targetRef,
    offset:["end end","end start"]
  });
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
   <Container>
     <Wrapper>
      <Header />
      <h2>{selected?.name}</h2>
      <Hero />
      <TextReveal ref={targetRef}  style={{opacity}} initial={{x:'100%'}} animate={{x:'-100%'}} transition={{duration:20,ease:'linear',repeat:Infinity}} >WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST WE ARE THE BEST </TextReveal>
      <Search />
    </Wrapper>
    <BackgroundPattern />
   </Container>
  );
}


export default App;

const Container=styled.div`
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TextReveal = styled(motion.p)`
  white-space: nowrap;
  align-self: center;
  font-size: 32px;
  opacity: 0;
`;

const BackgroundPattern=styled.div`
  /* Vector 1 */

position: absolute;
width: 100%;
    height: 300px;
    background-color: deeppink;
    clip-path: polygon(
      0% 100%,
      50% 20%,
      100% 100%
    );

    z-index: -1;
left: 0px;
top: 907px;



`