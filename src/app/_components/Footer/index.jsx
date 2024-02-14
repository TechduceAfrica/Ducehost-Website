import Image from "next/image"
import style from './component.module.css';
import MagneticEffect from "@/app/animations/MagneticEffect";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={`${style.footer__info__wrapper} container__width`}>
                    <div className={style.footer__info}>
                        <Link href='/'>
                            <Image
                                src="/images/Ducehost-white-logo.webp"
                                alt="Ducehost Logo"
                                width={288}
                                height={49}
                            />
                        </Link>
                        <p>
                            Enjoy a better hosting experience on our  hosting platform.
                        </p>
                        <div className={style.footer__socials}>
                            <div> 
                                <a 
                                    href="https://www.facebook.com/ducehost" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <MagneticEffect>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9.945 22V13.166H7V9.485H9.945V6.54C9.945 3.497 11.871 2 14.585 2C15.885 2 17.003 2.097 17.329 2.14V5.32H15.446C13.97 5.32 13.626 6.023 13.626 7.052V9.485H17.306L16.57 13.165H13.626L13.685 22" fill="#EDEDED"/>
                                        </svg>
                                    </MagneticEffect>
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="https://www.instagram.com/ducehost" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <MagneticEffect>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.028 2.00123C13.7577 1.99843 14.4875 2.00576 15.217 2.02323L15.411 2.03023C15.635 2.03823 15.856 2.04823 16.123 2.06023C17.187 2.11023 17.913 2.27823 18.55 2.52523C19.21 2.77923 19.766 3.12323 20.322 3.67923C20.8304 4.17884 21.2238 4.78318 21.475 5.45023C21.722 6.08723 21.89 6.81423 21.94 7.87823C21.952 8.14423 21.962 8.36623 21.97 8.59023L21.976 8.78423C21.9938 9.51342 22.0014 10.2428 21.999 10.9722L22 11.7182V13.0282C22.0025 13.758 21.9948 14.4877 21.977 15.2172L21.971 15.4112C21.963 15.6352 21.953 15.8562 21.941 16.1232C21.891 17.1872 21.721 17.9132 21.475 18.5502C21.2246 19.218 20.8311 19.8228 20.322 20.3222C19.822 20.8306 19.2173 21.224 18.55 21.4752C17.913 21.7222 17.187 21.8902 16.123 21.9402C15.856 21.9522 15.635 21.9622 15.411 21.9702L15.217 21.9762C14.4875 21.994 13.7577 22.0017 13.028 21.9992L12.282 22.0002H10.973C10.2433 22.0027 9.51352 21.995 8.784 21.9772L8.59 21.9712C8.35261 21.9626 8.11527 21.9526 7.878 21.9412C6.814 21.8912 6.088 21.7212 5.45 21.4752C4.78268 21.2246 4.17823 20.8311 3.679 20.3222C3.17004 19.8225 2.77622 19.2178 2.525 18.5502C2.278 17.9132 2.11 17.1872 2.06 16.1232C2.04886 15.8859 2.03886 15.6486 2.03 15.4112L2.025 15.2172C2.00656 14.4877 1.99823 13.758 2 13.0282V10.9722C1.99721 10.2428 2.00454 9.51343 2.022 8.78423L2.029 8.59023C2.037 8.36623 2.047 8.14423 2.059 7.87823C2.109 6.81323 2.277 6.08823 2.524 5.45023C2.77537 4.78285 3.16996 4.17868 3.68 3.68023C4.17889 3.17098 4.78296 2.7768 5.45 2.52523C6.088 2.27823 6.813 2.11023 7.878 2.06023L8.59 2.03023L8.784 2.02523C9.51318 2.0068 10.2426 1.99847 10.972 2.00023L13.028 2.00123ZM12 7.00123C11.3375 6.99186 10.6798 7.11425 10.065 7.3613C9.45019 7.60834 8.89064 7.97511 8.41884 8.44029C7.94704 8.90546 7.5724 9.45977 7.31668 10.071C7.06097 10.6822 6.92929 11.3382 6.92929 12.0007C6.92929 12.6633 7.06097 13.3192 7.31668 13.9305C7.5724 14.5417 7.94704 15.096 8.41884 15.5612C8.89064 16.0264 9.45019 16.3931 10.065 16.6402C10.6798 16.8872 11.3375 17.0096 12 17.0002C13.3261 17.0002 14.5978 16.4734 15.5355 15.5358C16.4732 14.5981 17 13.3263 17 12.0002C17 10.6741 16.4732 9.40238 15.5355 8.4647C14.5978 7.52701 13.3261 7.00123 12 7.00123ZM12 9.00123C12.3985 8.99389 12.7945 9.06603 13.1648 9.21344C13.5351 9.36085 13.8723 9.58057 14.1568 9.85978C14.4412 10.139 14.6672 10.4721 14.8214 10.8396C14.9757 11.2071 15.0552 11.6016 15.0553 12.0002C15.0553 12.3988 14.976 12.7934 14.8218 13.1609C14.6677 13.5285 14.4418 13.8617 14.1575 14.141C13.8731 14.4203 13.536 14.6401 13.1657 14.7876C12.7955 14.9352 12.3995 15.0074 12.001 15.0002C11.2053 15.0002 10.4423 14.6842 9.87968 14.1216C9.31707 13.5589 9.001 12.7959 9.001 12.0002C9.001 11.2046 9.31707 10.4415 9.87968 9.87891C10.4423 9.3163 11.2053 9.00023 12.001 9.00023L12 9.00123ZM17.25 5.50123C16.9274 5.51414 16.6223 5.65138 16.3986 5.8842C16.1749 6.11702 16.05 6.42736 16.05 6.75023C16.05 7.0731 16.1749 7.38344 16.3986 7.61626C16.6223 7.84908 16.9274 7.98632 17.25 7.99923C17.5815 7.99923 17.8995 7.86753 18.1339 7.63311C18.3683 7.39869 18.5 7.08075 18.5 6.74923C18.5 6.41771 18.3683 6.09977 18.1339 5.86535C17.8995 5.63093 17.5815 5.49923 17.25 5.49923V5.50123Z" fill="#EDEDED"/>
                                        </svg>
                                    </MagneticEffect>
                                </a>
                            </div>
                            <div>
                                <a 
                                    href="https://www.x.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <MagneticEffect>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28001 9.09 5.11001 7.38 3.00001 4.79C2.63001 5.42 2.42001 6.16 2.42001 6.94C2.42001 8.43 3.17001 9.75 4.33001 10.5C3.62001 10.5 2.96001 10.3 2.38001 10V10.03C2.38001 12.11 3.86001 13.85 5.82001 14.24C5.19074 14.4122 4.5301 14.4362 3.89001 14.31C4.16162 15.1625 4.69355 15.9084 5.41103 16.4429C6.1285 16.9775 6.99546 17.2737 7.89001 17.29C6.37364 18.4904 4.494 19.1393 2.56001 19.13C2.22001 19.13 1.88001 19.11 1.54001 19.07C3.44001 20.29 5.70001 21 8.12001 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="#EDEDED"/>
                                        </svg>
                                    </MagneticEffect>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer__link}>
                        <div>
                            <h4>
                                Quick Links
                            </h4>
                            <ul>
                                <li>
                                    <Link href="http://www.ducehost.com">
                                        Schedule a Meeting
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        target="_blank"
                                        href='/website-development'
                                    >
                                        Website Projects
                                    </Link>     
                                </li>
                                <li>
                                    <Link 
                                        target="_blank" 
                                        href="/help"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                Domain & Hosting
                            </h4>
                            <ul>
                                <li>
                                    <Link 
                                        target="_blank" 
                                        href="/domain/domain-name-search"
                                    >
                                        Register a Domain 
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        target="_blank" 
                                        href="/domain/domain-transfer"
                                    >
                                        Transfer Your Domain
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        target="_blank" 
                                        href="/hosting"
                                    >
                                        Buy Hosting Plan
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        target="_blank" 
                                        href="http://www.ducehost.com/host"
                                    >
                                       Login 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                Get in Touch
                            </h4>
                            <ul>
                                <li>
                                    91, Obafemi Awolowo Way,
Ikeja, Lagos 
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@ducehost.com"
                                    >
                                        info@ducehost.com
                                    </a>
                                    <br />
                                    <a 
                                        href="mailto:ducehost@gmail.com"
                                    >
                                        ducehost@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="tel:+2349027006055"
                                    >
                                        +234 902 7006 055
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${style.footer__newsletter} container__width`}>
                    <div>
                        <label htmlFor="newsletter">
                            Subscribe to our Newsletter
                        </label>
                        <p>
                            Stay in the know with our Newsletter
                        </p>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            id="newsletter" 
                            placeholder="example@yours.com"
                        />
                        <input 
                            type="button" 
                            value="Subscribe" 
                        />
                    </div>
                </div>
                <div className={`${style.divider} container__width`}></div>
                <div className={`${style.footer__credit} container__width`}>
                    <div>
                        <Link 
                            href="/terms-and-conditions" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Terms & Conditions
                        </Link> 
                        <span> | </span>
                        <Link 
                            href="/privacy-policy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        > 
                            Privacy Policy
                        </Link>
                    </div>
                    <div>
                        <p>
                            &copy; 2019 - {new Date().getFullYear()} <a href="https://techduce.africa" target="__blank" className={style.footer__green}>Techduce Africa</a> | All Right Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
