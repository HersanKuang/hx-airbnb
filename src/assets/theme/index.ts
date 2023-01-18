const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0px 3px 6px rgb(0 0 0 / 18%);
      }
    `
  }
}

export default theme
