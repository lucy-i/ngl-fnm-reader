using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mortgage.FNMParser
{
    internal static class StringHelper
    {
        public static string SafeSubstring(this string value, int startIndex, int length)
        {
            return value.Length < startIndex ?
                    string.Empty :
                    (value.Length < (startIndex + length) ?
                        value.Substring(startIndex, value.Length-startIndex) :
                        value.Substring(startIndex, length));
        }
    }
}
