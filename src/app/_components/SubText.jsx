export default function SubText(props) {
    return (
        <>
            <p className="subtext">
                {props.text}
                <span className="wine"> {props.wine} </span>
                {props.textContiue}
            </p>
        </>
    )
}
