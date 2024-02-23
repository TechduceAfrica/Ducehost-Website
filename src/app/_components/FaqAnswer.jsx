
export default function FaqAnswer({ answer }) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: answer }} className="faq__answer" ></div>
        </>
    )
}
