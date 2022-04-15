const Menu = (props) => {
  return (
    <div className="menu">
      <ul className="menu_navigation">
        <li
          className="menu_navigation--list"
          onClick={() => props.isMobilePhone && props.closeMenu()}
        >
          <a href="#landing" className="menu_navigation--link">
            Główna
          </a>
        </li>
        <li
          className="menu_navigation--list"
          onClick={() => props.isMobilePhone && props.closeMenu()}
        >
          <a href="#written" className="menu_navigation--link">
            Usługi
          </a>
        </li>
        <li
          className="menu_navigation--list"
          onClick={() => props.isMobilePhone && props.closeMenu()}
        >
          <a href="#about" className="menu_navigation--link">
            O mnie
          </a>
        </li>
        <li
          className="menu_navigation--list"
          onClick={() => props.isMobilePhone && props.closeMenu()}
        >
          <a href="#form" className="menu_navigation--link">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
