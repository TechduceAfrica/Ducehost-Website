export default function PriBtn({ PriBtnLink, PriBtnText, PropsclassName }) {
    return (
        <>
            <a 
                href={PriBtnLink} 
                title={PriBtnText}
            >
                <button 
                    className={`${PropsclassName} btn__pri`} 
                    // onClick={() => props.onClick()}
                >
                    {PriBtnText}
                </button>
            </a>
        </>
    )
}
  