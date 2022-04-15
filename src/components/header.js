import MobileMenu from "./mobileMenu";
import ComputerMenu from "./computerMenu";

const Header = () => {

  return (
      <div className="header">
        <div className="header_logo">
          <p className="header_logo--translate">TŁUMACZENIA</p>
          <p className="header_logo--name">Aleksandra Wagner</p>
        </div>
        <MobileMenu />
        <ComputerMenu />
      </div>
  );
}

export default Header;
