const Menu = () => {

  return (
    <div className="menu">
      <div className="menu_logo">
        <p className="menu_logo--translate">TŁUMACZENIA</p>
        <p className="menu_logo--name">Aleksandra Wagner</p>
      </div>
      <ul className="menu_navigation">
        <a href="#landing" className="menu_navigation--link">Główna</a>
        <a href="" className="menu_navigation--link">Usługi</a>
        <a href="#about" className="menu_navigation--link">O mnie</a>
        <a href="#form" className="menu_navigation--link">Kontakt</a>
      </ul>
    </div>
  )
}

export default Menu;
