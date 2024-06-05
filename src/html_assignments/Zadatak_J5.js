/*
Kreirati formu za prijavu kandidata za posao. Izgled forme je dat na slici
*/ 

import slika from './../assets/images/zad5.PNG';
import './zadatak5_css.css';
const Zadatak_J5 = () => {
    return  (<div>
        <h2> Zadatak 5</h2>
        <div className='zad5_container'>
        <div> 
            <p> Slika na osnovu koje treba napraviti formu</p>
            <img src={slika}/>
        </div>
        <div className='forma'>
        {/* to do: ovde kreirati formu */}
        <p> TO DO: FORMA</p>
            <h3>Candidate Info</h3>
            <input className='input' type="text" name="ime" placeholder="Your Name *"></input>
            <br></br>
            <br></br>
            
            <input className='input' type="email" name="email" placeholder="Your email *"></input>
            <br></br>
            <br></br>
            <input className='input' name='About yourself' rows={4} aria-colcount={50} placeholder="About yourself"></input>

            <br></br>
            <br></br>
            <label for="interests">Interests: </label>
            <br></br>
            <br></br>
            <select  className='interests' name="interests">
                <option value="fishkeeping">Fishkeeping</option>
                <option value="b">b</option>
                <option value="c">c</option>
            </select>
            <br></br>
            <br></br>
            <h3>Additional Info</h3>
            <input className='input' name='About Your School' rows={4} aria-colcount={50} placeholder="About Your School"></input>
            <button className='button-form' type="submit" value="apply">Apply</button>
        </div>
    </div>
    </div>);
}

export default Zadatak_J5;