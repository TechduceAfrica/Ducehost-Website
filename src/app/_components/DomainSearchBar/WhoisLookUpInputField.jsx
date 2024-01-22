'use client'
import style from './component.module.css'

export default function WhoisLookUpInputField() {
    return (
        <form className={style.domain__name__single__search__form}>
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="Whois Lookup" 
                    value={''} 
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter Domain name you want to lookup" 
                />
                <button 
                    // onClick={''}
                >
                    Lookup
                </button>
            </div>
            <div>
                {/* {status && <p>Domain name status: {status}</p>} */}
            </div>
        </form>
    )
}
