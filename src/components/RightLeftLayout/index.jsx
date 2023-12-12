import Image from 'next/image';

export default function RightLeftLayout({ title, content, imgcontent }) {

    const imgcontent= {
        imgLink, imgAlt, width, height
    }

    return (
        <section>
            <div>
                <Image
                    src={imgLink}
                    alt={imgAlt}
                    width={width}
                    height={height}
                    className={style.logo}
                />
            </div>
            <div>
                <h4>
                    {title}
                </h4>
                <p>
                    {content}
                </p>
            </div>
        </section>
    )
}
