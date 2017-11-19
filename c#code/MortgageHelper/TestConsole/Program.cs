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
            string FNM = loan.toFNMString();
            Console.WriteLine(data);
            Console.WriteLine("FNM String");
            Console.WriteLine(FNM);
            Console.Read();
        }
        static string samplecode = @"EH                                20171011   ENV1     
TH T100099-002TRAN1    
TPI1.00 011350308183                    R
0001  3.20 W
00AYN
01A02                                                                                77-77-6-5252035               3111003403           737500.00  3.50036005                                                                                                                                                                
02A1851 VA Refi Lane                                 Chula Vista                        CA91914      1F1SEE PRELIMINARY TITLE REPORT                                                    2011
02B  05                                                                                1                                                            1        
02CAndy America                                                
02CAmy America                                                 
02D2011      601500.00      739820.00           0.00           0.00F1                                                                                            0.00
03ABW999603333Andy                                                                  America                                9494756246   12M 2Y50060222219780201lisa.kelly@impacmail.com                                                        
03AQZ500602222Amy                                                                   America                                9494756312   12M 0Y99960333319780810lisa.kelly@impacmail.com                                                        
03B999603333  1
03B999603333  1
03C999603333ZG1851 VA Refi Lane                                 Chula Vista                        CA91914    O 4 6                                                  
03C500602222ZG1851 VA Refi Lane                                 Chula Vista                        CA91914    O 4 6                                                  
04A999603333San Diego Police Dept (City of SD) 1401 Broadway                      San Diego                          CA92101    N16  17Police Officer           9494751111
04A500602222St. Charles Borromeo Academy       2808 Cadiz Street                  San Diego                          CA92110    N14  14Office Manager           8004449999
05H999603333126        3478.01
05H999603333101         188.89
05H999603333114         890.58
05H999603333106         127.00
05H999603333226        3328.26
05H999603333201          86.66
05H999603333214         890.58
05H999603333206         127.00
06C99960333303 Orange Coast Credit Union                                                                                           6000000000                             157.00                                                                                          
06C99960333303 Orange County Credit Union                                                                                          540000000                              931.00                                                                                          
06C999603333SG Union Bank                                                                                                          1111111111111111                     15000.00                                                                                          
06G9996033331851 VA Refi Lane                  Chula Vista                        CA91914    H14      802000.00      736279.00           0.00        4689.00           0.00           0.00YY1                
06G9996033332100 Investment Lane               Tempe                              AZ85280    R04      250000.00      210027.00        2000.00        1196.32         150.23         653.00NN2                
06L999603333M BEST EVER MORTGAGE                                                                                                  502088                                4689.00  0      736279.00Y1 NNYN
06L999603333M CALLABLE MORTGAGE                                                                                                   757570                                1196.32  0      210027.00N2 NNNY
07A           0.00           0.00           0.00      736279.00        1080.90          65.00        3687.50           0.00           0.00           0.00        3687.00
08A999603333NNNNNNNNN01YY125
08A500602222NNNNNNNNN01YY125
10A999603333N1                              M
10A500602222N2                              F
10BIManagerC2 TPO1                                                                C2 FINANCIAL CORPORATION TEST      10509 VISTA SORRENTO SUITE 200                                        SAN DIEGO                          CA92121    
10R9996033335 
10R5006022225 
00070 3.20 
99B F1      802000.00       01                                                                                                                   
ADSLoanOriginatorID                   196648                                            
ADSLoanOriginationCompanyID           135622                                            
ADSAppraisalIdentifier                                                                  
00011 3.20 
LNC1B04                 N     0.000                      N2017111620180101  0.000   0.000N 
PID                                                  
PCH360N01N   
00020 3.20 
IDA                       
LEA                                                               
GOAN           0.00           0.00                                                                  4San Diego                          
GOCY       36000.00   0.00   0.00  0.500
GOD999603333           0.00           0.00           0.00           0.00                                                            
GOD500602222           0.00           0.00           0.00           0.00                                                            
GOE999603333                    
GOE500602222                    
TT TRAN1    
ET ENV1     ";
    }
}
