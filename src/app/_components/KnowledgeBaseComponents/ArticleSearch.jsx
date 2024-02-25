'use strict'
import React, { useState, useEffect } from 'react'
import style from '../DomainSearchBar/component.module.css'
import { KnowledgeBaseCategories } from '@/copyContents/KnowledgeBaseCopy'
import Link from 'next/link'

export default function ArticleSearch() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const handleSearch = () => {
            if (searchQuery.trim().length >= 2) {
                const filteredResults = KnowledgeBaseCategories.reduce((acc, category) => {
                    const categoryArticles = category.articles.filter(article =>
                        article.topic.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    return [...acc, ...categoryArticles];
                }, []);
                setSearchResults(filteredResults);
                setShowSuggestions(true);
            } else {
                setSearchResults([]);
                setShowSuggestions(false);
            }
        };

        handleSearch();

        return () => {
            setSearchResults([]);
            setShowSuggestions(false);
        };
    }, [searchQuery]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchQuery(inputValue);
    };

    return (
        <form 
            className={`${style.article__search__form} fade__in`} 
            data-scroll 
            data-scroll-speed="0.1"
            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
        >
            <div className={style.domain__name__search__bar}>
                <input 
                    type="text" 
                    name="SearchArticle" 
                    value={searchQuery} 
                    onChange={handleInputChange}
                    placeholder="Search Articles" 
                />
                <button 
                    type="submit"
                >
                    Search
                </button>
            </div>
            {showSuggestions && (
                <div className={style.suggestions}>
                    {searchResults.map(article => (
                        <div 
                            key={article.id} 
                            className={style.suggestion}
                        >
                            <Link  
                                href={`/help/knowledge-base/${article.categorySlug}/${article.link}`}
                            >
                                {article.topic}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </form>
    )
}
