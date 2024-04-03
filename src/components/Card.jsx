const Card = ({ type, character }) => {
  const types = {
    left: {
      arrangement: "w-full flex flex-row-reverse items-end justify-between gap-12",
      textDirection: "text-start",
      padding: "pr-6",
      decoration: "absolute -top-6 -left-6 -rotate-45 w-[74px]",
    },
    right: {
      arrangement: "w-full flex flex-row items-end justify-between gap-12",
      textDirection: "text-end",
      padding: "pl-6",
      decoration: "absolute -top-6 -right-6 rotate-45 w-[74px]",
    },
    center: {
      arrangement: "w-full flex flex-col items-center justify-center gap-2",
      textDirection: "text-center",
      padding: "px-6",
      decoration: "absolute -top-6 -left-6 -rotate-45 w-[74px]",
    }
  };

  return (
    <div>
      <div className="relative flex flex-col gap-2 px-8 py-4 bg-white rounded-md shadow-md">
        <img
          src="/misc/star.png"
          alt="star"
          className={types[type].decoration}
        />
        <div
          className={types[type].arrangement}
        >
          <img
            src={character.img}
            alt="character"
            className="w-auto"
            style={{ height: `${character.height}px` }}
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
