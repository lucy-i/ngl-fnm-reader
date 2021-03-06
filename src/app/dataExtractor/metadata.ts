export class LoanMetadata {

    MortgageAppliedForList: EnumTypeModel[] = [
        { value: "01", text: "Conventional" },
        { value: "02", text: "VA" },
        { value: "03", text: "FHA" },
        { value: "04", text: "USDA / Rural Housing Service" },
        { value: "07", text: "Other" }];

    AmortizationTypeList: EnumTypeModel[] = [
        { value: "01", text: "Adjustable Rate" },
        { value: "04", text: "GEM" },
        { value: "05", text: "Fixed Rate" },
        { value: "06", text: "GPM" },
        { value: "13", text: "Other" }];

    PuposeOfLoan: EnumTypeModel[] = [
        { value: "04", text: "Construction" },
        { value: "05", text: "Refinance" },
        { value: "13", text: "Construction-Perm" },
        { value: "15", text: "Other" },
        { value: "16", text: "Purchase" }];

    ResidenceType: EnumTypeModel[] = [
        { value: "1", text: "Primary Residence" },
        { value: "2", text: "Secondary Residence" },
        { value: "D", text: "Investment Property" }
    ];
    MartialStatus: EnumTypeModel[] = [
        { value: "M", text: "Married" },
        { value: "S", text: "Separated" },
        { value: "U", text: "Unmarried (Single, Divorced, Widowed)" }];
    EstateHeldIn: EnumTypeModel[] = [
        { value: "1", text: "Fee Simple" },
        { value: "2", text: " Leasehold" }];
    Address: EnumTypeModel[] = [
        { value: "ZG", text: "Present Address", label: "Present Address (street, city, state, ZIP)" },
        { value: "BH", text: "Mailing Address", label: "Mailing Address, if different from Present Address " },
        { value: "F4", text: "Former Residence", label: "Former Address (street, city, state, ZIP)" }];
    AddressLabel = {
        ZG: "Present Address (street, city, state, ZIP)",
        BH: "Mailing Address, if different from Present Address ",
        F4: "Former Address (street, city, state, ZIP)"
    };
    UsageTypes: EnumTypeModel[] = [
        { value: "X", text: "Living Rent Free" },
        { value: "R", text: "Rent" },
        { value: "O", text: "Own" },
    ];
    IncomeType: EnumTypeModel[] = [
        { value: "F1", text: "Military Base Pay" },
        { value: "07", text: "Military Rations Allowance" },
        { value: "F2", text: "Military Flight Pay" },
        { value: "F3", text: "Military Hazard Pay" },
        { value: "02", text: "Military Clothes Allowance" },
        { value: "04", text: "Military Quarters Allowance" },
        { value: "03", text: "Military Prop Pay" },
        { value: "F4", text: "Military Overseas Pay" },
        { value: "F5", text: "Military Combat Pay" },
        { value: "F6", text: "Military Variable Housing Allowance" },
        { value: "F7", text: "Alimony/Child Support Income" },
        { value: "F8", text: "Notes Receivable/Installment" },
        { value: "41", text: "Pension/Retirement Income" },
        { value: "42", text: "Social Security/Disability Income" },
        { value: "30", text: "Real Estate/Mortgage Differential" },
        { value: "F9", text: "Trust Income" },
        { value: "AU", text: "Accessory Unit Income*" },
        { value: "M1", text: "Unemployment/Public Assistance" },
        { value: "M2", text: "Automobile/Expense Account Income" },
        { value: "M3", text: "Foster Care" },
        { value: "M4", text: "VA Benefits (non-education)" },
        { value: "NB", text: "Non-Borrower Household Income*" },
        { value: "45", text: "Other Income", primary: true, order: 7 },
        { value: "20", text: "Base Employment Income", primary: true, order: 1 },
        { value: "09", text: "Overtime", primary: true, order: 2 },
        { value: "08", text: "Bonuses", primary: true, order: 3 },
        { value: "10", text: "Commissions", primary: true, order: 4 },
        { value: "17", text: "Dividends/Interest", primary: true, order: 5 },
        { value: "SI", text: "Subject Property Net Cash Flow" },
        { value: "S8", text: "Housing Choice Voucher (Sec 8)*" },
        { value: "33", text: "Net Rental Income**", primary: true, order: 6 },
        { value: "BI", text: "Boarder Income" },
        { value: "MC", text: "Mortgage Credit Certificate (MCC)" },
        { value: "CG", text: "Capital Gains*" },
        { value: "EA", text: "Employment Related Assets*" },
        { value: "FI", text: "Foreign Income*" },
        { value: "RP", text: "Royalty Payment*" },
        { value: "SE", text: "Seasonal Income*" },
        { value: "TL", text: "Temporary Leave*" },
        { value: "TI", text: "Tip Income*" }
    ];
    ExpensePaymmentTypes: EnumTypeModel[] = [
        { value: "25", text: "Rent" },
        { value: "26", text: "First Mortgage P&I" },
        { value: "22", text: "Other Financing P&I" },
        { value: "01", text: "Hazard Insurance" },
        { value: "14", text: "Real Estate Taxes" },
        { value: "02", text: "Mortgage Insurance" },
        { value: "06", text: "Homeowner Association Dues" },
        { value: "23", text: "Other" }
    ];
    requiredIncomeTypes() {
        return this.IncomeType.filter(t => t.primary);
    }
    AssetType: EnumTypeModel[] = [
        { value: "03", text: "Checking Account" },
        { value: "F1", text: "Cash Deposit on Sales Contract" },
        { value: "SG", text: "Savings Account" },
        { value: "F2", text: "Gift" },
        { value: "01", text: "Certificate of Deposit" },
        { value: "F3", text: "Money Market Fund" },
        { value: "F4", text: "Mutual Funds" },
        { value: "05", text: "Stock" },
        { value: "06", text: "Bond" },
        { value: "F5", text: "Secured Borrowed Funds" },
        { value: "F7", text: "Bridge Loan" },
        { value: "08", text: "Retirement Funds" },
        { value: "F8", text: "Net Worth of Business Owned" },
        { value: "11", text: "Trust Funds" },
        { value: "M1", text: "Other Non-Liquid Asset" },
        { value: "OL", text: "Other Liquid Asset" },
        { value: "NE", text: "Net Equity" },
        { value: "COH", text: "Cash On Hand" },
        { value: "GE", text: "Gift of Equity" }
    ]

    LibilityType: EnumTypeModel[] = [
        { value: "I", text: "Installment Loan" },
        { value: "O", text: "30 Day Charge Account (open)" },
        { value: "R", text: "Revolving Charge Account" },
        { value: "C", text: "HELOC" },
        { value: "M", text: "Mortgage" },
        { value: "F", text: "Lease Payments" },
        { value: "N", text: "Liens" },
        { value: "A", text: "Taxes" },
        { value: "Z", text: "Other Liability" }
    ];

    PropertyType: EnumTypeModel[] = [
        { value: "14", text: "Single Family" },
        { value: "04", text: "Condominium" },
        { value: "16", text: "Townhouse" },
        { value: "13", text: "Co-operative" },
        { value: "15", text: "Two-to-four unit property" },
        { value: "18", text: "Multifamily (more than 4 units)" },
        { value: "08", text: "Manufactured/Mobile Home" },
        { value: "02", text: "Commercial – Non-Residential" },
        { value: "F1", text: "Mixed Use – Residential" },
        { value: "05", text: "Farm" },
        { value: "03", text: "Home and Business Combined" },
        { value: "07", text: "Land" }
    ];

}

