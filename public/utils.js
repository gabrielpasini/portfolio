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
    value: '#fff',
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
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

export const projects = [
  {
    icon: 'https://i.imgur.com/dEce2S9.png',
    name: 'UTI AUX',
    description:
      'Conteúdo auxiliar para profissionais da saúde e estudantes da Unidade de Terapia Intensiva.',
    platforms: [
      { name: 'Web', url: 'https://utiaux.app/' },
      {
        name: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.utiaux.utiaux',
      },
      {
        name: 'iOS',
        url: 'https://apps.apple.com/us/app/uti-aux/id1581031657',
      },
      {
        name: 'Artigo',
        url: 'https://journals.bahiana.edu.br/index.php/fisioterapia/article/view/4583',
      },
    ],
    achievements: [
      { place: 2, name: '[LabLuthier] Cases de Inovação Tecnológica' },
      {
        place: 3,
        name: '[XIX SIFR] Simpósio Internacional de Fisioterapia Respiratória',
      },
    ],
    production: true,
  },
  {
    icon: 'https://i.imgur.com/lPjO8AX.jpg',
    name: 'Notícias de tecnologia',
    description:
      'Robô que extrai notícias de uma Newsletter via e-mail, transforma em vídeo e posta no youtube automaticamente.',
    platforms: [
      {
        name: 'Canal',
        url: 'https://www.youtube.com/@noticiastecnologia-newsletter',
      },
      {
        name: 'Github',
        url: 'https://github.com/gabrielpasini/newsletter_robot/',
      },
    ],
    production: true,
  },
  {
    icon: 'https://i.imgur.com/UJsCgft.png',
    name: 'Health Skill',
    description:
      'Plataforma de cursos e e-books voltada para profissionais da saúde.',
    platforms: [
      { name: 'Web', url: 'https://healthskill.app/' },
      {
        name: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.life_panda.health_skill',
      },
      {
        name: 'iOS',
        url: 'https://apps.apple.com/us/app/health-skill/id6444901153',
      },
    ],
    production: true,
  },
  {
    icon: 'https://i.imgur.com/oIdyCfp.png',
    name: 'Pega VS Pega',
    description:
      'Protótipo de jogo criado em 48 horas para participar de uma gamejam.',
    platforms: [
      { name: 'Windows', url: 'https://pasini.itch.io/pega-vs-pega' },
      { name: 'Github', url: 'https://github.com/gabrielpasini/nonejam' },
    ],
    achievements: [
      { place: 2, name: '[Noneclass] Gamejam com tema "Meu prmeiro jogo"' },
    ],
    production: true,
  },
  {
    icon: 'https://i.imgur.com/W7pMi1w.png',
    name: 'Pokedex',
    description:
      'Listagem e busca de pokemon comum/shiny com visualização parallax.',
    platforms: [
      { name: 'Web', url: 'https://pokedex.pasini.dev/' },
      { name: 'Github', url: 'https://github.com/gabrielpasini/pokedex/' },
    ],
    production: true,
  },
];
