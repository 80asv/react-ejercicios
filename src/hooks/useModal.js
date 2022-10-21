import { useState } from 'react';

export const useModal = (initialValue = false) => {
  const [open, isOpen] = useState(initialValue);

  const openModal = () => isOpen(true);
  const closeModal = () => isOpen(false);

  return [open, openModal, closeModal];
}

