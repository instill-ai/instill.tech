import { useRef, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import cn from "clsx";
import { Nullable } from "@/types/instill";

export type ModalBaseProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  modalBgColor: Nullable<string>;
  modalPadding: Nullable<string>;
  modalRootId: string;
  children?: ReactNode;
  dataTestId?: string;
};

const ModalBase = ({
  children,
  modalIsOpen,
  setModalIsOpen,
  modalBgColor,
  modalPadding,
  dataTestId,
  modalRootId,
}: ModalBaseProps) => {
  const el = useRef<HTMLDivElement>();

  useEffect(() => {
    el.current = document.createElement("div");
    el.current.setAttribute("role", "dialog");
    el.current.setAttribute("aria-modal", "true");
    el.current.setAttribute("class", "relative z-100");

    const modalRoot = document.querySelector(`#${modalRootId}`);
    if (modalRoot) {
      modalRoot.appendChild(el.current);
    }

    return () => {
      if (!el.current || !modalRoot) return;
      modalRoot.removeChild(el.current);
    };
  }, []);

  // Instead of `el`, the container is the `ref.current`
  return el.current
    ? modalIsOpen
      ? createPortal(
          <>
            {/** Background backdrop, show/hide based on modal state. */}
            <div className="fixed inset-0 z-[100] transition-opacity" />

            {/** Modal panel, show/hide based on modal state. */}
            <div
              className="fixed inset-0 z-[100] w-screen cursor-pointer overflow-y-auto"
              onClick={() => setModalIsOpen(false)}
            >
              <div className="flex min-h-full w-full">
                <div
                  className={cn(
                    "flex min-h-full items-center justify-center",
                    modalBgColor,
                    modalPadding
                  )}
                  data-testid={dataTestId}
                >
                  {children}
                </div>
              </div>
            </div>
          </>,
          el.current
        )
      : null
    : null;
};

export default ModalBase;
