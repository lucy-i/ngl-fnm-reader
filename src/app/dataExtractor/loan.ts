
export class Loan {
    LoanApplication: LoanApplication;
    constructor(fnmString: string[]) {
        this.LoanApplication = new LoanApplication(fnmString);
    }
    private reversefnmString: string[];
    public toFNMString(): string {
        this.reversefnmString = [];
        ;
        this.reversefnmString = this.reversefnmString.concat(this.LoanApplication.toFNMStringArray());
        return this.reversefnmString.join("\r\n");
    }
}

export class LoanApplication {
    get childArrays(): ChildProperty[] {
        return [
            { Name: "EnvelopeHeader", Id: "EH" },
            { Name: "TransactionHeader", Id: "TH" },
            { Name: "ProcessingInfo", Id: "TPI" },
            { Name: "FileIdentification", Id: "000" },
            { Name: "FormTop", Id: "00A" },
            { Name: "TypeAndTerms", Id: "01A" },
            { Name: "Property", Id: "02A" },
            { Name: "PropertyAddress", Id: "PAI" },
            { Name: "PurposeOfLoan", Id: "02B" },
            { Name: "TitleHolder", Id: "02C" },
            { Name: "RefinanceData", Id: "02D" },
            { Name: "DownPayment", Id: "02E" },
            //
            { Name: "DetailsOfTransaction", Id: "07A" },
            { Name: "OtherCredits", Id: "07B" },

        ];
    }
    //#region
    constructor(fnmString: string[]) {
        this.Applicants = [];
        fnmString.filter(t => t.indexOf(Applicant.Id) == 0).forEach(t => {
            let dd = new Applicant(t);
            dd.setData(fnmString);
            this.Applicants.push(dd);
        });
        this.setData(fnmString);
    }

    toFNMStringArray(): string[] {
        let reversefnmString = [];
        this.Applicants.forEach(element => {
            reversefnmString = reversefnmString.concat(element.toFNMStringArray());
        });
        return reversefnmString;
    }
    public Applicants: Applicant[];

    public EnvelopeHeader: EnvelopeHeader;
    public TransactionHeader: TransactionHeader;
    public ProcessingInfo: ProcessingInfo;
    public FileIdentification: FileIdentification;
    public FormTop: FormTop;
    public TypeAndTerms: TypeAndTerms;
    public Property: Property;
    public PropertyAddress: PropertyAddress;
    public PurposeOfLoan: PurposeOfLoan;
    public TitleHolder: TitleHolder;
    public DetailsOfTransaction: DetailsOfTransaction;
    public RefinanceData: RefinanceData;
    public DownPayment: DownPayment;
    public OtherCredits: OtherCredit[];
    //#endregion
    //#region
    setData(fnmString: string[]) {
        this.childArrays.forEach(c => {
            fnmString.filter(t => t.indexOf(c.Id) == 0).forEach(f => {
                if (c.IsArray) {
                    if (!this[c.Name])
                        this[c.Name] = [];
                    this[c.Name].push(this.getInstancefor(c.Name, f));
                }
                else
                    this[c.Name] = this.getInstancefor(c.Name, f);
            });
        });
    }
    //#endregion
    private getInstancefor(key, rowdata: string) {
        switch (key) {
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
            case "RefinanceData": return new RefinanceData(rowdata);
            case "DownPayment": return new DownPayment(rowdata);
            case "HELOC": return new HELOC(rowdata);
            case "TitleHolder": return new TitleHolder(rowdata);
            case "DetailsOfTransaction": return new DetailsOfTransaction(rowdata);
            case "OtherCredits": return new OtherCredit(rowdata);

        }
        return null;
    }
}

export class EnvelopeHeader {

    get id() {
        return 'EH';
    }
    constructor(fnmdata: string) {
        this.InstitutionId = fnmdata.substr(3, 6).trim();
        this.InstitutionName = fnmdata.substr(9, 25).trim();
        this.Date = fnmdata.substr(34, 11).trim().toMMDDYYYY();
        this.EnvelopeControlName = fnmdata.substr(45, 9).trim();
    }
    //#020
    //#4#6
    InstitutionId: string;
    //#030
    //#10#25
    InstitutionName: string;
    //#040
    //#35#11
    //CCYYMMDD
    Date: string;
    //#040
    //#46#9
    EnvelopeControlName: string;
}

export class TransactionHeader {
    get id() {
        return 'TH';
    }
    constructor(fnmdata: string) {
        this.TransactionId = fnmdata.substr(3, 11).trim();
        this.TransactionControlName = fnmdata.substr(14, 9).trim();
    }
    //#020
    //#4#11
    TransactionId: string;
    //#040
    //#15#9
    TransactionControlName: string;
}

export class ProcessingInfo {

    get id() {
        return "TPI";
    }
    constructor(fnmdata: string) {
        this.VersionID = fnmdata.substr(3, 5).trim();
        this.IdentifierTypeCode = fnmdata.substr(7, 2).trim();
        this.Identifier = fnmdata.substr(9, 30).trim();
        this.ImportActionIndicator = fnmdata.substr(39, 1).trim();
    }
    //#020
    //#4#5
    VersionID: string;
    //#030
    //#8#2
    IdentifierTypeCode: string;
    //#040
    //#10#30
    Identifier: string;
    //#050
    //#40#1
    ImportActionIndicator: string;


}
export class AdditionalDataSegment {
    get id() {
        return "ADS";
    }
    public get length(): number {
        return 88;
    }
    constructor(fnmdata: string) {
        this.LoanOrginatorId = fnmdata.substr(3, 35).trim();
        this.Value = fnmdata.substr(38, 50).trim();

    }
    //Must equal: LoanOriginatorID
    //020
    //#4#35
    LoanOrginatorId: string;
    //030
    //#39#50
    Value: string;

}
export class FileIdentification {
    get id() {
        return "000"
    }
    public get length(): number {
        return 11;
    }

    constructor(fnmdata: string) {
        this.FileType = fnmdata.substr(3, 3).trim();
        this.FileVersionID = fnmdata.substr(6, 5).trim();
        this.ExportVersionIndicator = fnmdata.substr(10, 1).trim();
    }
    //70 = Additional Case Data
    //#020
    //#3#3
    FileType: string;
    //3.20
    //#030
    //#7#5
    FileVersionID: string;
    //#040
    //#11#1
    ExportVersionIndicator: string;

}
export class FormTop {
    get id() {
        return "00A"
    }
    constructor(fnmdata: string) {
        this.UseAssetForQualification = fnmdata.substr(3, 1).trim();
        this.NotUseAssetForQualification = fnmdata.substr(4, 1).trim();
    }
    //#020
    //#4#1
    UseAssetForQualification: string;
    //#030
    //#5#1
    NotUseAssetForQualification: string;
}
export class TypeAndTerms {
    constructor(fnmdata: string) {
        this.MortgageAppliedFor = fnmdata.substr(3, 2).trim();
        this.MortgageAppliedForOther = fnmdata.substr(5, 80).trim();
        this.AgencyCaseNumber = fnmdata.substr(85, 30).trim();
        this.CardNumber = fnmdata.substr(115, 15).trim();
        this.LoanAmount = fnmdata.substr(130, 15).trim();
        this.InterestRate = fnmdata.substr(145, 7).trim();
        this.NoOfMonths = fnmdata.substr(152, 3).trim();
        this.AmortizationType = fnmdata.substr(155, 2).trim();
        this.AmortizationTypeOther = fnmdata.substr(157, 80).trim();
        this.ARMTextualDescription = fnmdata.substr(237, 80).trim();
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
    MortgageAppliedFor: string;
    //#030
    //#6#80
    MortgageAppliedForOther: string;
    //#040
    //#86#30
    AgencyCaseNumber: string;
    //#050
    //#116#15
    CardNumber: string;
    //#060
    //#131#15
    LoanAmount: string;
    //#070
    //#146#7
    InterestRate: string;
    //#080
    //#153#3
    NoOfMonths: string;
    /**"EDI Data Element 1085:
    01 = Adjustable Rate
    04 = GEM
    05 = Fixed Rate
    06 = GPM
    13 = Other"
     */
    //#090
    //#156#2
    AmortizationType: string;
    //#100
    //#158#80
    AmortizationTypeOther: string;
    //#110
    //#238#80
    ARMTextualDescription: string;
}
export class Property {
    constructor(fnmdata: string) {
        this.StreetAddress = fnmdata.substr(3, 50).trim();
        this.City = fnmdata.substr(53, 35).trim();
        this.State = fnmdata.substr(88, 2).trim();
        this.ZipCode = fnmdata.substr(90, 5).trim();
        this.ZipPlusFour = fnmdata.substr(95, 4).trim();
        this.NoofUnits = fnmdata.substr(99, 3).trim();
        this.SubjectPropertyCode = fnmdata.substr(102, 2).trim();
        this.SubjectProperty = fnmdata.substr(104, 80).trim();
        this.YearBuilt = fnmdata.substr(184, 4).trim();
    }
    //#020
    //#4#50
    StreetAddress: string;
    //#030
    //#54#35
    City: string;
    //#040
    //#89#2
    State: string;
    //#050
    //#91#5
    ZipCode: string;
    //#060
    //#96#4
    ZipPlusFour: string;
    //#070
    //#100#3
    NoofUnits: string;
    //#080
    //#103#2
    SubjectPropertyCode: string;
    //#090
    //#105#80
    SubjectProperty: string;
    //#090
    //#185#4
    YearBuilt: string;
}
export class PropertyAddress {
    get id() {
        return "PAI";
    }
    get length(): number {
        return 65
    }

