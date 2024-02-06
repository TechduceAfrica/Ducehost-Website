export default function SecBtn({ SecBtnLink, SecBtnText, PropClassName }) {
    return (
        <>
            <a 
                href={SecBtnLink} 
                title={SecBtnText}>
                    <button 
                        className={`${PropClassName} btn__sec`} 
                        // onClick={() => props.onClick()} 
                    >
                            {SecBtnText}
                    </button>
            </a>
        </>
    )
}
  