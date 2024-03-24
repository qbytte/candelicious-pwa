const Layout = ({ children }) => {
  return (
    <div className="bg-light_rose">
      {/* Header */}
      <div className="bg-header h-auto">
        <img
          src="/src/assets/layout/game-logo.png"
          alt="game logo"
          className="h-[132px] mx-auto"
        />
      </div>
      {/* Body */}
      <div className="container mx-auto">{children}</div>
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
