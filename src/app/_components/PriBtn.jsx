import Link from "next/link";

export default function PriBtn({ PriBtnLink, PriBtnText, PropsclassName }) {
  return (
    <>
      <Link href={PriBtnLink} title={PriBtnText}>
        <button
          className={`${PropsclassName} btn__pri`}
          // onClick={() => props.onClick()}
        >
          {PriBtnText}
        </button>
      </Link>
    </>
  );
}