    constructor(fnmdata: string) {
        this.HouseNumber = fnmdata.substr(3, 11).trim();
        this.StreetName = fnmdata.substr(14, 40).trim();
        this.UnitNumber = fnmdata.substr(55, 11).trim();
    }
    //#0220
    //#4#11
    HouseNumber: string;
    //#030
    //#15#40
    StreetName: string;
    //#040
    //#55#11
    UnitNumber: string;

}
export class PurposeOfLoan {
    get id() {
        return "02B";
    }
    get length(): number {
        return 157
    }

    constructor(fnmdata: string) {
        this.FutureUse = fnmdata.substr(3, 2).trim();
        this.PurposeofLoan = fnmdata.substr(5, 2).trim();
        this.PurposeofLoanOther = fnmdata.substr(7, 80).trim();
        this.ResidenceType = fnmdata.substr(87, 1).trim();
        this.TitleManner = fnmdata.substr(88, 60).trim();
        this.EstateHeldIn = fnmdata.substr(148, 1).trim();
        this.LeasholdExpirationDate = fnmdata.substr(149, 8).trim().toMMDDYYYY();
    }
    //020
    //UnUsed
    //#4#2
    FutureUse: string;
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
    PurposeofLoan: string;
    //040
    //#8#80
    PurposeofLoanOther: string;
    /**
    "EDI Element 1070:
    1 = Primary Residence
    2 = Secondary Residence
    D = Investment Property"
    */
    //050
    //#88#1
    ResidenceType: string;
    //060
    //#89#60
    TitleManner: string;
    /**
     * "Fannie Mae Property Rights Codes:
    1- Fee Simple
    2 – Leasehold"
     */
    //070
    //#149#1
    EstateHeldIn: string;
    //080
    //#150#8
    //CCYYMMDD
    LeasholdExpirationDate: string;
}
export class TitleHolder {
    get id() {
        return "02C";
    }

    get length(): number {
        return 63;
    }
    constructor(fnmdata: string) {
        this.TitelHolder = fnmdata.substr(3, 60)
    }
    //020
    //#4#60
    TitelHolder: string;
}

export class RefinanceData {
    get id() {
        return "02D";
    }

    get length(): number {
        return 165;
    }
    constructor(fnmdata: string) {
        this.YearsLotRequired = fnmdata.substr(3, 4).trim();
        this.OriginalCosts = fnmdata.substr(7, 15).trim();
        this.AmountExistingLiens = fnmdata.substr(22, 15).trim();
        this.PresentValueofLot = fnmdata.substr(37, 15).trim();
        this.CostofImprovements = fnmdata.substr(52, 15).trim();
        this.PurposeofRefinance = fnmdata.substr(67, 2).trim();
        this.DescribeImprovements = fnmdata.substr(69, 80).trim();
        this.IsMade = fnmdata.substr(149, 1).trim();
        this.Cost = fnmdata.substr(150, 15).trim();
    }
    toFNMString(): string {
        let fnmdata: string = '';
        fnmdata += this.id.fillString(3);
        fnmdata += this.YearsLotRequired.fillString(4);
        fnmdata += this.YearsLotRequired.fillString(4);
        fnmdata += this.YearsLotRequired.fillString(4);
        fnmdata += this.OriginalCosts.fillString(15);
        fnmdata += this.AmountExistingLiens.fillString(15);
        fnmdata += this.PresentValueofLot.fillString(15);
        fnmdata += this.CostofImprovements.fillString(15);
        fnmdata += this.PurposeofRefinance.fillString(2);
        fnmdata += this.DescribeImprovements.fillString(80);
        fnmdata += this.IsMade.fillString(1);
        fnmdata += this.Cost.fillString(15);
        return fnmdata;
    }
    //020
    //#4#4
    YearsLotRequired: string;
    //030
    //#8#15
    OriginalCosts: string;
    //040
    //#23#15
    //Z(12).Z(2)
    AmountExistingLiens: string;
    //050
    //#38#15
    //Z(12).Z(2)
    PresentValueofLot: string;
    //060
    //#53#15
    //Z(12).Z(2)
    CostofImprovements: string;
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
    PurposeofRefinance: string;
    //080
    //#70#80
    DescribeImprovements: string;
    //090
    //#150#1
    IsMade: string;
    //100
    //#151#15
    //Z(12).Z(2)
    Cost: string;
    get Total(): number {
        return parseFloat(this.PresentValueofLot) + parseFloat(this.CostofImprovements);
    };
}
export class DownPayment {
    get id() {
        return "02E";
    }

    get length(): number {
        return 100;
    }
    constructor(fnmdata: string) {
        this.Type = fnmdata.substr(3, 2).trim();
        this.Amount = fnmdata.substr(5, 15).trim();
        this.Explanation = fnmdata.substr(20, 80).trim();
    }
    //020
    //#4#2
    Type: string;
    //030
    //#6#15
    Amount: string;
    //040
    //#21#80
    Explanation: string;
}
class ChildProperty {
    Name: string;
    Id: string;
    IsArray?: boolean = false;
}
export class Applicant {
    //BW : Applicant or QZ : Co-Applicant
    public Indicator: string;
    public SSN: string;
    public FirstName: string;
    public LastName: string;
    public MiddleName: string;
    public Generation: string;
    public HomePhone: string;
    public Age: string;
    public YrsInSchool: string;
    /**"EDI Data Element 1067:
    M = Married
    S = Separated
    U = Unmarried (Single, Divorced, Widowed)"
     */
    public MartialStatus: string;
    public Dependents: string;
    /**"Y = Yes
    N = No"
     */
    public Jointly: string;
    public CrossReference: string;
    public DateofBirth: string;
    public EmailAddress;
    static get Id() {
        return "03A";
    }
    get length(): number {
        return 239;
    }
    get childArrays(): ChildProperty[] {
        return [
            //
            { Name: "DependentsAge", Id: "03B" },
            { Name: "Addresses", Id: "03C", IsArray: true },
            { Name: "CurrentEmployments", Id: "04A", IsArray: true },
            { Name: "PreviousEmployments", Id: "04B", IsArray: true },
            { Name: "HousingExpences", Id: "05H", IsArray: true },
            { Name: "Incomes", Id: "05I", IsArray: true },
            { Name: "LifeInsurance", Id: "06B" },
            { Name: "Assets", Id: "06C", IsArray: true },
            { Name: "Automobiles", Id: "06D", IsArray: true },
            { Name: "RelatedExpenses", Id: "06F", IsArray: true },
            { Name: "RealEstateOwneds", Id: "06G", IsArray: true },
            { Name: "Liabilities", Id: "06L", IsArray: true },
            { Name: "Declaration", Id: "08A" },
            { Name: "HELOC", Id: "06S" },
            { Name: "Alias", Id: "06H" },
        ];
    }


