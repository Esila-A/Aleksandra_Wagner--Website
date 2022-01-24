import profile from "../ola.jpg"

const About = () => {

  return (
    <div className="about" id="about">
      <h2 className="about_header">O MNIE</h2>
      <div className="about_content">
        <img src={profile} className="profile"/>
        <p className="text">Ukończyłam studia na kierunku biologia, na Uniwersytecie<br/>
Jagiellońskim. W roku akademickim 1987/88 przebywałam<br/>
na stypendium w Oxford University (Merton Colleg) w Anglii,<br/>
jako visiting student. Doświadczenie to pozwoliło mi na<br/>
opanowanie tak terminologii naukowej, jak i udoskonalenie<br/>
posługiwania się językiem angielskim w sytuacjach codziennych.
<br/><br/>
W roku 1990 uzyskałam stopień naukowy doktora nauk<br/>
przyrodniczych. W latach 1990-1992 pracowałam w XVI Liceum<br/>
Ogólnokształcącym im. Krzysztofa Kamila Baczyńskiego, jako<br/>
nauczyciel języka angielskiego. Od roku 1992 pracuję na AGH<br/>
na Wydziale Geodezji Górniczej i Inżynierii Środowiska, jako<br/>
adiunkt. Obok przedmiotów ogólnych i kierunkowych w języku<br/>
polskim prowadziłam i prowadzę przedmioty w języku angielskim,<br/>
takie jak np. „Biotechnology”, „Global Environmental Problems”,<br/>
„Field Work in Biology and Ecology”, „Smart cities”. 
<br/><br/>
Jestem redaktorem językowym czasopisma “Geoinformatica Polonica”.
<br/><br/>
Od 16. 04. 1991 r. posiadam uprawnienia tłumacza przysięgłego z języka<br/>
angielskiego (TP/450/06). W ciągu swej pracy zawodowej wielokrotnie<br/>
tłumaczyłam na międzynarodowych konferencjach, jak również zajmuję się<br/>
tłumaczeniem i adiustacją artykułów naukowych, dokumentów urzędowych<br/>
czy tekstów codziennych.</p>
      </div>
    </div>
  )
}

export default About;
