import { useState } from "react";

/**
 *
 * @param {Boolean} initialValue Booleano para asignar un valor inicial a useModal()
 *
 * @returns Destructuración: `visible`, `handleOpenModal()`, `handleCloseModal()`
 */

export const useModal = (initialValue = false) => {
  const [visible, setVisible] = useState(initialValue);

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return [visible, handleOpenModal, handleCloseModal];
};