    constructor(fnmdata: string) {
        if (fnmdata) {
            this.Indicator = fnmdata.substr(3, 2).trim();
            this.SSN = fnmdata.substr(5, 9).trim();
            this.FirstName = fnmdata.substr(14, 35).trim();
            this.MiddleName = fnmdata.substr(49, 35).trim();
            this.LastName = fnmdata.substr(84, 35).trim();
            this.Generation = fnmdata.substr(119, 4).trim();
            this.HomePhone = fnmdata.substr(123, 10).trim();
            this.Age = fnmdata.substr(133, 3).trim();
            this.YrsInSchool = fnmdata.substr(136, 2).trim();
            this.MartialStatus = fnmdata.substr(138, 1).trim();
            this.Dependents = fnmdata.substr(139, 2).trim();
            this.Jointly = fnmdata.substr(141, 1).trim();
            this.CrossReference = fnmdata.substr(142, 9).trim();
            this.DateofBirth = fnmdata.substr(151, 8).trim().toMMDDYYYY();
            this.EmailAddress = fnmdata.substr(159, 80).trim();
        }
    }

    toFNMStringArray(): string[] {
        let fnmdataArray: string[] = [];
        let fnmdata: string = '';
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
        fnmdataArray.push(fnmdata);
        fnmdataArray = fnmdataArray.concat(this.getData());
        return fnmdataArray;
    }

    public Addresses: Address[];
    public CurrentEmployments: CurrentEmployment[];
    public PreviousEmployments: PreviousEmployment[];
    public HousingExpences: HousingExpense[];
    public Incomes: Income[];
    public LifeInsurance: LifeInsurance;
    public Assets: Asset[];
    public Automobiles: Automobile[];
    public RelatedExpenses: RelatedExpense[];
    public RealEstateOwneds: RealEstateOwned[];
    public Liabilities: Liability[];
    public Alias: Alias;
    public HELOC: HELOC;
    public DependentsAge: DependentsAge;
    public Declaration: Declaration;
    public GovernmentMonitoring: GovernmentMonitoring;

    getData(): string[] {
        let fnmString: string[] = [];
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                let element: any = this[key];
                if (Array.isArray(element)) {
                    element.forEach(childEle => {
                        if (typeof childEle.toFNMString === "function")
                            fnmString.push(childEle.toFNMString());
                    });
                }
                else if (typeof element === "object") {
                    if (typeof element.toFNMString === "function")
                        fnmString.push(element.toFNMString());
                }
            }
        }
        return fnmString;
    }
    setData(fnmString: string[]) {
        this.childArrays.forEach(c => {
            fnmString.filter(t => t.indexOf(c.Id) == 0 && t.indexOf(this.SSN) == 3).forEach(f => {
                if (c.IsArray) {
                    if (!this[c.Name])
                        this[c.Name] = [];
                    this[c.Name].push(this.getInstancefor(c.Name, f));
                }
                else
                    this[c.Name] = this.getInstancefor(c.Name, f);
            });
        });
        this.childArrays.filter(t => this[t.Name] == undefined).forEach(c => {
            if (c.IsArray) {
                if (!this[c.Name])
                    this[c.Name] = [];
                this[c.Name].push(this.getInstancefor(c.Name, c.Id));
            }
            else
                this[c.Name] = this.getInstancefor(c.Name, c.Id);
        });
    }

    private getInstancefor(key, rowdata: string) {
        switch (key) {
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
            case "DependentsAge": return new DependentsAge(rowdata);


        }
        return null;
    }
}

export class DependentsAge {

    public get id(): string {
        return "03B";
    }

    public get length(): number {
        return 15;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.DependentsAge = fnmdata.substr(12, 3).trim();
    }
    //020
    //#4#9
    SSN: string;
    //020
    //#13#3
    DependentsAge: string;
}
export class Address {
    public get id(): string {
        return "03C";
    }

    public get length(): number {
        return 165;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.AddressType = fnmdata.substr(12, 2).trim();
        this.StreetAddress = fnmdata.substr(14, 50).trim();
        this.City = fnmdata.substr(64, 35).trim();
        this.State = fnmdata.substr(99, 2).trim();
        this.ZipCode = fnmdata.substr(101, 5).trim();
        this.ZipPlusFour = fnmdata.substr(106, 4).trim();
        this.UsageType = fnmdata.substr(110, 1).trim();
        this.NoofYears = fnmdata.substr(111, 2).trim();
        this.NoofMonths = fnmdata.substr(114, 2).trim();
        this.Country = fnmdata.substr(115, 50).trim();
    }
    toFNMString(): string {
        let fnmdata: string="";
        fnmdata += this.id.fillString(3);
        fnmdata += this.SSN.fillString(9);
        fnmdata += this.AddressType.fillString(2);
        fnmdata += this.StreetAddress.fillString(50);
        fnmdata += this.City.fillString(35);
        fnmdata += this.State.fillString(2);
        fnmdata += this.ZipCode.fillString(5);
        fnmdata += this.ZipPlusFour.fillString(4);
        fnmdata += this.UsageType.fillString(1);
        fnmdata += this.NoofYears.fillString(2);
        fnmdata += this.NoofMonths.fillString(2);
        fnmdata += this.Country.fillString(50);
        return fnmdata;
    }
    //020
    //#4#9
    SSN: string;
    /**
     * "
    F4 = Former Residence
    ZG = Present Address
    BH = Mailing Address"
     */
    //030
    //#13#2
    AddressType: string;
    //040
    //#15#50
    StreetAddress: string;
    //050
    //#65#35
    City: string;
    //060
    //#100#2
    State: string;
    //070
    //#102#5
    ZipCode: string;
    //080
    //#107#4
    ZipPlusFour: string;
    /**
     * "EDI Data Element 1078:
    X = Living Rent Free
    R = Rent
    O = Own"
     */
    //090
    //#111#1
    UsageType: string;
    //100
    //#112#2
    NoofYears: string;
    //110
    //#114#2
    NoofMonths: string;
    //120
    //#116#50
    Country: string;
}
export class CurrentEmployment {
    public get id(): string {
        return "04A";
    }

