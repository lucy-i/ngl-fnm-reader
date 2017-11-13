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
}