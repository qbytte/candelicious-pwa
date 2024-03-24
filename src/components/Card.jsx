const Card = ({ type, character }) => {
  const types = {
    left: {
      flexDirection: "flex-row-reverse",
      textDirection: "text-start",
      padding: "pr-6",
      decoration: "absolute -top-6 -left-6 -rotate-45 w-[74px]",
    },
    right: {
      flexDirection: "flex-row",
      textDirection: "text-end",
      padding: "pl-6",
      decoration: "absolute -top-6 -right-6 rotate-45 w-[74px]",
    },
  };

  return (
    <div>
      <div className="relative flex flex-col gap-2 px-8 py-4 bg-white rounded-md shadow-md">
        <img
          src="/src/assets/misc/star.png"
          alt="star"
          className={types[type].decoration}
        />
        <div
          className={`w-full flex ${types[type].flexDirection} items-end justify-between gap-12`}
        >
          <img
            src={character.img}
            alt="character"
            className="w-auto h-16"
          />
          <h2 className="text-2xl text-brown">{character.name}</h2>
        </div>
        <div
          className={`text-shadow text-brown w-full ${types[type].padding} ${types[type].textDirection}`}
        >
          <p>{character.description}</p>
          <div className={`w-full h-1 ${character.color}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
