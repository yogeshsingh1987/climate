const Card = ({ children, variant, cls = "" }) => {
  return (
    <div
      className={`card-${variant} ${cls} ${variant === 'light' ? "flex-row text-left" : "flex text-center" } items-center justify-center  text-white p-6 rounded-[20px]`}
    >
      {children}
    </div>
  );
};
export default Card;
