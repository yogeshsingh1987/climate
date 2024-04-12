const Card = ({ children, variant, cls = "" }) => {
  return (
    <div
      className={`card-${variant} ${cls} 22 text-white p-3 rounded-[20px]`}
    >
      {children}
    </div>
  );
};
export default Card;
