import { Button } from "./";

// todo: Implement button functionality so that when a button is clicked, the corresponding page is displayed.

const NavBar = () => {
  return (
    <div className="flex justify-center gap-3">
      <Button text="Characters" color="purple" />
      <Button text="About us" color="brown" />
      <Button text="Download" color="orange" />
    </div>
  );
};

export default NavBar;
