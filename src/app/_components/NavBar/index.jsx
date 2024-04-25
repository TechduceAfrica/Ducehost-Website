"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import style from './navbar.module.css';
import SecBtn from '@/app/_components/SecBtn';
import { domainSubMenus, 
        hostingSubMenus, 
        securitySubMenus, 
        emailSubMenus, 
        contactSubMenus, 
        helpSubMenus,
        mobileMenu } from '@/copyContents/Navbar';
import MobileMenu from './MobileMenu';
import MobileHamburger from './MobileHamburger';
import { toggleNavbar } from '@/app/utils/toggleNavbar';
import Logo from './Logo';

export default function NavBar() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={style.nav__bar__wrapper}>
                <div className={style.nav__bar}>
                    <Logo setIsOpen={setIsOpen}/>
                    <nav>
                        <menu>
                            <li>
                                <Link 
                                    href="/" 
                                    className={pathname == "/" ? "active" : ""}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/domain"
                                    className={pathname.includes("/domain") ? "active" : ""}
                                >
                                    Domain
                                </Link>
                                <div className={style.sub__menu}>
                                    {domainSubMenus.map((domainSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${pathname == `${domainSubMenu.DomainLink}` ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={domainSubMenu.DomainLink}
                                                >
                                                    {domainSubMenu.DomainMenu}
                                                </Link>
                                                <span>{domainSubMenu.DomainNotification}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/hosting"
                                    className={pathname.includes("/hosting") ? "active" : ""}
                                >
                                    Hosting
                                </Link>
                                <div className={style.sub__menu}>
                                    {hostingSubMenus.map((hostingSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${style[hostingSubMenu.DomainClass]} ${pathname == `${hostingSubMenu.DomainLink}` ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={hostingSubMenu.DomainLink}
                                                >
                                                    {hostingSubMenu.DomainMenu}
                                                </Link>
                                                <span>{hostingSubMenu.DomainNotification}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/security"
                                    className={pathname.includes("/security") ? "active" : ""}
                                >
                                    Security
                                </Link>
                                <div className={style.sub__menu}>
                                    {securitySubMenus.map((securitySubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${style[securitySubMenu.DomainClass]} ${pathname == `${securitySubMenu.DomainLink}` ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={securitySubMenu.DomainLink}
                                                >
                                                    {securitySubMenu.DomainMenu}
                                                </Link>
                                                <span>{securitySubMenu.DomainNotification}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/email"
                                    className={pathname.includes("/email") ? "active" : ""}
                                >
                                    Email
                                </Link>
                                <div className={style.sub__menu}>
                                    {emailSubMenus.map((emailSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${style[emailSubMenu.DomainClass]} ${pathname == `${emailSubMenu.DomainLink}` ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={emailSubMenu.DomainLink}
                                                >
                                                    {emailSubMenu.DomainMenu}
                                                </Link>
                                                <span>{emailSubMenu.DomainNotification}</span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/contact"
                                    className={pathname.includes("/contact") ? "active" : ""}
                                >
                                    Contact
                                </Link>
                                <div className={style.sub__menu}>
                                    {contactSubMenus.map((contactSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${pathname == `${contactSubMenu.DomainLink}` ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={contactSubMenu.DomainLink}
                                                >
                                                    {contactSubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/help"
                                    className={pathname.includes("/help") ? "active" : ""}
                                >
                                    Help
                                </Link>
                                <div className={style.sub__menu}>
                                    {helpSubMenus.map((helpSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={`${style.sub__menu__list} ${pathname.includes(`${helpSubMenu.DomainLink}`) ? `${style.sub__active}` : ""}`}
                                            >
                                                <Link 
                                                    href={helpSubMenu.DomainLink}
                                                >
                                                    {helpSubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                        </menu>
                    </nav>
                    <div className={style.nav__btn}>
                        <SecBtn
                            SecBtnText= 'Login'
                            SecBtnLink= 'https://ducehost.com/host/login'
                        />
                    </div>
                    <div 
                        className={`${style.mobile__nav__hamburger} ${isOpen ? 'open' : ''}`} 
                        onClick={() => toggleNavbar(isOpen, setIsOpen)}
                    >
                        <MobileHamburger/>
                    </div>
                </div>
            </header>
            <div className={`${style.mobile__menu} mobile__nav ${isOpen ? 'open' : ''}`}>
                <MobileMenu 
                    mobileMenu={mobileMenu}
                    setIsOpen={setIsOpen}
                />
            </div>
        </>
    )
}
