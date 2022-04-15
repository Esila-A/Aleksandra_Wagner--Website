import Menu from "./menu";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/all";
import { useState } from "react";

const MobileMenu = () => {
  const [icon, setIcon] = useState(false);

  const openIcon = <FiMenu className="icon" onClick={() => setIcon(!icon)} />;

  const closeIcon = <IoMdClose className="icon icon--close" onClick={() => setIcon(!icon)} />;

  const closeMenu = () => setIcon(false);

  return (
    <div className="mobileMenu">
      {icon ? closeIcon : openIcon}
      {icon && <Menu isMobilePhone={true} closeMenu={closeMenu} />}
    </div>
  );
};

export default MobileMenu;
