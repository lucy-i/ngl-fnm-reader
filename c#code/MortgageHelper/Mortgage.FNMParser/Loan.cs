using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Reflection;

namespace Mortgage.FNMParser
{

    public class Loan
    {
        LoanApplication LoanApplication;
        Loan(string[] fnmString)
        {
            LoanApplication = new LoanApplication(fnmString);
        }
    }
    public class ChildProperty
    {
        public string Name;
        public string Id;
        public bool IsArray = false;
    }
    public class DeclarationSet
    {
        public DeclarationSet()
        {

        }
        public DeclarationSet(string label, string value)
        {
            Label = label;
            Value = value;
        }
        public string Label;
        public string Value;
        public int? Position;
        public int? Length = 1;
    }

    public class LoanApplication
    {
        public List<Applicant> Applicants;
        public EnvelopeHeader EnvelopeHeader;
        public TransactionHeader TransactionHeader;
        public ProcessingInfo ProcessingInfo;
        public FileIdentification FileIdentification;
        public FormTop FormTop;
        public TypeAndTerms TypeAndTerms;
        public Property Property;
        public PropertyAddress PropertyAddress;
        public PurposeOfLoan PurposeOfLoan;
        public TitleHolder TitleHolder;
        public DetailsOfTransaction DetailsOfTransaction;
        public RefinanceData RefinanceData;
        public DownPayment DownPayment;
        public OtherCredit[] OtherCredits;
        ChildProperty[] _childArrays = new ChildProperty[]{
            new ChildProperty(){ Name= "EnvelopeHeader", Id= "EH" },
            new ChildProperty(){ Name= "TransactionHeader", Id= "TH" },
            new ChildProperty(){ Name= "ProcessingInfo", Id= "TPI" },
            new ChildProperty(){ Name= "FileIdentification", Id= "000" },
            new ChildProperty(){ Name= "FormTop", Id= "00A" },
            new ChildProperty(){ Name= "TypeAndTerms", Id= "01A" },
            new ChildProperty(){ Name= "Property", Id= "02A" },
            new ChildProperty(){ Name= "PropertyAddress", Id= "PAI" },
            new ChildProperty(){ Name= "PurposeOfLoan", Id= "02B" },
            new ChildProperty(){ Name= "TitleHolder", Id= "02C" },
            new ChildProperty(){ Name= "RefinanceData", Id= "02D" },
            new ChildProperty(){ Name= "DownPayment", Id= "02E" },
            new ChildProperty(){ Name= "DetailsOfTransaction", Id= "07A" },
            new ChildProperty(){ Name= "OtherCredits", Id= "07B" },

        };
        public ChildProperty[] childArrays
        {
            get
            {
                return _childArrays;
            }
        }
        public LoanApplication(string[] fnmString)
        {
            Applicants = new List<Applicant>();
            fnmString.Where(t => t.IndexOf(Applicant.Id) == 0).ToList().ForEach(t =>
            {
                var dd = new Applicant(t);
                dd.setData(fnmString);
                Applicants.Add(dd);
            });
            this.setData(fnmString);
        }


        public void setData(string[] fnmString)
        {
            this.childArrays.ToList().ForEach(c =>
            {
                fnmString.Where(t => t.IndexOf(c.Id) == 0).ToList().ForEach(f =>
                {
                    Type type = this.GetType();
                    PropertyInfo prop = type.GetProperty(c.Name);
                    string ss = prop.GetType().FullName;
                    Console.WriteLine(ss);
                    //if (c.IsArray) {
                    //    if (this[c.Name])

                    //    this[c.Name].push(this.getInstancefor(c.Name, f));
                    //}
                    //else
                    //    prop.SetValue(this, propertyValue, null);
                });
            });
        }
        //#endregion
        private dynamic getInstancefor(string key, string rowdata)
        {
            switch (key)
            {
                case "EnvelopeHeader": return new EnvelopeHeader(rowdata);
                case "TransactionHeader": return new TransactionHeader(rowdata);
                case "ProcessingInfo": return new ProcessingInfo(rowdata);
                case "FileIdentification": return new FileIdentification(rowdata);
                case "FormTop": return new FormTop(rowdata);
                case "Assets": return new Asset(rowdata);
                case "TypeAndTerms": return new TypeAndTerms(rowdata);
                case "Property": return new Property(rowdata);
                case "PropertyAddress": return new PropertyAddress(rowdata);
                case "PurposeOfLoan": return new PurposeOfLoan(rowdata);
                case "DownPayment": return new DownPayment(rowdata);
                case "HELOC": return new HELOC(rowdata);
                case "TitleHolder": return new TitleHolder(rowdata);
                case "DetailsOfTransaction": return new DetailsOfTransaction(rowdata);
                case "OtherCredits": return new OtherCredit(rowdata);

            }
            return null;
        }
    }
    public class Applicant
    {
        //BW : Applicant or QZ : Co-Applicant
        public string Indicator;
        public string SSN;
        public string FirstName;
        public string LastName;
        public string MiddleName;
        public string Generation;
        public string HomePhone;
        public string Age;
        public string YrsInSchool;
        /**"EDI Data Element 1067:
        M = Married
        S = Separated
        U = Unmarried (Single, Divorced, Widowed)"
         */
        public string MartialStatus;
        public string Dependents;
        /**"Y = Yes
        N = No"
         */
        public string Jointly;
        public string CrossReference;
        public string DateofBirth;
        public string EmailAddress;
        public static string Id
        {
            get
            {
                return "03A";
            }
        }
        int length
        {
            get
            {
                return 239;
            }
        }
        ChildProperty[] _childArrays = new ChildProperty[]{
                   //
            new ChildProperty(){ Name= "DependentsAge", Id= "03B" },
            new ChildProperty(){ Name= "Addresses", Id= "03C", IsArray= true },
            new ChildProperty(){ Name= "CurrentEmployments", Id= "04A", IsArray= true },
            new ChildProperty(){ Name= "PreviousEmployments", Id= "04B", IsArray= true },
            new ChildProperty(){ Name= "HousingExpences", Id= "05H", IsArray= true },
            new ChildProperty(){ Name= "Incomes", Id= "05I", IsArray= true },
            new ChildProperty(){ Name= "LifeInsurance", Id= "06B" },
            new ChildProperty(){ Name= "Assets", Id= "06C", IsArray= true },
            new ChildProperty(){ Name= "Automobiles", Id= "06D", IsArray= true },
            new ChildProperty(){ Name= "RelatedExpenses", Id= "06F", IsArray= true },
            new ChildProperty(){ Name= "RealEstateOwneds", Id= "06G", IsArray= true },
            new ChildProperty(){ Name= "Liabilities", Id= "06L", IsArray= true },
            new ChildProperty(){ Name= "Declaration", Id= "08A" },
            new ChildProperty(){ Name= "HELOC", Id= "06S" },
            new ChildProperty(){ Name= "Alias", Id= "06H" },
            };

