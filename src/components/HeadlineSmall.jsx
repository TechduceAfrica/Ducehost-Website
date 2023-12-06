export default function HeadlineSmall(props) {
    return (
        <>
            <p className="headlinesmall">
                    {props.text}
                    <span className="wine"> {props.wine} </span>
                    {props.textContiue}
            </p>
        </>
    )
}
  