import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { bgStyle, bgParams, projects } from '../utils';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import {
  ExpandMoreIcon,
  ExpandLessIcon,
  ImportantDevicesIcon,
  LaunchIcon,
  EmojiEventsIcon,
} from '../components/Icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Home.module.scss';

const parallaxRange = 40;
const currentYear = new Date().getFullYear();

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

const fadeBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: 0.4 + i * 0.1 },
  }),
};

const flipRight = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: (i = 0) => ({
    opacity: 1,
    rotateY: 0,
    transition: { duration: 1, delay: 0.6 + i * 0.05 },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 } },
};

const achievIconClassMap = {
  1: styles.achievIconGold,
  2: styles.achievIconSilver,
  3: styles.achievIconBronze,
};

const Home = () => {
  const [particlesReady, setParticlesReady] = useState(false);

  const isMobileRef = useRef(window.innerWidth < 768);
  const rafRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, []);

  useEffect(() => {
    if (isMobileRef.current) return;

    const handleMouseMove = ({ clientX, clientY }) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const el = document.getElementById('parallax');
        if (!el) return;

        const yValue = (
          (clientY / window.innerHeight) * parallaxRange -
          parallaxRange / 2
        ).toFixed(1);
        const xValue = (
          (clientX / window.innerWidth) * parallaxRange -
          parallaxRange / 2
        ).toFixed(1);

        el.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const particlesOptions = useMemo(() => bgParams, []);

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.homeContent} id="home">
          {particlesReady && (
            <Particles
              style={bgStyle}
              id="particles"
              options={particlesOptions}
            />
          )}
          <div className={styles.parallax} id="parallax">
            <motion.span
              className={styles.subtitle}
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
            >
              GABRIEL PASINI
            </motion.span>
            <div className={styles.titleLogo}>SOFTWARE DEVELOPER</div>
            <div className={styles.socialsContainer}>
              <motion.div
                className={styles.bioInfo}
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
                custom={0.2}
              >
                <img
                  className={styles.bioAvatar}
                  src="https://avatars.githubusercontent.com/u/34244299?v=4"
                  alt="avatar"
                />
                <div className={styles.bioTags}>
                  <span>25/05/1995</span>
                  <span>Alvorada - RS</span>
                </div>
              </motion.div>
              <div className={styles.bioLinks}>
                <a
                  href="https://github.com/gabrielpasini"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={flipRight}
                    custom={0}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className={styles.socialIcon}
                    />
                  </motion.div>
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-pasini-963006180/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={flipRight}
                    custom={1}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={styles.socialIcon}
                    />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.buttonHomeContainer}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeBottom}
            >
              <div
                className={styles.scrollDown}
                onClick={() => scrollTo('projects')}
              >
                <ExpandMoreIcon size={36} />
                <span>projetos</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className={styles.projectsSection}>
          <div className={styles.projectsContent} id="projects">
            <div className={styles.projectsHead}>
              <ImportantDevicesIcon className={styles.projectsIcon} />
              <p>Meus projetos</p>
            </div>
            <div className={styles.projectsRow}>
              {projects?.length > 0 &&
                projects.map((project) => (
                  <motion.div
                    className={
                      project.production
                        ? styles.projectCard
                        : styles.projectCardInactive
                    }
                    key={project.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <img
                      className={styles.cardIcon}
                      src={project.icon}
                      alt={project.name}
                    />
                    <div className={styles.cardContent}>
                      <span className={styles.cardTitle}>{project.name}</span>
                      <span className={styles.cardDescription}>
                        {project.description}
                      </span>
                      {project.achievements?.length > 0 &&
                        project.achievements.map((achiev) => (
                          <div
                            className={styles.cardAchievements}
                            key={achiev.name}
                          >
                            <EmojiEventsIcon
                              className={
                                achievIconClassMap[achiev.place] ||
                                styles.achievIconBronze
                              }
                            />
                            <span className={styles.achievement}>
                              {achiev.place}° - {achiev.name}
                            </span>
                          </div>
                        ))}
                      <div className={styles.cardPlatforms}>
                        {project.platforms?.length > 0 &&
                          project.platforms.map((platform) => (
                            <div
                              className={styles.platformTag}
                              key={platform.name}
                            >
                              <a
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {platform.name}
                              </a>
                              <LaunchIcon className={styles.platformIcon} />
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.buttonFooterContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeRight}
              >
                <div
                  className={styles.scrollTop}
                  onClick={() => scrollTo('home')}
                >
                  <ExpandLessIcon size={40} />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
            >
              <div className={styles.copyright}>
                &copy; Copyright {currentYear} Gabriel Pasini
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
