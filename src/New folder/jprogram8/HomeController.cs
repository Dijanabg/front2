using B18.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;
using System.Xml;

namespace B18.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private IWebHostEnvironment Environment;

        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment environment)
        {
            _logger = logger;
            Environment = environment;
        }

        public IActionResult Index()
        {
            List<VremenskaPrognoza> prognoze = new List<VremenskaPrognoza>();
            XmlDocument doc = new XmlDocument();

            doc.Load(string.Concat(this.Environment.WebRootPath, "/VremenskaPrognoza.xml"));

            foreach (XmlNode node in doc.SelectNodes("/VremenskaPrognoza/Prognoza"))
            {
                prognoze.Add(new VremenskaPrognoza
                {
                    Mesto = int.Parse(node["Mesto"].InnerText),
                    NazivMesta = node["NazivMesta"].InnerText,
                    MaxTemp = node["MaxTemp"].InnerText
                });
            }

            return View(prognoze.OrderBy(x => x.Mesto)
                                    .ThenBy(x => x.NazivMesta)
                                    .ToList());
        }
        public IActionResult PrognozaZaMesto(string mesto = "001")
        {
            List<VremenskaPrognoza> prognoze = UcitajPrognoze();
            VremenskaPrognoza prognoza = prognoze.FirstOrDefault(x => x.Mesto.ToString() == mesto);

            ViewBag.Mesta = new SelectList(prognoze, "Mesto", "NazivMesta");

            return View(prognoza);
        }

        private List<VremenskaPrognoza> UcitajPrognoze()
        {
            List<VremenskaPrognoza> prognoze = new List<VremenskaPrognoza>();
            XmlDocument doc = new XmlDocument();

            doc.Load(System.IO.Path.Combine(this.Environment.WebRootPath, "VremenskaPrognoza.xml"));

            foreach (XmlNode node in doc.SelectNodes("/VremenskaPrognoza/Prognoza"))
            {
                prognoze.Add(new VremenskaPrognoza
                {
                    Mesto = int.Parse(node["Mesto"].InnerText),
                    NazivMesta = node["NazivMesta"].InnerText,
                    MinTemp = node["MinTemp"].InnerText,
                    MaxTemp = node["MaxTemp"].InnerText,
                    Vreme = node["Vreme"].InnerText
                });
            }

            return prognoze;
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}