        public ChildProperty[] childArrays
        {
            get
            {
                return _childArrays;
            }
        }

        public Applicant(string fnmdata)
        {
            if (string.IsNullOrEmpty(fnmdata))
            {
                Indicator = fnmdata.Substring(3, 2).Trim();
                SSN = fnmdata.Substring(5, 9).Trim();
                FirstName = fnmdata.Substring(14, 35).Trim();
                MiddleName = fnmdata.Substring(49, 35).Trim();
                LastName = fnmdata.Substring(84, 35).Trim();
                Generation = fnmdata.Substring(119, 4).Trim();
                HomePhone = fnmdata.Substring(123, 10).Trim();
                Age = fnmdata.Substring(133, 3).Trim();
                MartialStatus = fnmdata.Substring(138, 1).Trim();
                Dependents = fnmdata.Substring(139, 2).Trim();
                Jointly = fnmdata.Substring(141, 1).Trim();
                CrossReference = fnmdata.Substring(142, 9).Trim();
                DateofBirth = fnmdata.Substring(151, 8).Trim();
                EmailAddress = fnmdata.Substring(159, 80).Trim();
            }
        }

        public Address[] Addresses;
        public CurrentEmployment[] CurrentEmployments;
        public PreviousEmployment[] PreviousEmployments;
        public HousingExpense[] HousingExpences;
        public Income[] Incomes;
        public LifeInsurance LifeInsurance;
        public Asset[] Assets;
        public Automobile[] Automobiles;
        public RelatedExpense[] RelatedExpenses;
        public RealEstateOwned[] RealEstateOwneds;
        public Liability[] Liabilities;
        public Alias Alias;
        public HELOC HELOC;
        public Dependents DependentsAge;
        public Declaration Declaration;
        public GovernmentMonitoring GovernmentMonitoring;

        public void setData(string[] fnmString)
        {
            //this.childArrays.forEach(c => {
            //    fnmString.filter(t => t.indexOf(c.Id) == 0 && t.indexOf(this.SSN) == 3).forEach(f => {
            //        if (c.IsArray) {
            //            if (!this[c.Name])
            //                this[c.Name] = [];
            //            this[c.Name].push(this.getInstancefor(c.Name, f));
            //        }
            //        else
            //            this[c.Name] = this.getInstancefor(c.Name, f);
            //    });
            //});
        }

        private dynamic getInstancefor(string key, string rowdata)
        {
            switch (key)
            {
                case "Addresses": return new Address(rowdata);
                case "CurrentEmployments": return new CurrentEmployment(rowdata);
                case "PreviousEmployments": return new PreviousEmployment(rowdata);
                case "HousingExpences": return new HousingExpense(rowdata);
                case "Incomes": return new Income(rowdata);
                case "LifeInsurance": return new LifeInsurance(rowdata);
                case "Assets": return new Asset(rowdata);
                case "Automobiles": return new Automobile(rowdata);
                case "RelatedExpenses": return new RelatedExpense(rowdata);
                case "RealEstateOwneds": return new RealEstateOwned(rowdata);//
                case "Liabilities": return new Liability(rowdata);
                case "Alias": return new Alias(rowdata);
                case "HELOC": return new HELOC(rowdata);
                case "Declaration": return new Declaration(rowdata);
                case "GovernmentMonitoring": return new GovernmentMonitoring(rowdata);
                case "DependentsAge": return new Dependents(rowdata);
            }
            return null;
        }
    }

    public class Address
    {
        public string id
        {
            get
            {
                return "03C";
            }
        }

        public int length
        {
            get
            {
                return 165;
            }
        }

        public Address(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            AddressType = fnmdata.Substring(12, 2).Trim();
            StreetAddress = fnmdata.Substring(14, 50).Trim();
            City = fnmdata.Substring(64, 35).Trim();
            State = fnmdata.Substring(99, 2).Trim();
            ZipCode = fnmdata.Substring(101, 5).Trim();
            ZipPlusFour = fnmdata.Substring(106, 4).Trim();
            UsageType = fnmdata.Substring(110, 1).Trim();
            NoofYears = fnmdata.Substring(111, 2).Trim();
            NoofMonths = fnmdata.Substring(114, 2).Trim();
            Country = fnmdata.Substring(115, 50).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**
         * "F4 = Former Residence
        ZG = Present Address
        BH = Mailing Address"
         */
        //030
        //#13#2
        string AddressType;
        //040
        //#15#50
        string StreetAddress;
        //050
        //#65#35
        string City;
        //060
        //#100#2
        string State;
        //070
        //#102#5
        string ZipCode;
        //080
        //#107#4
        string ZipPlusFour;
        /**
         * "EDI Data Element 1078:
        X = Living Rent Free
        R = Rent
        O = Own"
         */
        //090
        //#111#1
        string UsageType;
        //100
        //#112#2
        string NoofYears;
        //110
        //#114#2
        string NoofMonths;
        //120
        //#116#50
        string Country;
    }

    public class CurrentEmployment
    {
        public string id
        {
            get
            {
                return "04A";
            }
        }

        public int length
        {
            get
            {
                return 170;
            }
        }

