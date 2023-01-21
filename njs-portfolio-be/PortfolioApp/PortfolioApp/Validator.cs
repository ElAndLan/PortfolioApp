using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace PortfolioApp
{
    public class Validator
    {

        Regex alphaRegEx = new Regex("/^[A-Z]+$/i");
        public bool Validate(Product data, string type) {
            switch(type) {
                case "alphabet":  Console.WriteLine("Hello!");
                break;
                case "alphanumeric": Console.WriteLine("Hello!");
                break;
                case "numeric": Console.WriteLine("Hello!");
                break;
                case "alphanumeric-symbols": Console.WriteLine("Hello!");
                break;
                default: Console.WriteLine("No data passed in!");
                break;
            }

            return true;
        }
    }
}