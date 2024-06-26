/* 
    Zadatak 2
    Prošriti funkciju iz zadatka 1 tako da ne sortira samo brojeve u uzlaznom redosledu nego može da sortira bilo šta kroz komparatorsku funkciju koja vraća, za neko a i b, -1 kada a < b, 0 kada a == b, i 1 kada a > b. Takva funkcija za sortiranje dobija niz i funkciju. Testirati ovu funkciju tako što joj se da niz i funkcija koja sortira u silazećem redosledu. Inače, svaki niz ima funkciju .sort koja obavlja tačno ovaj posao koji ovde kodiramo, i prima kao parametar komparatorsku funkciju koja radi tačno kao ova koju opisujemo ovde. 
*/
const JSV2 = () => {

      const sortArray = (arr, comparator) => {
          return arr.sort(comparator);
      }

      const descendingComparator = (a, b) => {
          if (a < b) return 1;
          if (a > b) return -1;
          return 0;
      }

      const arr = [2, 8, 1, 5, 11, 88, 55, 66, 4];
      sortArray(arr, descendingComparator);

      return (
          <div>
              <span>{arr.join(', ')}</span>
          </div>
      );
      
};

export default JSV2;
