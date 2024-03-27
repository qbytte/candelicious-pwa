const About = () => {
  return (
    <div className="w-full">
      <h1 className="mb-2 text-4xl text-center text-brown">About us</h1>
      <div className="bg-gradient-to-b from-lighter_rose via-white to-light_blue flex flex-col gap-2 justify-center items-center mx-8 px-16 py-4 rounded-md shadow-xl text-center">
        <img
          src="/src/assets/layout/company-logo.png"
          alt="company logo"
          className="w-[200px]"
        />
        <h2 className="text-2xl font-bold">Who are we?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
      </div>
    </div>
  );
};

export default About;
