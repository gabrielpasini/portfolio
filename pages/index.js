import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';
import {
  Backdrop,
  CircularProgress,
  Snackbar,
  makeStyles,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from '../axios';
import { bgStyle, bgParams } from '../public/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
  const classes = useStyles();
  const router = useRouter();
  const [path, setPath] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mensagemSuccess, setMensagemSuccess] = useState('');
  const [mensagemError, setMensagemError] = useState('');
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const newPath = router.asPath.substr(2);
    if (newPath !== path) {
      setPath(newPath);
    }
  }, [router.asPath]);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  function limpaCampos() {
    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
  }

  async function submitEmail() {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setError(true);
      setSuccess(false);
      setMensagemSuccess('');
      setMensagemError('E-mail inválido!');
      return;
    }
    setLoading(true);
    try {
      const emailEnviado = await Axios.post(`email/gabriel`, {
        nome,
        email,
        assunto,
        mensagem,
      });
      if (emailEnviado.data.status === 'success') {
        setSuccess(true);
        setError(false);
        setMensagemSuccess(emailEnviado.data.message);
        setMensagemError('');
        limpaCampos();
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
      setMensagemSuccess('');
      setMensagemError(err.data.message);
    }
    setLoading(false);
  }

  return (
    <>
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Snackbar
        open={success}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={10000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          {mensagemSuccess}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={10000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          {mensagemError}
        </Alert>
      </Snackbar>
      <div id="page-container">
        <header id="home">
          <p className="text-logo">GABRIEL PASINI</p>
          <span className="sub-text">Desenvolvedor de Software</span>
          <Particles
            className="particles-bg"
            style={bgStyle}
            params={bgParams}
          />
          <Link href="#contact">
            <a className="scrolldown">
              <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </a>
          </Link>
        </header>
        <section id="contact">
          <div className="section-head">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p className="lead">Dúvidas? Sugestões? Entre em contato!</p>
          </div>
          <div className="row">
            <div className="email" id="contactForm" name="contactForm">
              <div>
                <label htmlFor="contactName">
                  Nome <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(event) => setNome(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  E-mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactSubject">
                  Assunto <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(event) => setAssunto(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  Mensagem <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows={pageWidth > 768 ? '7' : '2'}
                  id="contactMessage"
                  name="contactMessage"
                  onChange={(event) => setMensagem(event.target.value)}
                ></textarea>
              </div>
              <button
                className="enviarEmail"
                disabled={!nome || !email || !assunto || !mensagem}
                onClick={() => submitEmail()}
              >
                Enviar
              </button>
            </div>
            <div className="contatos">
              <p className="address">
                E-mail: gabrielpasini@outlook.com.br
                <br />
                Local: Porto Alegre - RS
                <br />
                Fone: (51)99242-9497
              </p>
              <div className="QRContainer">
                <Link href="https://wa.me/qr/FAE64I55QBQOK1">
                  <a title="WhatsApp" target="_blank">
                    <img
                      className="whats-qrcode"
                      src="/images/whats_qrcode.jpg"
                      alt="Whats QR-Code"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="customFooter">
              <Link href="#home">
                <a className="scroll-to-top">
                  <FontAwesomeIcon icon={faAngleUp} className="icon" />
                </a>
              </Link>
              <div className="social-links">
                <Link href="https://www.instagram.com/gabrielfsk/">
                  <a target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-pasini-963006180/">
                  <a target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                  </a>
                </Link>
                <Link href="https://github.com/gabrielpasini">
                  <a target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                </Link>
              </div>
              <ul className="copyright">
                <li>&copy; Copyright 2021 Gabriel Pasini</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
