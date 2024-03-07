import Image from 'next/image';
import style from './component.module.css';

export default function RightLeftLayout({ rlLayout }) {

    return (
        <section className={style.RightLeftLayout}>
            {rlLayout.map((rlLayoutCopy, index) => (
                <div 
                    key={index} 
                    className={`${style.RightLeftLayout__wrapper} fade__in`}
                >
                    <div>
                        <Image 
                            src={rlLayoutCopy.Img} 
                            alt={rlLayoutCopy.Title} 
                            width={rlLayoutCopy.width} 
                            height={rlLayoutCopy.height}
                        />
                    </div>
                    <div>
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
