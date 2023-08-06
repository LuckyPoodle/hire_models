import Logo from "./Logo";
import styled from "styled-components";
import { GitHub } from "react-feather";



const Footer = () => {
  return (
    <FooterWrapper>
      <LogoBlock>
        <Logo />
        <p>
          Happy Road 123 <br /> Wonderful Land
        </p>
      </LogoBlock>

      <TextWrapper>
        <a href="https://github.com/LuckyPoodle/hire_models"><GitHub /></a>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.p`
  width: 50%;
  text-align: end;
  padding: 1rem;
`;
