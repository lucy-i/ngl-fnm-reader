export const rowMetadata = (() => {
     //[{ "FieldGroupID": "EH", "Description": "Envelope Header" }, { "FieldGroupID": "TH", "Description": "Transaction Header" }, { "FieldGroupID": "TPI", "Description": "Transaction Processing Info" }, { "FieldGroupID": "000", "Description": "File Identification" }, { "FieldGroupID": "00A", "Description": "Top of Form" }, { "FieldGroupID": "01A", "Description": "Mortgage Type and Terms" }, { "FieldGroupID": "02A", "Description": "Property Information" }, { "FieldGroupID": "PAI", "Description": "Property Address Information\n\nSegment is optional. If provided it will be used instead of the single address element (02A-020).\n\nNot Required. However, all systems should support this segment to prevent the loss of data when a user imports/exports a 1003 file between systems." }, { "Description": "Purpose of Loan" }, { "Description": "Title Holder" }, { "Description": "Construction or Refinance Data\n\nConventional Loans: Complete ONLY if Purpose of Loan (field #02B-030) is Construction or Refinance\n\nGovernment Loans: Construction loans are not currently available. " }, { "Description": "Down Payment\n\nThis record identifies the source(s) of down payment, NOT the amount of down payment available or required.\nFannie Mae: Required for VA Purchase loans. Required for FHA loans when gift(s) is used as the down payment source." }, { "Description": "Applicant(s) Data" }, { "Description": "Dependent?s Age.\n\nSpecify if field 03A-120 is >0. Number of occurrences must equal value in Field 03A-120." }, { "Description": "Applicant(s) Address" }, { "Description": "Primary Current Employer(s)" }, { "Description": "Secondary/Previous Employer(s)\n\nRequired if Secondary or Previous Employment entered" }, { "Description": "Present/Proposed Housing Expense \nOnly for Applicants where the Applicant/Co-Applicant Indicator = Applicant (Field 03A-020 = BW).\nOnly for Applicants where the Applicant/Co-Applicant Indicator = Applicant (Field 03A-020 = BW).\nProposed Housing Expense applicable for subject property only.\n\nConventional Loans: For Second Homes/Investment Properties, you must ensure that the borrowers? total monthly primary residence housing expense including principal, interest, hazard insurance, real estate taxes, mortgage insurance and HOA dues are entered as both a housing expense AND included as a liability. \nFor more information, refer to the DU Job Aid: Entering housing expenses for second homes and investment properties on Fanniemae.com.\n\nRequired for Proposed Housing Expense.\n\n" }, { "Description": "Income\n\nSegment required for each type of Income\n\n1 record with Type of Income Code = 33 (Net Rental Income) required if applicable and not detailed in REO records (06G) with Net Rental Income > 0." }, { "Description": "For all asset types, enter data in the 06C assets segment.\n\nDo not use. Record data in 06C." }, { "Description": "Life Insurance" }, { "Description": "Assets" }, { "Description": "Automobile(s)" }, { "Description": "Alimony, Child Support/ Separate Maintenance and/or Job Related Expense(s)\n\nRequired if Alimony, Child Support/ Maintenance and/or Job Related Expense(s) exist." }, { "Description": "Real Estate Owned\n\nRequired if Real Estate Property(s) is owned" }, { "Description": "Alias\n\nBorrower or Co-Borrower cannot have duplicate aliases." }, { "Description": "Liabilities\n\nNote: Liabilities can be auto-populated from the credit report." }, { "Description": "Undrawn HELOC and IPCs\n\nRequired IF an Undrawn HELOC is associated with the subject property." }, { "Description": "Details of Transaction" }, { "Description": "Other Credits\n\nFannie Mae: Required if applicable." }, { "Description": "Declarations" }, { "Description": "Declaration Explanations\n\nSpecify if field #08A-030 to 08A-110 is Yes. NOT Required." }, { "Description": "Acknowledgment and Agreement" }, { "Description": "Information for Government Monitoring Purposes.\n\nOne occurrence per Applicant" }, { "Description": "Loan Originator Information\n\nOne Occurrence" }, { "Description": "Information for Government Monitoring Purposes\n\n ? reporting on Multiple Race per Applicant" }, { "FieldGroupID": "000", "Description": "File Identification" }, { "Description": "Fannie Mae Transmittal Data\n\nSegment required for Import" }, { "Description": "Additional Data Segment\n\nAll systems should support multiple occurrences of this segment to\nprevent the loss of data when a user imports/exports a 1003 file\nbetween systems. New fields added to support FHFA requirements." }, { "Description": "Record ID Score" }, { "FieldGroupID": "000", "Description": "File Identification" }, { "Description": "Record ID-\nLoan Characteristics for Eligibility" }, { "Description": "Product Identification\n\nSegment required for import" }, { "Description": "Product Characteristics\n\nSegment required for import" }, { "Description": "ARM\n\nRequired for ARM, if Amortization Type (field 01A-090) is ?01?" }, { "Description": "Payment Adjustment Occurrences.\n\nThis segment is not used by DU. Contains DO product / pricing information." }, { "Description": "Rate Adjustment Occurrences\n\nSpecify if Field #01A-090 = 01 for ARM and if the ARM will have rate adjustments. NOT REQUIRED." }, { "FieldGroupID": "000", "Description": "File Identification" }];/**{ "Description": "Casefile Identification" }, { "Description": "Lender Data" }, { "Description": "Both FHA/VA Loans" }, { "Description": "" }, { "Description": "VA Loans Only\n\nRequired for VA loans" }, { "Description": "VA Loans Only\n\nRequired for VA Loans" }, { "Description": "Credit Data\n\nBoth FHA/VA Loans" }, { "FieldGroupID": "000", "Description": "File Identification" }, { "Description": "Community Lending Loans\n\nRequired for Community Lending" }, { "Description": "Transaction Trailer" }, { "Description": "Envelope Trailer" } */
     return [{"FieldGroupID":"EH","Description":"Envelope Header"},{"FieldGroupID":"TH","Description":"Transaction Header"},{"FieldGroupID":"TPI","Description":"Transaction Processing Info"},{"FieldGroupID":"000","Description":"File Identification"},{"FieldGroupID":"00A","Description":"Top of Form"},{"FieldGroupID":"01A","Description":"Mortgage Type and Terms"},{"FieldGroupID":"02A","Description":"Property Information"},{"FieldGroupID":"PAI","Description":"Property Address Information\n\nSegment is optional. If provided it will be used instead of the single address element (02A-020).\n\nNot Required. However, all systems should support this segment to prevent the loss of data when a user imports/exports a 1003 file between systems."},{"FieldGroupID":"02B","Description":"Purpose of Loan"},{"FieldGroupID":"02C","Description":"Title Holder"},{"FieldGroupID":"02D","Description":"Construction or Refinance Data\n\nConventional Loans: Complete ONLY if Purpose of Loan (field #02B-030) is Construction or Refinance\n\nGovernment Loans: Construction loans are not currently available. "},{"FieldGroupID":"02E","Description":"Down Payment\n\nThis record identifies the source(s) of down payment, NOT the amount of down payment available or required.\nFannie Mae: Required for VA Purchase loans. Required for FHA loans when gift(s) is used as the down payment source."},{"FieldGroupID":"03A","Description":"Applicant(s) Data"},{"FieldGroupID":"03B","Description":"Dependent?s Age.\n\nSpecify if field 03A-120 is >0. Number of occurrences must equal value in Field 03A-120."},{"FieldGroupID":"03C","Description":"Applicant(s) Address"},{"FieldGroupID":"04A","Description":"Primary Current Employer(s)"},{"FieldGroupID":"04B","Description":"Secondary/Previous Employer(s)\n\nRequired if Secondary or Previous Employment entered"},{"FieldGroupID":"05H","Description":"Present/Proposed Housing Expense \nOnly for Applicants where the Applicant/Co-Applicant Indicator = Applicant (Field 03A-020 = BW).\nOnly for Applicants where the Applicant/Co-Applicant Indicator = Applicant (Field 03A-020 = BW).\nProposed Housing Expense applicable for subject property only.\n\nConventional Loans: For Second Homes/Investment Properties, you must ensure that the borrowers? total monthly primary residence housing expense including principal, interest, hazard insurance, real estate taxes, mortgage insurance and HOA dues are entered as both a housing expense AND included as a liability. \nFor more information, refer to the DU Job Aid: Entering housing expenses for second homes and investment properties on Fanniemae.com.\n\nRequired for Proposed Housing Expense.\n\n"},{"FieldGroupID":"05I","Description":"Income\n\nSegment required for each type of Income\n\n1 record with Type of Income Code = 33 (Net Rental Income) required if applicable and not detailed in REO records (06G) with Net Rental Income > 0."},{"FieldGroupID":"06A","Description":"For all asset types, enter data in the 06C assets segment.\n\nDo not use. Record data in 06C."},{"FieldGroupID":"06B","Description":"Life Insurance"},{"FieldGroupID":"06C","Description":"Assets"},{"FieldGroupID":"06D","Description":"Automobile(s)"},{"FieldGroupID":"06F","Description":"Alimony, Child Support/ Separate Maintenance and/or Job Related Expense(s)\n\nRequired if Alimony, Child Support/ Maintenance and/or Job Related Expense(s) exist."},{"FieldGroupID":"06G","Description":"Real Estate Owned\n\nRequired if Real Estate Property(s) is owned"},{"FieldGroupID":"06H","Description":"Alias\n\nBorrower or Co-Borrower cannot have duplicate aliases."},{"FieldGroupID":"06L","Description":"Liabilities\n\nNote: Liabilities can be auto-populated from the credit report."},{"FieldGroupID":"06S","Description":"Undrawn HELOC and IPCs\n\nRequired IF an Undrawn HELOC is associated with the subject property."},{"FieldGroupID":"07A","Description":"Details of Transaction"},{"FieldGroupID":"07B","Description":"Other Credits\n\nFannie Mae: Required if applicable."},{"FieldGroupID":"08A","Description":"Declarations"},{"FieldGroupID":"08B","Description":"Declaration Explanations\n\nSpecify if field #08A-030 to 08A-110 is Yes. NOT Required."},{"FieldGroupID":"09A","Description":"Acknowledgment and Agreement"},{"FieldGroupID":"10A","Description":"Information for Government Monitoring Purposes.\n\nOne occurrence per Applicant"},{"FieldGroupID":"10B","Description":"Loan Originator Information\n\nOne Occurrence"},{"FieldGroupID":"10R","Description":"Information for Government Monitoring Purposes\n\n ? reporting on Multiple Race per Applicant"},{"FieldGroupID":"000","Description":"File Identification"},{"FieldGroupID":"99B","Description":"Fannie Mae Transmittal Data\n\nSegment required for Import"},{"FieldGroupID":"ADS","Description":"Additional Data Segment\n\nAll systems should support multiple occurrences of this segment to\nprevent the loss of data when a user imports/exports a 1003 file\nbetween systems. New fields added to support FHFA requirements."},{"FieldGroupID":"SCA","Description":"Record ID Score"},{"FieldGroupID":"000","Description":"File Identification"},{"FieldGroupID":"LNC","Description":"Record ID-\nLoan Characteristics for Eligibility"},{"FieldGroupID":"PID","Description":"Product Identification\n\nSegment required for import"},{"FieldGroupID":"PCH","Description":"Product Characteristics\n\nSegment required for import"},{"FieldGroupID":"ARM","Description":"ARM\n\nRequired for ARM, if Amortization Type (field 01A-090) is ?01?"},{"FieldGroupID":"PAJ","Description":"Payment Adjustment Occurrences.\n\nThis segment is not used by DU. Contains DO product / pricing information."},{"FieldGroupID":"RAJ","Description":"Rate Adjustment Occurrences\n\nSpecify if Field #01A-090 = 01 for ARM and if the ARM will have rate adjustments. NOT REQUIRED."},{"FieldGroupID":"000","Description":"File Identification"},{"FieldGroupID":"000","Description":"Casefile Identification"},{"FieldGroupID":"LEA","Description":"Lender Data"},{"FieldGroupID":"GOA","Description":"Both FHA/VA Loans"},{"FieldGroupID":"GOB","Description":""},{"FieldGroupID":"GOC","Description":"VA Loans Only\n\nRequired for VA loans"},{"FieldGroupID":"GOD","Description":"VA Loans Only\n\nRequired for VA Loans"},{"FieldGroupID":"GOE","Description":"Credit Data\n\nBoth FHA/VA Loans"},{"FieldGroupID":"000","Description":"File Identification"},{"FieldGroupID":"LMD","Description":"Community Lending Loans\n\nRequired for Community Lending"},{"FieldGroupID":"TT","Description":"Transaction Trailer"},{"FieldGroupID":"ET","Description":"Envelope Trailer"}];
})();

export const sampleFNM:string=``;