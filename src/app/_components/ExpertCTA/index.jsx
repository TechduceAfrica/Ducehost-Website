import Image from 'next/image'
import style from './component.module.css'

export default function ExpertCTA() {
  return (
    <section 
        className={`${style.expert__cta__section} container__width`}
    >
        <div 
            className={`${style.expert__cta__img} fade__in`} 
            data-scroll 
            data-scroll-speed="0.12"
        >
            <Image 
                src='/images/Ducehost-Expert-Assistance.webp' 
                alt='Domain Hosting Expert Assistance Whenever You Need It'
                width={693} 
                height={390} 
            />
        </div>
        <div 
            className={style.expert__cta__text}
            data-scroll 
            data-scroll-speed="0.13"
        >
            <h4 className="fade__in">
                <span className='wine'>Expert Assistance </span>
                Whenever You Need It
            </h4>
            <p className="fade__in">
                For any questions, issues, or challenges that may arise during the domain transfer process, our expert support team is accessible around the clock to provide you with the guidance you require.
            </p>
            <p>
                Call: 
                <a 
                    href="tel:2349027006055" 
                    title='Phone call'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='wine'
                >: 
                      +234 902 7006 055 
                </a> or Chat: <a 
                    href='https://wa.link/mc7o7x' 
                    title='WhatsApp chat'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='wine'
                >
                    WhatsApp
                </a>
            </p>
        </div>
    </section>
  )
}
