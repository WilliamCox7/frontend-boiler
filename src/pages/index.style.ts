const styles = {
  main: (test: boolean) => `
    flex justify-center items-center
    ${test ? 'bg-brand-green' : 'bg-brand-white'}
  `,

  button: `
    bg-brand-white text-brand-midnight p-4 m-4 shadow-xl
  `,
};

export default styles;
