/* 
    Zadatak 5
    Napisati funkciju koja za dati string kaže da li je palindrom (čita se isto i sa jedne i sa druge strane). Razmaci i mala/velika slova nisu bitni, a interpunkcija nije podržana. 
*/

const is_palindrome = (s) => {
  const str1 = s.replace(/\s/g, "").toLowerCase();

  //provera dal je isti ako se cita od pozadi
  return str1 === str1.split("").reverse().join("");
};

const JSV5 = () => {
  console.log(is_palindrome("radar"));
  console.log(is_palindrome("Ana voli Milovana"));
  console.log(is_palindrome("zdravo"));
  return <div></div>;
};

export default JSV5;
