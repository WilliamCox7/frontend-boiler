const styles = {
  main: (test: boolean) => `
    flex justify-center items-center
    ${test ? 'bg-brand-green' : 'bg-brand-white'}
  `,

  button: `
    bg-brand-white text-brand-midnight pm-s ds:p-m m-m shadow-xl
  `,
};

export default styles;
