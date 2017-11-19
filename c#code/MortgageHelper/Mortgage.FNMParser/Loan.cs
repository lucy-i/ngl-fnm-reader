using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Reflection;

namespace Mortgage.FNMParser
{

    public class Loan
    {
        public LoanApplication LoanApplication { get; set; }
        public Loan(string[] fnmString)
        {
            LoanApplication = new LoanApplication(fnmString);
            LoanApplication.setData(fnmString);
        }

        public string toFNMString()
        {
            List<string> reversefnmString = new List<string>();

            reversefnmString.AddRange(this.LoanApplication.toFNMStringArray());
            return string.Join(Environment.NewLine, reversefnmString);
        }
    }
    internal class ChildProperty
    {
        public string Name { get; set; }
        public string Id { get; set; }
        public bool IsArray { get; set; } = false;
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
        public string Label { get; set; }
        public string Value { get; set; }
        public int? Position { get; set; }
        public int? Length = 1;
    }

    public class LoanApplication
    {
        public List<Applicant> Applicants { get; set; }
        public EnvelopeHeader EnvelopeHeader { get; set; }
        public TransactionHeader TransactionHeader { get; set; }
        public ProcessingInfo ProcessingInfo { get; set; }
        public FileIdentification FileIdentification { get; set; }
        public FormTop FormTop { get; set; }
        public TypeAndTerms TypeAndTerms { get; set; }
        public Property Property { get; set; }
        public PropertyAddress PropertyAddress { get; set; }
        public PurposeOfLoan PurposeOfLoan { get; set; }
        public TitleHolder TitleHolder { get; set; }
        public DetailsOfTransaction DetailsOfTransaction { get; set; }
        public RefinanceData RefinanceData { get; set; }
        public DownPayment DownPayment { get; set; }
        public List<OtherCredit> OtherCredits { get; set; }
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

        internal List<string> toFNMStringArray()
        {
            List<string> reversefnmString = new List<string>();
            this.Applicants.ForEach(element =>
            {
                reversefnmString.AddRange(element.toFNMStringArray());
            });
            return reversefnmString;
        }
        private ChildProperty[] childArrays
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

        }


