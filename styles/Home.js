import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DevicesIcon from '@material-ui/icons/ImportantDevices';
import LaunchIcon from '@material-ui/icons/Launch';
import TrophyIcon from '@material-ui/icons/EmojiEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageContainer = styled.div`
  scroll-behavior: smooth;
  font-family: Poppins;
  font-weight: bold;
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
  background: linear-gradient(45deg, #222, #444);
  background-size: 300% 300%;
  animation: colors 15s ease infinite;

  @keyframes colors {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;

export const Parallax = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70vw;
  transform-style: preserve-3d;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TitleLogo = styled.div`
  font-size: max(60px, 13vw);
  line-height: 0.8em;
  color: #fff;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);
  transform: translateZ(48px);
`;

export const Subtitle = styled.span`
  font-size: max(24px, 3vw);
  text-align: left;
  width: 100%;
  color: #30a2ff;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);
  transform: translateZ(64px);
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 60px;
  margin-top: 16px;
  transform: translateZ(64px);

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const BioInfo = styled.div`
  display: flex;
  flex: 0.5;
`;

export const BioTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
    background-color: #fff;
    color: #30a2ff;
    border-radius: 4px;
    padding: 2px 6px;
    margin-left: 8px;
    text-align: center;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.6));

    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
`;

export const BioAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BioLinks = styled.div`
  display: flex;
  flex: 0.5;
  justify-self: flex-end;
  margin: 0 16px;
`;

export const SocialIcons = styled(FontAwesomeIcon)`
  width: 60px;
  height: 60px;
  margin-left: 16px;
  color: #30a2ff;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.6));
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  animation: iconsBouncing 0.8s infinite alternate;
  @keyframes iconsBouncing {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
  :hover {
    cursor: pointer;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ButtonHomeContainer = styled.div`
  position: absolute;
  display: block;
  bottom: 2vh;
  z-index: 2;
`;

export const ScrollDown = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  background-color: #30a2ff;
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
      box-shadow: 0px 0px 8px #222;
      transform: scale(1.1);
    }
  }
  :hover {
    cursor: pointer;
    color: #30a2ff;
    background-color: #fff;
  }
  span {
    font-size: 14px;
    margin-right: 6px;
  }
`;

export const BottomIcon = styled(ExpandMoreIcon)`
  height: 36px !important;
  width: 36px !important;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  color: #fff;
  padding: 32px 0 16px 0;
  background-color: #666;
`;

export const ProjectsHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  filter: drop-shadow(4px 4px 4px #333);
  & p {
    font-weight: bold;
    font-size: calc(1em + 0.8vw);
    line-height: 36px;
    margin: 0 0 0 8px;
  }
`;

export const ProjectsIcon = styled(DevicesIcon)`
  width: 36px !important;
  height: 36px !important;
  margin-left: 5%;
`;

export const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 4vw;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: calc(46vw - 42px);
  min-height: 160px;
  background-color: #fff;
  border-radius: 10px;
  margin: 16px;
  padding: 12px;
  box-sizing: border-box;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
  }
  ${(props) => !props.production && 'opacity: 0.8; filter: brightness(0.7)'}
`;

export const CardIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin-right: 12px;
  filter: drop-shadow(4px 4px 8px #888);
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.span`
  font-size: 20px;
  color: #000;
  font-weight: 900;
  margin-bottom: 4px;
`;

export const CardDescription = styled.span`
  font-size: 12px;
  color: #333;
  margin-bottom: 6px;
`;

export const CardAchievements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const AchievIcon = styled(TrophyIcon)`
  height: 20px !important;
  color: #${(props) => {
      switch (props.place) {
        case 1:
          return 'FEE101';
        case 2:
          return 'A7A7AD';
        case 3:
          return 'A77044';
      }
    }};
`;

export const Achievement = styled.span`
  font-size: 10px;
  line-height: 10px;
  color: #555;
`;

export const CardPlatforms = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 6px;
`;

export const PlatformTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #30a2ff;
  border-radius: 4px;
  padding: 2px 6px;
  margin: 0 4px 4px 0;
  height: 20px;
  transition: all 0.2s ease-in-out;
  a {
    text-decoration: none;
    font-size: 12px;
    color: #fff;
    margin-right: 4px;
  }
  :hover {
    cursor: pointer;
    filter: drop-shadow(4px 4px 4px #888);
  }
`;

export const PlatformIcon = styled(LaunchIcon)`
  width: 18px !important;
`;

export const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  color: #fff;
  background-color: #000;
  padding-top: 32px;
`;

export const ContactHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  filter: drop-shadow(4px 4px 4px #333);
  & p {
    font-weight: bold;
    font-size: calc(1em + 0.8vw);
    line-height: 36px;
    margin: 0 0 0 8px;
  }
`;

export const ContactIcon = styled(MailOutlineIcon)`
  width: 36px !important;
  height: 36px !important;
  margin-left: 5%;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: 16px 5%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const InputText = styled.input`
  font-family: Poppins;
  width: calc(100% - 12px);
  margin: 10px 0;
  border: none;
  padding: 6px;
  color: #fff;
  background-color: #333;
  border: 2px solid #ccc;
  border-radius: 4px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  :focus {
    outline: none;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 4px 10px #222;
  }
  ::placeholder {
    color: #888;
  }
  ${(props) => props.error && `background-color: #f44336`}
`;

export const InputTextArea = styled.textarea`
  font-family: Poppins;
  width: calc(100% - 12px);
  margin: 10px 0;
  resize: none;
  border: none;
  padding: 6px;
  color: #fff;
  background-color: #333;
  border: 2px solid #ccc;
  border-radius: 4px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  :focus {
    outline: none;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 4px 10px #222;
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
  font-family: Poppins;
  font-weight: bold;
  padding: 6px;
  width: 50%;
  height: 32px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #30a2ff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  & > :last-child {
    font-size: 18px;
    margin-left: 8px;
  }
  :hover:enabled {
    box-shadow: 0px 4px 10px #222;
  }
  :disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: #888;
  }
`;

export const ButtonFooterContainer = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: -20px;
  margin-right: 50px;
  align-self: flex-end;
  z-index: 2;
  @media (max-width: 768px) {
    margin-right: 12px;
    align-self: flex-end;
  }
`;

export const ScrollTop = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  background-color: #fff;
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
    color: #fff;
    background-color: #30a2ff;
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
  font-size: calc(0.8em + 0.1vw);
  text-align: center;
  margin-bottom: 0px;
  width: 100%;
  color: #ccc;
`;

export const Copyright = styled.div`
  margin: 12px 0;
`;
