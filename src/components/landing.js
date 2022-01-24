import photo from "../kimson-02.png";

const Landing = () => {

  return (
    <div className="landing" id="landing">
      <div className="landing_text">
        <h1 className="landing_text--header">PROFESJONALNE<br/>TŁUMACZENIA<br/>POLSKO-ANGIELSKIE<br/>ANGIELSKO-POLSKIE</h1>
        <br/>
        <p className="landing_text--paragraph">
          Tłumaczę teksty specjalistyczne i zwykłe,<br/>a także przysięgle dokumenty urzędowe
        </p>
        <br/><br/><br/><br/><br/>
        <p className="landing_text--paragraph">Umów wycenę i termin realizacji</p>
        <button className="btn">UMÓW</button>
      </div>
      <img src={photo} className="photo"/>
    </div>
  )
}

export default Landing;
