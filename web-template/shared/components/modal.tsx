import { useState } from "react";

interface modalProps {
  openModal: boolean;
  setModalOpen: Function;
}

export default function resuableModal({ openModal, setModalOpen }: modalProps) {
  return (
    <div className="modal">
      <div>
        <button onClick={() => setModalOpen(!openModal)}>X</button>
      </div>
      <form method="POST">
        <label>
          Name:
          <input />
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Message:
          <textarea />
        </label>
      </form>
    </div>
  );
}
