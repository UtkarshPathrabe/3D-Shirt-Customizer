import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: true,
  logoDecal: './react.png',
  fullDecal: './full_texture_demo.png',
});

export default state;
