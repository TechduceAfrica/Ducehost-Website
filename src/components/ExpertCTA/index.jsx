import Image from 'next/image'
import style from './component.module.css'

export default function ExpertCTA() {
  return (
    <section className={`${style.expert__cta__section} container-width`}>
        <div 
            className={style.expert__cta__img} 
            data-scroll 
            data-scroll-speed="0.12">
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
            <h4>
                <span className='wine'>Expert Assistance </span>
                Whenever You Need It
            </h4>
            <p>
                For any questions, issues, or challenges that may arise during the domain transfer process, our expert support team is accessible around the clock to provide you with the guidance you require.
            </p>
            <p>
                Call or Chat  
                <a 
                    href="tel:2349027006055" 
                    title='Call or Chat'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='wine'
                >: 
                      +234 902 7006 055
                </a> 
            </p>
        </div>
    </section>
  )
}