export class EnumTypeModel {
    value: string;
    text: string;
    label?: string;
    primary?: boolean;
    order?: number;
}
export const IncomeEnumConst = {
    "MilitaryBasePay": "F1",
    "MilitaryRationsAllowance": "07",
    "MilitaryFlightPay": "F2",
    "MilitaryHazardPay": "F3",
    "MilitaryClothesAllowance": "02",
    "MilitaryQuartersAllowance": "04",
    "MilitaryPropPay": "03",
    "MilitaryOverseasPay": "F4",
    "MilitaryCombatPay": "F5",
    "MilitaryVariableHousingAllowance": "F6",
    "AlimonyChildSupportIncome": "F7",
    "NotesReceivableInstallment": "F8",
    "PensionRetirementIncome": "41",
    "SocialSecurityDisabilityIncome": "42",
    "RealEstateMortgageDifferential": "30",
    "TrustIncome": "F9",
    "AccessoryUnitIncome*": "AU",
    "UnemploymentPublicAssistance": "M1",
    "AutomobileExpenseAccountIncome": "M2",
    "FosterCare": "M3",
    "VABenefits_noneducation)": "M4",
    "NonBorrowerHouseholdIncome*": "NB",
    "OtherIncome": "45",
    "BaseEmploymentIncome": "20",
    "Overtime": "09",
    "Bonuses": "08",
    "Commissions": "10",
    "DividendsInterest": "17",
    "SubjectPropertyNetCashFlow": "SI",
    "HousingChoiceVoucherSec8": "S8",
    "NetRentalIncome": "33",
    "BoarderIncome": "BI",
    "MortgageCreditCertificate": "MC",
    "CapitalGains": "CG",
    "EmploymentRelatedAssets": "EA",
    "ForeignIncome": "FI",
    "RoyaltyPayment": "RP",
    "SeasonalIncome": "SE",
    "TemporaryLeave": "TL",
    "TipIncome": "TI"
}