        public CurrentEmployment(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            EmployerName = fnmdata.Substring(12, 35).Trim();
            StrretAddress = fnmdata.Substring(47, 35).Trim();
            City = fnmdata.Substring(82, 35).Trim();
            State = fnmdata.Substring(117, 2).Trim();
            ZipCode = fnmdata.Substring(119, 5).Trim();
            ZipPlusFour = fnmdata.Substring(124, 4).Trim();
            IsSelfEmployed = fnmdata.Substring(128, 1).Trim();
            YearsOnJob = fnmdata.Substring(129, 2).Trim();
            MonthsOnJob = fnmdata.Substring(131, 2).Trim();
            YersEmployedInThisLine = fnmdata.Substring(133, 2).Trim();
            Position = fnmdata.Substring(135, 25).Trim();
            BusinessPhone = fnmdata.Substring(160, 10).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#35
        string EmployerName;
        //040
        //#48#35
        string StrretAddress;
        //050
        //#83#35
        string City;
        //060
        //#118#2
        string State;
        //070
        //#120#5
        string ZipCode;
        //080
        //#125#4
        string ZipPlusFour;
        //090
        //#129#1
        string IsSelfEmployed;
        //100
        //#130#2
        string YearsOnJob;
        //110
        //#132#2
        string MonthsOnJob;
        //120
        //#134#2
        string YersEmployedInThisLine;
        //130
        //#136#25
        string Position;
        //140
        //#161#10
        string BusinessPhone;
    }

    public class PreviousEmployment
    {
        public string id
        {
            get
            {
                return "04B";
            }
        }

        public int length
        {
            get
            {
                return 196;
            }
        }

        public PreviousEmployment(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            EmployerName = fnmdata.Substring(12, 35).Trim();
            StrretAddress = fnmdata.Substring(47, 35).Trim();
            City = fnmdata.Substring(82, 35).Trim();
            State = fnmdata.Substring(117, 2).Trim();
            ZipCode = fnmdata.Substring(119, 5).Trim();
            ZipPlusFour = fnmdata.Substring(124, 4).Trim();
            IsSelfEmployed = fnmdata.Substring(128, 1).Trim();
            IsCurrentEmployment = fnmdata.Substring(129, 1).Trim();
            FromDate = fnmdata.Substring(130, 8).Trim();
            ToDate = fnmdata.Substring(138, 8).Trim();
            MonthlyIncome = fnmdata.Substring(146, 15).Trim();
            Position = fnmdata.Substring(161, 25).Trim();
            BusinessPhone = fnmdata.Substring(186, 10).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#35
        string EmployerName;
        //040
        //#48#35
        string StrretAddress;
        //050
        //#83#35
        string City;
        //060
        //#118#2
        string State;
        //070
        //#120#5
        string ZipCode;
        //080
        //#125#4
        string ZipPlusFour;
        //090
        //#129#1
        string IsSelfEmployed;
        //100
        //#129#1
        string IsCurrentEmployment;
        //110
        //#131#8
        //CCYYMMDD
        string FromDate;
        //120
        //#139#8
        //CCYYMMDD
        string ToDate;
        //130
        //#147#15
        //Z(12).Z(2)
        string MonthlyIncome;
        //140
        //#162#25
        string Position;
        //150
        //#187#10
        string BusinessPhone;
    }

    public class HousingExpense
    {
        public string id
        {
            get
            {
                return "05H";
            }
        }

        public int length
        {
            get
            {
                return 30;
            }
        }

