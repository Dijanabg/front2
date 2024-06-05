/*
    Napraviti stranicu koja odgovara primeru koji je dat.
    Slika je dostupna na sledećem linku: https://www.logo.wine/logo/Apache_Tomcat
*/
import slika from "./../assets/images/zad7.png";
import logo from "./../assets/images/Apache_Tomcat-Logo.wine.svg";
import "./zadatak7_css.css";
const Zadatak_J7 = () => {
  return (
    <div>
      <h2> Zadatak 7</h2>
      <div className="zad7_container">
        <div>
          <p> Prikazati tekst kao što je na slici: </p>
          <img src={slika} />
        </div>
        
        <p> TO DO:</p>
        <div className="text-container">{/* to do: ovde strukturirati tekst */}
          
            <h1>Web čitači</h1>
            <p className="web"><span className="web-span">Web čitači</span> je aplikacija koja je namenjena prikayu sadržaja web stranica</p>
            <p className="web">Stranice se mogu dobaviti iz fajl-sistema, tako i putem TCP/IP mreze. Protokol kojim komuniciraju web citaci i web server je HTTP protokol.</p>
            <p className="web">Danas su najpoznatiji web čitači:</p>
            <ol>
              <li><a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>(<span>https://www.microsoft.com/en-us/edge</span>)</li>
              <li><a href="https://www.google.com/chrome/">Google Chrome</a>(<span>https://www.google.com/chrome/</span>)</li>
              <li><a href="https://www.mozilla.org">Mozilla</a>(<span>https://www.mozilla.org</span>)</li>
            </ol>
            <img className='logo' src={logo} alt="Apache Tomcat Logo" />
        </div>
      </div>
    </div>
  );
};

export default Zadatak_J7;
