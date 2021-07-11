export const bgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
  //background: 'url(images/blue_galaxy.jpg)',
  background: `radial-gradient(circle at bottom, #30a2ff 10%, #000 80%)`,
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
