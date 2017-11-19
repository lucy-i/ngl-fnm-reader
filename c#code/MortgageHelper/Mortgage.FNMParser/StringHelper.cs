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
                        value.Substring(startIndex, value.Length - startIndex) :
                        value.Substring(startIndex, length));
        }

        public static string toMMDDYYYY(this string value)
        {
            if (!string.IsNullOrEmpty(value))
                return value;
            return string.Format("{0}/{1}/{2}", value.SafeSubstring(4, 2), value.SafeSubstring(6, 2), value.SafeSubstring(0, 4));

        }
        public static string toCCMMDDYYYY(this string value)
        {
            if (string.IsNullOrEmpty(value))
                return value;
       
                try
                {
                    string[] dateStr = value.Split('/').ToArray();
                    return dateStr[2] + dateStr[0] + dateStr[1];
                }
                catch (Exception ex)
                {   
                    return value;
                }
       
        }
        public static string getEmptyStr(this string value,int length)
        {
            string strvalue = string.Empty;
            for (int index = 0; index < length; index++)
            {
                strvalue = strvalue + ' ';
            }
            return strvalue;
        }
        public static string fillString(this string value,int length, bool preSpace=false)
        {
            if (string.IsNullOrEmpty(value))
                return value.getEmptyStr(length);
            if (value.Length < length)
            {
                if (preSpace)
                    value = value.getEmptyStr(length - value.Length) + value;
                else
                    value += value.getEmptyStr(length - value.Length);
            }
            return value;
        }


    }
}
