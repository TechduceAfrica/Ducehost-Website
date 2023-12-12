"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import style from './component.module.css';
import SecBtn from '@/components/SecBtn';

export default function NavBar() {

    const pathname = usePathname();

    return (
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
                        <li>
                            <Link 
                                href="/domain"
                                className={pathname == "/domain" ? "active" : ""}
                            >
                                Domain
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/sample-page"
                                className={pathname == "/sample-page" ? "active" : ""}
                            >
                                Hosting
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/security"
                                className={pathname == "/security" ? "active" : ""}
                            >
                                Security
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/email"
                                className={pathname == "/email" ? "active" : ""}
                            >
                                Email
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact"
                                className={pathname == "/contact" ? "active" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/help"
                                className={pathname == "/help" ? "active" : ""}
                            >
                                Help
                            </Link>
                        </li>
                    </menu>
                </nav>
                <div>
                    <SecBtn
                        SecBtnText= 'Login'
                        SecBtnLink= '/'
                    />
                </div>
            </div>
        </header>
    )
}
