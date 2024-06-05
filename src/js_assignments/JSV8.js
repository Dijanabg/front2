/* 
    Zadatak 8
    Napisati funkciju koja preuzme funkciju, listu, i naziv i vrati novu funkciju koja se ponaša isto kao i prosleđena funkcija samo što, se u listu upisuje svaki poziv funkcije sa parametrima u obliku stringa koji, ako je funkcija pozvana sa parametrima 3 i 4, recimo, bude "f(3,4)" gde je 'f' štagod da je u nazivu
*/
const createLoggedFunction = (originalFunction, logList, name) => {
  // Definisanje nove funkcije koja će biti vraćena
  const loggedFunction = (...args) => {
      // Konvertovanje argumenata u string u obliku 'f(param1, param2, ...)' gde je 'f' naziv funkcije
      const paramString = `${name}(${args.join(', ')})`;
      // Dodavanje stringa sa pozivom funkcije u listu
      logList.push(paramString);
      
      // Pozivanje originalne funkcije sa prosleđenim argumentima
      return originalFunction(...args);
  };

  // Vraćanje nove funkcije
  return loggedFunction;
};

const JSV8 = () => {
  // Testiranje funkcije createLoggedFunction
  const logList = [];
  const originalFunction = (a, b) => a + b;
  const loggedAdd = createLoggedFunction(originalFunction, logList, 'add');
  
  console.log(logList); // Output: []

  loggedAdd(3, 4);
  console.log(logList); // Output: ['add(3, 4)']

  loggedAdd(5, 6);
  console.log(logList); // Output: ['add(3, 4)', 'add(5, 6)']

  return <div></div>;
};

export default JSV8;
// const JSV8 = () => {
//   return <div>
//   </div>;
// };

// export default JSV8;
