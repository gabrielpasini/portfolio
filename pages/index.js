import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';
import {
  Backdrop,
  CircularProgress,
  Snackbar,
  Button,
  TextField,
  withStyles,
  makeStyles,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from '../axios';
import { bgStyle, bgParams } from '../public/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const InputText = withStyles({
  root: {
    marginBottom: 20,
    '& .MuiOutlinedInput-inputMarginDense': {
      color: '#fff',
    },
    '& label': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#30a2ff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#30a2ff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderWidth: 3,
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#30a2ff',
      },
    },
  },
})(TextField);

const SendButton = withStyles(() => ({
  root: {
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#fff',
    '&:hover': {
      color: '#333',
      backgroundColor: '#30a2ff',
    },
    '&:disabled': {
      backgroundColor: '#888',
    },
  },
}))(Button);

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
  });

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
              <ExpandMoreIcon className="icon" />
            </a>
          </Link>
        </header>
        <section id="contact">
          <div className="section-head">
            <MailOutlineIcon className="icon" />
            <p className="lead">Dúvidas? Sugestões? Entre em contato!</p>
          </div>
          <div className="row">
            <form className="email" noValidate autoComplete="off">
              <InputText
                label="Nome"
                variant="outlined"
                size="small"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
              <InputText
                label="E-mail"
                variant="outlined"
                size="small"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <InputText
                label="Assunto"
                variant="outlined"
                size="small"
                value={assunto}
                onChange={(event) => setAssunto(event.target.value)}
              />
              <InputText
                label="Mensagem"
                variant="outlined"
                size="small"
                multiline
                rows={pageWidth > 768 ? 4 : 1}
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
              />
              <SendButton
                variant="contained"
                disabled={!nome || !email || !assunto || !mensagem}
                onClick={() => submitEmail()}
                endIcon={<SendIcon />}
              >
                Enviar
              </SendButton>
            </form>
            <div className="contatos">
              <p className="address">
                E-mail: gabrielpasini@outlook.com.br
                <br />
                Local: Porto Alegre - RS
                <br />
                Fone: (51)99242-9497
              </p>
              {pageWidth > 768 ? (
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
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="customFooter">
              <Link href="#home">
                <a className="scroll-to-top">
                  <ExpandLessIcon className="icon" />
                </a>
              </Link>
              <div className="social-links">
                {pageWidth < 768 ? (
                  <Link href="https://wa.me/qr/FAE64I55QBQOK1">
                    <a target="_blank">
                      <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                    </a>
                  </Link>
                ) : null}
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
