export type Project = {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  viewUrl: string;
  viewLabel: string;
  codeUrl: string;
  codeLabel: string;
  style?: string;
};
