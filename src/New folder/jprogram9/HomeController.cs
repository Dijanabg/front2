using Microsoft.AspNetCore.Mvc;

namespace B19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        // GET: api/prevodjenje/cirilica
        [HttpPost("cirilica")]
        public IActionResult CirilicaULatinicu([FromBody] Dictionary<string, string> body)
        {
            if (!body.ContainsKey("tekst"))
            {
                return BadRequest("Tekst nije pronađen u zahtevu.");
            }

            string cirilicniTekst = body["tekst"];
            string latinicniTekst = Prevodjenje.CirilicaULatinicu(cirilicniTekst);

            return Ok(new { rezultat = latinicniTekst });
        }

        // GET: api/prevodjenje/latinica
        [HttpPost("latinica")]
        public IActionResult LatinicaUCirilicu([FromBody] Dictionary<string, string> body)
        {
            if (!body.ContainsKey("tekst"))
            {
                return BadRequest("Tekst nije pronađen u zahtevu.");
            }

            string latinicniTekst = body["tekst"];
            string cirilicniTekst = Prevodjenje.LatinicaUCirilicu(latinicniTekst);

            return Ok(new { rezultat = cirilicniTekst });
        }
    }

    public static class Prevodjenje
    {
        public static string CirilicaULatinicu(string cirilicniTekst)
        {
            // Ovde implementiraj logiku za prevođenje cirilice u latinicu
            // Primer jednostavne zamene karaktera
            string latinicniTekst = cirilicniTekst.Replace('а', 'a').Replace('б', 'b').Replace('ц', 'c').Replace('д', 'd').Replace('е', 'e').Replace('н', 'n');

            return latinicniTekst;
        }

        public static string LatinicaUCirilicu(string latinicniTekst)
        {
            // Ovde implementiraj logiku za prevođenje latinice u cirilicu
            // Primer jednostavne zamene karaktera
            if (latinicniTekst == null)
            {
                return null; // ili neka druga logika u zavisnosti od zahteva
            }

            // Ovde implementiraj logiku za prevođenje latinice u cirilicu
            // Primer jednostavne zamene karaktera
            string cirilicniTekst = latinicniTekst
                .Replace('a', 'а')
                .Replace('b', 'б')
                .Replace('c', 'ц')
                .Replace('d', 'д')
                .Replace('e', 'е')
                .Replace("n", "н");

            return cirilicniTekst;
        }
    }
}
