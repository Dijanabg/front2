using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace B19App.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        

        public IndexModel(ILogger<IndexModel> logger, HttpClient client)
        {
            _logger = logger;
            
        }
        static readonly HttpClient client = new HttpClient();
        [BindProperty]
        public string CirilicniTekst { get; set; }

        [BindProperty]
        public string LatinicniTekst { get; set; }
        public string Poruka { get; set; }

        public async Task<IActionResult> OnPostCirilicaAsync()
        {
            var requestBody = new Dictionary<string, string>
            {
                { "tekst", CirilicniTekst }
            };

            var response = await client.PostAsJsonAsync("https://localhost:7060/api/Home/cirilica", requestBody);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<ApiResponse>(content);
                LatinicniTekst = result?.rezultat;
                Poruka = "Prevođenje uspešno!";
            }
            else
            {
                Poruka = "Došlo je do greške prilikom prevođenja teksta.";
            }
            return Page();
        }

        public async Task<IActionResult> OnPostLatinicaAsync()
        {
            var requestBody = new Dictionary<string, string>
            {
                { "tekst", LatinicniTekst }
            };

            var response = await client.PostAsJsonAsync("https://localhost:7060/api/Home/latinica", requestBody);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<ApiResponse>(content);
                CirilicniTekst = result?.rezultat;
                Poruka = "Prevođenje uspešno!";
            }
            else
            {
                Poruka = "Došlo je do greške prilikom prevođenja teksta.";
            }
            return Page();

        }
    }

    public class ApiResponse
    {
        public string rezultat { get; set; }
    }
}