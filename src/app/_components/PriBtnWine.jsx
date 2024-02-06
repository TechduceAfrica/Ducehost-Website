import Link from "next/link";

export default function PriBtnWine({ PriBtnWineLink, PriBtnWineText, propClassName }) {
    return (
        <>
            <Link 
                href={PriBtnWineLink} 
                title={PriBtnWineText}
            >
                <button 
                    className={`${propClassName} wine__btn__pri`} 
                    // onClick={() => props.onClick()}
                >
                    {PriBtnWineText}
                </button>
            </Link>
        </>
    )
}
  