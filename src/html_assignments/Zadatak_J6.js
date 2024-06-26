// prikazati dati tekst kao što je to na datoj slici:
/*
SEO (Search Engine Optimization ) predstavlja marketinsku tehniku koja sa odnosi na optimizaciju sajta za pretrazivace . Cilj SEO tehnika
je da se sajt prikaze u rezultatima pretrage, sto blize vrhu. Najpre moramo da se upoznamo sa nekim osnovnim pojmovima.
Potrebe korisnika i ciljevipretrazivaca
Korisnici zele da sto efikasnije pronadju informaciju koja ih zanima. To znaci, da uz sto manje napora dodju do web sajta koji ih
interesuje. Web pretrazivaci , omogucavaju da unosom jednog ili vise termina ( kljucnih reci), korisnik dobije listu sajtova koji
odgovaraju njegovom upitu.
Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebe korisnika, posto i sami zaradjuju od korisnickih pretraga direktno
prikazujuci reklame unutar svojih rezultata) ili indirektno ( nudeci dodatne usluge).
Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najbolji nacin "pogodi" sta su zeleli . Algoritam vrsi procenu koji rezultati
su najrelevantniji za datu pretragu i tako ih i poredja na stranici sa rezultatima. Odavno je poznato da su korisnici "lenji" retko ko zeli
da " istrazuje " kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice
prikazu najbolje rezultate.
Ciljevi vlasnika sajta
Nije tajna da vlasnici sajtova zele posecenost . Zelimo da korisnici dodju nas sajt iz razlicitih razloga da saznaju za nasu ponudu, da
bismo zaradili od reklamiranja, ili da bismo imali mogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva , korisnici
dolaze do sajtova koriscenjem web pretrazivaca . Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.
Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da razmisljaju o tome kako da svoj sajt "doteraju" na vrh
pretrage. Svaka aktivnost koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.
Zelimo vam puno uspeha!
*/

// Potreban link za uspešno odrađen zadatak: https://sr.wikipedia.org/sr el/SEO_optimalizacija_veb sajta

import slika from "./../assets/images/seo.png";
import './zadatak6_css.css';
const Zadatak_J6 = () => {
  return (
    <div>
      <h2> Zadatak 6</h2>
      <div className="zad_container">
        <div>
          <p> Prikazati tekst kao što je na slici: </p>
          <img src={slika} />
        </div>
      </div>
      <p> TO DO:</p>
      <div className="container-line">{/* to do: ovde strukturirati tekst */}
          
          <div >
            <h1>SEO praksa</h1>
            <p>SEO (Search Engine Optimization ) predstavlja marketinsku tehniku koja sa odnosi na optimizaciju sajta za pretrazivace. <span>Cilj SEO tehnika
            je da se sajt prikaze u rezultatima pretrage, sto blize vrhu.</span></p>
            <p>Najpre moramo da se upoznamo sa nekim <a href="https://sr.wikipedia.org/sr el/SEO_optimalizacija_veb sajta">osnovnim pojmovima</a>.</p>
          </div>
          <div>
            <h2>Potrebe korisnika i ciljevi pretrazivaca</h2>
            <p>Korisnici zele da sto efikasnije pronadju informaciju koja ih zanima. To znaci, da uz sto manje napora dodju do web sajta koji ih
            interesuje. Web pretrazivaci , omogucavaju da unosom jednog ili vise termina ( kljucnih reci), korisnik dobije listu sajtova koji
            odgovaraju njegovom upitu.</p>
            <p>Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebe korisnika, posto i sami zaradjuju od korisnickih pretraga direktno
            prikazujuci reklame unutar svojih rezultata) ili indirektno ( nudeci dodatne usluge).</p>
            <p>Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najbolji nacin "pogodi" sta su zeleli . Algoritam vrsi procenu koji rezultati
            su najrelevantniji za datu pretragu i tako ih i poredja na stranici sa rezultatima. Odavno je poznato da su korisnici "lenji" retko ko zeli
            da " istrazuje " kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice
            prikazu najbolje rezultate.</p>
          </div>
          <div>
            <h2>Ciljevi vlasnika sajta</h2>
            <p>
              Nije tajna da vlasnici sajtova zele posecenost . Zelimo da korisnici dodju nas sajt iz razlicitih razloga da saznaju za nasu ponudu, da
              bismo zaradili od reklamiranja, ili da bismo imali mogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva , korisnici
              dolaze do sajtova koriscenjem web pretrazivaca . Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.
            </p>
            <p>
              Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da razmisljaju o tome kako da svoj sajt "doteraju" na vrh
              pretrage. Svaka aktivnost koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.
            </p>
            <p>
              Zelimo vam puno uspeha!
            </p>
          </div>
      </div>
    </div>
  );
};

export default Zadatak_J6;

