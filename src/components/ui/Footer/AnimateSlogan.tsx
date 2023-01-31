import { useEffect, useRef } from "react";

export const AnimateSlogan = () => {
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sloganRef.current || !sloganRef.current.textContent) {
      return;
    }

    let textCharArray = sloganRef.current.textContent.split("");

    textCharArray = textCharArray.map(
      (e, i) =>
        `<span class='instill-footer-animate-slogan-letter-${i}'>${e}</span>`
    );

    sloganRef.current.innerHTML = textCharArray.join("");
  }, []);

  return (
    <>
      <div className="instill-footer-animate-slogan h-[100px] w-[350px] font-mono text-2xl font-medium text-instillGrey05">
        <div ref={sloganRef}>UNSTRUCTURED DATA INFRASTRUCTURE</div>
        <div>MADE FOR ALL</div>
      </div>
    </>
  );
};
