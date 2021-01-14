export default (inLatex: string): string => {
  return inLatex.replace(/\\ /g, '').replace(/\s+/g, '');
};
