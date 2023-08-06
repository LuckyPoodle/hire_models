import Search from "./components/Search";
import { useContext, useState } from "react";
import {
  SuperModelContext,
  SuperModelContextType,
} from "./context/selectedModel";
import Notification from "./components/Notification";
import Hero from "./components/Hero";
import Header from "./components/Header";
import styled from "styled-components";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import Footer from "./components/Footer";
import { QUERIES } from "./utils/constants";

function App() {
  // const selectedModel = useState(null as TypeSupermodelsFields | null);
  //const [selected, _] = useContext(SelectedModelContext);
  const { models } = useContext(SuperModelContext) as SuperModelContextType;
  // Notifications state
  const [notifications, setNotifications] = useState([]);

  const targetRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <Container>
      <Wrapper>
        <Header />
        <Hero />
        <TextWrapper>
          {" "}
          <TextReveal
            ref={targetRef}
            style={{ opacity }}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </TextReveal>
        </TextWrapper>
        <Search />
        <NotificationContainer>
          {models.length > 0 &&
            models.map((selected) => (
              <Notification
                key={selected.id}
                text={selected.name}
                notifications={notifications}
                setNotifications={setNotifications}
                handleClose={undefined}
                color={undefined}
              />
            ))}
        </NotificationContainer>
        <Footer />
      </Wrapper>
      <BackgroundPattern>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 913.35 666.25"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="m913.21,522.03c-1.43-31.93-10.9-61.32-24.86-89.86-24.22-49.5-64.96-88.48-108.86-120.57-87.2-63.74-195.39-88.36-285.44-147.16-10.26-6.7-20.2-13.87-29.96-21.28-55.8-43.94-107.53-93.89-173.83-121.86C256.58,7.07,220.17-1.96,183.31.36c-18.18,1.15-36.88,3.83-54.17,9.8-16.96,5.85-33.78,13.37-48.14,24.26-8.9,6.75-17.7,13.39-25.19,21.7-7.49,8.31-14.44,17.33-20.41,26.8-10.2,16.19-17.62,34.67-22.88,53.02-5.34,18.65-7.96,38.05-10.07,57.28C.65,209.49-.14,225.89.02,242.25c.37,36.83,5.17,74.43,15.45,109.84,9.89,34.08,24.86,67.58,45.29,96.68,38.65,55.04,91.66,98.76,152.15,128.05,33.23,16.09,68.09,28.89,103.87,37.97,35.48,9.01,71.81,14.6,108.18,18.67,28.63,6.97,57.5,12.98,86.57,17.82,61.54,10.23,123.91,16.36,186.34,14.71,32.96-.87,65.86-3.93,98.44-8.94,12.07-1.86,23.96-4.53,35.32-9.08,18.54-7.43,36.65-16.77,49.84-32.34,12.29-14.51,21.43-30.06,26.63-48.49,4.07-14.42,5.79-30.12,5.12-45.1Z" />
          </g>
        </svg>
      </BackgroundPattern>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextReveal = styled(motion.p)`
  white-space: nowrap;
  align-self: center;
  font-size: 32px;
  opacity: 0;
`;

const TextWrapper = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  width: 50%;
  z-index: -999;
  left: 25%;
  top: 30%;
  bottom: 0px;

  svg {
    fill: #d03a00;
    opacity: 0.38;
  }
`;

interface IProps {
  children: any;
}

const NotificationContainer = ({ children }: IProps) => {
  return (
    <NotificationWrapper>
      <NotificationUl>
        <AnimatePresence initial={false}>{children}</AnimatePresence>
      </NotificationUl>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div`
  display: flex;
  width: 50vw;
  padding: 2rem;
  height: 50%;
  margin: auto;
`;

const NotificationUl = styled.ul`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  top: 3rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
`;
