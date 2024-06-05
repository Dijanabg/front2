// Prikazati stihove naredne pesme:
/*
My Bonnie lies over the ocean
My Bonnie lies over the sea
My Bonnie lies over the ocean
Oh, bring back my Bonnie to me.
*/

// Iznad stihova napisati naslov pesme: "Poem" i odvojiti horizontalnom linijom od stihova
import "./zadatak8_css.css";
const Zadatak_J8 = () => {
  // to do
  return (
    <div>
      <h1>Zadatak 8</h1>
      <h2 className="naslov">Poem</h2>
      <hr />
        <pre className="pre">{`
            My Bonnie lies over the ocean
            My Bonnie lies over the sea
            My Bonnie lies over the ocean
            Oh, bring back my Bonnie to me.
            `}
        </pre>
    </div>);
};

export default Zadatak_J8;
