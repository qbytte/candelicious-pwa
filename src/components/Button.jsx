const Button = ({ text, color }) => {
  const colors = {
    green: "text-green",
    blue: "text-blue",
    orange: "text-orange",
    purple: "text-purple",
    brown: "text-brown",
  };

  return (
    <div>
      <button className={`bg-white ${colors[color]} px-4 py-1 rounded-md shadow-md text-2xl`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
