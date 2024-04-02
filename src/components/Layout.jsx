import { NavBar } from "./";

const Layout = ({ children }) => {
  return (
    <div className="bg-light_rose overflow-hidden">
      {/* Header */}
      <div className="bg-header h-auto">
        <img
          src="/src/assets/layout/game-logo.png"
          alt="game logo"
          className="h-[132px] mx-auto"
        />
        <NavBar />
      </div>
      {/* Body */}
      <div className="flex flex-col gap-8 my-4 items-center">{children}</div>
      {/* Footer */}
      <div className="bg-footer h-[132px] flex justify-center items-center">
        <span className="text-white font-bold text-shadow mt-6">
          Copyright InnoByte 2024
        </span>
      </div>
    </div>
  );
};

export default Layout;
