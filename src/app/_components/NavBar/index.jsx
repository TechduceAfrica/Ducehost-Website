"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import style from './component.module.css';
import SecBtn from '@/app/_components/SecBtn';
import { domainSubMenus, 
        hostingSubMenus, 
        securitySubMenus, 
        emailSubMenus, 
        contactSubMenus, 
        helpSubMenus,
        mobileMenu } from '@/copyContents/Navbar';
import MobileMenu from './MobileMenu';

export default function NavBar() {

    const pathname = usePathname();

    return (
        <>
            <header className={style.nav__bar__wrapper}>
                <div className={style.nav__bar}>
                    <div>
                        <Link 
                            href="/" 
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
                                    className={pathname == "/domain" ? "active" : ""}
                                >
                                    Domain
                                </Link>
                                <div className={style.sub__menu}>
                                    {domainSubMenus.map((domainSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
                                            >
                                                <Link 
                                                    href={domainSubMenu.DomainLink}
                                                >
                                                    {domainSubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/hosting"
                                    className={pathname == "/hosting" ? "active" : ""}
                                >
                                    Hosting
                                </Link>
                                <div className={style.sub__menu}>
                                    {hostingSubMenus.map((hostingSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
                                            >
                                                <Link 
                                                    href={hostingSubMenu.DomainLink}
                                                >
                                                    {hostingSubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/security"
                                    className={pathname == "/security" ? "active" : ""}
                                >
                                    Security
                                </Link>
                                <div className={style.sub__menu}>
                                    {securitySubMenus.map((securitySubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
                                            >
                                                <Link 
                                                    href={securitySubMenu.DomainLink}
                                                >
                                                    {securitySubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/email"
                                    className={pathname == "/email" ? "active" : ""}
                                >
                                    Email
                                </Link>
                                <div className={style.sub__menu}>
                                    {emailSubMenus.map((emailSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
                                            >
                                                <Link 
                                                    href={emailSubMenu.DomainLink}
                                                >
                                                    {emailSubMenu.DomainMenu}
                                                </Link>
                                            </div>
                                        )
                                    )}
                                </div>
                            </li>
                            <li className={style.main__menu}>
                                <Link 
                                    href="/contact"
                                    className={pathname == "/contact" ? "active" : ""}
                                >
                                    Contact
                                </Link>
                                <div className={style.sub__menu}>
                                    {contactSubMenus.map((contactSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
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
                                    className={pathname == "/help" ? "active" : ""}
                                >
                                    Help
                                </Link>
                                <div className={style.sub__menu}>
                                    {helpSubMenus.map((helpSubMenu, index) =>
                                        (
                                            <div 
                                                key={index} 
                                                className={style.sub__menu__list}
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
                            SecBtnLink= '/'
                        />
                    </div>
                    <div className={style.mobile__nav__hamburger}>
                        <input type="checkbox" name="mobile-menu" id="mobile-menu"/>
                        <label htmlFor="mobile-menu">
                            <div className={style.mobile__nav__open}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M5.33398 9.33301H9.33398M26.6673 9.33301H14.6673M26.6673 22.6663H22.6673M5.33398 22.6663H17.334M5.33398 15.9997H26.6673" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className={style.mobile__nav__close}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 18 18" fill="none">
                                <rect y="0.5" width="18" height="17" rx="2" fill="#E2E2E2"/>
                                <path d="M8.56258 11.5627L5.54175 8.54183C5.50008 8.50016 5.46897 8.45516 5.44841 8.40683C5.42786 8.3585 5.4173 8.30627 5.41675 8.25016C5.41675 8.13905 5.45508 8.04183 5.53175 7.9585C5.60841 7.87516 5.70897 7.8335 5.83341 7.8335H12.1667C12.2917 7.8335 12.3926 7.87516 12.4692 7.9585C12.5459 8.04183 12.584 8.13905 12.5834 8.25016C12.5834 8.27794 12.5417 8.37516 12.4584 8.54183L9.43758 11.5627C9.36814 11.6321 9.29869 11.6807 9.22925 11.7085C9.1598 11.7363 9.08342 11.7502 9.00008 11.7502C8.91675 11.7502 8.84036 11.7363 8.77092 11.7085C8.70147 11.6807 8.63203 11.6321 8.56258 11.5627Z" fill="#434242"/>
                            </svg>
                            </div>
                        </label>
                    </div>
                </div>
            </header>
            <div className={style.mobile__menu}>
                <MobileMenu 
                    mobileMenu={mobileMenu}
                />
            </div>
        </>
    )
}
