const BarCard = ({text, children, cls=""}) => {
    return(
        <div className={`${cls}`}>
            <p className="font-semibold">{text}</p>
            {children}
        </div>
    )
}
export default BarCard