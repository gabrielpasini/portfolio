import {
  faMobile,
  faDatabase,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import {
  faJsSquare,
  faReact,
  faAngular,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faPython,
} from '@fortawesome/free-brands-svg-icons';

export const arraySkills = [
  {
    name: 'Javascript',
    level: '95%',
    icon: faJsSquare,
  },
  {
    name: 'ReactJs',
    level: '90%',
    icon: faReact,
  },
  {
    name: 'React Native',
    level: '80%',
    icon: faMobile,
  },
  {
    name: 'AngularJS',
    level: '90%',
    icon: faAngular,
  },
  {
    name: 'Angular 5+',
    level: '45%',
    icon: faAngular,
  },
  {
    name: 'NodeJS',
    level: '50%',
    icon: faNodeJs,
  },
  {
    name: 'MongoDB',
    level: '40%',
    icon: faDatabase,
  },
  {
    name: 'CSS',
    level: '75%',
    icon: faCss3Alt,
  },
  {
    name: 'HTML',
    level: '90%',
    icon: faHtml5,
  },
  {
    name: 'C/C++',
    level: '70%',
    icon: faDesktop,
  },
  {
    name: 'Python',
    level: '30%',
    icon: faPython,
  },
];

export const bgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  background: 'url(images/blue_galaxy.jpg)',
};

export const bgParams = {
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
};
