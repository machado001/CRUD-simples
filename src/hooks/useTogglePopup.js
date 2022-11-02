import { useState } from "react";

export const useTogglePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return { togglePopup, isOpen };
};
