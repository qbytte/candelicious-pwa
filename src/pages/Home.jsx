const Home = () => {
  return (
    <div className="w-full">
      <h1 className="mb-2 text-4xl text-center text-blue">
        Meet <span className="text-rose">Candelicious</span>
      </h1>
      <div className="relative bg-gradient-to-b from-lighter_rose to-light_green rounded-md border-green border-2 shadow-2xl mx-6 py-4 px-6 text-brown text-center">
        <img
          src="/src/assets/misc/star.png"
          alt="star"
          className="absolute -top-10 -left-8 rotate-45 w-[74px]"
        />
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <img
          src="/src/assets/misc/red-gummie.png"
          alt="red-gummie"
          className="absolute -bottom-6 -right-6 w-[68px]"
        />
      </div>
    </div>
  );
};

export default Home;
