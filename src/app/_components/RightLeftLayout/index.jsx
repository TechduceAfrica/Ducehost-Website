import Image from 'next/image';
import style from './component.module.css';

export default function RightLeftLayout({ rlLayout }) {

    return (
        <section className={style.RightLeftLayout}>
            {rlLayout.map((rlLayoutCopy, index) => (
                <div 
                    key={index} 
                    className={style.RightLeftLayout__wrapper}
                    data-scroll
                    data-scroll-speed="0.15"
                >
                    <div className="fade__in">
                        <Image 
                            src={rlLayoutCopy.Img} 
                            alt={rlLayoutCopy.Title} 
                            width={rlLayoutCopy.width} 
                            height={rlLayoutCopy.height}
                        />
                    </div>
                    <div className="fade__in">
                        <h4 
                            className='wine'
                            
                        >
                            {rlLayoutCopy.Title}
                        </h4>
                        <p>
                            {rlLayoutCopy.Text}
                        </p>
                    </div>
                </div>
                )
            )}
        </section>
    )
}
