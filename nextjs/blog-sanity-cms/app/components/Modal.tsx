"use client";

import { useEffect, useRef, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const modal = useRef<HTMLDialogElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      // If the user has not visited before, show the modal
      modal.current?.showModal();
      setModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    modal.current?.close();
    localStorage.setItem("hasVisitedBefore", "true"); // Set a local storage item to remember the visit
    setModalOpen(false);
  };

  return modalOpen ? (
    <>
      <div className="absolute left-0 top-0 z-50 h-screen w-screen backdrop-blur-sm"></div>
      <dialog
        ref={modal}
        className="z-[100] my-auto mt-16 flex h-[250px] w-[400px] max-w-[90%] flex-col justify-between p-4 shadow-xl"
      >
        <div>{children}</div>
        <div className="flex w-full justify-end">
          <button
            onClick={closeModal}
            className="flex items-center border border-black p-1.5 px-3"
          >
            Thanks <BsChevronRight />
          </button>
        </div>
      </dialog>
    </>
  ) : (
    <div></div>
  );
};

export default Modal;
