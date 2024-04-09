import "./style.css";
const Button = ({ name, variant = "primary", clickHandler }) => {
  return (
    <>
      <main
        data-component="ButtonContainer"
        className="button-container flex rounded-md items-center justify-center cursor-pointer"
        onClick={clickHandler}
      >
        <p data-component="Name">{name}</p>
      </main>
    </>
  );
};
export default Button;
