'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import style from './knowledgebase.module.css'

export default function ArticlePageContent({ slug, title, topic, body, likes, dislikes, lastUpdated }) {

    const [likeCount, setLikeCount] = useState(Number(likes));
    const [dislikeCount, setDislikeCount] = useState(Number(dislikes));
    const [likeDisabled, setLikeDisabled] = useState(false);
    const [dislikeDisabled, setDislikeDisabled] = useState(false);
    const [formattedLastUpdated, setFormattedLastUpdated] = useState("Nov, 2023");

    const handleClickUpvote = () => {
        if (!likeDisabled) {
            setLikeCount(likeCount + 1);
            setLikeDisabled(true);
            setDislikeDisabled(true);
        }
    };

    const handleClickDownvote = () => {
        if (!dislikeDisabled) {
            setDislikeCount(dislikeCount + 1);
            setLikeDisabled(false);
            setDislikeDisabled(true);
        }
    };

    useEffect(() => {
        const currentDate = new Date();
        const lastUpdatedDate = new Date(lastUpdated);

        const monthsDifference = currentDate.getMonth() - lastUpdatedDate.getMonth() +
            12 * (currentDate.getFullYear() - lastUpdatedDate.getFullYear());

        setFormattedLastUpdated(`${monthsDifference} months ago`);
    }, [lastUpdated]);


    return (
        <article>
            <span className='fade__in'>
                <Link 
                    href={"/help/knowledge-base/"}
                >
                    Knowledge Base
                </Link> / <Link 
                    href={`/help/knowledge-base/${slug}`}
                >
                    {title}
                </Link> / {topic}
            </span>
            <div className={style.article__screen}>
                <h2 className='fade__in'>{topic}</h2>
                <div 
                    dangerouslySetInnerHTML={{ __html: body }} 
                    className={`${style.article__body} fade__in`}
                >
                </div>
                <div className={style.article__foot}>
                    <div className={style.article__interaction}>
                        <p className='fade__in'>
                            Helpful?
                        </p>
                        <div>
                            <button onClick={handleClickUpvote} disabled={likeDisabled}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                >
                                    <path d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z" fill="#1D1B20"/>
                                </svg>
                                <span 
                                    className={style.article__like__number}
                                >
                                    {likeCount}
                                </span>
                            </button>    
                            <button onClick={handleClickDownvote} disabled={dislikeDisabled}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none"
                                >
                                    <path d="M1 14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H9.32L8.36 20.57C8.34 20.67 8.33 20.78 8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.41 16.42C16.78 16.05 17 15.55 17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14ZM23 3H19V15H23V3Z" fill="#1D1B20"/>
                                </svg>
                                <span 
                                    className={style.article__dislike__number}
                                >
                                    {dislikeCount}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={`${style.article__update__date} fade__in`}>
                        Updated {formattedLastUpdated}
                    </div>
                </div>
            </div>
        </article>
    )
}
