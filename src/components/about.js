import profile from "../ola.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about_header">O MNIE</h2>
      <div className="about_content">
        <img src={profile} className="profile" alt="profile" />
        <p className="text">
          Ukończyłam studia na kierunku biologia, na Uniwersytecie
          Jagiellońskim. W roku akademickim 1987/88 przebywałam na stypendium w
          Oxford University (Merton Colleg) w Anglii, jako visiting student.
          Doświadczenie to pozwoliło mi na opanowanie tak terminologii naukowej,
          jak i udoskonalenie posługiwania się językiem angielskim w sytuacjach
          codziennych.
          <br />
          <br />
          W roku 1990 uzyskałam stopień naukowy doktora nauk przyrodniczych. W
          latach 1990-1992 pracowałam w XVI Liceum Ogólnokształcącym im.
          Krzysztofa Kamila Baczyńskiego, jako nauczyciel języka angielskiego.
          Od roku 1992 pracuję na AGH na Wydziale Geodezji Górniczej i
          Inżynierii Środowiska, jako adiunkt. Obok przedmiotów ogólnych i
          kierunkowych w języku polskim prowadziłam i prowadzę przedmioty w
          języku angielskim, takie jak np. „Biotechnology”, „Global
          Environmental Problems”, „Field Work in Biology and Ecology”, „Smart
          cities”.
          <br />
          <br />
          Jestem redaktorem językowym czasopisma “Geoinformatica Polonica”.
          <br />
          <br />
          Od 16. 04. 1991 r. posiadam uprawnienia tłumacza przysięgłego z języka
          angielskiego (TP/450/06). W ciągu swej pracy zawodowej wielokrotnie
          tłumaczyłam na międzynarodowych konferencjach, jak również zajmuję się
          tłumaczeniem i adiustacją artykułów naukowych, dokumentów urzędowych
          czy tekstów codziennych.
        </p>
      </div>
    </div>
  );
};

export default About;
