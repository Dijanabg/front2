/* 
    Zadatak 4
    Napisati funkciju koja za dva stringa odredi da li su anagrami ili ne. Razmaci nisu bitni, velika i mala slova nisu bitna, interpunkcija nije podržana.
*/

const is_anagram = (a, b) => {
  //sklanjamo razmake i toLowerCase
  const str1 = a.replace(/\s/g, "").toLowerCase();
  const str2 = b.replace(/\s/g, "").toLowerCase();

  //duzina mora biti ista
  if (str1.length !== str2.length) return false;
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

const JSV4 = () => {
  const examples = [
    { word1: "hello", word2: "world" },
    { word1: "gold and silver", word2: "grand old evils" },
    { word1: "iceman", word2: "cinema" },
    { word1: "debit card", word2: "bad credit" },
  ];
  examples.forEach((example, index) => {
    console.log(
      `${index}: ${example.word1} i ${example.word2} ${
        is_anagram(example.word1, example.word2)
          ? "su anagrami"
          : "nisu anagrami"
      }`
    );
  });
  return <div></div>;
};

export default JSV4;
