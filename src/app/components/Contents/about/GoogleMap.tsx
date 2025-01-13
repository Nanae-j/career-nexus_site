const GoogleMap = () => {
  return (
    <div className="relative aspect-[13/9] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1457.3868862232819!2d141.35027633911287!3d43.06722534278404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2974dc87f26b%3A0xd4a72d5b4beedb8!2z5pyt5bmM44K544OG44Op44OX44Os44Kk44K5!5e0!3m2!1sja!2sjp!4v1736750438768!5m2!1sja!2sjp"
        width="600"
        height="450"
        loading="lazy"
        className="position-center absolute h-full w-full"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
