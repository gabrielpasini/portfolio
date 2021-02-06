import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Particles from 'react-particles-js';

const arraySkills = [
  {
    name: 'Javascript',
    level: '95%',
  },
  {
    name: 'ReactJs',
    level: '90%',
  },
  {
    name: 'React Native',
    level: '80%',
  },
  {
    name: 'AngularJS',
    level: '90%',
  },
  {
    name: 'Angular 5+',
    level: '45%',
  },
  {
    name: 'NodeJS',
    level: '50%',
  },
  {
    name: 'MongoDB',
    level: '40%',
  },
  {
    name: 'CSS',
    level: '75%',
  },
  {
    name: 'C/C++',
    level: '70%',
  },
  {
    name: 'Python',
    level: '30%',
  },
];

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
        <Particles
          className="particles-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            background: 'url(images/blue_galaxy.jpg)',
          }}
          params={{
            color: {
              value: '#ffffff',
            },
            particles: {
              number: {
                value: 75,
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className={path === 'home' ? 'current' : ''}>
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
          <a className="scrolldown">v</a>
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
                      ></span>
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
              <img alt="uti_aux" src="/images/uti_aux1.png" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>UTI AUX</h5>
                  <p>Em Breve!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="" title="projeto2" target="_blank">
                <img alt="projeto2" src="images/portfolio/resume-website.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Projeto 2</h5>
                    <p>Categoria</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Entre em contato.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">Dúvidas? Sugestões?</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
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
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Assunto</label>
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
                    rows="15"
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

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contato</h4>
              <p className="address">
                Gabriel Pasini
                <br />
                Porto Alegre - RS
                <br />
                <span>(51)99242-9497</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/gabrielfsk/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-pasini-963006180/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/gabrielpasini" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 Gabriel Pasini</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
