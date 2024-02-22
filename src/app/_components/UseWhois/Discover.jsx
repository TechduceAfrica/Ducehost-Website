import DiscoverList from './DiscoverList'
import style from './UseWhois.module.css'

export default function Discover({ title, img, width, height, copyContent }) {
    return (
        <div>
            <div className={style.title__wrapper}>
                <h2 dangerouslySetInnerHTML={{ __html: title }} >
                </h2>
            </div>
            <div>
                <DiscoverList 
                    img={img} 
                    title={title}
                    width={width}
                    height={height}
                    Contents={copyContent}
                />
            </div>
        </div>
    )
}
