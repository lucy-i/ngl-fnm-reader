using Mortgage.FNMParser;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {

            Loan loan = new Loan(samplecode.Split(Environment.NewLine.ToCharArray()).ToArray());
            string data=JsonConvert.SerializeObject(loan);
            Console.WriteLine(data);
            Console.Read();
        }
        static string samplecode = @"";
    }
}
