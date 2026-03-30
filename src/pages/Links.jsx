import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Particles from '@tsparticles/react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '../components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { allButtons, bgParams, bgStyle, LinkStyle } from '../utils';
import homeStyles from '../styles/Home.module.scss';
import styles from '../styles/Links.module.scss';

const flipBottom = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: (i = 0) => ({
    opacity: 1,
    rotateX: 0,
    transition: { duration: 1, delay: i * 0.15 },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 } },
};

const MyLinks = () => {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particlesOptions = useMemo(() => bgParams, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className={homeStyles.pageContainer}>
      <div className={styles.content}>
        <div
          className={`${styles.goToContainer} ${styles.tooltip}`}
          data-tooltip="Website / Portfólio"
        >
          <motion.div initial="hidden" animate="visible" variants={fadeRight}>
            <RouterLink to="/">
              <div className={styles.goTo}>
                <ChevronRightIcon size={30} />
              </div>
            </RouterLink>
          </motion.div>
        </div>
        <div
          className={styles.titleLogo}
          title="GABRIEL PASINI"
          style={{ '--glitch-color': getRandomColor() }}
        >
          GABRIEL PASINI
        </div>
        {allButtons.length > 0 &&
          allButtons.map((button, index) => (
            <a
              href={button.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              style={LinkStyle}
            >
              <motion.div
                className={styles.button}
                initial="hidden"
                animate="visible"
                variants={flipBottom}
                custom={index}
              >
                <FontAwesomeIcon
                  icon={button.icon}
                  className={styles.socialIconFA}
                />
                {button.title}
              </motion.div>
            </a>
          ))}
        {particlesReady && (
          <Particles
            style={bgStyle}
            id="particles"
            options={particlesOptions}
          />
        )}
      </div>
    </div>
  );
};

export default MyLinks;
