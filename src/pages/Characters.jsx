import { Card } from "../components";
import { characters } from "../utils/characters";

const Characters = () => {
  return (
    <div className="w-full">
      <h1 id="characters" className="mb-2 text-4xl text-center text-purple md:text-5xl">Characters</h1>
      <div className="bg-characters lg:mx-24 lg:rounded-xl lg:shadow-2xl">
        <div className="flex flex-col items-center gap-6 backdrop-blur-md bg-white/50 p-6 md:flex-row flex-wrap justify-around">
          {
            characters.map((character, index) => {
              if (character.name === "Peppertius") {
                return <Card key={index} type="center" character={character} />;
              } else {
                return <Card key={index} type={index % 2 === 0 ? "left" : "right"} character={character} />;
              }
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Characters;
