export interface IBannerProps {
  className?: string;
  imageProps: {
    className?: string;
    src: string;
    alt?: string;
  };
  heading?: string;
  description?: string;
  pack?: boolean;
  gender?: string;
}
