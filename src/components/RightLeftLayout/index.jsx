import Image from 'next/image';
import style from './component.module.css';

export default function RightLeftLayout({ rlLayout }) {

    return (
        <section className={style.RightLeftLayout}>
            {rlLayout.map((rlLayoutCopy, index) => (
                <div 
                    key={index} 
                    className={style.RightLeftLayout__wrapper}
                >
                    <div>
                        <Image 
                            src={rlLayoutCopy.Img} 
                            alt={rlLayoutCopy.Title} 
                            width={rlLayoutCopy.width} 
                            height={rlLayoutCopy.height}
                            data-scroll 
                            data-scroll-speed="0.13"
                        />
                    </div>
                    <div>
                        <h4 
                            className='wine'
                            data-scroll 
                            data-scroll-speed="0.15"
                        >
                            {rlLayoutCopy.Title}
                        </h4>
                        <p
                            data-scroll 
                            data-scroll-speed="0.12"
                        >
                            {rlLayoutCopy.Text}
                        </p>
                    </div>
                </div>
                )
            )}
        </section>
    )
}
