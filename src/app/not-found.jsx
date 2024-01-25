import Image from "next/image";
import PriBtn from "./_components/PriBtn";

export default function NotFoundPage() {

    const errorPageImg = {
        src: "/images/ducehost-page-not-found.webp",
        alt: `Ducehost Page not found`,
        title: `Ducehost Page not found`,
        width: `653`,
        height: `653`,
    }

    return (
        <section className="container__width error__404__page">
            <div>
                <h2>Ooops...</h2>
                <h3>Page not found</h3>
                <p>The page you are looking for doesn’t exist or another error occurred. Go back to home page.</p>
                <PriBtn
                    PriBtnText= 'Back to Home'
                    PriBtnLink= '/'
                />
            </div>
            <div>
                <Image 
                    {...errorPageImg}
                />
            </div>
        </section>
    )
}
