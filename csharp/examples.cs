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

        var numbers = new List<int> {0, 4, 5, 6, 8, 5};

        foreach(int element in numbers)
        {
            Console.Write($"{element}");
        }

        Span<int> numbers = new int[] {3, 65, 85, 5};
        foreach(int number in numbers)
        {
            Console.Write($"{number}");
        }

        Span<int> storage = stackalloc int[10];
        int num = 0;

        foreach(ref int item in storage)
        {
            item = num++;
        }

        foreach(ref readonly var item in storage){
            Console.Write($"{item}");
        }

        await foreach (var item in GenerateSequenceAsync()){
            Console.WriteLine(item);
        }

        foreach (var item in collection) {}

        IEnumerable<T> collection = new T[5];
        foreach(V item in colletion) { }

        int n = 0;
        while (n < 5)
        {
            Console.Write(n);
            n++;
        }

    }
}

