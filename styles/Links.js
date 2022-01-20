import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChevronRight from '@material-ui/icons/ChevronRight';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const TitleLogo = styled.div`
  z-index: 3;
  color: #fff;
  font-size: 32px;
  text-shadow: 0px 0px 20px #222;
  animation: glitch 5s alternate infinite;
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

export const Button = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(48, 162, 255, 0.7);
  border: none;
  box-shadow: 0px 0px 20px #222;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: rgba(48, 162, 255, 1);
    transform: translateY(-5px);
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  display: flex;
  align-self: center;
  height: 20px;
  width: auto;
  margin: 0 10px 0 0;
`;

export const GoToContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
`;

export const GoTo = styled.div`
  height: 30px;
  width: 30px;
  line-height: 30px;
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
    background-color: rgba(48, 162, 255, 1);
  }
`;

export const RightIcon = styled(ChevronRight)`
  height: 30px !important;
  width: 30px !important;
`;
