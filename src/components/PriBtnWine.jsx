export default function PriBtnWine(props) {
    return (
        <>
            <a 
                href={props.PriBtnWineLink} 
                title={props.PriBtnWineText}
            >
                <button 
                    className={`${props.className} wine__btn__pri`} 
                    onClick={() => props.onClick()}
                >
                    {props.PriBtnWineText}
                </button>
            </a>
        </>
    )
}
  