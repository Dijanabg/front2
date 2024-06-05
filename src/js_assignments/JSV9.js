/* 
    Zadatak 9
    Napisati funkciju koja za dati tekst vrati procenat upotrebe svih slova u redosledu abecede. Mala i velika slova se ignorišu, razmaci i znakovi interpunkcije se ignorišu. Za potrebe ovoga, samo se razmatra engleska abeceda. 
*/
const calculateLetterUsage = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const counts = new Array(26).fill(0);
  let totalLetters = 0;

  // prebrojavanje slova
  for (let char of text.toLowerCase()) {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
          counts[index]++;
          totalLetters++;
      }
  }

  // pretvaranje  u procenat
  const percentages = counts.map(count => {
      return totalLetters > 0 ? ((count / totalLetters) * 100).toFixed(2) + '%' : '0%';
  });

  return percentages;
}
  
const JSV9 = () => {
    const text = "Hello World! This is an example text to analyze.";
    const usage = calculateLetterUsage(text);
    console.log(usage);
    return <div></div>;
  
};

export default JSV9;