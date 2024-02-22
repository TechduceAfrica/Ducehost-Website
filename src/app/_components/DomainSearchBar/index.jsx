import style from './component.module.css'

export default function DomainSearchBar() {

    return (
        <form 
            action="https://ducehost.com/host/cart.php?a=add&domain=register" 
            method="post"
            className={style.domain__name__search__form} 
            data-scroll 
            data-scroll-speed="0.1"
        >
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="query" 
                    size="20"
                    placeholder="Enter your domian name" 
                />
                <button>
                    Search
                </button>
            </div>
            {/* <div className={style.tld__list}>
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
            </div> */}
        </form>
    )
}
