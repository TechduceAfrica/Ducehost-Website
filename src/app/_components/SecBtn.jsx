export default function SecBtn(props) {
    return (
        <>
            <a 
                href={props.SecBtnLink} 
                title={props.SecBtnText}>
                    <button 
                        className={`${props.className} btn__sec`} 
                        onClick={() => props.onClick()} >
                            {props.SecBtnText}
                    </button>
            </a>
        </>
    )
}
  