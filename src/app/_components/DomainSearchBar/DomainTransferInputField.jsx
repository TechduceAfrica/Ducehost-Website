'use client'
import style from './component.module.css'

export default function DomainTransferInputField() {
    return (
        <form 
            action="https://www.ducehost.com/host/cart.php?a=add&domain=transfer" 
            method="post"
            className={style.domain__name__single__search__form}
        >
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="query" 
                    placeholder="Enter Domain name you want to transfer" 
                /> 
                <button>
                    Transfer
                </button>
            </div>
        </form>
    )
}