    public get length(): number {
        return 170;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.EmployerName = fnmdata.substr(12, 35).trim();
        this.StrretAddress = fnmdata.substr(47, 35).trim();
        this.City = fnmdata.substr(82, 35).trim();
        this.State = fnmdata.substr(117, 2).trim();
        this.ZipCode = fnmdata.substr(119, 5).trim();
        this.ZipPlusFour = fnmdata.substr(124, 4).trim();
        this.IsSelfEmployed = fnmdata.substr(128, 1).trim();
        this.YearsOnJob = fnmdata.substr(129, 2).trim();
        this.MonthsOnJob = fnmdata.substr(131, 2).trim();
        this.YersEmployedInThisLine = fnmdata.substr(133, 2).trim();
        this.Position = fnmdata.substr(135, 25).trim();
        this.BusinessPhone = fnmdata.substr(160, 10).trim();
    }
    toFNMString(): string {
        let fnmdata: string = "";
        fnmdata += this.id.fillString(3);
        fnmdata += this.SSN.fillString(9);
        fnmdata += this.EmployerName.fillString(35);
        fnmdata += this.StrretAddress.fillString(35);
        fnmdata += this.City.fillString(35);
        fnmdata += this.State.fillString(2);
        fnmdata += this.ZipCode.fillString(5);
        fnmdata += this.ZipPlusFour.fillString(4);
        fnmdata += this.IsSelfEmployed.fillString(1);
        fnmdata += this.YearsOnJob.fillString(2);
        fnmdata += this.MonthsOnJob.fillString(2);
        fnmdata += this.YersEmployedInThisLine.fillString(2);
        fnmdata += this.Position.fillString(25);
        fnmdata += this.BusinessPhone.fillString(10);
        return fnmdata;
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#35
    EmployerName: string;
    //040
    //#48#35
    StrretAddress: string;
    //050
    //#83#35
    City: string;
    //060
    //#118#2
    State: string;
    //070
    //#120#5
    ZipCode: string;
    //080
    //#125#4
    ZipPlusFour: string;
    //090
    //#129#1
    IsSelfEmployed: string;
    //100
    //#130#2
    YearsOnJob: string;
    //110
    //#132#2
    MonthsOnJob: string;
    //120
    //#134#2
    YersEmployedInThisLine: string;
    //130
    //#136#25
    Position: string;
    //140
    //#161#10
    BusinessPhone: string;
}
export class PreviousEmployment {
    public get id(): string {
        return "04B";
    }

    public get length(): number {
        return 196;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.EmployerName = fnmdata.substr(12, 35).trim();
        this.StrretAddress = fnmdata.substr(47, 35).trim();
        this.City = fnmdata.substr(82, 35).trim();
        this.State = fnmdata.substr(117, 2).trim();
        this.ZipCode = fnmdata.substr(119, 5).trim();
        this.ZipPlusFour = fnmdata.substr(124, 4).trim();
        this.IsSelfEmployed = fnmdata.substr(128, 1).trim();
        this.IsCurrentEmployment = fnmdata.substr(129, 1).trim();
        this.FromDate = fnmdata.substr(130, 8).trim().toMMDDYYYY();
        this.ToDate = fnmdata.substr(138, 8).trim().toMMDDYYYY();
        this.MonthlyIncome = fnmdata.substr(146, 15).trim();
        this.Position = fnmdata.substr(161, 25).trim();
        this.BusinessPhone = fnmdata.substr(186, 10).trim();
    }
    toFNMString(): string {
        let fnmData: string='';
        fnmData += this.id.fillString(3);
        fnmData += this.SSN.fillString(9);
        fnmData += this.EmployerName.fillString(35);
        fnmData += this.StrretAddress.fillString(35);
        fnmData += this.City.fillString(35);
        fnmData += this.State.fillString(2);
        fnmData += this.ZipCode.fillString(5);
        fnmData += this.ZipPlusFour.fillString(4);
        fnmData += this.IsSelfEmployed.fillString(1);
        fnmData += this.IsCurrentEmployment.fillString(1);
        fnmData += this.FromDate.toCCMMDDYYYY().fillString(8);
        fnmData += this.ToDate.toCCMMDDYYYY().fillString(8);
        fnmData += this.MonthlyIncome.fillString(15);
        fnmData += this.Position.fillString(25);
        fnmData += this.BusinessPhone.fillString(10);
        return fnmData
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#35
    EmployerName: string;
    //040
    //#48#35
    StrretAddress: string;
    //050
    //#83#35
    City: string;
    //060
    //#118#2
    State: string;
    //070
    //#120#5
    ZipCode: string;
    //080
    //#125#4
    ZipPlusFour: string;
    //090
    //#129#1
    IsSelfEmployed: string;
    //100
    //#129#1
    IsCurrentEmployment: string;
    //110
    //#131#8
    //CCYYMMDD
    FromDate: string;
    //120
    //#139#8
    //CCYYMMDD
    ToDate: string;
    //130
    //#147#15
    //Z(12).Z(2)
    MonthlyIncome: string;
    //140
    //#162#25
    Position: string;
    //150
    //#187#10
    BusinessPhone: string;
}

export class HousingExpense {
    public get id(): string {
        return "05H";
    }

