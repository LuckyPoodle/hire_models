import { motion } from "framer-motion";
import styled from "styled-components";
import { QUERIES } from "../utils/constants";

const notificationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: "easeOut", duration: 0.15 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};

interface IProps {
  notifications: any;
  setNotifications: any;
  text: any;
  handleClose: any;
  color: any;
}

const Notification = ({ text }: IProps) => {
  return (
    <NotificationAnimated
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      variants={notificationVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <NotificationText>You liked {text} !</NotificationText>
    </NotificationAnimated>
  );
};

const NotificationAnimated = styled(motion.li)`
  padding: 5px;
  border-radius: 4px;
  margin: 5px;
  height: fit-content;
  background-color: aliceblue;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const NotificationText = styled.h3`
  margin: auto auto auto 0;
  padding: 4px;
  font-size: 100%;
  font-weight: 600;
  letter-spacing: 0.25px;
  font-family: "Montserrat", sans-serif;
`;

export default Notification;
