export interface Slide {
  backgroundImage: string;
  heading: string;
  description: string;
  button?: {
    content: string;
    color: string;
  };
}
