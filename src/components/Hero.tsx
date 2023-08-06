import styled from "styled-components";
import { QUERIES } from "../utils/constants";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Wrapper>
      <Tags>
        <Tagline>Lorem ipsum</Tagline>
        <SmallTagLine>Lorem ipsum dolor sit amet</SmallTagLine>
        <Button>Lorem</Button>
      </Tags>
      <Image
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="./modelgreen.png"
      />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 5px;
  }
`;

const Tagline = styled.h1`
  font-size: 3rem;
  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
  }
`;

const SmallTagLine = styled.h2`
  font-size: 1.5rem;
`;

const Image = styled(motion.img)`
  width: 30rem;
  height: 30rem;
  z-index: -1;
  margin-left: -10rem;

  @media ${QUERIES.tabletAndSmaller} {
    margin: 0 auto;
    width: 20rem;
    height: 20rem;
  }
`;
