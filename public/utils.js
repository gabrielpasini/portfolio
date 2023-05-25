import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSteam,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const LinkStyle = {
  zIndex: 1,
  width: 500,
  maxWidth: '90%',
  height: 60,
  textDecoration: 'none',
};

export const bgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
};

export const bgParams = {
  background: {
    color: { value: '#000' },
    opacity: 0,
  },
  color: {
    value: '#ffffff',
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 400,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export const allButtons = [
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

export const professionalButtons = [
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
];

export const socialButtons = [
  {
    title: 'instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/pasini.dev/',
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
