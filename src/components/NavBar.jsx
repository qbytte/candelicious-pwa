import { Button } from "./";

// todo: Implement button functionality so that when a button is clicked, the corresponding page is displayed.

const NavBar = () => {
  return (
    <div className="flex justify-center gap-3">
      <Button text="Characters" color="blue" />
      <Button text="About us" color="green" />
      <Button text="Download" color="orange" />
    </div>
  );
};

export default NavBar;
