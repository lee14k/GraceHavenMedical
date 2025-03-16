import { withNextVideo } from "next-video/process";
import fs from 'fs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/image_loader.ts',
  },
  env: {
    widgetJS: fs.readFileSync('./src/vagaro.js').toString()
  }
};

export default withNextVideo(nextConfig);