import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { Tooltip } from '@material-ui/core';
import Link from 'next/link';
import Particles from 'react-particles';
import { Fade, Flip } from 'react-reveal';
import { allButtons, bgParams, bgStyle, LinkStyle } from '../public/utils';
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

const MyLinks = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
          GABRIEL PASINI
        </TitleLogo>
        {allButtons.length > 0 &&
          allButtons.map((button, index) => (
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
        <Particles
          style={bgStyle}
          id="particles"
          init={particlesInit}
          options={bgParams}
        />
      </Content>
    </PageContainer>
  );
};

export default MyLinks;
