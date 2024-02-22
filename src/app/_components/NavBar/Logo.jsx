import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from './navbar.module.css';
import { handleLinkClick } from './Functions';

export default function Logo({ setIsOpen }) {
    return (
        <div>
            <Link 
                href="/" 
                onClick={() => handleLinkClick(setIsOpen)}
            >
                <Image
                    src="/ducehost-logo.webp"
                    alt="Ducehost Logo"
                    width={198}
                    height={34}
                    className={style.logo}
                    priority
                />
            </Link>
        </div>
    )
}
