import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageContainer = styled.div`
  scroll-behavior: smooth;
  font-family: Anton;
  position: absolute;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const TitleLogo = styled.div`
  z-index: 1;
  font-size: 120px;
  color: #fff;
  text-shadow: 0px 0px 20px #222;
  animation: glitch 5s alternate infinite;
  @media (max-width: 1200px) {
    font-size: 80px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  :before {
    content: attr(title);
    position: fixed;
  }
  :before {
    text-shadow: none;
    animation: glitchTop 2s alternate infinite;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
  }
  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(20deg);
    }
  }
  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
      color: #fff;
    }
    4%,
    60% {
      transform: translate(0, 0);
      color: #fff;
    }
    62% {
      transform: translate(40px, 0) skew(-10deg);
      color: ${(props) => props.randomcolor};
    }
  }
`;

export const Subtitle = styled.span`
  z-index: 1;
  font-size: 32px;
  color: #fff;
  text-shadow: 0px 0px 20px #222;
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InputText = styled.input`
  width: 100%;
  margin: 10px 0;
  border: none;
  border-radius: 6px;
  padding: 6px;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 4px 10px #222;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  :focus {
    outline: none;
    color: #fff;
    background-color: #333;
  }
  ::placeholder {
    color: #888;
  }
  ${(props) => props.error && `background-color: #f44336`}
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  resize: none;
  border: none;
  border-radius: 6px;
  padding: 6px;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 4px 10px #222;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  :focus {
    outline: none;
    color: #fff;
    background-color: #333;
  }
  ::placeholder {
    color: #888;
  }
`;

export const SendButton = styled.button`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-weight: bold;
  width: 40%;
  height: 32px;
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #30a2ff;
  box-shadow: 0px 4px 10px #222;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  & > :last-child {
    font-size: 18px;
    margin-left: 8px;
  }
  :hover:enabled {
    width: 100%;
  }
  :disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: #888;
  }
`;

export const ButtonHomeContainer = styled.div`
  position: absolute;
  display: block;
  bottom: 30px;
`;

export const ScrollDown = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 100%;
  text-decoration: none;
  color: #888;
  background-color: #fff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  animation: downBouncing 1s infinite alternate;
  @keyframes downBouncing {
    from {
      box-shadow: 0px 0px 0px #222;
      transform: scale(1);
    }
    to {
      box-shadow: 0px 0px 20px #222;
      transform: scale(1.1);
    }
  }
  :hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const BottomIcon = styled(ExpandMoreIcon)`
  margin: 0;
  height: 40px !important;
  width: 40px !important;
`;

export const ContactContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  background: radial-gradient(circle at top, #30a2ff 10%, #000 80%);
  color: #fff;
`;

export const ContactHead = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  & p {
    font-size: 24px;
    margin: 20px 10px 0 10px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const ContactIcon = styled(MailOutlineIcon)`
  width: 60px !important;
  height: 60px !important;
  padding-top: 12px;
  margin-left: 5%;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
  width: 45%;
  padding-right: 5%;
  @media (max-width: 768px) {
    margin: 0 5%;
    width: 90%;
  }
`;

export const ContactInfo = styled.div`
  margin-right: 5%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
  & p {
    font-size: 18px;
    letter-spacing: 1px;
    margin: 0;
    color: #fff;
  }
`;

export const WhatsContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0px 0px 20px #222;
    width: 260px;
    height: 260px;
  }
`;

export const WhatsQrCode = styled.img`
  width: 100%;
`;

export const ButtonFooterContainer = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: -20px;
  margin-right: 50px;
  align-self: flex-end;
  @media (max-width: 768px) {
    margin-right: 0;
    align-self: center;
  }
`;

export const ScrollTop = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  animation: topBouncing 1s infinite alternate;
  @keyframes topBouncing {
    from {
      box-shadow: 0px 0px 0px #222;
      transform: scale(1);
    }
    to {
      box-shadow: 0px 0px 20px #222;
      transform: scale(1.1);
    }
  }
  :hover {
    transform: scale(1.2);
    color: #333;
    background-color: #fff;
  }
`;

export const TopIcon = styled(ExpandLessIcon)`
  margin: 0px;
  height: 40px !important;
  width: 40px !important;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  margin-bottom: 0px;
  width: 100%;
  color: #333;
  background-color: #fff;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SocialIcons = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  margin: 14px 14px 8px 14px;
  color: #30a2ff;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.3);
  }
`;

export const Copyright = styled.div`
  margin: 0 0 8px 0;
`;
