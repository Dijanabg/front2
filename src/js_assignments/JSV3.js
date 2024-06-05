const sortiranje = () => {
  /* 
    Zadatak 3
    Iskoristiti funkciju iz Zadatka 2 da se sortira sledeća lista podataka
    let studenti = [
        {indeks: "XY 409/2072", ime: "Alice", prezime: "Alferson"},
        {indeks: "ZW 133/2072", ime: "Bob", prezime: "Bobbert"},
        {indeks: "XY 112/2073", ime: "Carol", prezime: "Creed"},
        {indeks: "XY 507/2071", ime: "Drew", prezime: "Danger"},
        {indeks: "ZW 233/2070", ime: "Eve", prezime: "Emmerson"},
        {indeks: "ZW 57/2072", ime: "Trent", prezime: "Tweed"},
        {indeks: "XY 111/2071", ime: "Fred", prezime: "Franks"},
        {indeks: "ZW 404/2073", ime: "George", prezime: "Green"}
    ];
    I to po indeksu tako što se prvo sortira abecedno po smeru, pa zatim po godini, i konačno po broju indeksa. Da bi se sortiralo abecedno samo treba porediti stringove kao da su brojevi. 
*/
  const studenti = [
    { indeks: "XY 409/2072", ime: "Alice", prezime: "Alferson" },
    { indeks: "ZW 133/2072", ime: "Bob", prezime: "Bobbert" },
    { indeks: "XY 112/2073", ime: "Carol", prezime: "Creed" },
    { indeks: "XY 507/2071", ime: "Drew", prezime: "Danger" },
    { indeks: "ZW 233/2070", ime: "Eve", prezime: "Emmerson" },
    { indeks: "ZW 57/2072", ime: "Trent", prezime: "Tweed" },
    { indeks: "XY 111/2071", ime: "Fred", prezime: "Franks" },
    { indeks: "ZW 404/2073", ime: "George", prezime: "Green" },
  ];

  const indeksComparator = (a, b) => {
    // odvajanje smera, godine i broja indeksa
    const smerA = a.indeks.substring(0, 2);
    const smerB = b.indeks.substring(0, 2);
    const godinaA = parseInt(a.indeks.substring(3, 7));
    const godinaB = parseInt(b.indeks.substring(3, 7));
    const brojA = parseInt(a.indeks.substring(8));
    const brojB = parseInt(b.indeks.substring(8));

    // sortiranjr po smeru, pa po godini, pa po broju indeksa
    if (smerA !== smerB) {
      return smerA.localeCompare(smerB); //abecedno poredi stringove
    } else if (godinaA !== godinaB) {
      return godinaA - godinaB;
    } else {
      return brojA - brojB;
    }
  };

  return sortArray(studenti, indeksComparator);
};

const sortArray = (arr, comparator) => {
  return arr.sort(comparator);
};

const JSV3 = () => {
  return <pre>{JSON.stringify(sortiranje(), null, 2)}</pre>;
};

export default JSV3;
