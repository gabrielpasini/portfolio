import { Tooltip } from '@material-ui/core';
import Link from 'next/link';
import Particles from 'react-particles-js';
import { Fade, Flip } from 'react-reveal';
import { bgParams, bgStyle, LinkStyle, socialButtons } from '../public/utils';
import { PageContainer } from '../styles/Home';
import {
  Button,
  Content,
  GoTo,
  GoToContainer,
  RightIcon,
  SocialIcon,
  TitleLogo,
} from '../styles/Links';

const Socials = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <PageContainer>
      <Content>
        <Tooltip placement="left" title="Website / Portfólio" arrow>
          <GoToContainer>
            <Fade right ssrReveal delay={2000} duration={1000}>
              <Link href="/">
                <a>
                  <GoTo onClick={() => {}}>
                    <RightIcon />
                  </GoTo>
                </a>
              </Link>
            </Fade>
          </GoToContainer>
        </Tooltip>
        <TitleLogo title="GABRIEL PASINI" randomcolor={getRandomColor}>
          GABRIEL PASINI - FAISKA
        </TitleLogo>
        {socialButtons.length > 0 &&
          socialButtons.map((button, index) => (
            <Link href={button.url} key={index}>
              <a target="_blank" style={LinkStyle}>
                <Button>
                  <Flip bottom ssrReveal cascade duration={1000}>
                    <SocialIcon icon={button.icon} />
                    {button.title}
                  </Flip>
                </Button>
              </a>
            </Link>
          ))}
        <Particles style={bgStyle} params={bgParams} />
      </Content>
    </PageContainer>
  );
};

export default Socials;
