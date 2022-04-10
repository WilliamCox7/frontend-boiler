const styles = {

  main: (test: boolean) => (`
    flex justify-center items-center
    ${test ? 'bg-green' : 'bg-red'}
  `),

  button: `
    bg-blue
  `

}

export default styles;