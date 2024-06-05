/*
Zadatak 2: Na stranici ispisati sledecu pesmu. 

Опрости, мајко света, опрости,
што наших гора пожалих бор,
на ком се, устук свакоје злости,
блаженој теби подиже двор;
презри, небеснице, врело милости,
што ти земаљски сагреши створ:
Кајан ти љубим пречисте скуте,
Santa Maria della Salute.

Зар није лепше носит лепоту,
сводова твојих постати стуб,
него грејући светску грехоту
у пепо спалит срце и луб;
тонут о броду, трнут у плоту,
ђаволу јелу а врагу дуб?
Зар није лепше вековат у те,
Santa Maria della Salute?

Iznad stihova pesme treba da pise:
    - Santa Maria della Salute
    - Laza Kostic, treba da bude link, klikom na link otvori se stranica o pesniku
Ispod pesme staviti sliku crkve Santa Maria della Salute


CSS DEO ZADATKA (ovo radite tek kada budemo uradili CSS)
Zahtevi:
    - tekst pesme i slika treba da se prikazu jedno pored drugog, sa leve strane tekst pesme, a sa desne slika
    - tekst pesme centrirati i uokviriti okvirom debljine 2px koji je obojen po zelji
    - recenicu 'Santa Maria della Salute?' obojiti bojom po izboru i slova podebljati 
    - ime pesnika i naziv pesme takodje centrirati i podebljati
    - ime pesnika prikazati zelenom bojom
*/

import "./zadatak2_css.css"
const Zadatak_J2 = () => {
    return <div className="poem-container">
        <h1> Zadatak 2</h1>
    
        <div className="poem-text">
            <div className="poem-title">
                <div>
                    <h2 className="poem-name">Santa Maria della Salute</h2>
                    <a className="pesnik" href="https://sr.wikipedia.org/sr-ec/%D0%9B%D0%B0%D0%B7%D0%B0_%D0%9A%D0%BE%D1%81%D1%82%D0%B8%D1%9B">Laza Kostic</a>
                </div>
                <div></div>
            </div>    
            <div className="poem">
                        <pre>{`
            Опрости, мајко света, опрости,
            што наших гора пожалих бор,
            на ком се, устук свакоје злости,
            блаженој теби подиже двор;
            презри, небеснице, врело милости,
            што ти земаљски сагреши створ:
            Кајан ти љубим пречисте скуте,
            Santa Maria della Salute.
            
            Зар није лепше носит лепоту,
            сводова твојих постати стуб,
            него грејући светску грехоту
            у пепо спалит срце и луб;
            тонут о броду, трнут у плоту,
            ђаволу јелу а врагу дуб?
            Зар није лепше вековат у те,
            Santa Maria della Salute?`}
                        </pre>
                
                    <img className="poem-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT517QDO_8X4XrCQZxA8ByetELRLcSqQBK97q8ImKRVdw&s" 
                        height={300}
                        width={400} 
                        alt="Santa Maria della Salute" />
            </div>
        </div>
    </div> 
}


export default Zadatak_J2;