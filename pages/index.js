import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { arraySkills, bgStyle, bgParams } from '../public/utils';

const Home = () => {
  const router = useRouter();
  const [path, setPath] = useState('');

  useEffect(() => {
    const newPath = router.asPath.substr(2);
    if (newPath !== path) {
      setPath(newPath);
    }
  }, [router.asPath]);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div id="page-container">
      <header id="home">
        <p className="text-logo">Gabriel Pasini</p>
        <Particles className="particles-bg" style={bgStyle} params={bgParams} />
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className={path === 'home' || path === '' ? 'current' : ''}>
              <Link href="#home">
                <a>Início</a>
              </Link>
            </li>
            <li className={path === 'about' ? 'current' : ''}>
              <Link href="#about">
                <a>Sobre</a>
              </Link>
            </li>
            <li className={path === 'resume' ? 'current' : ''}>
              <Link href="#resume">
                <a>Competências</a>
              </Link>
            </li>
            <li className={path === 'portfolio' ? 'current' : ''}>
              <Link href="#portfolio">
                <a>Projetos</a>
              </Link>
            </li>
            <li className={path === 'contact' ? 'current' : ''}>
              <Link href="#contact">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="#about">
          <a className="scrolldown">
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </a>
        </Link>
      </header>
      <section id="about">
        <div className="row">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/34244299?s=460&u=c708c76f08bfa17f968a3776e9fb041755106588&v=4"
            alt="Perfil"
          />
          <div className="main-col">
            <h2>Sobre mim...</h2>
            <p>
              Sempre fui fascinado por técnologia, na infância brincava de
              consertar os equipamentos (e muitas vezes funcionava) e também de
              criar coisas novas (gambiarra). Iniciei minha carreira
              profissional na área de hardware/eletrônica criando um amor imenso
              por computadores e smartphones, o que abriu meus olhos e me guiou
              até o mundo do desenvolvimento web/mobile, mundo em que entrei de
              cabeça desde então, se tornando meu principal objetivo de
              carreira! Enfim, sou apaixonado por desenvolver coisas incríveis,
              da aplicação móvel ao circuito impresso na placa utilizando meus
              conhecimentos adquiridos até os dias de hoje!
            </p>
            <Link href="https://linktr.ee/gabrielfsk">
              <a className="links" target="_blank">
                Links
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="row dev">
          <h1>
            <span>Info</span>
          </h1>
          <div className="item">
            <p className="info">
              Nome
              <br />
              <span>&bull;</span>{' '}
              <em className="date">Gabriel de Azevedo Pasini</em>
            </p>
            <p className="info">
              Data de Nascimento
              <br />
              <span>&bull;</span> <em className="date">25/05/1995</em>
            </p>
            <p className="info">
              Especialidade
              <br />
              <span>&bull;</span>{' '}
              <em className="date">Desenvolvimento Web/Mobile</em>
            </p>
            <p className="info">
              Formação
              <br />
              <span>&bull;</span>{' '}
              <em className="date">
                Engenharia de Computação - FTEC [2015/Atualmente]
              </em>
              <br />
              <span>&bull;</span>{' '}
              <em className="date">
                Técnico em Eletrônica - Mesquita [2012/2013]
              </em>
            </p>
          </div>
        </div>
        <div className="row skills">
          <h1>
            <span>Skills</span>
          </h1>
          <div className="bars item">
            <ul className="skill">
              {arraySkills.length &&
                arraySkills.map((skill) => {
                  const className = 'bar-expand ' + skill.name.toLowerCase();
                  return (
                    <li key={skill.name}>
                      <span
                        style={{
                          width: skill.level,
                          backgroundColor: getRandomColor(),
                        }}
                        className={className}
                      >
                        {skill.icon && (
                          <FontAwesomeIcon icon={skill.icon} className="icon" />
                        )}
                      </span>
                      <em>{skill.name}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <h1>Meus Projetos</h1>
        <div className="row">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/gabrielpasini/portfolio"
                title="Portfólio"
                target="_blank"
              >
                <img alt="portfolio" src="/images/uti_aux1.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Portfólio</h5>
                    <p>Portólio criado em React com NextJS</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://github.com/gabrielpasini/react_ecommerce_frontend"
                title="Lojinha.com"
                target="_blank"
              >
                <img alt="Lojinha.com" src="/images/lojinha.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Lojinha.com</h5>
                    <p>Modelo de E-Commerce criado em React</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <img alt="uti_aux" src="/images/uti_aux1.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>UTI AUX</h5>
                  <p>Em Breve!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="row section-head">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p className="lead">Dúvidas? Sugestões? Entre em contato!</p>
        </div>
        <div className="row">
          <div className="email">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
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
                    onChange={() => {}}
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
                    onChange={() => {}}
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
                    onChange={() => {}}
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Mensagem <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="10"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>
                <div>
                  <button className="submit">Enviar</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning">Erro!</div>
            <div id="message-success">
              <i className="fa fa-check"></i> Sua mensagem foi enviada,
              obrigado!
              <br />
            </div>
          </div>
          <aside className="contatos">
            <p className="address">
              E-mail: gabrielpasini@outlook.com.br
              <br />
              Local: Porto Alegre - RS
              <br />
              Fone: (51)99242-9497
            </p>
            <Link href="https://wa.me/qr/FAE64I55QBQOK1">
              <a title="WhatsApp" target="_blank">
                <img
                  className="whats-qrcode"
                  src="/images/whats_qrcode.jpg"
                  alt="Whats QR-Code"
                />
              </a>
            </Link>
          </aside>
        </div>
      </section>
      <footer>
        <div className="row">
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
        </div>
        <ul className="copyright">
          <li>&copy; Copyright 2021 Gabriel Pasini</li>
        </ul>
        <div id="go-top">
          <Link href="#home">
            <a className="scroll-to-top">
              <FontAwesomeIcon icon={faAngleUp} className="icon" />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Home;
