export class LoanMetadata {

    MortgageAppliedForList = [
        { value: "01", text: "Conventional" },
        { value: "02", text: "VA" },
        { value: "03", text: "FHA" },
        { value: "04", text: "USDA / Rural Housing Service" },
        { value: "07", text: "Other" }];

    AmortizationTypeList = [
        { value: "01", text: "Adjustable Rate" },
        { value: "04", text: "GEM" },
        { value: "05", text: "Fixed Rate" },
        { value: "06", text: "GPM" },
        { value: "13", text: "Other" }];

    PuposeOfLoan = [{ value: "04", text: "Construction" },
    { value: "05", text: "Refinance" },
    { value: "13", text: "Construction-Perm" },
    { value: "15", text: "Other" },
    { value: "16", text: "Purchase" }];

    ResidenceType = [{ value: "1", text: "Primary Residence" },
    { value: "2", text: "Secondary Residence" },
    { value: "D", text: "Investment Property" }
    ];
    MartialStatus = [{ value: "M", text: "Married" },
    { value: "S", text: "Separated" },
    { value: "U", text: "Unmarried (Single, Divorced, Widowed)" }];
    EstateHeldIn = [
        { value: "1", text: "Fee Simple" },
        { value: "2", text: " Leasehold" }];
    Address = [
        { value: "ZG", text: "Present Address", label: "Present Address (street, city, state, ZIP)" },
        { value: "BH", text: "Mailing Address", label: "Mailing Address, if different from Present Address " },
        { value: "F4", text: "Former Residence", label: "Former Address (street, city, state, ZIP)" }];
    AddressLabel = {
        ZG: "Present Address (street, city, state, ZIP)",
        BH: "Mailing Address, if different from Present Address ",
        F4: "Former Address (street, city, state, ZIP)"
    };
    UsageTypes=[
        { value: "X",text:"Living Rent Free"},
        { value: "R",text:"Rent"},
        { value: "O",text:"Own"},
    ];

}