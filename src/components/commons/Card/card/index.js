const Card = ({ children, variant, cls = "" }) => {
  return (
    <div
      className={`card-${variant} ${cls} 2 text-white p-6 rounded-[20px]`}
    >
      {children}
    </div>
  );
};
export default Card;
