const Home = () => {
  return (
    <div className="w-full">
      <h1 id="home" className="mb-2 text-4xl text-center text-blue md:text-5xl">
        Meet <span className="text-rose">Candelicious</span>
      </h1>
      <div className="relative bg-gradient-to-b from-lighter_rose to-light_green rounded-md border-green border-2 shadow-2xl mx-6 py-4 px-6 text-brown text-center text-xl md:text-2xl lg:mx-24">
        <img
          src="/misc/star.png"
          alt="star"
          className="absolute -top-10 -left-8 rotate-45 w-[74px]"
        />
        <span>
          In the world of Candelicious, the fearless Huicho, a ladybug with an
          insatiable appetite, embarks on an adventure to devour the entire
          kingdom of sweets. As he progresses, he discovers that the seemingly
          sweet inhabitants, known as Sweetlings, hide dark secrets. Determined
          to fulfill his desire, Wicho challenges the Sweetlings and faces
          increasingly difficult challenges, revealing a disturbing truth about
          the world that threatens to change everything he believed to know.
        </span>
        <img
          src="/misc/red-gummie.png"
          alt="red-gummie"
          className="absolute -bottom-6 -right-6 w-[68px]"
        />
      </div>
    </div>
  );
};

export default Home;
