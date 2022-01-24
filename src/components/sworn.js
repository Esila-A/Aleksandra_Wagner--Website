const Sworn = () => {

  return (
    <div className="sworn">
      <h2 className="sworn_header">TŁUMACZENIA PRZYSIĘGŁE</h2>
      <div className="sworn_list">
        <div className="circle">
          <h3 className="title">DOKUMENTÓW<br/>URZĘDOWYCH</h3>
          <p className="text">akty urodzenia, akty zgonów,<br/>akty małżeństwa, dowody osobiste,<br/>karty pobytu, prawa jazdy,<br/>decyzje administracyjne,<br/>zaświadczenia urzędowe,<br/>dyplomy i świadectwa szkolne<br/>dokumenty podatkowe i<br/>ubezpieczeniowe</p>
          {/* <p className="text">akty urodzenia, akty zgonów,<br/>akty małżeństwa, dowody osobiste,<br/>dyplomy i świadectwa szkolne,<br/>karty pobytu, prawa jazdy,<br/>zaświadczenia urzędowe,<br/>decyzje administracyjne,<br/>dokumenty podatkowe i<br/>ubezpieczeniowe</p> */}
        </div>
        <div className="circle">
          <h3 className="title">DOKUMENTÓW<br/>SAMOCHODOWYCH</h3>
          <p className="text">dowody rejestracyjne, książki pojazdu,<br/>dokumenty zakupu, ubezpieczenia,<br/>przeglądu technicznego,<br/>homologacji</p>
        </div>
        <div className="circle">
          <h3 className="title">DOKUMENTÓW<br/>NOTARIALNYCH</h3>
          <p className="text">umowy zakupu nieruchomości,<br/>akty notarialne</p>
        </div>
        <div className="circle">
          <h3 className="title">DOKUMENTÓW<br/>SĄDOWYCH</h3>
          <p className="text">pozwy, odpowiedzi na pozwy,<br/>opinie biegłych, wyroki,<br/>dokumenty dowodowe</p>
        </div>
      </div>
    </div>
  )
}

export default Sworn;
