import { Card } from "../components";

const Characters = () => {
  const characters = {
    juancito: {
      name: "Juancito",
      img: "/src/assets/misc/red-gummie.png",
      color: "bg-red",
      description: "Juancito is a 25-year-old dumbfuck",
    },
    ricardo: {
      name: "Ricardo",
      img: "/src/assets/misc/blue-lolipop.png",
      color: "bg-orange",
      description: "Juancito is a 30-year-old dumbfuck",
    },
  };
  return (
    <div className="w-full">
      <h1 className="mb-2 text-4xl text-center text-purple">Characters</h1>
      <div className="bg-characters">
        <div className="flex flex-col gap-6 backdrop-blur-md bg-white/50 p-6">
          <Card type={"left"} character={characters.juancito} />
          <Card type={"right"} character={characters.ricardo} />
        </div>
      </div>
    </div>
  );
};

export default Characters;
