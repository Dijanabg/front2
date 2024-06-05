/* 
    Zadatak 7
    Napisati funkciju koja za dati dan (1-31), mesec (1-12), i godinu (četiri cifre) koji predstavljaju datum rođenja, vrati koliko je osoba rođena na taj dan bila živa, u sekundama. Program ne treba da radi za datume pre 1970. 
*/
const calculateAgeInSeconds = (day, month, year) => {
  const birthDate = new Date(year, month - 1, day);
  const now = new Date();

  if (birthDate < new Date(1970, 0, 1)) {
    return "Datum rođenja mora biti nakon 1970. godine.";
  }

  const birthTimestamp = birthDate.getTime() / 1000; // pretvaramo milisekunde u sekunde
  const currentTimestamp = now.getTime() / 1000;

  // Računanje razlike u sekundama
  const ageInSeconds = currentTimestamp - birthTimestamp;

  return ageInSeconds;
};

const JSV7 = () => {
  console.log(calculateAgeInSeconds(15, 4, 1990));
  console.log(calculateAgeInSeconds(20, 12, 1975));

  return <div></div>;
};

export default JSV7;
