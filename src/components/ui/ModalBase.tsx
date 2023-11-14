import React, {
  useRef,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { createPortal } from "react-dom";
import cn from "clsx";
import { Nullable } from "@/types/instill";

export type ModalBaseProps = {
  modalIsOpen: boolean;
  modalId: string;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  modalBgColor: Nullable<string>;
  modalPadding: Nullable<string>;
  modalRootId: string;
  children?: ReactNode;
  dataTestId?: string;
  closeModalWithButton?: boolean;
  closeModalButton?: ReactNode;
};

const ModalBase = ({
  modalId,
  children,
  modalIsOpen,
  setModalIsOpen,
  modalBgColor,
  modalPadding,
  dataTestId,
  modalRootId,
  closeModalWithButton,
  closeModalButton,
}: ModalBaseProps) => {
  if (closeModalWithButton === true && closeModalButton === undefined) {
    throw new Error(
      "Didn't provide closeModalButton when closeModalWithButton is set to true"
    );
  }

  const el = useRef<HTMLDivElement>();

  useEffect(() => {
    el.current = document.createElement("div");
    el.current.setAttribute("role", "dialog");
    el.current.setAttribute("aria-modal", "true");
    el.current.setAttribute("class", "relative z-100");
    el.current.setAttribute("id", modalId);

    const modalRoot = document.querySelector(`#${modalRootId}`);
    if (modalRoot) {
      modalRoot.appendChild(el.current);
    }

    return () => {
      if (!el.current || !modalRoot) return;
      modalRoot.removeChild(el.current);
    };
  }, [modalRootId, modalId]);

  // Instead of `el`, the container is the `ref.current`
  return el.current
    ? modalIsOpen
      ? createPortal(
          <React.Fragment>
            {/** Background backdrop, show/hide based on modal state. */}
            <div className="fixed inset-0 z-[100] transition-opacity" />

            {/** Modal panel, show/hide based on modal state. */}
            <div
              className="fixed inset-0 z-[100] w-screen cursor-pointer overflow-y-auto"
              onClick={() => {
                if (!closeModalWithButton) setModalIsOpen(false);
              }}
            >
              <div
                className="fixed right-5 top-5"
                onClick={() => setModalIsOpen(false)}
              >
                {closeModalButton || null}
              </div>
              <div className="flex min-h-full w-screen">
                <div
                  className={cn(
                    "flex min-h-full w-full items-center justify-center",
                    modalBgColor,
                    modalPadding
                  )}
                  data-testid={dataTestId}
                >
                  {children}
                </div>
              </div>
            </div>
          </React.Fragment>,
          el.current
        )
      : null
    : null;
};

export default ModalBase;
