export default function PriBtn(props) {
    return (
        <>
            <a 
                href={props.PriBtnLink} 
                title={props.PriBtnText}
            >
                <button 
                    className={`${props.className} btn__pri`} 
                    // onClick={() => props.onClick()}
                >
                    {props.PriBtnText}
                </button>
            </a>
        </>
    )
}
  