import photo from "../graphic.png";

const Landing = () => {
  return (
    <div className="landing" id="landing">
      <div className="landing_text">
        <h1 className="landing_text--header">
          PROFESJONALNE
          <br />
          TŁUMACZENIA
          <br />
          POLSKO-ANGIELSKIE
          <br />
          ANGIELSKO-POLSKIE
        </h1>
        <br />
        <p className="landing_text--paragraph">
          Tłumaczę teksty specjalistyczne i zwykłe,
          <br />a także przysięgle dokumenty urzędowe
        </p>
        <br />
        <div className="hmm">
          <div className="cta">
            <p className="landing_text--paragraph paragraph-two">
              Umów wycenę i termin realizacji
            </p>
            <a href="#form">
              <button className="btn">UMÓW</button>
            </a>
          </div>
        </div>
      </div>
      <img src={photo} className="photo" alt="graphic" />
    </div>
  );
};

export default Landing;
