const Button = ({ text, color, href }) => {
  const colors = {
    green: "text-green",
    blue: "text-blue",
    orange: "text-orange",
    purple: "text-purple",
    brown: "text-brown",
  };

  return (
    <div>
      <a href={href} className={`bg-white ${colors[color]} block px-3 py-1 rounded-md shadow-md text-2xl`}>
        {text}
      </a>
    </div>
  );
};

export default Button;
