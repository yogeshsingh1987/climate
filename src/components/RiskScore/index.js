const RiskScore = ({ num, text1, text2, text3, hrLine = false }) => {
  return (
    <>
      {num && (
        <p className="font-inter text-[80px] font-bold leading-[88px] [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">{num}</p>
      )}
      {text1 && <p className="font-inter 21 font-semibold">{text1}</p>}
      <p className="border-dotted border-t-2 border-white my-6"></p>
      {text2 && <p className="font-inter font-bold">{text2}</p>}
      {text3 && <p className="font-inter font-bold">{text3}</p>}
    </>
  );
};

export default RiskScore;
