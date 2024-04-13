export default function DownldBtn({ DownldBtnTitle, PropsclassName }) {
  return (
    <>
      <button
        title={DownldBtnTitle}
        type="submit"
        className={`${PropsclassName} btn__pri`}
        // onClick={() => props.onClick()}
      >
        {DownldBtnTitle}
      </button>
    </>
  );
}
