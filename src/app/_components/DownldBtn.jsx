export default function DownldBtn(props) {
  return (
    <>
      <a
        href={props.DownldBtnLink}
        title={props.DownldBtnText}
        download={props.DownldBtnDownload}
        target={props.DownldBtnTarget}
        rel={props.DownldBtnReferrer}
      >
        <button
          className={`${props.className} btn__pri`}
          onSubmit={() => props.onClick()}
        >
          {props.DownldBtnText}
        </button>
      </a>
    </>
  );
}
