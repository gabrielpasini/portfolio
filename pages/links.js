import Link from 'next/link';
import Particles from 'react-particles-js';
import { LinkStyle, buttonProps, bgStyle, bgParams } from '../public/utils';
import { Fade, Flip } from 'react-reveal';
import { Tooltip } from '@material-ui/core';
import { PageContainer } from '../styles/Home';
import {
  Content,
  TitleLogo,
  Button,
  SocialIcon,
  GoToContainer,
  GoTo,
  RightIcon,
} from '../styles/Links';

const Links = () => {
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
        <TitleLogo title="GABRIEL PASINI" randomcolor={getRandomColor}>
          GABRIEL PASINI
        </TitleLogo>
        {buttonProps.length > 0 &&
          buttonProps.map((button, index) => (
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
        <Tooltip placement="left" title="Portfólio / Contato" arrow>
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
        <Particles style={bgStyle} params={bgParams} />
      </Content>
    </PageContainer>
  );
};

export default Links;
