const BarCard = ({text, children, cls=""}) => {
    return(
        <div className={`${cls} max-w-52`}>
            <p className="text-[18px] font-semibold">{text}</p>
            {children}
        </div>
    )
}
export default BarCard