        public HousingExpense(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            ExpenseIndicator = fnmdata.Substring(12, 1).Trim();
            PaymentTypeCode = fnmdata.Substring(13, 2).Trim();
            HousingPaymentAmount = fnmdata.Substring(15, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**"1 = Present Housing Expense
        2 = Proposed Housing Expense"
        */
        //030
        //#13#1
        string ExpenseIndicator;
        /**"EDI Data Element 1071:
        25 = Rent
        26 = First Mortgage P&I
        22 = Other Financing P&I
        01 = Hazard Insurance
        14 = Real Estate Taxes
        02 = Mortgage Insurance
        06 = Homeowner Association Dues
        23 = Other"
        */
        //040
        //#14#2
        string PaymentTypeCode;
        //050
        //#16#15
        //Format: Z(12).Z(2)
        string HousingPaymentAmount;
        string PaymentTypeValue
        {
            get
            {
                switch (this.PaymentTypeCode)
                {
                    case "25": return "Rent";
                    case "26": return "First Mortgage P&I";
                    case "22": return "Other Financing P&I";
                    case "01": return "Hazard Insurance";
                    case "14": return "Real Estate Taxes";
                    case "02": return "Mortgage Insurance";
                    case "06": return "Homeowner Association Dues";
                    default: return "Other";
                }
            }
        }
        string ExpenseIndicatorValue
        {
            get
            {
                switch (this.ExpenseIndicator)
                {
                    case "1": return "Present";
                    default: return "Proposed";
                }
            }
        }
    }

    public class Income
    {
        public string id
        {
            get
            {
                return "05I";
            }
        }

        public int length
        {
            get
            {
                return 29;
            }
        }

        public Income(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            IncomeType = fnmdata.Substring(12, 2).Trim();
            MonthlyIncome = fnmdata.Substring(14, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**"EDI Data Element 1186, each income type can be used only once per applicant:
        F1 = Military Base Pay
        07 = Military Rations Allowance
        F2 = Military Flight Pay
        F3 = Military Hazard Pay
        02 = Military Clothes Allowance
        04 = Military Quarters Allowance
        03 = Military Prop Pay
        F4 = Military Overseas Pay
        F5 = Military Combat Pay
        F6 = Military Variable Housing Allowance
        F7 = Alimony/Child Support Income
        F8 = Notes Receivable/Installment
        41 = Pension/Retirement Income
        42 = Social Security/Disability Income
        30 = Real Estate/Mortgage Differential
        F9 = Trust Income
        AU = Accessory Unit Income*
        M1 = Unemployment/Public Assistance
        M2 = Automobile/Expense Account Income
        M3 = Foster Care
        M4 = VA Benefits (non-education)
        NB = Non-Borrower Household Income*
        45 = Other Income
        20 = Base Employment Income
        09 = Overtime
        08 = Bonuses
        10 = Commissions
        17 = Dividends/Interest
        SI = Subject Property Net Cash Flow
        S8 = Housing Choice Voucher (Sec 8)*
        33 = Net Rental Income**
        BI = Boarder Income
        MC = Mortgage Credit Certificate (MCC)
        CG = Capital Gains*
        EA = Employment Related Assets*
        FI = Foreign Income*
        RP = Royalty Payment*
        SE = Seasonal Income*
        TL = Temporary Leave*
        TI = Tip Income*
         */
        //030
        //#13#2
        string IncomeType;
        //040
        //#15#15
        string MonthlyIncome;
    }

    public class LifeInsurance
    {
        public string id
        {
            get
            {
                return "06B";
            }
        }

        public int length
        {
            get
            {
                return 72;
            }
        }

        public LifeInsurance(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            AccountNumber = fnmdata.Substring(12, 30).Trim();
            CashValue = fnmdata.Substring(42, 15).Trim();
            FaceAmount = fnmdata.Substring(57, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#30
        string AccountNumber;
        //040
        //#43#15
        string CashValue;
        //030
        //#58#15
        string FaceAmount;
    }

    public class Asset
    {
        public string id
        {
            get
            {
                return "06C";
            }
        }

        public int length
        {
            get
            {
                return 266;
            }
        }

        public Asset(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            AssetType = fnmdata.Substring(12, 3).Trim();
            InstitutionName = fnmdata.Substring(15, 35).Trim();
            StreetAddress = fnmdata.Substring(50, 35).Trim();
            City = fnmdata.Substring(85, 35).Trim();
            State = fnmdata.Substring(120, 2).Trim();
            Zipcode = fnmdata.Substring(122, 5).Trim();
            ZipPlusFour = fnmdata.Substring(127, 4).Trim();
            AccountNumber = fnmdata.Substring(131, 30).Trim();
            CashValue = fnmdata.Substring(161, 15).Trim();
            NofShares = fnmdata.Substring(176, 7).Trim();
            Description = fnmdata.Substring(183, 80).Trim();
            FutureUse1 = fnmdata.Substring(263, 1).Trim();
            FutureUse2 = fnmdata.Substring(264, 2).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**"EDI Data Element 569:
        03 = Checking Account
        F1 = Cash Deposit on Sales Contract
        SG = Savings Account
        F2 = Gift
        01 = Certificate of Deposit
        F3 = Money Market Fund
        F4 = Mutual Funds
        05 = Stock
        06 = Bond
        F5 = Secured Borrowed Funds
        F7 = Bridge Loan
        08 = Retirement Funds
        F8 = Net Worth of Business Owned
        11 = Trust Funds
        M1 = Other Non-Liquid Asset
        OL = Other Liquid Asset
        NE = Net Equity
        COH = Cash On Hand
        GE = Gift of Equity"
         */
        //030
        //#13#3
        string AssetType;
        string AssetTypeValue
        {
            get
            {
                switch (this.AssetType)
                {
                    case "03": return "Checking Account";
                    case "F1": return "Cash Deposit on Sale";
                    case "SG": return "Savings Account";
                    case "F2": return "Gift";
                    case "01": return "Certificate of Depos";
                    case "F3": return "Money Market Fund";
                    case "F4": return "Mutual Funds";
                    case "05": return "Stock";
                    case "06": return "Bond";
                    case "F5": return "Secured Borrowed Fun";
                    case "F7": return "Bridge Loan";
                    case "08": return "Retirement Funds";
                    case "F8": return "Net Worth of Busines";
                    case "11": return "Trust Funds";
                    case "M1": return "Other Non-Liquid Ass";
                    case "OL": return "Other Liquid Asset";
                    case "NE": return "Net Equity";
                    case "COH": return "Cash On Hand";
                    case "GE": return "Gift of Equity";
                    default: return string.Empty;
                }
            }
        }
        //040
        //#16#35
        string InstitutionName;
        //050
        //#51#35
        string StreetAddress;
        //060
        //#86#35
        string City;
        //070
        //#121#2
        string State;
        //080
        //#123#5
        string Zipcode;
        //090
        //#128#4
        string ZipPlusFour;
        //100
        //#132#30
        string AccountNumber;
        //110
        //#162#15
        //Format:  Z(12).Z(2)
        string CashValue;
        //120
        //#177#7
        string NofShares;
        //130
        //#184#80
        string Description;
        //140
        //#264#1
        string FutureUse1;
        //150
        //#265#2
        string FutureUse2;
    }

    public class Automobile
    {
        public string id
        {
            get
            {
                return "06D";
            }
        }

        public int length
        {
            get
            {
                return 61;
            }
        }

        public Automobile(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            Model = fnmdata.Substring(12, 3).Trim();
            Year = fnmdata.Substring(42, 4).Trim();
            CashValue = fnmdata.Substring(47, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#30
        string Model;
        //040
        //#43#4
        string Year;
        //050
        //#47#15
        string CashValue;
    }

    public class RelatedExpense
    {
        public string id
        {
            get
            {
                return "06F";
            }
        }

        public int length
        {
            get
            {
                return 93;
            }
        }

        public RelatedExpense(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            ExpenseType = fnmdata.Substring(12, 3).Trim();
            MonthlyPayment = fnmdata.Substring(15, 15).Trim();
            LefttoPay = fnmdata.Substring(30, 3).Trim();
            OwnedTo = fnmdata.Substring(33, 60).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**"EDI Data Element:
        DR = Alimony
        DT = Child Support
        DV = Separate Maintenance Payment
        DZ = Job Related Expense
        EE = Other Expense Type"
         */
        //030
        //#13#3
        string ExpenseType;
        //040
        //#16#15
        string MonthlyPayment;
        //050
        //#31#3
        string LefttoPay;
        //060
        //#34#60
        string OwnedTo;
    }

    public class RealEstateOwned
    {
        public string id
        {
            get
            {
                return "06G";
            }
        }

        public int length
        {
            get
            {
                return 205;
            }
        }

        public RealEstateOwned(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            StrretAddress = fnmdata.Substring(12, 35).Trim();
            City = fnmdata.Substring(47, 35).Trim();
            State = fnmdata.Substring(82, 2).Trim();
            Zipcode = fnmdata.Substring(84, 5).Trim();
            ZipPlusFour = fnmdata.Substring(89, 4).Trim();
            Disposition = fnmdata.Substring(93, 1).Trim();
            PropertyType = fnmdata.Substring(94, 2).Trim();
            MarketValue = fnmdata.Substring(96, 15).Trim();
            MortgageAmount = fnmdata.Substring(111, 15).Trim();
            GroissRentalIncome = fnmdata.Substring(127, 15).Trim();
            MortgagePayments = fnmdata.Substring(141, 15).Trim();
            MonthlyExpense = fnmdata.Substring(156, 15).Trim();
            NetRentalIncome = fnmdata.Substring(171, 15).Trim();
            IsCurrentResidence = fnmdata.Substring(186, 1).Trim();
            IsSubjectProperty = fnmdata.Substring(187, 1).Trim();
            AssetId = fnmdata.Substring(188, 2).Trim();
            ForFuture = fnmdata.Substring(190, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#35
        string StrretAddress;
        //040
        //#48#35
        string City;
        //050
        //#83#2
        string State;
        //060
        //#85#5
        string Zipcode;
        //070
        //#90#4
        string ZipPlusFour;
        /**"EDI Data Element 1075:
        S = Sold
        H = Retained
        P = Pending Sale
        R = Rental"
         */
        //080
        //#94#1
        string Disposition;
        string DispositionValue
        {
            get
            {
                switch (Disposition)
                {
                    case "S": return "Sold";
                    case "H": return "Retained";
                    case "P": return "Pending Sale";
                    case "R": return "Rental";
                    default: return string.Empty;
                }
            }
        }
        /**"EDI Data Element 1074:
        14 = Single Family
        04 = Condominium
        16 = Townhouse
        13 = Co-operative
        15 = Two-to-four unit property
        18 = Multifamily (more than 4 units)
        08 = Manufactured/Mobile Home
        02 = Commercial – Non-Residential
        F1 = Mixed Use – Residential
        05 = Farm
        03 = Home and Business Combined
        07 = Land"
         */
        //090
        //#95#2
        string PropertyType;
        string PropertyTypeValue
        {
            get
            {
                switch (PropertyType)
                {
                    case "14": return "Single Family";
                    case "04": return "Condominium";
                    case "16": return "Townhouse";
                    case "13": return "Co-operative";
                    case "15": return "Two-to-four unit property";
                    case "18": return "Multifamily (more than 4 units)";
                    case "08": return "Manufactured/Mobile Home";
                    case "02": return "Commercial – Non-Residential";
                    case "F1": return "Mixed Use – Residential";
                    case "05": return "Farm";
                    case "03": return "Home and Business Combined";
                    case "07": return "Land";
                    default: return string.Empty;
                }
            }
        }
        //100
        //#97#15
        string MarketValue;
        //110
        //#112#15
        string MortgageAmount;
        //120
        //#127#15
        string GroissRentalIncome;
        //130
        //#142#15
        string MortgagePayments;
        //140
        //#157#15
        string MonthlyExpense;
        //150
        //#172#15
        string NetRentalIncome;
        /**
         * "Y = Current Residence
         * N = Not Current Residence"
         * */
        //160
        //#187#1
        string IsCurrentResidence;
        //170
        //#188#1
        string IsSubjectProperty;
        //180
        //#189#2
        string AssetId;
        //190
        //#191#15
        string ForFuture;
    }

    public class Liability
    {
        public string id
        {
            get
            {
                return "06L";
            }
        }

        public int length
        {
            get
            {
                return 200;
            }
        }

        public Liability(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            LiabilityType = fnmdata.Substring(12, 2).Trim();
            CreditorName = fnmdata.Substring(14, 35).Trim();
            StreetAddress = fnmdata.Substring(49, 35).Trim();
            City = fnmdata.Substring(84, 35).Trim();
            State = fnmdata.Substring(119, 2).Trim();
            Zipcode = fnmdata.Substring(121, 5).Trim();
            ZipPlusFour = fnmdata.Substring(126, 4).Trim();
            AccountNumber = fnmdata.Substring(130, 30).Trim();
            MonthlyPayment = fnmdata.Substring(160, 15).Trim();
            LeftToPay = fnmdata.Substring(175, 3).Trim();
            UnpaidBalance = fnmdata.Substring(178, 15).Trim();
            IsPriorToClosing = fnmdata.Substring(193, 1).Trim();
            AssetId = fnmdata.Substring(194, 2).Trim();
            IsSubordinate = fnmdata.Substring(196, 1).Trim();
            IsOmitted = fnmdata.Substring(197, 1).Trim();
            IsSubjectProperty = fnmdata.Substring(198, 1).Trim();
            IsRentalProperty = fnmdata.Substring(199, 1).Trim();
        }
        //020
        //#4#9
        string SSN;
        /**
         * "DI Data Element 1189:
        I = Installment Loan
        O = 30 Day Charge Account (open)
        R = Revolving Charge Account
        C = HELOC
        M = Mortgage
        F = Lease Payments
        N = Liens
        A = Taxes
        Z = Other Liability"
         */
        //030
        //#13#2
        string LiabilityType;
        string LiabilityTypeValue
        {
            get
            {
                switch (this.LiabilityType)
                {
                    case "I": return "Installment Loan";
                    case "O": return "30 Day Charge Account (open)";
                    case "R": return "Revolving Charge Account";
                    case "C": return "HELOC";
                    case "M": return "Mortgage";
                    case "F": return "Lease Payments";
                    case "N": return "Liens";
                    case "A": return "Taxes";
                    default: return "Other Liability";
                }
            }
        }
        //040
        //#15#35
        string CreditorName;
        //050
        //#50#35
        string StreetAddress;
        //060
        //#85#35
        string City;
        //070
        //#120#2
        string State;
        //080
        //#122#5
        string Zipcode;
        //090
        //#127#4
        string ZipPlusFour;
        //100
        //#131#30
        string AccountNumber;
        //110
        //#161#15
        string MonthlyPayment;
        //120
        //#176#3
        string LeftToPay;
        //130
        //#179#15
        string UnpaidBalance;
        //140
        //#194#1
        string IsPriorToClosing;
        //150
        //#195#2
        string AssetId;
        //160
        //#197#1
        string IsSubordinate;
        //170
        //#198#1
        string IsOmitted;
        //180
        //#199#1
        string IsSubjectProperty;
        //190
        //#200#1
        string IsRentalProperty;
    }

    public class Alias
    {
        public string id
        {
            get
            {
                return "06H";
            }
        }

        public int length
        {
            get
            {
                return 182;
            }
        }

        public Alias(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            FirstName = fnmdata.Substring(12, 35).Trim();
            MiddleName = fnmdata.Substring(47, 35).Trim();
            LastName = fnmdata.Substring(82, 35).Trim();
            ForFuture1 = fnmdata.Substring(117, 15).Trim();
            ForFuture2 = fnmdata.Substring(152, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#35
        string FirstName;
        //040
        //#48#35
        string MiddleName;
        //050
        //#83#35
        string LastName;
        //060
        //#118#15
        string ForFuture1;
        //070
        //#153#15
        string ForFuture2;
    }

    public class HELOC
    {
        public string id
        {
            get
            {
                return "06S";
            }
        }

        public int length
        {
            get
            {
                return 30;
            }
        }

        public HELOC(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            AmountType = fnmdata.Substring(12, 3).Trim();
            Amount = fnmdata.Substring(15, 15).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#3
        string AmountType;
        //040
        //#13#3
        string Amount;
    }

    public class Dependents
    {

        public string id
        {
            get
            {
                return "03B";
            }
        }

        public int length
        {
            get
            {
                return 15;
            }
        }

        public Dependents(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            DependentsAge = fnmdata.Substring(12, 3).Trim();
        }
        //020
        //#4#9
        string SSN;
        //020
        //#13#3
        string DependentsAge;
    }

    public class Declaration
    {
        public string id
        {
            get
            {
                return "08A";
            }
        }

        public int length
        {
            get
            {
                return 28;
            }
        }
        public Declaration(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();

            _declarationsets.ToList().ForEach(t =>
            {
                t.Value = fnmdata.Substring((t.Position.GetValueOrDefault() - 1), t.Length.GetValueOrDefault());
            });
        }
        public DeclarationSet[] DeclarationSets
        {
            get
            {
                return _declarationsets;
            }
        }

        private DeclarationSet[] _declarationsets = new DeclarationSet[] {

        new DeclarationSet() {
            Label= "a. Are there any outstanding judgments against you?",
            Position= 13,
            Length= 1
        },
        new DeclarationSet {
            Label= "b. Have you been declared bankrupt within the past 7 years?",
            Position= 14,
            Length= 1
        },
        new DeclarationSet {
            Label= "c. Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?",
            Position= 15,
            Length= 1
        },
        new DeclarationSet {
            Label= "d. Are you a party to a lawsuit?",
            Position= 16,
            Length= 1
        },
        new DeclarationSet {
            Label= "e. Have you directly or indirectly been obligated on any loan…",
            Position= 17,
            Length= 1
        },
        new DeclarationSet {
            Label= "f. Are you presently delinquent or in default on any Federal debt…",
            Position= 18,
            Length= 1
        },
        new DeclarationSet {
            Label= "g. Are you obligated to pay alimony child support or separate maintenance?",
            Position= 19,
            Length= 1
        },
        new DeclarationSet {
            Label= "h. Is any part of the down payment borrowed?",
            Position= 20,
            Length= 1
        }
            ,
        new DeclarationSet {
            Label= "i. Are you a co-maker or",
            Position= 21,
            Length= 1
        }
            ,
        new DeclarationSet {
            Label= "j. Are you a U.S. citizen?",
            Position= 22,
            Length= 2
        }
            ,
        new DeclarationSet {
            Label= "k. Are you a permanent resident alien?",
            Position= 22,
            Length= 2
        }
            ,
        new DeclarationSet {
            Label= "l. Do you intend to occupy…",
            Position= 24,
            Length= 1
        }
            ,
        new DeclarationSet (){
            Label= "m. Have you had an ownership interest…",
            Position= 25,
            Length= 1
        }
            ,
        new DeclarationSet (){
            Label= "m. (1) What type of property…",
            Position= 26,
            Length= 1
        },
        new DeclarationSet (){
            Label= "m. (2) How did you hold title…",
            Position= 27,
            Length= 2
        }
    };


        //020
        //#4#9
        string SSN;

    }

    public class GovernmentMonitoring
    {
        public string id
        {
            get
            {
                return "10A";
            }
        }

        public int length
        {
            get
            {
                return 45;
            }
        }

        public GovernmentMonitoring(string fnmdata)
        {
            SSN = fnmdata.Substring(3, 9).Trim();
            WishToFurninsh = fnmdata.Substring(12, 1).Trim();
            Ethnicity = fnmdata.Substring(13, 1).Trim();
            Filter = fnmdata.Substring(14, 30).Trim();
            SEX = fnmdata.Substring(44, 1).Trim();
        }
        //020
        //#4#9
        string SSN;
        //030
        //#13#1
        string WishToFurninsh;
        /**"1108 Ethnicity Code:
        1-Hispanic or Latino
        2-Not Hispanic or Latino
        3-Information not provided by applicant in mail, internet or telephone application
        4-Not applicable"
         */
        //040
        //#14#1
        string Ethnicity;
        //050
        //#15#30
        string Filter;
        /**
         * "F = Female
        M = Male
        I = Information not provided by applicant in mail, internet or telephone application
        N = Not applicable
        "*/
        //060
        //#45#1
        string SEX;
    }

    public class EnvelopeHeader
    {

        string id
        {
            get
            {
                return "EH";
            }
        }
        public EnvelopeHeader(string fnmdata)
        {
            InstitutionId = fnmdata.Substring(3, 6).Trim();
            InstitutionName = fnmdata.Substring(9, 25).Trim();
            Date = fnmdata.Substring(34, 11).Trim();
            EnvelopeControlName = fnmdata.Substring(45, 9).Trim();
        }
        //#020
        //#4#6
        string InstitutionId;
        //#030
        //#10#25
        string InstitutionName;
        //#040
        //#35#11
        //CCYYMMDD
        string Date;
        //#040
        //#46#9
        string EnvelopeControlName;
    }

    public class TransactionHeader
    {
        string id
        {
            get
            {
                return "TH";
            }
        }
        public TransactionHeader(string fnmdata)
        {
            TransactionId = fnmdata.Substring(3, 11).Trim();
            TransactionControlName = fnmdata.Substring(14, 9).Trim();
        }
        //#020
        //#4#11
        string TransactionId;
        //#040
        //#15#9
        string TransactionControlName;
    }

    public class ProcessingInfo
    {

        string id
        {
            get
            {
                return "TPI";
            }
        }
        public ProcessingInfo(string fnmdata)
        {
            VersionID = fnmdata.Substring(3, 5).Trim();
            IdentifierTypeCode = fnmdata.Substring(7, 2).Trim();
            Identifier = fnmdata.Substring(9, 30).Trim();
            ImportActionIndicator = fnmdata.Substring(39, 1).Trim();
        }
        //#020
        //#4#5
        string VersionID;
        //#030
        //#8#2
        string IdentifierTypeCode;
        //#040
        //#10#30
        string Identifier;
        //#050
        //#40#1
        string ImportActionIndicator;


    }

    public class FileIdentification
    {
        string id
        {
            get
            {
                return "000";
            }
        }
        public FileIdentification(string fnmdata)
        {
            FileType = fnmdata.Substring(3, 3).Trim();
            FileVersionID = fnmdata.Substring(6, 5).Trim();
            ExportVersionIndicator = fnmdata.Substring(10, 1).Trim();
        }
        //#020
        //#3#3
        string FileType;
        //#030
        //#7#5
        string FileVersionID;
        //#040
        //#11#1
        string ExportVersionIndicator;

    }

    public class FormTop
    {
        string id
        {
            get
            {
                return "00A";
            }
        }
        public FormTop(string fnmdata)
        {
            UseAssetForQualification = fnmdata.Substring(3, 1).Trim();
            NotUseAssetForQualification = fnmdata.Substring(4, 1).Trim();
        }
        //#020
        //#4#1
        string UseAssetForQualification;
        //#030
        //#5#1
        string NotUseAssetForQualification;
    }

    public class TypeAndTerms
    {
        public TypeAndTerms(string fnmdata)
        {
            MortgageAppliedFor = fnmdata.Substring(3, 2).Trim();
            MortgageAppliedForOther = fnmdata.Substring(5, 80).Trim();
            AgencyCaseNumber = fnmdata.Substring(85, 30).Trim();
            CardNumber = fnmdata.Substring(115, 15).Trim();
            LoanAmount = fnmdata.Substring(130, 15).Trim();
            InterestRate = fnmdata.Substring(145, 7).Trim();
            NoOfMonths = fnmdata.Substring(152, 3).Trim();
            AmortizationType = fnmdata.Substring(155, 2).Trim();
            AmortizationTypeOther = fnmdata.Substring(157, 80).Trim();
            ARMTextualDescription = fnmdata.Substring(237, 80).Trim();
        }
        /**
         * "EDI Data Element 1093:
        01 = Conventional
        02 = VA
        03 = FHA
        04 = USDA / Rural Housing Service
        07 = Other"
         */
        //#020
        //#4#2
        string MortgageAppliedFor;
        //#030
        //#6#80
        string MortgageAppliedForOther;
        //#040
        //#86#30
        string AgencyCaseNumber;
        //#050
        //#116#15
        string CardNumber;
        //#060
        //#131#15
        string LoanAmount;
        //#070
        //#146#7
        string InterestRate;
        //#080
        //#153#3
        string NoOfMonths;
        /**"EDI Data Element 1085:
        01 = Adjustable Rate
        04 = GEM
        05 = Fixed Rate
        06 = GPM
        13 = Other"
         */
        //#090
        //#156#2
        string AmortizationType;
        //#100
        //#158#80
        string AmortizationTypeOther;
        //#110
        //#238#80
        string ARMTextualDescription;
    }

    public class Property
    {
        public Property(string fnmdata)
        {
            StreetAddress = fnmdata.Substring(3, 50).Trim();
            City = fnmdata.Substring(53, 35).Trim();
            State = fnmdata.Substring(88, 2).Trim();
            ZipCode = fnmdata.Substring(90, 5).Trim();
            ZipPlusFour = fnmdata.Substring(95, 4).Trim();
            NoofUnits = fnmdata.Substring(99, 3).Trim();
            SubjectPropertyCode = fnmdata.Substring(102, 2).Trim();
            SubjectProperty = fnmdata.Substring(104, 80).Trim();
            YearBuilt = fnmdata.Substring(184, 4).Trim();
        }
        //#020
        //#4#50
        string StreetAddress;
        //#030
        //#54#35
        string City;
        //#040
        //#89#2
        string State;
        //#050
        //#91#5
        string ZipCode;
        //#060
        //#96#4
        string ZipPlusFour;
        //#070
        //#100#3
        string NoofUnits;
        //#080
        //#103#2
        string SubjectPropertyCode;
        //#090
        //#105#80
        string SubjectProperty;
        //#090
        //#185#4
        string YearBuilt;
    }

    public class PropertyAddress
    {
        string id
        {
            get
            {
                return "PAI";
            }
        }
        int length
        {
            get
            {
                return 65;
            }
        }

        public PropertyAddress(string fnmdata)
        {
            HouseNumber = fnmdata.Substring(3, 11).Trim();
            StreetName = fnmdata.Substring(14, 40).Trim();
            UnitNumber = fnmdata.Substring(55, 11).Trim();
        }
        //#0220
        //#4#11
        string HouseNumber;
        //#030
        //#15#40
        string StreetName;
        //#040
        //#55#11
        string UnitNumber;

    }

    public class PurposeOfLoan
    {
        string id
        {
            get
            {
                return "02B";
            }
        }
        int length
        {
            get
            {
                return 157;
            }
        }

        public PurposeOfLoan(string fnmdata)
        {
            FutureUse = fnmdata.Substring(3, 2).Trim();
            PurposeofLoan = fnmdata.Substring(5, 2).Trim();
            PurposeofLoanOther = fnmdata.Substring(7, 80).Trim();
            ResidenceType = fnmdata.Substring(87, 1).Trim();
            TitleManner = fnmdata.Substring(88, 60).Trim();
            EstateHeldIn = fnmdata.Substring(148, 1).Trim();
            LeasholdExpirationDate = fnmdata.Substring(149, 8).Trim();
        }
        //020
        //UnUsed
        //#4#2
        string FutureUse;
        /**
        "EDI Element 1081:
        04 = Construction
        05 = Refinance
        13 = Construction-Perm
        15 = Other
        16 = Purchase"
        */
        //030
        //#6#2
        string PurposeofLoan;
        //040
        //#8#80
        string PurposeofLoanOther;
        /**
        "EDI Element 1070:
        1 = Primary Residence
        2 = Secondary Residence
        D = Investment Property"
        */
        //050
        //#88#1
        string ResidenceType;
        //060
        //#89#60
        string TitleManner;
        /**
         * "Fannie Mae Property Rights Codes:
        1- Fee Simple
        2 – Leasehold"
         */
        //070
        //#149#1
        string EstateHeldIn;
        //080
        //#150#8
        //CCYYMMDD
        string LeasholdExpirationDate;
    }

    public class TitleHolder
    {
        string id
        {
            get
            {
                return "02C";
            }
        }

        int length
        {
            get
            {
                return 63;
            }
        }
        public TitleHolder(string fnmdata)
        {
            TitelHolder = fnmdata.Substring(3, 60);
        }
        //020
        //#4#60
        string TitelHolder;
    }

    public class DetailsOfTransaction
    {
        public string id
        {
            get
            {
                return "07A";
            }
        }

        public int length
        {
            get
            {
                return 168;
            }
        }

        public DetailsOfTransaction(string fnmdata)
        {
            PurchasePrice = fnmdata.Substring(3, 15).Trim();
            Alterations = fnmdata.Substring(18, 15).Trim();
            Land = fnmdata.Substring(33, 15).Trim();
            Refinane = fnmdata.Substring(48, 15).Trim();
            EstimatedPrePaid = fnmdata.Substring(63, 15).Trim();
            ExtimatedClosinfCosts = fnmdata.Substring(78, 15).Trim();
            FundingFee = fnmdata.Substring(93, 15).Trim();
            Discount = fnmdata.Substring(108, 15).Trim();
            SubordinateFinancing = fnmdata.Substring(123, 15).Trim();
            SellerClosingCosts = fnmdata.Substring(139, 15).Trim();
            FundingFeeFinanced = fnmdata.Substring(154, 15).Trim();
        }
        //020
        //#4#15
        string PurchasePrice;
        //030
        //#19#15
        string Alterations;
        //040
        //#34#15
        string Land;
        //050
        //#49#15
        string Refinane;
        //060
        //#64#15
        string EstimatedPrePaid;
        //070
        //#79#15
        string ExtimatedClosinfCosts;
        //080
        //#94#15
        string FundingFee;
        //090
        //#109#15
        string Discount;
        //100
        //#124#15
        string SubordinateFinancing;
        //110
        //#139#15
        string SellerClosingCosts;
        //120
        //#154#15
        string FundingFeeFinanced;
    }

    public class RefinanceData
    {
        string id
        {
            get
            {
                return "02D";
            }
        }

        int length
        {
            get
            {
                return 165;
            }
        }
        public RefinanceData(string fnmdata)
        {
            YearsLotRequired = fnmdata.Substring(3, 4).Trim();
            OriginalCosts = fnmdata.Substring(7, 15).Trim();
            AmountExistingLiens = fnmdata.Substring(22, 15).Trim();
            PresentValueofLot = fnmdata.Substring(37, 15).Trim();
            CostofImprovements = fnmdata.Substring(52, 15).Trim();
            PurposeofRefinance = fnmdata.Substring(67, 2).Trim();
            DescribeImprovements = fnmdata.Substring(69, 80).Trim();
            IsMade = fnmdata.Substring(149, 1).Trim();
            Cost = fnmdata.Substring(150, 15).Trim();
        }
        //020
        //#4#4
        string YearsLotRequired;
        //030
        //#8#15
        string OriginalCosts;
        //040
        //#23#15
        //Z(12).Z(2)
        string AmountExistingLiens;
        //050
        //#38#15
        //Z(12).Z(2)
        string PresentValueofLot;
        //060
        //#53#15
        //Z(12).Z(2)
        string CostofImprovements;
        /**
         * "EDI Data Element 1082:
        F1 = No Cash Out
        01 = Cash-Out/Other
        04 = Cash-Out/Home Improvement
        11 = Cash-Out/Debt Consolidation
        13 = Limited Cash-Out"
         */
        //070
        //#68#2
        string PurposeofRefinance;
        //080
        //#70#80
        string DescribeImprovements;
        //090
        //#150#1
        string IsMade;
        //100
        //#151#15
        //Z(12).Z(2)
        string Cost;
    }

    public class DownPayment
    {
        string id
        {
            get
            {
                return "02E";
            }
        }

        int length
        {
            get
            {
                return 100;
            }
        }
        public DownPayment(string fnmdata)
        {
            Type = fnmdata.Substring(3, 2).Trim();
            Amount = fnmdata.Substring(5, 15).Trim();
            Explanation = fnmdata.Substring(20, 80).Trim();
        }
        //020
        //#4#2
        string Type;
        //030
        //#6#15
        string Amount;
        //040
        //#21#80
        string Explanation;
    }

    public class OtherCredit
    {
        public string id
        {
            get
            {
                return "07B";
            }
        }

        public int length
        {
            get
            {
                return 20;
            }
        }

        public OtherCredit(string fnmdata)
        {
            CreditType = fnmdata.Substring(3, 2).Trim();
            Amount = fnmdata.Substring(5, 15).Trim();
        }
        //020
        //#4#2
        public string CreditType;
        //030
        //#6#15
        public string Amount;
    }
}
