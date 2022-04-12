const styles = {
  main: (test: boolean) => `
    flex justify-center items-center
    ${test ? 'bg-brand-green' : 'bg-brand-white'}
  `,

  button: `
    bg-brand-midnight text-brand-white p-4
  `,
};

export default styles;
