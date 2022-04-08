using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers{
    public class HelloWorldController : Controller
    {
        public string Index()
        {
            return "This is my default action...";
        }

        public string Welcome(string name, int numtimes = 1)
        {
           return HtmlEncoder.Default.Encode($"Hello {name}, ID: {ID}");
        }
    }
}