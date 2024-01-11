export default function HeadlineSmall(props) {
    return (
        <>
            <h3 className="headlinesmall">
                    {props.text}
                    <span className="wine"> {props.wine} </span>
                    {props.textContiue}
            </h3>
        </>
    )
}
  