export default function FormBtn({ FormBtnLink, FormBtnText, PropsclassName }) {
  return (
    <>
      <button
        title={FormBtnText}
        type="submit"
        className={`${PropsclassName} btn__pri`}
        // onClick={() => props.onClick()}
      >
        {FormBtnText}
      </button>
    </>
  );
}
