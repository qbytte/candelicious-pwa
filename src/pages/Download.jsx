import { Button } from "../components";

const Download = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-black via-blue to-blue flex flex-col gap-2 justify-center items-center mx-8 px-4 py-4 rounded-md shadow-xl text-center md:h-[540px] lg:h-[460px]">
        <h1 className="text-3xl text-center text-white font-bold mb-4" id="download">
          Download the game now!
        </h1>
        <img src="/layout/steam.png" alt="Steam logo" className="w-auto h-36" />
        <p className="text-center text-2xl text-white text-lg mb-4">
          Candelicious is available for download on Steam, what are you waiting for?. Get it
        </p>
        <a
          href="https://store.steampowered.com"
          className="bg-dark_blue shadow-light_blue text-white block px-12 py-2 rounded-md shadow-md text-2xl font-bold hover:bg-blue hover:text-black transition-all duration-300 ease-in-out"
        >
          DOWNLOAD NOW
        </a>
      </div>
    </div>
  );
};

export default Download;
