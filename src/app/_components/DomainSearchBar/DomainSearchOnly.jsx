import style from './component.module.css'

export default function DomainSearchOnly() {
    return (
        <form className={style.domain__name__search__form}>
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="Domain search" 
                    value={''} 
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter your domian name" 
                />
                <button 
                    // onClick={''}
                >
                    Search
                </button>
            </div>
            <div>
                {/* {status && <p>Domain name status: {status}</p>} */}
            </div>
        </form>
    )
}
