const Sworn = () => {

  return (
    <div className="sworn">
      <h1 className="sworn_header">TŁUMACZENIA PRZYSIĘGŁE</h1>
      <div className="sworn_list">
        <div className="circle">
          <li className="title">DOKUMENTÓW<br/>URZĘDOWYCH</li>
          <p className="text">akty urodzenia, akty zgonów,<br/>akty małżeństwa, dowody osobiste,<br/>karty pobytu, prawa jazdy,<br/>decyzje administracyjne,<br/>zaświadczenia urzędowe,<br/>dyplomy i świadectwa szkolne<br/>dokumenty podatkowe i<br/>ubezpieczeniowe</p>
          {/* <p className="text">akty urodzenia, akty zgonów,<br/>akty małżeństwa, dowody osobiste,<br/>dyplomy i świadectwa szkolne,<br/>karty pobytu, prawa jazdy,<br/>zaświadczenia urzędowe,<br/>decyzje administracyjne,<br/>dokumenty podatkowe i<br/>ubezpieczeniowe</p> */}
        </div>
        <div className="circle">
          <li className="title">DOKUMENTÓW<br/>SAMOCHODOWYCH</li>
          <p className="text">dowody rejestracyjne, książki pojazdu,<br/>dokumenty zakupu,<br/>przeglądu technicznego,<br/>homologacji i ubezpieczenia</p>
        </div>
        <div className="circle">
          <li className="title">DOKUMENTÓW<br/>NOTARIALNYCH</li>
          <p className="text">umowy zakupu nieruchomości,<br/>akty notarialne</p>
        </div>
        <div className="circle">
          <li className="title">DOKUMENTÓW<br/>SĄDOWYCH</li>
          <p className="text">pozwy, odpowiedzi na pozwy,<br/>opinie biegłych, wyroki,<br/>dokumenty dowodowe</p>
        </div>
      </div>
    </div>
  )
}

export default Sworn;
