const NumScore = ({text1, num, text2}) => {
    return(
        <div className="font-inter inline-block align-baseline">
            {text1 && <p className="21 font-medium">{text1}</p>}
            {(num || text2) && <span className="flex items-center justify-center">
                    {num && <p className="text-[28px] font-bold text-[#00CAFF]">{num}</p>}
                    {text2 && <p className="font-medium">{text2}</p>}
                </span>}
        </div>
    )
}
export default NumScore