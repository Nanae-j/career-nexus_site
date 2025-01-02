import About from "./Contents/About";
import Fv from "./Contents/Fv";
import Logo from "./Logos/Logo";

const Main = () => {
  return (
    <main className="relative">
      {/* 
      Logo
      z-index: 1; */}
      <Logo />
      {/* 
      FV
      - Noise
      z-index: 2;
      - heading1
      z-index: 3;
      */}
      <Fv />
      {/*
      ABOUT
      - Text Area
      z-index: 2;
      */}
      <About />
    </main>
  );
};

export default Main;
