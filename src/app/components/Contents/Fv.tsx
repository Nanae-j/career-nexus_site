const Fv = () => {
  return (
    <section className="bg-fvGradient animate-spin-gradient flex h-screen items-center justify-center bg-[rgb(27,196,125)] bg-[length:200%] bg-[25%_center]">
      <div className="absolute left-1/2 top-0 h-screen w-full -translate-x-1/2 bg-slate-500 opacity-20"></div>
      <div className="absolute left-1/2 top-0 z-[2] h-screen w-full -translate-x-1/2 bg-[url('/images/noise.png')] opacity-20"></div>
      <h1 className="absolute z-[3] text-center font-mundial text-8xl font-mundial-regular leading-[110%] text-white">
        Finding careers
        <br />
        that satisfy everyone.
      </h1>
    </section>
  );
};

export default Fv;
