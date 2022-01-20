import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTwitch,
  faYoutube,
  faDiscord,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';

export const LinkStyle = {
  zIndex: 1,
  width: 500,
  maxWidth: '90%',
  height: 60,
  textDecoration: 'none',
};

export const buttonProps = [
  {
    title: 'instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/pasini.dev/',
  },
  {
    title: 'linkedin',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/gabriel-pasini-963006180/',
  },
  {
    title: 'github',
    icon: faGithub,
    url: 'https://github.com/gabrielpasini',
  },
  {
    title: 'discord',
    icon: faDiscord,
    url: 'https://discord.gg/H32A8jw',
  },
  {
    title: 'steam',
    icon: faSteam,
    url: 'https://steamcommunity.com/id/faiskera/',
  },
  {
    title: 'twitch',
    icon: faTwitch,
    url: 'https://twitch.tv/f4isk4',
  },
  {
    title: 'youtube',
    icon: faYoutube,
    url: 'https://www.youtube.com/channel/UCozHr9pJQPHNcmjvM4ELVRQ',
  },
];

export const bgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  //background: 'url(images/blue_galaxy.jpg)',
  //background: `radial-gradient(circle at bottom, #ccc 10%, #000 70%)`,
  background: `linear-gradient(to bottom, #000,#000,#ccc)`,
  //background: '#222',
};

export const bgParams = {
  color: {
    value: '#ffffff',
  },
  particles: {
    number: {
      value: 30,
    },
    size: {
      value: 4,
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
};
