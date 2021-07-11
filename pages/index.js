import { useState, useEffect } from 'react';
import Link from 'next/link';
import Axios from '../axios';
import { bgStyle, bgParams } from '../public/utils';
import Particles from 'react-particles-js';
import { Fade, Roll, Flip, LightSpeed } from 'react-reveal';
import SendIcon from '@material-ui/icons/Send';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
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
  ContactRow,
  ContactForm,
  ContactInfo,
  WhatsContainer,
  WhatsQrCode,
  ButtonFooterContainer,
  ScrollTop,
  TopIcon,
  Footer,
  SocialsContainer,
  SocialIcons,
  Copyright,
} from '../styles';

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
        name,
        email,
        subject,
        message,
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
    /**  desativada pois quebra a performance da tela! */
    //setInterval(getRandomColor, 2000);
    //clearInterval();
    getRandomColor();
  }, []);

  return (
    <>
      <PageContainer>
        <HomeContent id="home">
          <TitleLogo title="GABRIEL PASINI" randomcolor={randomColor}>
            GABRIEL PASINI
          </TitleLogo>
          <Subtitle className="sub-text">Desenvolvedor de Software</Subtitle>
          <Particles style={bgStyle} params={bgParams} />
          <ButtonHomeContainer>
            <Fade bottom ssrReveal delay={500} duration={1000}>
              <ScrollDown onClick={() => scrollTo('contact')}>
                <BottomIcon />
              </ScrollDown>
            </Fade>
          </ButtonHomeContainer>
        </HomeContent>
        <ContactContent id="contact">
          <Fade top ssrReveal duration={1000}>
            <ContactHead>
              <ContactIcon />
              <p>Dúvidas? Sugestões? Entre em contato!</p>
            </ContactHead>
          </Fade>
          <ContactRow>
            <ContactForm noValidate autoComplete="off">
              <Fade left ssrReveal cascade duration={500}>
                <div>
                  <label htmlFor="nome">Nome:</label>
                </div>
                <InputText
                  id="nome"
                  type="text"
                  placeholder="digite o seu nome"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <div>
                  <label htmlFor="email">E-mail:</label>
                </div>
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
                <div>
                  <label htmlFor="assunto">Assunto:</label>
                </div>
                <InputText
                  id="assunto"
                  type="text"
                  placeholder="digite o assunto"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
                <div>
                  <label htmlFor="mensagem">Mensagem:</label>
                </div>
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
            <ContactInfo>
              <Fade right ssrReveal cascade duration={800}>
                <div>
                  <p>E-mail: gabrielpasini@outlook.com.br</p>
                </div>
                <div>
                  <p>Local: Porto Alegre - RS</p>
                </div>
                <div>
                  <p>Fone: (51)99242-9497</p>
                </div>
              </Fade>
              <WhatsContainer>
                <Link href="https://wa.me/qr/FAE64I55QBQOK1">
                  <a title="WhatsApp" target="_blank">
                    <Roll right ssrReveal duration={1000}>
                      <WhatsQrCode
                        src="/images/whats_qrcode.jpg"
                        alt="Whats QR-Code"
                      />
                    </Roll>
                  </a>
                </Link>
              </WhatsContainer>
            </ContactInfo>
          </ContactRow>
          <Footer>
            <ButtonFooterContainer>
              <Fade right ssrReveal delay={2000} duration={1000}>
                <ScrollTop onClick={() => scrollTo('home')}>
                  <TopIcon />
                </ScrollTop>
              </Fade>
            </ButtonFooterContainer>
            <SocialsContainer>
              {pageWidth < 768 ? (
                <Link href="https://wa.me/qr/FAE64I55QBQOK1">
                  <a target="_blank">
                    <Flip bottom ssrReveal delay={500} duration={1000}>
                      <SocialIcons icon={faWhatsapp} />
                    </Flip>
                  </a>
                </Link>
              ) : (
                <></>
              )}
              <Link href="https://www.instagram.com/gabrielfsk/">
                <a target="_blank">
                  <Flip bottom ssrReveal delay={550} duration={1000}>
                    <SocialIcons icon={faInstagram} />
                  </Flip>
                </a>
              </Link>
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
              <Copyright>&copy; Copyright 2021 Gabriel Pasini</Copyright>
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
