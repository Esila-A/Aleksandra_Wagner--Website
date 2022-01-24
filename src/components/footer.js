const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_content--data">
          <h4>DANE FIRMY</h4>
          <br/>
          <p>
            NAZWA: Tłumaczenia Aleksandra Wagner
            <br/>
            NIP: 6761345477
            <br/>
            REGON: 356868145
            <br/>
            ADRES: ul. Czarnowiejska 25/4, 31-126 Kraków
          </p>
        </div>
        <div className="footer_content--data">
          <h4>KONTAKT</h4>
          <br/>
          <p>
          EMAIL: tlumaczenia.a.wagner@gmail.com
          <br/>
          TELEFON: +48 603 565 095
          </p>
        </div>
      </div>
      <p className="copyright">Copyright &copy; 2022</p>
    </footer>
  )
}

export default Footer;
