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
      <div
        ref={sloganRef}
        className="instill-footer-animate-slogan h-[100px] w-[300px] font-mono text-2xl font-medium text-instillGrey05"
      >
        WHERE VISUAL DATA PREPARATION MADE FOR ALL
      </div>
    </>
  );
};
