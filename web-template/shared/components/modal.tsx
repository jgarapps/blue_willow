import { useState } from "react";

interface modalProps {
  openModal: boolean;
  setModalOpen: Function;
}

export default function resuableModal({ openModal, setModalOpen }: modalProps) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="closeModalRow">
          <button onClick={() => setModalOpen(!openModal)}>X</button>
        </div>
        <form method="POST">
          <label>
            Full Name:
            <input type="text" placeholder={"Full Name"} />
          </label>
          <label>
            Email:
            <input type="text" placeholder={"Email"} />
          </label>
          <label>
            Message:
            <textarea rows={4} placeholder={"Your Message"} />
          </label>
        </form>
      </div>
    </div>
  );
}
