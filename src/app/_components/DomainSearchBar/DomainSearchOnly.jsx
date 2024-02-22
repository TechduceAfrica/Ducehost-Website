import style from './component.module.css'

export default function DomainSearchOnly() {
    return (
        <form 
            action="https://ducehost.com/host/cart.php?a=add&domain=register" 
            method="post" 
            className={style.domain__name__search__form}
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
        </form>
    )
}
