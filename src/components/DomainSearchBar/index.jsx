import style from './component.module.css'

export default function DomainSearchBar() {

    return (
        <form className={style.domain__name__search__form} data-scroll data-scroll-speed="0.1">
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
            <div className={style.tld__list}>
                <p>
                    .com <span>| ₦8500</span>
                </p>
                <p>
                    .net <span>| ₦8000</span>
                </p>
                <p>
                    .org <span>| ₦9000</span>
                </p>
                <p>
                    .biz <span>| ₦6000</span>
                </p>
            </div>
            <div>
                {/* {status && <p>Domain name status: {status}</p>} */}
            </div>
        </form>
    )
}
