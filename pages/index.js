import { useState, useEffect } from 'react';
import Link from 'next/link';
import Axios from '../axios';
import { bgStyle, bgParams } from '../public/utils';
import Particles from 'react-particles-js';
import { Fade, Roll, Flip, LightSpeed } from 'react-reveal';
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
  BioInfo,
  ButtonFooterContainer,
  ScrollTop,
  TopIcon,
  Footer,
  SocialsContainer,
  SocialIcons,
  Copyright,
  BioContent,
  BioRow,
  BioProfileContainer,
  BioAvatar,
  BioTags,
  ButtonBioContainer,
} from '../styles/Home';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [pageWidth, setPageWidth] = useState(0);
  const [randomColor, setRandomColor] = useState('#fff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  };

  const cleanForm = () => {
    setName('');
    setEmail('');
    setSubject('');
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
        nome: name,
        email: email,
        assunto: subject,
        mensagem: message,
      });
      if (sendedEmail.data.status === 'success') {
        setShowSuccess(true);
        setShowError(false);
        setSuccessMessage(sendedEmail.data.message);
        setErrorMessage('');
        cleanForm();
      }
    } catch (err) {
      setShowError(true);
      setShowSuccess(false);
      setSuccessMessage('');
      setErrorMessage(err.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPageWidth(window.innerWidth);
    getRandomColor();
  }, []);

  return (
    <>
      <PageContainer>
        <HomeContent id="home">
          <TitleLogo title="GABRIEL PASINI" randomcolor={randomColor}>
            GABRIEL PASINI
          </TitleLogo>
          <Subtitle>Desenvolvedor de Software</Subtitle>
          <Particles style={bgStyle} params={bgParams} />
          <ButtonHomeContainer>
            <Fade bottom ssrReveal delay={500} duration={1000}>
              <ScrollDown onClick={() => scrollTo('bio')}>
                <BottomIcon />
              </ScrollDown>
            </Fade>
          </ButtonHomeContainer>
        </HomeContent>
        <BioContent id="bio">
          <BioRow>
            <BioProfileContainer>
              <Fade left ssrReveal cascade duration={400}>
                <BioAvatar
                  src="https://avatars.githubusercontent.com/u/34244299?v=4"
                  alt="avatar"
                />
                <BioTags>
                  <div>
                    <span>Gabriel Pasini</span>
                  </div>
                  <div>
                    <span>1995</span>
                  </div>
                  <div>
                    <span>Porto Alegre - RS</span>
                  </div>
                </BioTags>
              </Fade>
            </BioProfileContainer>
            <BioInfo>
              <Fade ssrReveal duration={800}>
                <div>
                  <span>
                    Iniciei na eletrônica e me apaixonei por programação, hoje
                    em dia posso dizer que o meu combustível é desenvolver
                    soluções diferenciadas, da aplicação móvel ao circuito
                    impresso na placa!
                    <br />
                    Quando sou questionado sobre o que mais gosto na área, fica
                    difícil responder, pois, além de amar desenvolver como
                    profissional, tenho meus próprios projetos e nas horas de
                    lazer também o faço como hobby.
                    <br />
                    <br />
                    Minhas especialidades são:
                    <br />
                    - Desenvolver websites e sistemas responsivos [ReactJS];
                    <br />
                    - Desenvolver aplicativos para Android/iOS [ReactNative |
                    Expo];
                    <br />
                    - Desenvolver APIs e integrações com banco de dados [NodeJS
                    | MongoDB];
                    <br />
                    - Desenvolver software/hardware de IOT para automações
                    [Alexa | MQTT | Arduino];
                    <br />
                    - Realizar a publicação e gerenciamento de Apps nas lojas
                    [GooglePlay | AppleStore];
                    <br />
                    <br />
                  </span>
                </div>
              </Fade>
            </BioInfo>
          </BioRow>
          <ButtonBioContainer>
            <Fade bottom ssrReveal delay={500} duration={1000}>
              <ScrollDown onClick={() => scrollTo('contact')}>
                <BottomIcon />
              </ScrollDown>
            </Fade>
          </ButtonBioContainer>
        </BioContent>
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
                id="nome"
                type="text"
                placeholder="digite o seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
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
              <InputText
                id="assunto"
                type="text"
                placeholder="digite o assunto"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              <InputTextArea
                id="mensagem"
                type="textarea"
                placeholder="digite a mensagem"
                rows={pageWidth > 768 ? 4 : 1}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <SendButton
                disabled={!name || !email || !subject || !message}
                onClick={submitEmail}
              >
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
            <SocialsContainer>
              <Link href="https://github.com/gabrielpasini">
                <a target="_blank">
                  <Flip bottom ssrReveal delay={600} duration={1000}>
                    <SocialIcons icon={faGithub} />
                  </Flip>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/gabriel-pasini-963006180/">
                <a target="_blank">
                  <Flip bottom ssrReveal delay={650} duration={1000}>
                    <SocialIcons icon={faLinkedinIn} />
                  </Flip>
                </a>
              </Link>
            </SocialsContainer>
            <LightSpeed left ssrReveal delay={1000} duration={800}>
              <Copyright>&copy; Copyright 2022 Gabriel Pasini</Copyright>
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
