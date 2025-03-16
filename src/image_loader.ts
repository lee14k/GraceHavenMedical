import { StaticImageData } from "next/image";

export default function myImageLoader(source: { src: string }) {
  return `https://res.cloudinary.com/${source.src}`;
}
