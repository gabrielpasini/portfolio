import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Axios from '../axios';
import { bgStyle, bgParams, projects } from '../public/utils';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Fade, Flip, LightSpeed } from 'react-reveal';
import SendIcon from '@material-ui/icons/Send';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  PageContainer,
  HomeContent,
  TitleLogo,
  Subtitle,
  InputText,
  InputTextArea,
  SendButton,
  ButtonHomeContainer,
  ScrollDown,
  BottomIcon,
  ContactContent,
  ContactHead,
  ContactIcon,
  ContactForm,
  ButtonFooterContainer,
  ScrollTop,
  TopIcon,
  Footer,
  SocialsContainer,
  SocialIcons,
  Copyright,
  BioInfo,
  BioLinks,
  BioAvatar,
  BioTags,
  ProjectsContent,
  ProjectsHead,
  ProjectsRow,
  ProjectsIcon,
  ProjectCard,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription,
  CardPlatforms,
  PlatformTag,
  PlatformIcon,
  CardAchievements,
  AchievIcon,
  Achievement,
  Parallax,
} from '../styles/Home';

const parallaxRange = 40;

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Home = () => {
  let timeout;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [pageWidth, setPageWidth] = useState(0);

  const isMobile = pageWidth < 768;

  const cleanForm = () => {
    setEmail('');
    setMessage('');
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  function calcValue(a, b) {
    return ((a / b) * parallaxRange - parallaxRange / 2).toFixed(1);
  }

  function animate({ x, y }) {
    if (timeout) window?.cancelAnimationFrame(timeout);

    timeout = window?.requestAnimationFrame(() => {
      const parallaxElement = document.getElementById('parallax');

      const yValue = calcValue(y, window?.innerHeight);
      const xValue = calcValue(x, window?.innerWidth);

      parallaxElement.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
    });
  }

  const getCurrentYear = () => new Date().getFullYear();

  const submitEmail = async (event) => {
    event.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setShowError(true);
      setShowSuccess(false);
      setSuccessMessage('');
      setErrorMessage('E-mail inválido!');
      return;
    }
    setLoading(true);
    try {
      const sendedEmail = await Axios.post(`email/gabriel`, {
        email: email,
        mensagem: message,
      });

      if (sendedEmail?.data?.status === 'success') {
        setShowSuccess(true);
        setShowError(false);
        setSuccessMessage(sendedEmail?.data?.message);
        setErrorMessage('');
        cleanForm();
      }
    } catch (err) {
      setShowError(true);
      setShowSuccess(false);
      setSuccessMessage('');
      setErrorMessage(err?.data?.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPageWidth(window?.innerWidth);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.onmousemove = undefined;
      return;
    }
    document.onmousemove = ({ x, y }) => animate({ x, y });
  }, [isMobile]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <PageContainer>
        <HomeContent id="home">
          <Particles
            style={bgStyle}
            id="particles"
            init={particlesInit}
            options={bgParams}
          />
          <Parallax id="parallax">
            <Subtitle>
              <Fade left ssrReveal cascade duration={400}>
                GABRIEL PASINI
              </Fade>
            </Subtitle>
            <TitleLogo>SOFTWARE DEVELOPER</TitleLogo>
            <SocialsContainer>
              <Fade left ssrReveal cascade delay={200} duration={400}>
                <BioInfo>
                  <BioAvatar
                    src="https://avatars.githubusercontent.com/u/34244299?v=4"
                    alt="avatar"
                  />
                  <BioTags>
                    <span>25/05/1995</span>
                    <span>Alvorada - RS</span>
                  </BioTags>
                </BioInfo>
                <BioLinks>
                  <Link href="https://github.com/gabrielpasini">
                    <a target="_blank">
                      <Flip right ssrReveal delay={600} duration={1000}>
                        <SocialIcons icon={faGithub} />
                      </Flip>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/gabriel-pasini-963006180/">
                    <a target="_blank">
                      <Flip right ssrReveal delay={650} duration={1000}>
                        <SocialIcons icon={faLinkedinIn} />
                      </Flip>
                    </a>
                  </Link>
                </BioLinks>
              </Fade>
            </SocialsContainer>
          </Parallax>
          <ButtonHomeContainer>
            <Fade bottom ssrReveal delay={500} duration={1000}>
              <ScrollDown onClick={() => scrollTo('projects')}>
                <BottomIcon />
                <span>projetos</span>
              </ScrollDown>
            </Fade>
          </ButtonHomeContainer>
        </HomeContent>
        <ProjectsContent id="projects">
          <ProjectsHead>
            <ProjectsIcon />
            <p>Meus projetos</p>
          </ProjectsHead>
          <ProjectsRow>
            {projects?.length &&
              projects.map((project) => (
                <ProjectCard production={project.production} key={project.name}>
                  <Fade ssrReveal cascade delay={400} duration={800}>
                    <CardIcon src={project.icon} alt={project.name} />
                    <CardContent>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                      {project.achievements?.length &&
                        project.achievements.map((achiev) => (
                          <CardAchievements key={achiev.name}>
                            <AchievIcon place={achiev.place} />
                            <Achievement>
                              {achiev.place}° - {achiev.name}
                            </Achievement>
                          </CardAchievements>
                        ))}
                      <CardPlatforms>
                        {project.platforms?.length &&
                          project.platforms.map((platform) => (
                            <PlatformTag key={platform.name}>
                              <Link href={platform.url}>
                                <a target="_blank">{platform.name}</a>
                              </Link>
                              <PlatformIcon />
                            </PlatformTag>
                          ))}
                      </CardPlatforms>
                    </CardContent>
                  </Fade>
                </ProjectCard>
              ))}
          </ProjectsRow>
        </ProjectsContent>
        <ContactContent id="contact">
          <Fade top ssrReveal duration={1000}>
            <ContactHead>
              <ContactIcon />
              <p>
                Quer fazer um orçamento? Ficou com alguma dúvida? Me envie uma
                mensagem!
              </p>
            </ContactHead>
          </Fade>
          <ContactForm noValidate autoComplete="off">
            <Fade left ssrReveal cascade duration={500}>
              <InputText
                id="email"
                type="email"
                placeholder="digite o seu e-mail"
                error={showError}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setShowError(false);
                }}
              />
              <InputTextArea
                id="mensagem"
                type="textarea"
                placeholder="digite a mensagem"
                rows={isMobile ? 1 : 4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <SendButton disabled={!email || !message} onClick={submitEmail}>
                <span>enviar</span>
                <SendIcon />
              </SendButton>
            </Fade>
          </ContactForm>
          <Footer>
            <ButtonFooterContainer>
              <Fade right ssrReveal delay={2000} duration={1000}>
                <ScrollTop onClick={() => scrollTo('home')}>
                  <TopIcon />
                </ScrollTop>
              </Fade>
            </ButtonFooterContainer>
            <LightSpeed left ssrReveal delay={1000} duration={800}>
              <Copyright>
                &copy; Copyright {getCurrentYear()} pasini.dev CNPJ: 57.437.573/0001-02
              </Copyright>
            </LightSpeed>
          </Footer>
        </ContactContent>
      </PageContainer>
      {loading && (
        <Backdrop style={{ zIndex: 1000, color: '#fff' }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Snackbar
        open={showSuccess}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={10000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={10000}
        onClose={() => setShowError(false)}
      >
        <Alert onClose={() => setShowError(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
