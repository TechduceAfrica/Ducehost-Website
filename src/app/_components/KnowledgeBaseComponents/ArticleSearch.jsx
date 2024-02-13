'use client'
import React from 'react'
import style from '../DomainSearchBar/component.module.css'

export default function ArticleSearch() {
    return (
        <form 
            className={style.domain__name__single__search__form} 
            data-scroll 
            data-scroll-speed="0.1"
        >
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="SearchArticle" 
                    value={''} 
                    onChange={(e) => setArticle(e.target.value)}
                    placeholder="Search Articles" 
                />
                <button 
                    // onClick={''}
                >
                    Search
                </button>
            </div>
        </form>
    )
}
