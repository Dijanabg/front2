/* 
    Zadatak 6
    Napisati funkciju koja računa koliko je dobar pangram neki string. Pangram je rečenica koja ima u sebi sva slova nekog jezika. Ovde nas samo zanima engleksi jezik radi jednostavnosti. Velika i mala slova ignorišemo, baš kao i apsolutno sve što nije slovo. Kvalitet pangrama definiše sledeće pravilo: ako nemamo sva slova, onda je kvalitet 0. Ako imamo sva slova, onda je kvalitet jednak broju slova u azbuci jezika (26 ovde) podeljenom sa brojem slova koji pangram u stvari ima. Savršen pangram (bez ponavljanja) onda ima rezultat 1. 


*Ukloniti sve znakove osim slova iz stringa.
*Pretvoriti sva slova u mala slova.
*Proveriti da li su sva slova engleske abecede prisutna u stringu.

    */
const evaluate_pangram = (p) => {
  let ap = Array.from(p.toLowerCase()).filter((v) => Boolean(v.match(/[a-z]/)));
  let lp = ap.length;
  let sp = new Set(ap);
  //console.log(sp.length);
  if (sp.size != 26) {
    return 0;
  }
  return 26 / lp;
};

const JSV6 = () => {
  console.log(evaluate_pangram("The quick brown fox jumps over the lazy dog"));
  console.log(evaluate_pangram("Jink cwm, zag veldt fob Qursh pyx."));
  console.log(evaluate_pangram("Ovo nije pangram"));
  return <div></div>;
};

export default JSV6;
