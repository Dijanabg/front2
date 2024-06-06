using B9.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Globalization;

namespace B9.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IWebHostEnvironment webHostEnvironment;

        public List<CDKatalog> katalozi = new List<CDKatalog>(); // lista podataka koja ce vam uciniti sve informacije iz svih datoteka

        [BindProperty]
        public string[] Putanje { get; set; }
        [BindProperty]
        public string? izvodjac { get; set; }
        [BindProperty]
        public string? nazivAlbuma { get; set; }
        [BindProperty]
        public string? zanr { get; set; }
        [BindProperty]
        public string? godinaIzdavanja { get; set; }
        [BindProperty]
        public string? izdavackaKuca { get; set; }

        public List<SelectListItem> Izvodjac = new List<SelectListItem>();
        public List<SelectListItem> NazivAlbuma = new List<SelectListItem>();
        public List<SelectListItem> Zanr = new List<SelectListItem>();
        public List<SelectListItem> GodinaIzdavanja = new List<SelectListItem>();
        public List<SelectListItem> IzdavackaKuca = new List<SelectListItem>();

        public IndexModel(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }

        public void OnGet()
        {
            string Putanje = Path.Combine(this.webHostEnvironment.WebRootPath, "files", "CD_katalog.txt");
            Izvodjac.Add(new SelectListItem("", ""));
            NazivAlbuma.Add(new SelectListItem("", ""));
            Zanr.Add(new SelectListItem("", ""));
            GodinaIzdavanja.Add(new SelectListItem("", ""));
            IzdavackaKuca.Add(new SelectListItem("", ""));
            
                using (var reader = new StreamReader(Putanje))
                {
                    foreach (string s in reader.ReadToEnd().Split('\n'))
                    {
                        string[] data = s.Split('|');
                        if (katalozi.Count(i => i.Izvodjac == data[0]) == 0)
                        {
                            Izvodjac.Add(new SelectListItem
                            {
                                Text = data[0],
                                Value = data[0]
                            });
                        }
                        if (katalozi.Count(i => i.NazivAlbuma == data[1]) == 0)
                        {
                            NazivAlbuma.Add(new SelectListItem
                            {
                                Text = data[1],
                                Value = data[1]
                            });
                        }
                        if (katalozi.Count(i => i.Zanr == data[2]) == 0)
                        {
                            Zanr.Add(new SelectListItem
                            {
                                Text = data[2],
                                Value = data[2]
                            });
                        }
                        if (katalozi.Count(i => i.GodinaIzdavanja == data[3]) == 0)
                        {
                            GodinaIzdavanja.Add(new SelectListItem
                            {
                                Text = data[3],
                                Value = data[3]
                            });
                        }
                        if (katalozi.Count(i => i.IzdavackaKuca == data[4]) == 0)
                        {
                            IzdavackaKuca.Add(new SelectListItem
                            {
                                Text = data[4],
                                Value = data[4]
                            });
                        }
                        katalozi.Add(new CDKatalog
                        {
                            Izvodjac = data[0],
                            NazivAlbuma = data[1],
                            Zanr = data[2],
                            GodinaIzdavanja = data[3],
                            IzdavackaKuca = data[4]
                        });
                    }
                
            }
        }

        public IActionResult OnPost()
        {
            string Putanje = Path.Combine(this.webHostEnvironment.WebRootPath, "files", "CD_katalog.txt");
            Izvodjac.Add(new SelectListItem("", ""));
            NazivAlbuma.Add(new SelectListItem("", ""));
            Zanr.Add(new SelectListItem("", ""));
            GodinaIzdavanja.Add(new SelectListItem("", ""));
            IzdavackaKuca.Add(new SelectListItem("", ""));
            
                using (var reader = new StreamReader(Putanje))
                {
                    foreach (string s in reader.ReadToEnd().Split('\n'))
                    {
                        string[] data = s.Split('|');
                        if (katalozi.Count(i => i.Izvodjac == data[0]) == 0)
                        {
                            Izvodjac.Add(new SelectListItem
                            {
                                Text = data[0],
                                Value = data[0]
                            });
                        }
                        if (katalozi.Count(i => i.NazivAlbuma == data[1]) == 0)
                        {
                            NazivAlbuma.Add(new SelectListItem
                            {
                                Text = data[1],
                                Value = data[1]
                            });
                        }
                        if (katalozi.Count(i => i.Zanr == data[2]) == 0)
                        {
                            Zanr.Add(new SelectListItem
                            {
                                Text = data[2],
                                Value = data[2]
                            });
                        }
                        if (katalozi.Count(i => i.GodinaIzdavanja == data[3]) == 0)
                        {
                            GodinaIzdavanja.Add(new SelectListItem
                            {
                                Text = data[3],
                                Value = data[3]
                            });
                        }
                        if (katalozi.Count(i => i.IzdavackaKuca == data[4]) == 0)
                        {
                            IzdavackaKuca.Add(new SelectListItem
                            {
                                Text = data[4],
                                Value = data[4]
                            });
                        }
                        katalozi.Add(new CDKatalog
                        {
                            Izvodjac = data[0],
                            NazivAlbuma = data[1],
                            Zanr = data[2],
                            GodinaIzdavanja = data[3],
                            IzdavackaKuca = data[4]
                        });
                    }
                
            }

            if (!string.IsNullOrEmpty(izvodjac))
            {
                katalozi.RemoveAll(i => CultureInfo.CurrentCulture.CompareInfo.IndexOf(i.Izvodjac, izvodjac, CompareOptions.IgnoreCase) < 0); // pretraga bez obzira na velika i mala slova
            }
            if (!string.IsNullOrEmpty(nazivAlbuma))
            {
                katalozi.RemoveAll(i => CultureInfo.CurrentCulture.CompareInfo.IndexOf(i.NazivAlbuma, nazivAlbuma, CompareOptions.IgnoreCase) < 0); // pretraga bez obzira na velika i mala slova
            }
            if (!string.IsNullOrEmpty(zanr))
            {
                katalozi.RemoveAll(i => CultureInfo.CurrentCulture.CompareInfo.IndexOf(i.Zanr, zanr, CompareOptions.IgnoreCase) < 0); // pretraga bez obzira na velika i mala slova
            }
            if (!string.IsNullOrEmpty(godinaIzdavanja))
            {
                katalozi.RemoveAll(i => CultureInfo.CurrentCulture.CompareInfo.IndexOf(i.GodinaIzdavanja, godinaIzdavanja, CompareOptions.IgnoreCase) < 0); // pretraga bez obzira na velika i mala slova
            }
            if (!string.IsNullOrEmpty(izdavackaKuca))
            {
                katalozi.RemoveAll(i => CultureInfo.CurrentCulture.CompareInfo.IndexOf(i.IzdavackaKuca, izdavackaKuca, CompareOptions.IgnoreCase) < 0); // pretraga bez obzira na velika i mala slova
            }

            return Page();
        }
    }
}
