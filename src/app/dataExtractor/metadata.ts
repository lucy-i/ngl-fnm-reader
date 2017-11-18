export class LoanMetadata {

    get MortgageAppliedForList() {
        return [
            { value: "01", text: "Conventional" },
            { value: "02", text: "VA" },
            { value: "03", text: "FHA" },
            { value: "04", text: "USDA / Rural Housing Service" },
            { value: "07", text: "Other" }];
    }
    get AmortizationTypeList() {
        return [
            { value: "01", text: "Adjustable Rate" },
            { value: "04", text: "GEM" },
            { value: "05", text: "Fixed Rate" },
            { value: "06", text: "GPM" },
            { value: "13", text: "Other" }];
    }
    get PuposeOfLoan() {
        return [{ value: "04", text: "Construction" },
        { value: "05", text: "Refinance" },
        { value: "13", text: "Construction-Perm" },
        { value: "15", text: "Other" },
        { value: "16", text: "Purchase" }];
    }
    get ResidenceType() {
        return [{ value: "1", text: "Primary Residence" },
        { value: "2", text: "Secondary Residence" },
        { value: "D", text: "Investment Property" }
        ];
    }
    get MartialStatus(){
        return [{ value: "M",text:"Married"},
                { value: "S",text:"Separated"},
                { value: "U",text:"Unmarried (Single, Divorced, Widowed)"}
                ];
    }
}