        public void setData(string[] fnmString)
        {
            this.childArrays.ToList().ForEach(c =>
            {
                fnmString.Where(t => t.IndexOf(c.Id) == 0).ToList().ForEach(f =>
                {
                    Type type = this.GetType();
                    PropertyInfo prop = type.GetProperty(c.Name);
                    var prePropValue = getInstancefor(c.Name, f);
                    if (prop.PropertyType.IsArray)
                    {

                    }
                    else
                    {
                        prop.SetValue(this, prePropValue, null);
                    }
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
        public Applicant()
        {

        }
        //BW : Applicant or QZ : Co-Applicant
        public string Indicator { get; set; }
        public string SSN { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Generation { get; set; }
        public string HomePhone { get; set; }
        public string Age { get; set; }
        public string YrsInSchool { get; set; }
        /**"EDI Data Element 1067:
        M = Married
        S = Separated
        U = Unmarried (Single, Divorced, Widowed)"
         */
        public string MartialStatus { get; set; }
        public string Dependents { get; set; }
        /**"Y = Yes
        N = No"
         */
        public string Jointly { get; set; }
        public string CrossReference { get; set; }
        public string DateofBirth { get; set; }
        public string EmailAddress { get; set; }
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

        private ChildProperty[] childArrays
        {
            get
            {
                return _childArrays;
            }
        }

        public Applicant(string fnmdata)
        {
            if (!string.IsNullOrEmpty(fnmdata))
            {
                Indicator = fnmdata.SafeSubstring(3, 2).Trim();
                SSN = fnmdata.SafeSubstring(5, 9).Trim();
                FirstName = fnmdata.SafeSubstring(14, 35).Trim();
                MiddleName = fnmdata.SafeSubstring(49, 35).Trim();
                LastName = fnmdata.SafeSubstring(84, 35).Trim();
                Generation = fnmdata.SafeSubstring(119, 4).Trim();
                HomePhone = fnmdata.SafeSubstring(123, 10).Trim();
                Age = fnmdata.SafeSubstring(133, 3).Trim();
                YrsInSchool = fnmdata.SafeSubstring(136, 2).Trim();
                MartialStatus = fnmdata.SafeSubstring(138, 1).Trim();
                Dependents = fnmdata.SafeSubstring(139, 2).Trim();
                Jointly = fnmdata.SafeSubstring(141, 1).Trim();
                CrossReference = fnmdata.SafeSubstring(142, 9).Trim();
                DateofBirth = fnmdata.SafeSubstring(151, 8).Trim().toMMDDYYYY();
                EmailAddress = fnmdata.SafeSubstring(159, 80).Trim();
            }
        }


        internal List<string> toFNMStringArray()
        {
            List<string> fnmdataArray = new List<string>();
            string fnmdata = string.Empty;
            fnmdata += Applicant.Id.fillString(3);
            fnmdata += this.Indicator.fillString(2);
            fnmdata += this.SSN.fillString(9);
            fnmdata += this.FirstName.fillString(35);
            fnmdata += this.MiddleName.fillString(35);
            fnmdata += this.LastName.fillString(35);
            fnmdata += this.Generation.fillString(4);
            fnmdata += this.HomePhone.fillString(10);
            fnmdata += this.Age.fillString(3);
            fnmdata += this.YrsInSchool.fillString(2, true);
            fnmdata += this.MartialStatus.fillString(1);
            fnmdata += this.Dependents.fillString(2, true);
            fnmdata += this.Jointly.fillString(1);
            fnmdata += this.CrossReference.fillString(9);
            fnmdata += this.DateofBirth.toCCMMDDYYYY().fillString(8);
            fnmdata += this.EmailAddress.fillString(80);
            fnmdataArray.Add(fnmdata);
            fnmdataArray.AddRange(this.getData());
            return fnmdataArray;
        }
        internal List<string> getData()
        {
            List<string> fnmString = new List<string>();
            childArrays.ToList().ForEach(c =>
            {
                Type type = this.GetType();
                PropertyInfo prop = type.GetProperty(c.Name);

                if (prop.PropertyType.Name.Contains("ICollection"))
                {
                    List<object> prePropValue = prop.GetValue(this, null) as List<object>;
                    if (prePropValue != null)
                    {
                        prePropValue.ForEach(e =>
                        {
                            dynamic ele = e;
                            fnmString.Add(ele.toFNMString());
                        });

                    }
                }
                else
                {
                    dynamic prePropValue = prop.GetValue(this, null);
                    if(prePropValue!=null)
                    fnmString.Add(prePropValue.toFNMString());
                }
            });


            return fnmString;
        }

        public ICollection<Address> Addresses { get; set; }
        public ICollection<CurrentEmployment> CurrentEmployments { get; set; }
        public ICollection<PreviousEmployment> PreviousEmployments { get; set; }
        public ICollection<HousingExpense> HousingExpences { get; set; }
        public ICollection<Income> Incomes { get; set; }
        public ICollection<LifeInsurance> LifeInsurance { get; set; }
        public ICollection<Asset> Assets { get; set; }
        public ICollection<Automobile> Automobiles { get; set; }
        public ICollection<RelatedExpense> RelatedExpenses { get; set; }
        public ICollection<RealEstateOwned> RealEstateOwneds { get; set; }
        public ICollection<Liability> Liabilities { get; set; }
        public Alias Alias { get; set; }
        public HELOC HELOC { get; set; }
        public Dependents DependentsAge { get; set; }
        public Declaration Declaration { get; set; }
        public GovernmentMonitoring GovernmentMonitoring { get; set; }

        public void setData(string[] fnmString)
        {
            this.childArrays.ToList().ForEach(c =>
            {
                fnmString.Where(t => t.IndexOf(c.Id) == 0).ToList().ForEach(f =>
                {
                    Type type = this.GetType();
                    PropertyInfo prop = type.GetProperty(c.Name);

                    var postPropValue = getInstancefor(c.Name, f);
                    if (prop.PropertyType.Name.Contains("ICollection"))
                    {
                        dynamic prePropValue = prop.GetValue(this, null) as List<object>;
                        if (prePropValue == null)
                        {
                            prePropValue = this.getListInstancefor(c.Name, f);
                            prePropValue.Add(postPropValue);
                            prop.SetValue(this, prePropValue, null);
                        }
                        else
                        {
                            prePropValue.Add(postPropValue);
                            prop.SetValue(this, prePropValue, null);
                        }
                    }
                    else
                    {
                        prop.SetValue(this, postPropValue, null);
                    }


                });
            });
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
        private dynamic getListInstancefor(string key, string rowdata)
        {
            switch (key)
            {
                case "Addresses": return new List<Address>();
                case "CurrentEmployments": return new List<CurrentEmployment>();
                case "PreviousEmployments": return new List<PreviousEmployment>();
                case "HousingExpences": return new List<HousingExpense>();
                case "Incomes": return new List<Income>();
                case "LifeInsurance": return new List<LifeInsurance>();
                case "Assets": return new List<Asset>();
                case "Automobiles": return new List<Automobile>();
                case "RelatedExpenses": return new List<RelatedExpense>();
                case "RealEstateOwneds": return new List<RealEstateOwned>();//
                case "Liabilities": return new List<Liability>();
            }
            return null;
        }
    }

    public class Address
    {
        public Address()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            AddressType = fnmdata.SafeSubstring(12, 2).Trim();
            StreetAddress = fnmdata.SafeSubstring(14, 50).Trim();
            City = fnmdata.SafeSubstring(64, 35).Trim();
            State = fnmdata.SafeSubstring(99, 2).Trim();
            ZipCode = fnmdata.SafeSubstring(101, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(106, 4).Trim();
            UsageType = fnmdata.SafeSubstring(110, 1).Trim();
            NoofYears = fnmdata.SafeSubstring(111, 2).Trim();
            NoofMonths = fnmdata.SafeSubstring(114, 2).Trim();
            Country = fnmdata.SafeSubstring(115, 50).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        /**
         * "F4 = Former Residence
        ZG = Present Address
        BH = Mailing Address"
         */
        //030
        //#13#2
        public string AddressType { get; set; }
        //040
        //#15#50
        public string StreetAddress { get; set; }
        //050
        //#65#35
        public string City { get; set; }
        //060
        //#100#2
        public string State { get; set; }
        //070
        //#102#5
        public string ZipCode { get; set; }
        //080
        //#107#4
        public string ZipPlusFour { get; set; }
        /**
         * "EDI Data Element 1078:
        X = Living Rent Free
        R = Rent
        O = Own"
         */
        //090
        //#111#1
        public string UsageType { get; set; }
        //100
        //#112#2
        public string NoofYears { get; set; }
        //110
        //#114#2
        public string NoofMonths { get; set; }
        //120
        //#116#50
        public string Country { get; set; }
    }

    public class CurrentEmployment
    {
        public CurrentEmployment()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            EmployerName = fnmdata.SafeSubstring(12, 35).Trim();
            StrretAddress = fnmdata.SafeSubstring(47, 35).Trim();
            City = fnmdata.SafeSubstring(82, 35).Trim();
            State = fnmdata.SafeSubstring(117, 2).Trim();
            ZipCode = fnmdata.SafeSubstring(119, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(124, 4).Trim();
            IsSelfEmployed = fnmdata.SafeSubstring(128, 1).Trim();
            YearsOnJob = fnmdata.SafeSubstring(129, 2).Trim();
            MonthsOnJob = fnmdata.SafeSubstring(131, 2).Trim();
            YersEmployedInThisLine = fnmdata.SafeSubstring(133, 2).Trim();
            Position = fnmdata.SafeSubstring(135, 25).Trim();
            BusinessPhone = fnmdata.SafeSubstring(160, 10).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN { get; set; }
        //030
        //#13#35
        public string EmployerName { get; set; }
        //040
        //#48#35
        public string StrretAddress { get; set; }
        //050
        //#83#35
        public string City { get; set; }
        //060
        //#118#2
        public string State { get; set; }
        //070
        //#120#5
        public string ZipCode { get; set; }
        //080
        //#125#4
        public string ZipPlusFour { get; set; }
        //090
        //#129#1
        public string IsSelfEmployed { get; set; }
        //100
        //#130#2
        public string YearsOnJob { get; set; }
        //110
        //#132#2
        public string MonthsOnJob { get; set; }
        //120
        //#134#2
        public string YersEmployedInThisLine;
        //130
        //#136#25
        public string Position;
        //140
        //#161#10
        public string BusinessPhone;
    }

    public class PreviousEmployment
    {
        public PreviousEmployment()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            EmployerName = fnmdata.SafeSubstring(12, 35).Trim();
            StrretAddress = fnmdata.SafeSubstring(47, 35).Trim();
            City = fnmdata.SafeSubstring(82, 35).Trim();
            State = fnmdata.SafeSubstring(117, 2).Trim();
            ZipCode = fnmdata.SafeSubstring(119, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(124, 4).Trim();
            IsSelfEmployed = fnmdata.SafeSubstring(128, 1).Trim();
            IsCurrentEmployment = fnmdata.SafeSubstring(129, 1).Trim();
            FromDate = fnmdata.SafeSubstring(130, 8).Trim().toMMDDYYYY(); 
            ToDate = fnmdata.SafeSubstring(138, 8).Trim().toMMDDYYYY();
            MonthlyIncome = fnmdata.SafeSubstring(146, 15).Trim();
            Position = fnmdata.SafeSubstring(161, 25).Trim();
            BusinessPhone = fnmdata.SafeSubstring(186, 10).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#35
        public string EmployerName;
        //040
        //#48#35
        public string StrretAddress;
        //050
        //#83#35
        public string City;
        //060
        //#118#2
        public string State;
        //070
        //#120#5
        public string ZipCode;
        //080
        //#125#4
        public string ZipPlusFour;
        //090
        //#129#1
        public string IsSelfEmployed;
        //100
        //#129#1
        public string IsCurrentEmployment;
        //110
        //#131#8
        //CCYYMMDD
        public string FromDate;
        //120
        //#139#8
        //CCYYMMDD
        public string ToDate;
        //130
        //#147#15
        //Z(12).Z(2)
        public string MonthlyIncome;
        //140
        //#162#25
        public string Position;
        //150
        //#187#10
        public string BusinessPhone;
    }

    public class HousingExpense
    {
        public HousingExpense()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            ExpenseIndicator = fnmdata.SafeSubstring(12, 1).Trim();
            PaymentTypeCode = fnmdata.SafeSubstring(13, 2).Trim();
            HousingPaymentAmount = fnmdata.SafeSubstring(15, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        /**"1 = Present Housing Expense
        2 = Proposed Housing Expense"
        */
        //030
        //#13#1
        public string ExpenseIndicator;
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
        public string PaymentTypeCode;
        //050
        //#16#15
        //Format: Z(12).Z(2)
        public string HousingPaymentAmount;
        public string PaymentTypeValue
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
        public string ExpenseIndicatorValue
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
        public Income()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            IncomeType = fnmdata.SafeSubstring(12, 2).Trim();
            MonthlyIncome = fnmdata.SafeSubstring(14, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
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
        public string IncomeType;
        //040
        //#15#15
        public string MonthlyIncome;
    }

    public class LifeInsurance
    {
        public LifeInsurance()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            AccountNumber = fnmdata.SafeSubstring(12, 30).Trim();
            CashValue = fnmdata.SafeSubstring(42, 15).Trim();
            FaceAmount = fnmdata.SafeSubstring(57, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#30
        public string AccountNumber;
        //040
        //#43#15
        public string CashValue;
        //030
        //#58#15
        public string FaceAmount;
    }

    public class Asset
    {
        public Asset()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            AssetType = fnmdata.SafeSubstring(12, 3).Trim();
            InstitutionName = fnmdata.SafeSubstring(15, 35).Trim();
            StreetAddress = fnmdata.SafeSubstring(50, 35).Trim();
            City = fnmdata.SafeSubstring(85, 35).Trim();
            State = fnmdata.SafeSubstring(120, 2).Trim();
            Zipcode = fnmdata.SafeSubstring(122, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(127, 4).Trim();
            AccountNumber = fnmdata.SafeSubstring(131, 30).Trim();
            CashValue = fnmdata.SafeSubstring(161, 15).Trim();
            NofShares = fnmdata.SafeSubstring(176, 7).Trim();
            Description = fnmdata.SafeSubstring(183, 80).Trim();
            FutureUse1 = fnmdata.SafeSubstring(263, 1).Trim();
            FutureUse2 = fnmdata.SafeSubstring(264, 2).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
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
        public string AssetType;
        public string AssetTypeValue
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
        public string InstitutionName;
        //050
        //#51#35
        public string StreetAddress;
        //060
        //#86#35
        public string City;
        //070
        //#121#2
        public string State;
        //080
        //#123#5
        public string Zipcode;
        //090
        //#128#4
        public string ZipPlusFour;
        //100
        //#132#30
        public string AccountNumber;
        //110
        //#162#15
        //Format:  Z(12).Z(2)
        public string CashValue;
        //120
        //#177#7
        public string NofShares;
        //130
        //#184#80
        public string Description;
        //140
        //#264#1
        public string FutureUse1;
        //150
        //#265#2
        public string FutureUse2;
    }

    public class Automobile
    {
        public Automobile()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            Model = fnmdata.SafeSubstring(12, 3).Trim();
            Year = fnmdata.SafeSubstring(42, 4).Trim();
            CashValue = fnmdata.SafeSubstring(47, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#30
        public string Model;
        //040
        //#43#4
        public string Year;
        //050
        //#47#15
        public string CashValue;
    }

    public class RelatedExpense
    {
        public RelatedExpense()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            ExpenseType = fnmdata.SafeSubstring(12, 3).Trim();
            MonthlyPayment = fnmdata.SafeSubstring(15, 15).Trim();
            LefttoPay = fnmdata.SafeSubstring(30, 3).Trim();
            OwnedTo = fnmdata.SafeSubstring(33, 60).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        /**"EDI Data Element:
        DR = Alimony
        DT = Child Support
        DV = Separate Maintenance Payment
        DZ = Job Related Expense
        EE = Other Expense Type"
         */
        //030
        //#13#3
        public string ExpenseType;
        //040
        //#16#15
        public string MonthlyPayment;
        //050
        //#31#3
        public string LefttoPay;
        //060
        //#34#60
        public string OwnedTo;
    }

    public class RealEstateOwned
    {
        public RealEstateOwned()
        {

        }
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            StrretAddress = fnmdata.SafeSubstring(12, 35).Trim();
            City = fnmdata.SafeSubstring(47, 35).Trim();
            State = fnmdata.SafeSubstring(82, 2).Trim();
            Zipcode = fnmdata.SafeSubstring(84, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(89, 4).Trim();
            Disposition = fnmdata.SafeSubstring(93, 1).Trim();
            PropertyType = fnmdata.SafeSubstring(94, 2).Trim();
            MarketValue = fnmdata.SafeSubstring(96, 15).Trim();
            MortgageAmount = fnmdata.SafeSubstring(111, 15).Trim();
            GroissRentalIncome = fnmdata.SafeSubstring(127, 15).Trim();
            MortgagePayments = fnmdata.SafeSubstring(141, 15).Trim();
            MonthlyExpense = fnmdata.SafeSubstring(156, 15).Trim();
            NetRentalIncome = fnmdata.SafeSubstring(171, 15).Trim();
            IsCurrentResidence = fnmdata.SafeSubstring(186, 1).Trim();
            IsSubjectProperty = fnmdata.SafeSubstring(187, 1).Trim();
            AssetId = fnmdata.SafeSubstring(188, 2).Trim();
            ForFuture = fnmdata.SafeSubstring(190, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#35
        public string StrretAddress;
        //040
        //#48#35
        public string City;
        //050
        //#83#2
        public string State;
        //060
        //#85#5
        public string Zipcode;
        //070
        //#90#4
        public string ZipPlusFour;
        /**"EDI Data Element 1075:
        S = Sold
        H = Retained
        P = Pending Sale
        R = Rental"
         */
        //080
        //#94#1
        public string Disposition;
        public string DispositionValue
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
        public string PropertyType;
        public string PropertyTypeValue
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
        public string MarketValue;
        //110
        //#112#15
        public string MortgageAmount;
        //120
        //#127#15
        public string GroissRentalIncome;
        //130
        //#142#15
        public string MortgagePayments;
        //140
        //#157#15
        public string MonthlyExpense;
        //150
        //#172#15
        public string NetRentalIncome;
        /**
         * "Y = Current Residence
         * N = Not Current Residence"
         * */
        //160
        //#187#1
        public string IsCurrentResidence;
        //170
        //#188#1
        public string IsSubjectProperty;
        //180
        //#189#2
        public string AssetId;
        //190
        //#191#15
        public string ForFuture;
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            LiabilityType = fnmdata.SafeSubstring(12, 2).Trim();
            CreditorName = fnmdata.SafeSubstring(14, 35).Trim();
            StreetAddress = fnmdata.SafeSubstring(49, 35).Trim();
            City = fnmdata.SafeSubstring(84, 35).Trim();
            State = fnmdata.SafeSubstring(119, 2).Trim();
            Zipcode = fnmdata.SafeSubstring(121, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(126, 4).Trim();
            AccountNumber = fnmdata.SafeSubstring(130, 30).Trim();
            MonthlyPayment = fnmdata.SafeSubstring(160, 15).Trim();
            LeftToPay = fnmdata.SafeSubstring(175, 3).Trim();
            UnpaidBalance = fnmdata.SafeSubstring(178, 15).Trim();
            IsPriorToClosing = fnmdata.SafeSubstring(193, 1).Trim();
            AssetId = fnmdata.SafeSubstring(194, 2).Trim();
            IsSubordinate = fnmdata.SafeSubstring(196, 1).Trim();
            IsOmitted = fnmdata.SafeSubstring(197, 1).Trim();
            IsSubjectProperty = fnmdata.SafeSubstring(198, 1).Trim();
            IsRentalProperty = fnmdata.SafeSubstring(199, 1).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
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
        public string LiabilityType;
        public string LiabilityTypeValue
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
        public string CreditorName;
        //050
        //#50#35
        public string StreetAddress;
        //060
        //#85#35
        public string City;
        //070
        //#120#2
        public string State;
        //080
        //#122#5
        public string Zipcode;
        //090
        //#127#4
        public string ZipPlusFour;
        //100
        //#131#30
        public string AccountNumber;
        //110
        //#161#15
        public string MonthlyPayment;
        //120
        //#176#3
        public string LeftToPay;
        //130
        //#179#15
        public string UnpaidBalance;
        //140
        //#194#1
        public string IsPriorToClosing;
        //150
        //#195#2
        public string AssetId;
        //160
        //#197#1
        public string IsSubordinate;
        //170
        //#198#1
        public string IsOmitted;
        //180
        //#199#1
        public string IsSubjectProperty;
        //190
        //#200#1
        public string IsRentalProperty;
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            FirstName = fnmdata.SafeSubstring(12, 35).Trim();
            MiddleName = fnmdata.SafeSubstring(47, 35).Trim();
            LastName = fnmdata.SafeSubstring(82, 35).Trim();
            ForFuture1 = fnmdata.SafeSubstring(117, 15).Trim();
            ForFuture2 = fnmdata.SafeSubstring(152, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#35
        public string FirstName;
        //040
        //#48#35
        public string MiddleName;
        //050
        //#83#35
        public string LastName;
        //060
        //#118#15
        public string ForFuture1;
        //070
        //#153#15
        public string ForFuture2;
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            AmountType = fnmdata.SafeSubstring(12, 3).Trim();
            Amount = fnmdata.SafeSubstring(15, 15).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#3
        public string AmountType;
        //040
        //#13#3
        public string Amount;
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            DependentsAge = fnmdata.SafeSubstring(12, 3).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //020
        //#13#3
        public string DependentsAge;
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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();

            _declarationsets.ToList().ForEach(t =>
            {
                t.Value = fnmdata.SafeSubstring((t.Position.GetValueOrDefault() - 1), t.Length.GetValueOrDefault());
            });
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        public List<DeclarationSet> DeclarationSets
        {
            get
            {
                return _declarationsets;
            }
        }

        private List<DeclarationSet> _declarationsets = new List<DeclarationSet> {

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
        public string SSN;

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
            SSN = fnmdata.SafeSubstring(3, 9).Trim();
            WishToFurninsh = fnmdata.SafeSubstring(12, 1).Trim();
            Ethnicity = fnmdata.SafeSubstring(13, 1).Trim();
            Filter = fnmdata.SafeSubstring(14, 30).Trim();
            SEX = fnmdata.SafeSubstring(44, 1).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //020
        //#4#9
        public string SSN;
        //030
        //#13#1
        public string WishToFurninsh;
        /**"1108 Ethnicity Code:
        1-Hispanic or Latino
        2-Not Hispanic or Latino
        3-Information not provided by applicant in mail, internet or telephone application
        4-Not applicable"
         */
        //040
        //#14#1
        public string Ethnicity;
        //050
        //#15#30
        public string Filter;
        /**
         * "F = Female
        M = Male
        I = Information not provided by applicant in mail, internet or telephone application
        N = Not applicable
        "*/
        //060
        //#45#1
        public string SEX;
    }

    public class EnvelopeHeader
    {

        public string id
        {
            get
            {
                return "EH";
            }
        }
        public EnvelopeHeader()
        {

        }
        public EnvelopeHeader(string fnmdata)
        {
            InstitutionId = fnmdata.SafeSubstring(3, 6).Trim();
            InstitutionName = fnmdata.SafeSubstring(9, 25).Trim();
            Date = fnmdata.SafeSubstring(34, 11).Trim();
            EnvelopeControlName = fnmdata.SafeSubstring(45, 9).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        //#020
        //#4#6
        public string InstitutionId;
        //#030
        //#10#25
        public string InstitutionName;
        //#040
        //#35#11
        //CCYYMMDD
        public string Date;
        //#040
        //#46#9
        public string EnvelopeControlName;
    }

    public class TransactionHeader
    {
        public string id
        {
            get
            {
                return "TH";
            }
        }

        public TransactionHeader()
        {

        }

        public TransactionHeader(string fnmdata)
        {
            TransactionId = fnmdata.SafeSubstring(3, 11).Trim();
            TransactionControlName = fnmdata.SafeSubstring(14, 9).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        //#020
        //#4#11
        public string TransactionId;
        //#040
        //#15#9
        public string TransactionControlName;
    }

    public class ProcessingInfo
    {

        public ProcessingInfo()
        {

        }
        public string id
        {
            get
            {
                return "TPI";
            }
        }
        public ProcessingInfo(string fnmdata)
        {
            VersionID = fnmdata.SafeSubstring(3, 5).Trim();
            IdentifierTypeCode = fnmdata.SafeSubstring(7, 2).Trim();
            Identifier = fnmdata.SafeSubstring(9, 30).Trim();
            ImportActionIndicator = fnmdata.SafeSubstring(39, 1).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        //#020
        //#4#5
        public string VersionID;
        //#030
        //#8#2
        public string IdentifierTypeCode;
        //#040
        //#10#30
        public string Identifier;
        //#050
        //#40#1
        public string ImportActionIndicator;


    }

    public class FileIdentification
    {
        public FileIdentification()
        {

        }

        public string id
        {
            get
            {
                return "000";
            }
        }
        public FileIdentification(string fnmdata)
        {
            FileType = fnmdata.SafeSubstring(3, 3).Trim();
            FileVersionID = fnmdata.SafeSubstring(6, 5).Trim();
            ExportVersionIndicator = fnmdata.SafeSubstring(10, 1).Trim();
        }
        internal string toFNMString()
        {
            return string.Empty;
        }
        //#020
        //#3#3
        public string FileType;
        //#030
        //#7#5
        public string FileVersionID;
        //#040
        //#11#1
        public string ExportVersionIndicator;

    }

    public class FormTop
    {
        public FormTop()
        {

        }
        public string id
        {
            get
            {
                return "00A";
            }
        }
        public FormTop(string fnmdata)
        {
            UseAssetForQualification = fnmdata.SafeSubstring(3, 1).Trim();
            NotUseAssetForQualification = fnmdata.SafeSubstring(4, 1).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        //#020
        //#4#1
        public string UseAssetForQualification;
        //#030
        //#5#1
        public string NotUseAssetForQualification;
    }

    public class TypeAndTerms
    {
        public TypeAndTerms()
        {

        }


        public TypeAndTerms(string fnmdata)
        {
            MortgageAppliedFor = fnmdata.SafeSubstring(3, 2).Trim();
            MortgageAppliedForOther = fnmdata.SafeSubstring(5, 80).Trim();
            AgencyCaseNumber = fnmdata.SafeSubstring(85, 30).Trim();
            CardNumber = fnmdata.SafeSubstring(115, 15).Trim();
            LoanAmount = fnmdata.SafeSubstring(130, 15).Trim();
            InterestRate = fnmdata.SafeSubstring(145, 7).Trim();
            NoOfMonths = fnmdata.SafeSubstring(152, 3).Trim();
            AmortizationType = fnmdata.SafeSubstring(155, 2).Trim();
            AmortizationTypeOther = fnmdata.SafeSubstring(157, 80).Trim();
            ARMTextualDescription = fnmdata.SafeSubstring(237, 80).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
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
        public string MortgageAppliedFor;
        //#030
        //#6#80
        public string MortgageAppliedForOther;
        //#040
        //#86#30
        public string AgencyCaseNumber;
        //#050
        //#116#15
        public string CardNumber;
        //#060
        //#131#15
        public string LoanAmount;
        //#070
        //#146#7
        public string InterestRate;
        //#080
        //#153#3
        public string NoOfMonths;
        /**"EDI Data Element 1085:
        01 = Adjustable Rate
        04 = GEM
        05 = Fixed Rate
        06 = GPM
        13 = Other"
         */
        //#090
        //#156#2
        public string AmortizationType;
        //#100
        //#158#80
        public string AmortizationTypeOther;
        //#110
        //#238#80
        public string ARMTextualDescription;
    }

    public class Property
    {
        public Property()
        {

        }
        public Property(string fnmdata)
        {
            StreetAddress = fnmdata.SafeSubstring(3, 50).Trim();
            City = fnmdata.SafeSubstring(53, 35).Trim();
            State = fnmdata.SafeSubstring(88, 2).Trim();
            ZipCode = fnmdata.SafeSubstring(90, 5).Trim();
            ZipPlusFour = fnmdata.SafeSubstring(95, 4).Trim();
            NoofUnits = fnmdata.SafeSubstring(99, 3).Trim();
            SubjectPropertyCode = fnmdata.SafeSubstring(102, 2).Trim();
            SubjectProperty = fnmdata.SafeSubstring(104, 80).Trim();
            YearBuilt = fnmdata.SafeSubstring(184, 4).Trim();
        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        //#020
        //#4#50
        public string StreetAddress;
        //#030
        //#54#35
        public string City;
        //#040
        //#89#2
        public string State;
        //#050
        //#91#5
        public string ZipCode;
        //#060
        //#96#4
        public string ZipPlusFour;
        //#070
        //#100#3
        public string NoofUnits;
        //#080
        //#103#2
        public string SubjectPropertyCode;
        //#090
        //#105#80
        public string SubjectProperty;
        //#090
        //#185#4
        public string YearBuilt;
    }

    public class PropertyAddress
    {
        public PropertyAddress()
        {

        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        public string id
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
            HouseNumber = fnmdata.SafeSubstring(3, 11).Trim();
            StreetName = fnmdata.SafeSubstring(14, 40).Trim();
            UnitNumber = fnmdata.SafeSubstring(55, 11).Trim();
        }
        //#0220
        //#4#11
        public string HouseNumber;
        //#030
        //#15#40
        public string StreetName;
        //#040
        //#55#11
        public string UnitNumber;

    }

    public class PurposeOfLoan
    {
        public PurposeOfLoan()
        {

        }

        internal string toFNMString()
        {
            return string.Empty;
        }

        public string id
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
            FutureUse = fnmdata.SafeSubstring(3, 2).Trim();
            PurposeofLoan = fnmdata.SafeSubstring(5, 2).Trim();
            PurposeofLoanOther = fnmdata.SafeSubstring(7, 80).Trim();
            ResidenceType = fnmdata.SafeSubstring(87, 1).Trim();
            TitleManner = fnmdata.SafeSubstring(88, 60).Trim();
            EstateHeldIn = fnmdata.SafeSubstring(148, 1).Trim();
            LeasholdExpirationDate = fnmdata.SafeSubstring(149, 8).Trim();
        }
        //020
        //UnUsed
        //#4#2
        public string FutureUse;
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
        public string PurposeofLoan;
        //040
        //#8#80
        public string PurposeofLoanOther;
        /**
        "EDI Element 1070:
        1 = Primary Residence
        2 = Secondary Residence
        D = Investment Property"
        */
        //050
        //#88#1
        public string ResidenceType;
        //060
        //#89#60
        public string TitleManner;
        /**
         * "Fannie Mae Property Rights Codes:
        1- Fee Simple
        2 – Leasehold"
         */
        //070
        //#149#1
        public string EstateHeldIn;
        //080
        //#150#8
        //CCYYMMDD
        public string LeasholdExpirationDate;
    }

    public class TitleHolder
    {
        public TitleHolder()
        {

        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        public string id
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
            TitelHolder = fnmdata.SafeSubstring(3, 60);
        }
        //020
        //#4#60
        public string TitelHolder;
    }

    public class DetailsOfTransaction
    {
        public DetailsOfTransaction()
        {

        }
        internal string toFNMString()
        {
            return string.Empty;
        }

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
            PurchasePrice = fnmdata.SafeSubstring(3, 15).Trim();
            Alterations = fnmdata.SafeSubstring(18, 15).Trim();
            Land = fnmdata.SafeSubstring(33, 15).Trim();
            Refinane = fnmdata.SafeSubstring(48, 15).Trim();
            EstimatedPrePaid = fnmdata.SafeSubstring(63, 15).Trim();
            ExtimatedClosinfCosts = fnmdata.SafeSubstring(78, 15).Trim();
            FundingFee = fnmdata.SafeSubstring(93, 15).Trim();
            Discount = fnmdata.SafeSubstring(108, 15).Trim();
            SubordinateFinancing = fnmdata.SafeSubstring(123, 15).Trim();
            SellerClosingCosts = fnmdata.SafeSubstring(139, 15).Trim();
            FundingFeeFinanced = fnmdata.SafeSubstring(154, 15).Trim();
        }
        //020
        //#4#15
        public string PurchasePrice;
        //030
        //#19#15
        public string Alterations;
        //040
        //#34#15
        public string Land;
        //050
        //#49#15
        public string Refinane;
        //060
        //#64#15
        public string EstimatedPrePaid;
        //070
        //#79#15
        public string ExtimatedClosinfCosts;
        //080
        //#94#15
        public string FundingFee;
        //090
        //#109#15
        public string Discount;
        //100
        //#124#15
        public string SubordinateFinancing;
        //110
        //#139#15
        public string SellerClosingCosts;
        //120
        //#154#15
        public string FundingFeeFinanced;
    }

    public class RefinanceData
    {
        public RefinanceData()
        {

        }

        internal string toFNMString()
        {
            return string.Empty;
        }
        public string id
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
            YearsLotRequired = fnmdata.SafeSubstring(3, 4).Trim();
            OriginalCosts = fnmdata.SafeSubstring(7, 15).Trim();
            AmountExistingLiens = fnmdata.SafeSubstring(22, 15).Trim();
            PresentValueofLot = fnmdata.SafeSubstring(37, 15).Trim();
            CostofImprovements = fnmdata.SafeSubstring(52, 15).Trim();
            PurposeofRefinance = fnmdata.SafeSubstring(67, 2).Trim();
            DescribeImprovements = fnmdata.SafeSubstring(69, 80).Trim();
            IsMade = fnmdata.SafeSubstring(149, 1).Trim();
            Cost = fnmdata.SafeSubstring(150, 15).Trim();
        }
        //020
        //#4#4
        public string YearsLotRequired;
        //030
        //#8#15
        public string OriginalCosts;
        //040
        //#23#15
        //Z(12).Z(2)
        public string AmountExistingLiens;
        //050
        //#38#15
        //Z(12).Z(2)
        public string PresentValueofLot;
        //060
        //#53#15
        //Z(12).Z(2)
        public string CostofImprovements;
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
        public string PurposeofRefinance;
        //080
        //#70#80
        public string DescribeImprovements;
        //090
        //#150#1
        public string IsMade;
        //100
        //#151#15
        //Z(12).Z(2)
        public string Cost;
    }

    public class DownPayment
    {
        public DownPayment()
        {

        }
        internal string toFNMString()
        {
            return string.Empty;
        }
        public string id
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
            Type = fnmdata.SafeSubstring(3, 2).Trim();
            Amount = fnmdata.SafeSubstring(5, 15).Trim();
            Explanation = fnmdata.SafeSubstring(20, 80).Trim();
        }
        //020
        //#4#2
        public string Type;
        //030
        //#6#15
        public string Amount;
        //040
        //#21#80
        public string Explanation;
    }

    public class OtherCredit
    {
        public OtherCredit()
        {

        }
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

        internal string toFNMString()
        {
            return string.Empty;
        }

        public OtherCredit(string fnmdata)
        {
            CreditType = fnmdata.SafeSubstring(3, 2).Trim();
            Amount = fnmdata.SafeSubstring(5, 15).Trim();
        }
        //020
        //#4#2
        public string CreditType;
        //030
        //#6#15
        public string Amount;
    }
}
