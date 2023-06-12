
import Logo from "./Logo";
import styled from 'styled-components';
import NavLink from "./NavLink";


const Footer = () => {

 
  return (
    <FooterWrapper>
        <LogoBlock>
            <Logo />
            <p>Happy Road 123 <br/> Wonderful Land</p> 
        </LogoBlock>


    <TextWrapper>A portfolio project by Dylan Quek - sealiondev.com</TextWrapper>  
    </FooterWrapper>

  );
};

export default Footer;


const FooterWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const LogoBlock=styled.div`
    display: flex;
    flex-direction:column;
`

const TextWrapper=styled.p`
    width: 50%;
    text-align: end;


`