    public get length(): number {
        return 30;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.ExpenseIndicator = fnmdata.substr(12, 1).trim();
        this.PaymentTypeCode = fnmdata.substr(13, 2).trim();
        this.HousingPaymentAmount = fnmdata.substr(15, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    /**"1 = Present Housing Expense
    2 = Proposed Housing Expense"
    */
    //030
    //#13#1
    ExpenseIndicator: string;
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
    PaymentTypeCode: string;
    //050
    //#16#15
    //Format: Z(12).Z(2)
    HousingPaymentAmount: string;
    get PaymentTypeValue(): string {
        switch (this.PaymentTypeCode) {
            case "25": return 'Rent';
            case "26": return 'First Mortgage P&I';
            case "22": return 'Other Financing P&I';
            case "01": return 'Hazard Insurance';
            case "14": return 'Real Estate Taxes';
            case "02": return 'Mortgage Insurance';
            case "06": return 'Homeowner Association Dues';
            default: return 'Other';
        }
    }
    get ExpenseIndicatorValue(): string {
        switch (this.ExpenseIndicator) {
            case "1": return 'Present';
            default: return 'Proposed';
        }
    }
}
export class Income {
    public get id(): string {
        return "05I";
    }

    public get length(): number {
        return 29;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.IncomeType = fnmdata.substr(12, 2).trim();
        this.MonthlyIncome = fnmdata.substr(14, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
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
    IncomeType: string;
    //040
    //#15#15
    MonthlyIncome: string;
}
//ToDo : Find Purpose of 06A
// export class Asset {
//     public get id() : string {
//         return "06A";
//     }

//     public get length() : number {
//         return 62;
//     }

//     constructor(fnmdata: string) {
//         this.SSN = fnmdata.substr(3, 9).trim();
//         this.CashDepositeHeldBy = fnmdata.substr(12, 35).trim();
//         this.CashValue = fnmdata.substr(47, 15).trim();
//     }
//     //020
//     //#4#9
//     SSN:string;
//     //030
//     //#13#35
//     CashDepositeHeldBy:string;
//     //040
//     //#48#15
//     CashValue:string;
// }


export class LifeInsurance {
    public get id(): string {
        return "06B";
    }

    public get length(): number {
        return 72;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.AccountNumber = fnmdata.substr(12, 30).trim();
        this.CashValue = fnmdata.substr(42, 15).trim();
        this.FaceAmount = fnmdata.substr(57, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#30
    AccountNumber: string;
    //040
    //#43#15
    CashValue: string;
    //030
    //#58#15
    FaceAmount: string;
}

export class Asset {
    public get id(): string {
        return "06C";
    }

    public get length(): number {
        return 266;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.AssetType = fnmdata.substr(12, 3).trim();
        this.InstitutionName = fnmdata.substr(15, 35).trim();
        this.StreetAddress = fnmdata.substr(50, 35).trim();
        this.City = fnmdata.substr(85, 35).trim();
        this.State = fnmdata.substr(120, 2).trim();
        this.Zipcode = fnmdata.substr(122, 5).trim();
        this.ZipPlusFour = fnmdata.substr(127, 4).trim();
        this.AccountNumber = fnmdata.substr(131, 30).trim();
        this.CashValue = fnmdata.substr(161, 15).trim();
        this.NofShares = fnmdata.substr(176, 7).trim();
        this.Description = fnmdata.substr(183, 80).trim();
        this.FutureUse1 = fnmdata.substr(263, 1).trim();
        this.FutureUse2 = fnmdata.substr(264, 2).trim();
    }
    //020
    //#4#9
    SSN: string;
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
    AssetType: string;
    get AssetTypeValue() {
        switch (this.AssetType) {
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
        }
    }
    //040
    //#16#35
    InstitutionName: string;
    //050
    //#51#35
    StreetAddress: string;
    //060
    //#86#35
    City: string;
    //070
    //#121#2
    State: string;
    //080
    //#123#5
    Zipcode: string;
    //090
    //#128#4
    ZipPlusFour: string;
    //100
    //#132#30
    AccountNumber: string;
    //110
    //#162#15
    //Format:  Z(12).Z(2)
    CashValue: string;
    //120
    //#177#7
    NofShares: string;
    //130
    //#184#80
    Description: string;
    //140
    //#264#1
    FutureUse1: string;
    //150
    //#265#2
    FutureUse2: string;
}

export class Automobile {
    public get id(): string {
        return "06D";
    }

    public get length(): number {
        return 61;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.Model = fnmdata.substr(12, 3).trim();
        this.Year = fnmdata.substr(42, 4).trim();
        this.CashValue = fnmdata.substr(47, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#30
    Model: string;
    //040
    //#43#4
    Year: string;
    //050
    //#47#15
    CashValue: string;
}
export class RelatedExpense {
    public get id(): string {
        return "06F";
    }

    public get length(): number {
        return 93;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.ExpenseType = fnmdata.substr(12, 3).trim();
        this.MonthlyPayment = fnmdata.substr(15, 15).trim();
        this.LefttoPay = fnmdata.substr(30, 3).trim();
        this.OwnedTo = fnmdata.substr(33, 60).trim();
    }
    //020
    //#4#9
    SSN: string;
    /**"EDI Data Element:
    DR = Alimony
    DT = Child Support
    DV = Separate Maintenance Payment
    DZ = Job Related Expense
    EE = Other Expense Type"
     */
    //030
    //#13#3
    ExpenseType: string;
    //040
    //#16#15
    MonthlyPayment: string;
    //050
    //#31#3
    LefttoPay: string;
    //060
    //#34#60
    OwnedTo: string;
}

export class RealEstateOwned {
    public get id(): string {
        return "06G";
    }

    public get length(): number {
        return 205;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.StrretAddress = fnmdata.substr(12, 35).trim();
        this.City = fnmdata.substr(47, 35).trim();
        this.State = fnmdata.substr(82, 2).trim();
        this.Zipcode = fnmdata.substr(84, 5).trim();
        this.ZipPlusFour = fnmdata.substr(89, 4).trim();
        this.Disposition = fnmdata.substr(93, 1).trim();
        this.PropertyType = fnmdata.substr(94, 2).trim();
        this.MarketValue = fnmdata.substr(96, 15).trim();
        this.MortgageAmount = fnmdata.substr(111, 15).trim();
        this.GroissRentalIncome = fnmdata.substr(127, 15).trim();
        this.MortgagePayments = fnmdata.substr(141, 15).trim();
        this.MonthlyExpense = fnmdata.substr(156, 15).trim();
        this.NetRentalIncome = fnmdata.substr(171, 15).trim();
        this.IsCurrentResidence = fnmdata.substr(186, 1).trim();
        this.IsSubjectProperty = fnmdata.substr(187, 1).trim();
        this.AssetId = fnmdata.substr(188, 2).trim();
        this.ForFuture = fnmdata.substr(190, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#35
    StrretAddress: string;
    //040
    //#48#35
    City: string;
    //050
    //#83#2
    State: string;
    //060
    //#85#5
    Zipcode: string;
    //070
    //#90#4
    ZipPlusFour: string;
    /**"EDI Data Element 1075:
    S = Sold
    H = Retained
    P = Pending Sale
    R = Rental"
     */
    //080
    //#94#1
    Disposition: string;
    get DispositionValue(): string {
        switch (this.Disposition) {
            case "S": return "Sold";
            case "H": return "Retained";
            case "P": return "Pending Sale";
            case "R": return "Rental";
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
    PropertyType: string;
    get PropertyTypeValue(): string {
        switch (this.PropertyType) {
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
        }
    }
    //100
    //#97#15
    MarketValue: string;
    //110
    //#112#15
    MortgageAmount: string;
    //120
    //#127#15
    GroissRentalIncome: string;
    //130
    //#142#15
    MortgagePayments: string;
    //140
    //#157#15
    MonthlyExpense: string;
    //150
    //#172#15
    NetRentalIncome: string;
    /**
     * "Y = Current Residence
     * N = Not Current Residence"
     * */
    //160
    //#187#1
    IsCurrentResidence: string;
    //170
    //#188#1
    IsSubjectProperty: string;
    //180
    //#189#2
    AssetId: string;
    //190
    //#191#15
    ForFuture: string;
}

export class Alias {
    public get id(): string {
        return "06H";
    }

    public get length(): number {
        return 182;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.FirstName = fnmdata.substr(12, 35).trim();
        this.MiddleName = fnmdata.substr(47, 35).trim();
        this.LastName = fnmdata.substr(82, 35).trim();
        this.ForFuture1 = fnmdata.substr(117, 15).trim();
        this.ForFuture2 = fnmdata.substr(152, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#35
    FirstName: string;
    //040
    //#48#35
    MiddleName: string;
    //050
    //#83#35
    LastName: string;
    //060
    //#118#15
    ForFuture1: string;
    //070
    //#153#15
    ForFuture2: string;
}
export class Liability {
    public get id(): string {
        return "06L";
    }

    public get length(): number {
        return 200;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.LiabilityType = fnmdata.substr(12, 2).trim();
        this.CreditorName = fnmdata.substr(14, 35).trim();
        this.StreetAddress = fnmdata.substr(49, 35).trim();
        this.City = fnmdata.substr(84, 35).trim();
        this.State = fnmdata.substr(119, 2).trim();
        this.Zipcode = fnmdata.substr(121, 5).trim();
        this.ZipPlusFour = fnmdata.substr(126, 4).trim();
        this.AccountNumber = fnmdata.substr(130, 30).trim();
        this.MonthlyPayment = fnmdata.substr(160, 15).trim();
        this.LeftToPay = fnmdata.substr(175, 3).trim();
        this.UnpaidBalance = fnmdata.substr(178, 15).trim();
        this.IsPriorToClosing = fnmdata.substr(193, 1).trim();
        this.AssetId = fnmdata.substr(194, 2).trim();
        this.IsSubordinate = fnmdata.substr(196, 1).trim();
        this.IsOmitted = fnmdata.substr(197, 1).trim();
        this.IsSubjectProperty = fnmdata.substr(198, 1).trim();
        this.IsRentalProperty = fnmdata.substr(199, 1).trim();
    }
    //020
    //#4#9
    SSN: string;
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
    LiabilityType: string;
    get LiabilityTypeValue(): string {
        switch (this.LiabilityType) {
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
    //040
    //#15#35
    CreditorName: string;
    //050
    //#50#35
    StreetAddress: string;
    //060
    //#85#35
    City: string;
    //070
    //#120#2
    State: string;
    //080
    //#122#5
    Zipcode: string;
    //090
    //#127#4
    ZipPlusFour: string;
    //100
    //#131#30
    AccountNumber: string;
    //110
    //#161#15
    MonthlyPayment: string;
    //120
    //#176#3
    LeftToPay: string;
    //130
    //#179#15
    UnpaidBalance: string;
    //140
    //#194#1
    IsPriorToClosing: string;
    //150
    //#195#2
    AssetId: string;
    //160
    //#197#1
    IsSubordinate: string;
    //170
    //#198#1
    IsOmitted: string;
    //180
    //#199#1
    IsSubjectProperty: string;
    //190
    //#200#1
    IsRentalProperty: string;
}
export class HELOC {
    public get id(): string {
        return "06S";
    }

    public get length(): number {
        return 30;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.AmountType = fnmdata.substr(12, 3).trim();
        this.Amount = fnmdata.substr(15, 15).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#3
    AmountType: string;
    //040
    //#13#3
    Amount: string;
}
export class DetailsOfTransaction {
    public get id(): string {
        return "07A";
    }

    public get length(): number {
        return 168;
    }

    constructor(fnmdata: string) {
        this.PurchasePrice = fnmdata.substr(3, 15).trim();
        this.Alterations = fnmdata.substr(18, 15).trim();
        this.Land = fnmdata.substr(33, 15).trim();
        this.Refinane = fnmdata.substr(48, 15).trim();
        this.EstimatedPrePaid = fnmdata.substr(63, 15).trim();
        this.ExtimatedClosinfCosts = fnmdata.substr(78, 15).trim();
        this.FundingFee = fnmdata.substr(93, 15).trim();
        this.Discount = fnmdata.substr(108, 15).trim();
        this.SubordinateFinancing = fnmdata.substr(123, 15).trim();
        this.SellerClosingCosts = fnmdata.substr(139, 15).trim();
        this.FundingFeeFinanced = fnmdata.substr(154, 15).trim();
    }
    //020
    //#4#15
    PurchasePrice: string;
    //030
    //#19#15
    Alterations: string;
    //040
    //#34#15
    Land: string;
    //050
    //#49#15
    Refinane: string;
    //060
    //#64#15
    EstimatedPrePaid: string;
    //070
    //#79#15
    ExtimatedClosinfCosts: string;
    //080
    //#94#15
    FundingFee: string;
    //090
    //#109#15
    Discount: string;
    //100
    //#124#15
    SubordinateFinancing: string;
    //110
    //#139#15
    SellerClosingCosts: string;
    //120
    //#154#15
    FundingFeeFinanced: string;
}
export class OtherCredit {
    public get id(): string {
        return "07B";
    }

    public get length(): number {
        return 20;
    }

    constructor(fnmdata: string) {
        this.CreditType = fnmdata.substr(3, 2).trim();
        this.Amount = fnmdata.substr(5, 15).trim();
    }
    /**Fannie Mae data element Other Credit Type Code:
     01 = Cash Deposit on sales contract
     02 = Seller Credit
     03 = Lender Credit
     04 = Relocation Funds
     05 = Employer Assisted Housing
     06 = Lease Purchase Fund
     07 = Other
     08 = Borrower Paid Fees
     09 = Sweat Equity*/
    //020
    //#4#2
    public CreditType: string;
    //030
    //#6#15
    public Amount: string;
}
export class DeclarationSet {

    constructor(label: string, value: string) {
        this.Label = label;
        this.Value = value;
    }
    Label: string;
    Value?: string;
    Position?: number;
    Length?: number = 1
}
export class Declaration {
    public get id(): string {
        return "08A";
    }

    public get length(): number {
        return 28;
    }

    private get _declarationsets(): DeclarationSet[] {
        return [{
            Label: "a. Are there any outstanding judgments against you?",
            Position: 13,
            Length: 1
        }, {
            Label: "b. Have you been declared bankrupt within the past 7 years?",
            Position: 14,
            Length: 1
        }, {
            Label: "c. Have you had property foreclosed upon or given title or deed in lieu thereof in the last 7 years?",
            Position: 15,
            Length: 1
        }, {
            Label: "d. Are you a party to a lawsuit?",
            Position: 16,
            Length: 1
        }, {
            Label: "e. Have you directly or indirectly been obligated on any loan…",
            Position: 17,
            Length: 1
        }, {
            Label: "f. Are you presently delinquent or in default on any Federal debt…",
            Position: 18,
            Length: 1
        }, {
            Label: "g. Are you obligated to pay alimony child support or separate maintenance?",
            Position: 19,
            Length: 1
        }, {
            Label: "h. Is any part of the down payment borrowed?",
            Position: 20,
            Length: 1
        }
            , {
            Label: "i. Are you a co-maker or",
            Position: 21,
            Length: 1
        }
            , {
            Label: "j. Are you a U.S. citizen?",
            Position: 22,
            Length: 2
        }
            , {
            Label: "k. Are you a permanent resident alien?",
            Position: 22,
            Length: 2
        }
            , {
            Label: "l. Do you intend to occupy…",
            Position: 24,
            Length: 1
        }
            , {
            Label: "m. Have you had an ownership interest…",
            Position: 25,
            Length: 1
        }
            , {
            Label: "m. (1) What type of property…",
            Position: 26,
            Length: 1
        }, {
            Label: "m. (2) How did you hold title…",
            Position: 27,
            Length: 2
        }];
    }
    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.DeclarationSets = [];
        this._declarationsets.forEach(t => {
            this.DeclarationSets.push(new DeclarationSet(t.Label, fnmdata.substr(t.Position - 1, t.Length)));
        });
    }
    DeclarationSets: DeclarationSet[];
    //020
    //#4#9
    SSN: string;

}
export class DeclarationExplanation {
    public get id(): string {
        return "08B";
    }

    public get length(): number {
        return 269;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.DeclarationType = fnmdata.substr(12, 2).trim();
        this.DeclarationExplanation = fnmdata.substr(14, 255).trim();
    }
    //020
    //#4#9
    SSN: string;
    /**"EDI Data Element 1321:
    91 = Outstanding Judgments
    92 = Declared Bankruptcy in past 7 years
    93 = Foreclosure or deed in lieu in past 7 years, Direct/Indirect Foreclosed Property in the past 7 years
    94 = Party to Lawsuit
    95 = Obligated on a loan foreclosed, or deed in lieu of judgment
    96 = Delinquency or Default
    97 = Obligated to pay alimony, child support or maintenance, Alimony Child Support
    98 = Part of down payment borrowed, Borrowed Down Payment
    99 = Co-Maker or Endorser on a note
    "
     */
    //020
    //#13#2
    DeclarationType: string;
    //030
    //#15#255
    DeclarationExplanation: string;

}

export class AcknowledgmentAgreement {
    public get id(): string {
        return "09A";
    }

    public get length(): number {
        return 20;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.SignatureDate = fnmdata.substr(12, 8).trim().toMMDDYYYY();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#8
    SignatureDate: string;
}

export class GovernmentMonitoring {
    public get id(): string {
        return "10A";
    }

    public get length(): number {
        return 45;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.WishToFurninsh = fnmdata.substr(12, 1).trim();
        this.Ethnicity = fnmdata.substr(13, 1).trim();
        this.Filter = fnmdata.substr(14, 30).trim();
        this.SEX = fnmdata.substr(44, 1).trim();
    }
    //020
    //#4#9
    SSN: string;
    //030
    //#13#1
    WishToFurninsh: string;
    /**"1108 Ethnicity Code:
    1-Hispanic or Latino
    2-Not Hispanic or Latino
    3-Information not provided by applicant in mail, internet or telephone application
    4-Not applicable"
     */
    //040
    //#14#1
    Ethnicity: string;
    //050
    //#15#30
    Filter: string;
    /**
     * "F = Female
    M = Male
    I = Information not provided by applicant in mail, internet or telephone application
    N = Not applicable
    "*/
    //060
    //#45#1
    SEX: string;
}

export class LoanOriginator {
    public get id(): string {
        return "10B";
    }

    public get length(): number {
        return 223;
    }

    constructor(fnmdata: string) {
        this.ApplicationTakenBy = fnmdata.substr(3, 1).trim();
        this.LoanOriginatorName = fnmdata.substr(4, 60).trim();
        this.InterviewDate = fnmdata.substr(64, 8).trim();
        this.PhoneNumber = fnmdata.substr(72, 10).trim();
        this.CompanyName = fnmdata.substr(82, 35).trim();
        this.CompanyStreetAddress = fnmdata.substr(117, 35).trim();
        this.CompanyStreetAddress2 = fnmdata.substr(152, 35).trim();
        this.CompanyCity = fnmdata.substr(187, 35).trim();
        this.CompanyStateCode = fnmdata.substr(222, 2).trim();
        this.CompanyZipCode = fnmdata.substr(224, 5).trim();
        this.CompanyZipCodePlusFour = fnmdata.substr(229, 4).trim();
    }
    /*EDI Data Element 1079:
F = Face-to-Face
M = Mail or Fax
T = Telephone
I = Internet or E-Mail*/
    //020
    //#4#1
    ApplicationTakenBy: string;
    //030
    //#5#60
    LoanOriginatorName: string;
    //040
    //#65#8
    InterviewDate: string;
    //050
    //#73#10
    PhoneNumber: string;
    //060
    //#83#35
    CompanyName: string;
    //070
    //#118#35
    CompanyStreetAddress: string;
    //080
    //#153#35
    CompanyStreetAddress2: string;
    //090
    //#188#35
    CompanyCity: string;
    //100
    //#223#2
    CompanyStateCode: string;
    //110
    //#225#5
    CompanyZipCode: string;
    //120
    //#230#4
    CompanyZipCodePlusFour: string;
}

export class GovernmentMonitoringPurpose {
    public get id(): string {
        return "10R";
    }

    public get length(): number {
        return 14;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
        this.RaceType = fnmdata.substr(12, 2).trim();
    }
    //020
    //#4#9
    SSN: string;
    /*1107 Race Code:
1= American Indian or Alaska Native
2 = Asian
3 = Black or African American
4 = Native Hawaiian or Other Pacific Islander
5 = White
6 = Information not provided by applicant in mail, internet, or telephone application
7 = Not applicable*/
    //030
    //#13#2
    RaceType: string;
}
export class LoanCharacteristics {
    public get id(): string {
        return "LNC";
    }
    public get length(): number {
        return 91;
    }
    constructor(fnmdata: string) {
        this.LienTypeCode = fnmdata.substr(3, 1).trim();
        this.LoanDocumentTypeCode = fnmdata.substr(4, 1).trim();
        this.SubjectPropertyTypeCode = fnmdata.substr(5, 2).trim();
        this.ReservedForFutureUse = fnmdata.substr(7, 2).trim();
        this.ReservedForFutureUse2 = fnmdata.substr(9, 2).trim();
        this.ReservedForFutureUse3 = fnmdata.substr(11, 2).trim();
        this.ReservedForFutureUse4 = fnmdata.substr(13, 2).trim();
        this.ProjectClassificationCode = fnmdata.substr(15, 2).trim();
        this.NegativeAmortizationLimitPercent = fnmdata.substr(17, 7).trim();
        this.BalloonIndicator = fnmdata.substr(24, 1).trim();
        this.Filter = fnmdata.substr(25, 1).trim();
        this.Filter2 = fnmdata.substr(26, 1).trim();
        this.EducationCompletionIndicator = fnmdata.substr(27, 1).trim();
        this.MaximumLifetimeRateIncrease = fnmdata.substr(28, 7).trim();
        this.PaymentAdjustmentPercent = fnmdata.substr(35, 7).trim();
        this.PaymentAdjustmentAmount = fnmdata.substr(42, 15).trim();
        this.WilEscrowWaived = fnmdata.substr(57, 1).trim();
        this.LoanClosingDate = fnmdata.substr(58, 8).trim();
        this.FirstPaymentDate = fnmdata.substr(66, 8).trim();
        this.MiCoveragePercent = fnmdata.substr(74, 7).trim();
        this.MiInsurerCode = fnmdata.substr(81, 3).trim();
        this.APRSpread = fnmdata.substr(84, 5).trim();
        this.HOEPA = fnmdata.substr(89, 1).trim();
        this.PreApproval = fnmdata.substr(90, 1).trim();
    }
    /*EDI Data Element 1101:
1 = First Mortgage
2 = Second Mortgage
F = Other Mortgage*/
    //020
    //#4#1
    LienTypeCode: string;
    /*EDI Data Element 1103, Loan Documentation Type Code:

A = Alternative (Non-traditional documentation used to determine the credit worthiness of a borrower)
F = Full
R = Reduced
B = Streamlined Refinance
C = No documentation
D = No Ratio
E = Limited Documentation
U = No Income, No Employment and No Assets on 1003
G = No Income and No Assets on 1003
H = No Assets on 1003
I = No Income and No Employment on 1003
J = No Income on 1003
K = No Verification of Stated Income, Employment or Assets
L = No Verification of Stated Income or Assets
M = No Verification of Stated Assets
N = No Verification of Stated Income or Employment
O = No Verification of Stated Income
P = Verbal Verification of Employment
Q = One paystub
S = One paystub and VVOE
T = One paystub and one W-2 and VVOE or one yr 1040
*/
    //030
    //#5#1
    LoanDocumentTypeCode: string;
    /*Fannie Mae Property Type Code:
01 = Detached
02 = Attached
03 = Condominium
04 = Planned Unit Development (PUD)
05 = Co-Operative (Co-Op)
07 = High Rise Condo
08 = Manufactured Home
09 = Detached Condo
10 = Manufactured Home: Condo/PUD/Co-Op*/
    //040
    //#6#2
    SubjectPropertyTypeCode: string;
    //050
    //#8#2
    ReservedForFutureUse: string;
    //060
    //#10#2
    ReservedForFutureUse2: string;
    //070
    //#12#2
    ReservedForFutureUse3: string;
    //080
    //#14#2
    ReservedForFutureUse4: string;
    /*Fannie Project Classification Codes:

04 = E PUD
05 = F PUD"
07 = 1 CO-OP
08 = 2 CO-OP
09 = P Condo
10 = Q Condo
11 = R Condo
12 = S Condo
13 = T Condo
14 = U Condo
15 = V Condo
16 = G, not in a project or development*/
    //090
    //#16#2
    ProjectClassificationCode: string;
    //100
    //#18#7
    NegativeAmortizationLimitPercent: string;
    //Y=Yes  N=No
    //110
    //#25#1
    BalloonIndicator: string;
    //120
    //#26#1
    Filter: string;
    //130
    //#27#1
    Filter2: string;
    /*1 = HomeBuyer Education complete
2 = One-on-one counseling complete*/
    //140
    //#28#1
    EducationCompletionIndicator: string;
    //150
    //#29#7
    MaximumLifetimeRateIncrease: string;
    //160
    //#36#7
    PaymentAdjustmentPercent: string;
    //170
    //#43#15
    PaymentAdjustmentAmount: string;
    //180
    //#58#1
    WilEscrowWaived: string;
    //190
    //#59#8
    LoanClosingDate: string;
    //200
    //#67#8
    FirstPaymentDate: string;
    //210
    //#75#7
    MiCoveragePercent: string;
    /*Fannie “ MI Insurer Code:

001 = GE Mortgage Insurance Corporation, GE"
006 = Mortgage Guarantee Insurance Corporation, MGIC
011 = PMI Mortgage Insurance Company, PMI
012 = United Guarantee Residential Insurance Company, UG
013 = Republic Mortgage Insurance Company, RMIC
017 = Radian Guaranty Incorporated
024 = Triad Guarantee Residential Insurance Company, Triad
038 = CMG Mortgage Insurance Co., an affiliate of PMI (credit unions only),CMG
043 = Essent Guaranty, Inc
044 = National Mortgage Insurance Company, NMIFannie “ MI Insurer Code:

001 = GE Mortgage Insurance Corporation, GE"
006 = Mortgage Guarantee Insurance Corporation, MGIC
011 = PMI Mortgage Insurance Company, PMI
012 = United Guarantee Residential Insurance Company, UG
013 = Republic Mortgage Insurance Company, RMIC
017 = Radian Guaranty Incorporated
024 = Triad Guarantee Residential Insurance Company, Triad
038 = CMG Mortgage Insurance Co., an affiliate of PMI (credit unions only),CMG
043 = Essent Guaranty, Inc
044 = National Mortgage Insurance Company, NMI*/
    //220
    //#82#3
    MiInsurerCode: string;
    //230
    //#85#5
    APRSpread: string;
    /*Y = Loan is covered under act
N = Loan is not covered under act*/
    //240
    //#90#1
    HOEPA: string;
    /*Y = Pre-Approval loan
N = Not a Pre-Approval loan*/
    //250
    //#91#1
    PreApproval: string;

}
export class TransmittalData {
    public get id(): string {
        return "99B";
    }

    public get length(): number {
        return 145;
    }

    constructor(fnmdata: string) {
        this.BelowMarketFinance = fnmdata.substr(3, 1).trim();
        this.ExistingMortgage = fnmdata.substr(4, 2).trim();
        this.PropertyAppraisedValue = fnmdata.substr(6, 15).trim();
        this.BuydownRate = fnmdata.substr(21, 7).trim();
        this.AppraisedValueType = fnmdata.substr(28, 2).trim();
        this.AppraiserName = fnmdata.substr(33, 60).trim();
        this.AppraiserCompany = fnmdata.substr(93, 35).trim();
        this.AppraiserLicenseNumber = fnmdata.substr(128, 15).trim();
        this.AppraiserLicenseStateCode = fnmdata.substr(143, 2).trim();
    }
    /*Y = Yes
    N = No*/
    //020
    //#4#1
    BelowMarketFinance: string;
    /*Fannie Mae Owner of Existing Mortgage Codes:
01 = Fannie Mae
02 = Freddie Mac
03 = Seller/Other
F1 = Unknown*/
    //030
    //#5#2
    ExistingMortgage: string;
    //040
    //#7#15
    PropertyAppraisedValue: string;
    //050
    //#22#7
    BuydownRate: string;
    /*Fannie Mae Code:
01 = Actual
02 = Estimated

Fanne Mae Property Documentation Obtained Codes:
102 = No appraisal/inspection obtained
103 = Form 2075 exterior inspection
104 = Form 2055 appraisal with exterior only inspection
110 = Form 2095 cooperative appraisal with exterior only inspection
114 = Form 1025 appraisal with interior/exterior inspection
116 = Form 1004 appraisal with interior/exterior inspection
120 = Prior appraisal used for the transaction
125 = Other
130 = Form 26-1805, Certificate of Reasonable Value for VA
131 = Form 26-8712, Manufactured Home Appraisal Report for VA
132 = Form 1004C, Manufactured Home Appraisal Report with interior/exterior inspection*
133 = Form 1073 condominium appraisal with interior/exterior inspection*
134 = Form 1075 condominium appraisal with exterior inspection*
135 = Form 2090 cooperative appraisal with interior/exterior inspection*
136 = Form 1004D appraisal updated/completion report*
137 = Form 2000 Field review one-unit*
138 = Form 2000A Field review 2-4**/
    //060
    //#29#2
    AppraisedValueType: string;
    //080
    //#34#60
    AppraiserName: string;
    //090
    //#94#35
    AppraiserCompany: string;
    //100
    //#129#15
    AppraiserLicenseNumber: string;
    //110
    //#144#2
    AppraiserLicenseStateCode: string;
}
export class Score {
    public get id(): string {
        return "SCA";
    }

    public get length(): number {
        return 17;
    }

    constructor(fnmdata: string) {
        this.ScoreId = fnmdata.substr(3, 3).trim();
        this.Score = fnmdata.substr(6, 3).trim();
        this.ScoreDate = fnmdata.substr(9, 8).trim();
    }
    /*Fannie Mae “Score ID” :
    001 = PMI Aura AQI Score
    002 = GE IQ Score
    003 = UGI Accuscore*/
    //020
    //#4#3
    ScoreId: string;
    //030
    //#7#3
    Score: string;
    //040
    //#10#8
    ScoreDate: string;
}

export class Eligibility {
    public get id(): string {
        return "03C";
    }

    public get length(): number {
        return 15;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
    }
    //020
    //#4#9
    SSN: string;
}
export class ProductIdentification {
    public get id(): string {
        return "PID";
    }

    public get length(): number {
        return 53;
    }

    constructor(fnmdata: string) {
        this.ProductDescription = fnmdata.substr(3, 30).trim();
        this.ProductCode = fnmdata.substr(33, 15).trim();
        this.ProductPlanNumber = fnmdata.substr(48, 5).trim();
    }
    /*StandardLICOR
Affordable LTV*/
    //020
    //#4#30
    ProductDescription: string;
    //030
    //#34#15
    ProductCode: string;
    /*Fannie Mae ARM Plan Number for Fannie Mae products.
Fannie Mae Generic ARM plans:

NGAM = Negative Amortization
GEN06 = 6 Month
GEN1A = 1 yr, 1% annual cap
GEN1B = 1 yr, 2% annual cap
GEN3 = 3 yr
GEN5 = 5 yr
GEN7 = 7 yr
GEN10 = 10 yr
251 = FHA 1 yr
FHAHY = FHA Hybrid ARM
VA1YR = VA 1 yr
VAARM = VA Hybrid ARM
For a complete list of all active ARM Index Codes, go to the Data Standards Supporting Resources section of the Technology Integration Web page: https://www.fanniemae.com/singlefamily/technology-integration*/
    //040
    //#49#5
    ProductPlanNumber: string;
}
export class ProductCharacteristics {
    public get id(): string {
        return "PCH";
    }

    public get length(): number {
        return 13;
    }

    constructor(fnmdata: string) {
        this.MortgageTerm = fnmdata.substr(3, 3).trim();
        this.AssumableLoanIndicator = fnmdata.substr(6, 1).trim();
        this.PaymentFrequencyCode = fnmdata.substr(7, 2).trim();
        this.PrepaymentPenalityIndicator = fnmdata.substr(9, 1).trim();
        this.PrepaymentRestrictedIndicator = fnmdata.substr(10, 1).trim();
        this.RepaymentTypeCode = fnmdata.substr(11, 2).trim();
    }
    //020
    //#4#3
    MortgageTerm: string;
    //030
    //#7#1
    AssumableLoanIndicator: string;
    /*Fannie Mae Payment Frequency Codes:
01 = Monthly
02 = Bi-weekly*/
    //040
    //#8#2
    PaymentFrequencyCode: string;
    //050
    //#10#1
    PrepaymentPenalityIndicator: string;
    //060
    //#11#1
    PrepaymentRestrictedIndicator: string;
    //070
    //#12#2
    RepaymentTypeCode: string;
}
export class PaymentAdjustmentOccurence {
    constructor(fnmdata: string) {

    }
}
export class RateAdjustmentOccurence {
    public get id(): string {
        return "03C";
    }

    public get length(): number {
        return 15;
    }

    constructor(fnmdata: string) {
        this.SSN = fnmdata.substr(3, 9).trim();
    }
    //020
    //#4#9
    SSN: string;
}
export class LenderData {
    constructor(fnmdata: string) {

    }
}
export class FHALoan {
    constructor(fnmdata: string) {

    }
}
export class VALoan {
    constructor(fnmdata: string) {

    }
}
export class CreditData {
    constructor(fnmdata: string) {

    }
}
export class LendingLoans {
    constructor(fnmdata: string) {

    }
}
export class TransactionTrailer {
    constructor(fnmdata: string) {

    }
}
export class EnvelopeTrailer {
    constructor(fnmdata: string) {

    }
}
