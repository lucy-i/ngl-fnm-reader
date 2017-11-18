/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN 
{
private _APPLICATIONField:_APPLICATION ;
private _CLOSING_DOCUMENTSField:_CLOSING_DOCUMENTS ;
private mISMOVersionIdentifierField:string ;
constructor ()
        {
this.mISMOVersionIdentifierField = "2.6";
}
public get _APPLICATION(): _APPLICATION
{
return this._APPLICATIONField;
}
public set _APPLICATION(value: _APPLICATION)
{
this._APPLICATIONField = value;
}
public get _CLOSING_DOCUMENTS(): _CLOSING_DOCUMENTS
{
return this._CLOSING_DOCUMENTSField;
}
public set _CLOSING_DOCUMENTS(value: _CLOSING_DOCUMENTS)
{
this._CLOSING_DOCUMENTSField = value;
}
public get MISMOVersionIdentifier(): string
{
return this.mISMOVersionIdentifierField;
}
public set MISMOVersionIdentifier(value: string)
{
this.mISMOVersionIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _APPLICATION 
{
private _DATA_INFORMATIONField:_DATA_INFORMATION ;
private aDDITIONAL_CASE_DATAField:ADDITIONAL_CASE_DATA ;
private aFFORDABLE_LENDINGField:AFFORDABLE_LENDING ;
private aSSETField:ASSET[] ;
private dOWN_PAYMENTField:DOWN_PAYMENT[] ;
private eSCROWField:ESCROW[] ;
private eSCROW_ACCOUNT_SUMMARYField:ESCROW_ACCOUNT_SUMMARY ;
private gOVERNMENT_LOANField:GOVERNMENT_LOAN ;
private gOVERNMENT_REPORTINGField:GOVERNMENT_REPORTING ;
private iNTERVIEWER_INFORMATIONField:INTERVIEWER_INFORMATION ;
private lIABILITYField:LIABILITY[] ;
private lOAN_PRODUCT_DATAField:LOAN_PRODUCT_DATA ;
private lOAN_PURPOSEField:LOAN_PURPOSE ;
private lOAN_QUALIFICATIONField:LOAN_QUALIFICATION ;
private mERSField:MERS ;
private mI_DATAField:MI_DATA ;
private mORTGAGE_TERMSField:MORTGAGE_TERMS ;
private pROPERTYField:PROPERTY ;
private pROPOSED_HOUSING_EXPENSEField:PROPOSED_HOUSING_EXPENSE[] ;
private rEO_PROPERTYField:REO_PROPERTY[] ;
private rESPA_FEEField:RESPA_FEE[] ;
private tITLE_HOLDERField:TITLE_HOLDER[] ;
private tRANSACTION_DETAILField:TRANSACTION_DETAIL ;
private bORROWERField:BORROWER[] ;
private iNVESTOR_FEATUREField:INVESTOR_FEATURE[] ;
private lOAN_ORIGINATION_SYSTEMField:LOAN_ORIGINATION_SYSTEM ;
private lOAN_UNDERWRITINGField:LOAN_UNDERWRITING[] ;
private rELATED_LOANField:RELATED_LOAN[] ;
private uRLA_TOTALField:URLA_TOTAL[] ;
private lOAN_ORIGINATORField:LOAN_ORIGINATOR[] ;
private _IDField:string ;
public get _DATA_INFORMATION(): _DATA_INFORMATION
{
return this._DATA_INFORMATIONField;
}
public set _DATA_INFORMATION(value: _DATA_INFORMATION)
{
this._DATA_INFORMATIONField = value;
}
public get ADDITIONAL_CASE_DATA(): ADDITIONAL_CASE_DATA
{
return this.aDDITIONAL_CASE_DATAField;
}
public set ADDITIONAL_CASE_DATA(value: ADDITIONAL_CASE_DATA)
{
this.aDDITIONAL_CASE_DATAField = value;
}
public get AFFORDABLE_LENDING(): AFFORDABLE_LENDING
{
return this.aFFORDABLE_LENDINGField;
}
public set AFFORDABLE_LENDING(value: AFFORDABLE_LENDING)
{
this.aFFORDABLE_LENDINGField = value;
}
public get ASSET(): ASSET[]
{
return this.aSSETField;
}
public set ASSET(value: ASSET[])
{
this.aSSETField = value;
}
public get DOWN_PAYMENT(): DOWN_PAYMENT[]
{
return this.dOWN_PAYMENTField;
}
public set DOWN_PAYMENT(value: DOWN_PAYMENT[])
{
this.dOWN_PAYMENTField = value;
}
public get ESCROW(): ESCROW[]
{
return this.eSCROWField;
}
public set ESCROW(value: ESCROW[])
{
this.eSCROWField = value;
}
public get ESCROW_ACCOUNT_SUMMARY(): ESCROW_ACCOUNT_SUMMARY
{
return this.eSCROW_ACCOUNT_SUMMARYField;
}
public set ESCROW_ACCOUNT_SUMMARY(value: ESCROW_ACCOUNT_SUMMARY)
{
this.eSCROW_ACCOUNT_SUMMARYField = value;
}
public get GOVERNMENT_LOAN(): GOVERNMENT_LOAN
{
return this.gOVERNMENT_LOANField;
}
public set GOVERNMENT_LOAN(value: GOVERNMENT_LOAN)
{
this.gOVERNMENT_LOANField = value;
}
public get GOVERNMENT_REPORTING(): GOVERNMENT_REPORTING
{
return this.gOVERNMENT_REPORTINGField;
}
public set GOVERNMENT_REPORTING(value: GOVERNMENT_REPORTING)
{
this.gOVERNMENT_REPORTINGField = value;
}
public get INTERVIEWER_INFORMATION(): INTERVIEWER_INFORMATION
{
return this.iNTERVIEWER_INFORMATIONField;
}
public set INTERVIEWER_INFORMATION(value: INTERVIEWER_INFORMATION)
{
this.iNTERVIEWER_INFORMATIONField = value;
}
public get LIABILITY(): LIABILITY[]
{
return this.lIABILITYField;
}
public set LIABILITY(value: LIABILITY[])
{
this.lIABILITYField = value;
}
public get LOAN_PRODUCT_DATA(): LOAN_PRODUCT_DATA
{
return this.lOAN_PRODUCT_DATAField;
}
public set LOAN_PRODUCT_DATA(value: LOAN_PRODUCT_DATA)
{
this.lOAN_PRODUCT_DATAField = value;
}
public get LOAN_PURPOSE(): LOAN_PURPOSE
{
return this.lOAN_PURPOSEField;
}
public set LOAN_PURPOSE(value: LOAN_PURPOSE)
{
this.lOAN_PURPOSEField = value;
}
public get LOAN_QUALIFICATION(): LOAN_QUALIFICATION
{
return this.lOAN_QUALIFICATIONField;
}
public set LOAN_QUALIFICATION(value: LOAN_QUALIFICATION)
{
this.lOAN_QUALIFICATIONField = value;
}
public get MERS(): MERS
{
return this.mERSField;
}
public set MERS(value: MERS)
{
this.mERSField = value;
}
public get MI_DATA(): MI_DATA
{
return this.mI_DATAField;
}
public set MI_DATA(value: MI_DATA)
{
this.mI_DATAField = value;
}
public get MORTGAGE_TERMS(): MORTGAGE_TERMS
{
return this.mORTGAGE_TERMSField;
}
public set MORTGAGE_TERMS(value: MORTGAGE_TERMS)
{
this.mORTGAGE_TERMSField = value;
}
public get PROPERTY(): PROPERTY
{
return this.pROPERTYField;
}
public set PROPERTY(value: PROPERTY)
{
this.pROPERTYField = value;
}
public get PROPOSED_HOUSING_EXPENSE(): PROPOSED_HOUSING_EXPENSE[]
{
return this.pROPOSED_HOUSING_EXPENSEField;
}
public set PROPOSED_HOUSING_EXPENSE(value: PROPOSED_HOUSING_EXPENSE[])
{
this.pROPOSED_HOUSING_EXPENSEField = value;
}
public get REO_PROPERTY(): REO_PROPERTY[]
{
return this.rEO_PROPERTYField;
}
public set REO_PROPERTY(value: REO_PROPERTY[])
{
this.rEO_PROPERTYField = value;
}
public get RESPA_FEE(): RESPA_FEE[]
{
return this.rESPA_FEEField;
}
public set RESPA_FEE(value: RESPA_FEE[])
{
this.rESPA_FEEField = value;
}
public get TITLE_HOLDER(): TITLE_HOLDER[]
{
return this.tITLE_HOLDERField;
}
public set TITLE_HOLDER(value: TITLE_HOLDER[])
{
this.tITLE_HOLDERField = value;
}
public get TRANSACTION_DETAIL(): TRANSACTION_DETAIL
{
return this.tRANSACTION_DETAILField;
}
public set TRANSACTION_DETAIL(value: TRANSACTION_DETAIL)
{
this.tRANSACTION_DETAILField = value;
}
public get BORROWER(): BORROWER[]
{
return this.bORROWERField;
}
public set BORROWER(value: BORROWER[])
{
this.bORROWERField = value;
}
public get INVESTOR_FEATURE(): INVESTOR_FEATURE[]
{
return this.iNVESTOR_FEATUREField;
}
public set INVESTOR_FEATURE(value: INVESTOR_FEATURE[])
{
this.iNVESTOR_FEATUREField = value;
}
public get LOAN_ORIGINATION_SYSTEM(): LOAN_ORIGINATION_SYSTEM
{
return this.lOAN_ORIGINATION_SYSTEMField;
}
public set LOAN_ORIGINATION_SYSTEM(value: LOAN_ORIGINATION_SYSTEM)
{
this.lOAN_ORIGINATION_SYSTEMField = value;
}
public get LOAN_UNDERWRITING(): LOAN_UNDERWRITING[]
{
return this.lOAN_UNDERWRITINGField;
}
public set LOAN_UNDERWRITING(value: LOAN_UNDERWRITING[])
{
this.lOAN_UNDERWRITINGField = value;
}
public get RELATED_LOAN(): RELATED_LOAN[]
{
return this.rELATED_LOANField;
}
public set RELATED_LOAN(value: RELATED_LOAN[])
{
this.rELATED_LOANField = value;
}
public get URLA_TOTAL(): URLA_TOTAL[]
{
return this.uRLA_TOTALField;
}
public set URLA_TOTAL(value: URLA_TOTAL[])
{
this.uRLA_TOTALField = value;
}
public get LOAN_ORIGINATOR(): LOAN_ORIGINATOR[]
{
return this.lOAN_ORIGINATORField;
}
public set LOAN_ORIGINATOR(value: LOAN_ORIGINATOR[])
{
this.lOAN_ORIGINATORField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _DATA_INFORMATION 
{
private dATA_VERSIONField:DATA_VERSION[] ;
private _IDField:string ;
public get DATA_VERSION(): DATA_VERSION[]
{
return this.dATA_VERSIONField;
}
public set DATA_VERSION(value: DATA_VERSION[])
{
this.dATA_VERSIONField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class DATA_VERSION 
{
private _NameField:string ;
private _NumberField:string ;
private _IDField:string ;
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _Number(): string
{
return this._NumberField;
}
public set _Number(value: string)
{
this._NumberField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ADDITIONAL_CASE_DATA 
{
private mORTGAGE_SCOREField:MORTGAGE_SCORE[] ;
private tRANSMITTAL_DATAField:TRANSMITTAL_DATA ;
private _IDField:string ;
public get MORTGAGE_SCORE(): MORTGAGE_SCORE[]
{
return this.mORTGAGE_SCOREField;
}
public set MORTGAGE_SCORE(value: MORTGAGE_SCORE[])
{
this.mORTGAGE_SCOREField = value;
}
public get TRANSMITTAL_DATA(): TRANSMITTAL_DATA
{
return this.tRANSMITTAL_DATAField;
}
public set TRANSMITTAL_DATA(value: TRANSMITTAL_DATA)
{
this.tRANSMITTAL_DATAField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MORTGAGE_SCORE 
{
private _DateField:string ;
private _TypeField:MORTGAGE_SCORE_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _ValueField:string ;
private _IDField:string ;
public get _Date(): string
{
return this._DateField;
}
public set _Date(value: string)
{
this._DateField = value;
}
public get _Type(): MORTGAGE_SCORE_Type
{
return this._TypeField;
}
public set _Type(value: MORTGAGE_SCORE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _Value(): string
{
return this._ValueField;
}
public set _Value(value: string)
{
this._ValueField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum MORTGAGE_SCORE_Type {
 PMIAuraAQIScore,

Other,

GE_IQScore,

UGIAccuscore,

FraudFilterScore
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TRANSMITTAL_DATA 
{
private armsLengthIndicatorField:TRANSMITTAL_DATAArmsLengthIndicator ;
private armsLengthIndicatorFieldSpecified:boolean ;
private belowMarketSubordinateFinancingIndicatorField:TRANSMITTAL_DATABelowMarketSubordinateFinancingIndicator ;
private belowMarketSubordinateFinancingIndicatorFieldSpecified:boolean ;
private buydownRatePercentField:string ;
private caseStateTypeField:TRANSMITTAL_DATACaseStateType ;
private caseStateTypeFieldSpecified:boolean ;
private creditReportAuthorizationIndicatorField:TRANSMITTAL_DATACreditReportAuthorizationIndicator ;
private creditReportAuthorizationIndicatorFieldSpecified:boolean ;
private currentFirstMortgageHolderTypeField:TRANSMITTAL_DATACurrentFirstMortgageHolderType ;
private currentFirstMortgageHolderTypeFieldSpecified:boolean ;
private lenderBranchIdentifierField:string ;
private lenderRegistrationIdentifierField:string ;
private propertyAppraisedValueAmountField:string ;
private propertyEstimatedValueAmountField:string ;
private loanOriginationSystemLoanIdentifierField:string ;
private investorLoanIdentifierField:string ;
private investorInstitutionIdentifierField:string ;
private commitmentReferenceIdentifierField:string ;
private concurrentOriginationIndicatorField:TRANSMITTAL_DATAConcurrentOriginationIndicator ;
private concurrentOriginationIndicatorFieldSpecified:boolean ;
private concurrentOriginationLenderIndicatorField:TRANSMITTAL_DATAConcurrentOriginationLenderIndicator ;
private concurrentOriginationLenderIndicatorFieldSpecified:boolean ;
private rateLockPeriodDaysField:string ;
private rateLockTypeField:TRANSMITTAL_DATARateLockType ;
private rateLockTypeFieldSpecified:boolean ;
private rateLockRequestedExtensionDaysField:string ;
private _IDField:string ;
private propertiesFinancedByLenderCountField:string ;
private loanOriginatorTypeField:TRANSMITTAL_DATALoanOriginatorType ;
private loanOriginatorTypeFieldSpecified:boolean ;
private loanOriginatorTypeOtherDescriptionField:string ;
private currentFirstMortgageHolderTypeOtherDescriptionField:string ;
private caseStateTypeOtherDescriptionField:string ;
public get ArmsLengthIndicator(): TRANSMITTAL_DATAArmsLengthIndicator
{
return this.armsLengthIndicatorField;
}
public set ArmsLengthIndicator(value: TRANSMITTAL_DATAArmsLengthIndicator)
{
this.armsLengthIndicatorField = value;
}
public get ArmsLengthIndicatorSpecified(): boolean
{
return this.armsLengthIndicatorFieldSpecified;
}
public set ArmsLengthIndicatorSpecified(value: boolean)
{
this.armsLengthIndicatorFieldSpecified = value;
}
public get BelowMarketSubordinateFinancingIndicator(): TRANSMITTAL_DATABelowMarketSubordinateFinancingIndicator
{
return this.belowMarketSubordinateFinancingIndicatorField;
}
public set BelowMarketSubordinateFinancingIndicator(value: TRANSMITTAL_DATABelowMarketSubordinateFinancingIndicator)
{
this.belowMarketSubordinateFinancingIndicatorField = value;
}
public get BelowMarketSubordinateFinancingIndicatorSpecified(): boolean
{
return this.belowMarketSubordinateFinancingIndicatorFieldSpecified;
}
public set BelowMarketSubordinateFinancingIndicatorSpecified(value: boolean)
{
this.belowMarketSubordinateFinancingIndicatorFieldSpecified = value;
}
public get BuydownRatePercent(): string
{
return this.buydownRatePercentField;
}
public set BuydownRatePercent(value: string)
{
this.buydownRatePercentField = value;
}
public get CaseStateType(): TRANSMITTAL_DATACaseStateType
{
return this.caseStateTypeField;
}
public set CaseStateType(value: TRANSMITTAL_DATACaseStateType)
{
this.caseStateTypeField = value;
}
public get CaseStateTypeSpecified(): boolean
{
return this.caseStateTypeFieldSpecified;
}
public set CaseStateTypeSpecified(value: boolean)
{
this.caseStateTypeFieldSpecified = value;
}
public get CreditReportAuthorizationIndicator(): TRANSMITTAL_DATACreditReportAuthorizationIndicator
{
return this.creditReportAuthorizationIndicatorField;
}
public set CreditReportAuthorizationIndicator(value: TRANSMITTAL_DATACreditReportAuthorizationIndicator)
{
this.creditReportAuthorizationIndicatorField = value;
}
public get CreditReportAuthorizationIndicatorSpecified(): boolean
{
return this.creditReportAuthorizationIndicatorFieldSpecified;
}
public set CreditReportAuthorizationIndicatorSpecified(value: boolean)
{
this.creditReportAuthorizationIndicatorFieldSpecified = value;
}
public get CurrentFirstMortgageHolderType(): TRANSMITTAL_DATACurrentFirstMortgageHolderType
{
return this.currentFirstMortgageHolderTypeField;
}
public set CurrentFirstMortgageHolderType(value: TRANSMITTAL_DATACurrentFirstMortgageHolderType)
{
this.currentFirstMortgageHolderTypeField = value;
}
public get CurrentFirstMortgageHolderTypeSpecified(): boolean
{
return this.currentFirstMortgageHolderTypeFieldSpecified;
}
public set CurrentFirstMortgageHolderTypeSpecified(value: boolean)
{
this.currentFirstMortgageHolderTypeFieldSpecified = value;
}
public get LenderBranchIdentifier(): string
{
return this.lenderBranchIdentifierField;
}
public set LenderBranchIdentifier(value: string)
{
this.lenderBranchIdentifierField = value;
}
public get LenderRegistrationIdentifier(): string
{
return this.lenderRegistrationIdentifierField;
}
public set LenderRegistrationIdentifier(value: string)
{
this.lenderRegistrationIdentifierField = value;
}
public get PropertyAppraisedValueAmount(): string
{
return this.propertyAppraisedValueAmountField;
}
public set PropertyAppraisedValueAmount(value: string)
{
this.propertyAppraisedValueAmountField = value;
}
public get PropertyEstimatedValueAmount(): string
{
return this.propertyEstimatedValueAmountField;
}
public set PropertyEstimatedValueAmount(value: string)
{
this.propertyEstimatedValueAmountField = value;
}
public get LoanOriginationSystemLoanIdentifier(): string
{
return this.loanOriginationSystemLoanIdentifierField;
}
public set LoanOriginationSystemLoanIdentifier(value: string)
{
this.loanOriginationSystemLoanIdentifierField = value;
}
public get InvestorLoanIdentifier(): string
{
return this.investorLoanIdentifierField;
}
public set InvestorLoanIdentifier(value: string)
{
this.investorLoanIdentifierField = value;
}
public get InvestorInstitutionIdentifier(): string
{
return this.investorInstitutionIdentifierField;
}
public set InvestorInstitutionIdentifier(value: string)
{
this.investorInstitutionIdentifierField = value;
}
public get CommitmentReferenceIdentifier(): string
{
return this.commitmentReferenceIdentifierField;
}
public set CommitmentReferenceIdentifier(value: string)
{
this.commitmentReferenceIdentifierField = value;
}
public get ConcurrentOriginationIndicator(): TRANSMITTAL_DATAConcurrentOriginationIndicator
{
return this.concurrentOriginationIndicatorField;
}
public set ConcurrentOriginationIndicator(value: TRANSMITTAL_DATAConcurrentOriginationIndicator)
{
this.concurrentOriginationIndicatorField = value;
}
public get ConcurrentOriginationIndicatorSpecified(): boolean
{
return this.concurrentOriginationIndicatorFieldSpecified;
}
public set ConcurrentOriginationIndicatorSpecified(value: boolean)
{
this.concurrentOriginationIndicatorFieldSpecified = value;
}
public get ConcurrentOriginationLenderIndicator(): TRANSMITTAL_DATAConcurrentOriginationLenderIndicator
{
return this.concurrentOriginationLenderIndicatorField;
}
public set ConcurrentOriginationLenderIndicator(value: TRANSMITTAL_DATAConcurrentOriginationLenderIndicator)
{
this.concurrentOriginationLenderIndicatorField = value;
}
public get ConcurrentOriginationLenderIndicatorSpecified(): boolean
{
return this.concurrentOriginationLenderIndicatorFieldSpecified;
}
public set ConcurrentOriginationLenderIndicatorSpecified(value: boolean)
{
this.concurrentOriginationLenderIndicatorFieldSpecified = value;
}
public get RateLockPeriodDays(): string
{
return this.rateLockPeriodDaysField;
}
public set RateLockPeriodDays(value: string)
{
this.rateLockPeriodDaysField = value;
}
public get RateLockType(): TRANSMITTAL_DATARateLockType
{
return this.rateLockTypeField;
}
public set RateLockType(value: TRANSMITTAL_DATARateLockType)
{
this.rateLockTypeField = value;
}
public get RateLockTypeSpecified(): boolean
{
return this.rateLockTypeFieldSpecified;
}
public set RateLockTypeSpecified(value: boolean)
{
this.rateLockTypeFieldSpecified = value;
}
public get RateLockRequestedExtensionDays(): string
{
return this.rateLockRequestedExtensionDaysField;
}
public set RateLockRequestedExtensionDays(value: string)
{
this.rateLockRequestedExtensionDaysField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get PropertiesFinancedByLenderCount(): string
{
return this.propertiesFinancedByLenderCountField;
}
public set PropertiesFinancedByLenderCount(value: string)
{
this.propertiesFinancedByLenderCountField = value;
}
public get LoanOriginatorType(): TRANSMITTAL_DATALoanOriginatorType
{
return this.loanOriginatorTypeField;
}
public set LoanOriginatorType(value: TRANSMITTAL_DATALoanOriginatorType)
{
this.loanOriginatorTypeField = value;
}
public get LoanOriginatorTypeSpecified(): boolean
{
return this.loanOriginatorTypeFieldSpecified;
}
public set LoanOriginatorTypeSpecified(value: boolean)
{
this.loanOriginatorTypeFieldSpecified = value;
}
public get LoanOriginatorTypeOtherDescription(): string
{
return this.loanOriginatorTypeOtherDescriptionField;
}
public set LoanOriginatorTypeOtherDescription(value: string)
{
this.loanOriginatorTypeOtherDescriptionField = value;
}
public get CurrentFirstMortgageHolderTypeOtherDescription(): string
{
return this.currentFirstMortgageHolderTypeOtherDescriptionField;
}
public set CurrentFirstMortgageHolderTypeOtherDescription(value: string)
{
this.currentFirstMortgageHolderTypeOtherDescriptionField = value;
}
public get CaseStateTypeOtherDescription(): string
{
return this.caseStateTypeOtherDescriptionField;
}
public set CaseStateTypeOtherDescription(value: string)
{
this.caseStateTypeOtherDescriptionField = value;
} 
}
export enum TRANSMITTAL_DATAArmsLengthIndicator {
 N,

Y
 }
export enum TRANSMITTAL_DATABelowMarketSubordinateFinancingIndicator {
 N,

Y
 }
export enum TRANSMITTAL_DATACaseStateType {
 PostClosingQualityControl,

FinalDisposition,

Prequalification,

Underwriting,

Other,

Application
 }
export enum TRANSMITTAL_DATACreditReportAuthorizationIndicator {
 N,

Y
 }
export enum TRANSMITTAL_DATACurrentFirstMortgageHolderType {
 FRE,

Unknown,

Other,

FNM
 }
export enum TRANSMITTAL_DATAConcurrentOriginationIndicator {
 N,

Y
 }
export enum TRANSMITTAL_DATAConcurrentOriginationLenderIndicator {
 N,

Y
 }
export enum TRANSMITTAL_DATARateLockType {
 Mandatory,

BestEfforts
 }
export enum TRANSMITTAL_DATALoanOriginatorType {
 Correspondent,

Other,

Broker,

Lender
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class AFFORDABLE_LENDING 
{
private fNMCommunityLendingProductNameField:string ;
private fNMCommunityLendingProductTypeField:AFFORDABLE_LENDINGFNMCommunityLendingProductType ;
private fNMCommunityLendingProductTypeFieldSpecified:boolean ;
private fNMCommunityLendingProductTypeOtherDescriptionField:string ;
private fNMCommunitySecondsIndicatorField:AFFORDABLE_LENDINGFNMCommunitySecondsIndicator ;
private fNMCommunitySecondsIndicatorFieldSpecified:boolean ;
private fNMNeighborsMortgageEligibilityIndicatorField:AFFORDABLE_LENDINGFNMNeighborsMortgageEligibilityIndicator ;
private fNMNeighborsMortgageEligibilityIndicatorFieldSpecified:boolean ;
private fREAffordableProgramIdentifierField:string ;
private hUDIncomeLimitAdjustmentFactorField:string ;
private hUDLendingIncomeLimitAmountField:string ;
private hUDMedianIncomeAmountField:string ;
private mSAIdentifierField:string ;
private _IDField:string ;
public get FNMCommunityLendingProductName(): string
{
return this.fNMCommunityLendingProductNameField;
}
public set FNMCommunityLendingProductName(value: string)
{
this.fNMCommunityLendingProductNameField = value;
}
public get FNMCommunityLendingProductType(): AFFORDABLE_LENDINGFNMCommunityLendingProductType
{
return this.fNMCommunityLendingProductTypeField;
}
public set FNMCommunityLendingProductType(value: AFFORDABLE_LENDINGFNMCommunityLendingProductType)
{
this.fNMCommunityLendingProductTypeField = value;
}
public get FNMCommunityLendingProductTypeSpecified(): boolean
{
return this.fNMCommunityLendingProductTypeFieldSpecified;
}
public set FNMCommunityLendingProductTypeSpecified(value: boolean)
{
this.fNMCommunityLendingProductTypeFieldSpecified = value;
}
public get FNMCommunityLendingProductTypeOtherDescription(): string
{
return this.fNMCommunityLendingProductTypeOtherDescriptionField;
}
public set FNMCommunityLendingProductTypeOtherDescription(value: string)
{
this.fNMCommunityLendingProductTypeOtherDescriptionField = value;
}
public get FNMCommunitySecondsIndicator(): AFFORDABLE_LENDINGFNMCommunitySecondsIndicator
{
return this.fNMCommunitySecondsIndicatorField;
}
public set FNMCommunitySecondsIndicator(value: AFFORDABLE_LENDINGFNMCommunitySecondsIndicator)
{
this.fNMCommunitySecondsIndicatorField = value;
}
public get FNMCommunitySecondsIndicatorSpecified(): boolean
{
return this.fNMCommunitySecondsIndicatorFieldSpecified;
}
public set FNMCommunitySecondsIndicatorSpecified(value: boolean)
{
this.fNMCommunitySecondsIndicatorFieldSpecified = value;
}
public get FNMNeighborsMortgageEligibilityIndicator(): AFFORDABLE_LENDINGFNMNeighborsMortgageEligibilityIndicator
{
return this.fNMNeighborsMortgageEligibilityIndicatorField;
}
public set FNMNeighborsMortgageEligibilityIndicator(value: AFFORDABLE_LENDINGFNMNeighborsMortgageEligibilityIndicator)
{
this.fNMNeighborsMortgageEligibilityIndicatorField = value;
}
public get FNMNeighborsMortgageEligibilityIndicatorSpecified(): boolean
{
return this.fNMNeighborsMortgageEligibilityIndicatorFieldSpecified;
}
public set FNMNeighborsMortgageEligibilityIndicatorSpecified(value: boolean)
{
this.fNMNeighborsMortgageEligibilityIndicatorFieldSpecified = value;
}
public get FREAffordableProgramIdentifier(): string
{
return this.fREAffordableProgramIdentifierField;
}
public set FREAffordableProgramIdentifier(value: string)
{
this.fREAffordableProgramIdentifierField = value;
}
public get HUDIncomeLimitAdjustmentFactor(): string
{
return this.hUDIncomeLimitAdjustmentFactorField;
}
public set HUDIncomeLimitAdjustmentFactor(value: string)
{
this.hUDIncomeLimitAdjustmentFactorField = value;
}
public get HUDLendingIncomeLimitAmount(): string
{
return this.hUDLendingIncomeLimitAmountField;
}
public set HUDLendingIncomeLimitAmount(value: string)
{
this.hUDLendingIncomeLimitAmountField = value;
}
public get HUDMedianIncomeAmount(): string
{
return this.hUDMedianIncomeAmountField;
}
public set HUDMedianIncomeAmount(value: string)
{
this.hUDMedianIncomeAmountField = value;
}
public get MSAIdentifier(): string
{
return this.mSAIdentifierField;
}
public set MSAIdentifier(value: string)
{
this.mSAIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum AFFORDABLE_LENDINGFNMCommunityLendingProductType {
 MyCommunityMortgage,

Fannie32,

Other,

Fannie97,

CommunityHomeBuyersProgram,

CommunityHomeBuyerProgram
 }
export enum AFFORDABLE_LENDINGFNMCommunitySecondsIndicator {
 N,

Y
 }
export enum AFFORDABLE_LENDINGFNMNeighborsMortgageEligibilityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ASSET 
{
private borrowerIDField:string ;
private _AccountIdentifierField:string ;
private _CashOrMarketValueAmountField:string ;
private _TypeField:ASSET_Type ;
private _TypeFieldSpecified:boolean ;
private _HolderNameField:string ;
private _HolderStreetAddressField:string ;
private _HolderCityField:string ;
private _HolderStateField:string ;
private _HolderPostalCodeField:string ;
private automobileMakeDescriptionField:string ;
private automobileModelYearField:string ;
private lifeInsuranceFaceValueAmountField:string ;
private otherAssetTypeDescriptionField:string ;
private stockBondMutualFundShareCountField:string ;
private _VerifiedIndicatorField:ASSET_VerifiedIndicator ;
private _VerifiedIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _HolderStreetAddress2Field:string ;
private assetDescriptionField:string ;
private _AccountInNameOfDescriptionField:string ;
public get BorrowerID(): string
{
return this.borrowerIDField;
}
public set BorrowerID(value: string)
{
this.borrowerIDField = value;
}
public get _AccountIdentifier(): string
{
return this._AccountIdentifierField;
}
public set _AccountIdentifier(value: string)
{
this._AccountIdentifierField = value;
}
public get _CashOrMarketValueAmount(): string
{
return this._CashOrMarketValueAmountField;
}
public set _CashOrMarketValueAmount(value: string)
{
this._CashOrMarketValueAmountField = value;
}
public get _Type(): ASSET_Type
{
return this._TypeField;
}
public set _Type(value: ASSET_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _HolderName(): string
{
return this._HolderNameField;
}
public set _HolderName(value: string)
{
this._HolderNameField = value;
}
public get _HolderStreetAddress(): string
{
return this._HolderStreetAddressField;
}
public set _HolderStreetAddress(value: string)
{
this._HolderStreetAddressField = value;
}
public get _HolderCity(): string
{
return this._HolderCityField;
}
public set _HolderCity(value: string)
{
this._HolderCityField = value;
}
public get _HolderState(): string
{
return this._HolderStateField;
}
public set _HolderState(value: string)
{
this._HolderStateField = value;
}
public get _HolderPostalCode(): string
{
return this._HolderPostalCodeField;
}
public set _HolderPostalCode(value: string)
{
this._HolderPostalCodeField = value;
}
public get AutomobileMakeDescription(): string
{
return this.automobileMakeDescriptionField;
}
public set AutomobileMakeDescription(value: string)
{
this.automobileMakeDescriptionField = value;
}
public get AutomobileModelYear(): string
{
return this.automobileModelYearField;
}
public set AutomobileModelYear(value: string)
{
this.automobileModelYearField = value;
}
public get LifeInsuranceFaceValueAmount(): string
{
return this.lifeInsuranceFaceValueAmountField;
}
public set LifeInsuranceFaceValueAmount(value: string)
{
this.lifeInsuranceFaceValueAmountField = value;
}
public get OtherAssetTypeDescription(): string
{
return this.otherAssetTypeDescriptionField;
}
public set OtherAssetTypeDescription(value: string)
{
this.otherAssetTypeDescriptionField = value;
}
public get StockBondMutualFundShareCount(): string
{
return this.stockBondMutualFundShareCountField;
}
public set StockBondMutualFundShareCount(value: string)
{
this.stockBondMutualFundShareCountField = value;
}
public get _VerifiedIndicator(): ASSET_VerifiedIndicator
{
return this._VerifiedIndicatorField;
}
public set _VerifiedIndicator(value: ASSET_VerifiedIndicator)
{
this._VerifiedIndicatorField = value;
}
public get _VerifiedIndicatorSpecified(): boolean
{
return this._VerifiedIndicatorFieldSpecified;
}
public set _VerifiedIndicatorSpecified(value: boolean)
{
this._VerifiedIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _HolderStreetAddress2(): string
{
return this._HolderStreetAddress2Field;
}
public set _HolderStreetAddress2(value: string)
{
this._HolderStreetAddress2Field = value;
}
public get AssetDescription(): string
{
return this.assetDescriptionField;
}
public set AssetDescription(value: string)
{
this.assetDescriptionField = value;
}
public get _AccountInNameOfDescription(): string
{
return this._AccountInNameOfDescriptionField;
}
public set _AccountInNameOfDescription(value: string)
{
this._AccountInNameOfDescriptionField = value;
} 
}
export enum ASSET_Type {
 CashOnHand,

GiftsTotal,

BorrowerEstimatedTotalAssets,

OtherNonLiquidAssets,

SavingsAccount,

LifeInsurance,

RelocationMoney,

CertificateOfDepositTimeDeposit,

Automobile,

MoneyMarketFund,

SaleOtherAssets,

GrantsNotDeposited,

MutualFund,

PendingNetSaleProceedsFromRealEstateAssets,

GiftsNotDeposited,

RealEstateOwned,

OtherLiquidAssets,

Bond,

NetWorthOfBusinessOwned,

RetirementFund,

CheckingAccount,

Stock,

TrustAccount,

EarnestMoneyCashDepositTowardPurchase,

BridgeLoanNotDeposited,

SecuredBorrowedFundsNotDeposited
 }
export enum ASSET_VerifiedIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class DOWN_PAYMENT 
{
private _AmountField:string ;
private _SourceDescriptionField:string ;
private _TypeField:DOWN_PAYMENT_Type ;
private _TypeFieldSpecified:boolean ;
private _IDField:string ;
private _TypeOtherDescriptionField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _SourceDescription(): string
{
return this._SourceDescriptionField;
}
public set _SourceDescription(value: string)
{
this._SourceDescriptionField = value;
}
public get _Type(): DOWN_PAYMENT_Type
{
return this._TypeField;
}
public set _Type(value: DOWN_PAYMENT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
} 
}
export enum DOWN_PAYMENT_Type {
 HousingRelocation,

GiftFunds,

CashOnHand,

StocksAndBonds,

LotEquity,

CreditCard,

EquityOnSoldProperty,

PledgedCollateral,

Contribution,

UnsecuredBorrowedFunds,

DepositOnSalesContract,

ForgivableSecuredLoan,

LifeInsuranceCashValue,

SecuredBorrowedFunds,

SaleOfChattel,

EquityOnSubjectProperty,

CheckingSavings,

PremiumFunds,

RetirementFunds,

SalesPriceAdjustment,

SweatEquity,

TradeEquity,

OtherTypeOfDownPayment,

EquityOnPendingSale,

TrustFunds,

RentWithOptionToPurchase,

SecondaryFinancing,

BridgeLoan,

MortgageCreditCertificates,

CashOrOtherEquity
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ESCROW 
{
private _ACCOUNT_SUMMARYField:_ACCOUNT_SUMMARY ;
private _PAYMENTSField:_PAYMENTS[] ;
private _PAID_TOField:_PAID_TO ;
private _AnnualPaymentAmountField:string ;
private _CollectedNumberOfMonthsCountField:string ;
private _DueDateField:string ;
private _ItemTypeField:ESCROW_ItemType ;
private _ItemTypeFieldSpecified:boolean ;
private _ItemTypeOtherDescriptionField:string ;
private _MonthlyPaymentAmountField:string ;
private _MonthlyPaymentRoundingTypeField:ESCROW_MonthlyPaymentRoundingType ;
private _MonthlyPaymentRoundingTypeFieldSpecified:boolean ;
private _PaidByTypeField:ESCROW_PaidByType ;
private _PaidByTypeFieldSpecified:boolean ;
private _PaymentFrequencyTypeField:ESCROW_PaymentFrequencyType ;
private _PaymentFrequencyTypeFieldSpecified:boolean ;
private _PaymentFrequencyTypeOtherDescriptionField:string ;
private _PremiumAmountField:string ;
private _PremiumPaidByTypeField:ESCROW_PremiumPaidByType ;
private _PremiumPaidByTypeFieldSpecified:boolean ;
private _PremiumPaymentTypeField:ESCROW_PremiumPaymentType ;
private _PremiumPaymentTypeFieldSpecified:boolean ;
private _PremiumDurationMonthsCountField:string ;
private _SpecifiedHUD1LineNumberField:string ;
private _InsurancePolicyIdentifierField:string ;
private _IDField:string ;
private _InsurancePolicyCoverageAmountField:string ;
private gFEDisclosedPremiumAmountField:string ;
private _MonthlyPaymentRoundingTypeOtherDescriptionField:string ;
private _PaidByTypeOtherDescriptionField:string ;
private _PremiumPaidByTypeOtherDescriptionField:string ;
private _PremiumPaymentTypeOtherDescriptionField:string ;
public get _ACCOUNT_SUMMARY(): _ACCOUNT_SUMMARY
{
return this._ACCOUNT_SUMMARYField;
}
public set _ACCOUNT_SUMMARY(value: _ACCOUNT_SUMMARY)
{
this._ACCOUNT_SUMMARYField = value;
}
public get _PAYMENTS(): _PAYMENTS[]
{
return this._PAYMENTSField;
}
public set _PAYMENTS(value: _PAYMENTS[])
{
this._PAYMENTSField = value;
}
public get _PAID_TO(): _PAID_TO
{
return this._PAID_TOField;
}
public set _PAID_TO(value: _PAID_TO)
{
this._PAID_TOField = value;
}
public get _AnnualPaymentAmount(): string
{
return this._AnnualPaymentAmountField;
}
public set _AnnualPaymentAmount(value: string)
{
this._AnnualPaymentAmountField = value;
}
public get _CollectedNumberOfMonthsCount(): string
{
return this._CollectedNumberOfMonthsCountField;
}
public set _CollectedNumberOfMonthsCount(value: string)
{
this._CollectedNumberOfMonthsCountField = value;
}
public get _DueDate(): string
{
return this._DueDateField;
}
public set _DueDate(value: string)
{
this._DueDateField = value;
}
public get _ItemType(): ESCROW_ItemType
{
return this._ItemTypeField;
}
public set _ItemType(value: ESCROW_ItemType)
{
this._ItemTypeField = value;
}
public get _ItemTypeSpecified(): boolean
{
return this._ItemTypeFieldSpecified;
}
public set _ItemTypeSpecified(value: boolean)
{
this._ItemTypeFieldSpecified = value;
}
public get _ItemTypeOtherDescription(): string
{
return this._ItemTypeOtherDescriptionField;
}
public set _ItemTypeOtherDescription(value: string)
{
this._ItemTypeOtherDescriptionField = value;
}
public get _MonthlyPaymentAmount(): string
{
return this._MonthlyPaymentAmountField;
}
public set _MonthlyPaymentAmount(value: string)
{
this._MonthlyPaymentAmountField = value;
}
public get _MonthlyPaymentRoundingType(): ESCROW_MonthlyPaymentRoundingType
{
return this._MonthlyPaymentRoundingTypeField;
}
public set _MonthlyPaymentRoundingType(value: ESCROW_MonthlyPaymentRoundingType)
{
this._MonthlyPaymentRoundingTypeField = value;
}
public get _MonthlyPaymentRoundingTypeSpecified(): boolean
{
return this._MonthlyPaymentRoundingTypeFieldSpecified;
}
public set _MonthlyPaymentRoundingTypeSpecified(value: boolean)
{
this._MonthlyPaymentRoundingTypeFieldSpecified = value;
}
public get _PaidByType(): ESCROW_PaidByType
{
return this._PaidByTypeField;
}
public set _PaidByType(value: ESCROW_PaidByType)
{
this._PaidByTypeField = value;
}
public get _PaidByTypeSpecified(): boolean
{
return this._PaidByTypeFieldSpecified;
}
public set _PaidByTypeSpecified(value: boolean)
{
this._PaidByTypeFieldSpecified = value;
}
public get _PaymentFrequencyType(): ESCROW_PaymentFrequencyType
{
return this._PaymentFrequencyTypeField;
}
public set _PaymentFrequencyType(value: ESCROW_PaymentFrequencyType)
{
this._PaymentFrequencyTypeField = value;
}
public get _PaymentFrequencyTypeSpecified(): boolean
{
return this._PaymentFrequencyTypeFieldSpecified;
}
public set _PaymentFrequencyTypeSpecified(value: boolean)
{
this._PaymentFrequencyTypeFieldSpecified = value;
}
public get _PaymentFrequencyTypeOtherDescription(): string
{
return this._PaymentFrequencyTypeOtherDescriptionField;
}
public set _PaymentFrequencyTypeOtherDescription(value: string)
{
this._PaymentFrequencyTypeOtherDescriptionField = value;
}
public get _PremiumAmount(): string
{
return this._PremiumAmountField;
}
public set _PremiumAmount(value: string)
{
this._PremiumAmountField = value;
}
public get _PremiumPaidByType(): ESCROW_PremiumPaidByType
{
return this._PremiumPaidByTypeField;
}
public set _PremiumPaidByType(value: ESCROW_PremiumPaidByType)
{
this._PremiumPaidByTypeField = value;
}
public get _PremiumPaidByTypeSpecified(): boolean
{
return this._PremiumPaidByTypeFieldSpecified;
}
public set _PremiumPaidByTypeSpecified(value: boolean)
{
this._PremiumPaidByTypeFieldSpecified = value;
}
public get _PremiumPaymentType(): ESCROW_PremiumPaymentType
{
return this._PremiumPaymentTypeField;
}
public set _PremiumPaymentType(value: ESCROW_PremiumPaymentType)
{
this._PremiumPaymentTypeField = value;
}
public get _PremiumPaymentTypeSpecified(): boolean
{
return this._PremiumPaymentTypeFieldSpecified;
}
public set _PremiumPaymentTypeSpecified(value: boolean)
{
this._PremiumPaymentTypeFieldSpecified = value;
}
public get _PremiumDurationMonthsCount(): string
{
return this._PremiumDurationMonthsCountField;
}
public set _PremiumDurationMonthsCount(value: string)
{
this._PremiumDurationMonthsCountField = value;
}
public get _SpecifiedHUD1LineNumber(): string
{
return this._SpecifiedHUD1LineNumberField;
}
public set _SpecifiedHUD1LineNumber(value: string)
{
this._SpecifiedHUD1LineNumberField = value;
}
public get _InsurancePolicyIdentifier(): string
{
return this._InsurancePolicyIdentifierField;
}
public set _InsurancePolicyIdentifier(value: string)
{
this._InsurancePolicyIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _InsurancePolicyCoverageAmount(): string
{
return this._InsurancePolicyCoverageAmountField;
}
public set _InsurancePolicyCoverageAmount(value: string)
{
this._InsurancePolicyCoverageAmountField = value;
}
public get GFEDisclosedPremiumAmount(): string
{
return this.gFEDisclosedPremiumAmountField;
}
public set GFEDisclosedPremiumAmount(value: string)
{
this.gFEDisclosedPremiumAmountField = value;
}
public get _MonthlyPaymentRoundingTypeOtherDescription(): string
{
return this._MonthlyPaymentRoundingTypeOtherDescriptionField;
}
public set _MonthlyPaymentRoundingTypeOtherDescription(value: string)
{
this._MonthlyPaymentRoundingTypeOtherDescriptionField = value;
}
public get _PaidByTypeOtherDescription(): string
{
return this._PaidByTypeOtherDescriptionField;
}
public set _PaidByTypeOtherDescription(value: string)
{
this._PaidByTypeOtherDescriptionField = value;
}
public get _PremiumPaidByTypeOtherDescription(): string
{
return this._PremiumPaidByTypeOtherDescriptionField;
}
public set _PremiumPaidByTypeOtherDescription(value: string)
{
this._PremiumPaidByTypeOtherDescriptionField = value;
}
public get _PremiumPaymentTypeOtherDescription(): string
{
return this._PremiumPaymentTypeOtherDescriptionField;
}
public set _PremiumPaymentTypeOtherDescription(value: string)
{
this._PremiumPaymentTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _ACCOUNT_SUMMARY 
{
private _IDField:string ;
private escrowAggregateAccountingAdjustmentAmountField:string ;
private escrowCushionNumberOfMonthsCountField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get EscrowAggregateAccountingAdjustmentAmount(): string
{
return this.escrowAggregateAccountingAdjustmentAmountField;
}
public set EscrowAggregateAccountingAdjustmentAmount(value: string)
{
this.escrowAggregateAccountingAdjustmentAmountField = value;
}
public get EscrowCushionNumberOfMonthsCount(): string
{
return this.escrowCushionNumberOfMonthsCountField;
}
public set EscrowCushionNumberOfMonthsCount(value: string)
{
this.escrowCushionNumberOfMonthsCountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _PAYMENTS 
{
private _IDField:string ;
private _DueDateField:string ;
private _PaymentAmountField:string ;
private _SequenceIdentifierField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _DueDate(): string
{
return this._DueDateField;
}
public set _DueDate(value: string)
{
this._DueDateField = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _PAID_TO 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _IDField:string ;
private _NameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private nonPersonEntityIndicatorField:_PAID_TONonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get NonPersonEntityIndicator(): _PAID_TONonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: _PAID_TONonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CONTACT_DETAIL 
{
private cONTACT_POINTField:CONTACT_POINT[] ;
private _NameField:string ;
private _IdentifierField:string ;
private _FirstNameField:string ;
private _LastNameField:string ;
private _MiddleNameField:string ;
private _NameSuffixField:string ;
private _SequenceIdentifierField:string ;
private _IDField:string ;
private _TitleField:string ;
public get CONTACT_POINT(): CONTACT_POINT[]
{
return this.cONTACT_POINTField;
}
public set CONTACT_POINT(value: CONTACT_POINT[])
{
this.cONTACT_POINTField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _Identifier(): string
{
return this._IdentifierField;
}
public set _Identifier(value: string)
{
this._IdentifierField = value;
}
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Title(): string
{
return this._TitleField;
}
public set _Title(value: string)
{
this._TitleField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CONTACT_POINT 
{
private _PreferenceIndicatorField:CONTACT_POINT_PreferenceIndicator ;
private _PreferenceIndicatorFieldSpecified:boolean ;
private _RoleTypeField:CONTACT_POINT_RoleType ;
private _RoleTypeFieldSpecified:boolean ;
private _TypeField:CONTACT_POINT_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _ValueField:string ;
private _IDField:string ;
private _RoleTypeOtherDescriptionField:string ;
public get _PreferenceIndicator(): CONTACT_POINT_PreferenceIndicator
{
return this._PreferenceIndicatorField;
}
public set _PreferenceIndicator(value: CONTACT_POINT_PreferenceIndicator)
{
this._PreferenceIndicatorField = value;
}
public get _PreferenceIndicatorSpecified(): boolean
{
return this._PreferenceIndicatorFieldSpecified;
}
public set _PreferenceIndicatorSpecified(value: boolean)
{
this._PreferenceIndicatorFieldSpecified = value;
}
public get _RoleType(): CONTACT_POINT_RoleType
{
return this._RoleTypeField;
}
public set _RoleType(value: CONTACT_POINT_RoleType)
{
this._RoleTypeField = value;
}
public get _RoleTypeSpecified(): boolean
{
return this._RoleTypeFieldSpecified;
}
public set _RoleTypeSpecified(value: boolean)
{
this._RoleTypeFieldSpecified = value;
}
public get _Type(): CONTACT_POINT_Type
{
return this._TypeField;
}
public set _Type(value: CONTACT_POINT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _Value(): string
{
return this._ValueField;
}
public set _Value(value: string)
{
this._ValueField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _RoleTypeOtherDescription(): string
{
return this._RoleTypeOtherDescriptionField;
}
public set _RoleTypeOtherDescription(value: string)
{
this._RoleTypeOtherDescriptionField = value;
} 
}
export enum CONTACT_POINT_PreferenceIndicator {
 N,

Y
 }
export enum CONTACT_POINT_RoleType {
 Mobile,

Other,

Work,

Home
 }
export enum CONTACT_POINT_Type {
 Email,

Phone,

Other,

Fax
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class NON_PERSON_ENTITY_DETAIL 
{
private aUTHORIZED_REPRESENTATIVEField:AUTHORIZED_REPRESENTATIVE[] ;
private _OrganizationTypeField:NON_PERSON_ENTITY_DETAIL_OrganizationType ;
private _OrganizationTypeFieldSpecified:boolean ;
private _OrganizationTypeOtherDescriptionField:string ;
private _OrganizedUnderTheLawsOfJurisdictionNameField:string ;
private _SuccessorClauseTextDescriptionField:string ;
private _TaxIdentificationNumberIdentifierField:string ;
private _OrganizationLicensingTypeDescriptionField:string ;
private mERSOrganizationIdentifierField:string ;
private _IDField:string ;
public get AUTHORIZED_REPRESENTATIVE(): AUTHORIZED_REPRESENTATIVE[]
{
return this.aUTHORIZED_REPRESENTATIVEField;
}
public set AUTHORIZED_REPRESENTATIVE(value: AUTHORIZED_REPRESENTATIVE[])
{
this.aUTHORIZED_REPRESENTATIVEField = value;
}
public get _OrganizationType(): NON_PERSON_ENTITY_DETAIL_OrganizationType
{
return this._OrganizationTypeField;
}
public set _OrganizationType(value: NON_PERSON_ENTITY_DETAIL_OrganizationType)
{
this._OrganizationTypeField = value;
}
public get _OrganizationTypeSpecified(): boolean
{
return this._OrganizationTypeFieldSpecified;
}
public set _OrganizationTypeSpecified(value: boolean)
{
this._OrganizationTypeFieldSpecified = value;
}
public get _OrganizationTypeOtherDescription(): string
{
return this._OrganizationTypeOtherDescriptionField;
}
public set _OrganizationTypeOtherDescription(value: string)
{
this._OrganizationTypeOtherDescriptionField = value;
}
public get _OrganizedUnderTheLawsOfJurisdictionName(): string
{
return this._OrganizedUnderTheLawsOfJurisdictionNameField;
}
public set _OrganizedUnderTheLawsOfJurisdictionName(value: string)
{
this._OrganizedUnderTheLawsOfJurisdictionNameField = value;
}
public get _SuccessorClauseTextDescription(): string
{
return this._SuccessorClauseTextDescriptionField;
}
public set _SuccessorClauseTextDescription(value: string)
{
this._SuccessorClauseTextDescriptionField = value;
}
public get _TaxIdentificationNumberIdentifier(): string
{
return this._TaxIdentificationNumberIdentifierField;
}
public set _TaxIdentificationNumberIdentifier(value: string)
{
this._TaxIdentificationNumberIdentifierField = value;
}
public get _OrganizationLicensingTypeDescription(): string
{
return this._OrganizationLicensingTypeDescriptionField;
}
public set _OrganizationLicensingTypeDescription(value: string)
{
this._OrganizationLicensingTypeDescriptionField = value;
}
public get MERSOrganizationIdentifier(): string
{
return this.mERSOrganizationIdentifierField;
}
public set MERSOrganizationIdentifier(value: string)
{
this.mERSOrganizationIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class AUTHORIZED_REPRESENTATIVE 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _UnparsedNameField:string ;
private _TitleDescriptionField:string ;
private authorizedToSignIndicatorField:AUTHORIZED_REPRESENTATIVEAuthorizedToSignIndicator ;
private authorizedToSignIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get AuthorizedToSignIndicator(): AUTHORIZED_REPRESENTATIVEAuthorizedToSignIndicator
{
return this.authorizedToSignIndicatorField;
}
public set AuthorizedToSignIndicator(value: AUTHORIZED_REPRESENTATIVEAuthorizedToSignIndicator)
{
this.authorizedToSignIndicatorField = value;
}
public get AuthorizedToSignIndicatorSpecified(): boolean
{
return this.authorizedToSignIndicatorFieldSpecified;
}
public set AuthorizedToSignIndicatorSpecified(value: boolean)
{
this.authorizedToSignIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum AUTHORIZED_REPRESENTATIVEAuthorizedToSignIndicator {
 N,

Y
 }
export enum NON_PERSON_ENTITY_DETAIL_OrganizationType {
 Trust,

NonProfitCorporation,

Corporation,

LimitedLiabilityCompany,

SoleProprietorship,

LimitedPartnership,

Other,

JointVenture,

Partnership
 }
export enum _PAID_TONonPersonEntityIndicator {
 N,

Y
 }
export enum ESCROW_ItemType {
 CreditDisabilityInsurance,

HazardInsurance,

StatePropertyTax,

WindstormInsurance,

FloodInsurance,

TownPropertyTax,

Assessment,

Other,

VillagePropertyTax,

BoroughPropertyTax,

SchoolPropertyTax,

TownshipProprtyTax,

StormInsurance,

PestInsurance,

CreditLifeInsurance,

EarthquakeInsurance,

MortgageInsurance,

CreditUnemploymentInsurance,

CountyPropertyTax,

DistrictPropertyTax,

CityPropertyTax
 }
export enum ESCROW_MonthlyPaymentRoundingType {
 Nearest,

None,

Other,

Up,

Down
 }
export enum ESCROW_PaidByType {
 LenderPremium,

Seller,

Other,

Buyer
 }
export enum ESCROW_PaymentFrequencyType {
 Monthly,

SemiAnnual,

Other,

Unequal,

Quarterly,

Annual
 }
export enum ESCROW_PremiumPaidByType {
 Seller,

Other,

Buyer,

Lender
 }
export enum ESCROW_PremiumPaymentType {
 CollectAtClosing,

Other,

PaidOutsideOfClosing,

Waived,

CollectedAtClosing
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ESCROW_ACCOUNT_SUMMARY 
{
private _IDField:string ;
private escrowAggregateAccountingAdjustmentAmountField:string ;
private escrowCushionNumberOfMonthsCountField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get EscrowAggregateAccountingAdjustmentAmount(): string
{
return this.escrowAggregateAccountingAdjustmentAmountField;
}
public set EscrowAggregateAccountingAdjustmentAmount(value: string)
{
this.escrowAggregateAccountingAdjustmentAmountField = value;
}
public get EscrowCushionNumberOfMonthsCount(): string
{
return this.escrowCushionNumberOfMonthsCountField;
}
public set EscrowCushionNumberOfMonthsCount(value: string)
{
this.escrowCushionNumberOfMonthsCountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GOVERNMENT_LOAN 
{
private fHA_LOANField:FHA_LOAN ;
private fHA_VA_LOANField:FHA_VA_LOAN ;
private vA_LOANField:VA_LOAN ;
private _IDField:string ;
public get FHA_LOAN(): FHA_LOAN
{
return this.fHA_LOANField;
}
public set FHA_LOAN(value: FHA_LOAN)
{
this.fHA_LOANField = value;
}
public get FHA_VA_LOAN(): FHA_VA_LOAN
{
return this.fHA_VA_LOANField;
}
public set FHA_VA_LOAN(value: FHA_VA_LOAN)
{
this.fHA_VA_LOANField = value;
}
public get VA_LOAN(): VA_LOAN
{
return this.vA_LOANField;
}
public set VA_LOAN(value: VA_LOAN)
{
this.vA_LOANField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class FHA_LOAN 
{
private sPONSORField:SPONSOR ;
private borrowerFinancedFHADiscountPointsAmountField:string ;
private fHAAlimonyLiabilityTreatmentTypeField:FHA_LOANFHAAlimonyLiabilityTreatmentType ;
private fHAAlimonyLiabilityTreatmentTypeFieldSpecified:boolean ;
private fHACoverageRenewalRatePercentField:string ;
private fHA_MIPremiumRefundAmountField:string ;
private fHAUpfrontMIPremiumPercentField:string ;
private _LenderIdentifierField:string ;
private _SponsorIdentifierField:string ;
private sectionOfActTypeField:FHA_LOANSectionOfActType ;
private sectionOfActTypeFieldSpecified:boolean ;
private fHAEnergyRelatedRepairsOrImprovementsAmountField:string ;
private fHAGeneralServicesAdminstrationCodeIdentifierField:string ;
private fHAGeneralServicesAdministrationCodeIdentifierField:string ;
private fHALimitedDenialParticipationIdentifierField:string ;
private fHARefinanceInterestOnExistingLienAmountField:string ;
private fHARefinanceOriginalExistingFHACaseIdentifierField:string ;
private fHARefinanceOriginalExistingUpFrontMIPAmountField:string ;
private fHAUnderwriterComputerizedHomesUnderwritingSystemIdentifierField:string ;
private hUDAdequateAvailableAssetsIndicatorField:FHA_LOANHUDAdequateAvailableAssetsIndicator ;
private hUDAdequateAvailableAssetsIndicatorFieldSpecified:boolean ;
private hUDAdequateEffectiveIncomeIndicatorField:FHA_LOANHUDAdequateEffectiveIncomeIndicator ;
private hUDAdequateEffectiveIncomeIndicatorFieldSpecified:boolean ;
private hUDCreditCharacteristicsIndicatorField:FHA_LOANHUDCreditCharacteristicsIndicator ;
private hUDCreditCharacteristicsIndicatorFieldSpecified:boolean ;
private hUDStableEffectiveIncomeIndicatorField:FHA_LOANHUDStableEffectiveIncomeIndicator ;
private hUDStableEffectiveIncomeIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private sectionOfActTypeOtherDescriptionField:string ;
private fHANonOwnerOccupancyRiderRule248IndicatorField:FHA_LOANFHANonOwnerOccupancyRiderRule248Indicator ;
private fHANonOwnerOccupancyRiderRule248IndicatorFieldSpecified:boolean ;
private borrowerHomeInspectionChosenIndicatorField:FHA_LOANBorrowerHomeInspectionChosenIndicator ;
private borrowerHomeInspectionChosenIndicatorFieldSpecified:boolean ;
private daysToFHA_MIEligibilityCountField:string ;
private soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorField:FHA_LOANSoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator ;
private soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorFieldSpecified:boolean ;
public get SPONSOR(): SPONSOR
{
return this.sPONSORField;
}
public set SPONSOR(value: SPONSOR)
{
this.sPONSORField = value;
}
public get BorrowerFinancedFHADiscountPointsAmount(): string
{
return this.borrowerFinancedFHADiscountPointsAmountField;
}
public set BorrowerFinancedFHADiscountPointsAmount(value: string)
{
this.borrowerFinancedFHADiscountPointsAmountField = value;
}
public get FHAAlimonyLiabilityTreatmentType(): FHA_LOANFHAAlimonyLiabilityTreatmentType
{
return this.fHAAlimonyLiabilityTreatmentTypeField;
}
public set FHAAlimonyLiabilityTreatmentType(value: FHA_LOANFHAAlimonyLiabilityTreatmentType)
{
this.fHAAlimonyLiabilityTreatmentTypeField = value;
}
public get FHAAlimonyLiabilityTreatmentTypeSpecified(): boolean
{
return this.fHAAlimonyLiabilityTreatmentTypeFieldSpecified;
}
public set FHAAlimonyLiabilityTreatmentTypeSpecified(value: boolean)
{
this.fHAAlimonyLiabilityTreatmentTypeFieldSpecified = value;
}
public get FHACoverageRenewalRatePercent(): string
{
return this.fHACoverageRenewalRatePercentField;
}
public set FHACoverageRenewalRatePercent(value: string)
{
this.fHACoverageRenewalRatePercentField = value;
}
public get FHA_MIPremiumRefundAmount(): string
{
return this.fHA_MIPremiumRefundAmountField;
}
public set FHA_MIPremiumRefundAmount(value: string)
{
this.fHA_MIPremiumRefundAmountField = value;
}
public get FHAUpfrontMIPremiumPercent(): string
{
return this.fHAUpfrontMIPremiumPercentField;
}
public set FHAUpfrontMIPremiumPercent(value: string)
{
this.fHAUpfrontMIPremiumPercentField = value;
}
public get _LenderIdentifier(): string
{
return this._LenderIdentifierField;
}
public set _LenderIdentifier(value: string)
{
this._LenderIdentifierField = value;
}
public get _SponsorIdentifier(): string
{
return this._SponsorIdentifierField;
}
public set _SponsorIdentifier(value: string)
{
this._SponsorIdentifierField = value;
}
public get SectionOfActType(): FHA_LOANSectionOfActType
{
return this.sectionOfActTypeField;
}
public set SectionOfActType(value: FHA_LOANSectionOfActType)
{
this.sectionOfActTypeField = value;
}
public get SectionOfActTypeSpecified(): boolean
{
return this.sectionOfActTypeFieldSpecified;
}
public set SectionOfActTypeSpecified(value: boolean)
{
this.sectionOfActTypeFieldSpecified = value;
}
public get FHAEnergyRelatedRepairsOrImprovementsAmount(): string
{
return this.fHAEnergyRelatedRepairsOrImprovementsAmountField;
}
public set FHAEnergyRelatedRepairsOrImprovementsAmount(value: string)
{
this.fHAEnergyRelatedRepairsOrImprovementsAmountField = value;
}
public get FHAGeneralServicesAdminstrationCodeIdentifier(): string
{
return this.fHAGeneralServicesAdminstrationCodeIdentifierField;
}
public set FHAGeneralServicesAdminstrationCodeIdentifier(value: string)
{
this.fHAGeneralServicesAdminstrationCodeIdentifierField = value;
}
public get FHAGeneralServicesAdministrationCodeIdentifier(): string
{
return this.fHAGeneralServicesAdministrationCodeIdentifierField;
}
public set FHAGeneralServicesAdministrationCodeIdentifier(value: string)
{
this.fHAGeneralServicesAdministrationCodeIdentifierField = value;
}
public get FHALimitedDenialParticipationIdentifier(): string
{
return this.fHALimitedDenialParticipationIdentifierField;
}
public set FHALimitedDenialParticipationIdentifier(value: string)
{
this.fHALimitedDenialParticipationIdentifierField = value;
}
public get FHARefinanceInterestOnExistingLienAmount(): string
{
return this.fHARefinanceInterestOnExistingLienAmountField;
}
public set FHARefinanceInterestOnExistingLienAmount(value: string)
{
this.fHARefinanceInterestOnExistingLienAmountField = value;
}
public get FHARefinanceOriginalExistingFHACaseIdentifier(): string
{
return this.fHARefinanceOriginalExistingFHACaseIdentifierField;
}
public set FHARefinanceOriginalExistingFHACaseIdentifier(value: string)
{
this.fHARefinanceOriginalExistingFHACaseIdentifierField = value;
}
public get FHARefinanceOriginalExistingUpFrontMIPAmount(): string
{
return this.fHARefinanceOriginalExistingUpFrontMIPAmountField;
}
public set FHARefinanceOriginalExistingUpFrontMIPAmount(value: string)
{
this.fHARefinanceOriginalExistingUpFrontMIPAmountField = value;
}
public get FHAUnderwriterComputerizedHomesUnderwritingSystemIdentifier(): string
{
return this.fHAUnderwriterComputerizedHomesUnderwritingSystemIdentifierField;
}
public set FHAUnderwriterComputerizedHomesUnderwritingSystemIdentifier(value: string)
{
this.fHAUnderwriterComputerizedHomesUnderwritingSystemIdentifierField = value;
}
public get HUDAdequateAvailableAssetsIndicator(): FHA_LOANHUDAdequateAvailableAssetsIndicator
{
return this.hUDAdequateAvailableAssetsIndicatorField;
}
public set HUDAdequateAvailableAssetsIndicator(value: FHA_LOANHUDAdequateAvailableAssetsIndicator)
{
this.hUDAdequateAvailableAssetsIndicatorField = value;
}
public get HUDAdequateAvailableAssetsIndicatorSpecified(): boolean
{
return this.hUDAdequateAvailableAssetsIndicatorFieldSpecified;
}
public set HUDAdequateAvailableAssetsIndicatorSpecified(value: boolean)
{
this.hUDAdequateAvailableAssetsIndicatorFieldSpecified = value;
}
public get HUDAdequateEffectiveIncomeIndicator(): FHA_LOANHUDAdequateEffectiveIncomeIndicator
{
return this.hUDAdequateEffectiveIncomeIndicatorField;
}
public set HUDAdequateEffectiveIncomeIndicator(value: FHA_LOANHUDAdequateEffectiveIncomeIndicator)
{
this.hUDAdequateEffectiveIncomeIndicatorField = value;
}
public get HUDAdequateEffectiveIncomeIndicatorSpecified(): boolean
{
return this.hUDAdequateEffectiveIncomeIndicatorFieldSpecified;
}
public set HUDAdequateEffectiveIncomeIndicatorSpecified(value: boolean)
{
this.hUDAdequateEffectiveIncomeIndicatorFieldSpecified = value;
}
public get HUDCreditCharacteristicsIndicator(): FHA_LOANHUDCreditCharacteristicsIndicator
{
return this.hUDCreditCharacteristicsIndicatorField;
}
public set HUDCreditCharacteristicsIndicator(value: FHA_LOANHUDCreditCharacteristicsIndicator)
{
this.hUDCreditCharacteristicsIndicatorField = value;
}
public get HUDCreditCharacteristicsIndicatorSpecified(): boolean
{
return this.hUDCreditCharacteristicsIndicatorFieldSpecified;
}
public set HUDCreditCharacteristicsIndicatorSpecified(value: boolean)
{
this.hUDCreditCharacteristicsIndicatorFieldSpecified = value;
}
public get HUDStableEffectiveIncomeIndicator(): FHA_LOANHUDStableEffectiveIncomeIndicator
{
return this.hUDStableEffectiveIncomeIndicatorField;
}
public set HUDStableEffectiveIncomeIndicator(value: FHA_LOANHUDStableEffectiveIncomeIndicator)
{
this.hUDStableEffectiveIncomeIndicatorField = value;
}
public get HUDStableEffectiveIncomeIndicatorSpecified(): boolean
{
return this.hUDStableEffectiveIncomeIndicatorFieldSpecified;
}
public set HUDStableEffectiveIncomeIndicatorSpecified(value: boolean)
{
this.hUDStableEffectiveIncomeIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get SectionOfActTypeOtherDescription(): string
{
return this.sectionOfActTypeOtherDescriptionField;
}
public set SectionOfActTypeOtherDescription(value: string)
{
this.sectionOfActTypeOtherDescriptionField = value;
}
public get FHANonOwnerOccupancyRiderRule248Indicator(): FHA_LOANFHANonOwnerOccupancyRiderRule248Indicator
{
return this.fHANonOwnerOccupancyRiderRule248IndicatorField;
}
public set FHANonOwnerOccupancyRiderRule248Indicator(value: FHA_LOANFHANonOwnerOccupancyRiderRule248Indicator)
{
this.fHANonOwnerOccupancyRiderRule248IndicatorField = value;
}
public get FHANonOwnerOccupancyRiderRule248IndicatorSpecified(): boolean
{
return this.fHANonOwnerOccupancyRiderRule248IndicatorFieldSpecified;
}
public set FHANonOwnerOccupancyRiderRule248IndicatorSpecified(value: boolean)
{
this.fHANonOwnerOccupancyRiderRule248IndicatorFieldSpecified = value;
}
public get BorrowerHomeInspectionChosenIndicator(): FHA_LOANBorrowerHomeInspectionChosenIndicator
{
return this.borrowerHomeInspectionChosenIndicatorField;
}
public set BorrowerHomeInspectionChosenIndicator(value: FHA_LOANBorrowerHomeInspectionChosenIndicator)
{
this.borrowerHomeInspectionChosenIndicatorField = value;
}
public get BorrowerHomeInspectionChosenIndicatorSpecified(): boolean
{
return this.borrowerHomeInspectionChosenIndicatorFieldSpecified;
}
public set BorrowerHomeInspectionChosenIndicatorSpecified(value: boolean)
{
this.borrowerHomeInspectionChosenIndicatorFieldSpecified = value;
}
public get DaysToFHA_MIEligibilityCount(): string
{
return this.daysToFHA_MIEligibilityCountField;
}
public set DaysToFHA_MIEligibilityCount(value: string)
{
this.daysToFHA_MIEligibilityCountField = value;
}
public get SoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator(): FHA_LOANSoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator
{
return this.soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorField;
}
public set SoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator(value: FHA_LOANSoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator)
{
this.soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorField = value;
}
public get SoldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorSpecified(): boolean
{
return this.soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorFieldSpecified;
}
public set SoldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorSpecified(value: boolean)
{
this.soldUnderHUDSingleFamilyPropertyDispositionProgramIndicatorFieldSpecified = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SPONSOR 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _IDField:string ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private nonPersonEntityIndicatorField:SPONSORNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get NonPersonEntityIndicator(): SPONSORNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: SPONSORNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
} 
}
export enum SPONSORNonPersonEntityIndicator {
 N,

Y
 }
export enum FHA_LOANFHAAlimonyLiabilityTreatmentType {
 AdditionToDebt,

ReductionToIncome
 }
export enum FHA_LOANSectionOfActType {
 [System.Xml.Serialization.XmlEnumAttribute("223E")]
Item223E,

[System.Xml.Serialization.XmlEnumAttribute("203B241")]
Item203B241,

[System.Xml.Serialization.XmlEnumAttribute("203K241")]
Item203K241,

[System.Xml.Serialization.XmlEnumAttribute("265")]
Item265,

[System.Xml.Serialization.XmlEnumAttribute("3703D2")]
Item3703D2,

[System.Xml.Serialization.XmlEnumAttribute("201SD")]
Item201SD,

[System.Xml.Serialization.XmlEnumAttribute("221D2251")]
Item221D2251,

[System.Xml.Serialization.XmlEnumAttribute("221D2")]
Item221D2,

[System.Xml.Serialization.XmlEnumAttribute("201S")]
Item201S,

[System.Xml.Serialization.XmlEnumAttribute("3703D")]
Item3703D,

[System.Xml.Serialization.XmlEnumAttribute("201U")]
Item201U,

[System.Xml.Serialization.XmlEnumAttribute("203B2")]
Item203B2,

[System.Xml.Serialization.XmlEnumAttribute("201UD")]
Item201UD,

Other,

[System.Xml.Serialization.XmlEnumAttribute("203B")]
Item203B,

[System.Xml.Serialization.XmlEnumAttribute("729")]
Item729,

[System.Xml.Serialization.XmlEnumAttribute("27001")]
Item27001,

[System.Xml.Serialization.XmlEnumAttribute("27002")]
Item27002,

[System.Xml.Serialization.XmlEnumAttribute("27003")]
Item27003,

[System.Xml.Serialization.XmlEnumAttribute("27004")]
Item27004,

[System.Xml.Serialization.XmlEnumAttribute("203H")]
Item203H,

[System.Xml.Serialization.XmlEnumAttribute("27005")]
Item27005,

[System.Xml.Serialization.XmlEnumAttribute("203I")]
Item203I,

[System.Xml.Serialization.XmlEnumAttribute("203K")]
Item203K,

[System.Xml.Serialization.XmlEnumAttribute("234C")]
Item234C,

[System.Xml.Serialization.XmlEnumAttribute("26101")]
Item26101,

[System.Xml.Serialization.XmlEnumAttribute("26102")]
Item26102,

[System.Xml.Serialization.XmlEnumAttribute("234C251")]
Item234C251,

[System.Xml.Serialization.XmlEnumAttribute("502")]
Item502,

[System.Xml.Serialization.XmlEnumAttribute("3703")]
Item3703,

[System.Xml.Serialization.XmlEnumAttribute("3710")]
Item3710,

[System.Xml.Serialization.XmlEnumAttribute("203B251")]
Item203B251,

[System.Xml.Serialization.XmlEnumAttribute("3711")]
Item3711,

[System.Xml.Serialization.XmlEnumAttribute("203K251")]
Item203K251,

[System.Xml.Serialization.XmlEnumAttribute("213")]
Item213,

[System.Xml.Serialization.XmlEnumAttribute("220")]
Item220,

[System.Xml.Serialization.XmlEnumAttribute("27101")]
Item27101,

[System.Xml.Serialization.XmlEnumAttribute("221")]
Item221,

[System.Xml.Serialization.XmlEnumAttribute("27102")]
Item27102,

[System.Xml.Serialization.XmlEnumAttribute("222")]
Item222,

[System.Xml.Serialization.XmlEnumAttribute("27103")]
Item27103,

[System.Xml.Serialization.XmlEnumAttribute("27104")]
Item27104,

[System.Xml.Serialization.XmlEnumAttribute("27105")]
Item27105,

[System.Xml.Serialization.XmlEnumAttribute("233")]
Item233,

[System.Xml.Serialization.XmlEnumAttribute("26201")]
Item26201,

[System.Xml.Serialization.XmlEnumAttribute("235")]
Item235,

[System.Xml.Serialization.XmlEnumAttribute("26202")]
Item26202,

[System.Xml.Serialization.XmlEnumAttribute("237")]
Item237,

[System.Xml.Serialization.XmlEnumAttribute("240")]
Item240,

[System.Xml.Serialization.XmlEnumAttribute("245")]
Item245,

[System.Xml.Serialization.XmlEnumAttribute("184")]
Item184,

[System.Xml.Serialization.XmlEnumAttribute("247")]
Item247,

[System.Xml.Serialization.XmlEnumAttribute("248")]
Item248,

[System.Xml.Serialization.XmlEnumAttribute("251")]
Item251,

[System.Xml.Serialization.XmlEnumAttribute("255")]
Item255
 }
export enum FHA_LOANHUDAdequateAvailableAssetsIndicator {
 N,

Y
 }
export enum FHA_LOANHUDAdequateEffectiveIncomeIndicator {
 N,

Y
 }
export enum FHA_LOANHUDCreditCharacteristicsIndicator {
 N,

Y
 }
export enum FHA_LOANHUDStableEffectiveIncomeIndicator {
 N,

Y
 }
export enum FHA_LOANFHANonOwnerOccupancyRiderRule248Indicator {
 N,

Y
 }
export enum FHA_LOANBorrowerHomeInspectionChosenIndicator {
 N,

Y
 }
export enum FHA_LOANSoldUnderHUDSingleFamilyPropertyDispositionProgramIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class FHA_VA_LOAN 
{
private borrowerPaidFHA_VAClosingCostsAmountField:string ;
private borrowerPaidFHA_VAClosingCostsPercentField:string ;
private governmentMortgageCreditCertificateAmountField:string ;
private governmentRefinanceTypeField:FHA_VA_LOANGovernmentRefinanceType ;
private governmentRefinanceTypeFieldSpecified:boolean ;
private otherPartyPaidFHA_VAClosingCostsAmountField:string ;
private otherPartyPaidFHA_VAClosingCostsPercentField:string ;
private propertyEnergyEfficientHomeIndicatorField:FHA_VA_LOANPropertyEnergyEfficientHomeIndicator ;
private propertyEnergyEfficientHomeIndicatorFieldSpecified:boolean ;
private sellerPaidFHA_VAClosingCostsPercentField:string ;
private _OriginatorIdentifierField:string ;
private _IDField:string ;
private governmentRefinanceTypeOtherDescriptionField:string ;
private governmentLoanApplicationTypeField:FHA_VA_LOANGovernmentLoanApplicationType ;
private governmentLoanApplicationTypeFieldSpecified:boolean ;
public get BorrowerPaidFHA_VAClosingCostsAmount(): string
{
return this.borrowerPaidFHA_VAClosingCostsAmountField;
}
public set BorrowerPaidFHA_VAClosingCostsAmount(value: string)
{
this.borrowerPaidFHA_VAClosingCostsAmountField = value;
}
public get BorrowerPaidFHA_VAClosingCostsPercent(): string
{
return this.borrowerPaidFHA_VAClosingCostsPercentField;
}
public set BorrowerPaidFHA_VAClosingCostsPercent(value: string)
{
this.borrowerPaidFHA_VAClosingCostsPercentField = value;
}
public get GovernmentMortgageCreditCertificateAmount(): string
{
return this.governmentMortgageCreditCertificateAmountField;
}
public set GovernmentMortgageCreditCertificateAmount(value: string)
{
this.governmentMortgageCreditCertificateAmountField = value;
}
public get GovernmentRefinanceType(): FHA_VA_LOANGovernmentRefinanceType
{
return this.governmentRefinanceTypeField;
}
public set GovernmentRefinanceType(value: FHA_VA_LOANGovernmentRefinanceType)
{
this.governmentRefinanceTypeField = value;
}
public get GovernmentRefinanceTypeSpecified(): boolean
{
return this.governmentRefinanceTypeFieldSpecified;
}
public set GovernmentRefinanceTypeSpecified(value: boolean)
{
this.governmentRefinanceTypeFieldSpecified = value;
}
public get OtherPartyPaidFHA_VAClosingCostsAmount(): string
{
return this.otherPartyPaidFHA_VAClosingCostsAmountField;
}
public set OtherPartyPaidFHA_VAClosingCostsAmount(value: string)
{
this.otherPartyPaidFHA_VAClosingCostsAmountField = value;
}
public get OtherPartyPaidFHA_VAClosingCostsPercent(): string
{
return this.otherPartyPaidFHA_VAClosingCostsPercentField;
}
public set OtherPartyPaidFHA_VAClosingCostsPercent(value: string)
{
this.otherPartyPaidFHA_VAClosingCostsPercentField = value;
}
public get PropertyEnergyEfficientHomeIndicator(): FHA_VA_LOANPropertyEnergyEfficientHomeIndicator
{
return this.propertyEnergyEfficientHomeIndicatorField;
}
public set PropertyEnergyEfficientHomeIndicator(value: FHA_VA_LOANPropertyEnergyEfficientHomeIndicator)
{
this.propertyEnergyEfficientHomeIndicatorField = value;
}
public get PropertyEnergyEfficientHomeIndicatorSpecified(): boolean
{
return this.propertyEnergyEfficientHomeIndicatorFieldSpecified;
}
public set PropertyEnergyEfficientHomeIndicatorSpecified(value: boolean)
{
this.propertyEnergyEfficientHomeIndicatorFieldSpecified = value;
}
public get SellerPaidFHA_VAClosingCostsPercent(): string
{
return this.sellerPaidFHA_VAClosingCostsPercentField;
}
public set SellerPaidFHA_VAClosingCostsPercent(value: string)
{
this.sellerPaidFHA_VAClosingCostsPercentField = value;
}
public get _OriginatorIdentifier(): string
{
return this._OriginatorIdentifierField;
}
public set _OriginatorIdentifier(value: string)
{
this._OriginatorIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get GovernmentRefinanceTypeOtherDescription(): string
{
return this.governmentRefinanceTypeOtherDescriptionField;
}
public set GovernmentRefinanceTypeOtherDescription(value: string)
{
this.governmentRefinanceTypeOtherDescriptionField = value;
}
public get GovernmentLoanApplicationType(): FHA_VA_LOANGovernmentLoanApplicationType
{
return this.governmentLoanApplicationTypeField;
}
public set GovernmentLoanApplicationType(value: FHA_VA_LOANGovernmentLoanApplicationType)
{
this.governmentLoanApplicationTypeField = value;
}
public get GovernmentLoanApplicationTypeSpecified(): boolean
{
return this.governmentLoanApplicationTypeFieldSpecified;
}
public set GovernmentLoanApplicationTypeSpecified(value: boolean)
{
this.governmentLoanApplicationTypeFieldSpecified = value;
} 
}
export enum FHA_VA_LOANGovernmentRefinanceType {
 InterestRateReductionRefinanceLoan,

Other,

FullDocumentation,

StreamlineWithAppraisal,

StreamlineWithoutAppraisal
 }
export enum FHA_VA_LOANPropertyEnergyEfficientHomeIndicator {
 N,

Y
 }
export enum FHA_VA_LOANGovernmentLoanApplicationType {
 NationalHousingAct,

HomeLoanGuaranty
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class VA_LOAN 
{
private eNERGY_IMPROVEMENTField:ENERGY_IMPROVEMENT[] ;
private lENDER_APPRAISALField:LENDER_APPRAISAL ;
private vABorrowerCoBorrowerMarriedIndicatorField:VA_LOANVABorrowerCoBorrowerMarriedIndicator ;
private vABorrowerCoBorrowerMarriedIndicatorFieldSpecified:boolean ;
private borrowerFundingFeePercentField:string ;
private vAEntitlementAmountField:string ;
private vAMaintenanceExpenseMonthlyAmountField:string ;
private vAResidualIncomeAmountField:string ;
private vAUtilityExpenseMonthlyAmountField:string ;
private vAEntitlementCodeIdentifierField:string ;
private vAHouseholdSizeCountField:string ;
private _IDField:string ;
private masterCertificateOfReasonableValueIdentifierField:string ;
private previousVAHomeLoanIndicatorField:VA_LOANPreviousVAHomeLoanIndicator ;
private previousVAHomeLoanIndicatorFieldSpecified:boolean ;
private _ProcedureTypeField:VA_LOAN_ProcedureType ;
private _ProcedureTypeFieldSpecified:boolean ;
private _ProcedureTypeOtherDescriptionField:string ;
private vAAppraisalTypeField:VA_LOANVAAppraisalType ;
private vAAppraisalTypeFieldSpecified:boolean ;
private vAAppraisalTypeOtherDescriptionField:string ;
private vAClaimFolderIdentifierField:string ;
private vAReasonableValueImprovementsCompletionIndicatorField:VA_LOANVAReasonableValueImprovementsCompletionIndicator ;
private vAReasonableValueImprovementsCompletionIndicatorFieldSpecified:boolean ;
private vAResidualIncomeGuidelineAmountField:string ;
private titleVestingTypeField:VA_LOANTitleVestingType ;
private titleVestingTypeFieldSpecified:boolean ;
private titleVestingTypeOtherDescriptionField:string ;
public get ENERGY_IMPROVEMENT(): ENERGY_IMPROVEMENT[]
{
return this.eNERGY_IMPROVEMENTField;
}
public set ENERGY_IMPROVEMENT(value: ENERGY_IMPROVEMENT[])
{
this.eNERGY_IMPROVEMENTField = value;
}
public get LENDER_APPRAISAL(): LENDER_APPRAISAL
{
return this.lENDER_APPRAISALField;
}
public set LENDER_APPRAISAL(value: LENDER_APPRAISAL)
{
this.lENDER_APPRAISALField = value;
}
public get VABorrowerCoBorrowerMarriedIndicator(): VA_LOANVABorrowerCoBorrowerMarriedIndicator
{
return this.vABorrowerCoBorrowerMarriedIndicatorField;
}
public set VABorrowerCoBorrowerMarriedIndicator(value: VA_LOANVABorrowerCoBorrowerMarriedIndicator)
{
this.vABorrowerCoBorrowerMarriedIndicatorField = value;
}
public get VABorrowerCoBorrowerMarriedIndicatorSpecified(): boolean
{
return this.vABorrowerCoBorrowerMarriedIndicatorFieldSpecified;
}
public set VABorrowerCoBorrowerMarriedIndicatorSpecified(value: boolean)
{
this.vABorrowerCoBorrowerMarriedIndicatorFieldSpecified = value;
}
public get BorrowerFundingFeePercent(): string
{
return this.borrowerFundingFeePercentField;
}
public set BorrowerFundingFeePercent(value: string)
{
this.borrowerFundingFeePercentField = value;
}
public get VAEntitlementAmount(): string
{
return this.vAEntitlementAmountField;
}
public set VAEntitlementAmount(value: string)
{
this.vAEntitlementAmountField = value;
}
public get VAMaintenanceExpenseMonthlyAmount(): string
{
return this.vAMaintenanceExpenseMonthlyAmountField;
}
public set VAMaintenanceExpenseMonthlyAmount(value: string)
{
this.vAMaintenanceExpenseMonthlyAmountField = value;
}
public get VAResidualIncomeAmount(): string
{
return this.vAResidualIncomeAmountField;
}
public set VAResidualIncomeAmount(value: string)
{
this.vAResidualIncomeAmountField = value;
}
public get VAUtilityExpenseMonthlyAmount(): string
{
return this.vAUtilityExpenseMonthlyAmountField;
}
public set VAUtilityExpenseMonthlyAmount(value: string)
{
this.vAUtilityExpenseMonthlyAmountField = value;
}
public get VAEntitlementCodeIdentifier(): string
{
return this.vAEntitlementCodeIdentifierField;
}
public set VAEntitlementCodeIdentifier(value: string)
{
this.vAEntitlementCodeIdentifierField = value;
}
public get VAHouseholdSizeCount(): string
{
return this.vAHouseholdSizeCountField;
}
public set VAHouseholdSizeCount(value: string)
{
this.vAHouseholdSizeCountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get MasterCertificateOfReasonableValueIdentifier(): string
{
return this.masterCertificateOfReasonableValueIdentifierField;
}
public set MasterCertificateOfReasonableValueIdentifier(value: string)
{
this.masterCertificateOfReasonableValueIdentifierField = value;
}
public get PreviousVAHomeLoanIndicator(): VA_LOANPreviousVAHomeLoanIndicator
{
return this.previousVAHomeLoanIndicatorField;
}
public set PreviousVAHomeLoanIndicator(value: VA_LOANPreviousVAHomeLoanIndicator)
{
this.previousVAHomeLoanIndicatorField = value;
}
public get PreviousVAHomeLoanIndicatorSpecified(): boolean
{
return this.previousVAHomeLoanIndicatorFieldSpecified;
}
public set PreviousVAHomeLoanIndicatorSpecified(value: boolean)
{
this.previousVAHomeLoanIndicatorFieldSpecified = value;
}
public get _ProcedureType(): VA_LOAN_ProcedureType
{
return this._ProcedureTypeField;
}
public set _ProcedureType(value: VA_LOAN_ProcedureType)
{
this._ProcedureTypeField = value;
}
public get _ProcedureTypeSpecified(): boolean
{
return this._ProcedureTypeFieldSpecified;
}
public set _ProcedureTypeSpecified(value: boolean)
{
this._ProcedureTypeFieldSpecified = value;
}
public get _ProcedureTypeOtherDescription(): string
{
return this._ProcedureTypeOtherDescriptionField;
}
public set _ProcedureTypeOtherDescription(value: string)
{
this._ProcedureTypeOtherDescriptionField = value;
}
public get VAAppraisalType(): VA_LOANVAAppraisalType
{
return this.vAAppraisalTypeField;
}
public set VAAppraisalType(value: VA_LOANVAAppraisalType)
{
this.vAAppraisalTypeField = value;
}
public get VAAppraisalTypeSpecified(): boolean
{
return this.vAAppraisalTypeFieldSpecified;
}
public set VAAppraisalTypeSpecified(value: boolean)
{
this.vAAppraisalTypeFieldSpecified = value;
}
public get VAAppraisalTypeOtherDescription(): string
{
return this.vAAppraisalTypeOtherDescriptionField;
}
public set VAAppraisalTypeOtherDescription(value: string)
{
this.vAAppraisalTypeOtherDescriptionField = value;
}
public get VAClaimFolderIdentifier(): string
{
return this.vAClaimFolderIdentifierField;
}
public set VAClaimFolderIdentifier(value: string)
{
this.vAClaimFolderIdentifierField = value;
}
public get VAReasonableValueImprovementsCompletionIndicator(): VA_LOANVAReasonableValueImprovementsCompletionIndicator
{
return this.vAReasonableValueImprovementsCompletionIndicatorField;
}
public set VAReasonableValueImprovementsCompletionIndicator(value: VA_LOANVAReasonableValueImprovementsCompletionIndicator)
{
this.vAReasonableValueImprovementsCompletionIndicatorField = value;
}
public get VAReasonableValueImprovementsCompletionIndicatorSpecified(): boolean
{
return this.vAReasonableValueImprovementsCompletionIndicatorFieldSpecified;
}
public set VAReasonableValueImprovementsCompletionIndicatorSpecified(value: boolean)
{
this.vAReasonableValueImprovementsCompletionIndicatorFieldSpecified = value;
}
public get VAResidualIncomeGuidelineAmount(): string
{
return this.vAResidualIncomeGuidelineAmountField;
}
public set VAResidualIncomeGuidelineAmount(value: string)
{
this.vAResidualIncomeGuidelineAmountField = value;
}
public get TitleVestingType(): VA_LOANTitleVestingType
{
return this.titleVestingTypeField;
}
public set TitleVestingType(value: VA_LOANTitleVestingType)
{
this.titleVestingTypeField = value;
}
public get TitleVestingTypeSpecified(): boolean
{
return this.titleVestingTypeFieldSpecified;
}
public set TitleVestingTypeSpecified(value: boolean)
{
this.titleVestingTypeFieldSpecified = value;
}
public get TitleVestingTypeOtherDescription(): string
{
return this.titleVestingTypeOtherDescriptionField;
}
public set TitleVestingTypeOtherDescription(value: string)
{
this.titleVestingTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ENERGY_IMPROVEMENT 
{
private _IDField:string ;
private _TypeField:ENERGY_IMPROVEMENT_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Type(): ENERGY_IMPROVEMENT_Type
{
return this._TypeField;
}
public set _Type(value: ENERGY_IMPROVEMENT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
} 
}
export enum ENERGY_IMPROVEMENT_Type {
 InsulationSealant,

InstallationSolar,

ReplacementMajorSystem,

Other,

AdditionalNewFeature
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LENDER_APPRAISAL 
{
private _IDField:string ;
private staffAppraisalReviewerIdentifierField:string ;
private staffAppraisalReviewValuationAdjustmentIndicatorField:LENDER_APPRAISALStaffAppraisalReviewValuationAdjustmentIndicator ;
private staffAppraisalReviewValuationAdjustmentIndicatorFieldSpecified:boolean ;
private staffAppraisalReviewValueNotificationDateField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get StaffAppraisalReviewerIdentifier(): string
{
return this.staffAppraisalReviewerIdentifierField;
}
public set StaffAppraisalReviewerIdentifier(value: string)
{
this.staffAppraisalReviewerIdentifierField = value;
}
public get StaffAppraisalReviewValuationAdjustmentIndicator(): LENDER_APPRAISALStaffAppraisalReviewValuationAdjustmentIndicator
{
return this.staffAppraisalReviewValuationAdjustmentIndicatorField;
}
public set StaffAppraisalReviewValuationAdjustmentIndicator(value: LENDER_APPRAISALStaffAppraisalReviewValuationAdjustmentIndicator)
{
this.staffAppraisalReviewValuationAdjustmentIndicatorField = value;
}
public get StaffAppraisalReviewValuationAdjustmentIndicatorSpecified(): boolean
{
return this.staffAppraisalReviewValuationAdjustmentIndicatorFieldSpecified;
}
public set StaffAppraisalReviewValuationAdjustmentIndicatorSpecified(value: boolean)
{
this.staffAppraisalReviewValuationAdjustmentIndicatorFieldSpecified = value;
}
public get StaffAppraisalReviewValueNotificationDate(): string
{
return this.staffAppraisalReviewValueNotificationDateField;
}
public set StaffAppraisalReviewValueNotificationDate(value: string)
{
this.staffAppraisalReviewValueNotificationDateField = value;
} 
}
export enum LENDER_APPRAISALStaffAppraisalReviewValuationAdjustmentIndicator {
 N,

Y
 }
export enum VA_LOANVABorrowerCoBorrowerMarriedIndicator {
 N,

Y
 }
export enum VA_LOANPreviousVAHomeLoanIndicator {
 N,

Y
 }
export enum VA_LOAN_ProcedureType {
 AutomaticInterestRateReductionRefinanceLoan,

Other,

VAPriorApproval,

Automatic
 }
export enum VA_LOANVAAppraisalType {
 MasterCertificateOfReasonableValueCase,

LenderAppraisal,

PropertyManagementCase,

Other,

SingleProperty,

ManufacturedHome,

HUDConversion
 }
export enum VA_LOANVAReasonableValueImprovementsCompletionIndicator {
 N,

Y
 }
export enum VA_LOANTitleVestingType {
 Other,

Veteran,

VeteranAndSpouse
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GOVERNMENT_REPORTING 
{
private hMDAPurposeOfLoanTypeField:GOVERNMENT_REPORTINGHMDAPurposeOfLoanType ;
private hMDAPurposeOfLoanTypeFieldSpecified:boolean ;
private hMDAPreapprovalTypeField:GOVERNMENT_REPORTINGHMDAPreapprovalType ;
private hMDAPreapprovalTypeFieldSpecified:boolean ;
private hMDA_HOEPALoanStatusIndicatorField:GOVERNMENT_REPORTINGHMDA_HOEPALoanStatusIndicator ;
private hMDA_HOEPALoanStatusIndicatorFieldSpecified:boolean ;
private hMDARateSpreadPercentField:string ;
private _IDField:string ;
public get HMDAPurposeOfLoanType(): GOVERNMENT_REPORTINGHMDAPurposeOfLoanType
{
return this.hMDAPurposeOfLoanTypeField;
}
public set HMDAPurposeOfLoanType(value: GOVERNMENT_REPORTINGHMDAPurposeOfLoanType)
{
this.hMDAPurposeOfLoanTypeField = value;
}
public get HMDAPurposeOfLoanTypeSpecified(): boolean
{
return this.hMDAPurposeOfLoanTypeFieldSpecified;
}
public set HMDAPurposeOfLoanTypeSpecified(value: boolean)
{
this.hMDAPurposeOfLoanTypeFieldSpecified = value;
}
public get HMDAPreapprovalType(): GOVERNMENT_REPORTINGHMDAPreapprovalType
{
return this.hMDAPreapprovalTypeField;
}
public set HMDAPreapprovalType(value: GOVERNMENT_REPORTINGHMDAPreapprovalType)
{
this.hMDAPreapprovalTypeField = value;
}
public get HMDAPreapprovalTypeSpecified(): boolean
{
return this.hMDAPreapprovalTypeFieldSpecified;
}
public set HMDAPreapprovalTypeSpecified(value: boolean)
{
this.hMDAPreapprovalTypeFieldSpecified = value;
}
public get HMDA_HOEPALoanStatusIndicator(): GOVERNMENT_REPORTINGHMDA_HOEPALoanStatusIndicator
{
return this.hMDA_HOEPALoanStatusIndicatorField;
}
public set HMDA_HOEPALoanStatusIndicator(value: GOVERNMENT_REPORTINGHMDA_HOEPALoanStatusIndicator)
{
this.hMDA_HOEPALoanStatusIndicatorField = value;
}
public get HMDA_HOEPALoanStatusIndicatorSpecified(): boolean
{
return this.hMDA_HOEPALoanStatusIndicatorFieldSpecified;
}
public set HMDA_HOEPALoanStatusIndicatorSpecified(value: boolean)
{
this.hMDA_HOEPALoanStatusIndicatorFieldSpecified = value;
}
public get HMDARateSpreadPercent(): string
{
return this.hMDARateSpreadPercentField;
}
public set HMDARateSpreadPercent(value: string)
{
this.hMDARateSpreadPercentField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum GOVERNMENT_REPORTINGHMDAPurposeOfLoanType {
 Refinancing,

HomePurchase,

HomeImprovement
 }
export enum GOVERNMENT_REPORTINGHMDAPreapprovalType {
 NotApplicable,

PreapprovalWasRequested,

PreapprovalWasNotRequested
 }
export enum GOVERNMENT_REPORTINGHMDA_HOEPALoanStatusIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INTERVIEWER_INFORMATION 
{
private interviewersEmployerStreetAddressField:string ;
private interviewersEmployerCityField:string ;
private interviewersEmployerStateField:string ;
private interviewersEmployerPostalCodeField:string ;
private interviewersTelephoneNumberField:string ;
private applicationTakenMethodTypeField:INTERVIEWER_INFORMATIONApplicationTakenMethodType ;
private applicationTakenMethodTypeFieldSpecified:boolean ;
private interviewerApplicationSignedDateField:string ;
private interviewersEmployerNameField:string ;
private interviewersNameField:string ;
private _IDField:string ;
private interviewersEmployerStreetAddress2Field:string ;
public get InterviewersEmployerStreetAddress(): string
{
return this.interviewersEmployerStreetAddressField;
}
public set InterviewersEmployerStreetAddress(value: string)
{
this.interviewersEmployerStreetAddressField = value;
}
public get InterviewersEmployerCity(): string
{
return this.interviewersEmployerCityField;
}
public set InterviewersEmployerCity(value: string)
{
this.interviewersEmployerCityField = value;
}
public get InterviewersEmployerState(): string
{
return this.interviewersEmployerStateField;
}
public set InterviewersEmployerState(value: string)
{
this.interviewersEmployerStateField = value;
}
public get InterviewersEmployerPostalCode(): string
{
return this.interviewersEmployerPostalCodeField;
}
public set InterviewersEmployerPostalCode(value: string)
{
this.interviewersEmployerPostalCodeField = value;
}
public get InterviewersTelephoneNumber(): string
{
return this.interviewersTelephoneNumberField;
}
public set InterviewersTelephoneNumber(value: string)
{
this.interviewersTelephoneNumberField = value;
}
public get ApplicationTakenMethodType(): INTERVIEWER_INFORMATIONApplicationTakenMethodType
{
return this.applicationTakenMethodTypeField;
}
public set ApplicationTakenMethodType(value: INTERVIEWER_INFORMATIONApplicationTakenMethodType)
{
this.applicationTakenMethodTypeField = value;
}
public get ApplicationTakenMethodTypeSpecified(): boolean
{
return this.applicationTakenMethodTypeFieldSpecified;
}
public set ApplicationTakenMethodTypeSpecified(value: boolean)
{
this.applicationTakenMethodTypeFieldSpecified = value;
}
public get InterviewerApplicationSignedDate(): string
{
return this.interviewerApplicationSignedDateField;
}
public set InterviewerApplicationSignedDate(value: string)
{
this.interviewerApplicationSignedDateField = value;
}
public get InterviewersEmployerName(): string
{
return this.interviewersEmployerNameField;
}
public set InterviewersEmployerName(value: string)
{
this.interviewersEmployerNameField = value;
}
public get InterviewersName(): string
{
return this.interviewersNameField;
}
public set InterviewersName(value: string)
{
this.interviewersNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get InterviewersEmployerStreetAddress2(): string
{
return this.interviewersEmployerStreetAddress2Field;
}
public set InterviewersEmployerStreetAddress2(value: string)
{
this.interviewersEmployerStreetAddress2Field = value;
} 
}
export enum INTERVIEWER_INFORMATIONApplicationTakenMethodType {
 Mail,

FaceToFace,

Internet,

Telephone
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LIABILITY 
{
private _IDField:string ;
private borrowerIDField:string ;
private rEO_IDField:string ;
private _HolderStreetAddressField:string ;
private _HolderCityField:string ;
private _HolderStateField:string ;
private _HolderPostalCodeField:string ;
private alimonyOwedToNameField:string ;
private _AccountIdentifierField:string ;
private _ExclusionIndicatorField:LIABILITY_ExclusionIndicator ;
private _ExclusionIndicatorFieldSpecified:boolean ;
private _HolderNameField:string ;
private _MonthlyPaymentAmountField:string ;
private _PayoffStatusIndicatorField:LIABILITY_PayoffStatusIndicator ;
private _PayoffStatusIndicatorFieldSpecified:boolean ;
private _PayoffWithCurrentAssetsIndicatorField:LIABILITY_PayoffWithCurrentAssetsIndicator ;
private _PayoffWithCurrentAssetsIndicatorFieldSpecified:boolean ;
private _RemainingTermMonthsField:string ;
private _TypeField:LIABILITY_Type ;
private _TypeFieldSpecified:boolean ;
private _UnpaidBalanceAmountField:string ;
private subjectLoanResubordinationIndicatorField:LIABILITYSubjectLoanResubordinationIndicator ;
private subjectLoanResubordinationIndicatorFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _HolderStreetAddress2Field:string ;
private liabilityDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get BorrowerID(): string
{
return this.borrowerIDField;
}
public set BorrowerID(value: string)
{
this.borrowerIDField = value;
}
public get REO_ID(): string
{
return this.rEO_IDField;
}
public set REO_ID(value: string)
{
this.rEO_IDField = value;
}
public get _HolderStreetAddress(): string
{
return this._HolderStreetAddressField;
}
public set _HolderStreetAddress(value: string)
{
this._HolderStreetAddressField = value;
}
public get _HolderCity(): string
{
return this._HolderCityField;
}
public set _HolderCity(value: string)
{
this._HolderCityField = value;
}
public get _HolderState(): string
{
return this._HolderStateField;
}
public set _HolderState(value: string)
{
this._HolderStateField = value;
}
public get _HolderPostalCode(): string
{
return this._HolderPostalCodeField;
}
public set _HolderPostalCode(value: string)
{
this._HolderPostalCodeField = value;
}
public get AlimonyOwedToName(): string
{
return this.alimonyOwedToNameField;
}
public set AlimonyOwedToName(value: string)
{
this.alimonyOwedToNameField = value;
}
public get _AccountIdentifier(): string
{
return this._AccountIdentifierField;
}
public set _AccountIdentifier(value: string)
{
this._AccountIdentifierField = value;
}
public get _ExclusionIndicator(): LIABILITY_ExclusionIndicator
{
return this._ExclusionIndicatorField;
}
public set _ExclusionIndicator(value: LIABILITY_ExclusionIndicator)
{
this._ExclusionIndicatorField = value;
}
public get _ExclusionIndicatorSpecified(): boolean
{
return this._ExclusionIndicatorFieldSpecified;
}
public set _ExclusionIndicatorSpecified(value: boolean)
{
this._ExclusionIndicatorFieldSpecified = value;
}
public get _HolderName(): string
{
return this._HolderNameField;
}
public set _HolderName(value: string)
{
this._HolderNameField = value;
}
public get _MonthlyPaymentAmount(): string
{
return this._MonthlyPaymentAmountField;
}
public set _MonthlyPaymentAmount(value: string)
{
this._MonthlyPaymentAmountField = value;
}
public get _PayoffStatusIndicator(): LIABILITY_PayoffStatusIndicator
{
return this._PayoffStatusIndicatorField;
}
public set _PayoffStatusIndicator(value: LIABILITY_PayoffStatusIndicator)
{
this._PayoffStatusIndicatorField = value;
}
public get _PayoffStatusIndicatorSpecified(): boolean
{
return this._PayoffStatusIndicatorFieldSpecified;
}
public set _PayoffStatusIndicatorSpecified(value: boolean)
{
this._PayoffStatusIndicatorFieldSpecified = value;
}
public get _PayoffWithCurrentAssetsIndicator(): LIABILITY_PayoffWithCurrentAssetsIndicator
{
return this._PayoffWithCurrentAssetsIndicatorField;
}
public set _PayoffWithCurrentAssetsIndicator(value: LIABILITY_PayoffWithCurrentAssetsIndicator)
{
this._PayoffWithCurrentAssetsIndicatorField = value;
}
public get _PayoffWithCurrentAssetsIndicatorSpecified(): boolean
{
return this._PayoffWithCurrentAssetsIndicatorFieldSpecified;
}
public set _PayoffWithCurrentAssetsIndicatorSpecified(value: boolean)
{
this._PayoffWithCurrentAssetsIndicatorFieldSpecified = value;
}
public get _RemainingTermMonths(): string
{
return this._RemainingTermMonthsField;
}
public set _RemainingTermMonths(value: string)
{
this._RemainingTermMonthsField = value;
}
public get _Type(): LIABILITY_Type
{
return this._TypeField;
}
public set _Type(value: LIABILITY_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _UnpaidBalanceAmount(): string
{
return this._UnpaidBalanceAmountField;
}
public set _UnpaidBalanceAmount(value: string)
{
this._UnpaidBalanceAmountField = value;
}
public get SubjectLoanResubordinationIndicator(): LIABILITYSubjectLoanResubordinationIndicator
{
return this.subjectLoanResubordinationIndicatorField;
}
public set SubjectLoanResubordinationIndicator(value: LIABILITYSubjectLoanResubordinationIndicator)
{
this.subjectLoanResubordinationIndicatorField = value;
}
public get SubjectLoanResubordinationIndicatorSpecified(): boolean
{
return this.subjectLoanResubordinationIndicatorFieldSpecified;
}
public set SubjectLoanResubordinationIndicatorSpecified(value: boolean)
{
this.subjectLoanResubordinationIndicatorFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _HolderStreetAddress2(): string
{
return this._HolderStreetAddress2Field;
}
public set _HolderStreetAddress2(value: string)
{
this._HolderStreetAddress2Field = value;
}
public get LiabilityDescription(): string
{
return this.liabilityDescriptionField;
}
public set LiabilityDescription(value: string)
{
this.liabilityDescriptionField = value;
} 
}
export enum LIABILITY_ExclusionIndicator {
 N,

Y
 }
export enum LIABILITY_PayoffStatusIndicator {
 N,

Y
 }
export enum LIABILITY_PayoffWithCurrentAssetsIndicator {
 N,

Y
 }
export enum LIABILITY_Type {
 SeparateMaintenanceExpense,

Taxes,

BorrowerEstimatedTotalMonthlyLiabilityPayment,

CollectionsJudgmentsAndLiens,

DelinquentTaxes,

ChildCare,

LeasePayments,

CollectionsJudgementsAndLiens,

FirstMortgageBeingFinanced,

Garnishments,

UnionDues,

UnsecuredHomeImprovementLoanInstallment,

ChildSupport,

Alimony,

HELOC,

Revolving,

Open30DayChargeAccount,

OtherLiability,

OtherExpense,

Installment,

UnsecuredHomeImprovementLoanRevolving,

DeferredStudentLoan,

JobRelatedExpenses,

MortgageLoan
 }
export enum LIABILITYSubjectLoanResubordinationIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_PRODUCT_DATA 
{
private aRMField:ARM ;
private bUYDOWNField:BUYDOWN[] ;
private lOAN_FEATURESField:LOAN_FEATURES ;
private pAYMENT_ADJUSTMENTField:PAYMENT_ADJUSTMENT[] ;
private rATE_ADJUSTMENTField:RATE_ADJUSTMENT[] ;
private hELOCField:HELOC ;
private iNTEREST_ONLYField:INTEREST_ONLY ;
private pREPAYMENT_PENALTYField:PREPAYMENT_PENALTY[] ;
private iNTEREST_CALCULATION_RULEField:INTEREST_CALCULATION_RULE[] ;
private _IDField:string ;
public get ARM(): ARM
{
return this.aRMField;
}
public set ARM(value: ARM)
{
this.aRMField = value;
}
public get BUYDOWN(): BUYDOWN[]
{
return this.bUYDOWNField;
}
public set BUYDOWN(value: BUYDOWN[])
{
this.bUYDOWNField = value;
}
public get LOAN_FEATURES(): LOAN_FEATURES
{
return this.lOAN_FEATURESField;
}
public set LOAN_FEATURES(value: LOAN_FEATURES)
{
this.lOAN_FEATURESField = value;
}
public get PAYMENT_ADJUSTMENT(): PAYMENT_ADJUSTMENT[]
{
return this.pAYMENT_ADJUSTMENTField;
}
public set PAYMENT_ADJUSTMENT(value: PAYMENT_ADJUSTMENT[])
{
this.pAYMENT_ADJUSTMENTField = value;
}
public get RATE_ADJUSTMENT(): RATE_ADJUSTMENT[]
{
return this.rATE_ADJUSTMENTField;
}
public set RATE_ADJUSTMENT(value: RATE_ADJUSTMENT[])
{
this.rATE_ADJUSTMENTField = value;
}
public get HELOC(): HELOC
{
return this.hELOCField;
}
public set HELOC(value: HELOC)
{
this.hELOCField = value;
}
public get INTEREST_ONLY(): INTEREST_ONLY
{
return this.iNTEREST_ONLYField;
}
public set INTEREST_ONLY(value: INTEREST_ONLY)
{
this.iNTEREST_ONLYField = value;
}
public get PREPAYMENT_PENALTY(): PREPAYMENT_PENALTY[]
{
return this.pREPAYMENT_PENALTYField;
}
public set PREPAYMENT_PENALTY(value: PREPAYMENT_PENALTY[])
{
this.pREPAYMENT_PENALTYField = value;
}
public get INTEREST_CALCULATION_RULE(): INTEREST_CALCULATION_RULE[]
{
return this.iNTEREST_CALCULATION_RULEField;
}
public set INTEREST_CALCULATION_RULE(value: INTEREST_CALCULATION_RULE[])
{
this.iNTEREST_CALCULATION_RULEField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ARM 
{
private _CONVERSION_OPTIONField:_CONVERSION_OPTION ;
private _IndexCurrentValuePercentField:string ;
private _IndexMarginPercentField:string ;
private _IndexTypeField:ARM_IndexType ;
private _IndexTypeFieldSpecified:boolean ;
private _QualifyingRatePercentField:string ;
private _ConversionOptionIndicatorField:ARM_ConversionOptionIndicator ;
private _ConversionOptionIndicatorFieldSpecified:boolean ;
private paymentAdjustmentLifetimeCapAmountField:string ;
private paymentAdjustmentLifetimeCapPercentField:string ;
private rateAdjustmentLifetimeCapPercentField:string ;
private _LifetimeCapRateField:string ;
private _LifetimeFloorPercentField:string ;
private _InterestRateRoundingFactorField:string ;
private _InterestRateRoundingTypeField:ARM_InterestRateRoundingType ;
private _InterestRateRoundingTypeFieldSpecified:boolean ;
private fNMTreasuryYieldForCurrentIndexDivisorNumberField:string ;
private fNMTreasuryYieldForIndexDivisorNumberField:string ;
private _IDField:string ;
private _IndexTypeOtherDescriptionField:string ;
private _PrincipalAndInterestPaymentMaximumAmountField:string ;
private _InterestRateRoundingTypeOtherDescriptionField:string ;
public get _CONVERSION_OPTION(): _CONVERSION_OPTION
{
return this._CONVERSION_OPTIONField;
}
public set _CONVERSION_OPTION(value: _CONVERSION_OPTION)
{
this._CONVERSION_OPTIONField = value;
}
public get _IndexCurrentValuePercent(): string
{
return this._IndexCurrentValuePercentField;
}
public set _IndexCurrentValuePercent(value: string)
{
this._IndexCurrentValuePercentField = value;
}
public get _IndexMarginPercent(): string
{
return this._IndexMarginPercentField;
}
public set _IndexMarginPercent(value: string)
{
this._IndexMarginPercentField = value;
}
public get _IndexType(): ARM_IndexType
{
return this._IndexTypeField;
}
public set _IndexType(value: ARM_IndexType)
{
this._IndexTypeField = value;
}
public get _IndexTypeSpecified(): boolean
{
return this._IndexTypeFieldSpecified;
}
public set _IndexTypeSpecified(value: boolean)
{
this._IndexTypeFieldSpecified = value;
}
public get _QualifyingRatePercent(): string
{
return this._QualifyingRatePercentField;
}
public set _QualifyingRatePercent(value: string)
{
this._QualifyingRatePercentField = value;
}
public get _ConversionOptionIndicator(): ARM_ConversionOptionIndicator
{
return this._ConversionOptionIndicatorField;
}
public set _ConversionOptionIndicator(value: ARM_ConversionOptionIndicator)
{
this._ConversionOptionIndicatorField = value;
}
public get _ConversionOptionIndicatorSpecified(): boolean
{
return this._ConversionOptionIndicatorFieldSpecified;
}
public set _ConversionOptionIndicatorSpecified(value: boolean)
{
this._ConversionOptionIndicatorFieldSpecified = value;
}
public get PaymentAdjustmentLifetimeCapAmount(): string
{
return this.paymentAdjustmentLifetimeCapAmountField;
}
public set PaymentAdjustmentLifetimeCapAmount(value: string)
{
this.paymentAdjustmentLifetimeCapAmountField = value;
}
public get PaymentAdjustmentLifetimeCapPercent(): string
{
return this.paymentAdjustmentLifetimeCapPercentField;
}
public set PaymentAdjustmentLifetimeCapPercent(value: string)
{
this.paymentAdjustmentLifetimeCapPercentField = value;
}
public get RateAdjustmentLifetimeCapPercent(): string
{
return this.rateAdjustmentLifetimeCapPercentField;
}
public set RateAdjustmentLifetimeCapPercent(value: string)
{
this.rateAdjustmentLifetimeCapPercentField = value;
}
public get _LifetimeCapRate(): string
{
return this._LifetimeCapRateField;
}
public set _LifetimeCapRate(value: string)
{
this._LifetimeCapRateField = value;
}
public get _LifetimeFloorPercent(): string
{
return this._LifetimeFloorPercentField;
}
public set _LifetimeFloorPercent(value: string)
{
this._LifetimeFloorPercentField = value;
}
public get _InterestRateRoundingFactor(): string
{
return this._InterestRateRoundingFactorField;
}
public set _InterestRateRoundingFactor(value: string)
{
this._InterestRateRoundingFactorField = value;
}
public get _InterestRateRoundingType(): ARM_InterestRateRoundingType
{
return this._InterestRateRoundingTypeField;
}
public set _InterestRateRoundingType(value: ARM_InterestRateRoundingType)
{
this._InterestRateRoundingTypeField = value;
}
public get _InterestRateRoundingTypeSpecified(): boolean
{
return this._InterestRateRoundingTypeFieldSpecified;
}
public set _InterestRateRoundingTypeSpecified(value: boolean)
{
this._InterestRateRoundingTypeFieldSpecified = value;
}
public get FNMTreasuryYieldForCurrentIndexDivisorNumber(): string
{
return this.fNMTreasuryYieldForCurrentIndexDivisorNumberField;
}
public set FNMTreasuryYieldForCurrentIndexDivisorNumber(value: string)
{
this.fNMTreasuryYieldForCurrentIndexDivisorNumberField = value;
}
public get FNMTreasuryYieldForIndexDivisorNumber(): string
{
return this.fNMTreasuryYieldForIndexDivisorNumberField;
}
public set FNMTreasuryYieldForIndexDivisorNumber(value: string)
{
this.fNMTreasuryYieldForIndexDivisorNumberField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _IndexTypeOtherDescription(): string
{
return this._IndexTypeOtherDescriptionField;
}
public set _IndexTypeOtherDescription(value: string)
{
this._IndexTypeOtherDescriptionField = value;
}
public get _PrincipalAndInterestPaymentMaximumAmount(): string
{
return this._PrincipalAndInterestPaymentMaximumAmountField;
}
public set _PrincipalAndInterestPaymentMaximumAmount(value: string)
{
this._PrincipalAndInterestPaymentMaximumAmountField = value;
}
public get _InterestRateRoundingTypeOtherDescription(): string
{
return this._InterestRateRoundingTypeOtherDescriptionField;
}
public set _InterestRateRoundingTypeOtherDescription(value: string)
{
this._InterestRateRoundingTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CONVERSION_OPTION 
{
private _EndingChangeDatePeriodDescriptionField:string ;
private _FeeAmountField:string ;
private _NoteTermGreaterThanFifteenYearsAdditionalPercentField:string ;
private _NoteTermLessThanFifteenYearsAdditionalPercentField:string ;
private _PeriodEndDateField:string ;
private _PeriodStartDateField:string ;
private _StartingChangeDatePeriodDescriptionField:string ;
private conversionOptionPeriodFeePercentField:string ;
private _IDField:string ;
public get _EndingChangeDatePeriodDescription(): string
{
return this._EndingChangeDatePeriodDescriptionField;
}
public set _EndingChangeDatePeriodDescription(value: string)
{
this._EndingChangeDatePeriodDescriptionField = value;
}
public get _FeeAmount(): string
{
return this._FeeAmountField;
}
public set _FeeAmount(value: string)
{
this._FeeAmountField = value;
}
public get _NoteTermGreaterThanFifteenYearsAdditionalPercent(): string
{
return this._NoteTermGreaterThanFifteenYearsAdditionalPercentField;
}
public set _NoteTermGreaterThanFifteenYearsAdditionalPercent(value: string)
{
this._NoteTermGreaterThanFifteenYearsAdditionalPercentField = value;
}
public get _NoteTermLessThanFifteenYearsAdditionalPercent(): string
{
return this._NoteTermLessThanFifteenYearsAdditionalPercentField;
}
public set _NoteTermLessThanFifteenYearsAdditionalPercent(value: string)
{
this._NoteTermLessThanFifteenYearsAdditionalPercentField = value;
}
public get _PeriodEndDate(): string
{
return this._PeriodEndDateField;
}
public set _PeriodEndDate(value: string)
{
this._PeriodEndDateField = value;
}
public get _PeriodStartDate(): string
{
return this._PeriodStartDateField;
}
public set _PeriodStartDate(value: string)
{
this._PeriodStartDateField = value;
}
public get _StartingChangeDatePeriodDescription(): string
{
return this._StartingChangeDatePeriodDescriptionField;
}
public set _StartingChangeDatePeriodDescription(value: string)
{
this._StartingChangeDatePeriodDescriptionField = value;
}
public get ConversionOptionPeriodFeePercent(): string
{
return this.conversionOptionPeriodFeePercentField;
}
public set ConversionOptionPeriodFeePercent(value: string)
{
this.conversionOptionPeriodFeePercentField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum ARM_IndexType {
 WeeklyAverageConstantMaturingTreasury,

FNM_LIBOR,

FRE_LIBOR,

FNM60DayRequiredNetYield,

NationalAverageContractRateFHLBB,

MonthlyAverageConstantMaturingTreasury,

FRE60DayRequiredNetYield,

OneYearTreasury,

Other,

EleventhDistrictCostOfFunds,

WeeklyAverageTreasuryAuctionAverageInvestmentYield,

WeeklyAveragePrimeRate,

NationalMonthlyMedianCostOfFunds,

WeeklyAverageSecondaryMarketTreasuryBillInvestmentYield,

LIBOR,

WeeklyAverageTreasuryAuctionAverageBondDiscountYield,

SixMonthTreasury,

WallStreetJournalLIBOR,

DailyCertificateOfDepositRate,

TreasuryBillDailyValue,

ThreeYearTreasury,

WeeklyAverageCertificateOfDepositRate,

FederalCostOfFunds
 }
export enum ARM_ConversionOptionIndicator {
 N,

Y
 }
export enum ARM_InterestRateRoundingType {
 Nearest,

None,

Other,

Up,

Down
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class BUYDOWN 
{
private _CONTRIBUTORField:_CONTRIBUTOR[] ;
private _SUBSIDY_SCHEDULEField:_SUBSIDY_SCHEDULE[] ;
private _BaseDateTypeField:BUYDOWN_BaseDateType ;
private _BaseDateTypeFieldSpecified:boolean ;
private _ChangeFrequencyMonthsField:string ;
private _ContributorTypeField:BUYDOWN_ContributorType ;
private _ContributorTypeFieldSpecified:boolean ;
private _ContributorTypeOtherDescriptionField:string ;
private _DurationMonthsField:string ;
private _IncreaseRatePercentField:string ;
private _LenderFundingIndicatorField:BUYDOWN_LenderFundingIndicator ;
private _LenderFundingIndicatorFieldSpecified:boolean ;
private _OriginalBalanceAmountField:string ;
private _PermanentIndicatorField:BUYDOWN_PermanentIndicator ;
private _PermanentIndicatorFieldSpecified:boolean ;
private _SubsidyCalculationTypeField:BUYDOWN_SubsidyCalculationType ;
private _SubsidyCalculationTypeFieldSpecified:boolean ;
private _TotalSubsidyAmountField:string ;
private _IDField:string ;
private _BaseDateTypeOtherDescriptionField:string ;
public get _CONTRIBUTOR(): _CONTRIBUTOR[]
{
return this._CONTRIBUTORField;
}
public set _CONTRIBUTOR(value: _CONTRIBUTOR[])
{
this._CONTRIBUTORField = value;
}
public get _SUBSIDY_SCHEDULE(): _SUBSIDY_SCHEDULE[]
{
return this._SUBSIDY_SCHEDULEField;
}
public set _SUBSIDY_SCHEDULE(value: _SUBSIDY_SCHEDULE[])
{
this._SUBSIDY_SCHEDULEField = value;
}
public get _BaseDateType(): BUYDOWN_BaseDateType
{
return this._BaseDateTypeField;
}
public set _BaseDateType(value: BUYDOWN_BaseDateType)
{
this._BaseDateTypeField = value;
}
public get _BaseDateTypeSpecified(): boolean
{
return this._BaseDateTypeFieldSpecified;
}
public set _BaseDateTypeSpecified(value: boolean)
{
this._BaseDateTypeFieldSpecified = value;
}
public get _ChangeFrequencyMonths(): string
{
return this._ChangeFrequencyMonthsField;
}
public set _ChangeFrequencyMonths(value: string)
{
this._ChangeFrequencyMonthsField = value;
}
public get _ContributorType(): BUYDOWN_ContributorType
{
return this._ContributorTypeField;
}
public set _ContributorType(value: BUYDOWN_ContributorType)
{
this._ContributorTypeField = value;
}
public get _ContributorTypeSpecified(): boolean
{
return this._ContributorTypeFieldSpecified;
}
public set _ContributorTypeSpecified(value: boolean)
{
this._ContributorTypeFieldSpecified = value;
}
public get _ContributorTypeOtherDescription(): string
{
return this._ContributorTypeOtherDescriptionField;
}
public set _ContributorTypeOtherDescription(value: string)
{
this._ContributorTypeOtherDescriptionField = value;
}
public get _DurationMonths(): string
{
return this._DurationMonthsField;
}
public set _DurationMonths(value: string)
{
this._DurationMonthsField = value;
}
public get _IncreaseRatePercent(): string
{
return this._IncreaseRatePercentField;
}
public set _IncreaseRatePercent(value: string)
{
this._IncreaseRatePercentField = value;
}
public get _LenderFundingIndicator(): BUYDOWN_LenderFundingIndicator
{
return this._LenderFundingIndicatorField;
}
public set _LenderFundingIndicator(value: BUYDOWN_LenderFundingIndicator)
{
this._LenderFundingIndicatorField = value;
}
public get _LenderFundingIndicatorSpecified(): boolean
{
return this._LenderFundingIndicatorFieldSpecified;
}
public set _LenderFundingIndicatorSpecified(value: boolean)
{
this._LenderFundingIndicatorFieldSpecified = value;
}
public get _OriginalBalanceAmount(): string
{
return this._OriginalBalanceAmountField;
}
public set _OriginalBalanceAmount(value: string)
{
this._OriginalBalanceAmountField = value;
}
public get _PermanentIndicator(): BUYDOWN_PermanentIndicator
{
return this._PermanentIndicatorField;
}
public set _PermanentIndicator(value: BUYDOWN_PermanentIndicator)
{
this._PermanentIndicatorField = value;
}
public get _PermanentIndicatorSpecified(): boolean
{
return this._PermanentIndicatorFieldSpecified;
}
public set _PermanentIndicatorSpecified(value: boolean)
{
this._PermanentIndicatorFieldSpecified = value;
}
public get _SubsidyCalculationType(): BUYDOWN_SubsidyCalculationType
{
return this._SubsidyCalculationTypeField;
}
public set _SubsidyCalculationType(value: BUYDOWN_SubsidyCalculationType)
{
this._SubsidyCalculationTypeField = value;
}
public get _SubsidyCalculationTypeSpecified(): boolean
{
return this._SubsidyCalculationTypeFieldSpecified;
}
public set _SubsidyCalculationTypeSpecified(value: boolean)
{
this._SubsidyCalculationTypeFieldSpecified = value;
}
public get _TotalSubsidyAmount(): string
{
return this._TotalSubsidyAmountField;
}
public set _TotalSubsidyAmount(value: string)
{
this._TotalSubsidyAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _BaseDateTypeOtherDescription(): string
{
return this._BaseDateTypeOtherDescriptionField;
}
public set _BaseDateTypeOtherDescription(value: string)
{
this._BaseDateTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CONTRIBUTOR 
{
private _AmountField:string ;
private _PercentField:string ;
private _RoleTypeField:_CONTRIBUTOR_RoleType ;
private _RoleTypeFieldSpecified:boolean ;
private _RoleTypeOtherDescriptionField:string ;
private _UnparsedNameField:string ;
private _IDField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _RoleType(): _CONTRIBUTOR_RoleType
{
return this._RoleTypeField;
}
public set _RoleType(value: _CONTRIBUTOR_RoleType)
{
this._RoleTypeField = value;
}
public get _RoleTypeSpecified(): boolean
{
return this._RoleTypeFieldSpecified;
}
public set _RoleTypeSpecified(value: boolean)
{
this._RoleTypeFieldSpecified = value;
}
public get _RoleTypeOtherDescription(): string
{
return this._RoleTypeOtherDescriptionField;
}
public set _RoleTypeOtherDescription(value: string)
{
this._RoleTypeOtherDescriptionField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _CONTRIBUTOR_RoleType {
 Builder,

NonparentRelative,

Employer,

Seller,

Other,

Unassigned,

UnrelatedFriend,

Borrower,

LenderPremiumFinanced,

Parent
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _SUBSIDY_SCHEDULE 
{
private _AdjustmentPercentField:string ;
private _PeriodIdentifierField:string ;
private _PeriodicPaymentEffectiveDateField:string ;
private _PeriodicPaymentSubsidyAmountField:string ;
private _PeriodicTermField:string ;
private _IDField:string ;
public get _AdjustmentPercent(): string
{
return this._AdjustmentPercentField;
}
public set _AdjustmentPercent(value: string)
{
this._AdjustmentPercentField = value;
}
public get _PeriodIdentifier(): string
{
return this._PeriodIdentifierField;
}
public set _PeriodIdentifier(value: string)
{
this._PeriodIdentifierField = value;
}
public get _PeriodicPaymentEffectiveDate(): string
{
return this._PeriodicPaymentEffectiveDateField;
}
public set _PeriodicPaymentEffectiveDate(value: string)
{
this._PeriodicPaymentEffectiveDateField = value;
}
public get _PeriodicPaymentSubsidyAmount(): string
{
return this._PeriodicPaymentSubsidyAmountField;
}
public set _PeriodicPaymentSubsidyAmount(value: string)
{
this._PeriodicPaymentSubsidyAmountField = value;
}
public get _PeriodicTerm(): string
{
return this._PeriodicTermField;
}
public set _PeriodicTerm(value: string)
{
this._PeriodicTermField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum BUYDOWN_BaseDateType {
 LastPaymentDate,

Other,

FirstPaymentDate,

NoteDate
 }
export enum BUYDOWN_ContributorType {
 Builder,

NonparentRelative,

Employer,

Financed,

Seller,

Other,

Unassigned,

NonParentRelative,

UnrelatedFriend,

Borrower,

LenderPremiumFinanced,

Parent
 }
export enum BUYDOWN_LenderFundingIndicator {
 N,

Y
 }
export enum BUYDOWN_PermanentIndicator {
 N,

Y
 }
export enum BUYDOWN_SubsidyCalculationType {
 OriginalLoanAmount,

DecliningLoanBalance
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_FEATURES 
{
private lATE_CHARGEField:LATE_CHARGE ;
private nOTE_PAY_TOField:NOTE_PAY_TO ;
private assumabilityIndicatorField:LOAN_FEATURESAssumabilityIndicator ;
private assumabilityIndicatorFieldSpecified:boolean ;
private balloonIndicatorField:LOAN_FEATURESBalloonIndicator ;
private balloonIndicatorFieldSpecified:boolean ;
private balloonLoanMaturityTermMonthsField:string ;
private buydownTemporarySubsidyIndicatorField:LOAN_FEATURESBuydownTemporarySubsidyIndicator ;
private buydownTemporarySubsidyIndicatorFieldSpecified:boolean ;
private counselingConfirmationIndicatorField:LOAN_FEATURESCounselingConfirmationIndicator ;
private counselingConfirmationIndicatorFieldSpecified:boolean ;
private downPaymentOptionTypeField:LOAN_FEATURESDownPaymentOptionType ;
private downPaymentOptionTypeFieldSpecified:boolean ;
private escrowWaiverIndicatorField:LOAN_FEATURESEscrowWaiverIndicator ;
private escrowWaiverIndicatorFieldSpecified:boolean ;
private fNMProductPlanIdentifierField:string ;
private fREOfferingIdentifierField:string ;
private gSEProjectClassificationTypeField:LOAN_FEATURESGSEProjectClassificationType ;
private gSEProjectClassificationTypeFieldSpecified:boolean ;
private gSEPropertyTypeField:LOAN_FEATURESGSEPropertyType ;
private gSEPropertyTypeFieldSpecified:boolean ;
private hELOCMaximumBalanceAmountField:string ;
private hELOCInitialAdvanceAmountField:string ;
private interestOnlyTermField:string ;
private lenderSelfInsuredIndicatorField:LOAN_FEATURESLenderSelfInsuredIndicator ;
private lenderSelfInsuredIndicatorFieldSpecified:boolean ;
private lienPriorityTypeField:LOAN_FEATURESLienPriorityType ;
private lienPriorityTypeFieldSpecified:boolean ;
private loanClosingStatusTypeField:LOAN_FEATURESLoanClosingStatusType ;
private loanClosingStatusTypeFieldSpecified:boolean ;
private loanDocumentationTypeField:LOAN_FEATURESLoanDocumentationType ;
private loanDocumentationTypeFieldSpecified:boolean ;
private loanRepaymentTypeField:LOAN_FEATURESLoanRepaymentType ;
private loanRepaymentTypeFieldSpecified:boolean ;
private loanScheduledClosingDateField:string ;
private mICertificationStatusTypeField:LOAN_FEATURESMICertificationStatusType ;
private mICertificationStatusTypeFieldSpecified:boolean ;
private mICompanyNameTypeField:LOAN_FEATURESMICompanyNameType ;
private mICompanyNameTypeFieldSpecified:boolean ;
private mICoveragePercentField:string ;
private nameDocumentsDrawnInTypeField:LOAN_FEATURESNameDocumentsDrawnInType ;
private nameDocumentsDrawnInTypeFieldSpecified:boolean ;
private negativeAmortizationLimitPercentField:string ;
private paymentFrequencyTypeField:LOAN_FEATURESPaymentFrequencyType ;
private paymentFrequencyTypeFieldSpecified:boolean ;
private prepaymentPenaltyIndicatorField:LOAN_FEATURESPrepaymentPenaltyIndicator ;
private prepaymentPenaltyIndicatorFieldSpecified:boolean ;
private fullPrepaymentPenaltyOptionTypeField:LOAN_FEATURESFullPrepaymentPenaltyOptionType ;
private fullPrepaymentPenaltyOptionTypeFieldSpecified:boolean ;
private prepaymentPenaltyTermMonthsField:string ;
private prepaymentRestrictionIndicatorField:LOAN_FEATURESPrepaymentRestrictionIndicator ;
private prepaymentRestrictionIndicatorFieldSpecified:boolean ;
private productDescriptionField:string ;
private productNameField:string ;
private scheduledFirstPaymentDateField:string ;
private servicingTransferStatusTypeField:LOAN_FEATURESServicingTransferStatusType ;
private servicingTransferStatusTypeFieldSpecified:boolean ;
private conformingIndicatorField:LOAN_FEATURESConformingIndicator ;
private conformingIndicatorFieldSpecified:boolean ;
private requiredDepositIndicatorField:LOAN_FEATURESRequiredDepositIndicator ;
private requiredDepositIndicatorFieldSpecified:boolean ;
private demandFeatureIndicatorField:LOAN_FEATURESDemandFeatureIndicator ;
private demandFeatureIndicatorFieldSpecified:boolean ;
private estimatedPrepaidDaysField:string ;
private estimatedPrepaidDaysPaidByTypeField:LOAN_FEATURESEstimatedPrepaidDaysPaidByType ;
private estimatedPrepaidDaysPaidByTypeFieldSpecified:boolean ;
private estimatedPrepaidDaysPaidByOtherTypeDescriptionField:string ;
private prepaymentFinanceChargeRefundableIndicatorField:LOAN_FEATURESPrepaymentFinanceChargeRefundableIndicator ;
private prepaymentFinanceChargeRefundableIndicatorFieldSpecified:boolean ;
private graduatedPaymentMultiplierFactorField:string ;
private loanMaturityDateField:string ;
private loanOriginalMaturityTermMonthsField:string ;
private paymentFrequencyTypeOtherDescriptionField:string ;
private originalPrincipalAndInterestPaymentAmountField:string ;
private timelyPaymentRateReductionIndicatorField:LOAN_FEATURESTimelyPaymentRateReductionIndicator ;
private timelyPaymentRateReductionIndicatorFieldSpecified:boolean ;
private timelyPaymentRateReductionPercentField:string ;
private counselingConfirmationTypeField:LOAN_FEATURESCounselingConfirmationType ;
private counselingConfirmationTypeFieldSpecified:boolean ;
private initialPaymentRatePercentField:string ;
private refundableApplicationFeeIndicatorField:LOAN_FEATURESRefundableApplicationFeeIndicator ;
private refundableApplicationFeeIndicatorFieldSpecified:boolean ;
private originalBalloonTermMonthsField:string ;
private growingEquityLoanPayoffYearsCountField:string ;
private conditionsToAssumabilityIndicatorField:LOAN_FEATURESConditionsToAssumabilityIndicator ;
private conditionsToAssumabilityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private fNMProductPlanIndentifierField:string ;
private negativeAmortizationLimitMonthsCountField:string ;
private loanRepaymentTypeOtherDescriptionField:string ;
private lienPriorityTypeOtherDescriptionField:string ;
private negativeAmortizationTypeField:LOAN_FEATURESNegativeAmortizationType ;
private negativeAmortizationTypeFieldSpecified:boolean ;
private loanDocumentationTypeOtherDescriptionField:string ;
private downPaymentOptionTypeOtherDescriptionField:string ;
private mICertificationStatusTypeOtherDescriptionField:string ;
private nameDocumentsDrawnInTypeOtherDescriptionField:string ;
private mICompanyNameTypeOtherDescriptionField:string ;
private fNMProjectClassificationTypeField:LOAN_FEATURESFNMProjectClassificationType ;
private fNMProjectClassificationTypeFieldSpecified:boolean ;
private fNMProjectClassificationTypeOtherDescriptionField:string ;
private fREProjectClassificationTypeField:LOAN_FEATURESFREProjectClassificationType ;
private fREProjectClassificationTypeFieldSpecified:boolean ;
private fREProjectClassificationTypeOtherDescriptionField:string ;
private productIdentifierField:string ;
private initialPaymentDiscountPercentField:string ;
private biweeklyComparableMonthlyMaturityDateField:string ;
private biweeklyToMonthlyOnDefaultIndicatorField:LOAN_FEATURESBiweeklyToMonthlyOnDefaultIndicator ;
private biweeklyToMonthlyOnDefaultIndicatorFieldSpecified:boolean ;
private qualifyingRateTypeField:LOAN_FEATURESQualifyingRateType ;
private qualifyingRateTypeFieldSpecified:boolean ;
private qualifyingRateTypeOtherDescriptionField:string ;
private negativeAmortizationMaximumLoanBalanceAmountField:string ;
private negativeAmortizationMaximumPITIAmountField:string ;
private qualifyingPaymentAmountField:string ;
private qualifyingRatePercentField:string ;
private interestOnlyIndicatorField:LOAN_FEATURESInterestOnlyIndicator ;
private interestOnlyIndicatorFieldSpecified:boolean ;
private balloonPaymentAmountField:string ;
private rESPAConformingYearTypeField:LOAN_FEATURESRESPAConformingYearType ;
private rESPAConformingYearTypeFieldSpecified:boolean ;
private rESPAConformingYearTypeOtherDescriptionField:string ;
public get LATE_CHARGE(): LATE_CHARGE
{
return this.lATE_CHARGEField;
}
public set LATE_CHARGE(value: LATE_CHARGE)
{
this.lATE_CHARGEField = value;
}
public get NOTE_PAY_TO(): NOTE_PAY_TO
{
return this.nOTE_PAY_TOField;
}
public set NOTE_PAY_TO(value: NOTE_PAY_TO)
{
this.nOTE_PAY_TOField = value;
}
public get AssumabilityIndicator(): LOAN_FEATURESAssumabilityIndicator
{
return this.assumabilityIndicatorField;
}
public set AssumabilityIndicator(value: LOAN_FEATURESAssumabilityIndicator)
{
this.assumabilityIndicatorField = value;
}
public get AssumabilityIndicatorSpecified(): boolean
{
return this.assumabilityIndicatorFieldSpecified;
}
public set AssumabilityIndicatorSpecified(value: boolean)
{
this.assumabilityIndicatorFieldSpecified = value;
}
public get BalloonIndicator(): LOAN_FEATURESBalloonIndicator
{
return this.balloonIndicatorField;
}
public set BalloonIndicator(value: LOAN_FEATURESBalloonIndicator)
{
this.balloonIndicatorField = value;
}
public get BalloonIndicatorSpecified(): boolean
{
return this.balloonIndicatorFieldSpecified;
}
public set BalloonIndicatorSpecified(value: boolean)
{
this.balloonIndicatorFieldSpecified = value;
}
public get BalloonLoanMaturityTermMonths(): string
{
return this.balloonLoanMaturityTermMonthsField;
}
public set BalloonLoanMaturityTermMonths(value: string)
{
this.balloonLoanMaturityTermMonthsField = value;
}
public get BuydownTemporarySubsidyIndicator(): LOAN_FEATURESBuydownTemporarySubsidyIndicator
{
return this.buydownTemporarySubsidyIndicatorField;
}
public set BuydownTemporarySubsidyIndicator(value: LOAN_FEATURESBuydownTemporarySubsidyIndicator)
{
this.buydownTemporarySubsidyIndicatorField = value;
}
public get BuydownTemporarySubsidyIndicatorSpecified(): boolean
{
return this.buydownTemporarySubsidyIndicatorFieldSpecified;
}
public set BuydownTemporarySubsidyIndicatorSpecified(value: boolean)
{
this.buydownTemporarySubsidyIndicatorFieldSpecified = value;
}
public get CounselingConfirmationIndicator(): LOAN_FEATURESCounselingConfirmationIndicator
{
return this.counselingConfirmationIndicatorField;
}
public set CounselingConfirmationIndicator(value: LOAN_FEATURESCounselingConfirmationIndicator)
{
this.counselingConfirmationIndicatorField = value;
}
public get CounselingConfirmationIndicatorSpecified(): boolean
{
return this.counselingConfirmationIndicatorFieldSpecified;
}
public set CounselingConfirmationIndicatorSpecified(value: boolean)
{
this.counselingConfirmationIndicatorFieldSpecified = value;
}
public get DownPaymentOptionType(): LOAN_FEATURESDownPaymentOptionType
{
return this.downPaymentOptionTypeField;
}
public set DownPaymentOptionType(value: LOAN_FEATURESDownPaymentOptionType)
{
this.downPaymentOptionTypeField = value;
}
public get DownPaymentOptionTypeSpecified(): boolean
{
return this.downPaymentOptionTypeFieldSpecified;
}
public set DownPaymentOptionTypeSpecified(value: boolean)
{
this.downPaymentOptionTypeFieldSpecified = value;
}
public get EscrowWaiverIndicator(): LOAN_FEATURESEscrowWaiverIndicator
{
return this.escrowWaiverIndicatorField;
}
public set EscrowWaiverIndicator(value: LOAN_FEATURESEscrowWaiverIndicator)
{
this.escrowWaiverIndicatorField = value;
}
public get EscrowWaiverIndicatorSpecified(): boolean
{
return this.escrowWaiverIndicatorFieldSpecified;
}
public set EscrowWaiverIndicatorSpecified(value: boolean)
{
this.escrowWaiverIndicatorFieldSpecified = value;
}
public get FNMProductPlanIdentifier(): string
{
return this.fNMProductPlanIdentifierField;
}
public set FNMProductPlanIdentifier(value: string)
{
this.fNMProductPlanIdentifierField = value;
}
public get FREOfferingIdentifier(): string
{
return this.fREOfferingIdentifierField;
}
public set FREOfferingIdentifier(value: string)
{
this.fREOfferingIdentifierField = value;
}
public get GSEProjectClassificationType(): LOAN_FEATURESGSEProjectClassificationType
{
return this.gSEProjectClassificationTypeField;
}
public set GSEProjectClassificationType(value: LOAN_FEATURESGSEProjectClassificationType)
{
this.gSEProjectClassificationTypeField = value;
}
public get GSEProjectClassificationTypeSpecified(): boolean
{
return this.gSEProjectClassificationTypeFieldSpecified;
}
public set GSEProjectClassificationTypeSpecified(value: boolean)
{
this.gSEProjectClassificationTypeFieldSpecified = value;
}
public get GSEPropertyType(): LOAN_FEATURESGSEPropertyType
{
return this.gSEPropertyTypeField;
}
public set GSEPropertyType(value: LOAN_FEATURESGSEPropertyType)
{
this.gSEPropertyTypeField = value;
}
public get GSEPropertyTypeSpecified(): boolean
{
return this.gSEPropertyTypeFieldSpecified;
}
public set GSEPropertyTypeSpecified(value: boolean)
{
this.gSEPropertyTypeFieldSpecified = value;
}
public get HELOCMaximumBalanceAmount(): string
{
return this.hELOCMaximumBalanceAmountField;
}
public set HELOCMaximumBalanceAmount(value: string)
{
this.hELOCMaximumBalanceAmountField = value;
}
public get HELOCInitialAdvanceAmount(): string
{
return this.hELOCInitialAdvanceAmountField;
}
public set HELOCInitialAdvanceAmount(value: string)
{
this.hELOCInitialAdvanceAmountField = value;
}
public get InterestOnlyTerm(): string
{
return this.interestOnlyTermField;
}
public set InterestOnlyTerm(value: string)
{
this.interestOnlyTermField = value;
}
public get LenderSelfInsuredIndicator(): LOAN_FEATURESLenderSelfInsuredIndicator
{
return this.lenderSelfInsuredIndicatorField;
}
public set LenderSelfInsuredIndicator(value: LOAN_FEATURESLenderSelfInsuredIndicator)
{
this.lenderSelfInsuredIndicatorField = value;
}
public get LenderSelfInsuredIndicatorSpecified(): boolean
{
return this.lenderSelfInsuredIndicatorFieldSpecified;
}
public set LenderSelfInsuredIndicatorSpecified(value: boolean)
{
this.lenderSelfInsuredIndicatorFieldSpecified = value;
}
public get LienPriorityType(): LOAN_FEATURESLienPriorityType
{
return this.lienPriorityTypeField;
}
public set LienPriorityType(value: LOAN_FEATURESLienPriorityType)
{
this.lienPriorityTypeField = value;
}
public get LienPriorityTypeSpecified(): boolean
{
return this.lienPriorityTypeFieldSpecified;
}
public set LienPriorityTypeSpecified(value: boolean)
{
this.lienPriorityTypeFieldSpecified = value;
}
public get LoanClosingStatusType(): LOAN_FEATURESLoanClosingStatusType
{
return this.loanClosingStatusTypeField;
}
public set LoanClosingStatusType(value: LOAN_FEATURESLoanClosingStatusType)
{
this.loanClosingStatusTypeField = value;
}
public get LoanClosingStatusTypeSpecified(): boolean
{
return this.loanClosingStatusTypeFieldSpecified;
}
public set LoanClosingStatusTypeSpecified(value: boolean)
{
this.loanClosingStatusTypeFieldSpecified = value;
}
public get LoanDocumentationType(): LOAN_FEATURESLoanDocumentationType
{
return this.loanDocumentationTypeField;
}
public set LoanDocumentationType(value: LOAN_FEATURESLoanDocumentationType)
{
this.loanDocumentationTypeField = value;
}
public get LoanDocumentationTypeSpecified(): boolean
{
return this.loanDocumentationTypeFieldSpecified;
}
public set LoanDocumentationTypeSpecified(value: boolean)
{
this.loanDocumentationTypeFieldSpecified = value;
}
public get LoanRepaymentType(): LOAN_FEATURESLoanRepaymentType
{
return this.loanRepaymentTypeField;
}
public set LoanRepaymentType(value: LOAN_FEATURESLoanRepaymentType)
{
this.loanRepaymentTypeField = value;
}
public get LoanRepaymentTypeSpecified(): boolean
{
return this.loanRepaymentTypeFieldSpecified;
}
public set LoanRepaymentTypeSpecified(value: boolean)
{
this.loanRepaymentTypeFieldSpecified = value;
}
public get LoanScheduledClosingDate(): string
{
return this.loanScheduledClosingDateField;
}
public set LoanScheduledClosingDate(value: string)
{
this.loanScheduledClosingDateField = value;
}
public get MICertificationStatusType(): LOAN_FEATURESMICertificationStatusType
{
return this.mICertificationStatusTypeField;
}
public set MICertificationStatusType(value: LOAN_FEATURESMICertificationStatusType)
{
this.mICertificationStatusTypeField = value;
}
public get MICertificationStatusTypeSpecified(): boolean
{
return this.mICertificationStatusTypeFieldSpecified;
}
public set MICertificationStatusTypeSpecified(value: boolean)
{
this.mICertificationStatusTypeFieldSpecified = value;
}
public get MICompanyNameType(): LOAN_FEATURESMICompanyNameType
{
return this.mICompanyNameTypeField;
}
public set MICompanyNameType(value: LOAN_FEATURESMICompanyNameType)
{
this.mICompanyNameTypeField = value;
}
public get MICompanyNameTypeSpecified(): boolean
{
return this.mICompanyNameTypeFieldSpecified;
}
public set MICompanyNameTypeSpecified(value: boolean)
{
this.mICompanyNameTypeFieldSpecified = value;
}
public get MICoveragePercent(): string
{
return this.mICoveragePercentField;
}
public set MICoveragePercent(value: string)
{
this.mICoveragePercentField = value;
}
public get NameDocumentsDrawnInType(): LOAN_FEATURESNameDocumentsDrawnInType
{
return this.nameDocumentsDrawnInTypeField;
}
public set NameDocumentsDrawnInType(value: LOAN_FEATURESNameDocumentsDrawnInType)
{
this.nameDocumentsDrawnInTypeField = value;
}
public get NameDocumentsDrawnInTypeSpecified(): boolean
{
return this.nameDocumentsDrawnInTypeFieldSpecified;
}
public set NameDocumentsDrawnInTypeSpecified(value: boolean)
{
this.nameDocumentsDrawnInTypeFieldSpecified = value;
}
public get NegativeAmortizationLimitPercent(): string
{
return this.negativeAmortizationLimitPercentField;
}
public set NegativeAmortizationLimitPercent(value: string)
{
this.negativeAmortizationLimitPercentField = value;
}
public get PaymentFrequencyType(): LOAN_FEATURESPaymentFrequencyType
{
return this.paymentFrequencyTypeField;
}
public set PaymentFrequencyType(value: LOAN_FEATURESPaymentFrequencyType)
{
this.paymentFrequencyTypeField = value;
}
public get PaymentFrequencyTypeSpecified(): boolean
{
return this.paymentFrequencyTypeFieldSpecified;
}
public set PaymentFrequencyTypeSpecified(value: boolean)
{
this.paymentFrequencyTypeFieldSpecified = value;
}
public get PrepaymentPenaltyIndicator(): LOAN_FEATURESPrepaymentPenaltyIndicator
{
return this.prepaymentPenaltyIndicatorField;
}
public set PrepaymentPenaltyIndicator(value: LOAN_FEATURESPrepaymentPenaltyIndicator)
{
this.prepaymentPenaltyIndicatorField = value;
}
public get PrepaymentPenaltyIndicatorSpecified(): boolean
{
return this.prepaymentPenaltyIndicatorFieldSpecified;
}
public set PrepaymentPenaltyIndicatorSpecified(value: boolean)
{
this.prepaymentPenaltyIndicatorFieldSpecified = value;
}
public get FullPrepaymentPenaltyOptionType(): LOAN_FEATURESFullPrepaymentPenaltyOptionType
{
return this.fullPrepaymentPenaltyOptionTypeField;
}
public set FullPrepaymentPenaltyOptionType(value: LOAN_FEATURESFullPrepaymentPenaltyOptionType)
{
this.fullPrepaymentPenaltyOptionTypeField = value;
}
public get FullPrepaymentPenaltyOptionTypeSpecified(): boolean
{
return this.fullPrepaymentPenaltyOptionTypeFieldSpecified;
}
public set FullPrepaymentPenaltyOptionTypeSpecified(value: boolean)
{
this.fullPrepaymentPenaltyOptionTypeFieldSpecified = value;
}
public get PrepaymentPenaltyTermMonths(): string
{
return this.prepaymentPenaltyTermMonthsField;
}
public set PrepaymentPenaltyTermMonths(value: string)
{
this.prepaymentPenaltyTermMonthsField = value;
}
public get PrepaymentRestrictionIndicator(): LOAN_FEATURESPrepaymentRestrictionIndicator
{
return this.prepaymentRestrictionIndicatorField;
}
public set PrepaymentRestrictionIndicator(value: LOAN_FEATURESPrepaymentRestrictionIndicator)
{
this.prepaymentRestrictionIndicatorField = value;
}
public get PrepaymentRestrictionIndicatorSpecified(): boolean
{
return this.prepaymentRestrictionIndicatorFieldSpecified;
}
public set PrepaymentRestrictionIndicatorSpecified(value: boolean)
{
this.prepaymentRestrictionIndicatorFieldSpecified = value;
}
public get ProductDescription(): string
{
return this.productDescriptionField;
}
public set ProductDescription(value: string)
{
this.productDescriptionField = value;
}
public get ProductName(): string
{
return this.productNameField;
}
public set ProductName(value: string)
{
this.productNameField = value;
}
public get ScheduledFirstPaymentDate(): string
{
return this.scheduledFirstPaymentDateField;
}
public set ScheduledFirstPaymentDate(value: string)
{
this.scheduledFirstPaymentDateField = value;
}
public get ServicingTransferStatusType(): LOAN_FEATURESServicingTransferStatusType
{
return this.servicingTransferStatusTypeField;
}
public set ServicingTransferStatusType(value: LOAN_FEATURESServicingTransferStatusType)
{
this.servicingTransferStatusTypeField = value;
}
public get ServicingTransferStatusTypeSpecified(): boolean
{
return this.servicingTransferStatusTypeFieldSpecified;
}
public set ServicingTransferStatusTypeSpecified(value: boolean)
{
this.servicingTransferStatusTypeFieldSpecified = value;
}
public get ConformingIndicator(): LOAN_FEATURESConformingIndicator
{
return this.conformingIndicatorField;
}
public set ConformingIndicator(value: LOAN_FEATURESConformingIndicator)
{
this.conformingIndicatorField = value;
}
public get ConformingIndicatorSpecified(): boolean
{
return this.conformingIndicatorFieldSpecified;
}
public set ConformingIndicatorSpecified(value: boolean)
{
this.conformingIndicatorFieldSpecified = value;
}
public get RequiredDepositIndicator(): LOAN_FEATURESRequiredDepositIndicator
{
return this.requiredDepositIndicatorField;
}
public set RequiredDepositIndicator(value: LOAN_FEATURESRequiredDepositIndicator)
{
this.requiredDepositIndicatorField = value;
}
public get RequiredDepositIndicatorSpecified(): boolean
{
return this.requiredDepositIndicatorFieldSpecified;
}
public set RequiredDepositIndicatorSpecified(value: boolean)
{
this.requiredDepositIndicatorFieldSpecified = value;
}
public get DemandFeatureIndicator(): LOAN_FEATURESDemandFeatureIndicator
{
return this.demandFeatureIndicatorField;
}
public set DemandFeatureIndicator(value: LOAN_FEATURESDemandFeatureIndicator)
{
this.demandFeatureIndicatorField = value;
}
public get DemandFeatureIndicatorSpecified(): boolean
{
return this.demandFeatureIndicatorFieldSpecified;
}
public set DemandFeatureIndicatorSpecified(value: boolean)
{
this.demandFeatureIndicatorFieldSpecified = value;
}
public get EstimatedPrepaidDays(): string
{
return this.estimatedPrepaidDaysField;
}
public set EstimatedPrepaidDays(value: string)
{
this.estimatedPrepaidDaysField = value;
}
public get EstimatedPrepaidDaysPaidByType(): LOAN_FEATURESEstimatedPrepaidDaysPaidByType
{
return this.estimatedPrepaidDaysPaidByTypeField;
}
public set EstimatedPrepaidDaysPaidByType(value: LOAN_FEATURESEstimatedPrepaidDaysPaidByType)
{
this.estimatedPrepaidDaysPaidByTypeField = value;
}
public get EstimatedPrepaidDaysPaidByTypeSpecified(): boolean
{
return this.estimatedPrepaidDaysPaidByTypeFieldSpecified;
}
public set EstimatedPrepaidDaysPaidByTypeSpecified(value: boolean)
{
this.estimatedPrepaidDaysPaidByTypeFieldSpecified = value;
}
public get EstimatedPrepaidDaysPaidByOtherTypeDescription(): string
{
return this.estimatedPrepaidDaysPaidByOtherTypeDescriptionField;
}
public set EstimatedPrepaidDaysPaidByOtherTypeDescription(value: string)
{
this.estimatedPrepaidDaysPaidByOtherTypeDescriptionField = value;
}
public get PrepaymentFinanceChargeRefundableIndicator(): LOAN_FEATURESPrepaymentFinanceChargeRefundableIndicator
{
return this.prepaymentFinanceChargeRefundableIndicatorField;
}
public set PrepaymentFinanceChargeRefundableIndicator(value: LOAN_FEATURESPrepaymentFinanceChargeRefundableIndicator)
{
this.prepaymentFinanceChargeRefundableIndicatorField = value;
}
public get PrepaymentFinanceChargeRefundableIndicatorSpecified(): boolean
{
return this.prepaymentFinanceChargeRefundableIndicatorFieldSpecified;
}
public set PrepaymentFinanceChargeRefundableIndicatorSpecified(value: boolean)
{
this.prepaymentFinanceChargeRefundableIndicatorFieldSpecified = value;
}
public get GraduatedPaymentMultiplierFactor(): string
{
return this.graduatedPaymentMultiplierFactorField;
}
public set GraduatedPaymentMultiplierFactor(value: string)
{
this.graduatedPaymentMultiplierFactorField = value;
}
public get LoanMaturityDate(): string
{
return this.loanMaturityDateField;
}
public set LoanMaturityDate(value: string)
{
this.loanMaturityDateField = value;
}
public get LoanOriginalMaturityTermMonths(): string
{
return this.loanOriginalMaturityTermMonthsField;
}
public set LoanOriginalMaturityTermMonths(value: string)
{
this.loanOriginalMaturityTermMonthsField = value;
}
public get PaymentFrequencyTypeOtherDescription(): string
{
return this.paymentFrequencyTypeOtherDescriptionField;
}
public set PaymentFrequencyTypeOtherDescription(value: string)
{
this.paymentFrequencyTypeOtherDescriptionField = value;
}
public get OriginalPrincipalAndInterestPaymentAmount(): string
{
return this.originalPrincipalAndInterestPaymentAmountField;
}
public set OriginalPrincipalAndInterestPaymentAmount(value: string)
{
this.originalPrincipalAndInterestPaymentAmountField = value;
}
public get TimelyPaymentRateReductionIndicator(): LOAN_FEATURESTimelyPaymentRateReductionIndicator
{
return this.timelyPaymentRateReductionIndicatorField;
}
public set TimelyPaymentRateReductionIndicator(value: LOAN_FEATURESTimelyPaymentRateReductionIndicator)
{
this.timelyPaymentRateReductionIndicatorField = value;
}
public get TimelyPaymentRateReductionIndicatorSpecified(): boolean
{
return this.timelyPaymentRateReductionIndicatorFieldSpecified;
}
public set TimelyPaymentRateReductionIndicatorSpecified(value: boolean)
{
this.timelyPaymentRateReductionIndicatorFieldSpecified = value;
}
public get TimelyPaymentRateReductionPercent(): string
{
return this.timelyPaymentRateReductionPercentField;
}
public set TimelyPaymentRateReductionPercent(value: string)
{
this.timelyPaymentRateReductionPercentField = value;
}
public get CounselingConfirmationType(): LOAN_FEATURESCounselingConfirmationType
{
return this.counselingConfirmationTypeField;
}
public set CounselingConfirmationType(value: LOAN_FEATURESCounselingConfirmationType)
{
this.counselingConfirmationTypeField = value;
}
public get CounselingConfirmationTypeSpecified(): boolean
{
return this.counselingConfirmationTypeFieldSpecified;
}
public set CounselingConfirmationTypeSpecified(value: boolean)
{
this.counselingConfirmationTypeFieldSpecified = value;
}
public get InitialPaymentRatePercent(): string
{
return this.initialPaymentRatePercentField;
}
public set InitialPaymentRatePercent(value: string)
{
this.initialPaymentRatePercentField = value;
}
public get RefundableApplicationFeeIndicator(): LOAN_FEATURESRefundableApplicationFeeIndicator
{
return this.refundableApplicationFeeIndicatorField;
}
public set RefundableApplicationFeeIndicator(value: LOAN_FEATURESRefundableApplicationFeeIndicator)
{
this.refundableApplicationFeeIndicatorField = value;
}
public get RefundableApplicationFeeIndicatorSpecified(): boolean
{
return this.refundableApplicationFeeIndicatorFieldSpecified;
}
public set RefundableApplicationFeeIndicatorSpecified(value: boolean)
{
this.refundableApplicationFeeIndicatorFieldSpecified = value;
}
public get OriginalBalloonTermMonths(): string
{
return this.originalBalloonTermMonthsField;
}
public set OriginalBalloonTermMonths(value: string)
{
this.originalBalloonTermMonthsField = value;
}
public get GrowingEquityLoanPayoffYearsCount(): string
{
return this.growingEquityLoanPayoffYearsCountField;
}
public set GrowingEquityLoanPayoffYearsCount(value: string)
{
this.growingEquityLoanPayoffYearsCountField = value;
}
public get ConditionsToAssumabilityIndicator(): LOAN_FEATURESConditionsToAssumabilityIndicator
{
return this.conditionsToAssumabilityIndicatorField;
}
public set ConditionsToAssumabilityIndicator(value: LOAN_FEATURESConditionsToAssumabilityIndicator)
{
this.conditionsToAssumabilityIndicatorField = value;
}
public get ConditionsToAssumabilityIndicatorSpecified(): boolean
{
return this.conditionsToAssumabilityIndicatorFieldSpecified;
}
public set ConditionsToAssumabilityIndicatorSpecified(value: boolean)
{
this.conditionsToAssumabilityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get FNMProductPlanIndentifier(): string
{
return this.fNMProductPlanIndentifierField;
}
public set FNMProductPlanIndentifier(value: string)
{
this.fNMProductPlanIndentifierField = value;
}
public get NegativeAmortizationLimitMonthsCount(): string
{
return this.negativeAmortizationLimitMonthsCountField;
}
public set NegativeAmortizationLimitMonthsCount(value: string)
{
this.negativeAmortizationLimitMonthsCountField = value;
}
public get LoanRepaymentTypeOtherDescription(): string
{
return this.loanRepaymentTypeOtherDescriptionField;
}
public set LoanRepaymentTypeOtherDescription(value: string)
{
this.loanRepaymentTypeOtherDescriptionField = value;
}
public get LienPriorityTypeOtherDescription(): string
{
return this.lienPriorityTypeOtherDescriptionField;
}
public set LienPriorityTypeOtherDescription(value: string)
{
this.lienPriorityTypeOtherDescriptionField = value;
}
public get NegativeAmortizationType(): LOAN_FEATURESNegativeAmortizationType
{
return this.negativeAmortizationTypeField;
}
public set NegativeAmortizationType(value: LOAN_FEATURESNegativeAmortizationType)
{
this.negativeAmortizationTypeField = value;
}
public get NegativeAmortizationTypeSpecified(): boolean
{
return this.negativeAmortizationTypeFieldSpecified;
}
public set NegativeAmortizationTypeSpecified(value: boolean)
{
this.negativeAmortizationTypeFieldSpecified = value;
}
public get LoanDocumentationTypeOtherDescription(): string
{
return this.loanDocumentationTypeOtherDescriptionField;
}
public set LoanDocumentationTypeOtherDescription(value: string)
{
this.loanDocumentationTypeOtherDescriptionField = value;
}
public get DownPaymentOptionTypeOtherDescription(): string
{
return this.downPaymentOptionTypeOtherDescriptionField;
}
public set DownPaymentOptionTypeOtherDescription(value: string)
{
this.downPaymentOptionTypeOtherDescriptionField = value;
}
public get MICertificationStatusTypeOtherDescription(): string
{
return this.mICertificationStatusTypeOtherDescriptionField;
}
public set MICertificationStatusTypeOtherDescription(value: string)
{
this.mICertificationStatusTypeOtherDescriptionField = value;
}
public get NameDocumentsDrawnInTypeOtherDescription(): string
{
return this.nameDocumentsDrawnInTypeOtherDescriptionField;
}
public set NameDocumentsDrawnInTypeOtherDescription(value: string)
{
this.nameDocumentsDrawnInTypeOtherDescriptionField = value;
}
public get MICompanyNameTypeOtherDescription(): string
{
return this.mICompanyNameTypeOtherDescriptionField;
}
public set MICompanyNameTypeOtherDescription(value: string)
{
this.mICompanyNameTypeOtherDescriptionField = value;
}
public get FNMProjectClassificationType(): LOAN_FEATURESFNMProjectClassificationType
{
return this.fNMProjectClassificationTypeField;
}
public set FNMProjectClassificationType(value: LOAN_FEATURESFNMProjectClassificationType)
{
this.fNMProjectClassificationTypeField = value;
}
public get FNMProjectClassificationTypeSpecified(): boolean
{
return this.fNMProjectClassificationTypeFieldSpecified;
}
public set FNMProjectClassificationTypeSpecified(value: boolean)
{
this.fNMProjectClassificationTypeFieldSpecified = value;
}
public get FNMProjectClassificationTypeOtherDescription(): string
{
return this.fNMProjectClassificationTypeOtherDescriptionField;
}
public set FNMProjectClassificationTypeOtherDescription(value: string)
{
this.fNMProjectClassificationTypeOtherDescriptionField = value;
}
public get FREProjectClassificationType(): LOAN_FEATURESFREProjectClassificationType
{
return this.fREProjectClassificationTypeField;
}
public set FREProjectClassificationType(value: LOAN_FEATURESFREProjectClassificationType)
{
this.fREProjectClassificationTypeField = value;
}
public get FREProjectClassificationTypeSpecified(): boolean
{
return this.fREProjectClassificationTypeFieldSpecified;
}
public set FREProjectClassificationTypeSpecified(value: boolean)
{
this.fREProjectClassificationTypeFieldSpecified = value;
}
public get FREProjectClassificationTypeOtherDescription(): string
{
return this.fREProjectClassificationTypeOtherDescriptionField;
}
public set FREProjectClassificationTypeOtherDescription(value: string)
{
this.fREProjectClassificationTypeOtherDescriptionField = value;
}
public get ProductIdentifier(): string
{
return this.productIdentifierField;
}
public set ProductIdentifier(value: string)
{
this.productIdentifierField = value;
}
public get InitialPaymentDiscountPercent(): string
{
return this.initialPaymentDiscountPercentField;
}
public set InitialPaymentDiscountPercent(value: string)
{
this.initialPaymentDiscountPercentField = value;
}
public get BiweeklyComparableMonthlyMaturityDate(): string
{
return this.biweeklyComparableMonthlyMaturityDateField;
}
public set BiweeklyComparableMonthlyMaturityDate(value: string)
{
this.biweeklyComparableMonthlyMaturityDateField = value;
}
public get BiweeklyToMonthlyOnDefaultIndicator(): LOAN_FEATURESBiweeklyToMonthlyOnDefaultIndicator
{
return this.biweeklyToMonthlyOnDefaultIndicatorField;
}
public set BiweeklyToMonthlyOnDefaultIndicator(value: LOAN_FEATURESBiweeklyToMonthlyOnDefaultIndicator)
{
this.biweeklyToMonthlyOnDefaultIndicatorField = value;
}
public get BiweeklyToMonthlyOnDefaultIndicatorSpecified(): boolean
{
return this.biweeklyToMonthlyOnDefaultIndicatorFieldSpecified;
}
public set BiweeklyToMonthlyOnDefaultIndicatorSpecified(value: boolean)
{
this.biweeklyToMonthlyOnDefaultIndicatorFieldSpecified = value;
}
public get QualifyingRateType(): LOAN_FEATURESQualifyingRateType
{
return this.qualifyingRateTypeField;
}
public set QualifyingRateType(value: LOAN_FEATURESQualifyingRateType)
{
this.qualifyingRateTypeField = value;
}
public get QualifyingRateTypeSpecified(): boolean
{
return this.qualifyingRateTypeFieldSpecified;
}
public set QualifyingRateTypeSpecified(value: boolean)
{
this.qualifyingRateTypeFieldSpecified = value;
}
public get QualifyingRateTypeOtherDescription(): string
{
return this.qualifyingRateTypeOtherDescriptionField;
}
public set QualifyingRateTypeOtherDescription(value: string)
{
this.qualifyingRateTypeOtherDescriptionField = value;
}
public get NegativeAmortizationMaximumLoanBalanceAmount(): string
{
return this.negativeAmortizationMaximumLoanBalanceAmountField;
}
public set NegativeAmortizationMaximumLoanBalanceAmount(value: string)
{
this.negativeAmortizationMaximumLoanBalanceAmountField = value;
}
public get NegativeAmortizationMaximumPITIAmount(): string
{
return this.negativeAmortizationMaximumPITIAmountField;
}
public set NegativeAmortizationMaximumPITIAmount(value: string)
{
this.negativeAmortizationMaximumPITIAmountField = value;
}
public get QualifyingPaymentAmount(): string
{
return this.qualifyingPaymentAmountField;
}
public set QualifyingPaymentAmount(value: string)
{
this.qualifyingPaymentAmountField = value;
}
public get QualifyingRatePercent(): string
{
return this.qualifyingRatePercentField;
}
public set QualifyingRatePercent(value: string)
{
this.qualifyingRatePercentField = value;
}
public get InterestOnlyIndicator(): LOAN_FEATURESInterestOnlyIndicator
{
return this.interestOnlyIndicatorField;
}
public set InterestOnlyIndicator(value: LOAN_FEATURESInterestOnlyIndicator)
{
this.interestOnlyIndicatorField = value;
}
public get InterestOnlyIndicatorSpecified(): boolean
{
return this.interestOnlyIndicatorFieldSpecified;
}
public set InterestOnlyIndicatorSpecified(value: boolean)
{
this.interestOnlyIndicatorFieldSpecified = value;
}
public get BalloonPaymentAmount(): string
{
return this.balloonPaymentAmountField;
}
public set BalloonPaymentAmount(value: string)
{
this.balloonPaymentAmountField = value;
}
public get RESPAConformingYearType(): LOAN_FEATURESRESPAConformingYearType
{
return this.rESPAConformingYearTypeField;
}
public set RESPAConformingYearType(value: LOAN_FEATURESRESPAConformingYearType)
{
this.rESPAConformingYearTypeField = value;
}
public get RESPAConformingYearTypeSpecified(): boolean
{
return this.rESPAConformingYearTypeFieldSpecified;
}
public set RESPAConformingYearTypeSpecified(value: boolean)
{
this.rESPAConformingYearTypeFieldSpecified = value;
}
public get RESPAConformingYearTypeOtherDescription(): string
{
return this.rESPAConformingYearTypeOtherDescriptionField;
}
public set RESPAConformingYearTypeOtherDescription(value: string)
{
this.rESPAConformingYearTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LATE_CHARGE 
{
private _AmountField:string ;
private _GracePeriodField:string ;
private _LoanPaymentAmountField:string ;
private _MaximumAmountField:string ;
private _MinimumAmountField:string ;
private _RateField:string ;
private _TypeField:LATE_CHARGE_Type ;
private _TypeFieldSpecified:boolean ;
private _IDField:string ;
private _TypeOtherDescriptionField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _GracePeriod(): string
{
return this._GracePeriodField;
}
public set _GracePeriod(value: string)
{
this._GracePeriodField = value;
}
public get _LoanPaymentAmount(): string
{
return this._LoanPaymentAmountField;
}
public set _LoanPaymentAmount(value: string)
{
this._LoanPaymentAmountField = value;
}
public get _MaximumAmount(): string
{
return this._MaximumAmountField;
}
public set _MaximumAmount(value: string)
{
this._MaximumAmountField = value;
}
public get _MinimumAmount(): string
{
return this._MinimumAmountField;
}
public set _MinimumAmount(value: string)
{
this._MinimumAmountField = value;
}
public get _Rate(): string
{
return this._RateField;
}
public set _Rate(value: string)
{
this._RateField = value;
}
public get _Type(): LATE_CHARGE_Type
{
return this._TypeField;
}
public set _Type(value: LATE_CHARGE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
} 
}
export enum LATE_CHARGE_Type {
 PercentageOfPrinicipalBalance,

PercentageOfDelinquentInterest,

NoLateCharges,

Other,

PercentageOfNetPayment,

PercentOfPrincipalAndInterest,

PercentageOfTotalPayment,

PercentageOfPrincipalBalance,

FlatDollarAmount
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class NOTE_PAY_TO 
{
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _IDField:string ;
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum LOAN_FEATURESAssumabilityIndicator {
 N,

Y
 }
export enum LOAN_FEATURESBalloonIndicator {
 N,

Y
 }
export enum LOAN_FEATURESBuydownTemporarySubsidyIndicator {
 N,

Y
 }
export enum LOAN_FEATURESCounselingConfirmationIndicator {
 N,

Y
 }
export enum LOAN_FEATURESDownPaymentOptionType {
 Other,

FivePercentOption,

ThreeTwoOption,

FNM97Option
 }
export enum LOAN_FEATURESEscrowWaiverIndicator {
 N,

Y
 }
export enum LOAN_FEATURESGSEProjectClassificationType {
 III_PUD,

F_PUD,

A_IIICondominium,

ApprovedFHA_VACondominiumProjectOrSpotLoan,

E_PUD,

TwoCooperative,

OneCooperative,

B_IICondominium,

C_ICondominium
 }
export enum LOAN_FEATURESGSEPropertyType {
 ManufacturedHousing,

ManufacturedHousingSingleWide,

Modular,

Condominium,

Cooperative,

Attached,

ManufacturedHousingDoubleWide,

ManufacturedHousingMultiWide,

PUD,

Detached,

ManufacturedHomeCondominium,

DetachedCondominium,

ManufacturedHomeCondominiumOrPUDOrCooperative,

HighRiseCondominium
 }
export enum LOAN_FEATURESLenderSelfInsuredIndicator {
 N,

Y
 }
export enum LOAN_FEATURESLienPriorityType {
 Other,

SecondLien,

FourthLien,

FirstLien,

ThirdLien
 }
export enum LOAN_FEATURESLoanClosingStatusType {
 TableFunded,

Closed
 }
export enum LOAN_FEATURESLoanDocumentationType {
 VerbalVerificationOfEmployment,

NoVerificationOfStatedAssets,

NoEmploymentVerificationOrIncomeVerification,

NoDocumentation,

OnePaystub,

NoVerificationOfStatedIncomeOrAssests,

NoIncomeOn1003,

Other,

NoVerificationOfStatedIncome,

FullDocumentation,

NoRatio,

StreamlineRefinance,

NoVerificationOfStatedIncomeOrEmployment,

NoDepositVerificationEmploymentVerificationOrIncomeVerification,

NoDepositVerification,

NoVerificationOfStatedIncomeOrAssets,

Alternative,

NoIncomeNoEmploymentNoAssetsOn1003,

OnePaystubAndOneW2AndVerbalVerificationOfEmploymentOrOneYear1040,

Reduced,

OnePaystubAndVerbalVerificationOfEmployment,

NoVerificationOfStatedIncomeEmploymentOrAssets
 }
export enum LOAN_FEATURESLoanRepaymentType {
 ScheduledNegativeAmortization,

PotentialNegativeAmortization,

Other,

ScheduledAmortization,

ConstantPrincipal,

NoNegativeAmortization,

PrincipalPaymentOption,

InterestOnly
 }
export enum LOAN_FEATURESMICertificationStatusType {
 SellerOfLoanToObtain,

LenderToObtain,

Other
 }
export enum LOAN_FEATURESMICompanyNameType {
 GECapitalMICorporation,

TriadGuarantyInsuranceCorporation,

CMG_MICompany,

GenworthMortgageInsuranceCorporation,

CommonwealthMortgageAssuranceCompany,

Other,

MortgageGuarantyInsuranceCorporation,

RadianGuarantyIncorporated,

RepublicMICompany,

PMI_MICorporation,

UnitedGuarantyCorporation,

AmerinGuaranteeCorporation
 }
export enum LOAN_FEATURESNameDocumentsDrawnInType {
 Investor,

Other,

Broker,

Lender
 }
export enum LOAN_FEATURESPaymentFrequencyType {
 Monthly,

Biweekly,

Weekly,

Semimonthly,

Other,

AtMaturity,

Semiannual,

Quarterly,

Annual
 }
export enum LOAN_FEATURESPrepaymentPenaltyIndicator {
 N,

Y
 }
export enum LOAN_FEATURESFullPrepaymentPenaltyOptionType {
 Hard,

Soft
 }
export enum LOAN_FEATURESPrepaymentRestrictionIndicator {
 N,

Y
 }
export enum LOAN_FEATURESServicingTransferStatusType {
 Released,

Retained
 }
export enum LOAN_FEATURESConformingIndicator {
 N,

Y
 }
export enum LOAN_FEATURESRequiredDepositIndicator {
 N,

Y
 }
export enum LOAN_FEATURESDemandFeatureIndicator {
 N,

Y
 }
export enum LOAN_FEATURESEstimatedPrepaidDaysPaidByType {
 Seller,

Other,

Buyer,

Lender
 }
export enum LOAN_FEATURESPrepaymentFinanceChargeRefundableIndicator {
 N,

Y
 }
export enum LOAN_FEATURESTimelyPaymentRateReductionIndicator {
 N,

Y
 }
export enum LOAN_FEATURESCounselingConfirmationType {
 Unknown,

Other,

AmericanHomeownerEducationInstituteApprovedCounseling,

GovernmentAgency,

ThirdPartyCounseling,

LenderTrainedCounseling,

NoBorrowerCounseling
 }
export enum LOAN_FEATURESRefundableApplicationFeeIndicator {
 N,

Y
 }
export enum LOAN_FEATURESConditionsToAssumabilityIndicator {
 N,

Y
 }
export enum LOAN_FEATURESNegativeAmortizationType {
 ScheduledNegativeAmortization,

PotentialNegativeAmortization,

NoNegativeAmortization
 }
export enum LOAN_FEATURESFNMProjectClassificationType {
 SCondominium,

RCondominium,

F_PUD,

QCondominium,

PCondominium,

UCondominium,

Other,

TCondominium,

E_PUD,

TwoCooperative,

OneCooperative
 }
export enum LOAN_FEATURESFREProjectClassificationType {
 ICondominium,

IIICondominium,

Other,

IICondominium
 }
export enum LOAN_FEATURESBiweeklyToMonthlyOnDefaultIndicator {
 N,

Y
 }
export enum LOAN_FEATURESQualifyingRateType {
 BoughtDownRate,

AtNoteRate,

Other,

BelowNoteRate,

AboveNoteRate
 }
export enum LOAN_FEATURESInterestOnlyIndicator {
 N,

Y
 }
export enum LOAN_FEATURESRESPAConformingYearType {
 Pre2010,

Other,

January2010
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PAYMENT_ADJUSTMENT 
{
private firstPaymentAdjustmentMonthsField:string ;
private _AmountField:string ;
private _CalculationTypeField:PAYMENT_ADJUSTMENT_CalculationType ;
private _CalculationTypeFieldSpecified:boolean ;
private _DurationMonthsField:string ;
private _PercentField:string ;
private _PeriodNumberField:string ;
private _PeriodicCapAmountField:string ;
private _PeriodicCapPercentField:string ;
private subsequentPaymentAdjustmentMonthsField:string ;
private firstPaymentAdjustmentDateField:string ;
private lastPaymentAdjustmentDateField:string ;
private _IDField:string ;
private _CalculationTypeOtherDescriptionField:string ;
public get FirstPaymentAdjustmentMonths(): string
{
return this.firstPaymentAdjustmentMonthsField;
}
public set FirstPaymentAdjustmentMonths(value: string)
{
this.firstPaymentAdjustmentMonthsField = value;
}
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _CalculationType(): PAYMENT_ADJUSTMENT_CalculationType
{
return this._CalculationTypeField;
}
public set _CalculationType(value: PAYMENT_ADJUSTMENT_CalculationType)
{
this._CalculationTypeField = value;
}
public get _CalculationTypeSpecified(): boolean
{
return this._CalculationTypeFieldSpecified;
}
public set _CalculationTypeSpecified(value: boolean)
{
this._CalculationTypeFieldSpecified = value;
}
public get _DurationMonths(): string
{
return this._DurationMonthsField;
}
public set _DurationMonths(value: string)
{
this._DurationMonthsField = value;
}
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _PeriodNumber(): string
{
return this._PeriodNumberField;
}
public set _PeriodNumber(value: string)
{
this._PeriodNumberField = value;
}
public get _PeriodicCapAmount(): string
{
return this._PeriodicCapAmountField;
}
public set _PeriodicCapAmount(value: string)
{
this._PeriodicCapAmountField = value;
}
public get _PeriodicCapPercent(): string
{
return this._PeriodicCapPercentField;
}
public set _PeriodicCapPercent(value: string)
{
this._PeriodicCapPercentField = value;
}
public get SubsequentPaymentAdjustmentMonths(): string
{
return this.subsequentPaymentAdjustmentMonthsField;
}
public set SubsequentPaymentAdjustmentMonths(value: string)
{
this.subsequentPaymentAdjustmentMonthsField = value;
}
public get FirstPaymentAdjustmentDate(): string
{
return this.firstPaymentAdjustmentDateField;
}
public set FirstPaymentAdjustmentDate(value: string)
{
this.firstPaymentAdjustmentDateField = value;
}
public get LastPaymentAdjustmentDate(): string
{
return this.lastPaymentAdjustmentDateField;
}
public set LastPaymentAdjustmentDate(value: string)
{
this.lastPaymentAdjustmentDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _CalculationTypeOtherDescription(): string
{
return this._CalculationTypeOtherDescriptionField;
}
public set _CalculationTypeOtherDescription(value: string)
{
this._CalculationTypeOtherDescriptionField = value;
} 
}
export enum PAYMENT_ADJUSTMENT_CalculationType {
 AddPercentToEffectivePaymentRate,

Other,

AddFixedDollarAmountToTheCurrentPayment,

AddPercentToCurrentPaymentAmount
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RATE_ADJUSTMENT 
{
private firstRateAdjustmentMonthsField:string ;
private _CalculationTypeField:RATE_ADJUSTMENT_CalculationType ;
private _CalculationTypeFieldSpecified:boolean ;
private _DurationMonthsField:string ;
private _PercentField:string ;
private _PeriodNumberField:string ;
private _SubsequentCapPercentField:string ;
private subsequentRateAdjustmentMonthsField:string ;
private _FirstChangeCapRateField:string ;
private _FirstChangeFloorPercentField:string ;
private _FirstChangeFloorRateField:string ;
private firstRateAdjustmentDateField:string ;
private _InitialCapPercentField:string ;
private _IDField:string ;
private _CalculationTypeOtherDescriptionField:string ;
public get FirstRateAdjustmentMonths(): string
{
return this.firstRateAdjustmentMonthsField;
}
public set FirstRateAdjustmentMonths(value: string)
{
this.firstRateAdjustmentMonthsField = value;
}
public get _CalculationType(): RATE_ADJUSTMENT_CalculationType
{
return this._CalculationTypeField;
}
public set _CalculationType(value: RATE_ADJUSTMENT_CalculationType)
{
this._CalculationTypeField = value;
}
public get _CalculationTypeSpecified(): boolean
{
return this._CalculationTypeFieldSpecified;
}
public set _CalculationTypeSpecified(value: boolean)
{
this._CalculationTypeFieldSpecified = value;
}
public get _DurationMonths(): string
{
return this._DurationMonthsField;
}
public set _DurationMonths(value: string)
{
this._DurationMonthsField = value;
}
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _PeriodNumber(): string
{
return this._PeriodNumberField;
}
public set _PeriodNumber(value: string)
{
this._PeriodNumberField = value;
}
public get _SubsequentCapPercent(): string
{
return this._SubsequentCapPercentField;
}
public set _SubsequentCapPercent(value: string)
{
this._SubsequentCapPercentField = value;
}
public get SubsequentRateAdjustmentMonths(): string
{
return this.subsequentRateAdjustmentMonthsField;
}
public set SubsequentRateAdjustmentMonths(value: string)
{
this.subsequentRateAdjustmentMonthsField = value;
}
public get _FirstChangeCapRate(): string
{
return this._FirstChangeCapRateField;
}
public set _FirstChangeCapRate(value: string)
{
this._FirstChangeCapRateField = value;
}
public get _FirstChangeFloorPercent(): string
{
return this._FirstChangeFloorPercentField;
}
public set _FirstChangeFloorPercent(value: string)
{
this._FirstChangeFloorPercentField = value;
}
public get _FirstChangeFloorRate(): string
{
return this._FirstChangeFloorRateField;
}
public set _FirstChangeFloorRate(value: string)
{
this._FirstChangeFloorRateField = value;
}
public get FirstRateAdjustmentDate(): string
{
return this.firstRateAdjustmentDateField;
}
public set FirstRateAdjustmentDate(value: string)
{
this.firstRateAdjustmentDateField = value;
}
public get _InitialCapPercent(): string
{
return this._InitialCapPercentField;
}
public set _InitialCapPercent(value: string)
{
this._InitialCapPercentField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _CalculationTypeOtherDescription(): string
{
return this._CalculationTypeOtherDescriptionField;
}
public set _CalculationTypeOtherDescription(value: string)
{
this._CalculationTypeOtherDescriptionField = value;
} 
}
export enum RATE_ADJUSTMENT_CalculationType {
 AddPercentToOriginalRate,

Other,

IndexPlusMargin,

AddPercentToCurrentRate
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class HELOC 
{
private _AnnualFeeAmountField:string ;
private _CreditCardAccountIdentifierField:string ;
private _CreditCardIndicatorField:HELOC_CreditCardIndicator ;
private _CreditCardIndicatorFieldSpecified:boolean ;
private _DailyPeriodicInterestRateCalculationTypeField:HELOC_DailyPeriodicInterestRateCalculationType ;
private _DailyPeriodicInterestRateCalculationTypeFieldSpecified:boolean ;
private _DailyPeriodicInterestRatePercentField:string ;
private _DrawPeriodMonthsCountField:string ;
private _FirstLienBookNumberField:string ;
private _FirstLienDateField:string ;
private _FirstLienHolderNameField:string ;
private _FirstLienIndicatorField:HELOC_FirstLienIndicator ;
private _FirstLienIndicatorFieldSpecified:boolean ;
private _FirstLienInstrumentNumberField:string ;
private _FirstLienPageNumberField:string ;
private _FirstLienPrincipalBalanceAmountField:string ;
private _FirstLienRecordedDateField:string ;
private _InitialAdvanceAmountField:string ;
private _MaximumAPRRateField:string ;
private _MinimumAdvanceAmountField:string ;
private _MinimumPaymentAmountField:string ;
private _MinimumPaymentPercentField:string ;
private _RepayPeriodMonthsCountField:string ;
private _ReturnedCheckChargeAmountField:string ;
private _StopPaymentChargeAmountField:string ;
private _TeaserTermEndDateField:string ;
private _TeaserTermMonthsCountField:string ;
private _TerminationFeeAmountField:string ;
private _TerminationPeriodMonthsCountField:string ;
private _IDField:string ;
public get _AnnualFeeAmount(): string
{
return this._AnnualFeeAmountField;
}
public set _AnnualFeeAmount(value: string)
{
this._AnnualFeeAmountField = value;
}
public get _CreditCardAccountIdentifier(): string
{
return this._CreditCardAccountIdentifierField;
}
public set _CreditCardAccountIdentifier(value: string)
{
this._CreditCardAccountIdentifierField = value;
}
public get _CreditCardIndicator(): HELOC_CreditCardIndicator
{
return this._CreditCardIndicatorField;
}
public set _CreditCardIndicator(value: HELOC_CreditCardIndicator)
{
this._CreditCardIndicatorField = value;
}
public get _CreditCardIndicatorSpecified(): boolean
{
return this._CreditCardIndicatorFieldSpecified;
}
public set _CreditCardIndicatorSpecified(value: boolean)
{
this._CreditCardIndicatorFieldSpecified = value;
}
public get _DailyPeriodicInterestRateCalculationType(): HELOC_DailyPeriodicInterestRateCalculationType
{
return this._DailyPeriodicInterestRateCalculationTypeField;
}
public set _DailyPeriodicInterestRateCalculationType(value: HELOC_DailyPeriodicInterestRateCalculationType)
{
this._DailyPeriodicInterestRateCalculationTypeField = value;
}
public get _DailyPeriodicInterestRateCalculationTypeSpecified(): boolean
{
return this._DailyPeriodicInterestRateCalculationTypeFieldSpecified;
}
public set _DailyPeriodicInterestRateCalculationTypeSpecified(value: boolean)
{
this._DailyPeriodicInterestRateCalculationTypeFieldSpecified = value;
}
public get _DailyPeriodicInterestRatePercent(): string
{
return this._DailyPeriodicInterestRatePercentField;
}
public set _DailyPeriodicInterestRatePercent(value: string)
{
this._DailyPeriodicInterestRatePercentField = value;
}
public get _DrawPeriodMonthsCount(): string
{
return this._DrawPeriodMonthsCountField;
}
public set _DrawPeriodMonthsCount(value: string)
{
this._DrawPeriodMonthsCountField = value;
}
public get _FirstLienBookNumber(): string
{
return this._FirstLienBookNumberField;
}
public set _FirstLienBookNumber(value: string)
{
this._FirstLienBookNumberField = value;
}
public get _FirstLienDate(): string
{
return this._FirstLienDateField;
}
public set _FirstLienDate(value: string)
{
this._FirstLienDateField = value;
}
public get _FirstLienHolderName(): string
{
return this._FirstLienHolderNameField;
}
public set _FirstLienHolderName(value: string)
{
this._FirstLienHolderNameField = value;
}
public get _FirstLienIndicator(): HELOC_FirstLienIndicator
{
return this._FirstLienIndicatorField;
}
public set _FirstLienIndicator(value: HELOC_FirstLienIndicator)
{
this._FirstLienIndicatorField = value;
}
public get _FirstLienIndicatorSpecified(): boolean
{
return this._FirstLienIndicatorFieldSpecified;
}
public set _FirstLienIndicatorSpecified(value: boolean)
{
this._FirstLienIndicatorFieldSpecified = value;
}
public get _FirstLienInstrumentNumber(): string
{
return this._FirstLienInstrumentNumberField;
}
public set _FirstLienInstrumentNumber(value: string)
{
this._FirstLienInstrumentNumberField = value;
}
public get _FirstLienPageNumber(): string
{
return this._FirstLienPageNumberField;
}
public set _FirstLienPageNumber(value: string)
{
this._FirstLienPageNumberField = value;
}
public get _FirstLienPrincipalBalanceAmount(): string
{
return this._FirstLienPrincipalBalanceAmountField;
}
public set _FirstLienPrincipalBalanceAmount(value: string)
{
this._FirstLienPrincipalBalanceAmountField = value;
}
public get _FirstLienRecordedDate(): string
{
return this._FirstLienRecordedDateField;
}
public set _FirstLienRecordedDate(value: string)
{
this._FirstLienRecordedDateField = value;
}
public get _InitialAdvanceAmount(): string
{
return this._InitialAdvanceAmountField;
}
public set _InitialAdvanceAmount(value: string)
{
this._InitialAdvanceAmountField = value;
}
public get _MaximumAPRRate(): string
{
return this._MaximumAPRRateField;
}
public set _MaximumAPRRate(value: string)
{
this._MaximumAPRRateField = value;
}
public get _MinimumAdvanceAmount(): string
{
return this._MinimumAdvanceAmountField;
}
public set _MinimumAdvanceAmount(value: string)
{
this._MinimumAdvanceAmountField = value;
}
public get _MinimumPaymentAmount(): string
{
return this._MinimumPaymentAmountField;
}
public set _MinimumPaymentAmount(value: string)
{
this._MinimumPaymentAmountField = value;
}
public get _MinimumPaymentPercent(): string
{
return this._MinimumPaymentPercentField;
}
public set _MinimumPaymentPercent(value: string)
{
this._MinimumPaymentPercentField = value;
}
public get _RepayPeriodMonthsCount(): string
{
return this._RepayPeriodMonthsCountField;
}
public set _RepayPeriodMonthsCount(value: string)
{
this._RepayPeriodMonthsCountField = value;
}
public get _ReturnedCheckChargeAmount(): string
{
return this._ReturnedCheckChargeAmountField;
}
public set _ReturnedCheckChargeAmount(value: string)
{
this._ReturnedCheckChargeAmountField = value;
}
public get _StopPaymentChargeAmount(): string
{
return this._StopPaymentChargeAmountField;
}
public set _StopPaymentChargeAmount(value: string)
{
this._StopPaymentChargeAmountField = value;
}
public get _TeaserTermEndDate(): string
{
return this._TeaserTermEndDateField;
}
public set _TeaserTermEndDate(value: string)
{
this._TeaserTermEndDateField = value;
}
public get _TeaserTermMonthsCount(): string
{
return this._TeaserTermMonthsCountField;
}
public set _TeaserTermMonthsCount(value: string)
{
this._TeaserTermMonthsCountField = value;
}
public get _TerminationFeeAmount(): string
{
return this._TerminationFeeAmountField;
}
public set _TerminationFeeAmount(value: string)
{
this._TerminationFeeAmountField = value;
}
public get _TerminationPeriodMonthsCount(): string
{
return this._TerminationPeriodMonthsCountField;
}
public set _TerminationPeriodMonthsCount(value: string)
{
this._TerminationPeriodMonthsCountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum HELOC_CreditCardIndicator {
 N,

Y
 }
export enum HELOC_DailyPeriodicInterestRateCalculationType {
 [System.Xml.Serialization.XmlEnumAttribute("360")]
Item360,

[System.Xml.Serialization.XmlEnumAttribute("365")]
Item365
 }
export enum HELOC_FirstLienIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INTEREST_ONLY 
{
private _MonthlyPaymentAmountField:string ;
private _TermMonthsCountField:string ;
private _IDField:string ;
public get _MonthlyPaymentAmount(): string
{
return this._MonthlyPaymentAmountField;
}
public set _MonthlyPaymentAmount(value: string)
{
this._MonthlyPaymentAmountField = value;
}
public get _TermMonthsCount(): string
{
return this._TermMonthsCountField;
}
public set _TermMonthsCount(value: string)
{
this._TermMonthsCountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PREPAYMENT_PENALTY 
{
private _PercentField:string ;
private _PeriodSequenceIdentifierField:string ;
private _TermMonthsField:string ;
private _TextDescriptionField:string ;
private _PenaltyFixedAmountField:string ;
private _IDField:string ;
private gFEPrepaymentPenaltyMaximumAmountField:string ;
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _PeriodSequenceIdentifier(): string
{
return this._PeriodSequenceIdentifierField;
}
public set _PeriodSequenceIdentifier(value: string)
{
this._PeriodSequenceIdentifierField = value;
}
public get _TermMonths(): string
{
return this._TermMonthsField;
}
public set _TermMonths(value: string)
{
this._TermMonthsField = value;
}
public get _TextDescription(): string
{
return this._TextDescriptionField;
}
public set _TextDescription(value: string)
{
this._TextDescriptionField = value;
}
public get _PenaltyFixedAmount(): string
{
return this._PenaltyFixedAmountField;
}
public set _PenaltyFixedAmount(value: string)
{
this._PenaltyFixedAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get GFEPrepaymentPenaltyMaximumAmount(): string
{
return this.gFEPrepaymentPenaltyMaximumAmountField;
}
public set GFEPrepaymentPenaltyMaximumAmount(value: string)
{
this.gFEPrepaymentPenaltyMaximumAmountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INTEREST_CALCULATION_RULE 
{
private _IDField:string ;
private interestCalculationPurposeTypeField:INTEREST_CALCULATION_RULEInterestCalculationPurposeType ;
private interestCalculationPurposeTypeFieldSpecified:boolean ;
private interestCalculationPurposeTypeOtherDescriptionField:string ;
private interestCalculationBasisDaysInPeriodTypeField:INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInPeriodType ;
private interestCalculationBasisDaysInPeriodTypeFieldSpecified:boolean ;
private interestCalculationBasisDaysInPeriodTypeOtherDescriptionField:string ;
private interestCalculationBasisDaysInYearCountField:INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInYearCount ;
private interestCalculationBasisDaysInYearCountFieldSpecified:boolean ;
private interestCalculationBasisTypeField:INTEREST_CALCULATION_RULEInterestCalculationBasisType ;
private interestCalculationBasisTypeFieldSpecified:boolean ;
private interestCalculationBasisTypeOtherDescriptionField:string ;
private interestCalculationEffectiveDateField:string ;
private interestCalculationEffectiveMonthsCountField:string ;
private interestCalculationExpirationDateField:string ;
private interestCalculationPeriodAdjustmentIndicatorField:INTEREST_CALCULATION_RULEInterestCalculationPeriodAdjustmentIndicator ;
private interestCalculationPeriodAdjustmentIndicatorFieldSpecified:boolean ;
private interestCalculationPeriodTypeField:INTEREST_CALCULATION_RULEInterestCalculationPeriodType ;
private interestCalculationPeriodTypeFieldSpecified:boolean ;
private interestCalculationTypeField:INTEREST_CALCULATION_RULEInterestCalculationType ;
private interestCalculationTypeFieldSpecified:boolean ;
private interestCalculationTypeOtherDescriptionField:string ;
private interestInAdvanceIndicatorField:INTEREST_CALCULATION_RULEInterestInAdvanceIndicator ;
private interestInAdvanceIndicatorFieldSpecified:boolean ;
private loanInterestAccrualStartDateField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get InterestCalculationPurposeType(): INTEREST_CALCULATION_RULEInterestCalculationPurposeType
{
return this.interestCalculationPurposeTypeField;
}
public set InterestCalculationPurposeType(value: INTEREST_CALCULATION_RULEInterestCalculationPurposeType)
{
this.interestCalculationPurposeTypeField = value;
}
public get InterestCalculationPurposeTypeSpecified(): boolean
{
return this.interestCalculationPurposeTypeFieldSpecified;
}
public set InterestCalculationPurposeTypeSpecified(value: boolean)
{
this.interestCalculationPurposeTypeFieldSpecified = value;
}
public get InterestCalculationPurposeTypeOtherDescription(): string
{
return this.interestCalculationPurposeTypeOtherDescriptionField;
}
public set InterestCalculationPurposeTypeOtherDescription(value: string)
{
this.interestCalculationPurposeTypeOtherDescriptionField = value;
}
public get InterestCalculationBasisDaysInPeriodType(): INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInPeriodType
{
return this.interestCalculationBasisDaysInPeriodTypeField;
}
public set InterestCalculationBasisDaysInPeriodType(value: INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInPeriodType)
{
this.interestCalculationBasisDaysInPeriodTypeField = value;
}
public get InterestCalculationBasisDaysInPeriodTypeSpecified(): boolean
{
return this.interestCalculationBasisDaysInPeriodTypeFieldSpecified;
}
public set InterestCalculationBasisDaysInPeriodTypeSpecified(value: boolean)
{
this.interestCalculationBasisDaysInPeriodTypeFieldSpecified = value;
}
public get InterestCalculationBasisDaysInPeriodTypeOtherDescription(): string
{
return this.interestCalculationBasisDaysInPeriodTypeOtherDescriptionField;
}
public set InterestCalculationBasisDaysInPeriodTypeOtherDescription(value: string)
{
this.interestCalculationBasisDaysInPeriodTypeOtherDescriptionField = value;
}
public get InterestCalculationBasisDaysInYearCount(): INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInYearCount
{
return this.interestCalculationBasisDaysInYearCountField;
}
public set InterestCalculationBasisDaysInYearCount(value: INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInYearCount)
{
this.interestCalculationBasisDaysInYearCountField = value;
}
public get InterestCalculationBasisDaysInYearCountSpecified(): boolean
{
return this.interestCalculationBasisDaysInYearCountFieldSpecified;
}
public set InterestCalculationBasisDaysInYearCountSpecified(value: boolean)
{
this.interestCalculationBasisDaysInYearCountFieldSpecified = value;
}
public get InterestCalculationBasisType(): INTEREST_CALCULATION_RULEInterestCalculationBasisType
{
return this.interestCalculationBasisTypeField;
}
public set InterestCalculationBasisType(value: INTEREST_CALCULATION_RULEInterestCalculationBasisType)
{
this.interestCalculationBasisTypeField = value;
}
public get InterestCalculationBasisTypeSpecified(): boolean
{
return this.interestCalculationBasisTypeFieldSpecified;
}
public set InterestCalculationBasisTypeSpecified(value: boolean)
{
this.interestCalculationBasisTypeFieldSpecified = value;
}
public get InterestCalculationBasisTypeOtherDescription(): string
{
return this.interestCalculationBasisTypeOtherDescriptionField;
}
public set InterestCalculationBasisTypeOtherDescription(value: string)
{
this.interestCalculationBasisTypeOtherDescriptionField = value;
}
public get InterestCalculationEffectiveDate(): string
{
return this.interestCalculationEffectiveDateField;
}
public set InterestCalculationEffectiveDate(value: string)
{
this.interestCalculationEffectiveDateField = value;
}
public get InterestCalculationEffectiveMonthsCount(): string
{
return this.interestCalculationEffectiveMonthsCountField;
}
public set InterestCalculationEffectiveMonthsCount(value: string)
{
this.interestCalculationEffectiveMonthsCountField = value;
}
public get InterestCalculationExpirationDate(): string
{
return this.interestCalculationExpirationDateField;
}
public set InterestCalculationExpirationDate(value: string)
{
this.interestCalculationExpirationDateField = value;
}
public get InterestCalculationPeriodAdjustmentIndicator(): INTEREST_CALCULATION_RULEInterestCalculationPeriodAdjustmentIndicator
{
return this.interestCalculationPeriodAdjustmentIndicatorField;
}
public set InterestCalculationPeriodAdjustmentIndicator(value: INTEREST_CALCULATION_RULEInterestCalculationPeriodAdjustmentIndicator)
{
this.interestCalculationPeriodAdjustmentIndicatorField = value;
}
public get InterestCalculationPeriodAdjustmentIndicatorSpecified(): boolean
{
return this.interestCalculationPeriodAdjustmentIndicatorFieldSpecified;
}
public set InterestCalculationPeriodAdjustmentIndicatorSpecified(value: boolean)
{
this.interestCalculationPeriodAdjustmentIndicatorFieldSpecified = value;
}
public get InterestCalculationPeriodType(): INTEREST_CALCULATION_RULEInterestCalculationPeriodType
{
return this.interestCalculationPeriodTypeField;
}
public set InterestCalculationPeriodType(value: INTEREST_CALCULATION_RULEInterestCalculationPeriodType)
{
this.interestCalculationPeriodTypeField = value;
}
public get InterestCalculationPeriodTypeSpecified(): boolean
{
return this.interestCalculationPeriodTypeFieldSpecified;
}
public set InterestCalculationPeriodTypeSpecified(value: boolean)
{
this.interestCalculationPeriodTypeFieldSpecified = value;
}
public get InterestCalculationType(): INTEREST_CALCULATION_RULEInterestCalculationType
{
return this.interestCalculationTypeField;
}
public set InterestCalculationType(value: INTEREST_CALCULATION_RULEInterestCalculationType)
{
this.interestCalculationTypeField = value;
}
public get InterestCalculationTypeSpecified(): boolean
{
return this.interestCalculationTypeFieldSpecified;
}
public set InterestCalculationTypeSpecified(value: boolean)
{
this.interestCalculationTypeFieldSpecified = value;
}
public get InterestCalculationTypeOtherDescription(): string
{
return this.interestCalculationTypeOtherDescriptionField;
}
public set InterestCalculationTypeOtherDescription(value: string)
{
this.interestCalculationTypeOtherDescriptionField = value;
}
public get InterestInAdvanceIndicator(): INTEREST_CALCULATION_RULEInterestInAdvanceIndicator
{
return this.interestInAdvanceIndicatorField;
}
public set InterestInAdvanceIndicator(value: INTEREST_CALCULATION_RULEInterestInAdvanceIndicator)
{
this.interestInAdvanceIndicatorField = value;
}
public get InterestInAdvanceIndicatorSpecified(): boolean
{
return this.interestInAdvanceIndicatorFieldSpecified;
}
public set InterestInAdvanceIndicatorSpecified(value: boolean)
{
this.interestInAdvanceIndicatorFieldSpecified = value;
}
public get LoanInterestAccrualStartDate(): string
{
return this.loanInterestAccrualStartDateField;
}
public set LoanInterestAccrualStartDate(value: string)
{
this.loanInterestAccrualStartDateField = value;
} 
}
export enum INTEREST_CALCULATION_RULEInterestCalculationPurposeType {
 Standard,

Draw,

ServicerAdvance,

Other,

Payoff
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInPeriodType {
 DaysInCalendarMonth,

Other,

[System.Xml.Serialization.XmlEnumAttribute("30Days")]
Item30Days,

DaysBetweenPayments
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationBasisDaysInYearCount {
 [System.Xml.Serialization.XmlEnumAttribute("360")]
Item360,

[System.Xml.Serialization.XmlEnumAttribute("365")]
Item365,

[System.Xml.Serialization.XmlEnumAttribute("365.25")]
Item36525,

[System.Xml.Serialization.XmlEnumAttribute("365Or366")]
Item365Or366
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationBasisType {
 Other,

EndOfPeriod,

AverageBalance,

MaximumBalance
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationPeriodAdjustmentIndicator {
 N,

Y
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationPeriodType {
 Biweekly,

Week,

Month,

Semimonthly,

Year,

Quarter,

Day
 }
export enum INTEREST_CALCULATION_RULEInterestCalculationType {
 RuleOf78s,

Compound,

Other,

Simple
 }
export enum INTEREST_CALCULATION_RULEInterestInAdvanceIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_PURPOSE 
{
private cONSTRUCTION_REFINANCE_DATAField:CONSTRUCTION_REFINANCE_DATA ;
private gSETitleMannerHeldDescriptionField:string ;
private _TypeField:LOAN_PURPOSE_Type ;
private _TypeFieldSpecified:boolean ;
private otherLoanPurposeDescriptionField:string ;
private propertyLeaseholdExpirationDateField:string ;
private propertyRightsTypeField:LOAN_PURPOSEPropertyRightsType ;
private propertyRightsTypeFieldSpecified:boolean ;
private propertyUsageTypeField:LOAN_PURPOSEPropertyUsageType ;
private propertyUsageTypeFieldSpecified:boolean ;
private _IDField:string ;
private propertyUsageTypeOtherDescriptionField:string ;
private propertyRightsTypeOtherDescriptionField:string ;
public get CONSTRUCTION_REFINANCE_DATA(): CONSTRUCTION_REFINANCE_DATA
{
return this.cONSTRUCTION_REFINANCE_DATAField;
}
public set CONSTRUCTION_REFINANCE_DATA(value: CONSTRUCTION_REFINANCE_DATA)
{
this.cONSTRUCTION_REFINANCE_DATAField = value;
}
public get GSETitleMannerHeldDescription(): string
{
return this.gSETitleMannerHeldDescriptionField;
}
public set GSETitleMannerHeldDescription(value: string)
{
this.gSETitleMannerHeldDescriptionField = value;
}
public get _Type(): LOAN_PURPOSE_Type
{
return this._TypeField;
}
public set _Type(value: LOAN_PURPOSE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get OtherLoanPurposeDescription(): string
{
return this.otherLoanPurposeDescriptionField;
}
public set OtherLoanPurposeDescription(value: string)
{
this.otherLoanPurposeDescriptionField = value;
}
public get PropertyLeaseholdExpirationDate(): string
{
return this.propertyLeaseholdExpirationDateField;
}
public set PropertyLeaseholdExpirationDate(value: string)
{
this.propertyLeaseholdExpirationDateField = value;
}
public get PropertyRightsType(): LOAN_PURPOSEPropertyRightsType
{
return this.propertyRightsTypeField;
}
public set PropertyRightsType(value: LOAN_PURPOSEPropertyRightsType)
{
this.propertyRightsTypeField = value;
}
public get PropertyRightsTypeSpecified(): boolean
{
return this.propertyRightsTypeFieldSpecified;
}
public set PropertyRightsTypeSpecified(value: boolean)
{
this.propertyRightsTypeFieldSpecified = value;
}
public get PropertyUsageType(): LOAN_PURPOSEPropertyUsageType
{
return this.propertyUsageTypeField;
}
public set PropertyUsageType(value: LOAN_PURPOSEPropertyUsageType)
{
this.propertyUsageTypeField = value;
}
public get PropertyUsageTypeSpecified(): boolean
{
return this.propertyUsageTypeFieldSpecified;
}
public set PropertyUsageTypeSpecified(value: boolean)
{
this.propertyUsageTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get PropertyUsageTypeOtherDescription(): string
{
return this.propertyUsageTypeOtherDescriptionField;
}
public set PropertyUsageTypeOtherDescription(value: string)
{
this.propertyUsageTypeOtherDescriptionField = value;
}
public get PropertyRightsTypeOtherDescription(): string
{
return this.propertyRightsTypeOtherDescriptionField;
}
public set PropertyRightsTypeOtherDescription(value: string)
{
this.propertyRightsTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CONSTRUCTION_REFINANCE_DATA 
{
private constructionImprovementCostsAmountField:string ;
private fRECashOutAmountField:string ;
private gSERefinancePurposeTypeField:CONSTRUCTION_REFINANCE_DATAGSERefinancePurposeType ;
private gSERefinancePurposeTypeFieldSpecified:boolean ;
private landEstimatedValueAmountField:string ;
private landOriginalCostAmountField:string ;
private propertyAcquiredYearField:string ;
private propertyExistingLienAmountField:string ;
private propertyOriginalCostAmountField:string ;
private refinanceImprovementCostsAmountField:string ;
private refinanceImprovementsTypeField:CONSTRUCTION_REFINANCE_DATARefinanceImprovementsType ;
private refinanceImprovementsTypeFieldSpecified:boolean ;
private refinanceProposedImprovementsDescriptionField:string ;
private secondaryFinancingRefinanceIndicatorField:CONSTRUCTION_REFINANCE_DATASecondaryFinancingRefinanceIndicator ;
private secondaryFinancingRefinanceIndicatorFieldSpecified:boolean ;
private constructionPurposeTypeField:CONSTRUCTION_REFINANCE_DATAConstructionPurposeType ;
private constructionPurposeTypeFieldSpecified:boolean ;
private constructionPeriodInterestRatePercentField:string ;
private constructionPeriodNumberOfMonthsCountField:string ;
private fNMSecondMortgageFinancingOriginalPropertyIndicatorField:CONSTRUCTION_REFINANCE_DATAFNMSecondMortgageFinancingOriginalPropertyIndicator ;
private fNMSecondMortgageFinancingOriginalPropertyIndicatorFieldSpecified:boolean ;
private structuralAlterationsConventionalAmountField:string ;
private nonStructuralAlterationsConventionalAmountField:string ;
private _IDField:string ;
private constructionToPermanentClosingFeatureTypeField:CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingFeatureType ;
private constructionToPermanentClosingFeatureTypeFieldSpecified:boolean ;
private constructionToPermanentClosingFeatureTypeOtherDescriptionField:string ;
private constructionToPermanentClosingTypeField:CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingType ;
private constructionToPermanentClosingTypeFieldSpecified:boolean ;
private constructionToPermanentClosingTypeOtherDescriptionField:string ;
private gSERefinancePurposeTypeOtherDescriptionField:string ;
public get ConstructionImprovementCostsAmount(): string
{
return this.constructionImprovementCostsAmountField;
}
public set ConstructionImprovementCostsAmount(value: string)
{
this.constructionImprovementCostsAmountField = value;
}
public get FRECashOutAmount(): string
{
return this.fRECashOutAmountField;
}
public set FRECashOutAmount(value: string)
{
this.fRECashOutAmountField = value;
}
public get GSERefinancePurposeType(): CONSTRUCTION_REFINANCE_DATAGSERefinancePurposeType
{
return this.gSERefinancePurposeTypeField;
}
public set GSERefinancePurposeType(value: CONSTRUCTION_REFINANCE_DATAGSERefinancePurposeType)
{
this.gSERefinancePurposeTypeField = value;
}
public get GSERefinancePurposeTypeSpecified(): boolean
{
return this.gSERefinancePurposeTypeFieldSpecified;
}
public set GSERefinancePurposeTypeSpecified(value: boolean)
{
this.gSERefinancePurposeTypeFieldSpecified = value;
}
public get LandEstimatedValueAmount(): string
{
return this.landEstimatedValueAmountField;
}
public set LandEstimatedValueAmount(value: string)
{
this.landEstimatedValueAmountField = value;
}
public get LandOriginalCostAmount(): string
{
return this.landOriginalCostAmountField;
}
public set LandOriginalCostAmount(value: string)
{
this.landOriginalCostAmountField = value;
}
public get PropertyAcquiredYear(): string
{
return this.propertyAcquiredYearField;
}
public set PropertyAcquiredYear(value: string)
{
this.propertyAcquiredYearField = value;
}
public get PropertyExistingLienAmount(): string
{
return this.propertyExistingLienAmountField;
}
public set PropertyExistingLienAmount(value: string)
{
this.propertyExistingLienAmountField = value;
}
public get PropertyOriginalCostAmount(): string
{
return this.propertyOriginalCostAmountField;
}
public set PropertyOriginalCostAmount(value: string)
{
this.propertyOriginalCostAmountField = value;
}
public get RefinanceImprovementCostsAmount(): string
{
return this.refinanceImprovementCostsAmountField;
}
public set RefinanceImprovementCostsAmount(value: string)
{
this.refinanceImprovementCostsAmountField = value;
}
public get RefinanceImprovementsType(): CONSTRUCTION_REFINANCE_DATARefinanceImprovementsType
{
return this.refinanceImprovementsTypeField;
}
public set RefinanceImprovementsType(value: CONSTRUCTION_REFINANCE_DATARefinanceImprovementsType)
{
this.refinanceImprovementsTypeField = value;
}
public get RefinanceImprovementsTypeSpecified(): boolean
{
return this.refinanceImprovementsTypeFieldSpecified;
}
public set RefinanceImprovementsTypeSpecified(value: boolean)
{
this.refinanceImprovementsTypeFieldSpecified = value;
}
public get RefinanceProposedImprovementsDescription(): string
{
return this.refinanceProposedImprovementsDescriptionField;
}
public set RefinanceProposedImprovementsDescription(value: string)
{
this.refinanceProposedImprovementsDescriptionField = value;
}
public get SecondaryFinancingRefinanceIndicator(): CONSTRUCTION_REFINANCE_DATASecondaryFinancingRefinanceIndicator
{
return this.secondaryFinancingRefinanceIndicatorField;
}
public set SecondaryFinancingRefinanceIndicator(value: CONSTRUCTION_REFINANCE_DATASecondaryFinancingRefinanceIndicator)
{
this.secondaryFinancingRefinanceIndicatorField = value;
}
public get SecondaryFinancingRefinanceIndicatorSpecified(): boolean
{
return this.secondaryFinancingRefinanceIndicatorFieldSpecified;
}
public set SecondaryFinancingRefinanceIndicatorSpecified(value: boolean)
{
this.secondaryFinancingRefinanceIndicatorFieldSpecified = value;
}
public get ConstructionPurposeType(): CONSTRUCTION_REFINANCE_DATAConstructionPurposeType
{
return this.constructionPurposeTypeField;
}
public set ConstructionPurposeType(value: CONSTRUCTION_REFINANCE_DATAConstructionPurposeType)
{
this.constructionPurposeTypeField = value;
}
public get ConstructionPurposeTypeSpecified(): boolean
{
return this.constructionPurposeTypeFieldSpecified;
}
public set ConstructionPurposeTypeSpecified(value: boolean)
{
this.constructionPurposeTypeFieldSpecified = value;
}
public get ConstructionPeriodInterestRatePercent(): string
{
return this.constructionPeriodInterestRatePercentField;
}
public set ConstructionPeriodInterestRatePercent(value: string)
{
this.constructionPeriodInterestRatePercentField = value;
}
public get ConstructionPeriodNumberOfMonthsCount(): string
{
return this.constructionPeriodNumberOfMonthsCountField;
}
public set ConstructionPeriodNumberOfMonthsCount(value: string)
{
this.constructionPeriodNumberOfMonthsCountField = value;
}
public get FNMSecondMortgageFinancingOriginalPropertyIndicator(): CONSTRUCTION_REFINANCE_DATAFNMSecondMortgageFinancingOriginalPropertyIndicator
{
return this.fNMSecondMortgageFinancingOriginalPropertyIndicatorField;
}
public set FNMSecondMortgageFinancingOriginalPropertyIndicator(value: CONSTRUCTION_REFINANCE_DATAFNMSecondMortgageFinancingOriginalPropertyIndicator)
{
this.fNMSecondMortgageFinancingOriginalPropertyIndicatorField = value;
}
public get FNMSecondMortgageFinancingOriginalPropertyIndicatorSpecified(): boolean
{
return this.fNMSecondMortgageFinancingOriginalPropertyIndicatorFieldSpecified;
}
public set FNMSecondMortgageFinancingOriginalPropertyIndicatorSpecified(value: boolean)
{
this.fNMSecondMortgageFinancingOriginalPropertyIndicatorFieldSpecified = value;
}
public get StructuralAlterationsConventionalAmount(): string
{
return this.structuralAlterationsConventionalAmountField;
}
public set StructuralAlterationsConventionalAmount(value: string)
{
this.structuralAlterationsConventionalAmountField = value;
}
public get NonStructuralAlterationsConventionalAmount(): string
{
return this.nonStructuralAlterationsConventionalAmountField;
}
public set NonStructuralAlterationsConventionalAmount(value: string)
{
this.nonStructuralAlterationsConventionalAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get ConstructionToPermanentClosingFeatureType(): CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingFeatureType
{
return this.constructionToPermanentClosingFeatureTypeField;
}
public set ConstructionToPermanentClosingFeatureType(value: CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingFeatureType)
{
this.constructionToPermanentClosingFeatureTypeField = value;
}
public get ConstructionToPermanentClosingFeatureTypeSpecified(): boolean
{
return this.constructionToPermanentClosingFeatureTypeFieldSpecified;
}
public set ConstructionToPermanentClosingFeatureTypeSpecified(value: boolean)
{
this.constructionToPermanentClosingFeatureTypeFieldSpecified = value;
}
public get ConstructionToPermanentClosingFeatureTypeOtherDescription(): string
{
return this.constructionToPermanentClosingFeatureTypeOtherDescriptionField;
}
public set ConstructionToPermanentClosingFeatureTypeOtherDescription(value: string)
{
this.constructionToPermanentClosingFeatureTypeOtherDescriptionField = value;
}
public get ConstructionToPermanentClosingType(): CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingType
{
return this.constructionToPermanentClosingTypeField;
}
public set ConstructionToPermanentClosingType(value: CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingType)
{
this.constructionToPermanentClosingTypeField = value;
}
public get ConstructionToPermanentClosingTypeSpecified(): boolean
{
return this.constructionToPermanentClosingTypeFieldSpecified;
}
public set ConstructionToPermanentClosingTypeSpecified(value: boolean)
{
this.constructionToPermanentClosingTypeFieldSpecified = value;
}
public get ConstructionToPermanentClosingTypeOtherDescription(): string
{
return this.constructionToPermanentClosingTypeOtherDescriptionField;
}
public set ConstructionToPermanentClosingTypeOtherDescription(value: string)
{
this.constructionToPermanentClosingTypeOtherDescriptionField = value;
}
public get GSERefinancePurposeTypeOtherDescription(): string
{
return this.gSERefinancePurposeTypeOtherDescriptionField;
}
public set GSERefinancePurposeTypeOtherDescription(value: string)
{
this.gSERefinancePurposeTypeOtherDescriptionField = value;
} 
}
export enum CONSTRUCTION_REFINANCE_DATAGSERefinancePurposeType {
 NoCashOutStreamlinedRefinance,

CashOutOther,

ChangeInRateTerm,

CashOutLimited,

CashOutDebtConsolidation,

Other,

CashOutHomeImprovement,

NoCashOutFREOwnedRefinance,

NoCashOutFHAStreamlinedRefinance,

NoCashOutOther
 }
export enum CONSTRUCTION_REFINANCE_DATARefinanceImprovementsType {
 Unknown,

ToBeMade,

Made
 }
export enum CONSTRUCTION_REFINANCE_DATASecondaryFinancingRefinanceIndicator {
 N,

Y
 }
export enum CONSTRUCTION_REFINANCE_DATAConstructionPurposeType {
 ConstructionOnly,

ConstructionToPermanent
 }
export enum CONSTRUCTION_REFINANCE_DATAFNMSecondMortgageFinancingOriginalPropertyIndicator {
 N,

Y
 }
export enum CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingFeatureType {
 Other,

ModificationAgreement,

NewNote,

ConvertibleARM,

AutomaticConversion
 }
export enum CONSTRUCTION_REFINANCE_DATAConstructionToPermanentClosingType {
 TwoClosing,

Other,

OneClosing
 }
export enum LOAN_PURPOSE_Type {
 Unknown,

ConstructionOnly,

Other,

Refinance,

ConstructionToPermanent,

Purchase,

MortgageModification
 }
export enum LOAN_PURPOSEPropertyRightsType {
 JointTenants,

Leasehold,

TenantsInCommon,

Other,

Unassigned,

FeeSimple,

CommunityProperty
 }
export enum LOAN_PURPOSEPropertyUsageType {
 Investor,

PrimaryResidence,

Other,

SecondHome,

Investment
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_QUALIFICATION 
{
private additionalBorrowerAssetsConsideredIndicatorField:LOAN_QUALIFICATIONAdditionalBorrowerAssetsConsideredIndicator ;
private additionalBorrowerAssetsConsideredIndicatorFieldSpecified:boolean ;
private additionalBorrowerAssetsNotConsideredIndicatorField:LOAN_QUALIFICATIONAdditionalBorrowerAssetsNotConsideredIndicator ;
private additionalBorrowerAssetsNotConsideredIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get AdditionalBorrowerAssetsConsideredIndicator(): LOAN_QUALIFICATIONAdditionalBorrowerAssetsConsideredIndicator
{
return this.additionalBorrowerAssetsConsideredIndicatorField;
}
public set AdditionalBorrowerAssetsConsideredIndicator(value: LOAN_QUALIFICATIONAdditionalBorrowerAssetsConsideredIndicator)
{
this.additionalBorrowerAssetsConsideredIndicatorField = value;
}
public get AdditionalBorrowerAssetsConsideredIndicatorSpecified(): boolean
{
return this.additionalBorrowerAssetsConsideredIndicatorFieldSpecified;
}
public set AdditionalBorrowerAssetsConsideredIndicatorSpecified(value: boolean)
{
this.additionalBorrowerAssetsConsideredIndicatorFieldSpecified = value;
}
public get AdditionalBorrowerAssetsNotConsideredIndicator(): LOAN_QUALIFICATIONAdditionalBorrowerAssetsNotConsideredIndicator
{
return this.additionalBorrowerAssetsNotConsideredIndicatorField;
}
public set AdditionalBorrowerAssetsNotConsideredIndicator(value: LOAN_QUALIFICATIONAdditionalBorrowerAssetsNotConsideredIndicator)
{
this.additionalBorrowerAssetsNotConsideredIndicatorField = value;
}
public get AdditionalBorrowerAssetsNotConsideredIndicatorSpecified(): boolean
{
return this.additionalBorrowerAssetsNotConsideredIndicatorFieldSpecified;
}
public set AdditionalBorrowerAssetsNotConsideredIndicatorSpecified(value: boolean)
{
this.additionalBorrowerAssetsNotConsideredIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum LOAN_QUALIFICATIONAdditionalBorrowerAssetsConsideredIndicator {
 N,

Y
 }
export enum LOAN_QUALIFICATIONAdditionalBorrowerAssetsNotConsideredIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MERS 
{
private mERS_MINNumberField:string ;
private mERSOriginalMortgageeOfRecordIndicatorField:MERSMERSOriginalMortgageeOfRecordIndicator ;
private mERSOriginalMortgageeOfRecordIndicatorFieldSpecified:boolean ;
private mERSMortgageeOfRecordIndicatorField:MERSMERSMortgageeOfRecordIndicator ;
private mERSMortgageeOfRecordIndicatorFieldSpecified:boolean ;
private mERSRegistrationDateField:string ;
private mERSRegistrationIndicatorField:MERSMERSRegistrationIndicator ;
private mERSRegistrationIndicatorFieldSpecified:boolean ;
private mERSRegistrationStatusTypeField:MERSMERSRegistrationStatusType ;
private mERSRegistrationStatusTypeFieldSpecified:boolean ;
private mERSRegistrationStatusTypeOtherDescriptionField:string ;
private mERSTaxNumberIdentifierField:string ;
private _IDField:string ;
public get MERS_MINNumber(): string
{
return this.mERS_MINNumberField;
}
public set MERS_MINNumber(value: string)
{
this.mERS_MINNumberField = value;
}
public get MERSOriginalMortgageeOfRecordIndicator(): MERSMERSOriginalMortgageeOfRecordIndicator
{
return this.mERSOriginalMortgageeOfRecordIndicatorField;
}
public set MERSOriginalMortgageeOfRecordIndicator(value: MERSMERSOriginalMortgageeOfRecordIndicator)
{
this.mERSOriginalMortgageeOfRecordIndicatorField = value;
}
public get MERSOriginalMortgageeOfRecordIndicatorSpecified(): boolean
{
return this.mERSOriginalMortgageeOfRecordIndicatorFieldSpecified;
}
public set MERSOriginalMortgageeOfRecordIndicatorSpecified(value: boolean)
{
this.mERSOriginalMortgageeOfRecordIndicatorFieldSpecified = value;
}
public get MERSMortgageeOfRecordIndicator(): MERSMERSMortgageeOfRecordIndicator
{
return this.mERSMortgageeOfRecordIndicatorField;
}
public set MERSMortgageeOfRecordIndicator(value: MERSMERSMortgageeOfRecordIndicator)
{
this.mERSMortgageeOfRecordIndicatorField = value;
}
public get MERSMortgageeOfRecordIndicatorSpecified(): boolean
{
return this.mERSMortgageeOfRecordIndicatorFieldSpecified;
}
public set MERSMortgageeOfRecordIndicatorSpecified(value: boolean)
{
this.mERSMortgageeOfRecordIndicatorFieldSpecified = value;
}
public get MERSRegistrationDate(): string
{
return this.mERSRegistrationDateField;
}
public set MERSRegistrationDate(value: string)
{
this.mERSRegistrationDateField = value;
}
public get MERSRegistrationIndicator(): MERSMERSRegistrationIndicator
{
return this.mERSRegistrationIndicatorField;
}
public set MERSRegistrationIndicator(value: MERSMERSRegistrationIndicator)
{
this.mERSRegistrationIndicatorField = value;
}
public get MERSRegistrationIndicatorSpecified(): boolean
{
return this.mERSRegistrationIndicatorFieldSpecified;
}
public set MERSRegistrationIndicatorSpecified(value: boolean)
{
this.mERSRegistrationIndicatorFieldSpecified = value;
}
public get MERSRegistrationStatusType(): MERSMERSRegistrationStatusType
{
return this.mERSRegistrationStatusTypeField;
}
public set MERSRegistrationStatusType(value: MERSMERSRegistrationStatusType)
{
this.mERSRegistrationStatusTypeField = value;
}
public get MERSRegistrationStatusTypeSpecified(): boolean
{
return this.mERSRegistrationStatusTypeFieldSpecified;
}
public set MERSRegistrationStatusTypeSpecified(value: boolean)
{
this.mERSRegistrationStatusTypeFieldSpecified = value;
}
public get MERSRegistrationStatusTypeOtherDescription(): string
{
return this.mERSRegistrationStatusTypeOtherDescriptionField;
}
public set MERSRegistrationStatusTypeOtherDescription(value: string)
{
this.mERSRegistrationStatusTypeOtherDescriptionField = value;
}
public get MERSTaxNumberIdentifier(): string
{
return this.mERSTaxNumberIdentifierField;
}
public set MERSTaxNumberIdentifier(value: string)
{
this.mERSTaxNumberIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum MERSMERSOriginalMortgageeOfRecordIndicator {
 N,

Y
 }
export enum MERSMERSMortgageeOfRecordIndicator {
 N,

Y
 }
export enum MERSMERSRegistrationIndicator {
 N,

Y
 }
export enum MERSMERSRegistrationStatusType {
 NotRegistered,

Registered,

PreRegistered,

Reserved,

Other,

Validated,

Preregistered,

Deactivated
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MI_DATA 
{
private mI_PREMIUM_TAXField:MI_PREMIUM_TAX ;
private mI_RENEWAL_PREMIUMField:MI_RENEWAL_PREMIUM[] ;
private _PAID_TOField:_PAID_TO ;
private borrowerMITerminationDateField:string ;
private mIScheduledTerminationDateField:string ;
private mI_FHAUpfrontPremiumAmountField:string ;
private mICertificateIdentifierField:string ;
private mICollectedNumberOfMonthsCountField:string ;
private mICompanyNameField:string ;
private mICushionNumberOfMonthsCountField:string ;
private scheduledAmortizationMidpointDateField:string ;
private mIDurationTypeField:MI_DATAMIDurationType ;
private mIDurationTypeFieldSpecified:boolean ;
private mIEscrowIncludedInAggregateIndicatorField:MI_DATAMIEscrowIncludedInAggregateIndicator ;
private mIEscrowIncludedInAggregateIndicatorFieldSpecified:boolean ;
private mIInitialPremiumAmountField:string ;
private mIInitialPremiumAtClosingTypeField:MI_DATAMIInitialPremiumAtClosingType ;
private mIInitialPremiumAtClosingTypeFieldSpecified:boolean ;
private mIInitialPremiumRateDurationMonthsField:string ;
private mIInitialPremiumRatePercentField:string ;
private mI_LTVCutoffPercentField:string ;
private mI_LTVCutoffTypeField:MI_DATAMI_LTVCutoffType ;
private mI_LTVCutoffTypeFieldSpecified:boolean ;
private mIPremiumFinancedIndicatorField:MI_DATAMIPremiumFinancedIndicator ;
private mIPremiumFinancedIndicatorFieldSpecified:boolean ;
private mIPremiumFromClosingAmountField:string ;
private mIPremiumPaymentTypeField:MI_DATAMIPremiumPaymentType ;
private mIPremiumPaymentTypeFieldSpecified:boolean ;
private mIPremiumRefundableTypeField:MI_DATAMIPremiumRefundableType ;
private mIPremiumRefundableTypeFieldSpecified:boolean ;
private mIPremiumTermMonthsField:string ;
private mIRenewalCalculationTypeField:MI_DATAMIRenewalCalculationType ;
private mIRenewalCalculationTypeFieldSpecified:boolean ;
private mISourceTypeField:MI_DATAMISourceType ;
private mISourceTypeFieldSpecified:boolean ;
private _IDField:string ;
private mIPremiumCalendarYearAmountField:string ;
private mIDurationTypeOtherDescriptionField:string ;
private mIInitialPremiumAtClosingTypeOtherDescriptionField:string ;
private mIPremiumPaymentTypeOtherDescriptionField:string ;
private mIPremiumRefundableTypeOtherDescriptionField:string ;
public get MI_PREMIUM_TAX(): MI_PREMIUM_TAX
{
return this.mI_PREMIUM_TAXField;
}
public set MI_PREMIUM_TAX(value: MI_PREMIUM_TAX)
{
this.mI_PREMIUM_TAXField = value;
}
public get MI_RENEWAL_PREMIUM(): MI_RENEWAL_PREMIUM[]
{
return this.mI_RENEWAL_PREMIUMField;
}
public set MI_RENEWAL_PREMIUM(value: MI_RENEWAL_PREMIUM[])
{
this.mI_RENEWAL_PREMIUMField = value;
}
public get _PAID_TO(): _PAID_TO
{
return this._PAID_TOField;
}
public set _PAID_TO(value: _PAID_TO)
{
this._PAID_TOField = value;
}
public get BorrowerMITerminationDate(): string
{
return this.borrowerMITerminationDateField;
}
public set BorrowerMITerminationDate(value: string)
{
this.borrowerMITerminationDateField = value;
}
public get MIScheduledTerminationDate(): string
{
return this.mIScheduledTerminationDateField;
}
public set MIScheduledTerminationDate(value: string)
{
this.mIScheduledTerminationDateField = value;
}
public get MI_FHAUpfrontPremiumAmount(): string
{
return this.mI_FHAUpfrontPremiumAmountField;
}
public set MI_FHAUpfrontPremiumAmount(value: string)
{
this.mI_FHAUpfrontPremiumAmountField = value;
}
public get MICertificateIdentifier(): string
{
return this.mICertificateIdentifierField;
}
public set MICertificateIdentifier(value: string)
{
this.mICertificateIdentifierField = value;
}
public get MICollectedNumberOfMonthsCount(): string
{
return this.mICollectedNumberOfMonthsCountField;
}
public set MICollectedNumberOfMonthsCount(value: string)
{
this.mICollectedNumberOfMonthsCountField = value;
}
public get MICompanyName(): string
{
return this.mICompanyNameField;
}
public set MICompanyName(value: string)
{
this.mICompanyNameField = value;
}
public get MICushionNumberOfMonthsCount(): string
{
return this.mICushionNumberOfMonthsCountField;
}
public set MICushionNumberOfMonthsCount(value: string)
{
this.mICushionNumberOfMonthsCountField = value;
}
public get ScheduledAmortizationMidpointDate(): string
{
return this.scheduledAmortizationMidpointDateField;
}
public set ScheduledAmortizationMidpointDate(value: string)
{
this.scheduledAmortizationMidpointDateField = value;
}
public get MIDurationType(): MI_DATAMIDurationType
{
return this.mIDurationTypeField;
}
public set MIDurationType(value: MI_DATAMIDurationType)
{
this.mIDurationTypeField = value;
}
public get MIDurationTypeSpecified(): boolean
{
return this.mIDurationTypeFieldSpecified;
}
public set MIDurationTypeSpecified(value: boolean)
{
this.mIDurationTypeFieldSpecified = value;
}
public get MIEscrowIncludedInAggregateIndicator(): MI_DATAMIEscrowIncludedInAggregateIndicator
{
return this.mIEscrowIncludedInAggregateIndicatorField;
}
public set MIEscrowIncludedInAggregateIndicator(value: MI_DATAMIEscrowIncludedInAggregateIndicator)
{
this.mIEscrowIncludedInAggregateIndicatorField = value;
}
public get MIEscrowIncludedInAggregateIndicatorSpecified(): boolean
{
return this.mIEscrowIncludedInAggregateIndicatorFieldSpecified;
}
public set MIEscrowIncludedInAggregateIndicatorSpecified(value: boolean)
{
this.mIEscrowIncludedInAggregateIndicatorFieldSpecified = value;
}
public get MIInitialPremiumAmount(): string
{
return this.mIInitialPremiumAmountField;
}
public set MIInitialPremiumAmount(value: string)
{
this.mIInitialPremiumAmountField = value;
}
public get MIInitialPremiumAtClosingType(): MI_DATAMIInitialPremiumAtClosingType
{
return this.mIInitialPremiumAtClosingTypeField;
}
public set MIInitialPremiumAtClosingType(value: MI_DATAMIInitialPremiumAtClosingType)
{
this.mIInitialPremiumAtClosingTypeField = value;
}
public get MIInitialPremiumAtClosingTypeSpecified(): boolean
{
return this.mIInitialPremiumAtClosingTypeFieldSpecified;
}
public set MIInitialPremiumAtClosingTypeSpecified(value: boolean)
{
this.mIInitialPremiumAtClosingTypeFieldSpecified = value;
}
public get MIInitialPremiumRateDurationMonths(): string
{
return this.mIInitialPremiumRateDurationMonthsField;
}
public set MIInitialPremiumRateDurationMonths(value: string)
{
this.mIInitialPremiumRateDurationMonthsField = value;
}
public get MIInitialPremiumRatePercent(): string
{
return this.mIInitialPremiumRatePercentField;
}
public set MIInitialPremiumRatePercent(value: string)
{
this.mIInitialPremiumRatePercentField = value;
}
public get MI_LTVCutoffPercent(): string
{
return this.mI_LTVCutoffPercentField;
}
public set MI_LTVCutoffPercent(value: string)
{
this.mI_LTVCutoffPercentField = value;
}
public get MI_LTVCutoffType(): MI_DATAMI_LTVCutoffType
{
return this.mI_LTVCutoffTypeField;
}
public set MI_LTVCutoffType(value: MI_DATAMI_LTVCutoffType)
{
this.mI_LTVCutoffTypeField = value;
}
public get MI_LTVCutoffTypeSpecified(): boolean
{
return this.mI_LTVCutoffTypeFieldSpecified;
}
public set MI_LTVCutoffTypeSpecified(value: boolean)
{
this.mI_LTVCutoffTypeFieldSpecified = value;
}
public get MIPremiumFinancedIndicator(): MI_DATAMIPremiumFinancedIndicator
{
return this.mIPremiumFinancedIndicatorField;
}
public set MIPremiumFinancedIndicator(value: MI_DATAMIPremiumFinancedIndicator)
{
this.mIPremiumFinancedIndicatorField = value;
}
public get MIPremiumFinancedIndicatorSpecified(): boolean
{
return this.mIPremiumFinancedIndicatorFieldSpecified;
}
public set MIPremiumFinancedIndicatorSpecified(value: boolean)
{
this.mIPremiumFinancedIndicatorFieldSpecified = value;
}
public get MIPremiumFromClosingAmount(): string
{
return this.mIPremiumFromClosingAmountField;
}
public set MIPremiumFromClosingAmount(value: string)
{
this.mIPremiumFromClosingAmountField = value;
}
public get MIPremiumPaymentType(): MI_DATAMIPremiumPaymentType
{
return this.mIPremiumPaymentTypeField;
}
public set MIPremiumPaymentType(value: MI_DATAMIPremiumPaymentType)
{
this.mIPremiumPaymentTypeField = value;
}
public get MIPremiumPaymentTypeSpecified(): boolean
{
return this.mIPremiumPaymentTypeFieldSpecified;
}
public set MIPremiumPaymentTypeSpecified(value: boolean)
{
this.mIPremiumPaymentTypeFieldSpecified = value;
}
public get MIPremiumRefundableType(): MI_DATAMIPremiumRefundableType
{
return this.mIPremiumRefundableTypeField;
}
public set MIPremiumRefundableType(value: MI_DATAMIPremiumRefundableType)
{
this.mIPremiumRefundableTypeField = value;
}
public get MIPremiumRefundableTypeSpecified(): boolean
{
return this.mIPremiumRefundableTypeFieldSpecified;
}
public set MIPremiumRefundableTypeSpecified(value: boolean)
{
this.mIPremiumRefundableTypeFieldSpecified = value;
}
public get MIPremiumTermMonths(): string
{
return this.mIPremiumTermMonthsField;
}
public set MIPremiumTermMonths(value: string)
{
this.mIPremiumTermMonthsField = value;
}
public get MIRenewalCalculationType(): MI_DATAMIRenewalCalculationType
{
return this.mIRenewalCalculationTypeField;
}
public set MIRenewalCalculationType(value: MI_DATAMIRenewalCalculationType)
{
this.mIRenewalCalculationTypeField = value;
}
public get MIRenewalCalculationTypeSpecified(): boolean
{
return this.mIRenewalCalculationTypeFieldSpecified;
}
public set MIRenewalCalculationTypeSpecified(value: boolean)
{
this.mIRenewalCalculationTypeFieldSpecified = value;
}
public get MISourceType(): MI_DATAMISourceType
{
return this.mISourceTypeField;
}
public set MISourceType(value: MI_DATAMISourceType)
{
this.mISourceTypeField = value;
}
public get MISourceTypeSpecified(): boolean
{
return this.mISourceTypeFieldSpecified;
}
public set MISourceTypeSpecified(value: boolean)
{
this.mISourceTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get MIPremiumCalendarYearAmount(): string
{
return this.mIPremiumCalendarYearAmountField;
}
public set MIPremiumCalendarYearAmount(value: string)
{
this.mIPremiumCalendarYearAmountField = value;
}
public get MIDurationTypeOtherDescription(): string
{
return this.mIDurationTypeOtherDescriptionField;
}
public set MIDurationTypeOtherDescription(value: string)
{
this.mIDurationTypeOtherDescriptionField = value;
}
public get MIInitialPremiumAtClosingTypeOtherDescription(): string
{
return this.mIInitialPremiumAtClosingTypeOtherDescriptionField;
}
public set MIInitialPremiumAtClosingTypeOtherDescription(value: string)
{
this.mIInitialPremiumAtClosingTypeOtherDescriptionField = value;
}
public get MIPremiumPaymentTypeOtherDescription(): string
{
return this.mIPremiumPaymentTypeOtherDescriptionField;
}
public set MIPremiumPaymentTypeOtherDescription(value: string)
{
this.mIPremiumPaymentTypeOtherDescriptionField = value;
}
public get MIPremiumRefundableTypeOtherDescription(): string
{
return this.mIPremiumRefundableTypeOtherDescriptionField;
}
public set MIPremiumRefundableTypeOtherDescription(value: string)
{
this.mIPremiumRefundableTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MI_PREMIUM_TAX 
{
private _CodeAmountField:string ;
private _CodePercentField:string ;
private _CodeTypeField:MI_PREMIUM_TAX_CodeType ;
private _CodeTypeFieldSpecified:boolean ;
private _IDField:string ;
public get _CodeAmount(): string
{
return this._CodeAmountField;
}
public set _CodeAmount(value: string)
{
this._CodeAmountField = value;
}
public get _CodePercent(): string
{
return this._CodePercentField;
}
public set _CodePercent(value: string)
{
this._CodePercentField = value;
}
public get _CodeType(): MI_PREMIUM_TAX_CodeType
{
return this._CodeTypeField;
}
public set _CodeType(value: MI_PREMIUM_TAX_CodeType)
{
this._CodeTypeField = value;
}
public get _CodeTypeSpecified(): boolean
{
return this._CodeTypeFieldSpecified;
}
public set _CodeTypeSpecified(value: boolean)
{
this._CodeTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum MI_PREMIUM_TAX_CodeType {
 Municipal,

County,

State,

AllTaxes
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MI_RENEWAL_PREMIUM 
{
private _MonthlyPaymentAmountField:string ;
private _MonthlyPaymentRoundingTypeField:MI_RENEWAL_PREMIUM_MonthlyPaymentRoundingType ;
private _MonthlyPaymentRoundingTypeFieldSpecified:boolean ;
private _RateField:string ;
private _RateDurationMonthsField:string ;
private _SequenceField:MI_RENEWAL_PREMIUM_Sequence ;
private _SequenceFieldSpecified:boolean ;
private _IDField:string ;
private _MonthlyPaymentRoundingTypeOtherDescriptionField:string ;
public get _MonthlyPaymentAmount(): string
{
return this._MonthlyPaymentAmountField;
}
public set _MonthlyPaymentAmount(value: string)
{
this._MonthlyPaymentAmountField = value;
}
public get _MonthlyPaymentRoundingType(): MI_RENEWAL_PREMIUM_MonthlyPaymentRoundingType
{
return this._MonthlyPaymentRoundingTypeField;
}
public set _MonthlyPaymentRoundingType(value: MI_RENEWAL_PREMIUM_MonthlyPaymentRoundingType)
{
this._MonthlyPaymentRoundingTypeField = value;
}
public get _MonthlyPaymentRoundingTypeSpecified(): boolean
{
return this._MonthlyPaymentRoundingTypeFieldSpecified;
}
public set _MonthlyPaymentRoundingTypeSpecified(value: boolean)
{
this._MonthlyPaymentRoundingTypeFieldSpecified = value;
}
public get _Rate(): string
{
return this._RateField;
}
public set _Rate(value: string)
{
this._RateField = value;
}
public get _RateDurationMonths(): string
{
return this._RateDurationMonthsField;
}
public set _RateDurationMonths(value: string)
{
this._RateDurationMonthsField = value;
}
public get _Sequence(): MI_RENEWAL_PREMIUM_Sequence
{
return this._SequenceField;
}
public set _Sequence(value: MI_RENEWAL_PREMIUM_Sequence)
{
this._SequenceField = value;
}
public get _SequenceSpecified(): boolean
{
return this._SequenceFieldSpecified;
}
public set _SequenceSpecified(value: boolean)
{
this._SequenceFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _MonthlyPaymentRoundingTypeOtherDescription(): string
{
return this._MonthlyPaymentRoundingTypeOtherDescriptionField;
}
public set _MonthlyPaymentRoundingTypeOtherDescription(value: string)
{
this._MonthlyPaymentRoundingTypeOtherDescriptionField = value;
} 
}
export enum MI_RENEWAL_PREMIUM_MonthlyPaymentRoundingType {
 Nearest,

None,

Other,

Up,

Down
 }
export enum MI_RENEWAL_PREMIUM_Sequence {
 First,

Fifth,

Fourth,

Third,

Second
 }
export enum MI_DATAMIDurationType {
 NotApplicable,

SingleSpecific,

Other,

SingleLifeOfLoan,

PeriodicMonthly,

Annual
 }
export enum MI_DATAMIEscrowIncludedInAggregateIndicator {
 N,

Y
 }
export enum MI_DATAMIInitialPremiumAtClosingType {
 Other,

Prepaid,

Deferred
 }
export enum MI_DATAMI_LTVCutoffType {
 AppraisedValue,

SalesPrice
 }
export enum MI_DATAMIPremiumFinancedIndicator {
 N,

Y
 }
export enum MI_DATAMIPremiumPaymentType {
 PaidFromEscrow,

Financed,

Other,

BothBorrowerAndLenderPaid,

Prepaid,

BorrowerPaid,

LenderPaid
 }
export enum MI_DATAMIPremiumRefundableType {
 Other,

Refundable,

RefundableWithLimits,

NotRefundable
 }
export enum MI_DATAMIRenewalCalculationType {
 NotApplicable,

Constant,

Declining,

NoRenewals
 }
export enum MI_DATAMISourceType {
 FHA,

PMI
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MORTGAGE_TERMS 
{
private agencyCaseIdentifierField:string ;
private aRMTypeDescriptionField:string ;
private baseLoanAmountField:string ;
private borrowerRequestedLoanAmountField:string ;
private lenderCaseIdentifierField:string ;
private loanAmortizationTermMonthsField:string ;
private loanAmortizationTypeField:MORTGAGE_TERMSLoanAmortizationType ;
private loanAmortizationTypeFieldSpecified:boolean ;
private mortgageTypeField:MORTGAGE_TERMSMortgageType ;
private mortgageTypeFieldSpecified:boolean ;
private otherAmortizationTypeDescriptionField:string ;
private otherMortgageTypeDescriptionField:string ;
private paymentRemittanceDayField:string ;
private requestedInterestRatePercentField:string ;
private noteRatePercentField:string ;
private lenderLoanIdentifierField:string ;
private originalLoanAmountField:string ;
private loanEstimatedClosingDateField:string ;
private lendersContactPrimaryTelephoneNumberField:string ;
private _IDField:string ;
public get AgencyCaseIdentifier(): string
{
return this.agencyCaseIdentifierField;
}
public set AgencyCaseIdentifier(value: string)
{
this.agencyCaseIdentifierField = value;
}
public get ARMTypeDescription(): string
{
return this.aRMTypeDescriptionField;
}
public set ARMTypeDescription(value: string)
{
this.aRMTypeDescriptionField = value;
}
public get BaseLoanAmount(): string
{
return this.baseLoanAmountField;
}
public set BaseLoanAmount(value: string)
{
this.baseLoanAmountField = value;
}
public get BorrowerRequestedLoanAmount(): string
{
return this.borrowerRequestedLoanAmountField;
}
public set BorrowerRequestedLoanAmount(value: string)
{
this.borrowerRequestedLoanAmountField = value;
}
public get LenderCaseIdentifier(): string
{
return this.lenderCaseIdentifierField;
}
public set LenderCaseIdentifier(value: string)
{
this.lenderCaseIdentifierField = value;
}
public get LoanAmortizationTermMonths(): string
{
return this.loanAmortizationTermMonthsField;
}
public set LoanAmortizationTermMonths(value: string)
{
this.loanAmortizationTermMonthsField = value;
}
public get LoanAmortizationType(): MORTGAGE_TERMSLoanAmortizationType
{
return this.loanAmortizationTypeField;
}
public set LoanAmortizationType(value: MORTGAGE_TERMSLoanAmortizationType)
{
this.loanAmortizationTypeField = value;
}
public get LoanAmortizationTypeSpecified(): boolean
{
return this.loanAmortizationTypeFieldSpecified;
}
public set LoanAmortizationTypeSpecified(value: boolean)
{
this.loanAmortizationTypeFieldSpecified = value;
}
public get MortgageType(): MORTGAGE_TERMSMortgageType
{
return this.mortgageTypeField;
}
public set MortgageType(value: MORTGAGE_TERMSMortgageType)
{
this.mortgageTypeField = value;
}
public get MortgageTypeSpecified(): boolean
{
return this.mortgageTypeFieldSpecified;
}
public set MortgageTypeSpecified(value: boolean)
{
this.mortgageTypeFieldSpecified = value;
}
public get OtherAmortizationTypeDescription(): string
{
return this.otherAmortizationTypeDescriptionField;
}
public set OtherAmortizationTypeDescription(value: string)
{
this.otherAmortizationTypeDescriptionField = value;
}
public get OtherMortgageTypeDescription(): string
{
return this.otherMortgageTypeDescriptionField;
}
public set OtherMortgageTypeDescription(value: string)
{
this.otherMortgageTypeDescriptionField = value;
}
public get PaymentRemittanceDay(): string
{
return this.paymentRemittanceDayField;
}
public set PaymentRemittanceDay(value: string)
{
this.paymentRemittanceDayField = value;
}
public get RequestedInterestRatePercent(): string
{
return this.requestedInterestRatePercentField;
}
public set RequestedInterestRatePercent(value: string)
{
this.requestedInterestRatePercentField = value;
}
public get NoteRatePercent(): string
{
return this.noteRatePercentField;
}
public set NoteRatePercent(value: string)
{
this.noteRatePercentField = value;
}
public get LenderLoanIdentifier(): string
{
return this.lenderLoanIdentifierField;
}
public set LenderLoanIdentifier(value: string)
{
this.lenderLoanIdentifierField = value;
}
public get OriginalLoanAmount(): string
{
return this.originalLoanAmountField;
}
public set OriginalLoanAmount(value: string)
{
this.originalLoanAmountField = value;
}
public get LoanEstimatedClosingDate(): string
{
return this.loanEstimatedClosingDateField;
}
public set LoanEstimatedClosingDate(value: string)
{
this.loanEstimatedClosingDateField = value;
}
public get LendersContactPrimaryTelephoneNumber(): string
{
return this.lendersContactPrimaryTelephoneNumberField;
}
public set LendersContactPrimaryTelephoneNumber(value: string)
{
this.lendersContactPrimaryTelephoneNumberField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum MORTGAGE_TERMSLoanAmortizationType {
 GraduatedPaymentMortgage,

AdjustableRate,

OtherAmortizationType,

RateImprovementMortgage,

Step,

ReverseMortgage,

Ruleof78s,

DailySimpleInterest,

GraduatedPaymentARM,

GrowingEquityMortgage,

Fixed
 }
export enum MORTGAGE_TERMSMortgageType {
 Conventional,

FHA,

FarmersHomeAdministration,

Other,

VA,

StateAgency,

HELOC,

LocalAgency
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PROPERTY 
{
private _LEGAL_DESCRIPTIONField:_LEGAL_DESCRIPTION[] ;
private pARSED_STREET_ADDRESSField:PARSED_STREET_ADDRESS ;
private _VALUATIONField:_VALUATION[] ;
private _DETAILSField:_DETAILS ;
private hOMEOWNERS_ASSOCIATIONField:HOMEOWNERS_ASSOCIATION ;
private pROJECTField:PROJECT ;
private _CATEGORYField:_CATEGORY[] ;
private _DWELLING_UNITField:_DWELLING_UNIT[] ;
private mANUFACTURED_HOMEField:MANUFACTURED_HOME[] ;
private pLATTED_LANDField:PLATTED_LAND[] ;
private uNPLATTED_LANDField:UNPLATTED_LAND ;
private fLOOD_DETERMINATIONField:FLOOD_DETERMINATION[] ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private assessorsParcelIdentifierField:string ;
private assessorsSecondParcelIdentifierField:string ;
private buildingStatusTypeField:PROPERTYBuildingStatusType ;
private buildingStatusTypeFieldSpecified:boolean ;
private _FinancedNumberOfUnitsField:string ;
private _StructureBuiltYearField:string ;
private _AcquiredDateField:string ;
private plannedUnitDevelopmentIndicatorField:PROPERTYPlannedUnitDevelopmentIndicator ;
private plannedUnitDevelopmentIndicatorFieldSpecified:boolean ;
private _AcreageNumberField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _IDField:string ;
private uniqueDwellingTypeField:PROPERTYUniqueDwellingType ;
private uniqueDwellingTypeFieldSpecified:boolean ;
private uniqueDwellingTypeOtherDescriptionField:string ;
private nativeAmericanLandsTypeField:PROPERTYNativeAmericanLandsType ;
private nativeAmericanLandsTypeFieldSpecified:boolean ;
private nativeAmericanLandsTypeOtherDescriptionField:string ;
private _CommunityLandTrustIndicatorField:PROPERTY_CommunityLandTrustIndicator ;
private _CommunityLandTrustIndicatorFieldSpecified:boolean ;
private _InclusionaryZoningIndicatorField:PROPERTY_InclusionaryZoningIndicator ;
private _InclusionaryZoningIndicatorFieldSpecified:boolean ;
private currentVacancyStatusTypeField:PROPERTYCurrentVacancyStatusType ;
private currentVacancyStatusTypeFieldSpecified:boolean ;
private grossLivingAreaSquareFeetCountField:string ;
private manufacturedHomeManufactureYearField:string ;
private _NeighborhoodLocationTypeField:PROPERTY_NeighborhoodLocationType ;
private _NeighborhoodLocationTypeFieldSpecified:boolean ;
private _NeighborhoodLocationTypeOtherDescriptionField:string ;
private _ZoningCategoryTypeField:PROPERTY_ZoningCategoryType ;
private _ZoningCategoryTypeFieldSpecified:boolean ;
private _ZoningCategoryTypeOtherDescriptionField:string ;
private storiesCountField:string ;
private buildingStatusTypeOtherDescriptionField:string ;
private _OwnershipTypeField:PROPERTY_OwnershipType ;
private _OwnershipTypeFieldSpecified:boolean ;
private _OwnershipTypeOtherDescriptionField:string ;
private _PreviouslyOccupiedIndicatorField:PROPERTY_PreviouslyOccupiedIndicator ;
private _PreviouslyOccupiedIndicatorFieldSpecified:boolean ;
private _ConditionDescriptionField:string ;
public get _LEGAL_DESCRIPTION(): _LEGAL_DESCRIPTION[]
{
return this._LEGAL_DESCRIPTIONField;
}
public set _LEGAL_DESCRIPTION(value: _LEGAL_DESCRIPTION[])
{
this._LEGAL_DESCRIPTIONField = value;
}
public get PARSED_STREET_ADDRESS(): PARSED_STREET_ADDRESS
{
return this.pARSED_STREET_ADDRESSField;
}
public set PARSED_STREET_ADDRESS(value: PARSED_STREET_ADDRESS)
{
this.pARSED_STREET_ADDRESSField = value;
}
public get _VALUATION(): _VALUATION[]
{
return this._VALUATIONField;
}
public set _VALUATION(value: _VALUATION[])
{
this._VALUATIONField = value;
}
public get _DETAILS(): _DETAILS
{
return this._DETAILSField;
}
public set _DETAILS(value: _DETAILS)
{
this._DETAILSField = value;
}
public get HOMEOWNERS_ASSOCIATION(): HOMEOWNERS_ASSOCIATION
{
return this.hOMEOWNERS_ASSOCIATIONField;
}
public set HOMEOWNERS_ASSOCIATION(value: HOMEOWNERS_ASSOCIATION)
{
this.hOMEOWNERS_ASSOCIATIONField = value;
}
public get PROJECT(): PROJECT
{
return this.pROJECTField;
}
public set PROJECT(value: PROJECT)
{
this.pROJECTField = value;
}
public get _CATEGORY(): _CATEGORY[]
{
return this._CATEGORYField;
}
public set _CATEGORY(value: _CATEGORY[])
{
this._CATEGORYField = value;
}
public get _DWELLING_UNIT(): _DWELLING_UNIT[]
{
return this._DWELLING_UNITField;
}
public set _DWELLING_UNIT(value: _DWELLING_UNIT[])
{
this._DWELLING_UNITField = value;
}
public get MANUFACTURED_HOME(): MANUFACTURED_HOME[]
{
return this.mANUFACTURED_HOMEField;
}
public set MANUFACTURED_HOME(value: MANUFACTURED_HOME[])
{
this.mANUFACTURED_HOMEField = value;
}
public get PLATTED_LAND(): PLATTED_LAND[]
{
return this.pLATTED_LANDField;
}
public set PLATTED_LAND(value: PLATTED_LAND[])
{
this.pLATTED_LANDField = value;
}
public get UNPLATTED_LAND(): UNPLATTED_LAND
{
return this.uNPLATTED_LANDField;
}
public set UNPLATTED_LAND(value: UNPLATTED_LAND)
{
this.uNPLATTED_LANDField = value;
}
public get FLOOD_DETERMINATION(): FLOOD_DETERMINATION[]
{
return this.fLOOD_DETERMINATIONField;
}
public set FLOOD_DETERMINATION(value: FLOOD_DETERMINATION[])
{
this.fLOOD_DETERMINATIONField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get AssessorsParcelIdentifier(): string
{
return this.assessorsParcelIdentifierField;
}
public set AssessorsParcelIdentifier(value: string)
{
this.assessorsParcelIdentifierField = value;
}
public get AssessorsSecondParcelIdentifier(): string
{
return this.assessorsSecondParcelIdentifierField;
}
public set AssessorsSecondParcelIdentifier(value: string)
{
this.assessorsSecondParcelIdentifierField = value;
}
public get BuildingStatusType(): PROPERTYBuildingStatusType
{
return this.buildingStatusTypeField;
}
public set BuildingStatusType(value: PROPERTYBuildingStatusType)
{
this.buildingStatusTypeField = value;
}
public get BuildingStatusTypeSpecified(): boolean
{
return this.buildingStatusTypeFieldSpecified;
}
public set BuildingStatusTypeSpecified(value: boolean)
{
this.buildingStatusTypeFieldSpecified = value;
}
public get _FinancedNumberOfUnits(): string
{
return this._FinancedNumberOfUnitsField;
}
public set _FinancedNumberOfUnits(value: string)
{
this._FinancedNumberOfUnitsField = value;
}
public get _StructureBuiltYear(): string
{
return this._StructureBuiltYearField;
}
public set _StructureBuiltYear(value: string)
{
this._StructureBuiltYearField = value;
}
public get _AcquiredDate(): string
{
return this._AcquiredDateField;
}
public set _AcquiredDate(value: string)
{
this._AcquiredDateField = value;
}
public get PlannedUnitDevelopmentIndicator(): PROPERTYPlannedUnitDevelopmentIndicator
{
return this.plannedUnitDevelopmentIndicatorField;
}
public set PlannedUnitDevelopmentIndicator(value: PROPERTYPlannedUnitDevelopmentIndicator)
{
this.plannedUnitDevelopmentIndicatorField = value;
}
public get PlannedUnitDevelopmentIndicatorSpecified(): boolean
{
return this.plannedUnitDevelopmentIndicatorFieldSpecified;
}
public set PlannedUnitDevelopmentIndicatorSpecified(value: boolean)
{
this.plannedUnitDevelopmentIndicatorFieldSpecified = value;
}
public get _AcreageNumber(): string
{
return this._AcreageNumberField;
}
public set _AcreageNumber(value: string)
{
this._AcreageNumberField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get UniqueDwellingType(): PROPERTYUniqueDwellingType
{
return this.uniqueDwellingTypeField;
}
public set UniqueDwellingType(value: PROPERTYUniqueDwellingType)
{
this.uniqueDwellingTypeField = value;
}
public get UniqueDwellingTypeSpecified(): boolean
{
return this.uniqueDwellingTypeFieldSpecified;
}
public set UniqueDwellingTypeSpecified(value: boolean)
{
this.uniqueDwellingTypeFieldSpecified = value;
}
public get UniqueDwellingTypeOtherDescription(): string
{
return this.uniqueDwellingTypeOtherDescriptionField;
}
public set UniqueDwellingTypeOtherDescription(value: string)
{
this.uniqueDwellingTypeOtherDescriptionField = value;
}
public get NativeAmericanLandsType(): PROPERTYNativeAmericanLandsType
{
return this.nativeAmericanLandsTypeField;
}
public set NativeAmericanLandsType(value: PROPERTYNativeAmericanLandsType)
{
this.nativeAmericanLandsTypeField = value;
}
public get NativeAmericanLandsTypeSpecified(): boolean
{
return this.nativeAmericanLandsTypeFieldSpecified;
}
public set NativeAmericanLandsTypeSpecified(value: boolean)
{
this.nativeAmericanLandsTypeFieldSpecified = value;
}
public get NativeAmericanLandsTypeOtherDescription(): string
{
return this.nativeAmericanLandsTypeOtherDescriptionField;
}
public set NativeAmericanLandsTypeOtherDescription(value: string)
{
this.nativeAmericanLandsTypeOtherDescriptionField = value;
}
public get _CommunityLandTrustIndicator(): PROPERTY_CommunityLandTrustIndicator
{
return this._CommunityLandTrustIndicatorField;
}
public set _CommunityLandTrustIndicator(value: PROPERTY_CommunityLandTrustIndicator)
{
this._CommunityLandTrustIndicatorField = value;
}
public get _CommunityLandTrustIndicatorSpecified(): boolean
{
return this._CommunityLandTrustIndicatorFieldSpecified;
}
public set _CommunityLandTrustIndicatorSpecified(value: boolean)
{
this._CommunityLandTrustIndicatorFieldSpecified = value;
}
public get _InclusionaryZoningIndicator(): PROPERTY_InclusionaryZoningIndicator
{
return this._InclusionaryZoningIndicatorField;
}
public set _InclusionaryZoningIndicator(value: PROPERTY_InclusionaryZoningIndicator)
{
this._InclusionaryZoningIndicatorField = value;
}
public get _InclusionaryZoningIndicatorSpecified(): boolean
{
return this._InclusionaryZoningIndicatorFieldSpecified;
}
public set _InclusionaryZoningIndicatorSpecified(value: boolean)
{
this._InclusionaryZoningIndicatorFieldSpecified = value;
}
public get CurrentVacancyStatusType(): PROPERTYCurrentVacancyStatusType
{
return this.currentVacancyStatusTypeField;
}
public set CurrentVacancyStatusType(value: PROPERTYCurrentVacancyStatusType)
{
this.currentVacancyStatusTypeField = value;
}
public get CurrentVacancyStatusTypeSpecified(): boolean
{
return this.currentVacancyStatusTypeFieldSpecified;
}
public set CurrentVacancyStatusTypeSpecified(value: boolean)
{
this.currentVacancyStatusTypeFieldSpecified = value;
}
public get GrossLivingAreaSquareFeetCount(): string
{
return this.grossLivingAreaSquareFeetCountField;
}
public set GrossLivingAreaSquareFeetCount(value: string)
{
this.grossLivingAreaSquareFeetCountField = value;
}
public get ManufacturedHomeManufactureYear(): string
{
return this.manufacturedHomeManufactureYearField;
}
public set ManufacturedHomeManufactureYear(value: string)
{
this.manufacturedHomeManufactureYearField = value;
}
public get _NeighborhoodLocationType(): PROPERTY_NeighborhoodLocationType
{
return this._NeighborhoodLocationTypeField;
}
public set _NeighborhoodLocationType(value: PROPERTY_NeighborhoodLocationType)
{
this._NeighborhoodLocationTypeField = value;
}
public get _NeighborhoodLocationTypeSpecified(): boolean
{
return this._NeighborhoodLocationTypeFieldSpecified;
}
public set _NeighborhoodLocationTypeSpecified(value: boolean)
{
this._NeighborhoodLocationTypeFieldSpecified = value;
}
public get _NeighborhoodLocationTypeOtherDescription(): string
{
return this._NeighborhoodLocationTypeOtherDescriptionField;
}
public set _NeighborhoodLocationTypeOtherDescription(value: string)
{
this._NeighborhoodLocationTypeOtherDescriptionField = value;
}
public get _ZoningCategoryType(): PROPERTY_ZoningCategoryType
{
return this._ZoningCategoryTypeField;
}
public set _ZoningCategoryType(value: PROPERTY_ZoningCategoryType)
{
this._ZoningCategoryTypeField = value;
}
public get _ZoningCategoryTypeSpecified(): boolean
{
return this._ZoningCategoryTypeFieldSpecified;
}
public set _ZoningCategoryTypeSpecified(value: boolean)
{
this._ZoningCategoryTypeFieldSpecified = value;
}
public get _ZoningCategoryTypeOtherDescription(): string
{
return this._ZoningCategoryTypeOtherDescriptionField;
}
public set _ZoningCategoryTypeOtherDescription(value: string)
{
this._ZoningCategoryTypeOtherDescriptionField = value;
}
public get StoriesCount(): string
{
return this.storiesCountField;
}
public set StoriesCount(value: string)
{
this.storiesCountField = value;
}
public get BuildingStatusTypeOtherDescription(): string
{
return this.buildingStatusTypeOtherDescriptionField;
}
public set BuildingStatusTypeOtherDescription(value: string)
{
this.buildingStatusTypeOtherDescriptionField = value;
}
public get _OwnershipType(): PROPERTY_OwnershipType
{
return this._OwnershipTypeField;
}
public set _OwnershipType(value: PROPERTY_OwnershipType)
{
this._OwnershipTypeField = value;
}
public get _OwnershipTypeSpecified(): boolean
{
return this._OwnershipTypeFieldSpecified;
}
public set _OwnershipTypeSpecified(value: boolean)
{
this._OwnershipTypeFieldSpecified = value;
}
public get _OwnershipTypeOtherDescription(): string
{
return this._OwnershipTypeOtherDescriptionField;
}
public set _OwnershipTypeOtherDescription(value: string)
{
this._OwnershipTypeOtherDescriptionField = value;
}
public get _PreviouslyOccupiedIndicator(): PROPERTY_PreviouslyOccupiedIndicator
{
return this._PreviouslyOccupiedIndicatorField;
}
public set _PreviouslyOccupiedIndicator(value: PROPERTY_PreviouslyOccupiedIndicator)
{
this._PreviouslyOccupiedIndicatorField = value;
}
public get _PreviouslyOccupiedIndicatorSpecified(): boolean
{
return this._PreviouslyOccupiedIndicatorFieldSpecified;
}
public set _PreviouslyOccupiedIndicatorSpecified(value: boolean)
{
this._PreviouslyOccupiedIndicatorFieldSpecified = value;
}
public get _ConditionDescription(): string
{
return this._ConditionDescriptionField;
}
public set _ConditionDescription(value: string)
{
this._ConditionDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _LEGAL_DESCRIPTION 
{
private pREPARED_BYField:PREPARED_BY ;
private _TextDescriptionField:string ;
private _TypeField:_LEGAL_DESCRIPTION_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _IDField:string ;
public get PREPARED_BY(): PREPARED_BY
{
return this.pREPARED_BYField;
}
public set PREPARED_BY(value: PREPARED_BY)
{
this.pREPARED_BYField = value;
}
public get _TextDescription(): string
{
return this._TextDescriptionField;
}
public set _TextDescription(value: string)
{
this._TextDescriptionField = value;
}
public get _Type(): _LEGAL_DESCRIPTION_Type
{
return this._TypeField;
}
public set _Type(value: _LEGAL_DESCRIPTION_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PREPARED_BY 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _UnparsedNameField:string ;
private _TitleDescriptionField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _ElectronicRoutingMethodTypeField:PREPARED_BY_ElectronicRoutingMethodType ;
private _ElectronicRoutingMethodTypeFieldSpecified:boolean ;
private _ElectronicRoutingAddressField:string ;
private _TelephoneNumberField:string ;
private _StateFIPSCodeField:string ;
private _CountyFIPSCodeField:string ;
private _CountryCodeField:string ;
private nonPersonEntityIndicatorField:PREPARED_BYNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _ElectronicRoutingMethodType(): PREPARED_BY_ElectronicRoutingMethodType
{
return this._ElectronicRoutingMethodTypeField;
}
public set _ElectronicRoutingMethodType(value: PREPARED_BY_ElectronicRoutingMethodType)
{
this._ElectronicRoutingMethodTypeField = value;
}
public get _ElectronicRoutingMethodTypeSpecified(): boolean
{
return this._ElectronicRoutingMethodTypeFieldSpecified;
}
public set _ElectronicRoutingMethodTypeSpecified(value: boolean)
{
this._ElectronicRoutingMethodTypeFieldSpecified = value;
}
public get _ElectronicRoutingAddress(): string
{
return this._ElectronicRoutingAddressField;
}
public set _ElectronicRoutingAddress(value: string)
{
this._ElectronicRoutingAddressField = value;
}
public get _TelephoneNumber(): string
{
return this._TelephoneNumberField;
}
public set _TelephoneNumber(value: string)
{
this._TelephoneNumberField = value;
}
public get _StateFIPSCode(): string
{
return this._StateFIPSCodeField;
}
public set _StateFIPSCode(value: string)
{
this._StateFIPSCodeField = value;
}
public get _CountyFIPSCode(): string
{
return this._CountyFIPSCodeField;
}
public set _CountyFIPSCode(value: string)
{
this._CountyFIPSCodeField = value;
}
public get _CountryCode(): string
{
return this._CountryCodeField;
}
public set _CountryCode(value: string)
{
this._CountryCodeField = value;
}
public get NonPersonEntityIndicator(): PREPARED_BYNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: PREPARED_BYNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum PREPARED_BY_ElectronicRoutingMethodType {
 FTP,

Other,

EMAIL,

HTTP,

URI,

URL
 }
export enum PREPARED_BYNonPersonEntityIndicator {
 N,

Y
 }
export enum _LEGAL_DESCRIPTION_Type {
 MetesAndBounds,

Other,

LongLegal,

ShortLegal
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PARSED_STREET_ADDRESS 
{
private _ApartmentOrUnitField:string ;
private _DirectionPrefixField:string ;
private _DirectionSuffixField:string ;
private _BuildingNumberField:string ;
private _HouseNumberField:string ;
private _Military_APO_FPOField:string ;
private _PostOfficeBoxField:string ;
private _RuralRouteField:string ;
private _StreetNameField:string ;
private _StreetSuffixField:string ;
private _IDField:string ;
public get _ApartmentOrUnit(): string
{
return this._ApartmentOrUnitField;
}
public set _ApartmentOrUnit(value: string)
{
this._ApartmentOrUnitField = value;
}
public get _DirectionPrefix(): string
{
return this._DirectionPrefixField;
}
public set _DirectionPrefix(value: string)
{
this._DirectionPrefixField = value;
}
public get _DirectionSuffix(): string
{
return this._DirectionSuffixField;
}
public set _DirectionSuffix(value: string)
{
this._DirectionSuffixField = value;
}
public get _BuildingNumber(): string
{
return this._BuildingNumberField;
}
public set _BuildingNumber(value: string)
{
this._BuildingNumberField = value;
}
public get _HouseNumber(): string
{
return this._HouseNumberField;
}
public set _HouseNumber(value: string)
{
this._HouseNumberField = value;
}
public get _Military_APO_FPO(): string
{
return this._Military_APO_FPOField;
}
public set _Military_APO_FPO(value: string)
{
this._Military_APO_FPOField = value;
}
public get _PostOfficeBox(): string
{
return this._PostOfficeBoxField;
}
public set _PostOfficeBox(value: string)
{
this._PostOfficeBoxField = value;
}
public get _RuralRoute(): string
{
return this._RuralRouteField;
}
public set _RuralRoute(value: string)
{
this._RuralRouteField = value;
}
public get _StreetName(): string
{
return this._StreetNameField;
}
public set _StreetName(value: string)
{
this._StreetNameField = value;
}
public get _StreetSuffix(): string
{
return this._StreetSuffixField;
}
public set _StreetSuffix(value: string)
{
this._StreetSuffixField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _VALUATION 
{
private aPPRAISERField:APPRAISER[] ;
private _MethodTypeField:_VALUATION_MethodType ;
private _MethodTypeFieldSpecified:boolean ;
private _MethodTypeOtherDescriptionField:string ;
private _IDField:string ;
private appraisalFormTypeField:_VALUATIONAppraisalFormType ;
private appraisalFormTypeFieldSpecified:boolean ;
private appraisalFormTypeOtherDescriptionField:string ;
private appraisalInspectionTypeField:_VALUATIONAppraisalInspectionType ;
private appraisalInspectionTypeFieldSpecified:boolean ;
private appraisalInspectionTypeOtherDescriptionField:string ;
private appraisalFormVersionIdentifierField:string ;
public get APPRAISER(): APPRAISER[]
{
return this.aPPRAISERField;
}
public set APPRAISER(value: APPRAISER[])
{
this.aPPRAISERField = value;
}
public get _MethodType(): _VALUATION_MethodType
{
return this._MethodTypeField;
}
public set _MethodType(value: _VALUATION_MethodType)
{
this._MethodTypeField = value;
}
public get _MethodTypeSpecified(): boolean
{
return this._MethodTypeFieldSpecified;
}
public set _MethodTypeSpecified(value: boolean)
{
this._MethodTypeFieldSpecified = value;
}
public get _MethodTypeOtherDescription(): string
{
return this._MethodTypeOtherDescriptionField;
}
public set _MethodTypeOtherDescription(value: string)
{
this._MethodTypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get AppraisalFormType(): _VALUATIONAppraisalFormType
{
return this.appraisalFormTypeField;
}
public set AppraisalFormType(value: _VALUATIONAppraisalFormType)
{
this.appraisalFormTypeField = value;
}
public get AppraisalFormTypeSpecified(): boolean
{
return this.appraisalFormTypeFieldSpecified;
}
public set AppraisalFormTypeSpecified(value: boolean)
{
this.appraisalFormTypeFieldSpecified = value;
}
public get AppraisalFormTypeOtherDescription(): string
{
return this.appraisalFormTypeOtherDescriptionField;
}
public set AppraisalFormTypeOtherDescription(value: string)
{
this.appraisalFormTypeOtherDescriptionField = value;
}
public get AppraisalInspectionType(): _VALUATIONAppraisalInspectionType
{
return this.appraisalInspectionTypeField;
}
public set AppraisalInspectionType(value: _VALUATIONAppraisalInspectionType)
{
this.appraisalInspectionTypeField = value;
}
public get AppraisalInspectionTypeSpecified(): boolean
{
return this.appraisalInspectionTypeFieldSpecified;
}
public set AppraisalInspectionTypeSpecified(value: boolean)
{
this.appraisalInspectionTypeFieldSpecified = value;
}
public get AppraisalInspectionTypeOtherDescription(): string
{
return this.appraisalInspectionTypeOtherDescriptionField;
}
public set AppraisalInspectionTypeOtherDescription(value: string)
{
this.appraisalInspectionTypeOtherDescriptionField = value;
}
public get AppraisalFormVersionIdentifier(): string
{
return this.appraisalFormVersionIdentifierField;
}
public set AppraisalFormVersionIdentifier(value: string)
{
this.appraisalFormVersionIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class APPRAISER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _NameField:string ;
private _CompanyNameField:string ;
private _LicenseIdentifierField:string ;
private _LicenseStateField:string ;
private _IDField:string ;
private _CompanyLicenseIdentifierField:string ;
private _CompanyLicenseStateField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _CompanyName(): string
{
return this._CompanyNameField;
}
public set _CompanyName(value: string)
{
this._CompanyNameField = value;
}
public get _LicenseIdentifier(): string
{
return this._LicenseIdentifierField;
}
public set _LicenseIdentifier(value: string)
{
this._LicenseIdentifierField = value;
}
public get _LicenseState(): string
{
return this._LicenseStateField;
}
public set _LicenseState(value: string)
{
this._LicenseStateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _CompanyLicenseIdentifier(): string
{
return this._CompanyLicenseIdentifierField;
}
public set _CompanyLicenseIdentifier(value: string)
{
this._CompanyLicenseIdentifierField = value;
}
public get _CompanyLicenseState(): string
{
return this._CompanyLicenseStateField;
}
public set _CompanyLicenseState(value: string)
{
this._CompanyLicenseStateField = value;
} 
}
export enum _VALUATION_MethodType {
 FNM2095Exterior,

FNM2095InteriorAndExterior,

FRE2070Interior,

None,

AutomatedValuationModel,

Other,

DriveBy,

FNM1025,

FullAppraisal,

BrokerPriceOpinion,

TaxValuation,

FNM1073,

Form261805,

PriorAppraisalUsed,

FNM2065,

EmployeeRelocationCouncil2001,

FRE2070Exterior,

FNM2075,

FNM2055InteriorAndExterior,

Form268712,

FNM2055Exterior,

FNM1004
 }
export enum _VALUATIONAppraisalFormType {
 ERC2001,

FNM1004CFRE70B,

FNM1025FRE72,

FNM1073FRE465,

FNM2090,

VacantLand,

FNM2095,

FNM2055FRE2055,

FNM2000AFRE1072,

FNM1004BFRE439,

Other,

FRE2070,

FNM1075FRE466,

MobileHome,

FNM2065,

FNM1004FRE70,

FNM1004DFRE442,

FNM2075,

FNM2000FRE1032
 }
export enum _VALUATIONAppraisalInspectionType {
 None,

ExteriorAndInterior,

Other,

ExteriorOnly
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _DETAILS 
{
private condominiumIndicatorField:_DETAILSCondominiumIndicator ;
private condominiumIndicatorFieldSpecified:boolean ;
private condominiumPUDDeclarationsDescriptionField:string ;
private nFIPFloodZoneIdentifierField:string ;
private judicialDistrictNameField:string ;
private judicialDivisionNameField:string ;
private manufacturedHomeIndicatorField:_DETAILSManufacturedHomeIndicator ;
private manufacturedHomeIndicatorFieldSpecified:boolean ;
private oneToFourFamilyIndicatorField:_DETAILSOneToFourFamilyIndicator ;
private oneToFourFamilyIndicatorFieldSpecified:boolean ;
private projectNameField:string ;
private recordingJurisdictionNameField:string ;
private recordingJurisdictionTypeField:_DETAILSRecordingJurisdictionType ;
private recordingJurisdictionTypeFieldSpecified:boolean ;
private recordingJurisdictionTypeOtherDescriptionField:string ;
private propertyUnincorporatedAreaNameField:string ;
private projectTotalSharesCountField:string ;
private nFIPCommunityIdentifierField:string ;
private nFIPCommunityNameField:string ;
private nFIPCommunityParticipationStatusTypeField:_DETAILSNFIPCommunityParticipationStatusType ;
private nFIPCommunityParticipationStatusTypeFieldSpecified:boolean ;
private nFIPCommunityParticipationStatusTypeOtherDescriptionField:string ;
private _IDField:string ;
public get CondominiumIndicator(): _DETAILSCondominiumIndicator
{
return this.condominiumIndicatorField;
}
public set CondominiumIndicator(value: _DETAILSCondominiumIndicator)
{
this.condominiumIndicatorField = value;
}
public get CondominiumIndicatorSpecified(): boolean
{
return this.condominiumIndicatorFieldSpecified;
}
public set CondominiumIndicatorSpecified(value: boolean)
{
this.condominiumIndicatorFieldSpecified = value;
}
public get CondominiumPUDDeclarationsDescription(): string
{
return this.condominiumPUDDeclarationsDescriptionField;
}
public set CondominiumPUDDeclarationsDescription(value: string)
{
this.condominiumPUDDeclarationsDescriptionField = value;
}
public get NFIPFloodZoneIdentifier(): string
{
return this.nFIPFloodZoneIdentifierField;
}
public set NFIPFloodZoneIdentifier(value: string)
{
this.nFIPFloodZoneIdentifierField = value;
}
public get JudicialDistrictName(): string
{
return this.judicialDistrictNameField;
}
public set JudicialDistrictName(value: string)
{
this.judicialDistrictNameField = value;
}
public get JudicialDivisionName(): string
{
return this.judicialDivisionNameField;
}
public set JudicialDivisionName(value: string)
{
this.judicialDivisionNameField = value;
}
public get ManufacturedHomeIndicator(): _DETAILSManufacturedHomeIndicator
{
return this.manufacturedHomeIndicatorField;
}
public set ManufacturedHomeIndicator(value: _DETAILSManufacturedHomeIndicator)
{
this.manufacturedHomeIndicatorField = value;
}
public get ManufacturedHomeIndicatorSpecified(): boolean
{
return this.manufacturedHomeIndicatorFieldSpecified;
}
public set ManufacturedHomeIndicatorSpecified(value: boolean)
{
this.manufacturedHomeIndicatorFieldSpecified = value;
}
public get OneToFourFamilyIndicator(): _DETAILSOneToFourFamilyIndicator
{
return this.oneToFourFamilyIndicatorField;
}
public set OneToFourFamilyIndicator(value: _DETAILSOneToFourFamilyIndicator)
{
this.oneToFourFamilyIndicatorField = value;
}
public get OneToFourFamilyIndicatorSpecified(): boolean
{
return this.oneToFourFamilyIndicatorFieldSpecified;
}
public set OneToFourFamilyIndicatorSpecified(value: boolean)
{
this.oneToFourFamilyIndicatorFieldSpecified = value;
}
public get ProjectName(): string
{
return this.projectNameField;
}
public set ProjectName(value: string)
{
this.projectNameField = value;
}
public get RecordingJurisdictionName(): string
{
return this.recordingJurisdictionNameField;
}
public set RecordingJurisdictionName(value: string)
{
this.recordingJurisdictionNameField = value;
}
public get RecordingJurisdictionType(): _DETAILSRecordingJurisdictionType
{
return this.recordingJurisdictionTypeField;
}
public set RecordingJurisdictionType(value: _DETAILSRecordingJurisdictionType)
{
this.recordingJurisdictionTypeField = value;
}
public get RecordingJurisdictionTypeSpecified(): boolean
{
return this.recordingJurisdictionTypeFieldSpecified;
}
public set RecordingJurisdictionTypeSpecified(value: boolean)
{
this.recordingJurisdictionTypeFieldSpecified = value;
}
public get RecordingJurisdictionTypeOtherDescription(): string
{
return this.recordingJurisdictionTypeOtherDescriptionField;
}
public set RecordingJurisdictionTypeOtherDescription(value: string)
{
this.recordingJurisdictionTypeOtherDescriptionField = value;
}
public get PropertyUnincorporatedAreaName(): string
{
return this.propertyUnincorporatedAreaNameField;
}
public set PropertyUnincorporatedAreaName(value: string)
{
this.propertyUnincorporatedAreaNameField = value;
}
public get ProjectTotalSharesCount(): string
{
return this.projectTotalSharesCountField;
}
public set ProjectTotalSharesCount(value: string)
{
this.projectTotalSharesCountField = value;
}
public get NFIPCommunityIdentifier(): string
{
return this.nFIPCommunityIdentifierField;
}
public set NFIPCommunityIdentifier(value: string)
{
this.nFIPCommunityIdentifierField = value;
}
public get NFIPCommunityName(): string
{
return this.nFIPCommunityNameField;
}
public set NFIPCommunityName(value: string)
{
this.nFIPCommunityNameField = value;
}
public get NFIPCommunityParticipationStatusType(): _DETAILSNFIPCommunityParticipationStatusType
{
return this.nFIPCommunityParticipationStatusTypeField;
}
public set NFIPCommunityParticipationStatusType(value: _DETAILSNFIPCommunityParticipationStatusType)
{
this.nFIPCommunityParticipationStatusTypeField = value;
}
public get NFIPCommunityParticipationStatusTypeSpecified(): boolean
{
return this.nFIPCommunityParticipationStatusTypeFieldSpecified;
}
public set NFIPCommunityParticipationStatusTypeSpecified(value: boolean)
{
this.nFIPCommunityParticipationStatusTypeFieldSpecified = value;
}
public get NFIPCommunityParticipationStatusTypeOtherDescription(): string
{
return this.nFIPCommunityParticipationStatusTypeOtherDescriptionField;
}
public set NFIPCommunityParticipationStatusTypeOtherDescription(value: string)
{
this.nFIPCommunityParticipationStatusTypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _DETAILSCondominiumIndicator {
 N,

Y
 }
export enum _DETAILSManufacturedHomeIndicator {
 N,

Y
 }
export enum _DETAILSOneToFourFamilyIndicator {
 N,

Y
 }
export enum _DETAILSRecordingJurisdictionType {
 County,

Other,

Parish
 }
export enum _DETAILSNFIPCommunityParticipationStatusType {
 Probation,

Unknown,

Regular,

Other,

Emergency,

Suspended,

NonParticipating
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class HOMEOWNERS_ASSOCIATION 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _NameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PROJECT 
{
private _IDField:string ;
private livingUnitCountField:string ;
private _ClassificationTypeField:PROJECT_ClassificationType ;
private _ClassificationTypeFieldSpecified:boolean ;
private _ClassificationTypeOtherDescriptionField:string ;
private _DesignTypeField:PROJECT_DesignType ;
private _DesignTypeFieldSpecified:boolean ;
private _DesignTypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get LivingUnitCount(): string
{
return this.livingUnitCountField;
}
public set LivingUnitCount(value: string)
{
this.livingUnitCountField = value;
}
public get _ClassificationType(): PROJECT_ClassificationType
{
return this._ClassificationTypeField;
}
public set _ClassificationType(value: PROJECT_ClassificationType)
{
this._ClassificationTypeField = value;
}
public get _ClassificationTypeSpecified(): boolean
{
return this._ClassificationTypeFieldSpecified;
}
public set _ClassificationTypeSpecified(value: boolean)
{
this._ClassificationTypeFieldSpecified = value;
}
public get _ClassificationTypeOtherDescription(): string
{
return this._ClassificationTypeOtherDescriptionField;
}
public set _ClassificationTypeOtherDescription(value: string)
{
this._ClassificationTypeOtherDescriptionField = value;
}
public get _DesignType(): PROJECT_DesignType
{
return this._DesignTypeField;
}
public set _DesignType(value: PROJECT_DesignType)
{
this._DesignTypeField = value;
}
public get _DesignTypeSpecified(): boolean
{
return this._DesignTypeFieldSpecified;
}
public set _DesignTypeSpecified(value: boolean)
{
this._DesignTypeFieldSpecified = value;
}
public get _DesignTypeOtherDescription(): string
{
return this._DesignTypeOtherDescriptionField;
}
public set _DesignTypeOtherDescription(value: string)
{
this._DesignTypeOtherDescriptionField = value;
} 
}
export enum PROJECT_ClassificationType {
 Condominium,

Cooperative,

Other,

PUD
 }
export enum PROJECT_DesignType {
 Attached,

TownhouseRowhouse,

GardenProject,

Other,

HighriseProject,

Detached,

MidriseProject
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CATEGORY 
{
private _IDField:string ;
private _TypeField:_CATEGORY_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Type(): _CATEGORY_Type
{
return this._TypeField;
}
public set _Type(value: _CATEGORY_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
} 
}
export enum _CATEGORY_Type {
 CommercialResidential,

Modular,

Church,

Attached,

LandAndLots,

Farm,

TownhouseRowhouse,

Other,

HighRise,

ManufacturedMultiWide,

MobileHome,

SiteBuilt,

ManufacturedSingleWide,

Detached,

LowRise,

Manufactured,

Stacked,

CommercialNonResidential
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _DWELLING_UNIT 
{
private _IDField:string ;
private bedroomCountField:string ;
private _EligibleRentAmountField:string ;
private _LeaseProvidedIndicatorField:_DWELLING_UNIT_LeaseProvidedIndicator ;
private _LeaseProvidedIndicatorFieldSpecified:boolean ;
private propertyRehabilitationCompletionDateField:string ;
private bathroomCountDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get BedroomCount(): string
{
return this.bedroomCountField;
}
public set BedroomCount(value: string)
{
this.bedroomCountField = value;
}
public get _EligibleRentAmount(): string
{
return this._EligibleRentAmountField;
}
public set _EligibleRentAmount(value: string)
{
this._EligibleRentAmountField = value;
}
public get _LeaseProvidedIndicator(): _DWELLING_UNIT_LeaseProvidedIndicator
{
return this._LeaseProvidedIndicatorField;
}
public set _LeaseProvidedIndicator(value: _DWELLING_UNIT_LeaseProvidedIndicator)
{
this._LeaseProvidedIndicatorField = value;
}
public get _LeaseProvidedIndicatorSpecified(): boolean
{
return this._LeaseProvidedIndicatorFieldSpecified;
}
public set _LeaseProvidedIndicatorSpecified(value: boolean)
{
this._LeaseProvidedIndicatorFieldSpecified = value;
}
public get PropertyRehabilitationCompletionDate(): string
{
return this.propertyRehabilitationCompletionDateField;
}
public set PropertyRehabilitationCompletionDate(value: string)
{
this.propertyRehabilitationCompletionDateField = value;
}
public get BathroomCountDescription(): string
{
return this.bathroomCountDescriptionField;
}
public set BathroomCountDescription(value: string)
{
this.bathroomCountDescriptionField = value;
} 
}
export enum _DWELLING_UNIT_LeaseProvidedIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MANUFACTURED_HOME 
{
private _IDField:string ;
private _AttachedToFoundationIndicatorField:MANUFACTURED_HOME_AttachedToFoundationIndicator ;
private _AttachedToFoundationIndicatorFieldSpecified:boolean ;
private _HUDCertificationLabelIdentifierField:string ;
private lengthFeetCountField:string ;
private _MakeIdentifierField:string ;
private _ModelIdentifierField:string ;
private _SerialNumberIdentifierField:string ;
private _WidthTypeField:MANUFACTURED_HOME_WidthType ;
private _WidthTypeFieldSpecified:boolean ;
private widthFeetCountField:string ;
private _ConditionDescriptionTypeField:MANUFACTURED_HOME_ConditionDescriptionType ;
private _ConditionDescriptionTypeFieldSpecified:boolean ;
private _ConditionDescriptionTypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _AttachedToFoundationIndicator(): MANUFACTURED_HOME_AttachedToFoundationIndicator
{
return this._AttachedToFoundationIndicatorField;
}
public set _AttachedToFoundationIndicator(value: MANUFACTURED_HOME_AttachedToFoundationIndicator)
{
this._AttachedToFoundationIndicatorField = value;
}
public get _AttachedToFoundationIndicatorSpecified(): boolean
{
return this._AttachedToFoundationIndicatorFieldSpecified;
}
public set _AttachedToFoundationIndicatorSpecified(value: boolean)
{
this._AttachedToFoundationIndicatorFieldSpecified = value;
}
public get _HUDCertificationLabelIdentifier(): string
{
return this._HUDCertificationLabelIdentifierField;
}
public set _HUDCertificationLabelIdentifier(value: string)
{
this._HUDCertificationLabelIdentifierField = value;
}
public get LengthFeetCount(): string
{
return this.lengthFeetCountField;
}
public set LengthFeetCount(value: string)
{
this.lengthFeetCountField = value;
}
public get _MakeIdentifier(): string
{
return this._MakeIdentifierField;
}
public set _MakeIdentifier(value: string)
{
this._MakeIdentifierField = value;
}
public get _ModelIdentifier(): string
{
return this._ModelIdentifierField;
}
public set _ModelIdentifier(value: string)
{
this._ModelIdentifierField = value;
}
public get _SerialNumberIdentifier(): string
{
return this._SerialNumberIdentifierField;
}
public set _SerialNumberIdentifier(value: string)
{
this._SerialNumberIdentifierField = value;
}
public get _WidthType(): MANUFACTURED_HOME_WidthType
{
return this._WidthTypeField;
}
public set _WidthType(value: MANUFACTURED_HOME_WidthType)
{
this._WidthTypeField = value;
}
public get _WidthTypeSpecified(): boolean
{
return this._WidthTypeFieldSpecified;
}
public set _WidthTypeSpecified(value: boolean)
{
this._WidthTypeFieldSpecified = value;
}
public get WidthFeetCount(): string
{
return this.widthFeetCountField;
}
public set WidthFeetCount(value: string)
{
this.widthFeetCountField = value;
}
public get _ConditionDescriptionType(): MANUFACTURED_HOME_ConditionDescriptionType
{
return this._ConditionDescriptionTypeField;
}
public set _ConditionDescriptionType(value: MANUFACTURED_HOME_ConditionDescriptionType)
{
this._ConditionDescriptionTypeField = value;
}
public get _ConditionDescriptionTypeSpecified(): boolean
{
return this._ConditionDescriptionTypeFieldSpecified;
}
public set _ConditionDescriptionTypeSpecified(value: boolean)
{
this._ConditionDescriptionTypeFieldSpecified = value;
}
public get _ConditionDescriptionTypeOtherDescription(): string
{
return this._ConditionDescriptionTypeOtherDescriptionField;
}
public set _ConditionDescriptionTypeOtherDescription(value: string)
{
this._ConditionDescriptionTypeOtherDescriptionField = value;
} 
}
export enum MANUFACTURED_HOME_AttachedToFoundationIndicator {
 N,

Y
 }
export enum MANUFACTURED_HOME_WidthType {
 SingleWide,

MultiWide
 }
export enum MANUFACTURED_HOME_ConditionDescriptionType {
 Used,

Other,

New
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PLATTED_LAND 
{
private _IDField:string ;
private _AdditionalParcelIdentifierField:string ;
private _AdditionalParcelDescriptionField:string ;
private _AppurtenanceDescriptionField:string ;
private _AppurtenanceIdentifierField:string ;
private _BuildingIdentifierField:string ;
private _PlatCodeIdentifierField:string ;
private _PlatInstrumentIdentifierField:string ;
private _SequenceIdentifierField:string ;
private _TypeField:PLATTED_LAND_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _UnitNumberIdentifierField:string ;
private propertyLotIdentifierField:string ;
private propertyBlockIdentifierField:string ;
private propertySectionIdentifierField:string ;
private propertySubdivisionIdentifierField:string ;
private propertyTractIdentifierField:string ;
private platNameField:string ;
private recordedDocumentBookField:string ;
private recordedDocumentPageField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _AdditionalParcelIdentifier(): string
{
return this._AdditionalParcelIdentifierField;
}
public set _AdditionalParcelIdentifier(value: string)
{
this._AdditionalParcelIdentifierField = value;
}
public get _AdditionalParcelDescription(): string
{
return this._AdditionalParcelDescriptionField;
}
public set _AdditionalParcelDescription(value: string)
{
this._AdditionalParcelDescriptionField = value;
}
public get _AppurtenanceDescription(): string
{
return this._AppurtenanceDescriptionField;
}
public set _AppurtenanceDescription(value: string)
{
this._AppurtenanceDescriptionField = value;
}
public get _AppurtenanceIdentifier(): string
{
return this._AppurtenanceIdentifierField;
}
public set _AppurtenanceIdentifier(value: string)
{
this._AppurtenanceIdentifierField = value;
}
public get _BuildingIdentifier(): string
{
return this._BuildingIdentifierField;
}
public set _BuildingIdentifier(value: string)
{
this._BuildingIdentifierField = value;
}
public get _PlatCodeIdentifier(): string
{
return this._PlatCodeIdentifierField;
}
public set _PlatCodeIdentifier(value: string)
{
this._PlatCodeIdentifierField = value;
}
public get _PlatInstrumentIdentifier(): string
{
return this._PlatInstrumentIdentifierField;
}
public set _PlatInstrumentIdentifier(value: string)
{
this._PlatInstrumentIdentifierField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _Type(): PLATTED_LAND_Type
{
return this._TypeField;
}
public set _Type(value: PLATTED_LAND_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _UnitNumberIdentifier(): string
{
return this._UnitNumberIdentifierField;
}
public set _UnitNumberIdentifier(value: string)
{
this._UnitNumberIdentifierField = value;
}
public get PropertyLotIdentifier(): string
{
return this.propertyLotIdentifierField;
}
public set PropertyLotIdentifier(value: string)
{
this.propertyLotIdentifierField = value;
}
public get PropertyBlockIdentifier(): string
{
return this.propertyBlockIdentifierField;
}
public set PropertyBlockIdentifier(value: string)
{
this.propertyBlockIdentifierField = value;
}
public get PropertySectionIdentifier(): string
{
return this.propertySectionIdentifierField;
}
public set PropertySectionIdentifier(value: string)
{
this.propertySectionIdentifierField = value;
}
public get PropertySubdivisionIdentifier(): string
{
return this.propertySubdivisionIdentifierField;
}
public set PropertySubdivisionIdentifier(value: string)
{
this.propertySubdivisionIdentifierField = value;
}
public get PropertyTractIdentifier(): string
{
return this.propertyTractIdentifierField;
}
public set PropertyTractIdentifier(value: string)
{
this.propertyTractIdentifierField = value;
}
public get PlatName(): string
{
return this.platNameField;
}
public set PlatName(value: string)
{
this.platNameField = value;
}
public get RecordedDocumentBook(): string
{
return this.recordedDocumentBookField;
}
public set RecordedDocumentBook(value: string)
{
this.recordedDocumentBookField = value;
}
public get RecordedDocumentPage(): string
{
return this.recordedDocumentPageField;
}
public set RecordedDocumentPage(value: string)
{
this.recordedDocumentPageField = value;
} 
}
export enum PLATTED_LAND_Type {
 Condominium,

Subdivision,

Other,

Timeshare
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class UNPLATTED_LAND 
{
private _IDField:string ;
private _AbstractNumberIdentifierField:string ;
private _BaseIdentifierField:string ;
private _LandGrantIdentifierField:string ;
private _MeridianIdentifierField:string ;
private _MetesAndBoundsRemainingDescriptionField:string ;
private _QuarterSectionIdentifierField:string ;
private _SequenceIdentifierField:string ;
private _DescriptionTypeField:UNPLATTED_LAND_DescriptionType ;
private _DescriptionTypeFieldSpecified:boolean ;
private _DescriptionTypeOtherDescriptionField:string ;
private propertyRangeIdentifierField:string ;
private propertySectionIdentifierField:string ;
private propertyTownshipIdentifierField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _AbstractNumberIdentifier(): string
{
return this._AbstractNumberIdentifierField;
}
public set _AbstractNumberIdentifier(value: string)
{
this._AbstractNumberIdentifierField = value;
}
public get _BaseIdentifier(): string
{
return this._BaseIdentifierField;
}
public set _BaseIdentifier(value: string)
{
this._BaseIdentifierField = value;
}
public get _LandGrantIdentifier(): string
{
return this._LandGrantIdentifierField;
}
public set _LandGrantIdentifier(value: string)
{
this._LandGrantIdentifierField = value;
}
public get _MeridianIdentifier(): string
{
return this._MeridianIdentifierField;
}
public set _MeridianIdentifier(value: string)
{
this._MeridianIdentifierField = value;
}
public get _MetesAndBoundsRemainingDescription(): string
{
return this._MetesAndBoundsRemainingDescriptionField;
}
public set _MetesAndBoundsRemainingDescription(value: string)
{
this._MetesAndBoundsRemainingDescriptionField = value;
}
public get _QuarterSectionIdentifier(): string
{
return this._QuarterSectionIdentifierField;
}
public set _QuarterSectionIdentifier(value: string)
{
this._QuarterSectionIdentifierField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _DescriptionType(): UNPLATTED_LAND_DescriptionType
{
return this._DescriptionTypeField;
}
public set _DescriptionType(value: UNPLATTED_LAND_DescriptionType)
{
this._DescriptionTypeField = value;
}
public get _DescriptionTypeSpecified(): boolean
{
return this._DescriptionTypeFieldSpecified;
}
public set _DescriptionTypeSpecified(value: boolean)
{
this._DescriptionTypeFieldSpecified = value;
}
public get _DescriptionTypeOtherDescription(): string
{
return this._DescriptionTypeOtherDescriptionField;
}
public set _DescriptionTypeOtherDescription(value: string)
{
this._DescriptionTypeOtherDescriptionField = value;
}
public get PropertyRangeIdentifier(): string
{
return this.propertyRangeIdentifierField;
}
public set PropertyRangeIdentifier(value: string)
{
this.propertyRangeIdentifierField = value;
}
public get PropertySectionIdentifier(): string
{
return this.propertySectionIdentifierField;
}
public set PropertySectionIdentifier(value: string)
{
this.propertySectionIdentifierField = value;
}
public get PropertyTownshipIdentifier(): string
{
return this.propertyTownshipIdentifierField;
}
public set PropertyTownshipIdentifier(value: string)
{
this.propertyTownshipIdentifierField = value;
} 
}
export enum UNPLATTED_LAND_DescriptionType {
 NativeAmericanLandIdentifier,

MetesAndBounds,

GovernmentSurvey,

Other,

LandGrant,

TownshipIdentifier,

RancheroIdentifier
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class FLOOD_DETERMINATION 
{
private floodDeterminationIDField:string ;
private floodCertificationIdentifierField:string ;
private floodPartialIndicatorField:FLOOD_DETERMINATIONFloodPartialIndicator ;
private floodPartialIndicatorFieldSpecified:boolean ;
private nFIPCommunityIdentifierField:string ;
private nFIPCommunityNameField:string ;
private nFIPCommunityParticipationStatusTypeField:FLOOD_DETERMINATIONNFIPCommunityParticipationStatusType ;
private nFIPCommunityParticipationStatusTypeFieldSpecified:boolean ;
private nFIPCommunityParticipationStatusTypeOtherDescriptionField:string ;
private nFIPFloodZoneIdentifierField:string ;
private nFIPMapIdentifierField:string ;
private nFIPMapPanelDateField:string ;
private nFIPMapPanelIdentifierField:string ;
private specialFloodHazardAreaIndicatorField:FLOOD_DETERMINATIONSpecialFloodHazardAreaIndicator ;
private specialFloodHazardAreaIndicatorFieldSpecified:boolean ;
private floodDeterminationLifeofLoanIndicatorField:FLOOD_DETERMINATIONFloodDeterminationLifeofLoanIndicator ;
private floodDeterminationLifeofLoanIndicatorFieldSpecified:boolean ;
private floodProductCertifyDateField:string ;
private floodContractFeeAmountField:string ;
public get FloodDeterminationID(): string
{
return this.floodDeterminationIDField;
}
public set FloodDeterminationID(value: string)
{
this.floodDeterminationIDField = value;
}
public get FloodCertificationIdentifier(): string
{
return this.floodCertificationIdentifierField;
}
public set FloodCertificationIdentifier(value: string)
{
this.floodCertificationIdentifierField = value;
}
public get FloodPartialIndicator(): FLOOD_DETERMINATIONFloodPartialIndicator
{
return this.floodPartialIndicatorField;
}
public set FloodPartialIndicator(value: FLOOD_DETERMINATIONFloodPartialIndicator)
{
this.floodPartialIndicatorField = value;
}
public get FloodPartialIndicatorSpecified(): boolean
{
return this.floodPartialIndicatorFieldSpecified;
}
public set FloodPartialIndicatorSpecified(value: boolean)
{
this.floodPartialIndicatorFieldSpecified = value;
}
public get NFIPCommunityIdentifier(): string
{
return this.nFIPCommunityIdentifierField;
}
public set NFIPCommunityIdentifier(value: string)
{
this.nFIPCommunityIdentifierField = value;
}
public get NFIPCommunityName(): string
{
return this.nFIPCommunityNameField;
}
public set NFIPCommunityName(value: string)
{
this.nFIPCommunityNameField = value;
}
public get NFIPCommunityParticipationStatusType(): FLOOD_DETERMINATIONNFIPCommunityParticipationStatusType
{
return this.nFIPCommunityParticipationStatusTypeField;
}
public set NFIPCommunityParticipationStatusType(value: FLOOD_DETERMINATIONNFIPCommunityParticipationStatusType)
{
this.nFIPCommunityParticipationStatusTypeField = value;
}
public get NFIPCommunityParticipationStatusTypeSpecified(): boolean
{
return this.nFIPCommunityParticipationStatusTypeFieldSpecified;
}
public set NFIPCommunityParticipationStatusTypeSpecified(value: boolean)
{
this.nFIPCommunityParticipationStatusTypeFieldSpecified = value;
}
public get NFIPCommunityParticipationStatusTypeOtherDescription(): string
{
return this.nFIPCommunityParticipationStatusTypeOtherDescriptionField;
}
public set NFIPCommunityParticipationStatusTypeOtherDescription(value: string)
{
this.nFIPCommunityParticipationStatusTypeOtherDescriptionField = value;
}
public get NFIPFloodZoneIdentifier(): string
{
return this.nFIPFloodZoneIdentifierField;
}
public set NFIPFloodZoneIdentifier(value: string)
{
this.nFIPFloodZoneIdentifierField = value;
}
public get NFIPMapIdentifier(): string
{
return this.nFIPMapIdentifierField;
}
public set NFIPMapIdentifier(value: string)
{
this.nFIPMapIdentifierField = value;
}
public get NFIPMapPanelDate(): string
{
return this.nFIPMapPanelDateField;
}
public set NFIPMapPanelDate(value: string)
{
this.nFIPMapPanelDateField = value;
}
public get NFIPMapPanelIdentifier(): string
{
return this.nFIPMapPanelIdentifierField;
}
public set NFIPMapPanelIdentifier(value: string)
{
this.nFIPMapPanelIdentifierField = value;
}
public get SpecialFloodHazardAreaIndicator(): FLOOD_DETERMINATIONSpecialFloodHazardAreaIndicator
{
return this.specialFloodHazardAreaIndicatorField;
}
public set SpecialFloodHazardAreaIndicator(value: FLOOD_DETERMINATIONSpecialFloodHazardAreaIndicator)
{
this.specialFloodHazardAreaIndicatorField = value;
}
public get SpecialFloodHazardAreaIndicatorSpecified(): boolean
{
return this.specialFloodHazardAreaIndicatorFieldSpecified;
}
public set SpecialFloodHazardAreaIndicatorSpecified(value: boolean)
{
this.specialFloodHazardAreaIndicatorFieldSpecified = value;
}
public get FloodDeterminationLifeofLoanIndicator(): FLOOD_DETERMINATIONFloodDeterminationLifeofLoanIndicator
{
return this.floodDeterminationLifeofLoanIndicatorField;
}
public set FloodDeterminationLifeofLoanIndicator(value: FLOOD_DETERMINATIONFloodDeterminationLifeofLoanIndicator)
{
this.floodDeterminationLifeofLoanIndicatorField = value;
}
public get FloodDeterminationLifeofLoanIndicatorSpecified(): boolean
{
return this.floodDeterminationLifeofLoanIndicatorFieldSpecified;
}
public set FloodDeterminationLifeofLoanIndicatorSpecified(value: boolean)
{
this.floodDeterminationLifeofLoanIndicatorFieldSpecified = value;
}
public get FloodProductCertifyDate(): string
{
return this.floodProductCertifyDateField;
}
public set FloodProductCertifyDate(value: string)
{
this.floodProductCertifyDateField = value;
}
public get FloodContractFeeAmount(): string
{
return this.floodContractFeeAmountField;
}
public set FloodContractFeeAmount(value: string)
{
this.floodContractFeeAmountField = value;
} 
}
export enum FLOOD_DETERMINATIONFloodPartialIndicator {
 N,

Y
 }
export enum FLOOD_DETERMINATIONNFIPCommunityParticipationStatusType {
 Probation,

Unknown,

Regular,

Other,

Emergency,

Suspended,

NonParticipating
 }
export enum FLOOD_DETERMINATIONSpecialFloodHazardAreaIndicator {
 N,

Y
 }
export enum FLOOD_DETERMINATIONFloodDeterminationLifeofLoanIndicator {
 N,

Y
 }
export enum PROPERTYBuildingStatusType {
 Existing,

SubjectToAlteration,

Other,

SubstantiallyRehabilitated,

SubjectToAlterationImprovementRepairAndRehabilitation,

Complete,

Proposed,

UnderConstruction,

Incomplete
 }
export enum PROPERTYPlannedUnitDevelopmentIndicator {
 N,

Y
 }
export enum PROPERTYUniqueDwellingType {
 EarthShelterHome,

Other,

Houseboat,

GeodesicDome
 }
export enum PROPERTYNativeAmericanLandsType {
 Other,

HawaiianHomeLands,

AllottedTribalLand
 }
export enum PROPERTY_CommunityLandTrustIndicator {
 N,

Y
 }
export enum PROPERTY_InclusionaryZoningIndicator {
 N,

Y
 }
export enum PROPERTYCurrentVacancyStatusType {
 Unknown,

Occupied,

Vacant
 }
export enum PROPERTY_NeighborhoodLocationType {
 Urban,

Rural,

Other,

Suburban
 }
export enum PROPERTY_ZoningCategoryType {
 NonResidentialGrandfatheredResidential,

Agricultural,

Other,

Industrial,

Residential,

Commercial,

NoZoning
 }
export enum PROPERTY_OwnershipType {
 Condominium,

Cooperative,

Other,

Timeshare,

CondominiumHotel
 }
export enum PROPERTY_PreviouslyOccupiedIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PROPOSED_HOUSING_EXPENSE 
{
private housingExpenseTypeField:PROPOSED_HOUSING_EXPENSEHousingExpenseType ;
private housingExpenseTypeFieldSpecified:boolean ;
private _PaymentAmountField:string ;
private _IDField:string ;
private housingExpenseTypeOtherDescriptionField:string ;
public get HousingExpenseType(): PROPOSED_HOUSING_EXPENSEHousingExpenseType
{
return this.housingExpenseTypeField;
}
public set HousingExpenseType(value: PROPOSED_HOUSING_EXPENSEHousingExpenseType)
{
this.housingExpenseTypeField = value;
}
public get HousingExpenseTypeSpecified(): boolean
{
return this.housingExpenseTypeFieldSpecified;
}
public set HousingExpenseTypeSpecified(value: boolean)
{
this.housingExpenseTypeFieldSpecified = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get HousingExpenseTypeOtherDescription(): string
{
return this.housingExpenseTypeOtherDescriptionField;
}
public set HousingExpenseTypeOtherDescription(value: string)
{
this.housingExpenseTypeOtherDescriptionField = value;
} 
}
export enum PROPOSED_HOUSING_EXPENSEHousingExpenseType {
 HazardInsurance,

Utilities,

GroundRent,

HomeownersAssociationDuesAndCondominiumFees,

RealEstateTax,

FirstMortgagePITI,

MaintenanceAndMiscellaneous,

LeaseholdPayments,

OtherMortgageLoanPrincipalAndInterest,

MI,

OtherMortgageLoanPrincipalInterestTaxesAndInsurance,

OtherHousingExpense,

FirstMortgagePrincipalAndInterest,

Rent
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class REO_PROPERTY 
{
private rEO_IDField:string ;
private borrowerIDField:string ;
private liabilityIDField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CurrentResidenceIndicatorField:REO_PROPERTY_CurrentResidenceIndicator ;
private _CurrentResidenceIndicatorFieldSpecified:boolean ;
private _DispositionStatusTypeField:REO_PROPERTY_DispositionStatusType ;
private _DispositionStatusTypeFieldSpecified:boolean ;
private _GSEPropertyTypeField:REO_PROPERTY_GSEPropertyType ;
private _GSEPropertyTypeFieldSpecified:boolean ;
private _LienInstallmentAmountField:string ;
private _LienUPBAmountField:string ;
private _MaintenanceExpenseAmountField:string ;
private _MarketValueAmountField:string ;
private _RentalIncomeGrossAmountField:string ;
private _RentalIncomeNetAmountField:string ;
private _SubjectIndicatorField:REO_PROPERTY_SubjectIndicator ;
private _SubjectIndicatorFieldSpecified:boolean ;
public get REO_ID(): string
{
return this.rEO_IDField;
}
public set REO_ID(value: string)
{
this.rEO_IDField = value;
}
public get BorrowerID(): string
{
return this.borrowerIDField;
}
public set BorrowerID(value: string)
{
this.borrowerIDField = value;
}
public get LiabilityID(): string
{
return this.liabilityIDField;
}
public set LiabilityID(value: string)
{
this.liabilityIDField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _CurrentResidenceIndicator(): REO_PROPERTY_CurrentResidenceIndicator
{
return this._CurrentResidenceIndicatorField;
}
public set _CurrentResidenceIndicator(value: REO_PROPERTY_CurrentResidenceIndicator)
{
this._CurrentResidenceIndicatorField = value;
}
public get _CurrentResidenceIndicatorSpecified(): boolean
{
return this._CurrentResidenceIndicatorFieldSpecified;
}
public set _CurrentResidenceIndicatorSpecified(value: boolean)
{
this._CurrentResidenceIndicatorFieldSpecified = value;
}
public get _DispositionStatusType(): REO_PROPERTY_DispositionStatusType
{
return this._DispositionStatusTypeField;
}
public set _DispositionStatusType(value: REO_PROPERTY_DispositionStatusType)
{
this._DispositionStatusTypeField = value;
}
public get _DispositionStatusTypeSpecified(): boolean
{
return this._DispositionStatusTypeFieldSpecified;
}
public set _DispositionStatusTypeSpecified(value: boolean)
{
this._DispositionStatusTypeFieldSpecified = value;
}
public get _GSEPropertyType(): REO_PROPERTY_GSEPropertyType
{
return this._GSEPropertyTypeField;
}
public set _GSEPropertyType(value: REO_PROPERTY_GSEPropertyType)
{
this._GSEPropertyTypeField = value;
}
public get _GSEPropertyTypeSpecified(): boolean
{
return this._GSEPropertyTypeFieldSpecified;
}
public set _GSEPropertyTypeSpecified(value: boolean)
{
this._GSEPropertyTypeFieldSpecified = value;
}
public get _LienInstallmentAmount(): string
{
return this._LienInstallmentAmountField;
}
public set _LienInstallmentAmount(value: string)
{
this._LienInstallmentAmountField = value;
}
public get _LienUPBAmount(): string
{
return this._LienUPBAmountField;
}
public set _LienUPBAmount(value: string)
{
this._LienUPBAmountField = value;
}
public get _MaintenanceExpenseAmount(): string
{
return this._MaintenanceExpenseAmountField;
}
public set _MaintenanceExpenseAmount(value: string)
{
this._MaintenanceExpenseAmountField = value;
}
public get _MarketValueAmount(): string
{
return this._MarketValueAmountField;
}
public set _MarketValueAmount(value: string)
{
this._MarketValueAmountField = value;
}
public get _RentalIncomeGrossAmount(): string
{
return this._RentalIncomeGrossAmountField;
}
public set _RentalIncomeGrossAmount(value: string)
{
this._RentalIncomeGrossAmountField = value;
}
public get _RentalIncomeNetAmount(): string
{
return this._RentalIncomeNetAmountField;
}
public set _RentalIncomeNetAmount(value: string)
{
this._RentalIncomeNetAmountField = value;
}
public get _SubjectIndicator(): REO_PROPERTY_SubjectIndicator
{
return this._SubjectIndicatorField;
}
public set _SubjectIndicator(value: REO_PROPERTY_SubjectIndicator)
{
this._SubjectIndicatorField = value;
}
public get _SubjectIndicatorSpecified(): boolean
{
return this._SubjectIndicatorFieldSpecified;
}
public set _SubjectIndicatorSpecified(value: boolean)
{
this._SubjectIndicatorFieldSpecified = value;
} 
}
export enum REO_PROPERTY_CurrentResidenceIndicator {
 N,

Y
 }
export enum REO_PROPERTY_DispositionStatusType {
 RetainForPrimaryOrSecondaryResidence,

Sold,

RetainForRental,

PendingSale
 }
export enum REO_PROPERTY_GSEPropertyType {
 SingleFamily,

Condominium,

Land,

Cooperative,

Farm,

HomeAndBusinessCombined,

ManufacturedMobileHome,

MixedUseResidential,

MultifamilyMoreThanFourUnits,

TwoToFourUnitProperty,

CommercialNonResidential,

Townhouse
 }
export enum REO_PROPERTY_SubjectIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RESPA_FEE 
{
private _PAYMENTField:_PAYMENT[] ;
private _REQUIRED_SERVICE_PROVIDERField:_REQUIRED_SERVICE_PROVIDER ;
private _PAID_TOField:_PAID_TO ;
private rESPASectionClassificationTypeField:RESPA_FEERESPASectionClassificationType ;
private rESPASectionClassificationTypeFieldSpecified:boolean ;
private _RequiredProviderOfServiceIndicatorField:RESPA_FEE_RequiredProviderOfServiceIndicator ;
private _RequiredProviderOfServiceIndicatorFieldSpecified:boolean ;
private _ResponsiblePartyTypeField:RESPA_FEE_ResponsiblePartyType ;
private _ResponsiblePartyTypeFieldSpecified:boolean ;
private _SpecifiedHUDLineNumberField:string ;
private _TypeField:RESPA_FEE_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _PaidToTypeField:RESPA_FEE_PaidToType ;
private _PaidToTypeFieldSpecified:boolean ;
private _PaidToTypeOtherDescriptionField:string ;
private _TotalAmountField:string ;
private _SpecifiedFixedAmountField:string ;
private _TotalPercentField:string ;
private _PercentBasisTypeField:RESPA_FEE_PercentBasisType ;
private _PercentBasisTypeFieldSpecified:boolean ;
private _PercentBasisTypeOtherDescriptionField:string ;
private _ItemDescriptionField:string ;
private _IDField:string ;
private _BorrowerChosenProviderIndicatorField:RESPA_FEE_BorrowerChosenProviderIndicator ;
private _BorrowerChosenProviderIndicatorFieldSpecified:boolean ;
private gFEAggregationTypeField:RESPA_FEEGFEAggregationType ;
private gFEAggregationTypeFieldSpecified:boolean ;
private _GFEDisclosedAmountField:string ;
public get _PAYMENT(): _PAYMENT[]
{
return this._PAYMENTField;
}
public set _PAYMENT(value: _PAYMENT[])
{
this._PAYMENTField = value;
}
public get _REQUIRED_SERVICE_PROVIDER(): _REQUIRED_SERVICE_PROVIDER
{
return this._REQUIRED_SERVICE_PROVIDERField;
}
public set _REQUIRED_SERVICE_PROVIDER(value: _REQUIRED_SERVICE_PROVIDER)
{
this._REQUIRED_SERVICE_PROVIDERField = value;
}
public get _PAID_TO(): _PAID_TO
{
return this._PAID_TOField;
}
public set _PAID_TO(value: _PAID_TO)
{
this._PAID_TOField = value;
}
public get RESPASectionClassificationType(): RESPA_FEERESPASectionClassificationType
{
return this.rESPASectionClassificationTypeField;
}
public set RESPASectionClassificationType(value: RESPA_FEERESPASectionClassificationType)
{
this.rESPASectionClassificationTypeField = value;
}
public get RESPASectionClassificationTypeSpecified(): boolean
{
return this.rESPASectionClassificationTypeFieldSpecified;
}
public set RESPASectionClassificationTypeSpecified(value: boolean)
{
this.rESPASectionClassificationTypeFieldSpecified = value;
}
public get _RequiredProviderOfServiceIndicator(): RESPA_FEE_RequiredProviderOfServiceIndicator
{
return this._RequiredProviderOfServiceIndicatorField;
}
public set _RequiredProviderOfServiceIndicator(value: RESPA_FEE_RequiredProviderOfServiceIndicator)
{
this._RequiredProviderOfServiceIndicatorField = value;
}
public get _RequiredProviderOfServiceIndicatorSpecified(): boolean
{
return this._RequiredProviderOfServiceIndicatorFieldSpecified;
}
public set _RequiredProviderOfServiceIndicatorSpecified(value: boolean)
{
this._RequiredProviderOfServiceIndicatorFieldSpecified = value;
}
public get _ResponsiblePartyType(): RESPA_FEE_ResponsiblePartyType
{
return this._ResponsiblePartyTypeField;
}
public set _ResponsiblePartyType(value: RESPA_FEE_ResponsiblePartyType)
{
this._ResponsiblePartyTypeField = value;
}
public get _ResponsiblePartyTypeSpecified(): boolean
{
return this._ResponsiblePartyTypeFieldSpecified;
}
public set _ResponsiblePartyTypeSpecified(value: boolean)
{
this._ResponsiblePartyTypeFieldSpecified = value;
}
public get _SpecifiedHUDLineNumber(): string
{
return this._SpecifiedHUDLineNumberField;
}
public set _SpecifiedHUDLineNumber(value: string)
{
this._SpecifiedHUDLineNumberField = value;
}
public get _Type(): RESPA_FEE_Type
{
return this._TypeField;
}
public set _Type(value: RESPA_FEE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _PaidToType(): RESPA_FEE_PaidToType
{
return this._PaidToTypeField;
}
public set _PaidToType(value: RESPA_FEE_PaidToType)
{
this._PaidToTypeField = value;
}
public get _PaidToTypeSpecified(): boolean
{
return this._PaidToTypeFieldSpecified;
}
public set _PaidToTypeSpecified(value: boolean)
{
this._PaidToTypeFieldSpecified = value;
}
public get _PaidToTypeOtherDescription(): string
{
return this._PaidToTypeOtherDescriptionField;
}
public set _PaidToTypeOtherDescription(value: string)
{
this._PaidToTypeOtherDescriptionField = value;
}
public get _TotalAmount(): string
{
return this._TotalAmountField;
}
public set _TotalAmount(value: string)
{
this._TotalAmountField = value;
}
public get _SpecifiedFixedAmount(): string
{
return this._SpecifiedFixedAmountField;
}
public set _SpecifiedFixedAmount(value: string)
{
this._SpecifiedFixedAmountField = value;
}
public get _TotalPercent(): string
{
return this._TotalPercentField;
}
public set _TotalPercent(value: string)
{
this._TotalPercentField = value;
}
public get _PercentBasisType(): RESPA_FEE_PercentBasisType
{
return this._PercentBasisTypeField;
}
public set _PercentBasisType(value: RESPA_FEE_PercentBasisType)
{
this._PercentBasisTypeField = value;
}
public get _PercentBasisTypeSpecified(): boolean
{
return this._PercentBasisTypeFieldSpecified;
}
public set _PercentBasisTypeSpecified(value: boolean)
{
this._PercentBasisTypeFieldSpecified = value;
}
public get _PercentBasisTypeOtherDescription(): string
{
return this._PercentBasisTypeOtherDescriptionField;
}
public set _PercentBasisTypeOtherDescription(value: string)
{
this._PercentBasisTypeOtherDescriptionField = value;
}
public get _ItemDescription(): string
{
return this._ItemDescriptionField;
}
public set _ItemDescription(value: string)
{
this._ItemDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _BorrowerChosenProviderIndicator(): RESPA_FEE_BorrowerChosenProviderIndicator
{
return this._BorrowerChosenProviderIndicatorField;
}
public set _BorrowerChosenProviderIndicator(value: RESPA_FEE_BorrowerChosenProviderIndicator)
{
this._BorrowerChosenProviderIndicatorField = value;
}
public get _BorrowerChosenProviderIndicatorSpecified(): boolean
{
return this._BorrowerChosenProviderIndicatorFieldSpecified;
}
public set _BorrowerChosenProviderIndicatorSpecified(value: boolean)
{
this._BorrowerChosenProviderIndicatorFieldSpecified = value;
}
public get GFEAggregationType(): RESPA_FEEGFEAggregationType
{
return this.gFEAggregationTypeField;
}
public set GFEAggregationType(value: RESPA_FEEGFEAggregationType)
{
this.gFEAggregationTypeField = value;
}
public get GFEAggregationTypeSpecified(): boolean
{
return this.gFEAggregationTypeFieldSpecified;
}
public set GFEAggregationTypeSpecified(value: boolean)
{
this.gFEAggregationTypeFieldSpecified = value;
}
public get _GFEDisclosedAmount(): string
{
return this._GFEDisclosedAmountField;
}
public set _GFEDisclosedAmount(value: string)
{
this._GFEDisclosedAmountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _PAYMENT 
{
private _AllowableFHAClosingCostIndicatorField:_PAYMENT_AllowableFHAClosingCostIndicator ;
private _AllowableFHAClosingCostIndicatorFieldSpecified:boolean ;
private _AmountField:string ;
private _CollectedByTypeField:_PAYMENT_CollectedByType ;
private _CollectedByTypeFieldSpecified:boolean ;
private _IncludedInAPRIndicatorField:_PAYMENT_IncludedInAPRIndicator ;
private _IncludedInAPRIndicatorFieldSpecified:boolean ;
private _NetDueAmountField:string ;
private _PaidByTypeField:_PAYMENT_PaidByType ;
private _PaidByTypeFieldSpecified:boolean ;
private _PaidByTypeThirdPartyNameField:string ;
private _PaidOutsideOfClosingIndicatorField:_PAYMENT_PaidOutsideOfClosingIndicator ;
private _PaidOutsideOfClosingIndicatorFieldSpecified:boolean ;
private _PercentField:string ;
private _ProcessTypeField:_PAYMENT_ProcessType ;
private _ProcessTypeFieldSpecified:boolean ;
private _Section32IndicatorField:_PAYMENT_Section32Indicator ;
private _Section32IndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _IncludedInStateHighCostIndicatorField:_PAYMENT_IncludedInStateHighCostIndicator ;
private _IncludedInStateHighCostIndicatorFieldSpecified:boolean ;
private _RefundableConditionsDescriptionField:string ;
private _RefundableAmountField:string ;
private _RefundableIndicatorField:_PAYMENT_RefundableIndicator ;
private _RefundableIndicatorFieldSpecified:boolean ;
private _FinancedIndicatorField:_PAYMENT_FinancedIndicator ;
private _FinancedIndicatorFieldSpecified:boolean ;
public get _AllowableFHAClosingCostIndicator(): _PAYMENT_AllowableFHAClosingCostIndicator
{
return this._AllowableFHAClosingCostIndicatorField;
}
public set _AllowableFHAClosingCostIndicator(value: _PAYMENT_AllowableFHAClosingCostIndicator)
{
this._AllowableFHAClosingCostIndicatorField = value;
}
public get _AllowableFHAClosingCostIndicatorSpecified(): boolean
{
return this._AllowableFHAClosingCostIndicatorFieldSpecified;
}
public set _AllowableFHAClosingCostIndicatorSpecified(value: boolean)
{
this._AllowableFHAClosingCostIndicatorFieldSpecified = value;
}
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _CollectedByType(): _PAYMENT_CollectedByType
{
return this._CollectedByTypeField;
}
public set _CollectedByType(value: _PAYMENT_CollectedByType)
{
this._CollectedByTypeField = value;
}
public get _CollectedByTypeSpecified(): boolean
{
return this._CollectedByTypeFieldSpecified;
}
public set _CollectedByTypeSpecified(value: boolean)
{
this._CollectedByTypeFieldSpecified = value;
}
public get _IncludedInAPRIndicator(): _PAYMENT_IncludedInAPRIndicator
{
return this._IncludedInAPRIndicatorField;
}
public set _IncludedInAPRIndicator(value: _PAYMENT_IncludedInAPRIndicator)
{
this._IncludedInAPRIndicatorField = value;
}
public get _IncludedInAPRIndicatorSpecified(): boolean
{
return this._IncludedInAPRIndicatorFieldSpecified;
}
public set _IncludedInAPRIndicatorSpecified(value: boolean)
{
this._IncludedInAPRIndicatorFieldSpecified = value;
}
public get _NetDueAmount(): string
{
return this._NetDueAmountField;
}
public set _NetDueAmount(value: string)
{
this._NetDueAmountField = value;
}
public get _PaidByType(): _PAYMENT_PaidByType
{
return this._PaidByTypeField;
}
public set _PaidByType(value: _PAYMENT_PaidByType)
{
this._PaidByTypeField = value;
}
public get _PaidByTypeSpecified(): boolean
{
return this._PaidByTypeFieldSpecified;
}
public set _PaidByTypeSpecified(value: boolean)
{
this._PaidByTypeFieldSpecified = value;
}
public get _PaidByTypeThirdPartyName(): string
{
return this._PaidByTypeThirdPartyNameField;
}
public set _PaidByTypeThirdPartyName(value: string)
{
this._PaidByTypeThirdPartyNameField = value;
}
public get _PaidOutsideOfClosingIndicator(): _PAYMENT_PaidOutsideOfClosingIndicator
{
return this._PaidOutsideOfClosingIndicatorField;
}
public set _PaidOutsideOfClosingIndicator(value: _PAYMENT_PaidOutsideOfClosingIndicator)
{
this._PaidOutsideOfClosingIndicatorField = value;
}
public get _PaidOutsideOfClosingIndicatorSpecified(): boolean
{
return this._PaidOutsideOfClosingIndicatorFieldSpecified;
}
public set _PaidOutsideOfClosingIndicatorSpecified(value: boolean)
{
this._PaidOutsideOfClosingIndicatorFieldSpecified = value;
}
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _ProcessType(): _PAYMENT_ProcessType
{
return this._ProcessTypeField;
}
public set _ProcessType(value: _PAYMENT_ProcessType)
{
this._ProcessTypeField = value;
}
public get _ProcessTypeSpecified(): boolean
{
return this._ProcessTypeFieldSpecified;
}
public set _ProcessTypeSpecified(value: boolean)
{
this._ProcessTypeFieldSpecified = value;
}
public get _Section32Indicator(): _PAYMENT_Section32Indicator
{
return this._Section32IndicatorField;
}
public set _Section32Indicator(value: _PAYMENT_Section32Indicator)
{
this._Section32IndicatorField = value;
}
public get _Section32IndicatorSpecified(): boolean
{
return this._Section32IndicatorFieldSpecified;
}
public set _Section32IndicatorSpecified(value: boolean)
{
this._Section32IndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _IncludedInStateHighCostIndicator(): _PAYMENT_IncludedInStateHighCostIndicator
{
return this._IncludedInStateHighCostIndicatorField;
}
public set _IncludedInStateHighCostIndicator(value: _PAYMENT_IncludedInStateHighCostIndicator)
{
this._IncludedInStateHighCostIndicatorField = value;
}
public get _IncludedInStateHighCostIndicatorSpecified(): boolean
{
return this._IncludedInStateHighCostIndicatorFieldSpecified;
}
public set _IncludedInStateHighCostIndicatorSpecified(value: boolean)
{
this._IncludedInStateHighCostIndicatorFieldSpecified = value;
}
public get _RefundableConditionsDescription(): string
{
return this._RefundableConditionsDescriptionField;
}
public set _RefundableConditionsDescription(value: string)
{
this._RefundableConditionsDescriptionField = value;
}
public get _RefundableAmount(): string
{
return this._RefundableAmountField;
}
public set _RefundableAmount(value: string)
{
this._RefundableAmountField = value;
}
public get _RefundableIndicator(): _PAYMENT_RefundableIndicator
{
return this._RefundableIndicatorField;
}
public set _RefundableIndicator(value: _PAYMENT_RefundableIndicator)
{
this._RefundableIndicatorField = value;
}
public get _RefundableIndicatorSpecified(): boolean
{
return this._RefundableIndicatorFieldSpecified;
}
public set _RefundableIndicatorSpecified(value: boolean)
{
this._RefundableIndicatorFieldSpecified = value;
}
public get _FinancedIndicator(): _PAYMENT_FinancedIndicator
{
return this._FinancedIndicatorField;
}
public set _FinancedIndicator(value: _PAYMENT_FinancedIndicator)
{
this._FinancedIndicatorField = value;
}
public get _FinancedIndicatorSpecified(): boolean
{
return this._FinancedIndicatorFieldSpecified;
}
public set _FinancedIndicatorSpecified(value: boolean)
{
this._FinancedIndicatorFieldSpecified = value;
} 
}
export enum _PAYMENT_AllowableFHAClosingCostIndicator {
 N,

Y
 }
export enum _PAYMENT_CollectedByType {
 Investor,

Broker,

Lender
 }
export enum _PAYMENT_IncludedInAPRIndicator {
 N,

Y
 }
export enum _PAYMENT_PaidByType {
 Correspondent,

ThirdParty,

Seller,

Broker,

Buyer,

Lender
 }
export enum _PAYMENT_PaidOutsideOfClosingIndicator {
 N,

Y
 }
export enum _PAYMENT_ProcessType {
 Closing,

Processing
 }
export enum _PAYMENT_Section32Indicator {
 N,

Y
 }
export enum _PAYMENT_IncludedInStateHighCostIndicator {
 N,

Y
 }
export enum _PAYMENT_RefundableIndicator {
 N,

Y
 }
export enum _PAYMENT_FinancedIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _REQUIRED_SERVICE_PROVIDER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _CityField:string ;
private _NameField:string ;
private _NatureOfRelationshipDescriptionField:string ;
private _PostalCodeField:string ;
private _StateField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _TelephoneNumberField:string ;
private _ReferenceIdentifierField:string ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _NatureOfRelationshipDescription(): string
{
return this._NatureOfRelationshipDescriptionField;
}
public set _NatureOfRelationshipDescription(value: string)
{
this._NatureOfRelationshipDescriptionField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _TelephoneNumber(): string
{
return this._TelephoneNumberField;
}
public set _TelephoneNumber(value: string)
{
this._TelephoneNumberField = value;
}
public get _ReferenceIdentifier(): string
{
return this._ReferenceIdentifierField;
}
public set _ReferenceIdentifier(value: string)
{
this._ReferenceIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum RESPA_FEERESPASectionClassificationType {
 [System.Xml.Serialization.XmlEnumAttribute("1200:RecordingAndTransferCharges")]
Item1200RecordingAndTransferCharges,

[System.Xml.Serialization.XmlEnumAttribute("1300:AdditionalSettlementCharges")]
Item1300AdditionalSettlementCharges,

[System.Xml.Serialization.XmlEnumAttribute("500:ReductionsInAmountDueSeller")]
Item500ReductionsInAmountDueSeller,

[System.Xml.Serialization.XmlEnumAttribute("300:CashAtSettlementFromToBorrower")]
Item300CashAtSettlementFromToBorrower,

[System.Xml.Serialization.XmlEnumAttribute("1100:TitleCharges")]
Item1100TitleCharges,

[System.Xml.Serialization.XmlEnumAttribute("100:GrossAmountDueFromBorrower")]
Item100GrossAmountDueFromBorrower,

[System.Xml.Serialization.XmlEnumAttribute("800:LoanFees")]
Item800LoanFees,

[System.Xml.Serialization.XmlEnumAttribute("600:CashAtSettlementToFromSeller")]
Item600CashAtSettlementToFromSeller,

[System.Xml.Serialization.XmlEnumAttribute("200:AmountsPaidByOrInBehalfOfBorrower")]
Item200AmountsPaidByOrInBehalfOfBorrower,

[System.Xml.Serialization.XmlEnumAttribute("400:GrossAmountDueToSeller")]
Item400GrossAmountDueToSeller,

[System.Xml.Serialization.XmlEnumAttribute("900:LenderRequiredPaidInAdvance")]
Item900LenderRequiredPaidInAdvance,

[System.Xml.Serialization.XmlEnumAttribute("1000:ReservesDepositedWithLender")]
Item1000ReservesDepositedWithLender,

[System.Xml.Serialization.XmlEnumAttribute("700:DivisionOfCommissions")]
Item700DivisionOfCommissions
 }
export enum RESPA_FEE_RequiredProviderOfServiceIndicator {
 N,

Y
 }
export enum RESPA_FEE_ResponsiblePartyType {
 Seller,

Buyer
 }
export enum RESPA_FEE_Type {
 NotaryFee,

[System.Xml.Serialization.XmlEnumAttribute("203KConsultantFee")]
Item203KConsultantFee,

FloodCertification,

AppraisalFee,

VAFundingFee,

EscrowServiceFee,

[System.Xml.Serialization.XmlEnumAttribute("203KDiscountOnRepairs")]
Item203KDiscountOnRepairs,

ReleaseRecordingFee,

GeneralCounselFee,

AmortizationFee,

SubordinationFee,

AttorneyFee,

SettlementOrClosingFee,

[System.Xml.Serialization.XmlEnumAttribute("203KArchitecturalAndEngineeringFee")]
Item203KArchitecturalAndEngineeringFee,

CommitmentFee,

ElectronicDocumentDeliveryFee,

CourierFee,

AppraisalFieldReviewFee,

TitleEndorsementFee,

AssignmentFee,

OurOriginationChargeTotal,

ModificationFee,

DocumentaryStampFee,

WireTransferFee,

EscrowWaiverFee,

DocumentPreparationFee,

Other,

MunicipalLienCertificateFee,

LoanOriginationFee,

CopyFaxFee,

MortgageRecordingFee,

ReinspectionFee,

NewLoanAdministrationFee,

CopyOrFaxFee,

BankruptcyMonitoringFee,

StateMortgageTaxStampFee,

AppraisalDeskReviewFee,

ApplicationFee,

MIInitialPremium,

TitleInsuranceFee,

CLOAccessFee,

ClosingProtectionLetterFee,

DeedRecordingFee,

MERSRegistrationFee,

StateDeedTaxStampFee,

RuralHousingFee,

[System.Xml.Serialization.XmlEnumAttribute("203KTitleUpdate")]
Item203KTitleUpdate,

CertificationFee,

CreditReportFee,

RedrawFee,

BondFee,

TitleServicesFeeTotal,

UnderwritingFee,

[System.Xml.Serialization.XmlEnumAttribute("203KPermits")]
Item203KPermits,

LoanDiscountPoints,

ProcessingFee,

PestInspectionFee,

TitleExaminationFee,

MortgageBrokerFee,

InspectionFee,

CityCountyDeedTaxStampFee,

BondReviewFee,

SurveyFee,

ChosenInterestRateCreditOrChargeTotal,

[System.Xml.Serialization.XmlEnumAttribute("203KSupplementalOriginationFee")]
Item203KSupplementalOriginationFee,

AssumptionFee,

AssignmentRecordingFee,

AbstractOrTitleSearchFee,

MI_FHAUpfrontPremium,

CityCountyMortgageTaxStampFee,

PayoffRequestFee,

[System.Xml.Serialization.XmlEnumAttribute("203KInspectionFee")]
Item203KInspectionFee,

TaxRelatedServiceFee,

SigningAgentFee,

MunicipalLienCertificateRecordingFee,

TitleInsuranceBinderFee,

RealEstateCommission
 }
export enum RESPA_FEE_PaidToType {
 Investor,

Other,

Broker,

Lender
 }
export enum RESPA_FEE_PercentBasisType {
 Other,

OriginalLoanAmount,

PurchasePriceAmount,

BaseLoanAmount,

PropertyAppraisedValueAmount
 }
export enum RESPA_FEE_BorrowerChosenProviderIndicator {
 N,

Y
 }
export enum RESPA_FEEGFEAggregationType {
 RequiredServicesYouCanShopFor,

RequiredServicesLenderSelected,

TitleServices,

None,

CombinedOurOriginationAndInterestRateCreditOrCharge,

TransferTaxes,

GovernmentRecordingCharges,

ChosenInterestRateCreditOrCharge,

OurOriginationCharge,

OwnersTitleInsurance
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TITLE_HOLDER 
{
private _NameField:string ;
private landTrustTypeField:TITLE_HOLDERLandTrustType ;
private landTrustTypeFieldSpecified:boolean ;
private _IDField:string ;
private landTrustTypeOtherDescriptionField:string ;
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get LandTrustType(): TITLE_HOLDERLandTrustType
{
return this.landTrustTypeField;
}
public set LandTrustType(value: TITLE_HOLDERLandTrustType)
{
this.landTrustTypeField = value;
}
public get LandTrustTypeSpecified(): boolean
{
return this.landTrustTypeFieldSpecified;
}
public set LandTrustTypeSpecified(value: boolean)
{
this.landTrustTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get LandTrustTypeOtherDescription(): string
{
return this.landTrustTypeOtherDescriptionField;
}
public set LandTrustTypeOtherDescription(value: string)
{
this.landTrustTypeOtherDescriptionField = value;
} 
}
export enum TITLE_HOLDERLandTrustType {
 IllinoisLandTrust,

Other
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TRANSACTION_DETAIL 
{
private pURCHASE_CREDITField:PURCHASE_CREDIT[] ;
private alterationsImprovementsAndRepairsAmountField:string ;
private borrowerPaidDiscountPointsTotalAmountField:string ;
private estimatedClosingCostsAmountField:string ;
private mIAndFundingFeeFinancedAmountField:string ;
private mIAndFundingFeeTotalAmountField:string ;
private prepaidItemsEstimatedAmountField:string ;
private purchasePriceAmountField:string ;
private refinanceIncludingDebtsToBePaidOffAmountField:string ;
private salesConcessionAmountField:string ;
private sellerPaidClosingCostsAmountField:string ;
private subordinateLienAmountField:string ;
private subordinateLienHELOCAmountField:string ;
private fREReserveAmountField:string ;
private fREReservesAmountField:string ;
private _IDField:string ;
private subordinateLienPurposeTypeField:TRANSACTION_DETAILSubordinateLienPurposeType ;
private subordinateLienPurposeTypeFieldSpecified:boolean ;
private subordinateLienPurposeTypeOtherDescriptionField:string ;
private refundOfOverpaidInterestCalendarYearAmountField:string ;
private yearToDateTotalInterestPaidAmountField:string ;
public get PURCHASE_CREDIT(): PURCHASE_CREDIT[]
{
return this.pURCHASE_CREDITField;
}
public set PURCHASE_CREDIT(value: PURCHASE_CREDIT[])
{
this.pURCHASE_CREDITField = value;
}
public get AlterationsImprovementsAndRepairsAmount(): string
{
return this.alterationsImprovementsAndRepairsAmountField;
}
public set AlterationsImprovementsAndRepairsAmount(value: string)
{
this.alterationsImprovementsAndRepairsAmountField = value;
}
public get BorrowerPaidDiscountPointsTotalAmount(): string
{
return this.borrowerPaidDiscountPointsTotalAmountField;
}
public set BorrowerPaidDiscountPointsTotalAmount(value: string)
{
this.borrowerPaidDiscountPointsTotalAmountField = value;
}
public get EstimatedClosingCostsAmount(): string
{
return this.estimatedClosingCostsAmountField;
}
public set EstimatedClosingCostsAmount(value: string)
{
this.estimatedClosingCostsAmountField = value;
}
public get MIAndFundingFeeFinancedAmount(): string
{
return this.mIAndFundingFeeFinancedAmountField;
}
public set MIAndFundingFeeFinancedAmount(value: string)
{
this.mIAndFundingFeeFinancedAmountField = value;
}
public get MIAndFundingFeeTotalAmount(): string
{
return this.mIAndFundingFeeTotalAmountField;
}
public set MIAndFundingFeeTotalAmount(value: string)
{
this.mIAndFundingFeeTotalAmountField = value;
}
public get PrepaidItemsEstimatedAmount(): string
{
return this.prepaidItemsEstimatedAmountField;
}
public set PrepaidItemsEstimatedAmount(value: string)
{
this.prepaidItemsEstimatedAmountField = value;
}
public get PurchasePriceAmount(): string
{
return this.purchasePriceAmountField;
}
public set PurchasePriceAmount(value: string)
{
this.purchasePriceAmountField = value;
}
public get RefinanceIncludingDebtsToBePaidOffAmount(): string
{
return this.refinanceIncludingDebtsToBePaidOffAmountField;
}
public set RefinanceIncludingDebtsToBePaidOffAmount(value: string)
{
this.refinanceIncludingDebtsToBePaidOffAmountField = value;
}
public get SalesConcessionAmount(): string
{
return this.salesConcessionAmountField;
}
public set SalesConcessionAmount(value: string)
{
this.salesConcessionAmountField = value;
}
public get SellerPaidClosingCostsAmount(): string
{
return this.sellerPaidClosingCostsAmountField;
}
public set SellerPaidClosingCostsAmount(value: string)
{
this.sellerPaidClosingCostsAmountField = value;
}
public get SubordinateLienAmount(): string
{
return this.subordinateLienAmountField;
}
public set SubordinateLienAmount(value: string)
{
this.subordinateLienAmountField = value;
}
public get SubordinateLienHELOCAmount(): string
{
return this.subordinateLienHELOCAmountField;
}
public set SubordinateLienHELOCAmount(value: string)
{
this.subordinateLienHELOCAmountField = value;
}
public get FREReserveAmount(): string
{
return this.fREReserveAmountField;
}
public set FREReserveAmount(value: string)
{
this.fREReserveAmountField = value;
}
public get FREReservesAmount(): string
{
return this.fREReservesAmountField;
}
public set FREReservesAmount(value: string)
{
this.fREReservesAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get SubordinateLienPurposeType(): TRANSACTION_DETAILSubordinateLienPurposeType
{
return this.subordinateLienPurposeTypeField;
}
public set SubordinateLienPurposeType(value: TRANSACTION_DETAILSubordinateLienPurposeType)
{
this.subordinateLienPurposeTypeField = value;
}
public get SubordinateLienPurposeTypeSpecified(): boolean
{
return this.subordinateLienPurposeTypeFieldSpecified;
}
public set SubordinateLienPurposeTypeSpecified(value: boolean)
{
this.subordinateLienPurposeTypeFieldSpecified = value;
}
public get SubordinateLienPurposeTypeOtherDescription(): string
{
return this.subordinateLienPurposeTypeOtherDescriptionField;
}
public set SubordinateLienPurposeTypeOtherDescription(value: string)
{
this.subordinateLienPurposeTypeOtherDescriptionField = value;
}
public get RefundOfOverpaidInterestCalendarYearAmount(): string
{
return this.refundOfOverpaidInterestCalendarYearAmountField;
}
public set RefundOfOverpaidInterestCalendarYearAmount(value: string)
{
this.refundOfOverpaidInterestCalendarYearAmountField = value;
}
public get YearToDateTotalInterestPaidAmount(): string
{
return this.yearToDateTotalInterestPaidAmountField;
}
public set YearToDateTotalInterestPaidAmount(value: string)
{
this.yearToDateTotalInterestPaidAmountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PURCHASE_CREDIT 
{
private _AmountField:string ;
private _SourceTypeField:PURCHASE_CREDIT_SourceType ;
private _SourceTypeFieldSpecified:boolean ;
private _TypeField:PURCHASE_CREDIT_Type ;
private _TypeFieldSpecified:boolean ;
private _IDField:string ;
private _TypeOtherDescriptionField:string ;
private _SourceTypeOtherDescriptionField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _SourceType(): PURCHASE_CREDIT_SourceType
{
return this._SourceTypeField;
}
public set _SourceType(value: PURCHASE_CREDIT_SourceType)
{
this._SourceTypeField = value;
}
public get _SourceTypeSpecified(): boolean
{
return this._SourceTypeFieldSpecified;
}
public set _SourceTypeSpecified(value: boolean)
{
this._SourceTypeFieldSpecified = value;
}
public get _Type(): PURCHASE_CREDIT_Type
{
return this._TypeField;
}
public set _Type(value: PURCHASE_CREDIT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _SourceTypeOtherDescription(): string
{
return this._SourceTypeOtherDescriptionField;
}
public set _SourceTypeOtherDescription(value: string)
{
this._SourceTypeOtherDescriptionField = value;
} 
}
export enum PURCHASE_CREDIT_SourceType {
 Employer,

FederalAgency,

Other,

BuilderDeveloper,

PropertySeller,

NonParentRelative,

UnrelatedFriend,

StateAgency,

Parent,

LocalAgency,

BorrowerPaidOutsideClosing,

Lender,

RealEstateAgent
 }
export enum PURCHASE_CREDIT_Type {
 BuydownFund,

EmployerAssistedHousing,

RelocationFunds,

Other,

LeasePurchaseFund,

SweatEquity,

TradeEquity,

GiftOfEquity,

CommitmentOriginationFee,

PrivateMIMIPremiumVAFundingFeeRefund,

EarnestMoney
 }
export enum TRANSACTION_DETAILSubordinateLienPurposeType {
 Education,

Medical,

Other,

PurchaseMoney,

DebtConsolidation,

Cash,

Convenience,

HomeImprovement,

RateTerm
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class BORROWER 
{
private _ALIASField:_ALIAS[] ;
private _MAIL_TOField:_MAIL_TO ;
private _RESIDENCEField:_RESIDENCE[] ;
private cURRENT_INCOMEField:CURRENT_INCOME[] ;
private dECLARATIONField:DECLARATION ;
private dEPENDENTField:DEPENDENT[] ;
private eMPLOYERField:EMPLOYER[] ;
private fHA_VA_BORROWERField:FHA_VA_BORROWER ;
private gOVERNMENT_MONITORINGField:GOVERNMENT_MONITORING ;
private pRESENT_HOUSING_EXPENSEField:PRESENT_HOUSING_EXPENSE[] ;
private sUMMARYField:SUMMARY[] ;
private vA_BORROWERField:VA_BORROWER ;
private fHA_BORROWERField:FHA_BORROWER ;
private _NEAREST_LIVING_RELATIVEField:_NEAREST_LIVING_RELATIVE ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _POWER_OF_ATTORNEYField:_POWER_OF_ATTORNEY ;
private cONTACT_POINTField:CONTACT_POINT[] ;
private cREDIT_SCOREField:CREDIT_SCORE[] ;
private hARDSHIP_DECLARATIONField:HARDSHIP_DECLARATION ;
private borrowerIDField:string ;
private jointAssetBorrowerIDField:string ;
private _FirstNameField:string ;
private _MiddleNameField:string ;
private _LastNameField:string ;
private _NameSuffixField:string ;
private _AgeAtApplicationYearsField:string ;
private _BirthDateField:string ;
private _ApplicationSignedDateField:string ;
private _HomeTelephoneNumberField:string ;
private _PrintPositionTypeField:BORROWER_PrintPositionType ;
private _PrintPositionTypeFieldSpecified:boolean ;
private _SSNField:string ;
private dependentCountField:string ;
private jointAssetLiabilityReportingTypeField:BORROWERJointAssetLiabilityReportingType ;
private jointAssetLiabilityReportingTypeFieldSpecified:boolean ;
private maritalStatusTypeField:BORROWERMaritalStatusType ;
private maritalStatusTypeFieldSpecified:boolean ;
private schoolingYearsField:string ;
private creditReportIdentifierField:string ;
private borrowerNonObligatedIndicatorField:BORROWERBorrowerNonObligatedIndicator ;
private borrowerNonObligatedIndicatorFieldSpecified:boolean ;
private nonPersonEntityIndicatorField:BORROWERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _RelationshipTitleTypeField:BORROWER_RelationshipTitleType ;
private _RelationshipTitleTypeFieldSpecified:boolean ;
private _RelationshipTitleTypeOtherDescriptionField:string ;
private _SequenceIdentifierField:string ;
private _UnparsedNameField:string ;
private borrowerIsCosignerIndicatorField:BORROWERBorrowerIsCosignerIndicator ;
private borrowerIsCosignerIndicatorFieldSpecified:boolean ;
private uRLABorrowerTotalOtherIncomeAmountField:string ;
private uRLABorrowerTotalMonthlyIncomeAmountField:string ;
private borrowerNonTitleSpouseIndicatorField:BORROWERBorrowerNonTitleSpouseIndicator ;
private borrowerNonTitleSpouseIndicatorFieldSpecified:boolean ;
public get _ALIAS(): _ALIAS[]
{
return this._ALIASField;
}
public set _ALIAS(value: _ALIAS[])
{
this._ALIASField = value;
}
public get _MAIL_TO(): _MAIL_TO
{
return this._MAIL_TOField;
}
public set _MAIL_TO(value: _MAIL_TO)
{
this._MAIL_TOField = value;
}
public get _RESIDENCE(): _RESIDENCE[]
{
return this._RESIDENCEField;
}
public set _RESIDENCE(value: _RESIDENCE[])
{
this._RESIDENCEField = value;
}
public get CURRENT_INCOME(): CURRENT_INCOME[]
{
return this.cURRENT_INCOMEField;
}
public set CURRENT_INCOME(value: CURRENT_INCOME[])
{
this.cURRENT_INCOMEField = value;
}
public get DECLARATION(): DECLARATION
{
return this.dECLARATIONField;
}
public set DECLARATION(value: DECLARATION)
{
this.dECLARATIONField = value;
}
public get DEPENDENT(): DEPENDENT[]
{
return this.dEPENDENTField;
}
public set DEPENDENT(value: DEPENDENT[])
{
this.dEPENDENTField = value;
}
public get EMPLOYER(): EMPLOYER[]
{
return this.eMPLOYERField;
}
public set EMPLOYER(value: EMPLOYER[])
{
this.eMPLOYERField = value;
}
public get FHA_VA_BORROWER(): FHA_VA_BORROWER
{
return this.fHA_VA_BORROWERField;
}
public set FHA_VA_BORROWER(value: FHA_VA_BORROWER)
{
this.fHA_VA_BORROWERField = value;
}
public get GOVERNMENT_MONITORING(): GOVERNMENT_MONITORING
{
return this.gOVERNMENT_MONITORINGField;
}
public set GOVERNMENT_MONITORING(value: GOVERNMENT_MONITORING)
{
this.gOVERNMENT_MONITORINGField = value;
}
public get PRESENT_HOUSING_EXPENSE(): PRESENT_HOUSING_EXPENSE[]
{
return this.pRESENT_HOUSING_EXPENSEField;
}
public set PRESENT_HOUSING_EXPENSE(value: PRESENT_HOUSING_EXPENSE[])
{
this.pRESENT_HOUSING_EXPENSEField = value;
}
public get SUMMARY(): SUMMARY[]
{
return this.sUMMARYField;
}
public set SUMMARY(value: SUMMARY[])
{
this.sUMMARYField = value;
}
public get VA_BORROWER(): VA_BORROWER
{
return this.vA_BORROWERField;
}
public set VA_BORROWER(value: VA_BORROWER)
{
this.vA_BORROWERField = value;
}
public get FHA_BORROWER(): FHA_BORROWER
{
return this.fHA_BORROWERField;
}
public set FHA_BORROWER(value: FHA_BORROWER)
{
this.fHA_BORROWERField = value;
}
public get _NEAREST_LIVING_RELATIVE(): _NEAREST_LIVING_RELATIVE
{
return this._NEAREST_LIVING_RELATIVEField;
}
public set _NEAREST_LIVING_RELATIVE(value: _NEAREST_LIVING_RELATIVE)
{
this._NEAREST_LIVING_RELATIVEField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _POWER_OF_ATTORNEY(): _POWER_OF_ATTORNEY
{
return this._POWER_OF_ATTORNEYField;
}
public set _POWER_OF_ATTORNEY(value: _POWER_OF_ATTORNEY)
{
this._POWER_OF_ATTORNEYField = value;
}
public get CONTACT_POINT(): CONTACT_POINT[]
{
return this.cONTACT_POINTField;
}
public set CONTACT_POINT(value: CONTACT_POINT[])
{
this.cONTACT_POINTField = value;
}
public get CREDIT_SCORE(): CREDIT_SCORE[]
{
return this.cREDIT_SCOREField;
}
public set CREDIT_SCORE(value: CREDIT_SCORE[])
{
this.cREDIT_SCOREField = value;
}
public get HARDSHIP_DECLARATION(): HARDSHIP_DECLARATION
{
return this.hARDSHIP_DECLARATIONField;
}
public set HARDSHIP_DECLARATION(value: HARDSHIP_DECLARATION)
{
this.hARDSHIP_DECLARATIONField = value;
}
public get BorrowerID(): string
{
return this.borrowerIDField;
}
public set BorrowerID(value: string)
{
this.borrowerIDField = value;
}
public get JointAssetBorrowerID(): string
{
return this.jointAssetBorrowerIDField;
}
public set JointAssetBorrowerID(value: string)
{
this.jointAssetBorrowerIDField = value;
}
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _AgeAtApplicationYears(): string
{
return this._AgeAtApplicationYearsField;
}
public set _AgeAtApplicationYears(value: string)
{
this._AgeAtApplicationYearsField = value;
}
public get _BirthDate(): string
{
return this._BirthDateField;
}
public set _BirthDate(value: string)
{
this._BirthDateField = value;
}
public get _ApplicationSignedDate(): string
{
return this._ApplicationSignedDateField;
}
public set _ApplicationSignedDate(value: string)
{
this._ApplicationSignedDateField = value;
}
public get _HomeTelephoneNumber(): string
{
return this._HomeTelephoneNumberField;
}
public set _HomeTelephoneNumber(value: string)
{
this._HomeTelephoneNumberField = value;
}
public get _PrintPositionType(): BORROWER_PrintPositionType
{
return this._PrintPositionTypeField;
}
public set _PrintPositionType(value: BORROWER_PrintPositionType)
{
this._PrintPositionTypeField = value;
}
public get _PrintPositionTypeSpecified(): boolean
{
return this._PrintPositionTypeFieldSpecified;
}
public set _PrintPositionTypeSpecified(value: boolean)
{
this._PrintPositionTypeFieldSpecified = value;
}
public get _SSN(): string
{
return this._SSNField;
}
public set _SSN(value: string)
{
this._SSNField = value;
}
public get DependentCount(): string
{
return this.dependentCountField;
}
public set DependentCount(value: string)
{
this.dependentCountField = value;
}
public get JointAssetLiabilityReportingType(): BORROWERJointAssetLiabilityReportingType
{
return this.jointAssetLiabilityReportingTypeField;
}
public set JointAssetLiabilityReportingType(value: BORROWERJointAssetLiabilityReportingType)
{
this.jointAssetLiabilityReportingTypeField = value;
}
public get JointAssetLiabilityReportingTypeSpecified(): boolean
{
return this.jointAssetLiabilityReportingTypeFieldSpecified;
}
public set JointAssetLiabilityReportingTypeSpecified(value: boolean)
{
this.jointAssetLiabilityReportingTypeFieldSpecified = value;
}
public get MaritalStatusType(): BORROWERMaritalStatusType
{
return this.maritalStatusTypeField;
}
public set MaritalStatusType(value: BORROWERMaritalStatusType)
{
this.maritalStatusTypeField = value;
}
public get MaritalStatusTypeSpecified(): boolean
{
return this.maritalStatusTypeFieldSpecified;
}
public set MaritalStatusTypeSpecified(value: boolean)
{
this.maritalStatusTypeFieldSpecified = value;
}
public get SchoolingYears(): string
{
return this.schoolingYearsField;
}
public set SchoolingYears(value: string)
{
this.schoolingYearsField = value;
}
public get CreditReportIdentifier(): string
{
return this.creditReportIdentifierField;
}
public set CreditReportIdentifier(value: string)
{
this.creditReportIdentifierField = value;
}
public get BorrowerNonObligatedIndicator(): BORROWERBorrowerNonObligatedIndicator
{
return this.borrowerNonObligatedIndicatorField;
}
public set BorrowerNonObligatedIndicator(value: BORROWERBorrowerNonObligatedIndicator)
{
this.borrowerNonObligatedIndicatorField = value;
}
public get BorrowerNonObligatedIndicatorSpecified(): boolean
{
return this.borrowerNonObligatedIndicatorFieldSpecified;
}
public set BorrowerNonObligatedIndicatorSpecified(value: boolean)
{
this.borrowerNonObligatedIndicatorFieldSpecified = value;
}
public get NonPersonEntityIndicator(): BORROWERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: BORROWERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _RelationshipTitleType(): BORROWER_RelationshipTitleType
{
return this._RelationshipTitleTypeField;
}
public set _RelationshipTitleType(value: BORROWER_RelationshipTitleType)
{
this._RelationshipTitleTypeField = value;
}
public get _RelationshipTitleTypeSpecified(): boolean
{
return this._RelationshipTitleTypeFieldSpecified;
}
public set _RelationshipTitleTypeSpecified(value: boolean)
{
this._RelationshipTitleTypeFieldSpecified = value;
}
public get _RelationshipTitleTypeOtherDescription(): string
{
return this._RelationshipTitleTypeOtherDescriptionField;
}
public set _RelationshipTitleTypeOtherDescription(value: string)
{
this._RelationshipTitleTypeOtherDescriptionField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get BorrowerIsCosignerIndicator(): BORROWERBorrowerIsCosignerIndicator
{
return this.borrowerIsCosignerIndicatorField;
}
public set BorrowerIsCosignerIndicator(value: BORROWERBorrowerIsCosignerIndicator)
{
this.borrowerIsCosignerIndicatorField = value;
}
public get BorrowerIsCosignerIndicatorSpecified(): boolean
{
return this.borrowerIsCosignerIndicatorFieldSpecified;
}
public set BorrowerIsCosignerIndicatorSpecified(value: boolean)
{
this.borrowerIsCosignerIndicatorFieldSpecified = value;
}
public get URLABorrowerTotalOtherIncomeAmount(): string
{
return this.uRLABorrowerTotalOtherIncomeAmountField;
}
public set URLABorrowerTotalOtherIncomeAmount(value: string)
{
this.uRLABorrowerTotalOtherIncomeAmountField = value;
}
public get URLABorrowerTotalMonthlyIncomeAmount(): string
{
return this.uRLABorrowerTotalMonthlyIncomeAmountField;
}
public set URLABorrowerTotalMonthlyIncomeAmount(value: string)
{
this.uRLABorrowerTotalMonthlyIncomeAmountField = value;
}
public get BorrowerNonTitleSpouseIndicator(): BORROWERBorrowerNonTitleSpouseIndicator
{
return this.borrowerNonTitleSpouseIndicatorField;
}
public set BorrowerNonTitleSpouseIndicator(value: BORROWERBorrowerNonTitleSpouseIndicator)
{
this.borrowerNonTitleSpouseIndicatorField = value;
}
public get BorrowerNonTitleSpouseIndicatorSpecified(): boolean
{
return this.borrowerNonTitleSpouseIndicatorFieldSpecified;
}
public set BorrowerNonTitleSpouseIndicatorSpecified(value: boolean)
{
this.borrowerNonTitleSpouseIndicatorFieldSpecified = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _ALIAS 
{
private _FirstNameField:string ;
private _LastNameField:string ;
private _MiddleNameField:string ;
private _NameSuffixField:string ;
private _SequenceIdentifierField:string ;
private _TypeField:_ALIAS_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _UnparsedNameField:string ;
private _CreditorNameField:string ;
private _AccountIdentifierField:string ;
private _IDField:string ;
private _TaxReturnIndicatorField:_ALIAS_TaxReturnIndicator ;
private _TaxReturnIndicatorFieldSpecified:boolean ;
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _Type(): _ALIAS_Type
{
return this._TypeField;
}
public set _Type(value: _ALIAS_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _CreditorName(): string
{
return this._CreditorNameField;
}
public set _CreditorName(value: string)
{
this._CreditorNameField = value;
}
public get _AccountIdentifier(): string
{
return this._AccountIdentifierField;
}
public set _AccountIdentifier(value: string)
{
this._AccountIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _TaxReturnIndicator(): _ALIAS_TaxReturnIndicator
{
return this._TaxReturnIndicatorField;
}
public set _TaxReturnIndicator(value: _ALIAS_TaxReturnIndicator)
{
this._TaxReturnIndicatorField = value;
}
public get _TaxReturnIndicatorSpecified(): boolean
{
return this._TaxReturnIndicatorFieldSpecified;
}
public set _TaxReturnIndicatorSpecified(value: boolean)
{
this._TaxReturnIndicatorFieldSpecified = value;
} 
}
export enum _ALIAS_Type {
 AlsoKnownAs,

Other,

FormerlyKnownAs,

NowKnownAs
 }
export enum _ALIAS_TaxReturnIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _MAIL_TO 
{
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _AddressSameAsPropertyIndicatorField:_MAIL_TO_AddressSameAsPropertyIndicator ;
private _AddressSameAsPropertyIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _AddressSameAsPropertyIndicator(): _MAIL_TO_AddressSameAsPropertyIndicator
{
return this._AddressSameAsPropertyIndicatorField;
}
public set _AddressSameAsPropertyIndicator(value: _MAIL_TO_AddressSameAsPropertyIndicator)
{
this._AddressSameAsPropertyIndicatorField = value;
}
public get _AddressSameAsPropertyIndicatorSpecified(): boolean
{
return this._AddressSameAsPropertyIndicatorFieldSpecified;
}
public set _AddressSameAsPropertyIndicatorSpecified(value: boolean)
{
this._AddressSameAsPropertyIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _MAIL_TO_AddressSameAsPropertyIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _RESIDENCE 
{
private lANDLORDField:LANDLORD ;
private _StreetAddressField:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private borrowerResidencyBasisTypeField:_RESIDENCEBorrowerResidencyBasisType ;
private borrowerResidencyBasisTypeFieldSpecified:boolean ;
private borrowerResidencyDurationMonthsField:string ;
private borrowerResidencyDurationYearsField:string ;
private borrowerResidencyTypeField:_RESIDENCEBorrowerResidencyType ;
private borrowerResidencyTypeFieldSpecified:boolean ;
private _IDField:string ;
private _StreetAddress2Field:string ;
private _CountyField:string ;
public get LANDLORD(): LANDLORD
{
return this.lANDLORDField;
}
public set LANDLORD(value: LANDLORD)
{
this.lANDLORDField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get BorrowerResidencyBasisType(): _RESIDENCEBorrowerResidencyBasisType
{
return this.borrowerResidencyBasisTypeField;
}
public set BorrowerResidencyBasisType(value: _RESIDENCEBorrowerResidencyBasisType)
{
this.borrowerResidencyBasisTypeField = value;
}
public get BorrowerResidencyBasisTypeSpecified(): boolean
{
return this.borrowerResidencyBasisTypeFieldSpecified;
}
public set BorrowerResidencyBasisTypeSpecified(value: boolean)
{
this.borrowerResidencyBasisTypeFieldSpecified = value;
}
public get BorrowerResidencyDurationMonths(): string
{
return this.borrowerResidencyDurationMonthsField;
}
public set BorrowerResidencyDurationMonths(value: string)
{
this.borrowerResidencyDurationMonthsField = value;
}
public get BorrowerResidencyDurationYears(): string
{
return this.borrowerResidencyDurationYearsField;
}
public set BorrowerResidencyDurationYears(value: string)
{
this.borrowerResidencyDurationYearsField = value;
}
public get BorrowerResidencyType(): _RESIDENCEBorrowerResidencyType
{
return this.borrowerResidencyTypeField;
}
public set BorrowerResidencyType(value: _RESIDENCEBorrowerResidencyType)
{
this.borrowerResidencyTypeField = value;
}
public get BorrowerResidencyTypeSpecified(): boolean
{
return this.borrowerResidencyTypeFieldSpecified;
}
public set BorrowerResidencyTypeSpecified(value: boolean)
{
this.borrowerResidencyTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LANDLORD 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _NameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _RESIDENCEBorrowerResidencyBasisType {
 Unknown,

LivingRentFree,

Own,

Rent
 }
export enum _RESIDENCEBorrowerResidencyType {
 Current,

Prior
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CURRENT_INCOME 
{
private incomeTypeField:CURRENT_INCOMEIncomeType ;
private incomeTypeFieldSpecified:boolean ;
private _MonthlyTotalAmountField:string ;
private _IDField:string ;
private incomeFederalTaxExemptIndicatorField:CURRENT_INCOMEIncomeFederalTaxExemptIndicator ;
private incomeFederalTaxExemptIndicatorFieldSpecified:boolean ;
private incomeTypeOtherDescriptionField:string ;
public get IncomeType(): CURRENT_INCOMEIncomeType
{
return this.incomeTypeField;
}
public set IncomeType(value: CURRENT_INCOMEIncomeType)
{
this.incomeTypeField = value;
}
public get IncomeTypeSpecified(): boolean
{
return this.incomeTypeFieldSpecified;
}
public set IncomeTypeSpecified(value: boolean)
{
this.incomeTypeFieldSpecified = value;
}
public get _MonthlyTotalAmount(): string
{
return this._MonthlyTotalAmountField;
}
public set _MonthlyTotalAmount(value: string)
{
this._MonthlyTotalAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get IncomeFederalTaxExemptIndicator(): CURRENT_INCOMEIncomeFederalTaxExemptIndicator
{
return this.incomeFederalTaxExemptIndicatorField;
}
public set IncomeFederalTaxExemptIndicator(value: CURRENT_INCOMEIncomeFederalTaxExemptIndicator)
{
this.incomeFederalTaxExemptIndicatorField = value;
}
public get IncomeFederalTaxExemptIndicatorSpecified(): boolean
{
return this.incomeFederalTaxExemptIndicatorFieldSpecified;
}
public set IncomeFederalTaxExemptIndicatorSpecified(value: boolean)
{
this.incomeFederalTaxExemptIndicatorFieldSpecified = value;
}
public get IncomeTypeOtherDescription(): string
{
return this.incomeTypeOtherDescriptionField;
}
public set IncomeTypeOtherDescription(value: string)
{
this.incomeTypeOtherDescriptionField = value;
} 
}
export enum CURRENT_INCOMEIncomeType {
 FosterCare,

Pension,

SubjectPropertyNetCashFlow,

DividendsInterest,

RealEstateOwnedGrossRentalIncome,

Trust,

SocialSecurity,

Commissions,

PublicAssistance,

Bonus,

AlimonyChildSupport,

BorrowerEstimatedTotalMonthlyIncome,

WorkersCompensation,

MortgageCreditCertificate,

MilitaryPropPay,

MortgageDifferential,

VABenefitsNonEducational,

MilitaryHazardPay,

MilitaryFlightPay,

Base,

ContractBasis,

NetRentalIncome,

BoarderIncome,

AutomobileExpenseAccount,

Unemployment,

MilitaryCombatPay,

MilitaryQuartersAllowance,

TrailingCoBorrowerIncome,

ProposedGrossRentForSubjectProperty,

MilitaryRationsAllowance,

MilitaryVariableHousingAllowance,

Overtime,

NotesReceivableInstallment,

MilitaryOverseasPay,

OtherTypesOfIncome,

MilitaryClothesAllowance,

MilitaryBasePay
 }
export enum CURRENT_INCOMEIncomeFederalTaxExemptIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class DECLARATION 
{
private _EXPLANATIONField:_EXPLANATION[] ;
private alimonyChildSupportObligationIndicatorField:DECLARATIONAlimonyChildSupportObligationIndicator ;
private alimonyChildSupportObligationIndicatorFieldSpecified:boolean ;
private bankruptcyIndicatorField:DECLARATIONBankruptcyIndicator ;
private bankruptcyIndicatorFieldSpecified:boolean ;
private borrowedDownPaymentIndicatorField:DECLARATIONBorrowedDownPaymentIndicator ;
private borrowedDownPaymentIndicatorFieldSpecified:boolean ;
private citizenshipResidencyTypeField:DECLARATIONCitizenshipResidencyType ;
private citizenshipResidencyTypeFieldSpecified:boolean ;
private coMakerEndorserOfNoteIndicatorField:DECLARATIONCoMakerEndorserOfNoteIndicator ;
private coMakerEndorserOfNoteIndicatorFieldSpecified:boolean ;
private homeownerPastThreeYearsTypeField:DECLARATIONHomeownerPastThreeYearsType ;
private homeownerPastThreeYearsTypeFieldSpecified:boolean ;
private intentToOccupyTypeField:DECLARATIONIntentToOccupyType ;
private intentToOccupyTypeFieldSpecified:boolean ;
private loanForeclosureOrJudgementIndicatorField:DECLARATIONLoanForeclosureOrJudgementIndicator ;
private loanForeclosureOrJudgementIndicatorFieldSpecified:boolean ;
private outstandingJudgementsIndicatorField:DECLARATIONOutstandingJudgementsIndicator ;
private outstandingJudgementsIndicatorFieldSpecified:boolean ;
private partyToLawsuitIndicatorField:DECLARATIONPartyToLawsuitIndicator ;
private partyToLawsuitIndicatorFieldSpecified:boolean ;
private presentlyDelinquentIndicatorField:DECLARATIONPresentlyDelinquentIndicator ;
private presentlyDelinquentIndicatorFieldSpecified:boolean ;
private priorPropertyTitleTypeField:DECLARATIONPriorPropertyTitleType ;
private priorPropertyTitleTypeFieldSpecified:boolean ;
private priorPropertyUsageTypeField:DECLARATIONPriorPropertyUsageType ;
private priorPropertyUsageTypeFieldSpecified:boolean ;
private propertyForeclosedPastSevenYearsIndicatorField:DECLARATIONPropertyForeclosedPastSevenYearsIndicator ;
private propertyForeclosedPastSevenYearsIndicatorFieldSpecified:boolean ;
private borrowerFirstTimeHomebuyerIndicatorField:DECLARATIONBorrowerFirstTimeHomebuyerIndicator ;
private borrowerFirstTimeHomebuyerIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private loanForeclosureOrJudgmentIndicatorField:DECLARATIONLoanForeclosureOrJudgmentIndicator ;
private loanForeclosureOrJudgmentIndicatorFieldSpecified:boolean ;
private outstandingJudgmentsIndicatorField:DECLARATIONOutstandingJudgmentsIndicator ;
private outstandingJudgmentsIndicatorFieldSpecified:boolean ;
public get _EXPLANATION(): _EXPLANATION[]
{
return this._EXPLANATIONField;
}
public set _EXPLANATION(value: _EXPLANATION[])
{
this._EXPLANATIONField = value;
}
public get AlimonyChildSupportObligationIndicator(): DECLARATIONAlimonyChildSupportObligationIndicator
{
return this.alimonyChildSupportObligationIndicatorField;
}
public set AlimonyChildSupportObligationIndicator(value: DECLARATIONAlimonyChildSupportObligationIndicator)
{
this.alimonyChildSupportObligationIndicatorField = value;
}
public get AlimonyChildSupportObligationIndicatorSpecified(): boolean
{
return this.alimonyChildSupportObligationIndicatorFieldSpecified;
}
public set AlimonyChildSupportObligationIndicatorSpecified(value: boolean)
{
this.alimonyChildSupportObligationIndicatorFieldSpecified = value;
}
public get BankruptcyIndicator(): DECLARATIONBankruptcyIndicator
{
return this.bankruptcyIndicatorField;
}
public set BankruptcyIndicator(value: DECLARATIONBankruptcyIndicator)
{
this.bankruptcyIndicatorField = value;
}
public get BankruptcyIndicatorSpecified(): boolean
{
return this.bankruptcyIndicatorFieldSpecified;
}
public set BankruptcyIndicatorSpecified(value: boolean)
{
this.bankruptcyIndicatorFieldSpecified = value;
}
public get BorrowedDownPaymentIndicator(): DECLARATIONBorrowedDownPaymentIndicator
{
return this.borrowedDownPaymentIndicatorField;
}
public set BorrowedDownPaymentIndicator(value: DECLARATIONBorrowedDownPaymentIndicator)
{
this.borrowedDownPaymentIndicatorField = value;
}
public get BorrowedDownPaymentIndicatorSpecified(): boolean
{
return this.borrowedDownPaymentIndicatorFieldSpecified;
}
public set BorrowedDownPaymentIndicatorSpecified(value: boolean)
{
this.borrowedDownPaymentIndicatorFieldSpecified = value;
}
public get CitizenshipResidencyType(): DECLARATIONCitizenshipResidencyType
{
return this.citizenshipResidencyTypeField;
}
public set CitizenshipResidencyType(value: DECLARATIONCitizenshipResidencyType)
{
this.citizenshipResidencyTypeField = value;
}
public get CitizenshipResidencyTypeSpecified(): boolean
{
return this.citizenshipResidencyTypeFieldSpecified;
}
public set CitizenshipResidencyTypeSpecified(value: boolean)
{
this.citizenshipResidencyTypeFieldSpecified = value;
}
public get CoMakerEndorserOfNoteIndicator(): DECLARATIONCoMakerEndorserOfNoteIndicator
{
return this.coMakerEndorserOfNoteIndicatorField;
}
public set CoMakerEndorserOfNoteIndicator(value: DECLARATIONCoMakerEndorserOfNoteIndicator)
{
this.coMakerEndorserOfNoteIndicatorField = value;
}
public get CoMakerEndorserOfNoteIndicatorSpecified(): boolean
{
return this.coMakerEndorserOfNoteIndicatorFieldSpecified;
}
public set CoMakerEndorserOfNoteIndicatorSpecified(value: boolean)
{
this.coMakerEndorserOfNoteIndicatorFieldSpecified = value;
}
public get HomeownerPastThreeYearsType(): DECLARATIONHomeownerPastThreeYearsType
{
return this.homeownerPastThreeYearsTypeField;
}
public set HomeownerPastThreeYearsType(value: DECLARATIONHomeownerPastThreeYearsType)
{
this.homeownerPastThreeYearsTypeField = value;
}
public get HomeownerPastThreeYearsTypeSpecified(): boolean
{
return this.homeownerPastThreeYearsTypeFieldSpecified;
}
public set HomeownerPastThreeYearsTypeSpecified(value: boolean)
{
this.homeownerPastThreeYearsTypeFieldSpecified = value;
}
public get IntentToOccupyType(): DECLARATIONIntentToOccupyType
{
return this.intentToOccupyTypeField;
}
public set IntentToOccupyType(value: DECLARATIONIntentToOccupyType)
{
this.intentToOccupyTypeField = value;
}
public get IntentToOccupyTypeSpecified(): boolean
{
return this.intentToOccupyTypeFieldSpecified;
}
public set IntentToOccupyTypeSpecified(value: boolean)
{
this.intentToOccupyTypeFieldSpecified = value;
}
public get LoanForeclosureOrJudgementIndicator(): DECLARATIONLoanForeclosureOrJudgementIndicator
{
return this.loanForeclosureOrJudgementIndicatorField;
}
public set LoanForeclosureOrJudgementIndicator(value: DECLARATIONLoanForeclosureOrJudgementIndicator)
{
this.loanForeclosureOrJudgementIndicatorField = value;
}
public get LoanForeclosureOrJudgementIndicatorSpecified(): boolean
{
return this.loanForeclosureOrJudgementIndicatorFieldSpecified;
}
public set LoanForeclosureOrJudgementIndicatorSpecified(value: boolean)
{
this.loanForeclosureOrJudgementIndicatorFieldSpecified = value;
}
public get OutstandingJudgementsIndicator(): DECLARATIONOutstandingJudgementsIndicator
{
return this.outstandingJudgementsIndicatorField;
}
public set OutstandingJudgementsIndicator(value: DECLARATIONOutstandingJudgementsIndicator)
{
this.outstandingJudgementsIndicatorField = value;
}
public get OutstandingJudgementsIndicatorSpecified(): boolean
{
return this.outstandingJudgementsIndicatorFieldSpecified;
}
public set OutstandingJudgementsIndicatorSpecified(value: boolean)
{
this.outstandingJudgementsIndicatorFieldSpecified = value;
}
public get PartyToLawsuitIndicator(): DECLARATIONPartyToLawsuitIndicator
{
return this.partyToLawsuitIndicatorField;
}
public set PartyToLawsuitIndicator(value: DECLARATIONPartyToLawsuitIndicator)
{
this.partyToLawsuitIndicatorField = value;
}
public get PartyToLawsuitIndicatorSpecified(): boolean
{
return this.partyToLawsuitIndicatorFieldSpecified;
}
public set PartyToLawsuitIndicatorSpecified(value: boolean)
{
this.partyToLawsuitIndicatorFieldSpecified = value;
}
public get PresentlyDelinquentIndicator(): DECLARATIONPresentlyDelinquentIndicator
{
return this.presentlyDelinquentIndicatorField;
}
public set PresentlyDelinquentIndicator(value: DECLARATIONPresentlyDelinquentIndicator)
{
this.presentlyDelinquentIndicatorField = value;
}
public get PresentlyDelinquentIndicatorSpecified(): boolean
{
return this.presentlyDelinquentIndicatorFieldSpecified;
}
public set PresentlyDelinquentIndicatorSpecified(value: boolean)
{
this.presentlyDelinquentIndicatorFieldSpecified = value;
}
public get PriorPropertyTitleType(): DECLARATIONPriorPropertyTitleType
{
return this.priorPropertyTitleTypeField;
}
public set PriorPropertyTitleType(value: DECLARATIONPriorPropertyTitleType)
{
this.priorPropertyTitleTypeField = value;
}
public get PriorPropertyTitleTypeSpecified(): boolean
{
return this.priorPropertyTitleTypeFieldSpecified;
}
public set PriorPropertyTitleTypeSpecified(value: boolean)
{
this.priorPropertyTitleTypeFieldSpecified = value;
}
public get PriorPropertyUsageType(): DECLARATIONPriorPropertyUsageType
{
return this.priorPropertyUsageTypeField;
}
public set PriorPropertyUsageType(value: DECLARATIONPriorPropertyUsageType)
{
this.priorPropertyUsageTypeField = value;
}
public get PriorPropertyUsageTypeSpecified(): boolean
{
return this.priorPropertyUsageTypeFieldSpecified;
}
public set PriorPropertyUsageTypeSpecified(value: boolean)
{
this.priorPropertyUsageTypeFieldSpecified = value;
}
public get PropertyForeclosedPastSevenYearsIndicator(): DECLARATIONPropertyForeclosedPastSevenYearsIndicator
{
return this.propertyForeclosedPastSevenYearsIndicatorField;
}
public set PropertyForeclosedPastSevenYearsIndicator(value: DECLARATIONPropertyForeclosedPastSevenYearsIndicator)
{
this.propertyForeclosedPastSevenYearsIndicatorField = value;
}
public get PropertyForeclosedPastSevenYearsIndicatorSpecified(): boolean
{
return this.propertyForeclosedPastSevenYearsIndicatorFieldSpecified;
}
public set PropertyForeclosedPastSevenYearsIndicatorSpecified(value: boolean)
{
this.propertyForeclosedPastSevenYearsIndicatorFieldSpecified = value;
}
public get BorrowerFirstTimeHomebuyerIndicator(): DECLARATIONBorrowerFirstTimeHomebuyerIndicator
{
return this.borrowerFirstTimeHomebuyerIndicatorField;
}
public set BorrowerFirstTimeHomebuyerIndicator(value: DECLARATIONBorrowerFirstTimeHomebuyerIndicator)
{
this.borrowerFirstTimeHomebuyerIndicatorField = value;
}
public get BorrowerFirstTimeHomebuyerIndicatorSpecified(): boolean
{
return this.borrowerFirstTimeHomebuyerIndicatorFieldSpecified;
}
public set BorrowerFirstTimeHomebuyerIndicatorSpecified(value: boolean)
{
this.borrowerFirstTimeHomebuyerIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get LoanForeclosureOrJudgmentIndicator(): DECLARATIONLoanForeclosureOrJudgmentIndicator
{
return this.loanForeclosureOrJudgmentIndicatorField;
}
public set LoanForeclosureOrJudgmentIndicator(value: DECLARATIONLoanForeclosureOrJudgmentIndicator)
{
this.loanForeclosureOrJudgmentIndicatorField = value;
}
public get LoanForeclosureOrJudgmentIndicatorSpecified(): boolean
{
return this.loanForeclosureOrJudgmentIndicatorFieldSpecified;
}
public set LoanForeclosureOrJudgmentIndicatorSpecified(value: boolean)
{
this.loanForeclosureOrJudgmentIndicatorFieldSpecified = value;
}
public get OutstandingJudgmentsIndicator(): DECLARATIONOutstandingJudgmentsIndicator
{
return this.outstandingJudgmentsIndicatorField;
}
public set OutstandingJudgmentsIndicator(value: DECLARATIONOutstandingJudgmentsIndicator)
{
this.outstandingJudgmentsIndicatorField = value;
}
public get OutstandingJudgmentsIndicatorSpecified(): boolean
{
return this.outstandingJudgmentsIndicatorFieldSpecified;
}
public set OutstandingJudgmentsIndicatorSpecified(value: boolean)
{
this.outstandingJudgmentsIndicatorFieldSpecified = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _EXPLANATION 
{
private _DescriptionField:string ;
private _TypeField:_EXPLANATION_Type ;
private _TypeFieldSpecified:boolean ;
private _IDField:string ;
public get _Description(): string
{
return this._DescriptionField;
}
public set _Description(value: string)
{
this._DescriptionField = value;
}
public get _Type(): _EXPLANATION_Type
{
return this._TypeField;
}
public set _Type(value: _EXPLANATION_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _EXPLANATION_Type {
 ObligatedOnLoanForeclosedOrDeedInLieuOfJudgement,

PartyToLawsuit,

DelinquencyOrDefault,

AlimonyChildSupport,

CoMakerEndorserOnNote,

OutstandingJudgments,

DirectIndirectForeclosedPropertyPastSevenYears,

BorrowedDownPayment,

ObligatedOnLoanForeclosedOrDeedInLieuOfJudgment,

DeclaredBankruptcyPastSevenYears
 }
export enum DECLARATIONAlimonyChildSupportObligationIndicator {
 N,

Y
 }
export enum DECLARATIONBankruptcyIndicator {
 N,

Y
 }
export enum DECLARATIONBorrowedDownPaymentIndicator {
 N,

Y
 }
export enum DECLARATIONCitizenshipResidencyType {
 Unknown,

NonPermanentResidentAlien,

NonResidentAlien,

USCitizen,

PermanentResidentAlien
 }
export enum DECLARATIONCoMakerEndorserOfNoteIndicator {
 N,

Y
 }
export enum DECLARATIONHomeownerPastThreeYearsType {
 Yes,

No,

Unknown
 }
export enum DECLARATIONIntentToOccupyType {
 Yes,

No,

Unknown
 }
export enum DECLARATIONLoanForeclosureOrJudgementIndicator {
 N,

Y
 }
export enum DECLARATIONOutstandingJudgementsIndicator {
 N,

Y
 }
export enum DECLARATIONPartyToLawsuitIndicator {
 N,

Y
 }
export enum DECLARATIONPresentlyDelinquentIndicator {
 N,

Y
 }
export enum DECLARATIONPriorPropertyTitleType {
 JointWithOtherThanSpouse,

JointWithSpouse,

Sole
 }
export enum DECLARATIONPriorPropertyUsageType {
 PrimaryResidence,

SecondaryResidence,

Investment
 }
export enum DECLARATIONPropertyForeclosedPastSevenYearsIndicator {
 N,

Y
 }
export enum DECLARATIONBorrowerFirstTimeHomebuyerIndicator {
 N,

Y
 }
export enum DECLARATIONLoanForeclosureOrJudgmentIndicator {
 N,

Y
 }
export enum DECLARATIONOutstandingJudgmentsIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class DEPENDENT 
{
private _AgeYearsField:string ;
private _IDField:string ;
public get _AgeYears(): string
{
return this._AgeYearsField;
}
public set _AgeYears(value: string)
{
this._AgeYearsField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class EMPLOYER 
{
private _NameField:string ;
private _StreetAddressField:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _TelephoneNumberField:string ;
private currentEmploymentMonthsOnJobField:string ;
private currentEmploymentTimeInLineOfWorkYearsField:string ;
private currentEmploymentYearsOnJobField:string ;
private employmentBorrowerSelfEmployedIndicatorField:EMPLOYEREmploymentBorrowerSelfEmployedIndicator ;
private employmentBorrowerSelfEmployedIndicatorFieldSpecified:boolean ;
private employmentCurrentIndicatorField:EMPLOYEREmploymentCurrentIndicator ;
private employmentCurrentIndicatorFieldSpecified:boolean ;
private employmentPositionDescriptionField:string ;
private employmentPrimaryIndicatorField:EMPLOYEREmploymentPrimaryIndicator ;
private employmentPrimaryIndicatorFieldSpecified:boolean ;
private incomeEmploymentMonthlyAmountField:string ;
private previousEmploymentEndDateField:string ;
private previousEmploymentStartDateField:string ;
private _IDField:string ;
private specialBorrowerEmployerRelationshipTypeField:EMPLOYERSpecialBorrowerEmployerRelationshipType ;
private specialBorrowerEmployerRelationshipTypeFieldSpecified:boolean ;
private specialBorrowerEmployerRelationshipTypeOtherDescriptionField:string ;
private employedAbroadIndicatorField:EMPLOYEREmployedAbroadIndicator ;
private employedAbroadIndicatorFieldSpecified:boolean ;
private _CountryField:string ;
private currentEmploymentStartDateField:string ;
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _TelephoneNumber(): string
{
return this._TelephoneNumberField;
}
public set _TelephoneNumber(value: string)
{
this._TelephoneNumberField = value;
}
public get CurrentEmploymentMonthsOnJob(): string
{
return this.currentEmploymentMonthsOnJobField;
}
public set CurrentEmploymentMonthsOnJob(value: string)
{
this.currentEmploymentMonthsOnJobField = value;
}
public get CurrentEmploymentTimeInLineOfWorkYears(): string
{
return this.currentEmploymentTimeInLineOfWorkYearsField;
}
public set CurrentEmploymentTimeInLineOfWorkYears(value: string)
{
this.currentEmploymentTimeInLineOfWorkYearsField = value;
}
public get CurrentEmploymentYearsOnJob(): string
{
return this.currentEmploymentYearsOnJobField;
}
public set CurrentEmploymentYearsOnJob(value: string)
{
this.currentEmploymentYearsOnJobField = value;
}
public get EmploymentBorrowerSelfEmployedIndicator(): EMPLOYEREmploymentBorrowerSelfEmployedIndicator
{
return this.employmentBorrowerSelfEmployedIndicatorField;
}
public set EmploymentBorrowerSelfEmployedIndicator(value: EMPLOYEREmploymentBorrowerSelfEmployedIndicator)
{
this.employmentBorrowerSelfEmployedIndicatorField = value;
}
public get EmploymentBorrowerSelfEmployedIndicatorSpecified(): boolean
{
return this.employmentBorrowerSelfEmployedIndicatorFieldSpecified;
}
public set EmploymentBorrowerSelfEmployedIndicatorSpecified(value: boolean)
{
this.employmentBorrowerSelfEmployedIndicatorFieldSpecified = value;
}
public get EmploymentCurrentIndicator(): EMPLOYEREmploymentCurrentIndicator
{
return this.employmentCurrentIndicatorField;
}
public set EmploymentCurrentIndicator(value: EMPLOYEREmploymentCurrentIndicator)
{
this.employmentCurrentIndicatorField = value;
}
public get EmploymentCurrentIndicatorSpecified(): boolean
{
return this.employmentCurrentIndicatorFieldSpecified;
}
public set EmploymentCurrentIndicatorSpecified(value: boolean)
{
this.employmentCurrentIndicatorFieldSpecified = value;
}
public get EmploymentPositionDescription(): string
{
return this.employmentPositionDescriptionField;
}
public set EmploymentPositionDescription(value: string)
{
this.employmentPositionDescriptionField = value;
}
public get EmploymentPrimaryIndicator(): EMPLOYEREmploymentPrimaryIndicator
{
return this.employmentPrimaryIndicatorField;
}
public set EmploymentPrimaryIndicator(value: EMPLOYEREmploymentPrimaryIndicator)
{
this.employmentPrimaryIndicatorField = value;
}
public get EmploymentPrimaryIndicatorSpecified(): boolean
{
return this.employmentPrimaryIndicatorFieldSpecified;
}
public set EmploymentPrimaryIndicatorSpecified(value: boolean)
{
this.employmentPrimaryIndicatorFieldSpecified = value;
}
public get IncomeEmploymentMonthlyAmount(): string
{
return this.incomeEmploymentMonthlyAmountField;
}
public set IncomeEmploymentMonthlyAmount(value: string)
{
this.incomeEmploymentMonthlyAmountField = value;
}
public get PreviousEmploymentEndDate(): string
{
return this.previousEmploymentEndDateField;
}
public set PreviousEmploymentEndDate(value: string)
{
this.previousEmploymentEndDateField = value;
}
public get PreviousEmploymentStartDate(): string
{
return this.previousEmploymentStartDateField;
}
public set PreviousEmploymentStartDate(value: string)
{
this.previousEmploymentStartDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get SpecialBorrowerEmployerRelationshipType(): EMPLOYERSpecialBorrowerEmployerRelationshipType
{
return this.specialBorrowerEmployerRelationshipTypeField;
}
public set SpecialBorrowerEmployerRelationshipType(value: EMPLOYERSpecialBorrowerEmployerRelationshipType)
{
this.specialBorrowerEmployerRelationshipTypeField = value;
}
public get SpecialBorrowerEmployerRelationshipTypeSpecified(): boolean
{
return this.specialBorrowerEmployerRelationshipTypeFieldSpecified;
}
public set SpecialBorrowerEmployerRelationshipTypeSpecified(value: boolean)
{
this.specialBorrowerEmployerRelationshipTypeFieldSpecified = value;
}
public get SpecialBorrowerEmployerRelationshipTypeOtherDescription(): string
{
return this.specialBorrowerEmployerRelationshipTypeOtherDescriptionField;
}
public set SpecialBorrowerEmployerRelationshipTypeOtherDescription(value: string)
{
this.specialBorrowerEmployerRelationshipTypeOtherDescriptionField = value;
}
public get EmployedAbroadIndicator(): EMPLOYEREmployedAbroadIndicator
{
return this.employedAbroadIndicatorField;
}
public set EmployedAbroadIndicator(value: EMPLOYEREmployedAbroadIndicator)
{
this.employedAbroadIndicatorField = value;
}
public get EmployedAbroadIndicatorSpecified(): boolean
{
return this.employedAbroadIndicatorFieldSpecified;
}
public set EmployedAbroadIndicatorSpecified(value: boolean)
{
this.employedAbroadIndicatorFieldSpecified = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get CurrentEmploymentStartDate(): string
{
return this.currentEmploymentStartDateField;
}
public set CurrentEmploymentStartDate(value: string)
{
this.currentEmploymentStartDateField = value;
} 
}
export enum EMPLOYEREmploymentBorrowerSelfEmployedIndicator {
 N,

Y
 }
export enum EMPLOYEREmploymentCurrentIndicator {
 N,

Y
 }
export enum EMPLOYEREmploymentPrimaryIndicator {
 N,

Y
 }
export enum EMPLOYERSpecialBorrowerEmployerRelationshipType {
 Other,

PropertySeller,

RealEstateBroker,

EmployedByRelative
 }
export enum EMPLOYEREmployedAbroadIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class FHA_VA_BORROWER 
{
private cAIVRSIdentifierField:string ;
private fNMBankruptcyCountField:string ;
private fNMBorrowerCreditRatingField:string ;
private fNMCreditReportScoreTypeField:FHA_VA_BORROWERFNMCreditReportScoreType ;
private fNMCreditReportScoreTypeFieldSpecified:boolean ;
private fNMForeclosureCountField:string ;
private veteranStatusIndicatorField:FHA_VA_BORROWERVeteranStatusIndicator ;
private veteranStatusIndicatorFieldSpecified:boolean ;
private _CertificationSalesPriceExceedsAppraisedValueTypeField:FHA_VA_BORROWER_CertificationSalesPriceExceedsAppraisedValueType ;
private _CertificationSalesPriceExceedsAppraisedValueTypeFieldSpecified:boolean ;
private _IDField:string ;
public get CAIVRSIdentifier(): string
{
return this.cAIVRSIdentifierField;
}
public set CAIVRSIdentifier(value: string)
{
this.cAIVRSIdentifierField = value;
}
public get FNMBankruptcyCount(): string
{
return this.fNMBankruptcyCountField;
}
public set FNMBankruptcyCount(value: string)
{
this.fNMBankruptcyCountField = value;
}
public get FNMBorrowerCreditRating(): string
{
return this.fNMBorrowerCreditRatingField;
}
public set FNMBorrowerCreditRating(value: string)
{
this.fNMBorrowerCreditRatingField = value;
}
public get FNMCreditReportScoreType(): FHA_VA_BORROWERFNMCreditReportScoreType
{
return this.fNMCreditReportScoreTypeField;
}
public set FNMCreditReportScoreType(value: FHA_VA_BORROWERFNMCreditReportScoreType)
{
this.fNMCreditReportScoreTypeField = value;
}
public get FNMCreditReportScoreTypeSpecified(): boolean
{
return this.fNMCreditReportScoreTypeFieldSpecified;
}
public set FNMCreditReportScoreTypeSpecified(value: boolean)
{
this.fNMCreditReportScoreTypeFieldSpecified = value;
}
public get FNMForeclosureCount(): string
{
return this.fNMForeclosureCountField;
}
public set FNMForeclosureCount(value: string)
{
this.fNMForeclosureCountField = value;
}
public get VeteranStatusIndicator(): FHA_VA_BORROWERVeteranStatusIndicator
{
return this.veteranStatusIndicatorField;
}
public set VeteranStatusIndicator(value: FHA_VA_BORROWERVeteranStatusIndicator)
{
this.veteranStatusIndicatorField = value;
}
public get VeteranStatusIndicatorSpecified(): boolean
{
return this.veteranStatusIndicatorFieldSpecified;
}
public set VeteranStatusIndicatorSpecified(value: boolean)
{
this.veteranStatusIndicatorFieldSpecified = value;
}
public get _CertificationSalesPriceExceedsAppraisedValueType(): FHA_VA_BORROWER_CertificationSalesPriceExceedsAppraisedValueType
{
return this._CertificationSalesPriceExceedsAppraisedValueTypeField;
}
public set _CertificationSalesPriceExceedsAppraisedValueType(value: FHA_VA_BORROWER_CertificationSalesPriceExceedsAppraisedValueType)
{
this._CertificationSalesPriceExceedsAppraisedValueTypeField = value;
}
public get _CertificationSalesPriceExceedsAppraisedValueTypeSpecified(): boolean
{
return this._CertificationSalesPriceExceedsAppraisedValueTypeFieldSpecified;
}
public set _CertificationSalesPriceExceedsAppraisedValueTypeSpecified(value: boolean)
{
this._CertificationSalesPriceExceedsAppraisedValueTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum FHA_VA_BORROWERFNMCreditReportScoreType {
 FICO,

CreditQuote
 }
export enum FHA_VA_BORROWERVeteranStatusIndicator {
 N,

Y
 }
export enum FHA_VA_BORROWER_CertificationSalesPriceExceedsAppraisedValueType {
 A,

B
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GOVERNMENT_MONITORING 
{
private hMDA_RACEField:HMDA_RACE[] ;
private hMDAEthnicityTypeField:GOVERNMENT_MONITORINGHMDAEthnicityType ;
private hMDAEthnicityTypeFieldSpecified:boolean ;
private genderTypeField:GOVERNMENT_MONITORINGGenderType ;
private genderTypeFieldSpecified:boolean ;
private otherRaceNationalOriginDescriptionField:string ;
private raceNationalOriginRefusalIndicatorField:GOVERNMENT_MONITORINGRaceNationalOriginRefusalIndicator ;
private raceNationalOriginRefusalIndicatorFieldSpecified:boolean ;
private raceNationalOriginTypeField:GOVERNMENT_MONITORINGRaceNationalOriginType ;
private raceNationalOriginTypeFieldSpecified:boolean ;
private _IDField:string ;
public get HMDA_RACE(): HMDA_RACE[]
{
return this.hMDA_RACEField;
}
public set HMDA_RACE(value: HMDA_RACE[])
{
this.hMDA_RACEField = value;
}
public get HMDAEthnicityType(): GOVERNMENT_MONITORINGHMDAEthnicityType
{
return this.hMDAEthnicityTypeField;
}
public set HMDAEthnicityType(value: GOVERNMENT_MONITORINGHMDAEthnicityType)
{
this.hMDAEthnicityTypeField = value;
}
public get HMDAEthnicityTypeSpecified(): boolean
{
return this.hMDAEthnicityTypeFieldSpecified;
}
public set HMDAEthnicityTypeSpecified(value: boolean)
{
this.hMDAEthnicityTypeFieldSpecified = value;
}
public get GenderType(): GOVERNMENT_MONITORINGGenderType
{
return this.genderTypeField;
}
public set GenderType(value: GOVERNMENT_MONITORINGGenderType)
{
this.genderTypeField = value;
}
public get GenderTypeSpecified(): boolean
{
return this.genderTypeFieldSpecified;
}
public set GenderTypeSpecified(value: boolean)
{
this.genderTypeFieldSpecified = value;
}
public get OtherRaceNationalOriginDescription(): string
{
return this.otherRaceNationalOriginDescriptionField;
}
public set OtherRaceNationalOriginDescription(value: string)
{
this.otherRaceNationalOriginDescriptionField = value;
}
public get RaceNationalOriginRefusalIndicator(): GOVERNMENT_MONITORINGRaceNationalOriginRefusalIndicator
{
return this.raceNationalOriginRefusalIndicatorField;
}
public set RaceNationalOriginRefusalIndicator(value: GOVERNMENT_MONITORINGRaceNationalOriginRefusalIndicator)
{
this.raceNationalOriginRefusalIndicatorField = value;
}
public get RaceNationalOriginRefusalIndicatorSpecified(): boolean
{
return this.raceNationalOriginRefusalIndicatorFieldSpecified;
}
public set RaceNationalOriginRefusalIndicatorSpecified(value: boolean)
{
this.raceNationalOriginRefusalIndicatorFieldSpecified = value;
}
public get RaceNationalOriginType(): GOVERNMENT_MONITORINGRaceNationalOriginType
{
return this.raceNationalOriginTypeField;
}
public set RaceNationalOriginType(value: GOVERNMENT_MONITORINGRaceNationalOriginType)
{
this.raceNationalOriginTypeField = value;
}
public get RaceNationalOriginTypeSpecified(): boolean
{
return this.raceNationalOriginTypeFieldSpecified;
}
public set RaceNationalOriginTypeSpecified(value: boolean)
{
this.raceNationalOriginTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class HMDA_RACE 
{
private _TypeField:HMDA_RACE_Type ;
private _TypeFieldSpecified:boolean ;
private _IDField:string ;
public get _Type(): HMDA_RACE_Type
{
return this._TypeField;
}
public set _Type(value: HMDA_RACE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum HMDA_RACE_Type {
 NotApplicable,

BlackOrAfricanAmerican,

AmericanIndianOrAlaskaNative,

Asian,

InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication,

NativeHawaiianOrOtherPacificIslander,

White
 }
export enum GOVERNMENT_MONITORINGHMDAEthnicityType {
 NotApplicable,

HispanicOrLatino,

InformationNotProvidedByApplicantInMailInternetOrTelephoneApplication,

NotHispanicOrLatino
 }
export enum GOVERNMENT_MONITORINGGenderType {
 Female,

NotApplicable,

InformationNotProvidedUnknown,

Male
 }
export enum GOVERNMENT_MONITORINGRaceNationalOriginRefusalIndicator {
 N,

Y
 }
export enum GOVERNMENT_MONITORINGRaceNationalOriginType {
 NotApplicable,

InformationNotProvided,

AmericanIndianOrAlaskanNative,

WhiteNotOfHispanicOrigin,

BlackNotOfHispanicOrigin,

Other,

Hispanic,

AsianOrPacificIslander
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PRESENT_HOUSING_EXPENSE 
{
private housingExpenseTypeField:PRESENT_HOUSING_EXPENSEHousingExpenseType ;
private housingExpenseTypeFieldSpecified:boolean ;
private _PaymentAmountField:string ;
private _IDField:string ;
private housingExpenseTypeOtherDescriptionField:string ;
public get HousingExpenseType(): PRESENT_HOUSING_EXPENSEHousingExpenseType
{
return this.housingExpenseTypeField;
}
public set HousingExpenseType(value: PRESENT_HOUSING_EXPENSEHousingExpenseType)
{
this.housingExpenseTypeField = value;
}
public get HousingExpenseTypeSpecified(): boolean
{
return this.housingExpenseTypeFieldSpecified;
}
public set HousingExpenseTypeSpecified(value: boolean)
{
this.housingExpenseTypeFieldSpecified = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get HousingExpenseTypeOtherDescription(): string
{
return this.housingExpenseTypeOtherDescriptionField;
}
public set HousingExpenseTypeOtherDescription(value: string)
{
this.housingExpenseTypeOtherDescriptionField = value;
} 
}
export enum PRESENT_HOUSING_EXPENSEHousingExpenseType {
 HazardInsurance,

Utilities,

GroundRent,

HomeownersAssociationDuesAndCondominiumFees,

RealEstateTax,

FirstMortgagePITI,

MaintenanceAndMiscellaneous,

LeaseholdPayments,

OtherMortgageLoanPrincipalAndInterest,

MI,

OtherMortgageLoanPrincipalInterestTaxesAndInsurance,

OtherHousingExpense,

FirstMortgagePrincipalAndInterest,

Rent
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SUMMARY 
{
private _AmountField:string ;
private _AmountTypeField:SUMMARY_AmountType ;
private _AmountTypeFieldSpecified:boolean ;
private _IDField:string ;
private _AmountTypeOtherDescriptionField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _AmountType(): SUMMARY_AmountType
{
return this._AmountTypeField;
}
public set _AmountType(value: SUMMARY_AmountType)
{
this._AmountTypeField = value;
}
public get _AmountTypeSpecified(): boolean
{
return this._AmountTypeFieldSpecified;
}
public set _AmountTypeSpecified(value: boolean)
{
this._AmountTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _AmountTypeOtherDescription(): string
{
return this._AmountTypeOtherDescriptionField;
}
public set _AmountTypeOtherDescription(value: string)
{
this._AmountTypeOtherDescriptionField = value;
} 
}
export enum SUMMARY_AmountType {
 SubtotalResubordinatedLiabilitiesBalanceForSubjectProperty,

SubtotalLiabilitesMonthlyPayment,

TotalLiabilitesBalance,

SubtotalOmittedLiabilitiesBalance,

SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensBalance,

Other,

SubtotalSubjectPropertyLiensPaidByClosingBalance,

SubtotalLiabilitiesForRentalPropertyMonthlyPayment,

TotalPresentHousingExpense,

SubtotalLiabilitiesPaidByClosingNotIncludingSubjectPropertyLiensMonthlyPayment,

SubtotalLiabilitiesMonthlyPayment,

SubtotalOmittedLiabilitesBalance,

SubtotalOmittedLiabilitiesMonthlyPayment,

TotalMonthlyIncomeNotIncludingNetRentalIncome,

SubtotalSubjectPropertyLiensPaidByClosingMonthlyPayment,

UndrawnHELOC,

SubtotalNonLiquidAssets,

TotalLiabilitiesBalance,

SubtotalResubordinatedLiabilitiesMonthlyPaymentForSubjectProperty,

SubtotalLiquidAssetsNotIncludingGift,

SubtotalLiabilitiesForRentalPropertyBalance,

SubtotalResubordinatedLiabilitesMonthlyPaymentForSubjectProperty
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class VA_BORROWER 
{
private mILITARY_SERVICEField:MILITARY_SERVICE[] ;
private _PREVIOUS_VA_LOANField:_PREVIOUS_VA_LOAN[] ;
private vACoBorrowerNonTaxableIncomeAmountField:string ;
private vACoBorrowerTaxableIncomeAmountField:string ;
private vAFederalTaxAmountField:string ;
private vALocalTaxAmountField:string ;
private vAPrimaryBorrowerNonTaxableIncomeAmountField:string ;
private vAPrimaryBorrowerTaxableIncomeAmountField:string ;
private vASocialSecurityTaxAmountField:string ;
private vAStateTaxAmountField:string ;
private _CertificationOccupancyTypeField:VA_BORROWER_CertificationOccupancyType ;
private _CertificationOccupancyTypeFieldSpecified:boolean ;
private _IDField:string ;
private vABorrowerSurvivingSpouseIndicatorField:VA_BORROWERVABorrowerSurvivingSpouseIndicator ;
private vABorrowerSurvivingSpouseIndicatorFieldSpecified:boolean ;
public get MILITARY_SERVICE(): MILITARY_SERVICE[]
{
return this.mILITARY_SERVICEField;
}
public set MILITARY_SERVICE(value: MILITARY_SERVICE[])
{
this.mILITARY_SERVICEField = value;
}
public get _PREVIOUS_VA_LOAN(): _PREVIOUS_VA_LOAN[]
{
return this._PREVIOUS_VA_LOANField;
}
public set _PREVIOUS_VA_LOAN(value: _PREVIOUS_VA_LOAN[])
{
this._PREVIOUS_VA_LOANField = value;
}
public get VACoBorrowerNonTaxableIncomeAmount(): string
{
return this.vACoBorrowerNonTaxableIncomeAmountField;
}
public set VACoBorrowerNonTaxableIncomeAmount(value: string)
{
this.vACoBorrowerNonTaxableIncomeAmountField = value;
}
public get VACoBorrowerTaxableIncomeAmount(): string
{
return this.vACoBorrowerTaxableIncomeAmountField;
}
public set VACoBorrowerTaxableIncomeAmount(value: string)
{
this.vACoBorrowerTaxableIncomeAmountField = value;
}
public get VAFederalTaxAmount(): string
{
return this.vAFederalTaxAmountField;
}
public set VAFederalTaxAmount(value: string)
{
this.vAFederalTaxAmountField = value;
}
public get VALocalTaxAmount(): string
{
return this.vALocalTaxAmountField;
}
public set VALocalTaxAmount(value: string)
{
this.vALocalTaxAmountField = value;
}
public get VAPrimaryBorrowerNonTaxableIncomeAmount(): string
{
return this.vAPrimaryBorrowerNonTaxableIncomeAmountField;
}
public set VAPrimaryBorrowerNonTaxableIncomeAmount(value: string)
{
this.vAPrimaryBorrowerNonTaxableIncomeAmountField = value;
}
public get VAPrimaryBorrowerTaxableIncomeAmount(): string
{
return this.vAPrimaryBorrowerTaxableIncomeAmountField;
}
public set VAPrimaryBorrowerTaxableIncomeAmount(value: string)
{
this.vAPrimaryBorrowerTaxableIncomeAmountField = value;
}
public get VASocialSecurityTaxAmount(): string
{
return this.vASocialSecurityTaxAmountField;
}
public set VASocialSecurityTaxAmount(value: string)
{
this.vASocialSecurityTaxAmountField = value;
}
public get VAStateTaxAmount(): string
{
return this.vAStateTaxAmountField;
}
public set VAStateTaxAmount(value: string)
{
this.vAStateTaxAmountField = value;
}
public get _CertificationOccupancyType(): VA_BORROWER_CertificationOccupancyType
{
return this._CertificationOccupancyTypeField;
}
public set _CertificationOccupancyType(value: VA_BORROWER_CertificationOccupancyType)
{
this._CertificationOccupancyTypeField = value;
}
public get _CertificationOccupancyTypeSpecified(): boolean
{
return this._CertificationOccupancyTypeFieldSpecified;
}
public set _CertificationOccupancyTypeSpecified(value: boolean)
{
this._CertificationOccupancyTypeFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get VABorrowerSurvivingSpouseIndicator(): VA_BORROWERVABorrowerSurvivingSpouseIndicator
{
return this.vABorrowerSurvivingSpouseIndicatorField;
}
public set VABorrowerSurvivingSpouseIndicator(value: VA_BORROWERVABorrowerSurvivingSpouseIndicator)
{
this.vABorrowerSurvivingSpouseIndicatorField = value;
}
public get VABorrowerSurvivingSpouseIndicatorSpecified(): boolean
{
return this.vABorrowerSurvivingSpouseIndicatorFieldSpecified;
}
public set VABorrowerSurvivingSpouseIndicatorSpecified(value: boolean)
{
this.vABorrowerSurvivingSpouseIndicatorFieldSpecified = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MILITARY_SERVICE 
{
private _IDField:string ;
private _FromDateField:string ;
private militaryBranchTypeField:MILITARY_SERVICEMilitaryBranchType ;
private militaryBranchTypeFieldSpecified:boolean ;
private militaryBranchTypeOtherDescriptionField:string ;
private _NumberIdentifierField:string ;
private militaryStatusTypeField:MILITARY_SERVICEMilitaryStatusType ;
private militaryStatusTypeFieldSpecified:boolean ;
private militaryStatusTypeOtherDescriptionField:string ;
private _ServedAsNameField:string ;
private _ToDateField:string ;
private vADisabilityBenefitClaimIndicatorField:MILITARY_SERVICEVADisabilityBenefitClaimIndicator ;
private vADisabilityBenefitClaimIndicatorFieldSpecified:boolean ;
private vAEligibilityIndicatorField:MILITARY_SERVICEVAEligibilityIndicator ;
private vAEligibilityIndicatorFieldSpecified:boolean ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _FromDate(): string
{
return this._FromDateField;
}
public set _FromDate(value: string)
{
this._FromDateField = value;
}
public get MilitaryBranchType(): MILITARY_SERVICEMilitaryBranchType
{
return this.militaryBranchTypeField;
}
public set MilitaryBranchType(value: MILITARY_SERVICEMilitaryBranchType)
{
this.militaryBranchTypeField = value;
}
public get MilitaryBranchTypeSpecified(): boolean
{
return this.militaryBranchTypeFieldSpecified;
}
public set MilitaryBranchTypeSpecified(value: boolean)
{
this.militaryBranchTypeFieldSpecified = value;
}
public get MilitaryBranchTypeOtherDescription(): string
{
return this.militaryBranchTypeOtherDescriptionField;
}
public set MilitaryBranchTypeOtherDescription(value: string)
{
this.militaryBranchTypeOtherDescriptionField = value;
}
public get _NumberIdentifier(): string
{
return this._NumberIdentifierField;
}
public set _NumberIdentifier(value: string)
{
this._NumberIdentifierField = value;
}
public get MilitaryStatusType(): MILITARY_SERVICEMilitaryStatusType
{
return this.militaryStatusTypeField;
}
public set MilitaryStatusType(value: MILITARY_SERVICEMilitaryStatusType)
{
this.militaryStatusTypeField = value;
}
public get MilitaryStatusTypeSpecified(): boolean
{
return this.militaryStatusTypeFieldSpecified;
}
public set MilitaryStatusTypeSpecified(value: boolean)
{
this.militaryStatusTypeFieldSpecified = value;
}
public get MilitaryStatusTypeOtherDescription(): string
{
return this.militaryStatusTypeOtherDescriptionField;
}
public set MilitaryStatusTypeOtherDescription(value: string)
{
this.militaryStatusTypeOtherDescriptionField = value;
}
public get _ServedAsName(): string
{
return this._ServedAsNameField;
}
public set _ServedAsName(value: string)
{
this._ServedAsNameField = value;
}
public get _ToDate(): string
{
return this._ToDateField;
}
public set _ToDate(value: string)
{
this._ToDateField = value;
}
public get VADisabilityBenefitClaimIndicator(): MILITARY_SERVICEVADisabilityBenefitClaimIndicator
{
return this.vADisabilityBenefitClaimIndicatorField;
}
public set VADisabilityBenefitClaimIndicator(value: MILITARY_SERVICEVADisabilityBenefitClaimIndicator)
{
this.vADisabilityBenefitClaimIndicatorField = value;
}
public get VADisabilityBenefitClaimIndicatorSpecified(): boolean
{
return this.vADisabilityBenefitClaimIndicatorFieldSpecified;
}
public set VADisabilityBenefitClaimIndicatorSpecified(value: boolean)
{
this.vADisabilityBenefitClaimIndicatorFieldSpecified = value;
}
public get VAEligibilityIndicator(): MILITARY_SERVICEVAEligibilityIndicator
{
return this.vAEligibilityIndicatorField;
}
public set VAEligibilityIndicator(value: MILITARY_SERVICEVAEligibilityIndicator)
{
this.vAEligibilityIndicatorField = value;
}
public get VAEligibilityIndicatorSpecified(): boolean
{
return this.vAEligibilityIndicatorFieldSpecified;
}
public set VAEligibilityIndicatorSpecified(value: boolean)
{
this.vAEligibilityIndicatorFieldSpecified = value;
} 
}
export enum MILITARY_SERVICEMilitaryBranchType {
 MarinesReserves,

Marines,

CoastGuard,

Army,

Other,

ArmyReserves,

Navy,

ArmyNationalGuard,

AirNationalGuard,

NavyReserves,

AirForce
 }
export enum MILITARY_SERVICEMilitaryStatusType {
 Other,

ActiveDuty,

Separated,

ReserveNationalGuardNotSubjectToActivation
 }
export enum MILITARY_SERVICEVADisabilityBenefitClaimIndicator {
 N,

Y
 }
export enum MILITARY_SERVICEVAEligibilityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _PREVIOUS_VA_LOAN 
{
private _ADDRESSField:_ADDRESS[] ;
private _IDField:string ;
private agencyCaseIdentifierField:string ;
private currentlyOwnPropertyIndicatorField:_PREVIOUS_VA_LOANCurrentlyOwnPropertyIndicator ;
private currentlyOwnPropertyIndicatorFieldSpecified:boolean ;
private noteDateField:string ;
private propertySoldDateField:string ;
private vALoanTypeField:_PREVIOUS_VA_LOANVALoanType ;
private vALoanTypeFieldSpecified:boolean ;
private vALoanTypeOtherDescriptionField:string ;
public get _ADDRESS(): _ADDRESS[]
{
return this._ADDRESSField;
}
public set _ADDRESS(value: _ADDRESS[])
{
this._ADDRESSField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get AgencyCaseIdentifier(): string
{
return this.agencyCaseIdentifierField;
}
public set AgencyCaseIdentifier(value: string)
{
this.agencyCaseIdentifierField = value;
}
public get CurrentlyOwnPropertyIndicator(): _PREVIOUS_VA_LOANCurrentlyOwnPropertyIndicator
{
return this.currentlyOwnPropertyIndicatorField;
}
public set CurrentlyOwnPropertyIndicator(value: _PREVIOUS_VA_LOANCurrentlyOwnPropertyIndicator)
{
this.currentlyOwnPropertyIndicatorField = value;
}
public get CurrentlyOwnPropertyIndicatorSpecified(): boolean
{
return this.currentlyOwnPropertyIndicatorFieldSpecified;
}
public set CurrentlyOwnPropertyIndicatorSpecified(value: boolean)
{
this.currentlyOwnPropertyIndicatorFieldSpecified = value;
}
public get NoteDate(): string
{
return this.noteDateField;
}
public set NoteDate(value: string)
{
this.noteDateField = value;
}
public get PropertySoldDate(): string
{
return this.propertySoldDateField;
}
public set PropertySoldDate(value: string)
{
this.propertySoldDateField = value;
}
public get VALoanType(): _PREVIOUS_VA_LOANVALoanType
{
return this.vALoanTypeField;
}
public set VALoanType(value: _PREVIOUS_VA_LOANVALoanType)
{
this.vALoanTypeField = value;
}
public get VALoanTypeSpecified(): boolean
{
return this.vALoanTypeFieldSpecified;
}
public set VALoanTypeSpecified(value: boolean)
{
this.vALoanTypeFieldSpecified = value;
}
public get VALoanTypeOtherDescription(): string
{
return this.vALoanTypeOtherDescriptionField;
}
public set VALoanTypeOtherDescription(value: string)
{
this.vALoanTypeOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _ADDRESS 
{
private _IDField:string ;
private _CityField:string ;
private _PostalCodeField:string ;
private _StateField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
} 
}
export enum _PREVIOUS_VA_LOANCurrentlyOwnPropertyIndicator {
 N,

Y
 }
export enum _PREVIOUS_VA_LOANVALoanType {
 Other,

ManufacturedHome,

Refinance,

Home,

Direct
 }
export enum VA_BORROWER_CertificationOccupancyType {
 A,

B,

C,

D
 }
export enum VA_BORROWERVABorrowerSurvivingSpouseIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class FHA_BORROWER 
{
private _CertificationOwnOtherPropertyIndicatorField:FHA_BORROWER_CertificationOwnOtherPropertyIndicator ;
private _CertificationOwnOtherPropertyIndicatorFieldSpecified:boolean ;
private _CertificationLeadPaintIndicatorField:FHA_BORROWER_CertificationLeadPaintIndicator ;
private _CertificationLeadPaintIndicatorFieldSpecified:boolean ;
private _CertificationOwn4OrMoreDwellingsIndicatorField:FHA_BORROWER_CertificationOwn4OrMoreDwellingsIndicator ;
private _CertificationOwn4OrMoreDwellingsIndicatorFieldSpecified:boolean ;
private _CertificationPropertySoldCityField:string ;
private _CertificationPropertySoldPostalCodeField:string ;
private _CertificationOriginalMortgageAmountField:string ;
private _CertificationSalesPriceAmountField:string ;
private _CertificationRentalIndicatorField:FHA_BORROWER_CertificationRentalIndicator ;
private _CertificationRentalIndicatorFieldSpecified:boolean ;
private _CertificationPropertyToBeSoldIndicatorField:FHA_BORROWER_CertificationPropertyToBeSoldIndicator ;
private _CertificationPropertyToBeSoldIndicatorFieldSpecified:boolean ;
private _CertificationPropertySoldStateField:string ;
private _CertificationPropertySoldStreetAddressField:string ;
private _IDField:string ;
public get _CertificationOwnOtherPropertyIndicator(): FHA_BORROWER_CertificationOwnOtherPropertyIndicator
{
return this._CertificationOwnOtherPropertyIndicatorField;
}
public set _CertificationOwnOtherPropertyIndicator(value: FHA_BORROWER_CertificationOwnOtherPropertyIndicator)
{
this._CertificationOwnOtherPropertyIndicatorField = value;
}
public get _CertificationOwnOtherPropertyIndicatorSpecified(): boolean
{
return this._CertificationOwnOtherPropertyIndicatorFieldSpecified;
}
public set _CertificationOwnOtherPropertyIndicatorSpecified(value: boolean)
{
this._CertificationOwnOtherPropertyIndicatorFieldSpecified = value;
}
public get _CertificationLeadPaintIndicator(): FHA_BORROWER_CertificationLeadPaintIndicator
{
return this._CertificationLeadPaintIndicatorField;
}
public set _CertificationLeadPaintIndicator(value: FHA_BORROWER_CertificationLeadPaintIndicator)
{
this._CertificationLeadPaintIndicatorField = value;
}
public get _CertificationLeadPaintIndicatorSpecified(): boolean
{
return this._CertificationLeadPaintIndicatorFieldSpecified;
}
public set _CertificationLeadPaintIndicatorSpecified(value: boolean)
{
this._CertificationLeadPaintIndicatorFieldSpecified = value;
}
public get _CertificationOwn4OrMoreDwellingsIndicator(): FHA_BORROWER_CertificationOwn4OrMoreDwellingsIndicator
{
return this._CertificationOwn4OrMoreDwellingsIndicatorField;
}
public set _CertificationOwn4OrMoreDwellingsIndicator(value: FHA_BORROWER_CertificationOwn4OrMoreDwellingsIndicator)
{
this._CertificationOwn4OrMoreDwellingsIndicatorField = value;
}
public get _CertificationOwn4OrMoreDwellingsIndicatorSpecified(): boolean
{
return this._CertificationOwn4OrMoreDwellingsIndicatorFieldSpecified;
}
public set _CertificationOwn4OrMoreDwellingsIndicatorSpecified(value: boolean)
{
this._CertificationOwn4OrMoreDwellingsIndicatorFieldSpecified = value;
}
public get _CertificationPropertySoldCity(): string
{
return this._CertificationPropertySoldCityField;
}
public set _CertificationPropertySoldCity(value: string)
{
this._CertificationPropertySoldCityField = value;
}
public get _CertificationPropertySoldPostalCode(): string
{
return this._CertificationPropertySoldPostalCodeField;
}
public set _CertificationPropertySoldPostalCode(value: string)
{
this._CertificationPropertySoldPostalCodeField = value;
}
public get _CertificationOriginalMortgageAmount(): string
{
return this._CertificationOriginalMortgageAmountField;
}
public set _CertificationOriginalMortgageAmount(value: string)
{
this._CertificationOriginalMortgageAmountField = value;
}
public get _CertificationSalesPriceAmount(): string
{
return this._CertificationSalesPriceAmountField;
}
public set _CertificationSalesPriceAmount(value: string)
{
this._CertificationSalesPriceAmountField = value;
}
public get _CertificationRentalIndicator(): FHA_BORROWER_CertificationRentalIndicator
{
return this._CertificationRentalIndicatorField;
}
public set _CertificationRentalIndicator(value: FHA_BORROWER_CertificationRentalIndicator)
{
this._CertificationRentalIndicatorField = value;
}
public get _CertificationRentalIndicatorSpecified(): boolean
{
return this._CertificationRentalIndicatorFieldSpecified;
}
public set _CertificationRentalIndicatorSpecified(value: boolean)
{
this._CertificationRentalIndicatorFieldSpecified = value;
}
public get _CertificationPropertyToBeSoldIndicator(): FHA_BORROWER_CertificationPropertyToBeSoldIndicator
{
return this._CertificationPropertyToBeSoldIndicatorField;
}
public set _CertificationPropertyToBeSoldIndicator(value: FHA_BORROWER_CertificationPropertyToBeSoldIndicator)
{
this._CertificationPropertyToBeSoldIndicatorField = value;
}
public get _CertificationPropertyToBeSoldIndicatorSpecified(): boolean
{
return this._CertificationPropertyToBeSoldIndicatorFieldSpecified;
}
public set _CertificationPropertyToBeSoldIndicatorSpecified(value: boolean)
{
this._CertificationPropertyToBeSoldIndicatorFieldSpecified = value;
}
public get _CertificationPropertySoldState(): string
{
return this._CertificationPropertySoldStateField;
}
public set _CertificationPropertySoldState(value: string)
{
this._CertificationPropertySoldStateField = value;
}
public get _CertificationPropertySoldStreetAddress(): string
{
return this._CertificationPropertySoldStreetAddressField;
}
public set _CertificationPropertySoldStreetAddress(value: string)
{
this._CertificationPropertySoldStreetAddressField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum FHA_BORROWER_CertificationOwnOtherPropertyIndicator {
 N,

Y
 }
export enum FHA_BORROWER_CertificationLeadPaintIndicator {
 N,

Y
 }
export enum FHA_BORROWER_CertificationOwn4OrMoreDwellingsIndicator {
 N,

Y
 }
export enum FHA_BORROWER_CertificationRentalIndicator {
 N,

Y
 }
export enum FHA_BORROWER_CertificationPropertyToBeSoldIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _NEAREST_LIVING_RELATIVE 
{
private _CityField:string ;
private _NameField:string ;
private _PostalCodeField:string ;
private _RelationshipDescriptionField:string ;
private _StateField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _TelephoneNumberField:string ;
private _IDField:string ;
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _RelationshipDescription(): string
{
return this._RelationshipDescriptionField;
}
public set _RelationshipDescription(value: string)
{
this._RelationshipDescriptionField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _TelephoneNumber(): string
{
return this._TelephoneNumberField;
}
public set _TelephoneNumber(value: string)
{
this._TelephoneNumberField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _POWER_OF_ATTORNEY 
{
private _UnparsedNameField:string ;
private _TitleDescriptionField:string ;
private _SigningCapacityTextDescriptionField:string ;
private _IDField:string ;
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _SigningCapacityTextDescription(): string
{
return this._SigningCapacityTextDescriptionField;
}
public set _SigningCapacityTextDescription(value: string)
{
this._SigningCapacityTextDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CREDIT_SCORE 
{
private _FACTORField:_FACTOR[] ;
private creditScoreIDField:string ;
private creditReportIdentifierField:string ;
private creditRepositorySourceTypeField:CREDIT_SCORECreditRepositorySourceType ;
private creditRepositorySourceTypeFieldSpecified:boolean ;
private creditRepositorySourceTypeOtherDescriptionField:string ;
private _DateField:string ;
private _ExclusionReasonTypeField:CREDIT_SCORE_ExclusionReasonType ;
private _ExclusionReasonTypeFieldSpecified:boolean ;
private _FACTAInquiriesIndicatorField:CREDIT_SCORE_FACTAInquiriesIndicator ;
private _FACTAInquiriesIndicatorFieldSpecified:boolean ;
private _ModelNameTypeField:CREDIT_SCORE_ModelNameType ;
private _ModelNameTypeFieldSpecified:boolean ;
private _ModelNameTypeOtherDescriptionField:string ;
private _ValueField:string ;
private _MaximumValueField:string ;
private _MinimumValueField:string ;
public get _FACTOR(): _FACTOR[]
{
return this._FACTORField;
}
public set _FACTOR(value: _FACTOR[])
{
this._FACTORField = value;
}
public get CreditScoreID(): string
{
return this.creditScoreIDField;
}
public set CreditScoreID(value: string)
{
this.creditScoreIDField = value;
}
public get CreditReportIdentifier(): string
{
return this.creditReportIdentifierField;
}
public set CreditReportIdentifier(value: string)
{
this.creditReportIdentifierField = value;
}
public get CreditRepositorySourceType(): CREDIT_SCORECreditRepositorySourceType
{
return this.creditRepositorySourceTypeField;
}
public set CreditRepositorySourceType(value: CREDIT_SCORECreditRepositorySourceType)
{
this.creditRepositorySourceTypeField = value;
}
public get CreditRepositorySourceTypeSpecified(): boolean
{
return this.creditRepositorySourceTypeFieldSpecified;
}
public set CreditRepositorySourceTypeSpecified(value: boolean)
{
this.creditRepositorySourceTypeFieldSpecified = value;
}
public get CreditRepositorySourceTypeOtherDescription(): string
{
return this.creditRepositorySourceTypeOtherDescriptionField;
}
public set CreditRepositorySourceTypeOtherDescription(value: string)
{
this.creditRepositorySourceTypeOtherDescriptionField = value;
}
public get _Date(): string
{
return this._DateField;
}
public set _Date(value: string)
{
this._DateField = value;
}
public get _ExclusionReasonType(): CREDIT_SCORE_ExclusionReasonType
{
return this._ExclusionReasonTypeField;
}
public set _ExclusionReasonType(value: CREDIT_SCORE_ExclusionReasonType)
{
this._ExclusionReasonTypeField = value;
}
public get _ExclusionReasonTypeSpecified(): boolean
{
return this._ExclusionReasonTypeFieldSpecified;
}
public set _ExclusionReasonTypeSpecified(value: boolean)
{
this._ExclusionReasonTypeFieldSpecified = value;
}
public get _FACTAInquiriesIndicator(): CREDIT_SCORE_FACTAInquiriesIndicator
{
return this._FACTAInquiriesIndicatorField;
}
public set _FACTAInquiriesIndicator(value: CREDIT_SCORE_FACTAInquiriesIndicator)
{
this._FACTAInquiriesIndicatorField = value;
}
public get _FACTAInquiriesIndicatorSpecified(): boolean
{
return this._FACTAInquiriesIndicatorFieldSpecified;
}
public set _FACTAInquiriesIndicatorSpecified(value: boolean)
{
this._FACTAInquiriesIndicatorFieldSpecified = value;
}
public get _ModelNameType(): CREDIT_SCORE_ModelNameType
{
return this._ModelNameTypeField;
}
public set _ModelNameType(value: CREDIT_SCORE_ModelNameType)
{
this._ModelNameTypeField = value;
}
public get _ModelNameTypeSpecified(): boolean
{
return this._ModelNameTypeFieldSpecified;
}
public set _ModelNameTypeSpecified(value: boolean)
{
this._ModelNameTypeFieldSpecified = value;
}
public get _ModelNameTypeOtherDescription(): string
{
return this._ModelNameTypeOtherDescriptionField;
}
public set _ModelNameTypeOtherDescription(value: string)
{
this._ModelNameTypeOtherDescriptionField = value;
}
public get _Value(): string
{
return this._ValueField;
}
public set _Value(value: string)
{
this._ValueField = value;
}
public get _MaximumValue(): string
{
return this._MaximumValueField;
}
public set _MaximumValue(value: string)
{
this._MaximumValueField = value;
}
public get _MinimumValue(): string
{
return this._MinimumValueField;
}
public set _MinimumValue(value: string)
{
this._MinimumValueField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _FACTOR 
{
private _CodeField:string ;
private _TextField:string ;
private _IDField:string ;
public get _Code(): string
{
return this._CodeField;
}
public set _Code(value: string)
{
this._CodeField = value;
}
public get _Text(): string
{
return this._TextField;
}
public set _Text(value: string)
{
this._TextField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum CREDIT_SCORECreditRepositorySourceType {
 Experian,

Other,

Equifax,

TransUnion,

MergedData
 }
export enum CREDIT_SCORE_ExclusionReasonType {
 UnauthorizedScoreRequest,

NotScoredNoQualifyingAccount,

NotScoredFileCannotBeScored,

NotScoredFileIsUnderReview,

InvalidScoreRequest,

ScoringNotAvailable,

NotScoredNoRecentAccountInformation,

NotScoredSubjectDeceased,

NotScoredCreditDataNotAvailable,

NotScoredRequirementsNotMet,

NotScoredInsufficientCredit,

NotScoredFileTooLong
 }
export enum CREDIT_SCORE_FACTAInquiriesIndicator {
 N,

Y
 }
export enum CREDIT_SCORE_ModelNameType {
 TransUnionEmpiricaInstallment,

EquifaxDAS,

EquifaxBeaconBankcard,

FICORiskScoreClassicPersonalFinance98,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxBeacon5.0Bankcard")]
EquifaxBeacon50Bankcard,

ExperianFairIsaacAdvanced,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxPinnacle2.0")]
EquifaxPinnacle20,

ExperianVantageScore,

[System.Xml.Serialization.XmlEnumAttribute("ExperianFairIsaacAdvanced2.0")]
ExperianFairIsaacAdvanced20,

FICORiskScoreClassicInstallmentLoan98,

TransUnionVantageScore,

FICORiskScoreClassic98,

TransUnionPrecision,

ExperianMDSBankruptcyII,

TransUnionDelphi,

FICORiskScoreClassicAuto98,

EquifaxBeaconInstallment,

EquifaxPinnacle,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxBeacon5.0Installment")]
EquifaxBeacon50Installment,

TransUnionEmpirica,

ExperianFICOClassicV3,

ExperianOldNationalRisk,

EquifaxMortgageScore,

Other,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxBeacon5.0")]
EquifaxBeacon50,

FICOExpansionScore,

FICORiskScoreNextGen00,

FICORiskScoreNextGen03,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxBeacon5.0Auto")]
EquifaxBeacon50Auto,

EquifaxBeaconPersonalFinance,

EquifaxBeacon,

ExperianScorexPLUS,

TransUnionNewDelphi,

TransUnionPrecision03,

TransUnionEmpiricaPersonalFinance,

ExperianFairIsaacBankcard,

EquifaxEnhancedDAS,

EquifaxBankruptcyNavigatorIndex02781,

TransUnionEmpiricaAuto,

EquifaxBankruptcyNavigatorIndex02782,

EquifaxBankruptcyNavigatorIndex02783,

EquifaxBankruptcyNavigatorIndex02784,

FICORiskScoreClassicBankcard98,

EquifaxVantageScore,

EquifaxMarketMax,

EquifaxEnhancedBeacon,

ExperianNewNationalRisk,

EquifaxBeaconAuto,

[System.Xml.Serialization.XmlEnumAttribute("EquifaxBeacon5.0PersonalFinance")]
EquifaxBeacon50PersonalFinance,

FICORiskScoreClassic04,

ExperianFairIsaacPersonalFinance,

ExperianNewNationalEquivalency,

TransUnionEmpiricaBankcard,

ExperianFairIsaacInstallment,

ExperianFairIsaacAuto,

ExperianFairIsaac
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class HARDSHIP_DECLARATION 
{
private _IDField:string ;
private cashReservesInsufficientIndicatorField:HARDSHIP_DECLARATIONCashReservesInsufficientIndicator ;
private cashReservesInsufficientIndicatorFieldSpecified:boolean ;
private expensesIncreasedIndicatorField:HARDSHIP_DECLARATIONExpensesIncreasedIndicator ;
private expensesIncreasedIndicatorFieldSpecified:boolean ;
private hardshipExplanationDescriptionField:string ;
private householdFinancialCircumstancesChangedIndicatorField:HARDSHIP_DECLARATIONHouseholdFinancialCircumstancesChangedIndicator ;
private householdFinancialCircumstancesChangedIndicatorFieldSpecified:boolean ;
private incomeReducedOrLostIndicatorField:HARDSHIP_DECLARATIONIncomeReducedOrLostIndicator ;
private incomeReducedOrLostIndicatorFieldSpecified:boolean ;
private monthlyDebtPaymentsExcessiveIndicatorField:HARDSHIP_DECLARATIONMonthlyDebtPaymentsExcessiveIndicator ;
private monthlyDebtPaymentsExcessiveIndicatorFieldSpecified:boolean ;
private otherHardshipReasonsIndicatorField:HARDSHIP_DECLARATIONOtherHardshipReasonsIndicator ;
private otherHardshipReasonsIndicatorFieldSpecified:boolean ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get CashReservesInsufficientIndicator(): HARDSHIP_DECLARATIONCashReservesInsufficientIndicator
{
return this.cashReservesInsufficientIndicatorField;
}
public set CashReservesInsufficientIndicator(value: HARDSHIP_DECLARATIONCashReservesInsufficientIndicator)
{
this.cashReservesInsufficientIndicatorField = value;
}
public get CashReservesInsufficientIndicatorSpecified(): boolean
{
return this.cashReservesInsufficientIndicatorFieldSpecified;
}
public set CashReservesInsufficientIndicatorSpecified(value: boolean)
{
this.cashReservesInsufficientIndicatorFieldSpecified = value;
}
public get ExpensesIncreasedIndicator(): HARDSHIP_DECLARATIONExpensesIncreasedIndicator
{
return this.expensesIncreasedIndicatorField;
}
public set ExpensesIncreasedIndicator(value: HARDSHIP_DECLARATIONExpensesIncreasedIndicator)
{
this.expensesIncreasedIndicatorField = value;
}
public get ExpensesIncreasedIndicatorSpecified(): boolean
{
return this.expensesIncreasedIndicatorFieldSpecified;
}
public set ExpensesIncreasedIndicatorSpecified(value: boolean)
{
this.expensesIncreasedIndicatorFieldSpecified = value;
}
public get HardshipExplanationDescription(): string
{
return this.hardshipExplanationDescriptionField;
}
public set HardshipExplanationDescription(value: string)
{
this.hardshipExplanationDescriptionField = value;
}
public get HouseholdFinancialCircumstancesChangedIndicator(): HARDSHIP_DECLARATIONHouseholdFinancialCircumstancesChangedIndicator
{
return this.householdFinancialCircumstancesChangedIndicatorField;
}
public set HouseholdFinancialCircumstancesChangedIndicator(value: HARDSHIP_DECLARATIONHouseholdFinancialCircumstancesChangedIndicator)
{
this.householdFinancialCircumstancesChangedIndicatorField = value;
}
public get HouseholdFinancialCircumstancesChangedIndicatorSpecified(): boolean
{
return this.householdFinancialCircumstancesChangedIndicatorFieldSpecified;
}
public set HouseholdFinancialCircumstancesChangedIndicatorSpecified(value: boolean)
{
this.householdFinancialCircumstancesChangedIndicatorFieldSpecified = value;
}
public get IncomeReducedOrLostIndicator(): HARDSHIP_DECLARATIONIncomeReducedOrLostIndicator
{
return this.incomeReducedOrLostIndicatorField;
}
public set IncomeReducedOrLostIndicator(value: HARDSHIP_DECLARATIONIncomeReducedOrLostIndicator)
{
this.incomeReducedOrLostIndicatorField = value;
}
public get IncomeReducedOrLostIndicatorSpecified(): boolean
{
return this.incomeReducedOrLostIndicatorFieldSpecified;
}
public set IncomeReducedOrLostIndicatorSpecified(value: boolean)
{
this.incomeReducedOrLostIndicatorFieldSpecified = value;
}
public get MonthlyDebtPaymentsExcessiveIndicator(): HARDSHIP_DECLARATIONMonthlyDebtPaymentsExcessiveIndicator
{
return this.monthlyDebtPaymentsExcessiveIndicatorField;
}
public set MonthlyDebtPaymentsExcessiveIndicator(value: HARDSHIP_DECLARATIONMonthlyDebtPaymentsExcessiveIndicator)
{
this.monthlyDebtPaymentsExcessiveIndicatorField = value;
}
public get MonthlyDebtPaymentsExcessiveIndicatorSpecified(): boolean
{
return this.monthlyDebtPaymentsExcessiveIndicatorFieldSpecified;
}
public set MonthlyDebtPaymentsExcessiveIndicatorSpecified(value: boolean)
{
this.monthlyDebtPaymentsExcessiveIndicatorFieldSpecified = value;
}
public get OtherHardshipReasonsIndicator(): HARDSHIP_DECLARATIONOtherHardshipReasonsIndicator
{
return this.otherHardshipReasonsIndicatorField;
}
public set OtherHardshipReasonsIndicator(value: HARDSHIP_DECLARATIONOtherHardshipReasonsIndicator)
{
this.otherHardshipReasonsIndicatorField = value;
}
public get OtherHardshipReasonsIndicatorSpecified(): boolean
{
return this.otherHardshipReasonsIndicatorFieldSpecified;
}
public set OtherHardshipReasonsIndicatorSpecified(value: boolean)
{
this.otherHardshipReasonsIndicatorFieldSpecified = value;
} 
}
export enum HARDSHIP_DECLARATIONCashReservesInsufficientIndicator {
 N,

Y
 }
export enum HARDSHIP_DECLARATIONExpensesIncreasedIndicator {
 N,

Y
 }
export enum HARDSHIP_DECLARATIONHouseholdFinancialCircumstancesChangedIndicator {
 N,

Y
 }
export enum HARDSHIP_DECLARATIONIncomeReducedOrLostIndicator {
 N,

Y
 }
export enum HARDSHIP_DECLARATIONMonthlyDebtPaymentsExcessiveIndicator {
 N,

Y
 }
export enum HARDSHIP_DECLARATIONOtherHardshipReasonsIndicator {
 N,

Y
 }
export enum BORROWER_PrintPositionType {
 Borrower,

CoBorrower
 }
export enum BORROWERJointAssetLiabilityReportingType {
 Jointly,

NotJointly
 }
export enum BORROWERMaritalStatusType {
 Unknown,

Unmarried,

NotProvided,

Separated,

Married
 }
export enum BORROWERBorrowerNonObligatedIndicator {
 N,

Y
 }
export enum BORROWERNonPersonEntityIndicator {
 N,

Y
 }
export enum BORROWER_RelationshipTitleType {
 ASinglePerson,

NotApplicable,

AMarriedPerson,

AWidow,

Other,

ASingleMan,

WifeAndHusband,

AWidower,

AHusbandAndWife,

AnUnmarriedPerson,

AnUnmarriedMan,

HisWife,

AWifeAndHusband,

AnUnmarriedWoman,

AMarriedWoman,

ASingleWoman,

AMarriedMan,

HerHusband,

HusbandAndWife
 }
export enum BORROWERBorrowerIsCosignerIndicator {
 N,

Y
 }
export enum BORROWERBorrowerNonTitleSpouseIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INVESTOR_FEATURE 
{
private _IDField:string ;
private _CategoryNameField:string ;
private _DescriptionField:string ;
private _IdentifierField:string ;
private _NameField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _CategoryName(): string
{
return this._CategoryNameField;
}
public set _CategoryName(value: string)
{
this._CategoryNameField = value;
}
public get _Description(): string
{
return this._DescriptionField;
}
public set _Description(value: string)
{
this._DescriptionField = value;
}
public get _Identifier(): string
{
return this._IdentifierField;
}
public set _Identifier(value: string)
{
this._IdentifierField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_ORIGINATION_SYSTEM 
{
private _IDField:string ;
private _LoanIdentifierField:string ;
private _VendorIdentifierField:string ;
private _NameField:string ;
private _VersionIdentifierField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _LoanIdentifier(): string
{
return this._LoanIdentifierField;
}
public set _LoanIdentifier(value: string)
{
this._LoanIdentifierField = value;
}
public get _VendorIdentifier(): string
{
return this._VendorIdentifierField;
}
public set _VendorIdentifier(value: string)
{
this._VendorIdentifierField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _VersionIdentifier(): string
{
return this._VersionIdentifierField;
}
public set _VersionIdentifier(value: string)
{
this._VersionIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_UNDERWRITING 
{
private loanUnderwritingIDField:string ;
private automatedUnderwritingSystemNameField:string ;
private automatedUnderwritingProcessDescriptionField:string ;
private automatedUnderwritingSystemResultValueField:string ;
private contractUnderwritingIndicatorField:LOAN_UNDERWRITINGContractUnderwritingIndicator ;
private contractUnderwritingIndicatorFieldSpecified:boolean ;
private housingExpenseRatioPercentField:string ;
private loanManualUnderwritingIndicatorField:LOAN_UNDERWRITINGLoanManualUnderwritingIndicator ;
private loanManualUnderwritingIndicatorFieldSpecified:boolean ;
private agencyProgramDescriptionField:string ;
private loanProspectorCreditRiskClassificationDescriptionField:string ;
private loanProspectorDocumentationClassificationDescriptionField:string ;
private _CaseIdentifierField:string ;
private _DecisionDatetimeField:string ;
private _InvestorGuidelinesIndicatorField:LOAN_UNDERWRITING_InvestorGuidelinesIndicator ;
private _InvestorGuidelinesIndicatorFieldSpecified:boolean ;
private _MethodVersionIdentifierField:string ;
private _OrganizationNameField:string ;
private _SubmitterTypeField:LOAN_UNDERWRITING_SubmitterType ;
private _SubmitterTypeFieldSpecified:boolean ;
private _SubmitterTypeOtherDescriptionField:string ;
private totalDebtExpenseRatioPercentField:string ;
private loanProspectorRiskGradeAssignedDescriptionField:string ;
private automatedUnderwritingEvaluationStatusDescriptionField:string ;
private automatedUnderwritingRecommendationDescriptionField:string ;
private combinedLTVRatioPercentField:string ;
private verifiedAssetsTotalAmountField:string ;
private loanUnderwriterNameField:string ;
private underwritingCommentsDescriptionField:string ;
private homeBuyersHomeownershipEducationCertificateIndicatorField:LOAN_UNDERWRITINGHomeBuyersHomeownershipEducationCertificateIndicator ;
private homeBuyersHomeownershipEducationCertificateIndicatorFieldSpecified:boolean ;
private uniformTransmittalSummaryInterestedPartyContributionsPercentField:string ;
private closingCostNonBorrowerTotalContributionPercentField:string ;
public get LoanUnderwritingID(): string
{
return this.loanUnderwritingIDField;
}
public set LoanUnderwritingID(value: string)
{
this.loanUnderwritingIDField = value;
}
public get AutomatedUnderwritingSystemName(): string
{
return this.automatedUnderwritingSystemNameField;
}
public set AutomatedUnderwritingSystemName(value: string)
{
this.automatedUnderwritingSystemNameField = value;
}
public get AutomatedUnderwritingProcessDescription(): string
{
return this.automatedUnderwritingProcessDescriptionField;
}
public set AutomatedUnderwritingProcessDescription(value: string)
{
this.automatedUnderwritingProcessDescriptionField = value;
}
public get AutomatedUnderwritingSystemResultValue(): string
{
return this.automatedUnderwritingSystemResultValueField;
}
public set AutomatedUnderwritingSystemResultValue(value: string)
{
this.automatedUnderwritingSystemResultValueField = value;
}
public get ContractUnderwritingIndicator(): LOAN_UNDERWRITINGContractUnderwritingIndicator
{
return this.contractUnderwritingIndicatorField;
}
public set ContractUnderwritingIndicator(value: LOAN_UNDERWRITINGContractUnderwritingIndicator)
{
this.contractUnderwritingIndicatorField = value;
}
public get ContractUnderwritingIndicatorSpecified(): boolean
{
return this.contractUnderwritingIndicatorFieldSpecified;
}
public set ContractUnderwritingIndicatorSpecified(value: boolean)
{
this.contractUnderwritingIndicatorFieldSpecified = value;
}
public get HousingExpenseRatioPercent(): string
{
return this.housingExpenseRatioPercentField;
}
public set HousingExpenseRatioPercent(value: string)
{
this.housingExpenseRatioPercentField = value;
}
public get LoanManualUnderwritingIndicator(): LOAN_UNDERWRITINGLoanManualUnderwritingIndicator
{
return this.loanManualUnderwritingIndicatorField;
}
public set LoanManualUnderwritingIndicator(value: LOAN_UNDERWRITINGLoanManualUnderwritingIndicator)
{
this.loanManualUnderwritingIndicatorField = value;
}
public get LoanManualUnderwritingIndicatorSpecified(): boolean
{
return this.loanManualUnderwritingIndicatorFieldSpecified;
}
public set LoanManualUnderwritingIndicatorSpecified(value: boolean)
{
this.loanManualUnderwritingIndicatorFieldSpecified = value;
}
public get AgencyProgramDescription(): string
{
return this.agencyProgramDescriptionField;
}
public set AgencyProgramDescription(value: string)
{
this.agencyProgramDescriptionField = value;
}
public get LoanProspectorCreditRiskClassificationDescription(): string
{
return this.loanProspectorCreditRiskClassificationDescriptionField;
}
public set LoanProspectorCreditRiskClassificationDescription(value: string)
{
this.loanProspectorCreditRiskClassificationDescriptionField = value;
}
public get LoanProspectorDocumentationClassificationDescription(): string
{
return this.loanProspectorDocumentationClassificationDescriptionField;
}
public set LoanProspectorDocumentationClassificationDescription(value: string)
{
this.loanProspectorDocumentationClassificationDescriptionField = value;
}
public get _CaseIdentifier(): string
{
return this._CaseIdentifierField;
}
public set _CaseIdentifier(value: string)
{
this._CaseIdentifierField = value;
}
public get _DecisionDatetime(): string
{
return this._DecisionDatetimeField;
}
public set _DecisionDatetime(value: string)
{
this._DecisionDatetimeField = value;
}
public get _InvestorGuidelinesIndicator(): LOAN_UNDERWRITING_InvestorGuidelinesIndicator
{
return this._InvestorGuidelinesIndicatorField;
}
public set _InvestorGuidelinesIndicator(value: LOAN_UNDERWRITING_InvestorGuidelinesIndicator)
{
this._InvestorGuidelinesIndicatorField = value;
}
public get _InvestorGuidelinesIndicatorSpecified(): boolean
{
return this._InvestorGuidelinesIndicatorFieldSpecified;
}
public set _InvestorGuidelinesIndicatorSpecified(value: boolean)
{
this._InvestorGuidelinesIndicatorFieldSpecified = value;
}
public get _MethodVersionIdentifier(): string
{
return this._MethodVersionIdentifierField;
}
public set _MethodVersionIdentifier(value: string)
{
this._MethodVersionIdentifierField = value;
}
public get _OrganizationName(): string
{
return this._OrganizationNameField;
}
public set _OrganizationName(value: string)
{
this._OrganizationNameField = value;
}
public get _SubmitterType(): LOAN_UNDERWRITING_SubmitterType
{
return this._SubmitterTypeField;
}
public set _SubmitterType(value: LOAN_UNDERWRITING_SubmitterType)
{
this._SubmitterTypeField = value;
}
public get _SubmitterTypeSpecified(): boolean
{
return this._SubmitterTypeFieldSpecified;
}
public set _SubmitterTypeSpecified(value: boolean)
{
this._SubmitterTypeFieldSpecified = value;
}
public get _SubmitterTypeOtherDescription(): string
{
return this._SubmitterTypeOtherDescriptionField;
}
public set _SubmitterTypeOtherDescription(value: string)
{
this._SubmitterTypeOtherDescriptionField = value;
}
public get TotalDebtExpenseRatioPercent(): string
{
return this.totalDebtExpenseRatioPercentField;
}
public set TotalDebtExpenseRatioPercent(value: string)
{
this.totalDebtExpenseRatioPercentField = value;
}
public get LoanProspectorRiskGradeAssignedDescription(): string
{
return this.loanProspectorRiskGradeAssignedDescriptionField;
}
public set LoanProspectorRiskGradeAssignedDescription(value: string)
{
this.loanProspectorRiskGradeAssignedDescriptionField = value;
}
public get AutomatedUnderwritingEvaluationStatusDescription(): string
{
return this.automatedUnderwritingEvaluationStatusDescriptionField;
}
public set AutomatedUnderwritingEvaluationStatusDescription(value: string)
{
this.automatedUnderwritingEvaluationStatusDescriptionField = value;
}
public get AutomatedUnderwritingRecommendationDescription(): string
{
return this.automatedUnderwritingRecommendationDescriptionField;
}
public set AutomatedUnderwritingRecommendationDescription(value: string)
{
this.automatedUnderwritingRecommendationDescriptionField = value;
}
public get CombinedLTVRatioPercent(): string
{
return this.combinedLTVRatioPercentField;
}
public set CombinedLTVRatioPercent(value: string)
{
this.combinedLTVRatioPercentField = value;
}
public get VerifiedAssetsTotalAmount(): string
{
return this.verifiedAssetsTotalAmountField;
}
public set VerifiedAssetsTotalAmount(value: string)
{
this.verifiedAssetsTotalAmountField = value;
}
public get LoanUnderwriterName(): string
{
return this.loanUnderwriterNameField;
}
public set LoanUnderwriterName(value: string)
{
this.loanUnderwriterNameField = value;
}
public get UnderwritingCommentsDescription(): string
{
return this.underwritingCommentsDescriptionField;
}
public set UnderwritingCommentsDescription(value: string)
{
this.underwritingCommentsDescriptionField = value;
}
public get HomeBuyersHomeownershipEducationCertificateIndicator(): LOAN_UNDERWRITINGHomeBuyersHomeownershipEducationCertificateIndicator
{
return this.homeBuyersHomeownershipEducationCertificateIndicatorField;
}
public set HomeBuyersHomeownershipEducationCertificateIndicator(value: LOAN_UNDERWRITINGHomeBuyersHomeownershipEducationCertificateIndicator)
{
this.homeBuyersHomeownershipEducationCertificateIndicatorField = value;
}
public get HomeBuyersHomeownershipEducationCertificateIndicatorSpecified(): boolean
{
return this.homeBuyersHomeownershipEducationCertificateIndicatorFieldSpecified;
}
public set HomeBuyersHomeownershipEducationCertificateIndicatorSpecified(value: boolean)
{
this.homeBuyersHomeownershipEducationCertificateIndicatorFieldSpecified = value;
}
public get UniformTransmittalSummaryInterestedPartyContributionsPercent(): string
{
return this.uniformTransmittalSummaryInterestedPartyContributionsPercentField;
}
public set UniformTransmittalSummaryInterestedPartyContributionsPercent(value: string)
{
this.uniformTransmittalSummaryInterestedPartyContributionsPercentField = value;
}
public get ClosingCostNonBorrowerTotalContributionPercent(): string
{
return this.closingCostNonBorrowerTotalContributionPercentField;
}
public set ClosingCostNonBorrowerTotalContributionPercent(value: string)
{
this.closingCostNonBorrowerTotalContributionPercentField = value;
} 
}
export enum LOAN_UNDERWRITINGContractUnderwritingIndicator {
 N,

Y
 }
export enum LOAN_UNDERWRITINGLoanManualUnderwritingIndicator {
 N,

Y
 }
export enum LOAN_UNDERWRITING_InvestorGuidelinesIndicator {
 N,

Y
 }
export enum LOAN_UNDERWRITING_SubmitterType {
 LenderOtherThanSeller,

Correspondent,

Seller,

Other,

Broker
 }
export enum LOAN_UNDERWRITINGHomeBuyersHomeownershipEducationCertificateIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RELATED_LOAN 
{
private relatedLoanIDField:string ;
private hELOCMaximumBalanceAmountField:string ;
private investorREOPropertyIdentifierField:string ;
private lienHolderSameAsSubjectLoanIndicatorField:RELATED_LOANLienHolderSameAsSubjectLoanIndicator ;
private lienHolderSameAsSubjectLoanIndicatorFieldSpecified:boolean ;
private lienHolderTypeField:RELATED_LOANLienHolderType ;
private lienHolderTypeFieldSpecified:boolean ;
private lienHolderTypeOtherDescriptionField:string ;
private lienPriorityTypeField:RELATED_LOANLienPriorityType ;
private lienPriorityTypeFieldSpecified:boolean ;
private lienPriorityTypeOtherDescriptionField:string ;
private loanAmortizationTypeField:RELATED_LOANLoanAmortizationType ;
private loanAmortizationTypeFieldSpecified:boolean ;
private mortgageTypeField:RELATED_LOANMortgageType ;
private mortgageTypeFieldSpecified:boolean ;
private loanOriginalMaturityTermMonthsField:string ;
private originalLoanAmountField:string ;
private otherAmortizationTypeDescriptionField:string ;
private otherMortgageTypeDescriptionField:string ;
private relatedInvestorLoanIdentifierField:string ;
private relatedLoanFinancingSourceTypeField:RELATED_LOANRelatedLoanFinancingSourceType ;
private relatedLoanFinancingSourceTypeFieldSpecified:boolean ;
private relatedLoanFinancingSourceTypeOtherDescriptionField:string ;
private relatedLoanInvestorTypeField:RELATED_LOANRelatedLoanInvestorType ;
private relatedLoanInvestorTypeFieldSpecified:boolean ;
private relatedLoanInvestorTypeOtherDescriptionField:string ;
private relatedLoanRelationshipTypeField:RELATED_LOANRelatedLoanRelationshipType ;
private relatedLoanRelationshipTypeFieldSpecified:boolean ;
private relatedLoanRelationshipTypeOtherDescriptionField:string ;
private relatedLoanUPBAmountField:string ;
private scheduledFirstPaymentDateField:string ;
private loanAllInPricePercentField:string ;
private noteDateField:string ;
private balloonIndicatorField:RELATED_LOANBalloonIndicator ;
private balloonIndicatorFieldSpecified:boolean ;
private negativeAmortizationTypeField:RELATED_LOANNegativeAmortizationType ;
private negativeAmortizationTypeFieldSpecified:boolean ;
private lienHolderCityField:string ;
private lienHolderCountryField:string ;
private lienHolderPostalCodeField:string ;
private lienHolderStateField:string ;
private lienHolderStreetAddressField:string ;
private lienHolderStreetAddress2Field:string ;
private lienHolderUnparsedNameField:string ;
private assumabilityIndicatorField:RELATED_LOANAssumabilityIndicator ;
private assumabilityIndicatorFieldSpecified:boolean ;
private originalLoanStandardEscrowProvisionsIndicatorField:RELATED_LOANOriginalLoanStandardEscrowProvisionsIndicator ;
private originalLoanStandardEscrowProvisionsIndicatorFieldSpecified:boolean ;
private prepaymentPenaltyIndicatorField:RELATED_LOANPrepaymentPenaltyIndicator ;
private prepaymentPenaltyIndicatorFieldSpecified:boolean ;
public get RelatedLoanID(): string
{
return this.relatedLoanIDField;
}
public set RelatedLoanID(value: string)
{
this.relatedLoanIDField = value;
}
public get HELOCMaximumBalanceAmount(): string
{
return this.hELOCMaximumBalanceAmountField;
}
public set HELOCMaximumBalanceAmount(value: string)
{
this.hELOCMaximumBalanceAmountField = value;
}
public get InvestorREOPropertyIdentifier(): string
{
return this.investorREOPropertyIdentifierField;
}
public set InvestorREOPropertyIdentifier(value: string)
{
this.investorREOPropertyIdentifierField = value;
}
public get LienHolderSameAsSubjectLoanIndicator(): RELATED_LOANLienHolderSameAsSubjectLoanIndicator
{
return this.lienHolderSameAsSubjectLoanIndicatorField;
}
public set LienHolderSameAsSubjectLoanIndicator(value: RELATED_LOANLienHolderSameAsSubjectLoanIndicator)
{
this.lienHolderSameAsSubjectLoanIndicatorField = value;
}
public get LienHolderSameAsSubjectLoanIndicatorSpecified(): boolean
{
return this.lienHolderSameAsSubjectLoanIndicatorFieldSpecified;
}
public set LienHolderSameAsSubjectLoanIndicatorSpecified(value: boolean)
{
this.lienHolderSameAsSubjectLoanIndicatorFieldSpecified = value;
}
public get LienHolderType(): RELATED_LOANLienHolderType
{
return this.lienHolderTypeField;
}
public set LienHolderType(value: RELATED_LOANLienHolderType)
{
this.lienHolderTypeField = value;
}
public get LienHolderTypeSpecified(): boolean
{
return this.lienHolderTypeFieldSpecified;
}
public set LienHolderTypeSpecified(value: boolean)
{
this.lienHolderTypeFieldSpecified = value;
}
public get LienHolderTypeOtherDescription(): string
{
return this.lienHolderTypeOtherDescriptionField;
}
public set LienHolderTypeOtherDescription(value: string)
{
this.lienHolderTypeOtherDescriptionField = value;
}
public get LienPriorityType(): RELATED_LOANLienPriorityType
{
return this.lienPriorityTypeField;
}
public set LienPriorityType(value: RELATED_LOANLienPriorityType)
{
this.lienPriorityTypeField = value;
}
public get LienPriorityTypeSpecified(): boolean
{
return this.lienPriorityTypeFieldSpecified;
}
public set LienPriorityTypeSpecified(value: boolean)
{
this.lienPriorityTypeFieldSpecified = value;
}
public get LienPriorityTypeOtherDescription(): string
{
return this.lienPriorityTypeOtherDescriptionField;
}
public set LienPriorityTypeOtherDescription(value: string)
{
this.lienPriorityTypeOtherDescriptionField = value;
}
public get LoanAmortizationType(): RELATED_LOANLoanAmortizationType
{
return this.loanAmortizationTypeField;
}
public set LoanAmortizationType(value: RELATED_LOANLoanAmortizationType)
{
this.loanAmortizationTypeField = value;
}
public get LoanAmortizationTypeSpecified(): boolean
{
return this.loanAmortizationTypeFieldSpecified;
}
public set LoanAmortizationTypeSpecified(value: boolean)
{
this.loanAmortizationTypeFieldSpecified = value;
}
public get MortgageType(): RELATED_LOANMortgageType
{
return this.mortgageTypeField;
}
public set MortgageType(value: RELATED_LOANMortgageType)
{
this.mortgageTypeField = value;
}
public get MortgageTypeSpecified(): boolean
{
return this.mortgageTypeFieldSpecified;
}
public set MortgageTypeSpecified(value: boolean)
{
this.mortgageTypeFieldSpecified = value;
}
public get LoanOriginalMaturityTermMonths(): string
{
return this.loanOriginalMaturityTermMonthsField;
}
public set LoanOriginalMaturityTermMonths(value: string)
{
this.loanOriginalMaturityTermMonthsField = value;
}
public get OriginalLoanAmount(): string
{
return this.originalLoanAmountField;
}
public set OriginalLoanAmount(value: string)
{
this.originalLoanAmountField = value;
}
public get OtherAmortizationTypeDescription(): string
{
return this.otherAmortizationTypeDescriptionField;
}
public set OtherAmortizationTypeDescription(value: string)
{
this.otherAmortizationTypeDescriptionField = value;
}
public get OtherMortgageTypeDescription(): string
{
return this.otherMortgageTypeDescriptionField;
}
public set OtherMortgageTypeDescription(value: string)
{
this.otherMortgageTypeDescriptionField = value;
}
public get RelatedInvestorLoanIdentifier(): string
{
return this.relatedInvestorLoanIdentifierField;
}
public set RelatedInvestorLoanIdentifier(value: string)
{
this.relatedInvestorLoanIdentifierField = value;
}
public get RelatedLoanFinancingSourceType(): RELATED_LOANRelatedLoanFinancingSourceType
{
return this.relatedLoanFinancingSourceTypeField;
}
public set RelatedLoanFinancingSourceType(value: RELATED_LOANRelatedLoanFinancingSourceType)
{
this.relatedLoanFinancingSourceTypeField = value;
}
public get RelatedLoanFinancingSourceTypeSpecified(): boolean
{
return this.relatedLoanFinancingSourceTypeFieldSpecified;
}
public set RelatedLoanFinancingSourceTypeSpecified(value: boolean)
{
this.relatedLoanFinancingSourceTypeFieldSpecified = value;
}
public get RelatedLoanFinancingSourceTypeOtherDescription(): string
{
return this.relatedLoanFinancingSourceTypeOtherDescriptionField;
}
public set RelatedLoanFinancingSourceTypeOtherDescription(value: string)
{
this.relatedLoanFinancingSourceTypeOtherDescriptionField = value;
}
public get RelatedLoanInvestorType(): RELATED_LOANRelatedLoanInvestorType
{
return this.relatedLoanInvestorTypeField;
}
public set RelatedLoanInvestorType(value: RELATED_LOANRelatedLoanInvestorType)
{
this.relatedLoanInvestorTypeField = value;
}
public get RelatedLoanInvestorTypeSpecified(): boolean
{
return this.relatedLoanInvestorTypeFieldSpecified;
}
public set RelatedLoanInvestorTypeSpecified(value: boolean)
{
this.relatedLoanInvestorTypeFieldSpecified = value;
}
public get RelatedLoanInvestorTypeOtherDescription(): string
{
return this.relatedLoanInvestorTypeOtherDescriptionField;
}
public set RelatedLoanInvestorTypeOtherDescription(value: string)
{
this.relatedLoanInvestorTypeOtherDescriptionField = value;
}
public get RelatedLoanRelationshipType(): RELATED_LOANRelatedLoanRelationshipType
{
return this.relatedLoanRelationshipTypeField;
}
public set RelatedLoanRelationshipType(value: RELATED_LOANRelatedLoanRelationshipType)
{
this.relatedLoanRelationshipTypeField = value;
}
public get RelatedLoanRelationshipTypeSpecified(): boolean
{
return this.relatedLoanRelationshipTypeFieldSpecified;
}
public set RelatedLoanRelationshipTypeSpecified(value: boolean)
{
this.relatedLoanRelationshipTypeFieldSpecified = value;
}
public get RelatedLoanRelationshipTypeOtherDescription(): string
{
return this.relatedLoanRelationshipTypeOtherDescriptionField;
}
public set RelatedLoanRelationshipTypeOtherDescription(value: string)
{
this.relatedLoanRelationshipTypeOtherDescriptionField = value;
}
public get RelatedLoanUPBAmount(): string
{
return this.relatedLoanUPBAmountField;
}
public set RelatedLoanUPBAmount(value: string)
{
this.relatedLoanUPBAmountField = value;
}
public get ScheduledFirstPaymentDate(): string
{
return this.scheduledFirstPaymentDateField;
}
public set ScheduledFirstPaymentDate(value: string)
{
this.scheduledFirstPaymentDateField = value;
}
public get LoanAllInPricePercent(): string
{
return this.loanAllInPricePercentField;
}
public set LoanAllInPricePercent(value: string)
{
this.loanAllInPricePercentField = value;
}
public get NoteDate(): string
{
return this.noteDateField;
}
public set NoteDate(value: string)
{
this.noteDateField = value;
}
public get BalloonIndicator(): RELATED_LOANBalloonIndicator
{
return this.balloonIndicatorField;
}
public set BalloonIndicator(value: RELATED_LOANBalloonIndicator)
{
this.balloonIndicatorField = value;
}
public get BalloonIndicatorSpecified(): boolean
{
return this.balloonIndicatorFieldSpecified;
}
public set BalloonIndicatorSpecified(value: boolean)
{
this.balloonIndicatorFieldSpecified = value;
}
public get NegativeAmortizationType(): RELATED_LOANNegativeAmortizationType
{
return this.negativeAmortizationTypeField;
}
public set NegativeAmortizationType(value: RELATED_LOANNegativeAmortizationType)
{
this.negativeAmortizationTypeField = value;
}
public get NegativeAmortizationTypeSpecified(): boolean
{
return this.negativeAmortizationTypeFieldSpecified;
}
public set NegativeAmortizationTypeSpecified(value: boolean)
{
this.negativeAmortizationTypeFieldSpecified = value;
}
public get LienHolderCity(): string
{
return this.lienHolderCityField;
}
public set LienHolderCity(value: string)
{
this.lienHolderCityField = value;
}
public get LienHolderCountry(): string
{
return this.lienHolderCountryField;
}
public set LienHolderCountry(value: string)
{
this.lienHolderCountryField = value;
}
public get LienHolderPostalCode(): string
{
return this.lienHolderPostalCodeField;
}
public set LienHolderPostalCode(value: string)
{
this.lienHolderPostalCodeField = value;
}
public get LienHolderState(): string
{
return this.lienHolderStateField;
}
public set LienHolderState(value: string)
{
this.lienHolderStateField = value;
}
public get LienHolderStreetAddress(): string
{
return this.lienHolderStreetAddressField;
}
public set LienHolderStreetAddress(value: string)
{
this.lienHolderStreetAddressField = value;
}
public get LienHolderStreetAddress2(): string
{
return this.lienHolderStreetAddress2Field;
}
public set LienHolderStreetAddress2(value: string)
{
this.lienHolderStreetAddress2Field = value;
}
public get LienHolderUnparsedName(): string
{
return this.lienHolderUnparsedNameField;
}
public set LienHolderUnparsedName(value: string)
{
this.lienHolderUnparsedNameField = value;
}
public get AssumabilityIndicator(): RELATED_LOANAssumabilityIndicator
{
return this.assumabilityIndicatorField;
}
public set AssumabilityIndicator(value: RELATED_LOANAssumabilityIndicator)
{
this.assumabilityIndicatorField = value;
}
public get AssumabilityIndicatorSpecified(): boolean
{
return this.assumabilityIndicatorFieldSpecified;
}
public set AssumabilityIndicatorSpecified(value: boolean)
{
this.assumabilityIndicatorFieldSpecified = value;
}
public get OriginalLoanStandardEscrowProvisionsIndicator(): RELATED_LOANOriginalLoanStandardEscrowProvisionsIndicator
{
return this.originalLoanStandardEscrowProvisionsIndicatorField;
}
public set OriginalLoanStandardEscrowProvisionsIndicator(value: RELATED_LOANOriginalLoanStandardEscrowProvisionsIndicator)
{
this.originalLoanStandardEscrowProvisionsIndicatorField = value;
}
public get OriginalLoanStandardEscrowProvisionsIndicatorSpecified(): boolean
{
return this.originalLoanStandardEscrowProvisionsIndicatorFieldSpecified;
}
public set OriginalLoanStandardEscrowProvisionsIndicatorSpecified(value: boolean)
{
this.originalLoanStandardEscrowProvisionsIndicatorFieldSpecified = value;
}
public get PrepaymentPenaltyIndicator(): RELATED_LOANPrepaymentPenaltyIndicator
{
return this.prepaymentPenaltyIndicatorField;
}
public set PrepaymentPenaltyIndicator(value: RELATED_LOANPrepaymentPenaltyIndicator)
{
this.prepaymentPenaltyIndicatorField = value;
}
public get PrepaymentPenaltyIndicatorSpecified(): boolean
{
return this.prepaymentPenaltyIndicatorFieldSpecified;
}
public set PrepaymentPenaltyIndicatorSpecified(value: boolean)
{
this.prepaymentPenaltyIndicatorFieldSpecified = value;
} 
}
export enum RELATED_LOANLienHolderSameAsSubjectLoanIndicator {
 N,

Y
 }
export enum RELATED_LOANLienHolderType {
 FRE,

Unknown,

Other,

PropertySeller,

NonProfitOrganization,

FNM,

GovernmentAgency,

Lender
 }
export enum RELATED_LOANLienPriorityType {
 Other,

SecondLien,

FourthLien,

FirstLien,

ThirdLien
 }
export enum RELATED_LOANLoanAmortizationType {
 GraduatedPaymentMortgage,

AdjustableRate,

OtherAmortizationType,

RateImprovementMortgage,

Step,

ReverseMortgage,

GraduatedPaymentARM,

GrowingEquityMortgage,

Fixed
 }
export enum RELATED_LOANMortgageType {
 Conventional,

FHA,

FarmersHomeAdministration,

Other,

VA,

StateAgency,

HELOC,

LocalAgency
 }
export enum RELATED_LOANRelatedLoanFinancingSourceType {
 NonOriginatingFinancialInstitution,

Employer,

FederalAgency,

Institutional,

Other,

PropertySeller,

StateAgency,

RuralHousingService,

LocalAgency,

Community,

OriginatingLender
 }
export enum RELATED_LOANRelatedLoanInvestorType {
 FRE,

Unknown,

Seller,

Other,

FNM
 }
export enum RELATED_LOANRelatedLoanRelationshipType {
 SeniorLien,

ConvertedIntoSubjectLoan,

Other,

SubordinateLien,

RefinancedBySubjectLoan,

ModifiedIntoSubjectLoan,

PriorREODisposition
 }
export enum RELATED_LOANBalloonIndicator {
 N,

Y
 }
export enum RELATED_LOANNegativeAmortizationType {
 ScheduledNegativeAmortization,

PotentialNegativeAmortization,

NoNegativeAmortization
 }
export enum RELATED_LOANAssumabilityIndicator {
 N,

Y
 }
export enum RELATED_LOANOriginalLoanStandardEscrowProvisionsIndicator {
 N,

Y
 }
export enum RELATED_LOANPrepaymentPenaltyIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class URLA_TOTAL 
{
private _HOUSING_EXPENSEField:_HOUSING_EXPENSE[] ;
private _IDField:string ;
private borrowerIDField:string ;
private uRLASubtotalLiquidAssetsAmountField:string ;
private _AssetsAmountField:string ;
private _NetWorthAmountField:string ;
private _LiabilityMonthlyPaymentsAmountField:string ;
private _LiabilityUnpaidBalanceAmountField:string ;
private _LotAndImprovementsAmountField:string ;
private _REOMarketValueAmountField:string ;
private _REOLienUPBAmountField:string ;
private _REORentalIncomeGrossAmountField:string ;
private _REOLienInstallmentAmountField:string ;
private _REOMaintenanceExpenseAmountField:string ;
private _REORentalIncomeNetAmountField:string ;
private _TransactionCostAmountField:string ;
private _CashFromToBorrowerAmountField:string ;
private _CombinedPresentHousingExpenseAmountField:string ;
private _CombinedProposedHousingExpenseAmountField:string ;
private _BaseIncomeAmountField:string ;
private _OvertimeIncomeAmountField:string ;
private _BonusIncomeAmountField:string ;
private _CommissionsIncomeAmountField:string ;
private _DividendsInterestIncomeAmountField:string ;
private _NetRentalIncomeAmountField:string ;
private _OtherTypesOfIncomeAmountField:string ;
private _MonthlyIncomeAmountField:string ;
public get _HOUSING_EXPENSE(): _HOUSING_EXPENSE[]
{
return this._HOUSING_EXPENSEField;
}
public set _HOUSING_EXPENSE(value: _HOUSING_EXPENSE[])
{
this._HOUSING_EXPENSEField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get BorrowerID(): string
{
return this.borrowerIDField;
}
public set BorrowerID(value: string)
{
this.borrowerIDField = value;
}
public get URLASubtotalLiquidAssetsAmount(): string
{
return this.uRLASubtotalLiquidAssetsAmountField;
}
public set URLASubtotalLiquidAssetsAmount(value: string)
{
this.uRLASubtotalLiquidAssetsAmountField = value;
}
public get _AssetsAmount(): string
{
return this._AssetsAmountField;
}
public set _AssetsAmount(value: string)
{
this._AssetsAmountField = value;
}
public get _NetWorthAmount(): string
{
return this._NetWorthAmountField;
}
public set _NetWorthAmount(value: string)
{
this._NetWorthAmountField = value;
}
public get _LiabilityMonthlyPaymentsAmount(): string
{
return this._LiabilityMonthlyPaymentsAmountField;
}
public set _LiabilityMonthlyPaymentsAmount(value: string)
{
this._LiabilityMonthlyPaymentsAmountField = value;
}
public get _LiabilityUnpaidBalanceAmount(): string
{
return this._LiabilityUnpaidBalanceAmountField;
}
public set _LiabilityUnpaidBalanceAmount(value: string)
{
this._LiabilityUnpaidBalanceAmountField = value;
}
public get _LotAndImprovementsAmount(): string
{
return this._LotAndImprovementsAmountField;
}
public set _LotAndImprovementsAmount(value: string)
{
this._LotAndImprovementsAmountField = value;
}
public get _REOMarketValueAmount(): string
{
return this._REOMarketValueAmountField;
}
public set _REOMarketValueAmount(value: string)
{
this._REOMarketValueAmountField = value;
}
public get _REOLienUPBAmount(): string
{
return this._REOLienUPBAmountField;
}
public set _REOLienUPBAmount(value: string)
{
this._REOLienUPBAmountField = value;
}
public get _REORentalIncomeGrossAmount(): string
{
return this._REORentalIncomeGrossAmountField;
}
public set _REORentalIncomeGrossAmount(value: string)
{
this._REORentalIncomeGrossAmountField = value;
}
public get _REOLienInstallmentAmount(): string
{
return this._REOLienInstallmentAmountField;
}
public set _REOLienInstallmentAmount(value: string)
{
this._REOLienInstallmentAmountField = value;
}
public get _REOMaintenanceExpenseAmount(): string
{
return this._REOMaintenanceExpenseAmountField;
}
public set _REOMaintenanceExpenseAmount(value: string)
{
this._REOMaintenanceExpenseAmountField = value;
}
public get _REORentalIncomeNetAmount(): string
{
return this._REORentalIncomeNetAmountField;
}
public set _REORentalIncomeNetAmount(value: string)
{
this._REORentalIncomeNetAmountField = value;
}
public get _TransactionCostAmount(): string
{
return this._TransactionCostAmountField;
}
public set _TransactionCostAmount(value: string)
{
this._TransactionCostAmountField = value;
}
public get _CashFromToBorrowerAmount(): string
{
return this._CashFromToBorrowerAmountField;
}
public set _CashFromToBorrowerAmount(value: string)
{
this._CashFromToBorrowerAmountField = value;
}
public get _CombinedPresentHousingExpenseAmount(): string
{
return this._CombinedPresentHousingExpenseAmountField;
}
public set _CombinedPresentHousingExpenseAmount(value: string)
{
this._CombinedPresentHousingExpenseAmountField = value;
}
public get _CombinedProposedHousingExpenseAmount(): string
{
return this._CombinedProposedHousingExpenseAmountField;
}
public set _CombinedProposedHousingExpenseAmount(value: string)
{
this._CombinedProposedHousingExpenseAmountField = value;
}
public get _BaseIncomeAmount(): string
{
return this._BaseIncomeAmountField;
}
public set _BaseIncomeAmount(value: string)
{
this._BaseIncomeAmountField = value;
}
public get _OvertimeIncomeAmount(): string
{
return this._OvertimeIncomeAmountField;
}
public set _OvertimeIncomeAmount(value: string)
{
this._OvertimeIncomeAmountField = value;
}
public get _BonusIncomeAmount(): string
{
return this._BonusIncomeAmountField;
}
public set _BonusIncomeAmount(value: string)
{
this._BonusIncomeAmountField = value;
}
public get _CommissionsIncomeAmount(): string
{
return this._CommissionsIncomeAmountField;
}
public set _CommissionsIncomeAmount(value: string)
{
this._CommissionsIncomeAmountField = value;
}
public get _DividendsInterestIncomeAmount(): string
{
return this._DividendsInterestIncomeAmountField;
}
public set _DividendsInterestIncomeAmount(value: string)
{
this._DividendsInterestIncomeAmountField = value;
}
public get _NetRentalIncomeAmount(): string
{
return this._NetRentalIncomeAmountField;
}
public set _NetRentalIncomeAmount(value: string)
{
this._NetRentalIncomeAmountField = value;
}
public get _OtherTypesOfIncomeAmount(): string
{
return this._OtherTypesOfIncomeAmountField;
}
public set _OtherTypesOfIncomeAmount(value: string)
{
this._OtherTypesOfIncomeAmountField = value;
}
public get _MonthlyIncomeAmount(): string
{
return this._MonthlyIncomeAmountField;
}
public set _MonthlyIncomeAmount(value: string)
{
this._MonthlyIncomeAmountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _HOUSING_EXPENSE 
{
private _IDField:string ;
private _PaymentAmountField:string ;
private housingExpenseTypeField:_HOUSING_EXPENSEHousingExpenseType ;
private housingExpenseTypeFieldSpecified:boolean ;
private housingExpenseTypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get HousingExpenseType(): _HOUSING_EXPENSEHousingExpenseType
{
return this.housingExpenseTypeField;
}
public set HousingExpenseType(value: _HOUSING_EXPENSEHousingExpenseType)
{
this.housingExpenseTypeField = value;
}
public get HousingExpenseTypeSpecified(): boolean
{
return this.housingExpenseTypeFieldSpecified;
}
public set HousingExpenseTypeSpecified(value: boolean)
{
this.housingExpenseTypeFieldSpecified = value;
}
public get HousingExpenseTypeOtherDescription(): string
{
return this.housingExpenseTypeOtherDescriptionField;
}
public set HousingExpenseTypeOtherDescription(value: string)
{
this.housingExpenseTypeOtherDescriptionField = value;
} 
}
export enum _HOUSING_EXPENSEHousingExpenseType {
 HazardInsurance,

Utilities,

GroundRent,

HomeownersAssociationDuesAndCondominiumFees,

RealEstateTax,

FirstMortgagePITI,

MaintenanceAndMiscellaneous,

LeaseholdPayments,

OtherMortgageLoanPrincipalAndInterest,

MI,

OtherMortgageLoanPrincipalInterestTaxesAndInsurance,

OtherHousingExpense,

FirstMortgagePrincipalAndInterest,

Rent
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_ORIGINATOR 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _IDField:string ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _LicenseExemptIndicatorField:LOAN_ORIGINATOR_LicenseExemptIndicator ;
private _LicenseExemptIndicatorFieldSpecified:boolean ;
private _LicenseIssuingAuthorityDescriptionField:string ;
private _LicenseNumberIdentifierField:string ;
private _NationwideMortgageLicensingSystemAssignedIdentifierField:string ;
private nonPersonEntityIndicatorField:LOAN_ORIGINATORNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _LicenseExemptIndicator(): LOAN_ORIGINATOR_LicenseExemptIndicator
{
return this._LicenseExemptIndicatorField;
}
public set _LicenseExemptIndicator(value: LOAN_ORIGINATOR_LicenseExemptIndicator)
{
this._LicenseExemptIndicatorField = value;
}
public get _LicenseExemptIndicatorSpecified(): boolean
{
return this._LicenseExemptIndicatorFieldSpecified;
}
public set _LicenseExemptIndicatorSpecified(value: boolean)
{
this._LicenseExemptIndicatorFieldSpecified = value;
}
public get _LicenseIssuingAuthorityDescription(): string
{
return this._LicenseIssuingAuthorityDescriptionField;
}
public set _LicenseIssuingAuthorityDescription(value: string)
{
this._LicenseIssuingAuthorityDescriptionField = value;
}
public get _LicenseNumberIdentifier(): string
{
return this._LicenseNumberIdentifierField;
}
public set _LicenseNumberIdentifier(value: string)
{
this._LicenseNumberIdentifierField = value;
}
public get _NationwideMortgageLicensingSystemAssignedIdentifier(): string
{
return this._NationwideMortgageLicensingSystemAssignedIdentifierField;
}
public set _NationwideMortgageLicensingSystemAssignedIdentifier(value: string)
{
this._NationwideMortgageLicensingSystemAssignedIdentifierField = value;
}
public get NonPersonEntityIndicator(): LOAN_ORIGINATORNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: LOAN_ORIGINATORNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
} 
}
export enum LOAN_ORIGINATOR_LicenseExemptIndicator {
 N,

Y
 }
export enum LOAN_ORIGINATORNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CLOSING_DOCUMENTS 
{
private aLLONGE_TO_NOTEField:ALLONGE_TO_NOTE ;
private bENEFICIARYField:BENEFICIARY ;
private cLOSING_AGENTField:CLOSING_AGENT[] ;
private cLOSING_INSTRUCTIONSField:CLOSING_INSTRUCTIONS[] ;
private cOMPENSATIONField:COMPENSATION[] ;
private cOSIGNERField:COSIGNER[] ;
private eSCROW_ACCOUNT_DETAILField:ESCROW_ACCOUNT_DETAIL[] ;
private eXECUTIONField:EXECUTION ;
private iNVESTORField:INVESTOR ;
private lENDERField:LENDER ;
private lENDER_BRANCHField:LENDER_BRANCH ;
private lOAN_DETAILSField:LOAN_DETAILS ;
private lOSS_PAYEEField:LOSS_PAYEE[] ;
private mORTGAGE_BROKERField:MORTGAGE_BROKER ;
private pAYMENT_DETAILSField:PAYMENT_DETAILS ;
private pAYOFFField:PAYOFF[] ;
private rECORDABLE_DOCUMENTField:RECORDABLE_DOCUMENT[] ;
private rESPA_HUD_DETAILField:RESPA_HUD_DETAIL[] ;
private rESPA_SERVICING_DATAField:RESPA_SERVICING_DATA ;
private rESPA_SUMMARYField:RESPA_SUMMARY ;
private sELLERField:SELLER[] ;
private sERVICERField:SERVICER[] ;
private bUILDERField:BUILDER[] ;
private cLOSING_COSTField:CLOSING_COST[] ;
private tRUSTField:TRUST[] ;
private lOAN_MODIFICATIONField:LOAN_MODIFICATION ;
public get ALLONGE_TO_NOTE(): ALLONGE_TO_NOTE
{
return this.aLLONGE_TO_NOTEField;
}
public set ALLONGE_TO_NOTE(value: ALLONGE_TO_NOTE)
{
this.aLLONGE_TO_NOTEField = value;
}
public get BENEFICIARY(): BENEFICIARY
{
return this.bENEFICIARYField;
}
public set BENEFICIARY(value: BENEFICIARY)
{
this.bENEFICIARYField = value;
}
public get CLOSING_AGENT(): CLOSING_AGENT[]
{
return this.cLOSING_AGENTField;
}
public set CLOSING_AGENT(value: CLOSING_AGENT[])
{
this.cLOSING_AGENTField = value;
}
public get CLOSING_INSTRUCTIONS(): CLOSING_INSTRUCTIONS[]
{
return this.cLOSING_INSTRUCTIONSField;
}
public set CLOSING_INSTRUCTIONS(value: CLOSING_INSTRUCTIONS[])
{
this.cLOSING_INSTRUCTIONSField = value;
}
public get COMPENSATION(): COMPENSATION[]
{
return this.cOMPENSATIONField;
}
public set COMPENSATION(value: COMPENSATION[])
{
this.cOMPENSATIONField = value;
}
public get COSIGNER(): COSIGNER[]
{
return this.cOSIGNERField;
}
public set COSIGNER(value: COSIGNER[])
{
this.cOSIGNERField = value;
}
public get ESCROW_ACCOUNT_DETAIL(): ESCROW_ACCOUNT_DETAIL[]
{
return this.eSCROW_ACCOUNT_DETAILField;
}
public set ESCROW_ACCOUNT_DETAIL(value: ESCROW_ACCOUNT_DETAIL[])
{
this.eSCROW_ACCOUNT_DETAILField = value;
}
public get EXECUTION(): EXECUTION
{
return this.eXECUTIONField;
}
public set EXECUTION(value: EXECUTION)
{
this.eXECUTIONField = value;
}
public get INVESTOR(): INVESTOR
{
return this.iNVESTORField;
}
public set INVESTOR(value: INVESTOR)
{
this.iNVESTORField = value;
}
public get LENDER(): LENDER
{
return this.lENDERField;
}
public set LENDER(value: LENDER)
{
this.lENDERField = value;
}
public get LENDER_BRANCH(): LENDER_BRANCH
{
return this.lENDER_BRANCHField;
}
public set LENDER_BRANCH(value: LENDER_BRANCH)
{
this.lENDER_BRANCHField = value;
}
public get LOAN_DETAILS(): LOAN_DETAILS
{
return this.lOAN_DETAILSField;
}
public set LOAN_DETAILS(value: LOAN_DETAILS)
{
this.lOAN_DETAILSField = value;
}
public get LOSS_PAYEE(): LOSS_PAYEE[]
{
return this.lOSS_PAYEEField;
}
public set LOSS_PAYEE(value: LOSS_PAYEE[])
{
this.lOSS_PAYEEField = value;
}
public get MORTGAGE_BROKER(): MORTGAGE_BROKER
{
return this.mORTGAGE_BROKERField;
}
public set MORTGAGE_BROKER(value: MORTGAGE_BROKER)
{
this.mORTGAGE_BROKERField = value;
}
public get PAYMENT_DETAILS(): PAYMENT_DETAILS
{
return this.pAYMENT_DETAILSField;
}
public set PAYMENT_DETAILS(value: PAYMENT_DETAILS)
{
this.pAYMENT_DETAILSField = value;
}
public get PAYOFF(): PAYOFF[]
{
return this.pAYOFFField;
}
public set PAYOFF(value: PAYOFF[])
{
this.pAYOFFField = value;
}
public get RECORDABLE_DOCUMENT(): RECORDABLE_DOCUMENT[]
{
return this.rECORDABLE_DOCUMENTField;
}
public set RECORDABLE_DOCUMENT(value: RECORDABLE_DOCUMENT[])
{
this.rECORDABLE_DOCUMENTField = value;
}
public get RESPA_HUD_DETAIL(): RESPA_HUD_DETAIL[]
{
return this.rESPA_HUD_DETAILField;
}
public set RESPA_HUD_DETAIL(value: RESPA_HUD_DETAIL[])
{
this.rESPA_HUD_DETAILField = value;
}
public get RESPA_SERVICING_DATA(): RESPA_SERVICING_DATA
{
return this.rESPA_SERVICING_DATAField;
}
public set RESPA_SERVICING_DATA(value: RESPA_SERVICING_DATA)
{
this.rESPA_SERVICING_DATAField = value;
}
public get RESPA_SUMMARY(): RESPA_SUMMARY
{
return this.rESPA_SUMMARYField;
}
public set RESPA_SUMMARY(value: RESPA_SUMMARY)
{
this.rESPA_SUMMARYField = value;
}
public get SELLER(): SELLER[]
{
return this.sELLERField;
}
public set SELLER(value: SELLER[])
{
this.sELLERField = value;
}
public get SERVICER(): SERVICER[]
{
return this.sERVICERField;
}
public set SERVICER(value: SERVICER[])
{
this.sERVICERField = value;
}
public get BUILDER(): BUILDER[]
{
return this.bUILDERField;
}
public set BUILDER(value: BUILDER[])
{
this.bUILDERField = value;
}
public get CLOSING_COST(): CLOSING_COST[]
{
return this.cLOSING_COSTField;
}
public set CLOSING_COST(value: CLOSING_COST[])
{
this.cLOSING_COSTField = value;
}
public get TRUST(): TRUST[]
{
return this.tRUSTField;
}
public set TRUST(value: TRUST[])
{
this.tRUSTField = value;
}
public get LOAN_MODIFICATION(): LOAN_MODIFICATION
{
return this.lOAN_MODIFICATIONField;
}
public set LOAN_MODIFICATION(value: LOAN_MODIFICATION)
{
this.lOAN_MODIFICATIONField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ALLONGE_TO_NOTE 
{
private aUTHORIZED_REPRESENTATIVEField:AUTHORIZED_REPRESENTATIVE ;
private _DateField:string ;
private _ExecutedByDescriptionField:string ;
private _InFavorOfDescriptionField:string ;
private _PayToTheOrderOfDescriptionField:string ;
private _WithoutRecourseDescriptionField:string ;
private _TypeField:ALLONGE_TO_NOTE_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _IDField:string ;
public get AUTHORIZED_REPRESENTATIVE(): AUTHORIZED_REPRESENTATIVE
{
return this.aUTHORIZED_REPRESENTATIVEField;
}
public set AUTHORIZED_REPRESENTATIVE(value: AUTHORIZED_REPRESENTATIVE)
{
this.aUTHORIZED_REPRESENTATIVEField = value;
}
public get _Date(): string
{
return this._DateField;
}
public set _Date(value: string)
{
this._DateField = value;
}
public get _ExecutedByDescription(): string
{
return this._ExecutedByDescriptionField;
}
public set _ExecutedByDescription(value: string)
{
this._ExecutedByDescriptionField = value;
}
public get _InFavorOfDescription(): string
{
return this._InFavorOfDescriptionField;
}
public set _InFavorOfDescription(value: string)
{
this._InFavorOfDescriptionField = value;
}
public get _PayToTheOrderOfDescription(): string
{
return this._PayToTheOrderOfDescriptionField;
}
public set _PayToTheOrderOfDescription(value: string)
{
this._PayToTheOrderOfDescriptionField = value;
}
public get _WithoutRecourseDescription(): string
{
return this._WithoutRecourseDescriptionField;
}
public set _WithoutRecourseDescription(value: string)
{
this._WithoutRecourseDescriptionField = value;
}
public get _Type(): ALLONGE_TO_NOTE_Type
{
return this._TypeField;
}
public set _Type(value: ALLONGE_TO_NOTE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum ALLONGE_TO_NOTE_Type {
 GrowingEquity,

GraduatedPayment,

Other
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class BENEFICIARY 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private nonPersonEntityIndicatorField:BENEFICIARYNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get NonPersonEntityIndicator(): BENEFICIARYNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: BENEFICIARYNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum BENEFICIARYNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CLOSING_AGENT 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _OrderNumberIdentifierField:string ;
private _TypeField:CLOSING_AGENT_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private nonPersonEntityIndicatorField:CLOSING_AGENTNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private authorizedToSignIndicatorField:CLOSING_AGENTAuthorizedToSignIndicator ;
private authorizedToSignIndicatorFieldSpecified:boolean ;
private _TitleDescriptionField:string ;
private _IdentifierField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _OrderNumberIdentifier(): string
{
return this._OrderNumberIdentifierField;
}
public set _OrderNumberIdentifier(value: string)
{
this._OrderNumberIdentifierField = value;
}
public get _Type(): CLOSING_AGENT_Type
{
return this._TypeField;
}
public set _Type(value: CLOSING_AGENT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get NonPersonEntityIndicator(): CLOSING_AGENTNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: CLOSING_AGENTNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get AuthorizedToSignIndicator(): CLOSING_AGENTAuthorizedToSignIndicator
{
return this.authorizedToSignIndicatorField;
}
public set AuthorizedToSignIndicator(value: CLOSING_AGENTAuthorizedToSignIndicator)
{
this.authorizedToSignIndicatorField = value;
}
public get AuthorizedToSignIndicatorSpecified(): boolean
{
return this.authorizedToSignIndicatorFieldSpecified;
}
public set AuthorizedToSignIndicatorSpecified(value: boolean)
{
this.authorizedToSignIndicatorFieldSpecified = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _Identifier(): string
{
return this._IdentifierField;
}
public set _Identifier(value: string)
{
this._IdentifierField = value;
} 
}
export enum CLOSING_AGENT_Type {
 TitleCompany,

SettlementAgent,

Other,

Attorney,

EscrowCompany,

ClosingAgent
 }
export enum CLOSING_AGENTNonPersonEntityIndicator {
 N,

Y
 }
export enum CLOSING_AGENTAuthorizedToSignIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CLOSING_INSTRUCTIONS 
{
private _CONDITIONField:_CONDITION[] ;
private _ConsolidatedClosingConditionsDescriptionField:string ;
private specialFloodHazardAreaIndictorField:CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndictor ;
private specialFloodHazardAreaIndictorFieldSpecified:boolean ;
private leadBasedPaintCertificationRequiredIndicatorField:CLOSING_INSTRUCTIONSLeadBasedPaintCertificationRequiredIndicator ;
private leadBasedPaintCertificationRequiredIndicatorFieldSpecified:boolean ;
private _PropertyTaxMessageDescriptionField:string ;
private preliminaryTitleReportDateField:string ;
private titleReportItemsDescriptionField:string ;
private titleReportRequiredEndorsementsDescriptionField:string ;
private _TermiteReportRequiredIndicatorField:CLOSING_INSTRUCTIONS_TermiteReportRequiredIndicator ;
private _TermiteReportRequiredIndicatorFieldSpecified:boolean ;
private hoursDocumentsNeededPriorToDisbursementCountField:string ;
private fundingCutoffTimeField:string ;
private specialFloodHazardAreaIndicatorField:CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndicator ;
private specialFloodHazardAreaIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get _CONDITION(): _CONDITION[]
{
return this._CONDITIONField;
}
public set _CONDITION(value: _CONDITION[])
{
this._CONDITIONField = value;
}
public get _ConsolidatedClosingConditionsDescription(): string
{
return this._ConsolidatedClosingConditionsDescriptionField;
}
public set _ConsolidatedClosingConditionsDescription(value: string)
{
this._ConsolidatedClosingConditionsDescriptionField = value;
}
public get SpecialFloodHazardAreaIndictor(): CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndictor
{
return this.specialFloodHazardAreaIndictorField;
}
public set SpecialFloodHazardAreaIndictor(value: CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndictor)
{
this.specialFloodHazardAreaIndictorField = value;
}
public get SpecialFloodHazardAreaIndictorSpecified(): boolean
{
return this.specialFloodHazardAreaIndictorFieldSpecified;
}
public set SpecialFloodHazardAreaIndictorSpecified(value: boolean)
{
this.specialFloodHazardAreaIndictorFieldSpecified = value;
}
public get LeadBasedPaintCertificationRequiredIndicator(): CLOSING_INSTRUCTIONSLeadBasedPaintCertificationRequiredIndicator
{
return this.leadBasedPaintCertificationRequiredIndicatorField;
}
public set LeadBasedPaintCertificationRequiredIndicator(value: CLOSING_INSTRUCTIONSLeadBasedPaintCertificationRequiredIndicator)
{
this.leadBasedPaintCertificationRequiredIndicatorField = value;
}
public get LeadBasedPaintCertificationRequiredIndicatorSpecified(): boolean
{
return this.leadBasedPaintCertificationRequiredIndicatorFieldSpecified;
}
public set LeadBasedPaintCertificationRequiredIndicatorSpecified(value: boolean)
{
this.leadBasedPaintCertificationRequiredIndicatorFieldSpecified = value;
}
public get _PropertyTaxMessageDescription(): string
{
return this._PropertyTaxMessageDescriptionField;
}
public set _PropertyTaxMessageDescription(value: string)
{
this._PropertyTaxMessageDescriptionField = value;
}
public get PreliminaryTitleReportDate(): string
{
return this.preliminaryTitleReportDateField;
}
public set PreliminaryTitleReportDate(value: string)
{
this.preliminaryTitleReportDateField = value;
}
public get TitleReportItemsDescription(): string
{
return this.titleReportItemsDescriptionField;
}
public set TitleReportItemsDescription(value: string)
{
this.titleReportItemsDescriptionField = value;
}
public get TitleReportRequiredEndorsementsDescription(): string
{
return this.titleReportRequiredEndorsementsDescriptionField;
}
public set TitleReportRequiredEndorsementsDescription(value: string)
{
this.titleReportRequiredEndorsementsDescriptionField = value;
}
public get _TermiteReportRequiredIndicator(): CLOSING_INSTRUCTIONS_TermiteReportRequiredIndicator
{
return this._TermiteReportRequiredIndicatorField;
}
public set _TermiteReportRequiredIndicator(value: CLOSING_INSTRUCTIONS_TermiteReportRequiredIndicator)
{
this._TermiteReportRequiredIndicatorField = value;
}
public get _TermiteReportRequiredIndicatorSpecified(): boolean
{
return this._TermiteReportRequiredIndicatorFieldSpecified;
}
public set _TermiteReportRequiredIndicatorSpecified(value: boolean)
{
this._TermiteReportRequiredIndicatorFieldSpecified = value;
}
public get HoursDocumentsNeededPriorToDisbursementCount(): string
{
return this.hoursDocumentsNeededPriorToDisbursementCountField;
}
public set HoursDocumentsNeededPriorToDisbursementCount(value: string)
{
this.hoursDocumentsNeededPriorToDisbursementCountField = value;
}
public get FundingCutoffTime(): string
{
return this.fundingCutoffTimeField;
}
public set FundingCutoffTime(value: string)
{
this.fundingCutoffTimeField = value;
}
public get SpecialFloodHazardAreaIndicator(): CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndicator
{
return this.specialFloodHazardAreaIndicatorField;
}
public set SpecialFloodHazardAreaIndicator(value: CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndicator)
{
this.specialFloodHazardAreaIndicatorField = value;
}
public get SpecialFloodHazardAreaIndicatorSpecified(): boolean
{
return this.specialFloodHazardAreaIndicatorFieldSpecified;
}
public set SpecialFloodHazardAreaIndicatorSpecified(value: boolean)
{
this.specialFloodHazardAreaIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CONDITION 
{
private _DescriptionField:string ;
private _MetIndicatorField:_CONDITION_MetIndicator ;
private _MetIndicatorFieldSpecified:boolean ;
private _SequenceIdentifierField:string ;
private _WaivedIndicatorField:_CONDITION_WaivedIndicator ;
private _WaivedIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _SatisfactionTimeframeTypeField:_CONDITION_SatisfactionTimeframeType ;
private _SatisfactionTimeframeTypeFieldSpecified:boolean ;
private _SatisfactionTimeframeTypeOtherDescriptionField:string ;
private _SatisfactionDateField:string ;
private _SatisfactionApprovedByNameField:string ;
private _SatisfactionResponsiblePartyTypeField:_CONDITION_SatisfactionResponsiblePartyType ;
private _SatisfactionResponsiblePartyTypeFieldSpecified:boolean ;
private _SatisfactionResponsiblePartyTypeOtherDescriptionField:string ;
public get _Description(): string
{
return this._DescriptionField;
}
public set _Description(value: string)
{
this._DescriptionField = value;
}
public get _MetIndicator(): _CONDITION_MetIndicator
{
return this._MetIndicatorField;
}
public set _MetIndicator(value: _CONDITION_MetIndicator)
{
this._MetIndicatorField = value;
}
public get _MetIndicatorSpecified(): boolean
{
return this._MetIndicatorFieldSpecified;
}
public set _MetIndicatorSpecified(value: boolean)
{
this._MetIndicatorFieldSpecified = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _WaivedIndicator(): _CONDITION_WaivedIndicator
{
return this._WaivedIndicatorField;
}
public set _WaivedIndicator(value: _CONDITION_WaivedIndicator)
{
this._WaivedIndicatorField = value;
}
public get _WaivedIndicatorSpecified(): boolean
{
return this._WaivedIndicatorFieldSpecified;
}
public set _WaivedIndicatorSpecified(value: boolean)
{
this._WaivedIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _SatisfactionTimeframeType(): _CONDITION_SatisfactionTimeframeType
{
return this._SatisfactionTimeframeTypeField;
}
public set _SatisfactionTimeframeType(value: _CONDITION_SatisfactionTimeframeType)
{
this._SatisfactionTimeframeTypeField = value;
}
public get _SatisfactionTimeframeTypeSpecified(): boolean
{
return this._SatisfactionTimeframeTypeFieldSpecified;
}
public set _SatisfactionTimeframeTypeSpecified(value: boolean)
{
this._SatisfactionTimeframeTypeFieldSpecified = value;
}
public get _SatisfactionTimeframeTypeOtherDescription(): string
{
return this._SatisfactionTimeframeTypeOtherDescriptionField;
}
public set _SatisfactionTimeframeTypeOtherDescription(value: string)
{
this._SatisfactionTimeframeTypeOtherDescriptionField = value;
}
public get _SatisfactionDate(): string
{
return this._SatisfactionDateField;
}
public set _SatisfactionDate(value: string)
{
this._SatisfactionDateField = value;
}
public get _SatisfactionApprovedByName(): string
{
return this._SatisfactionApprovedByNameField;
}
public set _SatisfactionApprovedByName(value: string)
{
this._SatisfactionApprovedByNameField = value;
}
public get _SatisfactionResponsiblePartyType(): _CONDITION_SatisfactionResponsiblePartyType
{
return this._SatisfactionResponsiblePartyTypeField;
}
public set _SatisfactionResponsiblePartyType(value: _CONDITION_SatisfactionResponsiblePartyType)
{
this._SatisfactionResponsiblePartyTypeField = value;
}
public get _SatisfactionResponsiblePartyTypeSpecified(): boolean
{
return this._SatisfactionResponsiblePartyTypeFieldSpecified;
}
public set _SatisfactionResponsiblePartyTypeSpecified(value: boolean)
{
this._SatisfactionResponsiblePartyTypeFieldSpecified = value;
}
public get _SatisfactionResponsiblePartyTypeOtherDescription(): string
{
return this._SatisfactionResponsiblePartyTypeOtherDescriptionField;
}
public set _SatisfactionResponsiblePartyTypeOtherDescription(value: string)
{
this._SatisfactionResponsiblePartyTypeOtherDescriptionField = value;
} 
}
export enum _CONDITION_MetIndicator {
 N,

Y
 }
export enum _CONDITION_WaivedIndicator {
 N,

Y
 }
export enum _CONDITION_SatisfactionTimeframeType {
 PriorToApproval,

Other,

PriorToFunding,

PriorToSigning,

PriorToDocuments,

UnderwriterToReview
 }
export enum _CONDITION_SatisfactionResponsiblePartyType {
 TitleCompany,

SettlementAgent,

Other,

Broker,

Processor,

LoanOfficer,

Originator,

Attorney,

Closer,

EscrowCompany,

ClosingAgent
 }
export enum CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndictor {
 N,

Y
 }
export enum CLOSING_INSTRUCTIONSLeadBasedPaintCertificationRequiredIndicator {
 N,

Y
 }
export enum CLOSING_INSTRUCTIONS_TermiteReportRequiredIndicator {
 N,

Y
 }
export enum CLOSING_INSTRUCTIONSSpecialFloodHazardAreaIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class COMPENSATION 
{
private _AmountField:string ;
private _PaidByTypeField:COMPENSATION_PaidByType ;
private _PaidByTypeFieldSpecified:boolean ;
private _PaidToTypeField:COMPENSATION_PaidToType ;
private _PaidToTypeFieldSpecified:boolean ;
private _PercentField:string ;
private _TypeField:COMPENSATION_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _IDField:string ;
private gFEAggregationTypeField:COMPENSATIONGFEAggregationType ;
private gFEAggregationTypeFieldSpecified:boolean ;
private _GFEDisclosedAmountField:string ;
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _PaidByType(): COMPENSATION_PaidByType
{
return this._PaidByTypeField;
}
public set _PaidByType(value: COMPENSATION_PaidByType)
{
this._PaidByTypeField = value;
}
public get _PaidByTypeSpecified(): boolean
{
return this._PaidByTypeFieldSpecified;
}
public set _PaidByTypeSpecified(value: boolean)
{
this._PaidByTypeFieldSpecified = value;
}
public get _PaidToType(): COMPENSATION_PaidToType
{
return this._PaidToTypeField;
}
public set _PaidToType(value: COMPENSATION_PaidToType)
{
this._PaidToTypeField = value;
}
public get _PaidToTypeSpecified(): boolean
{
return this._PaidToTypeFieldSpecified;
}
public set _PaidToTypeSpecified(value: boolean)
{
this._PaidToTypeFieldSpecified = value;
}
public get _Percent(): string
{
return this._PercentField;
}
public set _Percent(value: string)
{
this._PercentField = value;
}
public get _Type(): COMPENSATION_Type
{
return this._TypeField;
}
public set _Type(value: COMPENSATION_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get GFEAggregationType(): COMPENSATIONGFEAggregationType
{
return this.gFEAggregationTypeField;
}
public set GFEAggregationType(value: COMPENSATIONGFEAggregationType)
{
this.gFEAggregationTypeField = value;
}
public get GFEAggregationTypeSpecified(): boolean
{
return this.gFEAggregationTypeFieldSpecified;
}
public set GFEAggregationTypeSpecified(value: boolean)
{
this.gFEAggregationTypeFieldSpecified = value;
}
public get _GFEDisclosedAmount(): string
{
return this._GFEDisclosedAmountField;
}
public set _GFEDisclosedAmount(value: string)
{
this._GFEDisclosedAmountField = value;
} 
}
export enum COMPENSATION_PaidByType {
 Investor,

Lender
 }
export enum COMPENSATION_PaidToType {
 Broker,

Lender
 }
export enum COMPENSATION_Type {
 BrokerCompensation,

ServiceReleasePremium,

Other,

LenderCompensation,

YieldSpreadDifferential,

Rebate
 }
export enum COMPENSATIONGFEAggregationType {
 RequiredServicesYouCanShopFor,

RequiredServicesLenderSelected,

TitleServices,

None,

CombinedOurOriginationAndInterestRateCreditOrCharge,

TransferTaxes,

GovernmentRecordingCharges,

ChosenInterestRateCreditOrCharge,

OurOriginationCharge,

OwnersTitleInsurance
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class COSIGNER 
{
private _TitleDescriptionField:string ;
private _UnparsedNameField:string ;
private _IDField:string ;
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ESCROW_ACCOUNT_DETAIL 
{
private eSCROW_ACCOUNT_ACTIVITYField:ESCROW_ACCOUNT_ACTIVITY[] ;
private _InitialBalanceAmountField:string ;
private _MinimumBalanceAmountField:string ;
private totalMonthlyPITIAmountField:string ;
private _IDField:string ;
private gFEDisclosedInitialEscrowBalanceAmountField:string ;
private initialEscrowDepositIncludesAllInsuranceIndicatorField:ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllInsuranceIndicator ;
private initialEscrowDepositIncludesAllInsuranceIndicatorFieldSpecified:boolean ;
private initialEscrowDepositIncludesAllPropertyTaxesIndicatorField:ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllPropertyTaxesIndicator ;
private initialEscrowDepositIncludesAllPropertyTaxesIndicatorFieldSpecified:boolean ;
private initialEscrowDepositIncludesOtherDescriptionField:string ;
public get ESCROW_ACCOUNT_ACTIVITY(): ESCROW_ACCOUNT_ACTIVITY[]
{
return this.eSCROW_ACCOUNT_ACTIVITYField;
}
public set ESCROW_ACCOUNT_ACTIVITY(value: ESCROW_ACCOUNT_ACTIVITY[])
{
this.eSCROW_ACCOUNT_ACTIVITYField = value;
}
public get _InitialBalanceAmount(): string
{
return this._InitialBalanceAmountField;
}
public set _InitialBalanceAmount(value: string)
{
this._InitialBalanceAmountField = value;
}
public get _MinimumBalanceAmount(): string
{
return this._MinimumBalanceAmountField;
}
public set _MinimumBalanceAmount(value: string)
{
this._MinimumBalanceAmountField = value;
}
public get TotalMonthlyPITIAmount(): string
{
return this.totalMonthlyPITIAmountField;
}
public set TotalMonthlyPITIAmount(value: string)
{
this.totalMonthlyPITIAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get GFEDisclosedInitialEscrowBalanceAmount(): string
{
return this.gFEDisclosedInitialEscrowBalanceAmountField;
}
public set GFEDisclosedInitialEscrowBalanceAmount(value: string)
{
this.gFEDisclosedInitialEscrowBalanceAmountField = value;
}
public get InitialEscrowDepositIncludesAllInsuranceIndicator(): ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllInsuranceIndicator
{
return this.initialEscrowDepositIncludesAllInsuranceIndicatorField;
}
public set InitialEscrowDepositIncludesAllInsuranceIndicator(value: ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllInsuranceIndicator)
{
this.initialEscrowDepositIncludesAllInsuranceIndicatorField = value;
}
public get InitialEscrowDepositIncludesAllInsuranceIndicatorSpecified(): boolean
{
return this.initialEscrowDepositIncludesAllInsuranceIndicatorFieldSpecified;
}
public set InitialEscrowDepositIncludesAllInsuranceIndicatorSpecified(value: boolean)
{
this.initialEscrowDepositIncludesAllInsuranceIndicatorFieldSpecified = value;
}
public get InitialEscrowDepositIncludesAllPropertyTaxesIndicator(): ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllPropertyTaxesIndicator
{
return this.initialEscrowDepositIncludesAllPropertyTaxesIndicatorField;
}
public set InitialEscrowDepositIncludesAllPropertyTaxesIndicator(value: ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllPropertyTaxesIndicator)
{
this.initialEscrowDepositIncludesAllPropertyTaxesIndicatorField = value;
}
public get InitialEscrowDepositIncludesAllPropertyTaxesIndicatorSpecified(): boolean
{
return this.initialEscrowDepositIncludesAllPropertyTaxesIndicatorFieldSpecified;
}
public set InitialEscrowDepositIncludesAllPropertyTaxesIndicatorSpecified(value: boolean)
{
this.initialEscrowDepositIncludesAllPropertyTaxesIndicatorFieldSpecified = value;
}
public get InitialEscrowDepositIncludesOtherDescription(): string
{
return this.initialEscrowDepositIncludesOtherDescriptionField;
}
public set InitialEscrowDepositIncludesOtherDescription(value: string)
{
this.initialEscrowDepositIncludesOtherDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ESCROW_ACCOUNT_ACTIVITY 
{
private _CurrentBalanceAmountField:string ;
private _DisbursementMonthField:string ;
private _DisbursementSequenceIdentifierField:string ;
private _DisbursementYearField:string ;
private _PaymentDescriptionTypeField:ESCROW_ACCOUNT_ACTIVITY_PaymentDescriptionType ;
private _PaymentDescriptionTypeFieldSpecified:boolean ;
private _PaymentFromEscrowAccountAmountField:string ;
private _PaymentToEscrowAccountAmountField:string ;
private _PaymentDescriptionTypeOtherDescriptionField:string ;
private _IDField:string ;
public get _CurrentBalanceAmount(): string
{
return this._CurrentBalanceAmountField;
}
public set _CurrentBalanceAmount(value: string)
{
this._CurrentBalanceAmountField = value;
}
public get _DisbursementMonth(): string
{
return this._DisbursementMonthField;
}
public set _DisbursementMonth(value: string)
{
this._DisbursementMonthField = value;
}
public get _DisbursementSequenceIdentifier(): string
{
return this._DisbursementSequenceIdentifierField;
}
public set _DisbursementSequenceIdentifier(value: string)
{
this._DisbursementSequenceIdentifierField = value;
}
public get _DisbursementYear(): string
{
return this._DisbursementYearField;
}
public set _DisbursementYear(value: string)
{
this._DisbursementYearField = value;
}
public get _PaymentDescriptionType(): ESCROW_ACCOUNT_ACTIVITY_PaymentDescriptionType
{
return this._PaymentDescriptionTypeField;
}
public set _PaymentDescriptionType(value: ESCROW_ACCOUNT_ACTIVITY_PaymentDescriptionType)
{
this._PaymentDescriptionTypeField = value;
}
public get _PaymentDescriptionTypeSpecified(): boolean
{
return this._PaymentDescriptionTypeFieldSpecified;
}
public set _PaymentDescriptionTypeSpecified(value: boolean)
{
this._PaymentDescriptionTypeFieldSpecified = value;
}
public get _PaymentFromEscrowAccountAmount(): string
{
return this._PaymentFromEscrowAccountAmountField;
}
public set _PaymentFromEscrowAccountAmount(value: string)
{
this._PaymentFromEscrowAccountAmountField = value;
}
public get _PaymentToEscrowAccountAmount(): string
{
return this._PaymentToEscrowAccountAmountField;
}
public set _PaymentToEscrowAccountAmount(value: string)
{
this._PaymentToEscrowAccountAmountField = value;
}
public get _PaymentDescriptionTypeOtherDescription(): string
{
return this._PaymentDescriptionTypeOtherDescriptionField;
}
public set _PaymentDescriptionTypeOtherDescription(value: string)
{
this._PaymentDescriptionTypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum ESCROW_ACCOUNT_ACTIVITY_PaymentDescriptionType {
 HazardInsurance,

FloodInsurance,

Windstorm,

TownPropertyTax,

Assessment,

Other,

VillagePropertyTax,

SchoolPropertyTax,

EarthquakeInsurance,

MortgageInsurance,

CountyPropertyTax,

CityPropertyTax
 }
export enum ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllInsuranceIndicator {
 N,

Y
 }
export enum ESCROW_ACCOUNT_DETAILInitialEscrowDepositIncludesAllPropertyTaxesIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class EXECUTION 
{
private _CityField:string ;
private _StateField:string ;
private _CountyField:string ;
private _DateField:string ;
private _IDField:string ;
private _JudicialDistrictNameField:string ;
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Date(): string
{
return this._DateField;
}
public set _Date(value: string)
{
this._DateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _JudicialDistrictName(): string
{
return this._JudicialDistrictNameField;
}
public set _JudicialDistrictName(value: string)
{
this._JudicialDistrictNameField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INVESTOR 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private rEGULATORY_AGENCYField:REGULATORY_AGENCY[] ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private nonPersonEntityIndicatorField:INVESTORNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get REGULATORY_AGENCY(): REGULATORY_AGENCY[]
{
return this.rEGULATORY_AGENCYField;
}
public set REGULATORY_AGENCY(value: REGULATORY_AGENCY[])
{
this.rEGULATORY_AGENCYField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get NonPersonEntityIndicator(): INVESTORNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: INVESTORNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class REGULATORY_AGENCY 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _TypeField:REGULATORY_AGENCY_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Type(): REGULATORY_AGENCY_Type
{
return this._TypeField;
}
public set _Type(value: REGULATORY_AGENCY_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum REGULATORY_AGENCY_Type {
 OfficeOfThriftSupervision,

OfficeOfTheComptrollerOfTheCurrency,

Other,

NationalCreditUnionAssociation
 }
export enum INVESTORNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LENDER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private rEGULATORY_AGENCYField:REGULATORY_AGENCY[] ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _DocumentsOrderedByNameField:string ;
private _FunderNameField:string ;
private nonPersonEntityIndicatorField:LENDERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _LicenseExemptIndicatorField:LENDER_LicenseExemptIndicator ;
private _LicenseExemptIndicatorFieldSpecified:boolean ;
private _LicenseIssuingAuthorityDescriptionField:string ;
private _LicenseNumberIdentifierField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get REGULATORY_AGENCY(): REGULATORY_AGENCY[]
{
return this.rEGULATORY_AGENCYField;
}
public set REGULATORY_AGENCY(value: REGULATORY_AGENCY[])
{
this.rEGULATORY_AGENCYField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _DocumentsOrderedByName(): string
{
return this._DocumentsOrderedByNameField;
}
public set _DocumentsOrderedByName(value: string)
{
this._DocumentsOrderedByNameField = value;
}
public get _FunderName(): string
{
return this._FunderNameField;
}
public set _FunderName(value: string)
{
this._FunderNameField = value;
}
public get NonPersonEntityIndicator(): LENDERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: LENDERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _LicenseExemptIndicator(): LENDER_LicenseExemptIndicator
{
return this._LicenseExemptIndicatorField;
}
public set _LicenseExemptIndicator(value: LENDER_LicenseExemptIndicator)
{
this._LicenseExemptIndicatorField = value;
}
public get _LicenseExemptIndicatorSpecified(): boolean
{
return this._LicenseExemptIndicatorFieldSpecified;
}
public set _LicenseExemptIndicatorSpecified(value: boolean)
{
this._LicenseExemptIndicatorFieldSpecified = value;
}
public get _LicenseIssuingAuthorityDescription(): string
{
return this._LicenseIssuingAuthorityDescriptionField;
}
public set _LicenseIssuingAuthorityDescription(value: string)
{
this._LicenseIssuingAuthorityDescriptionField = value;
}
public get _LicenseNumberIdentifier(): string
{
return this._LicenseNumberIdentifierField;
}
public set _LicenseNumberIdentifier(value: string)
{
this._LicenseNumberIdentifierField = value;
} 
}
export enum LENDERNonPersonEntityIndicator {
 N,

Y
 }
export enum LENDER_LicenseExemptIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LENDER_BRANCH 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_DETAILS 
{
private iNTERIM_INTERESTField:INTERIM_INTEREST[] ;
private rEQUEST_TO_RESCINDField:REQUEST_TO_RESCIND ;
private gFE_DETAILField:GFE_DETAIL ;
private closingDateField:string ;
private disbursementDateField:string ;
private documentOrderClassificationTypeField:LOAN_DETAILSDocumentOrderClassificationType ;
private documentOrderClassificationTypeFieldSpecified:boolean ;
private documentPreparationDateField:string ;
private fundByDateField:string ;
private originalLTVRatioPercentField:string ;
private lockExpirationDateField:string ;
private rescissionDateField:string ;
private truthInLendingDisclosureDateField:string ;
private _IDField:string ;
public get INTERIM_INTEREST(): INTERIM_INTEREST[]
{
return this.iNTERIM_INTERESTField;
}
public set INTERIM_INTEREST(value: INTERIM_INTEREST[])
{
this.iNTERIM_INTERESTField = value;
}
public get REQUEST_TO_RESCIND(): REQUEST_TO_RESCIND
{
return this.rEQUEST_TO_RESCINDField;
}
public set REQUEST_TO_RESCIND(value: REQUEST_TO_RESCIND)
{
this.rEQUEST_TO_RESCINDField = value;
}
public get GFE_DETAIL(): GFE_DETAIL
{
return this.gFE_DETAILField;
}
public set GFE_DETAIL(value: GFE_DETAIL)
{
this.gFE_DETAILField = value;
}
public get ClosingDate(): string
{
return this.closingDateField;
}
public set ClosingDate(value: string)
{
this.closingDateField = value;
}
public get DisbursementDate(): string
{
return this.disbursementDateField;
}
public set DisbursementDate(value: string)
{
this.disbursementDateField = value;
}
public get DocumentOrderClassificationType(): LOAN_DETAILSDocumentOrderClassificationType
{
return this.documentOrderClassificationTypeField;
}
public set DocumentOrderClassificationType(value: LOAN_DETAILSDocumentOrderClassificationType)
{
this.documentOrderClassificationTypeField = value;
}
public get DocumentOrderClassificationTypeSpecified(): boolean
{
return this.documentOrderClassificationTypeFieldSpecified;
}
public set DocumentOrderClassificationTypeSpecified(value: boolean)
{
this.documentOrderClassificationTypeFieldSpecified = value;
}
public get DocumentPreparationDate(): string
{
return this.documentPreparationDateField;
}
public set DocumentPreparationDate(value: string)
{
this.documentPreparationDateField = value;
}
public get FundByDate(): string
{
return this.fundByDateField;
}
public set FundByDate(value: string)
{
this.fundByDateField = value;
}
public get OriginalLTVRatioPercent(): string
{
return this.originalLTVRatioPercentField;
}
public set OriginalLTVRatioPercent(value: string)
{
this.originalLTVRatioPercentField = value;
}
public get LockExpirationDate(): string
{
return this.lockExpirationDateField;
}
public set LockExpirationDate(value: string)
{
this.lockExpirationDateField = value;
}
public get RescissionDate(): string
{
return this.rescissionDateField;
}
public set RescissionDate(value: string)
{
this.rescissionDateField = value;
}
public get TruthInLendingDisclosureDate(): string
{
return this.truthInLendingDisclosureDateField;
}
public set TruthInLendingDisclosureDate(value: string)
{
this.truthInLendingDisclosureDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class INTERIM_INTEREST 
{
private _PaidFromDateField:string ;
private _PaidNumberOfDaysField:string ;
private _PaidThroughDateField:string ;
private _PerDiemCalculationMethodTypeField:INTERIM_INTEREST_PerDiemCalculationMethodType ;
private _PerDiemCalculationMethodTypeFieldSpecified:boolean ;
private _PerDiemPaymentOptionTypeField:INTERIM_INTEREST_PerDiemPaymentOptionType ;
private _PerDiemPaymentOptionTypeFieldSpecified:boolean ;
private _SinglePerDiemAmountField:string ;
private _TotalPerDiemAmountField:string ;
private _PerDiemPaymentOptionTypeOtherDescriptionField:string ;
private _IDField:string ;
private _DisclosureTypeField:INTERIM_INTEREST_DisclosureType ;
private _DisclosureTypeFieldSpecified:boolean ;
private _DisclosureTypeOtherDescriptionField:string ;
private _PerDiemCalculationMethodTypeOtherDescriptionField:string ;
public get _PaidFromDate(): string
{
return this._PaidFromDateField;
}
public set _PaidFromDate(value: string)
{
this._PaidFromDateField = value;
}
public get _PaidNumberOfDays(): string
{
return this._PaidNumberOfDaysField;
}
public set _PaidNumberOfDays(value: string)
{
this._PaidNumberOfDaysField = value;
}
public get _PaidThroughDate(): string
{
return this._PaidThroughDateField;
}
public set _PaidThroughDate(value: string)
{
this._PaidThroughDateField = value;
}
public get _PerDiemCalculationMethodType(): INTERIM_INTEREST_PerDiemCalculationMethodType
{
return this._PerDiemCalculationMethodTypeField;
}
public set _PerDiemCalculationMethodType(value: INTERIM_INTEREST_PerDiemCalculationMethodType)
{
this._PerDiemCalculationMethodTypeField = value;
}
public get _PerDiemCalculationMethodTypeSpecified(): boolean
{
return this._PerDiemCalculationMethodTypeFieldSpecified;
}
public set _PerDiemCalculationMethodTypeSpecified(value: boolean)
{
this._PerDiemCalculationMethodTypeFieldSpecified = value;
}
public get _PerDiemPaymentOptionType(): INTERIM_INTEREST_PerDiemPaymentOptionType
{
return this._PerDiemPaymentOptionTypeField;
}
public set _PerDiemPaymentOptionType(value: INTERIM_INTEREST_PerDiemPaymentOptionType)
{
this._PerDiemPaymentOptionTypeField = value;
}
public get _PerDiemPaymentOptionTypeSpecified(): boolean
{
return this._PerDiemPaymentOptionTypeFieldSpecified;
}
public set _PerDiemPaymentOptionTypeSpecified(value: boolean)
{
this._PerDiemPaymentOptionTypeFieldSpecified = value;
}
public get _SinglePerDiemAmount(): string
{
return this._SinglePerDiemAmountField;
}
public set _SinglePerDiemAmount(value: string)
{
this._SinglePerDiemAmountField = value;
}
public get _TotalPerDiemAmount(): string
{
return this._TotalPerDiemAmountField;
}
public set _TotalPerDiemAmount(value: string)
{
this._TotalPerDiemAmountField = value;
}
public get _PerDiemPaymentOptionTypeOtherDescription(): string
{
return this._PerDiemPaymentOptionTypeOtherDescriptionField;
}
public set _PerDiemPaymentOptionTypeOtherDescription(value: string)
{
this._PerDiemPaymentOptionTypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _DisclosureType(): INTERIM_INTEREST_DisclosureType
{
return this._DisclosureTypeField;
}
public set _DisclosureType(value: INTERIM_INTEREST_DisclosureType)
{
this._DisclosureTypeField = value;
}
public get _DisclosureTypeSpecified(): boolean
{
return this._DisclosureTypeFieldSpecified;
}
public set _DisclosureTypeSpecified(value: boolean)
{
this._DisclosureTypeFieldSpecified = value;
}
public get _DisclosureTypeOtherDescription(): string
{
return this._DisclosureTypeOtherDescriptionField;
}
public set _DisclosureTypeOtherDescription(value: string)
{
this._DisclosureTypeOtherDescriptionField = value;
}
public get _PerDiemCalculationMethodTypeOtherDescription(): string
{
return this._PerDiemCalculationMethodTypeOtherDescriptionField;
}
public set _PerDiemCalculationMethodTypeOtherDescription(value: string)
{
this._PerDiemCalculationMethodTypeOtherDescriptionField = value;
} 
}
export enum INTERIM_INTEREST_PerDiemCalculationMethodType {
 Other,

[System.Xml.Serialization.XmlEnumAttribute("360")]
Item360,

[System.Xml.Serialization.XmlEnumAttribute("365")]
Item365
 }
export enum INTERIM_INTEREST_PerDiemPaymentOptionType {
 FirstPayment,

Other,

Closing
 }
export enum INTERIM_INTEREST_DisclosureType {
 GFE,

Other,

HUD1
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class REQUEST_TO_RESCIND 
{
private _TransactionDateField:string ;
private _NotificationUnparsedNameField:string ;
private _NotificationStreetAddressField:string ;
private _NotificationStreetAddress2Field:string ;
private _NotificationCityField:string ;
private _NotificationStateField:string ;
private _NotificationPostalCodeField:string ;
private _NotificationCountryField:string ;
private _IDField:string ;
public get _TransactionDate(): string
{
return this._TransactionDateField;
}
public set _TransactionDate(value: string)
{
this._TransactionDateField = value;
}
public get _NotificationUnparsedName(): string
{
return this._NotificationUnparsedNameField;
}
public set _NotificationUnparsedName(value: string)
{
this._NotificationUnparsedNameField = value;
}
public get _NotificationStreetAddress(): string
{
return this._NotificationStreetAddressField;
}
public set _NotificationStreetAddress(value: string)
{
this._NotificationStreetAddressField = value;
}
public get _NotificationStreetAddress2(): string
{
return this._NotificationStreetAddress2Field;
}
public set _NotificationStreetAddress2(value: string)
{
this._NotificationStreetAddress2Field = value;
}
public get _NotificationCity(): string
{
return this._NotificationCityField;
}
public set _NotificationCity(value: string)
{
this._NotificationCityField = value;
}
public get _NotificationState(): string
{
return this._NotificationStateField;
}
public set _NotificationState(value: string)
{
this._NotificationStateField = value;
}
public get _NotificationPostalCode(): string
{
return this._NotificationPostalCodeField;
}
public set _NotificationPostalCode(value: string)
{
this._NotificationPostalCodeField = value;
}
public get _NotificationCountry(): string
{
return this._NotificationCountryField;
}
public set _NotificationCountry(value: string)
{
this._NotificationCountryField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GFE_DETAIL 
{
private gFE_COMPARISONField:GFE_COMPARISON[] ;
private gFE_SECTION_SUMMARYField:GFE_SECTION_SUMMARY[] ;
private gFECreditOrChargeForChosenInterestRateTypeField:GFE_DETAILGFECreditOrChargeForChosenInterestRateType ;
private gFECreditOrChargeForChosenInterestRateTypeFieldSpecified:boolean ;
private gFECreditOrChargeForChosenInterestRateTypeOtherDescriptionField:string ;
private gFEDisclosureDateField:string ;
private gFEInterestRateAvailableThroughDateField:string ;
private gFELoanOriginatorFeePaymentCreditTypeField:GFE_DETAILGFELoanOriginatorFeePaymentCreditType ;
private gFELoanOriginatorFeePaymentCreditTypeFieldSpecified:boolean ;
private gFELoanOriginatorFeePaymentCreditTypeOtherDescriptionField:string ;
private gFEMonthlyPaymentFirstIncreasePaymentAmountField:string ;
private gFEMonthlyPaymentMaximumAmountField:string ;
private gFERateLockMinimumDaysPriorToSettlementCountField:string ;
private gFERateLockPeriodDaysCountField:string ;
private gFERedisclosureReasonDescriptionField:string ;
private gFESettlementChargesAvailableThroughDateField:string ;
private _IDField:string ;
public get GFE_COMPARISON(): GFE_COMPARISON[]
{
return this.gFE_COMPARISONField;
}
public set GFE_COMPARISON(value: GFE_COMPARISON[])
{
this.gFE_COMPARISONField = value;
}
public get GFE_SECTION_SUMMARY(): GFE_SECTION_SUMMARY[]
{
return this.gFE_SECTION_SUMMARYField;
}
public set GFE_SECTION_SUMMARY(value: GFE_SECTION_SUMMARY[])
{
this.gFE_SECTION_SUMMARYField = value;
}
public get GFECreditOrChargeForChosenInterestRateType(): GFE_DETAILGFECreditOrChargeForChosenInterestRateType
{
return this.gFECreditOrChargeForChosenInterestRateTypeField;
}
public set GFECreditOrChargeForChosenInterestRateType(value: GFE_DETAILGFECreditOrChargeForChosenInterestRateType)
{
this.gFECreditOrChargeForChosenInterestRateTypeField = value;
}
public get GFECreditOrChargeForChosenInterestRateTypeSpecified(): boolean
{
return this.gFECreditOrChargeForChosenInterestRateTypeFieldSpecified;
}
public set GFECreditOrChargeForChosenInterestRateTypeSpecified(value: boolean)
{
this.gFECreditOrChargeForChosenInterestRateTypeFieldSpecified = value;
}
public get GFECreditOrChargeForChosenInterestRateTypeOtherDescription(): string
{
return this.gFECreditOrChargeForChosenInterestRateTypeOtherDescriptionField;
}
public set GFECreditOrChargeForChosenInterestRateTypeOtherDescription(value: string)
{
this.gFECreditOrChargeForChosenInterestRateTypeOtherDescriptionField = value;
}
public get GFEDisclosureDate(): string
{
return this.gFEDisclosureDateField;
}
public set GFEDisclosureDate(value: string)
{
this.gFEDisclosureDateField = value;
}
public get GFEInterestRateAvailableThroughDate(): string
{
return this.gFEInterestRateAvailableThroughDateField;
}
public set GFEInterestRateAvailableThroughDate(value: string)
{
this.gFEInterestRateAvailableThroughDateField = value;
}
public get GFELoanOriginatorFeePaymentCreditType(): GFE_DETAILGFELoanOriginatorFeePaymentCreditType
{
return this.gFELoanOriginatorFeePaymentCreditTypeField;
}
public set GFELoanOriginatorFeePaymentCreditType(value: GFE_DETAILGFELoanOriginatorFeePaymentCreditType)
{
this.gFELoanOriginatorFeePaymentCreditTypeField = value;
}
public get GFELoanOriginatorFeePaymentCreditTypeSpecified(): boolean
{
return this.gFELoanOriginatorFeePaymentCreditTypeFieldSpecified;
}
public set GFELoanOriginatorFeePaymentCreditTypeSpecified(value: boolean)
{
this.gFELoanOriginatorFeePaymentCreditTypeFieldSpecified = value;
}
public get GFELoanOriginatorFeePaymentCreditTypeOtherDescription(): string
{
return this.gFELoanOriginatorFeePaymentCreditTypeOtherDescriptionField;
}
public set GFELoanOriginatorFeePaymentCreditTypeOtherDescription(value: string)
{
this.gFELoanOriginatorFeePaymentCreditTypeOtherDescriptionField = value;
}
public get GFEMonthlyPaymentFirstIncreasePaymentAmount(): string
{
return this.gFEMonthlyPaymentFirstIncreasePaymentAmountField;
}
public set GFEMonthlyPaymentFirstIncreasePaymentAmount(value: string)
{
this.gFEMonthlyPaymentFirstIncreasePaymentAmountField = value;
}
public get GFEMonthlyPaymentMaximumAmount(): string
{
return this.gFEMonthlyPaymentMaximumAmountField;
}
public set GFEMonthlyPaymentMaximumAmount(value: string)
{
this.gFEMonthlyPaymentMaximumAmountField = value;
}
public get GFERateLockMinimumDaysPriorToSettlementCount(): string
{
return this.gFERateLockMinimumDaysPriorToSettlementCountField;
}
public set GFERateLockMinimumDaysPriorToSettlementCount(value: string)
{
this.gFERateLockMinimumDaysPriorToSettlementCountField = value;
}
public get GFERateLockPeriodDaysCount(): string
{
return this.gFERateLockPeriodDaysCountField;
}
public set GFERateLockPeriodDaysCount(value: string)
{
this.gFERateLockPeriodDaysCountField = value;
}
public get GFERedisclosureReasonDescription(): string
{
return this.gFERedisclosureReasonDescriptionField;
}
public set GFERedisclosureReasonDescription(value: string)
{
this.gFERedisclosureReasonDescriptionField = value;
}
public get GFESettlementChargesAvailableThroughDate(): string
{
return this.gFESettlementChargesAvailableThroughDateField;
}
public set GFESettlementChargesAvailableThroughDate(value: string)
{
this.gFESettlementChargesAvailableThroughDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GFE_COMPARISON 
{
private _IDField:string ;
private _InterestRatePercentField:string ;
private _MonthlyPaymentAmountField:string ;
private _OriginalLoanAmountField:string ;
private _SettlementChargesAmountField:string ;
private _TypeField:GFE_COMPARISON_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _InterestRatePercent(): string
{
return this._InterestRatePercentField;
}
public set _InterestRatePercent(value: string)
{
this._InterestRatePercentField = value;
}
public get _MonthlyPaymentAmount(): string
{
return this._MonthlyPaymentAmountField;
}
public set _MonthlyPaymentAmount(value: string)
{
this._MonthlyPaymentAmountField = value;
}
public get _OriginalLoanAmount(): string
{
return this._OriginalLoanAmountField;
}
public set _OriginalLoanAmount(value: string)
{
this._OriginalLoanAmountField = value;
}
public get _SettlementChargesAmount(): string
{
return this._SettlementChargesAmountField;
}
public set _SettlementChargesAmount(value: string)
{
this._SettlementChargesAmountField = value;
}
public get _Type(): GFE_COMPARISON_Type
{
return this._TypeField;
}
public set _Type(value: GFE_COMPARISON_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
} 
}
export enum GFE_COMPARISON_Type {
 Other,

SameLoanWithLowerSettlementCharges,

SameLoanWithLowerInterestRate
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GFE_SECTION_SUMMARY 
{
private _IDField:string ;
private gFEDisclosedTotalAmountField:string ;
private gFESectionIdentifierTypeField:GFE_SECTION_SUMMARYGFESectionIdentifierType ;
private gFESectionIdentifierTypeFieldSpecified:boolean ;
private gFESectionIdentifierTypeOtherDescriptionField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get GFEDisclosedTotalAmount(): string
{
return this.gFEDisclosedTotalAmountField;
}
public set GFEDisclosedTotalAmount(value: string)
{
this.gFEDisclosedTotalAmountField = value;
}
public get GFESectionIdentifierType(): GFE_SECTION_SUMMARYGFESectionIdentifierType
{
return this.gFESectionIdentifierTypeField;
}
public set GFESectionIdentifierType(value: GFE_SECTION_SUMMARYGFESectionIdentifierType)
{
this.gFESectionIdentifierTypeField = value;
}
public get GFESectionIdentifierTypeSpecified(): boolean
{
return this.gFESectionIdentifierTypeFieldSpecified;
}
public set GFESectionIdentifierTypeSpecified(value: boolean)
{
this.gFESectionIdentifierTypeFieldSpecified = value;
}
public get GFESectionIdentifierTypeOtherDescription(): string
{
return this.gFESectionIdentifierTypeOtherDescriptionField;
}
public set GFESectionIdentifierTypeOtherDescription(value: string)
{
this.gFESectionIdentifierTypeOtherDescriptionField = value;
} 
}
export enum GFE_SECTION_SUMMARYGFESectionIdentifierType {
 Four,

Five,

Eight,

Nine,

A,

B,

Ten,

Other,

Six,

One,

Eleven,

Three,

AB,

Seven,

Two
 }
export enum GFE_DETAILGFECreditOrChargeForChosenInterestRateType {
 BorrowerCharge,

BorrowerCredit,

CreditOrChargeIncludedInOriginationCharge,

Other
 }
export enum GFE_DETAILGFELoanOriginatorFeePaymentCreditType {
 Other,

AmountsPaidByOrInBehalfOfBorrower,

ChosenInterestRateCreditOrCharge
 }
export enum LOAN_DETAILSDocumentOrderClassificationType {
 Preliminary,

Final
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOSS_PAYEE 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _TypeField:LOSS_PAYEE_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private nonPersonEntityIndicatorField:LOSS_PAYEENonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Type(): LOSS_PAYEE_Type
{
return this._TypeField;
}
public set _Type(value: LOSS_PAYEE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get NonPersonEntityIndicator(): LOSS_PAYEENonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: LOSS_PAYEENonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum LOSS_PAYEE_Type {
 Investor,

Other,

Lender
 }
export enum LOSS_PAYEENonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class MORTGAGE_BROKER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private rEGULATORY_AGENCYField:REGULATORY_AGENCY[] ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _LicenseNumberIdentifierField:string ;
private nonPersonEntityIndicatorField:MORTGAGE_BROKERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _LicenseExemptIndicatorField:MORTGAGE_BROKER_LicenseExemptIndicator ;
private _LicenseExemptIndicatorFieldSpecified:boolean ;
private _LicenseIssuingAuthorityDescriptionField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get REGULATORY_AGENCY(): REGULATORY_AGENCY[]
{
return this.rEGULATORY_AGENCYField;
}
public set REGULATORY_AGENCY(value: REGULATORY_AGENCY[])
{
this.rEGULATORY_AGENCYField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _LicenseNumberIdentifier(): string
{
return this._LicenseNumberIdentifierField;
}
public set _LicenseNumberIdentifier(value: string)
{
this._LicenseNumberIdentifierField = value;
}
public get NonPersonEntityIndicator(): MORTGAGE_BROKERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: MORTGAGE_BROKERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _LicenseExemptIndicator(): MORTGAGE_BROKER_LicenseExemptIndicator
{
return this._LicenseExemptIndicatorField;
}
public set _LicenseExemptIndicator(value: MORTGAGE_BROKER_LicenseExemptIndicator)
{
this._LicenseExemptIndicatorField = value;
}
public get _LicenseExemptIndicatorSpecified(): boolean
{
return this._LicenseExemptIndicatorFieldSpecified;
}
public set _LicenseExemptIndicatorSpecified(value: boolean)
{
this._LicenseExemptIndicatorFieldSpecified = value;
}
public get _LicenseIssuingAuthorityDescription(): string
{
return this._LicenseIssuingAuthorityDescriptionField;
}
public set _LicenseIssuingAuthorityDescription(value: string)
{
this._LicenseIssuingAuthorityDescriptionField = value;
} 
}
export enum MORTGAGE_BROKERNonPersonEntityIndicator {
 N,

Y
 }
export enum MORTGAGE_BROKER_LicenseExemptIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PAYMENT_DETAILS 
{
private aMORTIZATION_SCHEDULEField:AMORTIZATION_SCHEDULE[] ;
private pAYMENT_SCHEDULEField:PAYMENT_SCHEDULE[] ;
private _IDField:string ;
private finalPaymentAmountField:string ;
private scheduledTotalPaymentCountField:string ;
public get AMORTIZATION_SCHEDULE(): AMORTIZATION_SCHEDULE[]
{
return this.aMORTIZATION_SCHEDULEField;
}
public set AMORTIZATION_SCHEDULE(value: AMORTIZATION_SCHEDULE[])
{
this.aMORTIZATION_SCHEDULEField = value;
}
public get PAYMENT_SCHEDULE(): PAYMENT_SCHEDULE[]
{
return this.pAYMENT_SCHEDULEField;
}
public set PAYMENT_SCHEDULE(value: PAYMENT_SCHEDULE[])
{
this.pAYMENT_SCHEDULEField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get FinalPaymentAmount(): string
{
return this.finalPaymentAmountField;
}
public set FinalPaymentAmount(value: string)
{
this.finalPaymentAmountField = value;
}
public get ScheduledTotalPaymentCount(): string
{
return this.scheduledTotalPaymentCountField;
}
public set ScheduledTotalPaymentCount(value: string)
{
this.scheduledTotalPaymentCountField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class AMORTIZATION_SCHEDULE 
{
private _EndingBalanceAmountField:string ;
private _InterestRatePercentField:string ;
private _LoanToValuePercentField:string ;
private _PaymentAmountField:string ;
private _PaymentNumberField:string ;
private _MIPaymentAmountField:string ;
private _PortionOfPaymentDistributedToInterestAmountField:string ;
private _PortionOfPaymentDistributedToPrincipalAmountField:string ;
private _PaymentDueDateField:string ;
private _IDField:string ;
public get _EndingBalanceAmount(): string
{
return this._EndingBalanceAmountField;
}
public set _EndingBalanceAmount(value: string)
{
this._EndingBalanceAmountField = value;
}
public get _InterestRatePercent(): string
{
return this._InterestRatePercentField;
}
public set _InterestRatePercent(value: string)
{
this._InterestRatePercentField = value;
}
public get _LoanToValuePercent(): string
{
return this._LoanToValuePercentField;
}
public set _LoanToValuePercent(value: string)
{
this._LoanToValuePercentField = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get _PaymentNumber(): string
{
return this._PaymentNumberField;
}
public set _PaymentNumber(value: string)
{
this._PaymentNumberField = value;
}
public get _MIPaymentAmount(): string
{
return this._MIPaymentAmountField;
}
public set _MIPaymentAmount(value: string)
{
this._MIPaymentAmountField = value;
}
public get _PortionOfPaymentDistributedToInterestAmount(): string
{
return this._PortionOfPaymentDistributedToInterestAmountField;
}
public set _PortionOfPaymentDistributedToInterestAmount(value: string)
{
this._PortionOfPaymentDistributedToInterestAmountField = value;
}
public get _PortionOfPaymentDistributedToPrincipalAmount(): string
{
return this._PortionOfPaymentDistributedToPrincipalAmountField;
}
public set _PortionOfPaymentDistributedToPrincipalAmount(value: string)
{
this._PortionOfPaymentDistributedToPrincipalAmountField = value;
}
public get _PaymentDueDate(): string
{
return this._PaymentDueDateField;
}
public set _PaymentDueDate(value: string)
{
this._PaymentDueDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PAYMENT_SCHEDULE 
{
private _PaymentSequenceIdentifierField:string ;
private _TotalNumberOfPaymentsCountField:string ;
private _PaymentAmountField:string ;
private _PaymentStartDateField:string ;
private _PaymentVaryingToAmountField:string ;
private _PrincipalAndInterestPaymentAmountField:string ;
private _IDField:string ;
public get _PaymentSequenceIdentifier(): string
{
return this._PaymentSequenceIdentifierField;
}
public set _PaymentSequenceIdentifier(value: string)
{
this._PaymentSequenceIdentifierField = value;
}
public get _TotalNumberOfPaymentsCount(): string
{
return this._TotalNumberOfPaymentsCountField;
}
public set _TotalNumberOfPaymentsCount(value: string)
{
this._TotalNumberOfPaymentsCountField = value;
}
public get _PaymentAmount(): string
{
return this._PaymentAmountField;
}
public set _PaymentAmount(value: string)
{
this._PaymentAmountField = value;
}
public get _PaymentStartDate(): string
{
return this._PaymentStartDateField;
}
public set _PaymentStartDate(value: string)
{
this._PaymentStartDateField = value;
}
public get _PaymentVaryingToAmount(): string
{
return this._PaymentVaryingToAmountField;
}
public set _PaymentVaryingToAmount(value: string)
{
this._PaymentVaryingToAmountField = value;
}
public get _PrincipalAndInterestPaymentAmount(): string
{
return this._PrincipalAndInterestPaymentAmountField;
}
public set _PrincipalAndInterestPaymentAmount(value: string)
{
this._PrincipalAndInterestPaymentAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PAYOFF 
{
private pAYEEField:PAYEE ;
private _AccountNumberIdentifierField:string ;
private _AmountField:string ;
private _PerDiemAmountField:string ;
private _SequenceIdentifierField:string ;
private _SpecifiedHUDLineNumberField:string ;
private _ThroughDateField:string ;
private _IDField:string ;
public get PAYEE(): PAYEE
{
return this.pAYEEField;
}
public set PAYEE(value: PAYEE)
{
this.pAYEEField = value;
}
public get _AccountNumberIdentifier(): string
{
return this._AccountNumberIdentifierField;
}
public set _AccountNumberIdentifier(value: string)
{
this._AccountNumberIdentifierField = value;
}
public get _Amount(): string
{
return this._AmountField;
}
public set _Amount(value: string)
{
this._AmountField = value;
}
public get _PerDiemAmount(): string
{
return this._PerDiemAmountField;
}
public set _PerDiemAmount(value: string)
{
this._PerDiemAmountField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _SpecifiedHUDLineNumber(): string
{
return this._SpecifiedHUDLineNumberField;
}
public set _SpecifiedHUDLineNumber(value: string)
{
this._SpecifiedHUDLineNumberField = value;
}
public get _ThroughDate(): string
{
return this._ThroughDateField;
}
public set _ThroughDate(value: string)
{
this._ThroughDateField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PAYEE 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private nonPersonEntityIndicatorField:PAYEENonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get NonPersonEntityIndicator(): PAYEENonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: PAYEENonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum PAYEENonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RECORDABLE_DOCUMENT 
{
private aSSIGN_FROMField:ASSIGN_FROM ;
private aSSIGN_TOField:ASSIGN_TO ;
private dEFAULTField:DEFAULT ;
private nOTARYField:NOTARY[] ;
private pREPARED_BYField:PREPARED_BY ;
private _ASSOCIATED_DOCUMENTField:_ASSOCIATED_DOCUMENT ;
private _RETURN_TOField:_RETURN_TO[] ;
private rIDERSField:RIDERS ;
private sECURITY_INSTRUMENTField:SECURITY_INSTRUMENT ;
private tRUSTEEField:TRUSTEE[] ;
private wITNESSField:WITNESS[] ;
private _TypeField:RECORDABLE_DOCUMENT_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _SequenceIdentifierField:string ;
private _IDField:string ;
public get ASSIGN_FROM(): ASSIGN_FROM
{
return this.aSSIGN_FROMField;
}
public set ASSIGN_FROM(value: ASSIGN_FROM)
{
this.aSSIGN_FROMField = value;
}
public get ASSIGN_TO(): ASSIGN_TO
{
return this.aSSIGN_TOField;
}
public set ASSIGN_TO(value: ASSIGN_TO)
{
this.aSSIGN_TOField = value;
}
public get DEFAULT(): DEFAULT
{
return this.dEFAULTField;
}
public set DEFAULT(value: DEFAULT)
{
this.dEFAULTField = value;
}
public get NOTARY(): NOTARY[]
{
return this.nOTARYField;
}
public set NOTARY(value: NOTARY[])
{
this.nOTARYField = value;
}
public get PREPARED_BY(): PREPARED_BY
{
return this.pREPARED_BYField;
}
public set PREPARED_BY(value: PREPARED_BY)
{
this.pREPARED_BYField = value;
}
public get _ASSOCIATED_DOCUMENT(): _ASSOCIATED_DOCUMENT
{
return this._ASSOCIATED_DOCUMENTField;
}
public set _ASSOCIATED_DOCUMENT(value: _ASSOCIATED_DOCUMENT)
{
this._ASSOCIATED_DOCUMENTField = value;
}
public get _RETURN_TO(): _RETURN_TO[]
{
return this._RETURN_TOField;
}
public set _RETURN_TO(value: _RETURN_TO[])
{
this._RETURN_TOField = value;
}
public get RIDERS(): RIDERS
{
return this.rIDERSField;
}
public set RIDERS(value: RIDERS)
{
this.rIDERSField = value;
}
public get SECURITY_INSTRUMENT(): SECURITY_INSTRUMENT
{
return this.sECURITY_INSTRUMENTField;
}
public set SECURITY_INSTRUMENT(value: SECURITY_INSTRUMENT)
{
this.sECURITY_INSTRUMENTField = value;
}
public get TRUSTEE(): TRUSTEE[]
{
return this.tRUSTEEField;
}
public set TRUSTEE(value: TRUSTEE[])
{
this.tRUSTEEField = value;
}
public get WITNESS(): WITNESS[]
{
return this.wITNESSField;
}
public set WITNESS(value: WITNESS[])
{
this.wITNESSField = value;
}
public get _Type(): RECORDABLE_DOCUMENT_Type
{
return this._TypeField;
}
public set _Type(value: RECORDABLE_DOCUMENT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ASSIGN_FROM 
{
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _CountyFIPSCodeField:string ;
private _SigningOfficialNameField:string ;
private _SigningOfficialTitleDescriptionField:string ;
private nonPersonEntityIndicatorField:ASSIGN_FROMNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _CountyFIPSCode(): string
{
return this._CountyFIPSCodeField;
}
public set _CountyFIPSCode(value: string)
{
this._CountyFIPSCodeField = value;
}
public get _SigningOfficialName(): string
{
return this._SigningOfficialNameField;
}
public set _SigningOfficialName(value: string)
{
this._SigningOfficialNameField = value;
}
public get _SigningOfficialTitleDescription(): string
{
return this._SigningOfficialTitleDescriptionField;
}
public set _SigningOfficialTitleDescription(value: string)
{
this._SigningOfficialTitleDescriptionField = value;
}
public get NonPersonEntityIndicator(): ASSIGN_FROMNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: ASSIGN_FROMNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum ASSIGN_FROMNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class ASSIGN_TO 
{
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _CountyFIPSCodeField:string ;
private nonPersonEntityIndicatorField:ASSIGN_TONonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _CountyFIPSCode(): string
{
return this._CountyFIPSCodeField;
}
public set _CountyFIPSCode(value: string)
{
this._CountyFIPSCodeField = value;
}
public get NonPersonEntityIndicator(): ASSIGN_TONonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: ASSIGN_TONonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum ASSIGN_TONonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class DEFAULT 
{
private _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorField:DEFAULT_AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator ;
private _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorFieldSpecified:boolean ;
private _ApplicationFeesAmountField:string ;
private _ClosingPreparationFeesAmountField:string ;
private _LendingInstitutionPostOfficeBoxAddressField:string ;
private _IDField:string ;
public get _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator(): DEFAULT_AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator
{
return this._AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorField;
}
public set _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator(value: DEFAULT_AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator)
{
this._AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorField = value;
}
public get _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorSpecified(): boolean
{
return this._AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorFieldSpecified;
}
public set _AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorSpecified(value: boolean)
{
this._AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicatorFieldSpecified = value;
}
public get _ApplicationFeesAmount(): string
{
return this._ApplicationFeesAmountField;
}
public set _ApplicationFeesAmount(value: string)
{
this._ApplicationFeesAmountField = value;
}
public get _ClosingPreparationFeesAmount(): string
{
return this._ClosingPreparationFeesAmountField;
}
public set _ClosingPreparationFeesAmount(value: string)
{
this._ClosingPreparationFeesAmountField = value;
}
public get _LendingInstitutionPostOfficeBoxAddress(): string
{
return this._LendingInstitutionPostOfficeBoxAddressField;
}
public set _LendingInstitutionPostOfficeBoxAddress(value: string)
{
this._LendingInstitutionPostOfficeBoxAddressField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum DEFAULT_AcknowledgmentOfCashAdvanceAgainstNonHomesteadPropertyIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class NOTARY 
{
private _CERTIFICATEField:_CERTIFICATE[] ;
private dATA_VERSIONField:DATA_VERSION[] ;
private sIGNATORYField:SIGNATORY ;
private _AppearanceDateField:string ;
private _AppearedBeforeNamesDescriptionField:string ;
private _AppearedBeforeTitlesDescriptionField:string ;
private _CityField:string ;
private _CommissionBondNumberIdentifierField:string ;
private _CommissionCityField:string ;
private _CommissionCountyField:string ;
private _CommissionExpirationDateField:string ;
private _CommissionNumberIdentifierField:string ;
private _CommissionStateField:string ;
private _CountyField:string ;
private _PostalCodeField:string ;
private _StateField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _TitleDescriptionField:string ;
private _UnparsedNameField:string ;
private _IDField:string ;
private notarySequenceIdentifierField:string ;
public get _CERTIFICATE(): _CERTIFICATE[]
{
return this._CERTIFICATEField;
}
public set _CERTIFICATE(value: _CERTIFICATE[])
{
this._CERTIFICATEField = value;
}
public get DATA_VERSION(): DATA_VERSION[]
{
return this.dATA_VERSIONField;
}
public set DATA_VERSION(value: DATA_VERSION[])
{
this.dATA_VERSIONField = value;
}
public get SIGNATORY(): SIGNATORY
{
return this.sIGNATORYField;
}
public set SIGNATORY(value: SIGNATORY)
{
this.sIGNATORYField = value;
}
public get _AppearanceDate(): string
{
return this._AppearanceDateField;
}
public set _AppearanceDate(value: string)
{
this._AppearanceDateField = value;
}
public get _AppearedBeforeNamesDescription(): string
{
return this._AppearedBeforeNamesDescriptionField;
}
public set _AppearedBeforeNamesDescription(value: string)
{
this._AppearedBeforeNamesDescriptionField = value;
}
public get _AppearedBeforeTitlesDescription(): string
{
return this._AppearedBeforeTitlesDescriptionField;
}
public set _AppearedBeforeTitlesDescription(value: string)
{
this._AppearedBeforeTitlesDescriptionField = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _CommissionBondNumberIdentifier(): string
{
return this._CommissionBondNumberIdentifierField;
}
public set _CommissionBondNumberIdentifier(value: string)
{
this._CommissionBondNumberIdentifierField = value;
}
public get _CommissionCity(): string
{
return this._CommissionCityField;
}
public set _CommissionCity(value: string)
{
this._CommissionCityField = value;
}
public get _CommissionCounty(): string
{
return this._CommissionCountyField;
}
public set _CommissionCounty(value: string)
{
this._CommissionCountyField = value;
}
public get _CommissionExpirationDate(): string
{
return this._CommissionExpirationDateField;
}
public set _CommissionExpirationDate(value: string)
{
this._CommissionExpirationDateField = value;
}
public get _CommissionNumberIdentifier(): string
{
return this._CommissionNumberIdentifierField;
}
public set _CommissionNumberIdentifier(value: string)
{
this._CommissionNumberIdentifierField = value;
}
public get _CommissionState(): string
{
return this._CommissionStateField;
}
public set _CommissionState(value: string)
{
this._CommissionStateField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get NotarySequenceIdentifier(): string
{
return this.notarySequenceIdentifierField;
}
public set NotarySequenceIdentifier(value: string)
{
this.notarySequenceIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _CERTIFICATE 
{
private _SIGNER_IDENTIFICATIONField:_SIGNER_IDENTIFICATION ;
private _SigningDateField:string ;
private _SigningCountyField:string ;
private _SigningStateField:string ;
private _SignerFirstNameField:string ;
private _SignerMiddleNameField:string ;
private _SignerLastNameField:string ;
private _SignerNameSuffixField:string ;
private _SignerUnparsedNameField:string ;
private _SignerTitleDescriptionField:string ;
private _SignerCompanyNameField:string ;
private _IDField:string ;
private _SequenceIdentifierField:string ;
public get _SIGNER_IDENTIFICATION(): _SIGNER_IDENTIFICATION
{
return this._SIGNER_IDENTIFICATIONField;
}
public set _SIGNER_IDENTIFICATION(value: _SIGNER_IDENTIFICATION)
{
this._SIGNER_IDENTIFICATIONField = value;
}
public get _SigningDate(): string
{
return this._SigningDateField;
}
public set _SigningDate(value: string)
{
this._SigningDateField = value;
}
public get _SigningCounty(): string
{
return this._SigningCountyField;
}
public set _SigningCounty(value: string)
{
this._SigningCountyField = value;
}
public get _SigningState(): string
{
return this._SigningStateField;
}
public set _SigningState(value: string)
{
this._SigningStateField = value;
}
public get _SignerFirstName(): string
{
return this._SignerFirstNameField;
}
public set _SignerFirstName(value: string)
{
this._SignerFirstNameField = value;
}
public get _SignerMiddleName(): string
{
return this._SignerMiddleNameField;
}
public set _SignerMiddleName(value: string)
{
this._SignerMiddleNameField = value;
}
public get _SignerLastName(): string
{
return this._SignerLastNameField;
}
public set _SignerLastName(value: string)
{
this._SignerLastNameField = value;
}
public get _SignerNameSuffix(): string
{
return this._SignerNameSuffixField;
}
public set _SignerNameSuffix(value: string)
{
this._SignerNameSuffixField = value;
}
public get _SignerUnparsedName(): string
{
return this._SignerUnparsedNameField;
}
public set _SignerUnparsedName(value: string)
{
this._SignerUnparsedNameField = value;
}
public get _SignerTitleDescription(): string
{
return this._SignerTitleDescriptionField;
}
public set _SignerTitleDescription(value: string)
{
this._SignerTitleDescriptionField = value;
}
public get _SignerCompanyName(): string
{
return this._SignerCompanyNameField;
}
public set _SignerCompanyName(value: string)
{
this._SignerCompanyNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _SIGNER_IDENTIFICATION 
{
private _TypeField:_SIGNER_IDENTIFICATION_Type ;
private _TypeFieldSpecified:boolean ;
private _DescriptionField:string ;
private _IDField:string ;
private _SequenceIdentifierField:string ;
public get _Type(): _SIGNER_IDENTIFICATION_Type
{
return this._TypeField;
}
public set _Type(value: _SIGNER_IDENTIFICATION_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _Description(): string
{
return this._DescriptionField;
}
public set _Description(value: string)
{
this._DescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
} 
}
export enum _SIGNER_IDENTIFICATION_Type {
 ProvidedIdentification,

PersonallyKnown
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SIGNATORY 
{
private _FirstNameField:string ;
private _MiddleNameField:string ;
private _LastNameField:string ;
private _NameSuffixField:string ;
private _UnparsedNameField:string ;
private _SigningCapacityDescriptionField:string ;
private _OrganizationNameField:string ;
private _OrganizationPositionDescriptionField:string ;
private _SignatureDateField:string ;
private _SequenceIdentifierField:string ;
private _SignatureTimeStampField:string ;
private idField:string ;
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _SigningCapacityDescription(): string
{
return this._SigningCapacityDescriptionField;
}
public set _SigningCapacityDescription(value: string)
{
this._SigningCapacityDescriptionField = value;
}
public get _OrganizationName(): string
{
return this._OrganizationNameField;
}
public set _OrganizationName(value: string)
{
this._OrganizationNameField = value;
}
public get _OrganizationPositionDescription(): string
{
return this._OrganizationPositionDescriptionField;
}
public set _OrganizationPositionDescription(value: string)
{
this._OrganizationPositionDescriptionField = value;
}
public get _SignatureDate(): string
{
return this._SignatureDateField;
}
public set _SignatureDate(value: string)
{
this._SignatureDateField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _SignatureTimeStamp(): string
{
return this._SignatureTimeStampField;
}
public set _SignatureTimeStamp(value: string)
{
this._SignatureTimeStampField = value;
}
public get ID(): string
{
return this.idField;
}
public set ID(value: string)
{
this.idField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _ASSOCIATED_DOCUMENT 
{
private _TypeField:_ASSOCIATED_DOCUMENT_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _BookNumberField:string ;
private _BookTypeField:_ASSOCIATED_DOCUMENT_BookType ;
private _BookTypeFieldSpecified:boolean ;
private _BookTypeOtherDescriptionField:string ;
private _NumberField:string ;
private _TitleDescriptionField:string ;
private _InstrumentNumberField:string ;
private _PageNumberField:string ;
private _VolumeNumberField:string ;
private _RecordingDateField:string ;
private _RecordingJurisdictionNameField:string ;
private _CountyOfRecordationNameField:string ;
private _OfficeOfRecordationNameField:string ;
private _StateOfRecordationNameField:string ;
private _IDField:string ;
public get _Type(): _ASSOCIATED_DOCUMENT_Type
{
return this._TypeField;
}
public set _Type(value: _ASSOCIATED_DOCUMENT_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _BookNumber(): string
{
return this._BookNumberField;
}
public set _BookNumber(value: string)
{
this._BookNumberField = value;
}
public get _BookType(): _ASSOCIATED_DOCUMENT_BookType
{
return this._BookTypeField;
}
public set _BookType(value: _ASSOCIATED_DOCUMENT_BookType)
{
this._BookTypeField = value;
}
public get _BookTypeSpecified(): boolean
{
return this._BookTypeFieldSpecified;
}
public set _BookTypeSpecified(value: boolean)
{
this._BookTypeFieldSpecified = value;
}
public get _BookTypeOtherDescription(): string
{
return this._BookTypeOtherDescriptionField;
}
public set _BookTypeOtherDescription(value: string)
{
this._BookTypeOtherDescriptionField = value;
}
public get _Number(): string
{
return this._NumberField;
}
public set _Number(value: string)
{
this._NumberField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _InstrumentNumber(): string
{
return this._InstrumentNumberField;
}
public set _InstrumentNumber(value: string)
{
this._InstrumentNumberField = value;
}
public get _PageNumber(): string
{
return this._PageNumberField;
}
public set _PageNumber(value: string)
{
this._PageNumberField = value;
}
public get _VolumeNumber(): string
{
return this._VolumeNumberField;
}
public set _VolumeNumber(value: string)
{
this._VolumeNumberField = value;
}
public get _RecordingDate(): string
{
return this._RecordingDateField;
}
public set _RecordingDate(value: string)
{
this._RecordingDateField = value;
}
public get _RecordingJurisdictionName(): string
{
return this._RecordingJurisdictionNameField;
}
public set _RecordingJurisdictionName(value: string)
{
this._RecordingJurisdictionNameField = value;
}
public get _CountyOfRecordationName(): string
{
return this._CountyOfRecordationNameField;
}
public set _CountyOfRecordationName(value: string)
{
this._CountyOfRecordationNameField = value;
}
public get _OfficeOfRecordationName(): string
{
return this._OfficeOfRecordationNameField;
}
public set _OfficeOfRecordationName(value: string)
{
this._OfficeOfRecordationNameField = value;
}
public get _StateOfRecordationName(): string
{
return this._StateOfRecordationNameField;
}
public set _StateOfRecordationName(value: string)
{
this._StateOfRecordationNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _ASSOCIATED_DOCUMENT_Type {
 DeedOfTrust,

SecurityInstrument,

QuitClaimDeed,

Other,

ReleaseOfLien,

All,

Mortgage,

SignatureAffidavit,

AssignmentOfMortgage,

WarrantyDeed
 }
export enum _ASSOCIATED_DOCUMENT_BookType {
 Deed,

Other,

Maps,

Plat,

Mortgage
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _RETURN_TO 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _TitleDescriptionField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _ElectronicRoutingMethodTypeField:_RETURN_TO_ElectronicRoutingMethodType ;
private _ElectronicRoutingMethodTypeFieldSpecified:boolean ;
private _ElectronicRoutingAddressField:string ;
private _StateFIPSCodeField:string ;
private _CountyFIPSCodeField:string ;
private _CountryCodeField:string ;
private nonPersonEntityIndicatorField:_RETURN_TONonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
private _MethodTypeField:_RETURN_TO_MethodType ;
private _MethodTypeFieldSpecified:boolean ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _ElectronicRoutingMethodType(): _RETURN_TO_ElectronicRoutingMethodType
{
return this._ElectronicRoutingMethodTypeField;
}
public set _ElectronicRoutingMethodType(value: _RETURN_TO_ElectronicRoutingMethodType)
{
this._ElectronicRoutingMethodTypeField = value;
}
public get _ElectronicRoutingMethodTypeSpecified(): boolean
{
return this._ElectronicRoutingMethodTypeFieldSpecified;
}
public set _ElectronicRoutingMethodTypeSpecified(value: boolean)
{
this._ElectronicRoutingMethodTypeFieldSpecified = value;
}
public get _ElectronicRoutingAddress(): string
{
return this._ElectronicRoutingAddressField;
}
public set _ElectronicRoutingAddress(value: string)
{
this._ElectronicRoutingAddressField = value;
}
public get _StateFIPSCode(): string
{
return this._StateFIPSCodeField;
}
public set _StateFIPSCode(value: string)
{
this._StateFIPSCodeField = value;
}
public get _CountyFIPSCode(): string
{
return this._CountyFIPSCodeField;
}
public set _CountyFIPSCode(value: string)
{
this._CountyFIPSCodeField = value;
}
public get _CountryCode(): string
{
return this._CountryCodeField;
}
public set _CountryCode(value: string)
{
this._CountryCodeField = value;
}
public get NonPersonEntityIndicator(): _RETURN_TONonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: _RETURN_TONonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _MethodType(): _RETURN_TO_MethodType
{
return this._MethodTypeField;
}
public set _MethodType(value: _RETURN_TO_MethodType)
{
this._MethodTypeField = value;
}
public get _MethodTypeSpecified(): boolean
{
return this._MethodTypeFieldSpecified;
}
public set _MethodTypeSpecified(value: boolean)
{
this._MethodTypeFieldSpecified = value;
} 
}
export enum _RETURN_TO_ElectronicRoutingMethodType {
 FTP,

Other,

EMAIL,

HTTP,

URI,

URL
 }
export enum _RETURN_TONonPersonEntityIndicator {
 N,

Y
 }
export enum _RETURN_TO_MethodType {
 Mail,

Pickup
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RIDERS 
{
private adjustableRateRiderIndicatorField:RIDERSAdjustableRateRiderIndicator ;
private adjustableRateRiderIndicatorFieldSpecified:boolean ;
private balloonRiderIndicatorField:RIDERSBalloonRiderIndicator ;
private balloonRiderIndicatorFieldSpecified:boolean ;
private biweeklyPaymentRiderIndicatorField:RIDERSBiweeklyPaymentRiderIndicator ;
private biweeklyPaymentRiderIndicatorFieldSpecified:boolean ;
private condominiumRiderIndicatorField:RIDERSCondominiumRiderIndicator ;
private condominiumRiderIndicatorFieldSpecified:boolean ;
private graduatedPaymentRiderIndicatorField:RIDERSGraduatedPaymentRiderIndicator ;
private graduatedPaymentRiderIndicatorFieldSpecified:boolean ;
private growingEquityRiderIndicatorField:RIDERSGrowingEquityRiderIndicator ;
private growingEquityRiderIndicatorFieldSpecified:boolean ;
private nonOwnerOccupancyRiderIndicatorField:RIDERSNonOwnerOccupancyRiderIndicator ;
private nonOwnerOccupancyRiderIndicatorFieldSpecified:boolean ;
private oneToFourFamilyRiderIndicatorField:RIDERSOneToFourFamilyRiderIndicator ;
private oneToFourFamilyRiderIndicatorFieldSpecified:boolean ;
private otherRiderDescriptionField:string ;
private otherRiderIndicatorField:RIDERSOtherRiderIndicator ;
private otherRiderIndicatorFieldSpecified:boolean ;
private plannedUnitDevelopmentRiderIndicatorField:RIDERSPlannedUnitDevelopmentRiderIndicator ;
private plannedUnitDevelopmentRiderIndicatorFieldSpecified:boolean ;
private rateImprovementRiderIndicatorField:RIDERSRateImprovementRiderIndicator ;
private rateImprovementRiderIndicatorFieldSpecified:boolean ;
private rehabilitationLoanRiderIndicatorField:RIDERSRehabilitationLoanRiderIndicator ;
private rehabilitationLoanRiderIndicatorFieldSpecified:boolean ;
private secondHomeRiderIndicatorField:RIDERSSecondHomeRiderIndicator ;
private secondHomeRiderIndicatorFieldSpecified:boolean ;
private vARiderIndicatorField:RIDERSVARiderIndicator ;
private vARiderIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get AdjustableRateRiderIndicator(): RIDERSAdjustableRateRiderIndicator
{
return this.adjustableRateRiderIndicatorField;
}
public set AdjustableRateRiderIndicator(value: RIDERSAdjustableRateRiderIndicator)
{
this.adjustableRateRiderIndicatorField = value;
}
public get AdjustableRateRiderIndicatorSpecified(): boolean
{
return this.adjustableRateRiderIndicatorFieldSpecified;
}
public set AdjustableRateRiderIndicatorSpecified(value: boolean)
{
this.adjustableRateRiderIndicatorFieldSpecified = value;
}
public get BalloonRiderIndicator(): RIDERSBalloonRiderIndicator
{
return this.balloonRiderIndicatorField;
}
public set BalloonRiderIndicator(value: RIDERSBalloonRiderIndicator)
{
this.balloonRiderIndicatorField = value;
}
public get BalloonRiderIndicatorSpecified(): boolean
{
return this.balloonRiderIndicatorFieldSpecified;
}
public set BalloonRiderIndicatorSpecified(value: boolean)
{
this.balloonRiderIndicatorFieldSpecified = value;
}
public get BiweeklyPaymentRiderIndicator(): RIDERSBiweeklyPaymentRiderIndicator
{
return this.biweeklyPaymentRiderIndicatorField;
}
public set BiweeklyPaymentRiderIndicator(value: RIDERSBiweeklyPaymentRiderIndicator)
{
this.biweeklyPaymentRiderIndicatorField = value;
}
public get BiweeklyPaymentRiderIndicatorSpecified(): boolean
{
return this.biweeklyPaymentRiderIndicatorFieldSpecified;
}
public set BiweeklyPaymentRiderIndicatorSpecified(value: boolean)
{
this.biweeklyPaymentRiderIndicatorFieldSpecified = value;
}
public get CondominiumRiderIndicator(): RIDERSCondominiumRiderIndicator
{
return this.condominiumRiderIndicatorField;
}
public set CondominiumRiderIndicator(value: RIDERSCondominiumRiderIndicator)
{
this.condominiumRiderIndicatorField = value;
}
public get CondominiumRiderIndicatorSpecified(): boolean
{
return this.condominiumRiderIndicatorFieldSpecified;
}
public set CondominiumRiderIndicatorSpecified(value: boolean)
{
this.condominiumRiderIndicatorFieldSpecified = value;
}
public get GraduatedPaymentRiderIndicator(): RIDERSGraduatedPaymentRiderIndicator
{
return this.graduatedPaymentRiderIndicatorField;
}
public set GraduatedPaymentRiderIndicator(value: RIDERSGraduatedPaymentRiderIndicator)
{
this.graduatedPaymentRiderIndicatorField = value;
}
public get GraduatedPaymentRiderIndicatorSpecified(): boolean
{
return this.graduatedPaymentRiderIndicatorFieldSpecified;
}
public set GraduatedPaymentRiderIndicatorSpecified(value: boolean)
{
this.graduatedPaymentRiderIndicatorFieldSpecified = value;
}
public get GrowingEquityRiderIndicator(): RIDERSGrowingEquityRiderIndicator
{
return this.growingEquityRiderIndicatorField;
}
public set GrowingEquityRiderIndicator(value: RIDERSGrowingEquityRiderIndicator)
{
this.growingEquityRiderIndicatorField = value;
}
public get GrowingEquityRiderIndicatorSpecified(): boolean
{
return this.growingEquityRiderIndicatorFieldSpecified;
}
public set GrowingEquityRiderIndicatorSpecified(value: boolean)
{
this.growingEquityRiderIndicatorFieldSpecified = value;
}
public get NonOwnerOccupancyRiderIndicator(): RIDERSNonOwnerOccupancyRiderIndicator
{
return this.nonOwnerOccupancyRiderIndicatorField;
}
public set NonOwnerOccupancyRiderIndicator(value: RIDERSNonOwnerOccupancyRiderIndicator)
{
this.nonOwnerOccupancyRiderIndicatorField = value;
}
public get NonOwnerOccupancyRiderIndicatorSpecified(): boolean
{
return this.nonOwnerOccupancyRiderIndicatorFieldSpecified;
}
public set NonOwnerOccupancyRiderIndicatorSpecified(value: boolean)
{
this.nonOwnerOccupancyRiderIndicatorFieldSpecified = value;
}
public get OneToFourFamilyRiderIndicator(): RIDERSOneToFourFamilyRiderIndicator
{
return this.oneToFourFamilyRiderIndicatorField;
}
public set OneToFourFamilyRiderIndicator(value: RIDERSOneToFourFamilyRiderIndicator)
{
this.oneToFourFamilyRiderIndicatorField = value;
}
public get OneToFourFamilyRiderIndicatorSpecified(): boolean
{
return this.oneToFourFamilyRiderIndicatorFieldSpecified;
}
public set OneToFourFamilyRiderIndicatorSpecified(value: boolean)
{
this.oneToFourFamilyRiderIndicatorFieldSpecified = value;
}
public get OtherRiderDescription(): string
{
return this.otherRiderDescriptionField;
}
public set OtherRiderDescription(value: string)
{
this.otherRiderDescriptionField = value;
}
public get OtherRiderIndicator(): RIDERSOtherRiderIndicator
{
return this.otherRiderIndicatorField;
}
public set OtherRiderIndicator(value: RIDERSOtherRiderIndicator)
{
this.otherRiderIndicatorField = value;
}
public get OtherRiderIndicatorSpecified(): boolean
{
return this.otherRiderIndicatorFieldSpecified;
}
public set OtherRiderIndicatorSpecified(value: boolean)
{
this.otherRiderIndicatorFieldSpecified = value;
}
public get PlannedUnitDevelopmentRiderIndicator(): RIDERSPlannedUnitDevelopmentRiderIndicator
{
return this.plannedUnitDevelopmentRiderIndicatorField;
}
public set PlannedUnitDevelopmentRiderIndicator(value: RIDERSPlannedUnitDevelopmentRiderIndicator)
{
this.plannedUnitDevelopmentRiderIndicatorField = value;
}
public get PlannedUnitDevelopmentRiderIndicatorSpecified(): boolean
{
return this.plannedUnitDevelopmentRiderIndicatorFieldSpecified;
}
public set PlannedUnitDevelopmentRiderIndicatorSpecified(value: boolean)
{
this.plannedUnitDevelopmentRiderIndicatorFieldSpecified = value;
}
public get RateImprovementRiderIndicator(): RIDERSRateImprovementRiderIndicator
{
return this.rateImprovementRiderIndicatorField;
}
public set RateImprovementRiderIndicator(value: RIDERSRateImprovementRiderIndicator)
{
this.rateImprovementRiderIndicatorField = value;
}
public get RateImprovementRiderIndicatorSpecified(): boolean
{
return this.rateImprovementRiderIndicatorFieldSpecified;
}
public set RateImprovementRiderIndicatorSpecified(value: boolean)
{
this.rateImprovementRiderIndicatorFieldSpecified = value;
}
public get RehabilitationLoanRiderIndicator(): RIDERSRehabilitationLoanRiderIndicator
{
return this.rehabilitationLoanRiderIndicatorField;
}
public set RehabilitationLoanRiderIndicator(value: RIDERSRehabilitationLoanRiderIndicator)
{
this.rehabilitationLoanRiderIndicatorField = value;
}
public get RehabilitationLoanRiderIndicatorSpecified(): boolean
{
return this.rehabilitationLoanRiderIndicatorFieldSpecified;
}
public set RehabilitationLoanRiderIndicatorSpecified(value: boolean)
{
this.rehabilitationLoanRiderIndicatorFieldSpecified = value;
}
public get SecondHomeRiderIndicator(): RIDERSSecondHomeRiderIndicator
{
return this.secondHomeRiderIndicatorField;
}
public set SecondHomeRiderIndicator(value: RIDERSSecondHomeRiderIndicator)
{
this.secondHomeRiderIndicatorField = value;
}
public get SecondHomeRiderIndicatorSpecified(): boolean
{
return this.secondHomeRiderIndicatorFieldSpecified;
}
public set SecondHomeRiderIndicatorSpecified(value: boolean)
{
this.secondHomeRiderIndicatorFieldSpecified = value;
}
public get VARiderIndicator(): RIDERSVARiderIndicator
{
return this.vARiderIndicatorField;
}
public set VARiderIndicator(value: RIDERSVARiderIndicator)
{
this.vARiderIndicatorField = value;
}
public get VARiderIndicatorSpecified(): boolean
{
return this.vARiderIndicatorFieldSpecified;
}
public set VARiderIndicatorSpecified(value: boolean)
{
this.vARiderIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum RIDERSAdjustableRateRiderIndicator {
 N,

Y
 }
export enum RIDERSBalloonRiderIndicator {
 N,

Y
 }
export enum RIDERSBiweeklyPaymentRiderIndicator {
 N,

Y
 }
export enum RIDERSCondominiumRiderIndicator {
 N,

Y
 }
export enum RIDERSGraduatedPaymentRiderIndicator {
 N,

Y
 }
export enum RIDERSGrowingEquityRiderIndicator {
 N,

Y
 }
export enum RIDERSNonOwnerOccupancyRiderIndicator {
 N,

Y
 }
export enum RIDERSOneToFourFamilyRiderIndicator {
 N,

Y
 }
export enum RIDERSOtherRiderIndicator {
 N,

Y
 }
export enum RIDERSPlannedUnitDevelopmentRiderIndicator {
 N,

Y
 }
export enum RIDERSRateImprovementRiderIndicator {
 N,

Y
 }
export enum RIDERSRehabilitationLoanRiderIndicator {
 N,

Y
 }
export enum RIDERSSecondHomeRiderIndicator {
 N,

Y
 }
export enum RIDERSVARiderIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SECURITY_INSTRUMENT 
{
private tAXABLE_PARTYField:TAXABLE_PARTY[] ;
private _AssumptionFeeAmountField:string ;
private _AttorneyFeeMinimumAmountField:string ;
private _AttorneyFeePercentField:string ;
private _MaximumPrincipalIndebtednessAmountField:string ;
private _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorField:SECURITY_INSTRUMENT_MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator ;
private _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorFieldSpecified:boolean ;
private _NoteHolderNameField:string ;
private _OtherFeesAmountField:string ;
private _OtherFeesDescriptionField:string ;
private _OweltyOfPartitionIndicatorField:SECURITY_INSTRUMENT_OweltyOfPartitionIndicator ;
private _OweltyOfPartitionIndicatorFieldSpecified:boolean ;
private propertyLongLegalPageNumberDescriptionField:string ;
private _PurchaseMoneyIndicatorField:SECURITY_INSTRUMENT_PurchaseMoneyIndicator ;
private _PurchaseMoneyIndicatorFieldSpecified:boolean ;
private _RealPropertyImprovedOrToBeImprovedIndicatorField:SECURITY_INSTRUMENT_RealPropertyImprovedOrToBeImprovedIndicator ;
private _RealPropertyImprovedOrToBeImprovedIndicatorFieldSpecified:boolean ;
private _RealPropertyImprovementsNotCoveredIndicatorField:SECURITY_INSTRUMENT_RealPropertyImprovementsNotCoveredIndicator ;
private _RealPropertyImprovementsNotCoveredIndicatorFieldSpecified:boolean ;
private _RecordingRequestedByNameField:string ;
private _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorField:SECURITY_INSTRUMENT_RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator ;
private _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorFieldSpecified:boolean ;
private _TaxSerialNumberIdentifierField:string ;
private _TrusteeFeePercentField:string ;
private _VendorsLienIndicatorField:SECURITY_INSTRUMENT_VendorsLienIndicator ;
private _VendorsLienIndicatorFieldSpecified:boolean ;
private _VendorsLienDescriptionField:string ;
private _VestingDescriptionField:string ;
private _NoticeOfConfidentialtyRightsDescriptionField:string ;
private _PersonAuthorizedToReleaseLienNameField:string ;
private _PersonAuthorizedToReleaseLienPhoneNumberField:string ;
private _PersonAuthorizedToReleaseLienTitleField:string ;
private _SignerForRegistersOfficeNameField:string ;
private _CertifyingAttorneyNameField:string ;
private recordedDocumentIdentifierField:string ;
private _IDField:string ;
private propertyLongLegalDescriptionPageNumberDescriptionField:string ;
private propertyLongLegalDescriptionPreparedByDescriptionField:string ;
public get TAXABLE_PARTY(): TAXABLE_PARTY[]
{
return this.tAXABLE_PARTYField;
}
public set TAXABLE_PARTY(value: TAXABLE_PARTY[])
{
this.tAXABLE_PARTYField = value;
}
public get _AssumptionFeeAmount(): string
{
return this._AssumptionFeeAmountField;
}
public set _AssumptionFeeAmount(value: string)
{
this._AssumptionFeeAmountField = value;
}
public get _AttorneyFeeMinimumAmount(): string
{
return this._AttorneyFeeMinimumAmountField;
}
public set _AttorneyFeeMinimumAmount(value: string)
{
this._AttorneyFeeMinimumAmountField = value;
}
public get _AttorneyFeePercent(): string
{
return this._AttorneyFeePercentField;
}
public set _AttorneyFeePercent(value: string)
{
this._AttorneyFeePercentField = value;
}
public get _MaximumPrincipalIndebtednessAmount(): string
{
return this._MaximumPrincipalIndebtednessAmountField;
}
public set _MaximumPrincipalIndebtednessAmount(value: string)
{
this._MaximumPrincipalIndebtednessAmountField = value;
}
public get _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator(): SECURITY_INSTRUMENT_MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator
{
return this._MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorField;
}
public set _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator(value: SECURITY_INSTRUMENT_MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator)
{
this._MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorField = value;
}
public get _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorSpecified(): boolean
{
return this._MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorFieldSpecified;
}
public set _MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorSpecified(value: boolean)
{
this._MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicatorFieldSpecified = value;
}
public get _NoteHolderName(): string
{
return this._NoteHolderNameField;
}
public set _NoteHolderName(value: string)
{
this._NoteHolderNameField = value;
}
public get _OtherFeesAmount(): string
{
return this._OtherFeesAmountField;
}
public set _OtherFeesAmount(value: string)
{
this._OtherFeesAmountField = value;
}
public get _OtherFeesDescription(): string
{
return this._OtherFeesDescriptionField;
}
public set _OtherFeesDescription(value: string)
{
this._OtherFeesDescriptionField = value;
}
public get _OweltyOfPartitionIndicator(): SECURITY_INSTRUMENT_OweltyOfPartitionIndicator
{
return this._OweltyOfPartitionIndicatorField;
}
public set _OweltyOfPartitionIndicator(value: SECURITY_INSTRUMENT_OweltyOfPartitionIndicator)
{
this._OweltyOfPartitionIndicatorField = value;
}
public get _OweltyOfPartitionIndicatorSpecified(): boolean
{
return this._OweltyOfPartitionIndicatorFieldSpecified;
}
public set _OweltyOfPartitionIndicatorSpecified(value: boolean)
{
this._OweltyOfPartitionIndicatorFieldSpecified = value;
}
public get PropertyLongLegalPageNumberDescription(): string
{
return this.propertyLongLegalPageNumberDescriptionField;
}
public set PropertyLongLegalPageNumberDescription(value: string)
{
this.propertyLongLegalPageNumberDescriptionField = value;
}
public get _PurchaseMoneyIndicator(): SECURITY_INSTRUMENT_PurchaseMoneyIndicator
{
return this._PurchaseMoneyIndicatorField;
}
public set _PurchaseMoneyIndicator(value: SECURITY_INSTRUMENT_PurchaseMoneyIndicator)
{
this._PurchaseMoneyIndicatorField = value;
}
public get _PurchaseMoneyIndicatorSpecified(): boolean
{
return this._PurchaseMoneyIndicatorFieldSpecified;
}
public set _PurchaseMoneyIndicatorSpecified(value: boolean)
{
this._PurchaseMoneyIndicatorFieldSpecified = value;
}
public get _RealPropertyImprovedOrToBeImprovedIndicator(): SECURITY_INSTRUMENT_RealPropertyImprovedOrToBeImprovedIndicator
{
return this._RealPropertyImprovedOrToBeImprovedIndicatorField;
}
public set _RealPropertyImprovedOrToBeImprovedIndicator(value: SECURITY_INSTRUMENT_RealPropertyImprovedOrToBeImprovedIndicator)
{
this._RealPropertyImprovedOrToBeImprovedIndicatorField = value;
}
public get _RealPropertyImprovedOrToBeImprovedIndicatorSpecified(): boolean
{
return this._RealPropertyImprovedOrToBeImprovedIndicatorFieldSpecified;
}
public set _RealPropertyImprovedOrToBeImprovedIndicatorSpecified(value: boolean)
{
this._RealPropertyImprovedOrToBeImprovedIndicatorFieldSpecified = value;
}
public get _RealPropertyImprovementsNotCoveredIndicator(): SECURITY_INSTRUMENT_RealPropertyImprovementsNotCoveredIndicator
{
return this._RealPropertyImprovementsNotCoveredIndicatorField;
}
public set _RealPropertyImprovementsNotCoveredIndicator(value: SECURITY_INSTRUMENT_RealPropertyImprovementsNotCoveredIndicator)
{
this._RealPropertyImprovementsNotCoveredIndicatorField = value;
}
public get _RealPropertyImprovementsNotCoveredIndicatorSpecified(): boolean
{
return this._RealPropertyImprovementsNotCoveredIndicatorFieldSpecified;
}
public set _RealPropertyImprovementsNotCoveredIndicatorSpecified(value: boolean)
{
this._RealPropertyImprovementsNotCoveredIndicatorFieldSpecified = value;
}
public get _RecordingRequestedByName(): string
{
return this._RecordingRequestedByNameField;
}
public set _RecordingRequestedByName(value: string)
{
this._RecordingRequestedByNameField = value;
}
public get _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator(): SECURITY_INSTRUMENT_RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator
{
return this._RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorField;
}
public set _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator(value: SECURITY_INSTRUMENT_RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator)
{
this._RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorField = value;
}
public get _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorSpecified(): boolean
{
return this._RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorFieldSpecified;
}
public set _RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorSpecified(value: boolean)
{
this._RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicatorFieldSpecified = value;
}
public get _TaxSerialNumberIdentifier(): string
{
return this._TaxSerialNumberIdentifierField;
}
public set _TaxSerialNumberIdentifier(value: string)
{
this._TaxSerialNumberIdentifierField = value;
}
public get _TrusteeFeePercent(): string
{
return this._TrusteeFeePercentField;
}
public set _TrusteeFeePercent(value: string)
{
this._TrusteeFeePercentField = value;
}
public get _VendorsLienIndicator(): SECURITY_INSTRUMENT_VendorsLienIndicator
{
return this._VendorsLienIndicatorField;
}
public set _VendorsLienIndicator(value: SECURITY_INSTRUMENT_VendorsLienIndicator)
{
this._VendorsLienIndicatorField = value;
}
public get _VendorsLienIndicatorSpecified(): boolean
{
return this._VendorsLienIndicatorFieldSpecified;
}
public set _VendorsLienIndicatorSpecified(value: boolean)
{
this._VendorsLienIndicatorFieldSpecified = value;
}
public get _VendorsLienDescription(): string
{
return this._VendorsLienDescriptionField;
}
public set _VendorsLienDescription(value: string)
{
this._VendorsLienDescriptionField = value;
}
public get _VestingDescription(): string
{
return this._VestingDescriptionField;
}
public set _VestingDescription(value: string)
{
this._VestingDescriptionField = value;
}
public get _NoticeOfConfidentialtyRightsDescription(): string
{
return this._NoticeOfConfidentialtyRightsDescriptionField;
}
public set _NoticeOfConfidentialtyRightsDescription(value: string)
{
this._NoticeOfConfidentialtyRightsDescriptionField = value;
}
public get _PersonAuthorizedToReleaseLienName(): string
{
return this._PersonAuthorizedToReleaseLienNameField;
}
public set _PersonAuthorizedToReleaseLienName(value: string)
{
this._PersonAuthorizedToReleaseLienNameField = value;
}
public get _PersonAuthorizedToReleaseLienPhoneNumber(): string
{
return this._PersonAuthorizedToReleaseLienPhoneNumberField;
}
public set _PersonAuthorizedToReleaseLienPhoneNumber(value: string)
{
this._PersonAuthorizedToReleaseLienPhoneNumberField = value;
}
public get _PersonAuthorizedToReleaseLienTitle(): string
{
return this._PersonAuthorizedToReleaseLienTitleField;
}
public set _PersonAuthorizedToReleaseLienTitle(value: string)
{
this._PersonAuthorizedToReleaseLienTitleField = value;
}
public get _SignerForRegistersOfficeName(): string
{
return this._SignerForRegistersOfficeNameField;
}
public set _SignerForRegistersOfficeName(value: string)
{
this._SignerForRegistersOfficeNameField = value;
}
public get _CertifyingAttorneyName(): string
{
return this._CertifyingAttorneyNameField;
}
public set _CertifyingAttorneyName(value: string)
{
this._CertifyingAttorneyNameField = value;
}
public get RecordedDocumentIdentifier(): string
{
return this.recordedDocumentIdentifierField;
}
public set RecordedDocumentIdentifier(value: string)
{
this.recordedDocumentIdentifierField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get PropertyLongLegalDescriptionPageNumberDescription(): string
{
return this.propertyLongLegalDescriptionPageNumberDescriptionField;
}
public set PropertyLongLegalDescriptionPageNumberDescription(value: string)
{
this.propertyLongLegalDescriptionPageNumberDescriptionField = value;
}
public get PropertyLongLegalDescriptionPreparedByDescription(): string
{
return this.propertyLongLegalDescriptionPreparedByDescriptionField;
}
public set PropertyLongLegalDescriptionPreparedByDescription(value: string)
{
this.propertyLongLegalDescriptionPreparedByDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TAXABLE_PARTY 
{
private pREFERRED_RESPONSEField:PREFERRED_RESPONSE[] ;
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _IDField:string ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountyField:string ;
private _CountryField:string ;
private _CountryCodeField:string ;
private _SequenceIdentifierField:string ;
private _TitleDescriptionField:string ;
public get PREFERRED_RESPONSE(): PREFERRED_RESPONSE[]
{
return this.pREFERRED_RESPONSEField;
}
public set PREFERRED_RESPONSE(value: PREFERRED_RESPONSE[])
{
this.pREFERRED_RESPONSEField = value;
}
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _CountryCode(): string
{
return this._CountryCodeField;
}
public set _CountryCode(value: string)
{
this._CountryCodeField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _TitleDescription(): string
{
return this._TitleDescriptionField;
}
public set _TitleDescription(value: string)
{
this._TitleDescriptionField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class PREFERRED_RESPONSE 
{
private _IDField:string ;
private _FormatField:PREFERRED_RESPONSE_Format ;
private _FormatFieldSpecified:boolean ;
private _MethodField:PREFERRED_RESPONSE_Method ;
private _MethodFieldSpecified:boolean ;
private _DestinationField:string ;
private _FormatOtherDescriptionField:string ;
private _MethodOtherField:string ;
private _UseEmbeddedFileIndicatorField:PREFERRED_RESPONSE_UseEmbeddedFileIndicator ;
private _UseEmbeddedFileIndicatorFieldSpecified:boolean ;
private mIMETypeField:string ;
private _VersionIdentifierField:string ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Format(): PREFERRED_RESPONSE_Format
{
return this._FormatField;
}
public set _Format(value: PREFERRED_RESPONSE_Format)
{
this._FormatField = value;
}
public get _FormatSpecified(): boolean
{
return this._FormatFieldSpecified;
}
public set _FormatSpecified(value: boolean)
{
this._FormatFieldSpecified = value;
}
public get _Method(): PREFERRED_RESPONSE_Method
{
return this._MethodField;
}
public set _Method(value: PREFERRED_RESPONSE_Method)
{
this._MethodField = value;
}
public get _MethodSpecified(): boolean
{
return this._MethodFieldSpecified;
}
public set _MethodSpecified(value: boolean)
{
this._MethodFieldSpecified = value;
}
public get _Destination(): string
{
return this._DestinationField;
}
public set _Destination(value: string)
{
this._DestinationField = value;
}
public get _FormatOtherDescription(): string
{
return this._FormatOtherDescriptionField;
}
public set _FormatOtherDescription(value: string)
{
this._FormatOtherDescriptionField = value;
}
public get _MethodOther(): string
{
return this._MethodOtherField;
}
public set _MethodOther(value: string)
{
this._MethodOtherField = value;
}
public get _UseEmbeddedFileIndicator(): PREFERRED_RESPONSE_UseEmbeddedFileIndicator
{
return this._UseEmbeddedFileIndicatorField;
}
public set _UseEmbeddedFileIndicator(value: PREFERRED_RESPONSE_UseEmbeddedFileIndicator)
{
this._UseEmbeddedFileIndicatorField = value;
}
public get _UseEmbeddedFileIndicatorSpecified(): boolean
{
return this._UseEmbeddedFileIndicatorFieldSpecified;
}
public set _UseEmbeddedFileIndicatorSpecified(value: boolean)
{
this._UseEmbeddedFileIndicatorFieldSpecified = value;
}
public get MIMEType(): string
{
return this.mIMETypeField;
}
public set MIMEType(value: string)
{
this.mIMETypeField = value;
}
public get _VersionIdentifier(): string
{
return this._VersionIdentifierField;
}
public set _VersionIdentifier(value: string)
{
this._VersionIdentifierField = value;
} 
}
export enum PREFERRED_RESPONSE_Format {
 PCL,

PDF,

Text,

Other,

XML,

TIFF
 }
export enum PREFERRED_RESPONSE_Method {
 SMTP,

Mail,

MessageQueue,

FTP,

File,

Other,

Fax,

HTTP,

HTTPS,

VAN
 }
export enum PREFERRED_RESPONSE_UseEmbeddedFileIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_MultipleUnitsRealPropertyIsImprovedOrToBeImprovedIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_OweltyOfPartitionIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_PurchaseMoneyIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_RealPropertyImprovedOrToBeImprovedIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_RealPropertyImprovementsNotCoveredIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_RenewalAndExtensionOfLiensAgainstHomesteadPropertyIndicator {
 N,

Y
 }
export enum SECURITY_INSTRUMENT_VendorsLienIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TRUSTEE 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _CountyField:string ;
private _TypeField:TRUSTEE_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private nonPersonEntityIndicatorField:TRUSTEENonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Type(): TRUSTEE_Type
{
return this._TypeField;
}
public set _Type(value: TRUSTEE_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get NonPersonEntityIndicator(): TRUSTEENonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: TRUSTEENonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum TRUSTEE_Type {
 Secondary,

Other,

Primary
 }
export enum TRUSTEENonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class WITNESS 
{
private _SequenceIdentifierField:string ;
private _UnparsedNameField:string ;
private _IDField:string ;
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum RECORDABLE_DOCUMENT_Type {
 DeedOfTrust,

SecurityInstrument,

QuitClaimDeed,

Other,

ReleaseOfLien,

All,

Mortgage,

SignatureAffidavit,

AssignmentOfMortgage,

WarrantyDeed
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RESPA_HUD_DETAIL 
{
private _SpecifiedHUDLineNumberField:string ;
private _LineItemAmountField:string ;
private _LineItemDescriptionField:string ;
private _LineItemPaidByTypeField:RESPA_HUD_DETAIL_LineItemPaidByType ;
private _LineItemPaidByTypeFieldSpecified:boolean ;
private hUD1SettlementAgentUnparsedNameField:string ;
private hUD1SettlementAgentUnparsedAddressField:string ;
private hUD1SettlementDateField:string ;
private hUD1LenderUnparsedNameField:string ;
private hUD1LenderUnparsedAddressField:string ;
private hUD1CashToOrFromBorrowerIndicatorField:RESPA_HUD_DETAILHUD1CashToOrFromBorrowerIndicator ;
private hUD1CashToOrFromBorrowerIndicatorFieldSpecified:boolean ;
private hUD1CashToOrFromSellerIndicatorField:RESPA_HUD_DETAILHUD1CashToOrFromSellerIndicator ;
private hUD1CashToOrFromSellerIndicatorFieldSpecified:boolean ;
private hUD1ConventionalInsuredIndicatorField:RESPA_HUD_DETAILHUD1ConventionalInsuredIndicator ;
private hUD1ConventionalInsuredIndicatorFieldSpecified:boolean ;
private hUD1FileNumberIdentifierField:string ;
private hUD1LineItemToDateField:string ;
private hUD1LineItemFromDateField:string ;
private _LineItemPaidByTypeOtherDescriptionField:string ;
private _IDField:string ;
public get _SpecifiedHUDLineNumber(): string
{
return this._SpecifiedHUDLineNumberField;
}
public set _SpecifiedHUDLineNumber(value: string)
{
this._SpecifiedHUDLineNumberField = value;
}
public get _LineItemAmount(): string
{
return this._LineItemAmountField;
}
public set _LineItemAmount(value: string)
{
this._LineItemAmountField = value;
}
public get _LineItemDescription(): string
{
return this._LineItemDescriptionField;
}
public set _LineItemDescription(value: string)
{
this._LineItemDescriptionField = value;
}
public get _LineItemPaidByType(): RESPA_HUD_DETAIL_LineItemPaidByType
{
return this._LineItemPaidByTypeField;
}
public set _LineItemPaidByType(value: RESPA_HUD_DETAIL_LineItemPaidByType)
{
this._LineItemPaidByTypeField = value;
}
public get _LineItemPaidByTypeSpecified(): boolean
{
return this._LineItemPaidByTypeFieldSpecified;
}
public set _LineItemPaidByTypeSpecified(value: boolean)
{
this._LineItemPaidByTypeFieldSpecified = value;
}
public get HUD1SettlementAgentUnparsedName(): string
{
return this.hUD1SettlementAgentUnparsedNameField;
}
public set HUD1SettlementAgentUnparsedName(value: string)
{
this.hUD1SettlementAgentUnparsedNameField = value;
}
public get HUD1SettlementAgentUnparsedAddress(): string
{
return this.hUD1SettlementAgentUnparsedAddressField;
}
public set HUD1SettlementAgentUnparsedAddress(value: string)
{
this.hUD1SettlementAgentUnparsedAddressField = value;
}
public get HUD1SettlementDate(): string
{
return this.hUD1SettlementDateField;
}
public set HUD1SettlementDate(value: string)
{
this.hUD1SettlementDateField = value;
}
public get HUD1LenderUnparsedName(): string
{
return this.hUD1LenderUnparsedNameField;
}
public set HUD1LenderUnparsedName(value: string)
{
this.hUD1LenderUnparsedNameField = value;
}
public get HUD1LenderUnparsedAddress(): string
{
return this.hUD1LenderUnparsedAddressField;
}
public set HUD1LenderUnparsedAddress(value: string)
{
this.hUD1LenderUnparsedAddressField = value;
}
public get HUD1CashToOrFromBorrowerIndicator(): RESPA_HUD_DETAILHUD1CashToOrFromBorrowerIndicator
{
return this.hUD1CashToOrFromBorrowerIndicatorField;
}
public set HUD1CashToOrFromBorrowerIndicator(value: RESPA_HUD_DETAILHUD1CashToOrFromBorrowerIndicator)
{
this.hUD1CashToOrFromBorrowerIndicatorField = value;
}
public get HUD1CashToOrFromBorrowerIndicatorSpecified(): boolean
{
return this.hUD1CashToOrFromBorrowerIndicatorFieldSpecified;
}
public set HUD1CashToOrFromBorrowerIndicatorSpecified(value: boolean)
{
this.hUD1CashToOrFromBorrowerIndicatorFieldSpecified = value;
}
public get HUD1CashToOrFromSellerIndicator(): RESPA_HUD_DETAILHUD1CashToOrFromSellerIndicator
{
return this.hUD1CashToOrFromSellerIndicatorField;
}
public set HUD1CashToOrFromSellerIndicator(value: RESPA_HUD_DETAILHUD1CashToOrFromSellerIndicator)
{
this.hUD1CashToOrFromSellerIndicatorField = value;
}
public get HUD1CashToOrFromSellerIndicatorSpecified(): boolean
{
return this.hUD1CashToOrFromSellerIndicatorFieldSpecified;
}
public set HUD1CashToOrFromSellerIndicatorSpecified(value: boolean)
{
this.hUD1CashToOrFromSellerIndicatorFieldSpecified = value;
}
public get HUD1ConventionalInsuredIndicator(): RESPA_HUD_DETAILHUD1ConventionalInsuredIndicator
{
return this.hUD1ConventionalInsuredIndicatorField;
}
public set HUD1ConventionalInsuredIndicator(value: RESPA_HUD_DETAILHUD1ConventionalInsuredIndicator)
{
this.hUD1ConventionalInsuredIndicatorField = value;
}
public get HUD1ConventionalInsuredIndicatorSpecified(): boolean
{
return this.hUD1ConventionalInsuredIndicatorFieldSpecified;
}
public set HUD1ConventionalInsuredIndicatorSpecified(value: boolean)
{
this.hUD1ConventionalInsuredIndicatorFieldSpecified = value;
}
public get HUD1FileNumberIdentifier(): string
{
return this.hUD1FileNumberIdentifierField;
}
public set HUD1FileNumberIdentifier(value: string)
{
this.hUD1FileNumberIdentifierField = value;
}
public get HUD1LineItemToDate(): string
{
return this.hUD1LineItemToDateField;
}
public set HUD1LineItemToDate(value: string)
{
this.hUD1LineItemToDateField = value;
}
public get HUD1LineItemFromDate(): string
{
return this.hUD1LineItemFromDateField;
}
public set HUD1LineItemFromDate(value: string)
{
this.hUD1LineItemFromDateField = value;
}
public get _LineItemPaidByTypeOtherDescription(): string
{
return this._LineItemPaidByTypeOtherDescriptionField;
}
public set _LineItemPaidByTypeOtherDescription(value: string)
{
this._LineItemPaidByTypeOtherDescriptionField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum RESPA_HUD_DETAIL_LineItemPaidByType {
 LenderPremium,

Seller,

Other,

Buyer
 }
export enum RESPA_HUD_DETAILHUD1CashToOrFromBorrowerIndicator {
 N,

Y
 }
export enum RESPA_HUD_DETAILHUD1CashToOrFromSellerIndicator {
 N,

Y
 }
export enum RESPA_HUD_DETAILHUD1ConventionalInsuredIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RESPA_SERVICING_DATA 
{
private _AreAbleToServiceIndicatorField:RESPA_SERVICING_DATA_AreAbleToServiceIndicator ;
private _AreAbleToServiceIndicatorFieldSpecified:boolean ;
private _AssignSellOrTransferSomeServicingIndicatorField:RESPA_SERVICING_DATA_AssignSellOrTransferSomeServicingIndicator ;
private _AssignSellOrTransferSomeServicingIndicatorFieldSpecified:boolean ;
private _DoNotServiceIndicatorField:RESPA_SERVICING_DATA_DoNotServiceIndicator ;
private _DoNotServiceIndicatorFieldSpecified:boolean ;
private _ExpectToAssignSellOrTransferPercentOfServicingIndicatorField:RESPA_SERVICING_DATA_ExpectToAssignSellOrTransferPercentOfServicingIndicator ;
private _ExpectToAssignSellOrTransferPercentOfServicingIndicatorFieldSpecified:boolean ;
private _ExpectToAssignSellOrTransferPercentField:string ;
private _ExpectToRetainAllServicingIndicatorField:RESPA_SERVICING_DATA_ExpectToRetainAllServicingIndicator ;
private _ExpectToRetainAllServicingIndicatorFieldSpecified:boolean ;
private _ExpectToSellAllServicingIndicatorField:RESPA_SERVICING_DATA_ExpectToSellAllServicingIndicator ;
private _ExpectToSellAllServicingIndicatorFieldSpecified:boolean ;
private _FirstTransferYearField:string ;
private _FirstTransferYearValueField:string ;
private _HaveNotDecidedToServiceIndicatorField:RESPA_SERVICING_DATA_HaveNotDecidedToServiceIndicator ;
private _HaveNotDecidedToServiceIndicatorFieldSpecified:boolean ;
private _HaveNotServicedInPastThreeYearsIndicatorField:RESPA_SERVICING_DATA_HaveNotServicedInPastThreeYearsIndicator ;
private _HaveNotServicedInPastThreeYearsIndicatorFieldSpecified:boolean ;
private _HavePreviouslyAssignedServicingIndicatorField:RESPA_SERVICING_DATA_HavePreviouslyAssignedServicingIndicator ;
private _HavePreviouslyAssignedServicingIndicatorFieldSpecified:boolean ;
private _MayAssignServicingIndicatorField:RESPA_SERVICING_DATA_MayAssignServicingIndicator ;
private _MayAssignServicingIndicatorFieldSpecified:boolean ;
private _PresentlyIntendToAssignSellOrTransferServicingIndicatorField:RESPA_SERVICING_DATA_PresentlyIntendToAssignSellOrTransferServicingIndicator ;
private _PresentlyIntendToAssignSellOrTransferServicingIndicatorFieldSpecified:boolean ;
private _SecondTransferYearField:string ;
private _SecondTransferYearValueField:string ;
private _ThirdTransferYearField:string ;
private _ThirdTransferYearValueField:string ;
private _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorField:RESPA_SERVICING_DATA_ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator ;
private _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorFieldSpecified:boolean ;
private _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorField:RESPA_SERVICING_DATA_ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator ;
private _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorFieldSpecified:boolean ;
private _ThisIsOurRecordOfTransferringServicingIndicatorField:RESPA_SERVICING_DATA_ThisIsOurRecordOfTransferringServicingIndicator ;
private _ThisIsOurRecordOfTransferringServicingIndicatorFieldSpecified:boolean ;
private _TwelveMonthPeriodTransferPercentField:string ;
private _WillNotServiceIndicatorField:RESPA_SERVICING_DATA_WillNotServiceIndicator ;
private _WillNotServiceIndicatorFieldSpecified:boolean ;
private _WillServiceIndicatorField:RESPA_SERVICING_DATA_WillServiceIndicator ;
private _WillServiceIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get _AreAbleToServiceIndicator(): RESPA_SERVICING_DATA_AreAbleToServiceIndicator
{
return this._AreAbleToServiceIndicatorField;
}
public set _AreAbleToServiceIndicator(value: RESPA_SERVICING_DATA_AreAbleToServiceIndicator)
{
this._AreAbleToServiceIndicatorField = value;
}
public get _AreAbleToServiceIndicatorSpecified(): boolean
{
return this._AreAbleToServiceIndicatorFieldSpecified;
}
public set _AreAbleToServiceIndicatorSpecified(value: boolean)
{
this._AreAbleToServiceIndicatorFieldSpecified = value;
}
public get _AssignSellOrTransferSomeServicingIndicator(): RESPA_SERVICING_DATA_AssignSellOrTransferSomeServicingIndicator
{
return this._AssignSellOrTransferSomeServicingIndicatorField;
}
public set _AssignSellOrTransferSomeServicingIndicator(value: RESPA_SERVICING_DATA_AssignSellOrTransferSomeServicingIndicator)
{
this._AssignSellOrTransferSomeServicingIndicatorField = value;
}
public get _AssignSellOrTransferSomeServicingIndicatorSpecified(): boolean
{
return this._AssignSellOrTransferSomeServicingIndicatorFieldSpecified;
}
public set _AssignSellOrTransferSomeServicingIndicatorSpecified(value: boolean)
{
this._AssignSellOrTransferSomeServicingIndicatorFieldSpecified = value;
}
public get _DoNotServiceIndicator(): RESPA_SERVICING_DATA_DoNotServiceIndicator
{
return this._DoNotServiceIndicatorField;
}
public set _DoNotServiceIndicator(value: RESPA_SERVICING_DATA_DoNotServiceIndicator)
{
this._DoNotServiceIndicatorField = value;
}
public get _DoNotServiceIndicatorSpecified(): boolean
{
return this._DoNotServiceIndicatorFieldSpecified;
}
public set _DoNotServiceIndicatorSpecified(value: boolean)
{
this._DoNotServiceIndicatorFieldSpecified = value;
}
public get _ExpectToAssignSellOrTransferPercentOfServicingIndicator(): RESPA_SERVICING_DATA_ExpectToAssignSellOrTransferPercentOfServicingIndicator
{
return this._ExpectToAssignSellOrTransferPercentOfServicingIndicatorField;
}
public set _ExpectToAssignSellOrTransferPercentOfServicingIndicator(value: RESPA_SERVICING_DATA_ExpectToAssignSellOrTransferPercentOfServicingIndicator)
{
this._ExpectToAssignSellOrTransferPercentOfServicingIndicatorField = value;
}
public get _ExpectToAssignSellOrTransferPercentOfServicingIndicatorSpecified(): boolean
{
return this._ExpectToAssignSellOrTransferPercentOfServicingIndicatorFieldSpecified;
}
public set _ExpectToAssignSellOrTransferPercentOfServicingIndicatorSpecified(value: boolean)
{
this._ExpectToAssignSellOrTransferPercentOfServicingIndicatorFieldSpecified = value;
}
public get _ExpectToAssignSellOrTransferPercent(): string
{
return this._ExpectToAssignSellOrTransferPercentField;
}
public set _ExpectToAssignSellOrTransferPercent(value: string)
{
this._ExpectToAssignSellOrTransferPercentField = value;
}
public get _ExpectToRetainAllServicingIndicator(): RESPA_SERVICING_DATA_ExpectToRetainAllServicingIndicator
{
return this._ExpectToRetainAllServicingIndicatorField;
}
public set _ExpectToRetainAllServicingIndicator(value: RESPA_SERVICING_DATA_ExpectToRetainAllServicingIndicator)
{
this._ExpectToRetainAllServicingIndicatorField = value;
}
public get _ExpectToRetainAllServicingIndicatorSpecified(): boolean
{
return this._ExpectToRetainAllServicingIndicatorFieldSpecified;
}
public set _ExpectToRetainAllServicingIndicatorSpecified(value: boolean)
{
this._ExpectToRetainAllServicingIndicatorFieldSpecified = value;
}
public get _ExpectToSellAllServicingIndicator(): RESPA_SERVICING_DATA_ExpectToSellAllServicingIndicator
{
return this._ExpectToSellAllServicingIndicatorField;
}
public set _ExpectToSellAllServicingIndicator(value: RESPA_SERVICING_DATA_ExpectToSellAllServicingIndicator)
{
this._ExpectToSellAllServicingIndicatorField = value;
}
public get _ExpectToSellAllServicingIndicatorSpecified(): boolean
{
return this._ExpectToSellAllServicingIndicatorFieldSpecified;
}
public set _ExpectToSellAllServicingIndicatorSpecified(value: boolean)
{
this._ExpectToSellAllServicingIndicatorFieldSpecified = value;
}
public get _FirstTransferYear(): string
{
return this._FirstTransferYearField;
}
public set _FirstTransferYear(value: string)
{
this._FirstTransferYearField = value;
}
public get _FirstTransferYearValue(): string
{
return this._FirstTransferYearValueField;
}
public set _FirstTransferYearValue(value: string)
{
this._FirstTransferYearValueField = value;
}
public get _HaveNotDecidedToServiceIndicator(): RESPA_SERVICING_DATA_HaveNotDecidedToServiceIndicator
{
return this._HaveNotDecidedToServiceIndicatorField;
}
public set _HaveNotDecidedToServiceIndicator(value: RESPA_SERVICING_DATA_HaveNotDecidedToServiceIndicator)
{
this._HaveNotDecidedToServiceIndicatorField = value;
}
public get _HaveNotDecidedToServiceIndicatorSpecified(): boolean
{
return this._HaveNotDecidedToServiceIndicatorFieldSpecified;
}
public set _HaveNotDecidedToServiceIndicatorSpecified(value: boolean)
{
this._HaveNotDecidedToServiceIndicatorFieldSpecified = value;
}
public get _HaveNotServicedInPastThreeYearsIndicator(): RESPA_SERVICING_DATA_HaveNotServicedInPastThreeYearsIndicator
{
return this._HaveNotServicedInPastThreeYearsIndicatorField;
}
public set _HaveNotServicedInPastThreeYearsIndicator(value: RESPA_SERVICING_DATA_HaveNotServicedInPastThreeYearsIndicator)
{
this._HaveNotServicedInPastThreeYearsIndicatorField = value;
}
public get _HaveNotServicedInPastThreeYearsIndicatorSpecified(): boolean
{
return this._HaveNotServicedInPastThreeYearsIndicatorFieldSpecified;
}
public set _HaveNotServicedInPastThreeYearsIndicatorSpecified(value: boolean)
{
this._HaveNotServicedInPastThreeYearsIndicatorFieldSpecified = value;
}
public get _HavePreviouslyAssignedServicingIndicator(): RESPA_SERVICING_DATA_HavePreviouslyAssignedServicingIndicator
{
return this._HavePreviouslyAssignedServicingIndicatorField;
}
public set _HavePreviouslyAssignedServicingIndicator(value: RESPA_SERVICING_DATA_HavePreviouslyAssignedServicingIndicator)
{
this._HavePreviouslyAssignedServicingIndicatorField = value;
}
public get _HavePreviouslyAssignedServicingIndicatorSpecified(): boolean
{
return this._HavePreviouslyAssignedServicingIndicatorFieldSpecified;
}
public set _HavePreviouslyAssignedServicingIndicatorSpecified(value: boolean)
{
this._HavePreviouslyAssignedServicingIndicatorFieldSpecified = value;
}
public get _MayAssignServicingIndicator(): RESPA_SERVICING_DATA_MayAssignServicingIndicator
{
return this._MayAssignServicingIndicatorField;
}
public set _MayAssignServicingIndicator(value: RESPA_SERVICING_DATA_MayAssignServicingIndicator)
{
this._MayAssignServicingIndicatorField = value;
}
public get _MayAssignServicingIndicatorSpecified(): boolean
{
return this._MayAssignServicingIndicatorFieldSpecified;
}
public set _MayAssignServicingIndicatorSpecified(value: boolean)
{
this._MayAssignServicingIndicatorFieldSpecified = value;
}
public get _PresentlyIntendToAssignSellOrTransferServicingIndicator(): RESPA_SERVICING_DATA_PresentlyIntendToAssignSellOrTransferServicingIndicator
{
return this._PresentlyIntendToAssignSellOrTransferServicingIndicatorField;
}
public set _PresentlyIntendToAssignSellOrTransferServicingIndicator(value: RESPA_SERVICING_DATA_PresentlyIntendToAssignSellOrTransferServicingIndicator)
{
this._PresentlyIntendToAssignSellOrTransferServicingIndicatorField = value;
}
public get _PresentlyIntendToAssignSellOrTransferServicingIndicatorSpecified(): boolean
{
return this._PresentlyIntendToAssignSellOrTransferServicingIndicatorFieldSpecified;
}
public set _PresentlyIntendToAssignSellOrTransferServicingIndicatorSpecified(value: boolean)
{
this._PresentlyIntendToAssignSellOrTransferServicingIndicatorFieldSpecified = value;
}
public get _SecondTransferYear(): string
{
return this._SecondTransferYearField;
}
public set _SecondTransferYear(value: string)
{
this._SecondTransferYearField = value;
}
public get _SecondTransferYearValue(): string
{
return this._SecondTransferYearValueField;
}
public set _SecondTransferYearValue(value: string)
{
this._SecondTransferYearValueField = value;
}
public get _ThirdTransferYear(): string
{
return this._ThirdTransferYearField;
}
public set _ThirdTransferYear(value: string)
{
this._ThirdTransferYearField = value;
}
public get _ThirdTransferYearValue(): string
{
return this._ThirdTransferYearValueField;
}
public set _ThirdTransferYearValue(value: string)
{
this._ThirdTransferYearValueField = value;
}
public get _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator(): RESPA_SERVICING_DATA_ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator
{
return this._ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorField;
}
public set _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator(value: RESPA_SERVICING_DATA_ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator)
{
this._ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorField = value;
}
public get _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorSpecified(): boolean
{
return this._ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorFieldSpecified;
}
public set _ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorSpecified(value: boolean)
{
this._ThisEstimateIncludesAssignmentsSalesOrTransfersIndicatorFieldSpecified = value;
}
public get _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator(): RESPA_SERVICING_DATA_ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator
{
return this._ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorField;
}
public set _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator(value: RESPA_SERVICING_DATA_ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator)
{
this._ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorField = value;
}
public get _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorSpecified(): boolean
{
return this._ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorFieldSpecified;
}
public set _ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorSpecified(value: boolean)
{
this._ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicatorFieldSpecified = value;
}
public get _ThisIsOurRecordOfTransferringServicingIndicator(): RESPA_SERVICING_DATA_ThisIsOurRecordOfTransferringServicingIndicator
{
return this._ThisIsOurRecordOfTransferringServicingIndicatorField;
}
public set _ThisIsOurRecordOfTransferringServicingIndicator(value: RESPA_SERVICING_DATA_ThisIsOurRecordOfTransferringServicingIndicator)
{
this._ThisIsOurRecordOfTransferringServicingIndicatorField = value;
}
public get _ThisIsOurRecordOfTransferringServicingIndicatorSpecified(): boolean
{
return this._ThisIsOurRecordOfTransferringServicingIndicatorFieldSpecified;
}
public set _ThisIsOurRecordOfTransferringServicingIndicatorSpecified(value: boolean)
{
this._ThisIsOurRecordOfTransferringServicingIndicatorFieldSpecified = value;
}
public get _TwelveMonthPeriodTransferPercent(): string
{
return this._TwelveMonthPeriodTransferPercentField;
}
public set _TwelveMonthPeriodTransferPercent(value: string)
{
this._TwelveMonthPeriodTransferPercentField = value;
}
public get _WillNotServiceIndicator(): RESPA_SERVICING_DATA_WillNotServiceIndicator
{
return this._WillNotServiceIndicatorField;
}
public set _WillNotServiceIndicator(value: RESPA_SERVICING_DATA_WillNotServiceIndicator)
{
this._WillNotServiceIndicatorField = value;
}
public get _WillNotServiceIndicatorSpecified(): boolean
{
return this._WillNotServiceIndicatorFieldSpecified;
}
public set _WillNotServiceIndicatorSpecified(value: boolean)
{
this._WillNotServiceIndicatorFieldSpecified = value;
}
public get _WillServiceIndicator(): RESPA_SERVICING_DATA_WillServiceIndicator
{
return this._WillServiceIndicatorField;
}
public set _WillServiceIndicator(value: RESPA_SERVICING_DATA_WillServiceIndicator)
{
this._WillServiceIndicatorField = value;
}
public get _WillServiceIndicatorSpecified(): boolean
{
return this._WillServiceIndicatorFieldSpecified;
}
public set _WillServiceIndicatorSpecified(value: boolean)
{
this._WillServiceIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum RESPA_SERVICING_DATA_AreAbleToServiceIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_AssignSellOrTransferSomeServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_DoNotServiceIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ExpectToAssignSellOrTransferPercentOfServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ExpectToRetainAllServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ExpectToSellAllServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_HaveNotDecidedToServiceIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_HaveNotServicedInPastThreeYearsIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_HavePreviouslyAssignedServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_MayAssignServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_PresentlyIntendToAssignSellOrTransferServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ThisEstimateIncludesAssignmentsSalesOrTransfersIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ThisInformationDoesIncludeAssignmentsSalesOrTransfersIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_ThisIsOurRecordOfTransferringServicingIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_WillNotServiceIndicator {
 N,

Y
 }
export enum RESPA_SERVICING_DATA_WillServiceIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class RESPA_SUMMARY 
{
private _TOTAL_FEES_PAID_TOField:_TOTAL_FEES_PAID_TO[] ;
private _TOTAL_FEES_PAID_BYField:_TOTAL_FEES_PAID_BY[] ;
private _DisclosedTotalSalesPriceAmountField:string ;
private _TotalAmountFinancedAmountField:string ;
private _TotalAPRFeesAmountField:string ;
private _TotalNonAPRFeesAmountField:string ;
private _TotalPaidToOthersAmountField:string ;
private _TotalDepositedReservesAmountField:string ;
private _TotalFinanceChargeAmountField:string ;
private _TotalNetBorrowerFeesAmountField:string ;
private _TotalNetProceedsForFundingAmountField:string ;
private _TotalNetSellerFeesAmountField:string ;
private _TotalOfAllPaymentsAmountField:string ;
private _TotalPrepaidFinanceChargeAmountField:string ;
private aPRField:string ;
private _TotalFilingRecordingFeeAmountField:string ;
private _IDField:string ;
public get _TOTAL_FEES_PAID_TO(): _TOTAL_FEES_PAID_TO[]
{
return this._TOTAL_FEES_PAID_TOField;
}
public set _TOTAL_FEES_PAID_TO(value: _TOTAL_FEES_PAID_TO[])
{
this._TOTAL_FEES_PAID_TOField = value;
}
public get _TOTAL_FEES_PAID_BY(): _TOTAL_FEES_PAID_BY[]
{
return this._TOTAL_FEES_PAID_BYField;
}
public set _TOTAL_FEES_PAID_BY(value: _TOTAL_FEES_PAID_BY[])
{
this._TOTAL_FEES_PAID_BYField = value;
}
public get _DisclosedTotalSalesPriceAmount(): string
{
return this._DisclosedTotalSalesPriceAmountField;
}
public set _DisclosedTotalSalesPriceAmount(value: string)
{
this._DisclosedTotalSalesPriceAmountField = value;
}
public get _TotalAmountFinancedAmount(): string
{
return this._TotalAmountFinancedAmountField;
}
public set _TotalAmountFinancedAmount(value: string)
{
this._TotalAmountFinancedAmountField = value;
}
public get _TotalAPRFeesAmount(): string
{
return this._TotalAPRFeesAmountField;
}
public set _TotalAPRFeesAmount(value: string)
{
this._TotalAPRFeesAmountField = value;
}
public get _TotalNonAPRFeesAmount(): string
{
return this._TotalNonAPRFeesAmountField;
}
public set _TotalNonAPRFeesAmount(value: string)
{
this._TotalNonAPRFeesAmountField = value;
}
public get _TotalPaidToOthersAmount(): string
{
return this._TotalPaidToOthersAmountField;
}
public set _TotalPaidToOthersAmount(value: string)
{
this._TotalPaidToOthersAmountField = value;
}
public get _TotalDepositedReservesAmount(): string
{
return this._TotalDepositedReservesAmountField;
}
public set _TotalDepositedReservesAmount(value: string)
{
this._TotalDepositedReservesAmountField = value;
}
public get _TotalFinanceChargeAmount(): string
{
return this._TotalFinanceChargeAmountField;
}
public set _TotalFinanceChargeAmount(value: string)
{
this._TotalFinanceChargeAmountField = value;
}
public get _TotalNetBorrowerFeesAmount(): string
{
return this._TotalNetBorrowerFeesAmountField;
}
public set _TotalNetBorrowerFeesAmount(value: string)
{
this._TotalNetBorrowerFeesAmountField = value;
}
public get _TotalNetProceedsForFundingAmount(): string
{
return this._TotalNetProceedsForFundingAmountField;
}
public set _TotalNetProceedsForFundingAmount(value: string)
{
this._TotalNetProceedsForFundingAmountField = value;
}
public get _TotalNetSellerFeesAmount(): string
{
return this._TotalNetSellerFeesAmountField;
}
public set _TotalNetSellerFeesAmount(value: string)
{
this._TotalNetSellerFeesAmountField = value;
}
public get _TotalOfAllPaymentsAmount(): string
{
return this._TotalOfAllPaymentsAmountField;
}
public set _TotalOfAllPaymentsAmount(value: string)
{
this._TotalOfAllPaymentsAmountField = value;
}
public get _TotalPrepaidFinanceChargeAmount(): string
{
return this._TotalPrepaidFinanceChargeAmountField;
}
public set _TotalPrepaidFinanceChargeAmount(value: string)
{
this._TotalPrepaidFinanceChargeAmountField = value;
}
public get APR(): string
{
return this.aPRField;
}
public set APR(value: string)
{
this.aPRField = value;
}
public get _TotalFilingRecordingFeeAmount(): string
{
return this._TotalFilingRecordingFeeAmountField;
}
public set _TotalFilingRecordingFeeAmount(value: string)
{
this._TotalFilingRecordingFeeAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _TOTAL_FEES_PAID_TO 
{
private _TypeField:_TOTAL_FEES_PAID_TO_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _TypeAmountField:string ;
private _IDField:string ;
public get _Type(): _TOTAL_FEES_PAID_TO_Type
{
return this._TypeField;
}
public set _Type(value: _TOTAL_FEES_PAID_TO_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _TypeAmount(): string
{
return this._TypeAmountField;
}
public set _TypeAmount(value: string)
{
this._TypeAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _TOTAL_FEES_PAID_TO_Type {
 Investor,

Other,

Broker,

Lender
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _TOTAL_FEES_PAID_BY 
{
private _TypeField:_TOTAL_FEES_PAID_BY_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private _TypeAmountField:string ;
private _IDField:string ;
public get _Type(): _TOTAL_FEES_PAID_BY_Type
{
return this._TypeField;
}
public set _Type(value: _TOTAL_FEES_PAID_BY_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get _TypeAmount(): string
{
return this._TypeAmountField;
}
public set _TypeAmount(value: string)
{
this._TypeAmountField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum _TOTAL_FEES_PAID_BY_Type {
 Investor,

Seller,

Other,

Broker,

Buyer,

Lender
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SELLER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _POWER_OF_ATTORNEYField:_POWER_OF_ATTORNEY ;
private _FirstNameField:string ;
private _MiddleNameField:string ;
private _LastNameField:string ;
private _NameSuffixField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _SequenceIdentifierField:string ;
private nonPersonEntityIndicatorField:SELLERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _UnparsedNameField:string ;
private _IDField:string ;
private _IdentifierField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _POWER_OF_ATTORNEY(): _POWER_OF_ATTORNEY
{
return this._POWER_OF_ATTORNEYField;
}
public set _POWER_OF_ATTORNEY(value: _POWER_OF_ATTORNEY)
{
this._POWER_OF_ATTORNEYField = value;
}
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
}
public get NonPersonEntityIndicator(): SELLERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: SELLERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _Identifier(): string
{
return this._IdentifierField;
}
public set _Identifier(value: string)
{
this._IdentifierField = value;
} 
}
export enum SELLERNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class SERVICER 
{
private cONTACT_DETAILField:CONTACT_DETAIL ;
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private _QUALIFIED_WRITTEN_REQUEST_MAIL_TOField:_QUALIFIED_WRITTEN_REQUEST_MAIL_TO ;
private _NameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _DaysOfTheWeekDescriptionField:string ;
private _DirectInquiryToDescriptionField:string ;
private _HoursOfTheDayDescriptionField:string ;
private _InquiryTelephoneNumberField:string ;
private _PaymentAcceptanceEndDateField:string ;
private _PaymentAcceptanceStartDateField:string ;
private _TransferEffectiveDateField:string ;
private _TypeField:SERVICER_Type ;
private _TypeFieldSpecified:boolean ;
private _TypeOtherDescriptionField:string ;
private nonPersonEntityIndicatorField:SERVICERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get _QUALIFIED_WRITTEN_REQUEST_MAIL_TO(): _QUALIFIED_WRITTEN_REQUEST_MAIL_TO
{
return this._QUALIFIED_WRITTEN_REQUEST_MAIL_TOField;
}
public set _QUALIFIED_WRITTEN_REQUEST_MAIL_TO(value: _QUALIFIED_WRITTEN_REQUEST_MAIL_TO)
{
this._QUALIFIED_WRITTEN_REQUEST_MAIL_TOField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _DaysOfTheWeekDescription(): string
{
return this._DaysOfTheWeekDescriptionField;
}
public set _DaysOfTheWeekDescription(value: string)
{
this._DaysOfTheWeekDescriptionField = value;
}
public get _DirectInquiryToDescription(): string
{
return this._DirectInquiryToDescriptionField;
}
public set _DirectInquiryToDescription(value: string)
{
this._DirectInquiryToDescriptionField = value;
}
public get _HoursOfTheDayDescription(): string
{
return this._HoursOfTheDayDescriptionField;
}
public set _HoursOfTheDayDescription(value: string)
{
this._HoursOfTheDayDescriptionField = value;
}
public get _InquiryTelephoneNumber(): string
{
return this._InquiryTelephoneNumberField;
}
public set _InquiryTelephoneNumber(value: string)
{
this._InquiryTelephoneNumberField = value;
}
public get _PaymentAcceptanceEndDate(): string
{
return this._PaymentAcceptanceEndDateField;
}
public set _PaymentAcceptanceEndDate(value: string)
{
this._PaymentAcceptanceEndDateField = value;
}
public get _PaymentAcceptanceStartDate(): string
{
return this._PaymentAcceptanceStartDateField;
}
public set _PaymentAcceptanceStartDate(value: string)
{
this._PaymentAcceptanceStartDateField = value;
}
public get _TransferEffectiveDate(): string
{
return this._TransferEffectiveDateField;
}
public set _TransferEffectiveDate(value: string)
{
this._TransferEffectiveDateField = value;
}
public get _Type(): SERVICER_Type
{
return this._TypeField;
}
public set _Type(value: SERVICER_Type)
{
this._TypeField = value;
}
public get _TypeSpecified(): boolean
{
return this._TypeFieldSpecified;
}
public set _TypeSpecified(value: boolean)
{
this._TypeFieldSpecified = value;
}
public get _TypeOtherDescription(): string
{
return this._TypeOtherDescriptionField;
}
public set _TypeOtherDescription(value: string)
{
this._TypeOtherDescriptionField = value;
}
public get NonPersonEntityIndicator(): SERVICERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: SERVICERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class _QUALIFIED_WRITTEN_REQUEST_MAIL_TO 
{
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountryField:string ;
private _IDField:string ;
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
export enum SERVICER_Type {
 Present,

Investor,

Other,

New,

Lender
 }
export enum SERVICERNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class BUILDER 
{
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private cONTACT_DETAILField:CONTACT_DETAIL ;
private _IDField:string ;
private _UnparsedNameField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountyField:string ;
private _CountryField:string ;
private _LicenseStateField:string ;
private _LIcenseIdentifierField:string ;
private nonPersonEntityIndicatorField:BUILDERNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private borrowerSameAsBuilderIndicatorField:BUILDERBorrowerSameAsBuilderIndicator ;
private borrowerSameAsBuilderIndicatorFieldSpecified:boolean ;
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get CONTACT_DETAIL(): CONTACT_DETAIL
{
return this.cONTACT_DETAILField;
}
public set CONTACT_DETAIL(value: CONTACT_DETAIL)
{
this.cONTACT_DETAILField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _LicenseState(): string
{
return this._LicenseStateField;
}
public set _LicenseState(value: string)
{
this._LicenseStateField = value;
}
public get _LIcenseIdentifier(): string
{
return this._LIcenseIdentifierField;
}
public set _LIcenseIdentifier(value: string)
{
this._LIcenseIdentifierField = value;
}
public get NonPersonEntityIndicator(): BUILDERNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: BUILDERNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get BorrowerSameAsBuilderIndicator(): BUILDERBorrowerSameAsBuilderIndicator
{
return this.borrowerSameAsBuilderIndicatorField;
}
public set BorrowerSameAsBuilderIndicator(value: BUILDERBorrowerSameAsBuilderIndicator)
{
this.borrowerSameAsBuilderIndicatorField = value;
}
public get BorrowerSameAsBuilderIndicatorSpecified(): boolean
{
return this.borrowerSameAsBuilderIndicatorFieldSpecified;
}
public set BorrowerSameAsBuilderIndicatorSpecified(value: boolean)
{
this.borrowerSameAsBuilderIndicatorFieldSpecified = value;
} 
}
export enum BUILDERNonPersonEntityIndicator {
 N,

Y
 }
export enum BUILDERBorrowerSameAsBuilderIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class CLOSING_COST 
{
private _IDField:string ;
private _ContributionAmountField:string ;
private _SourceTypeField:CLOSING_COST_SourceType ;
private _SourceTypeFieldSpecified:boolean ;
private _SourceTypeOtherDescriptionField:string ;
private _FundsTypeField:CLOSING_COST_FundsType ;
private _FundsTypeFieldSpecified:boolean ;
private _FundsTypeOtherDescriptionField:string ;
private _FinancedIndicatorField:CLOSING_COST_FinancedIndicator ;
private _FinancedIndicatorFieldSpecified:boolean ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _ContributionAmount(): string
{
return this._ContributionAmountField;
}
public set _ContributionAmount(value: string)
{
this._ContributionAmountField = value;
}
public get _SourceType(): CLOSING_COST_SourceType
{
return this._SourceTypeField;
}
public set _SourceType(value: CLOSING_COST_SourceType)
{
this._SourceTypeField = value;
}
public get _SourceTypeSpecified(): boolean
{
return this._SourceTypeFieldSpecified;
}
public set _SourceTypeSpecified(value: boolean)
{
this._SourceTypeFieldSpecified = value;
}
public get _SourceTypeOtherDescription(): string
{
return this._SourceTypeOtherDescriptionField;
}
public set _SourceTypeOtherDescription(value: string)
{
this._SourceTypeOtherDescriptionField = value;
}
public get _FundsType(): CLOSING_COST_FundsType
{
return this._FundsTypeField;
}
public set _FundsType(value: CLOSING_COST_FundsType)
{
this._FundsTypeField = value;
}
public get _FundsTypeSpecified(): boolean
{
return this._FundsTypeFieldSpecified;
}
public set _FundsTypeSpecified(value: boolean)
{
this._FundsTypeFieldSpecified = value;
}
public get _FundsTypeOtherDescription(): string
{
return this._FundsTypeOtherDescriptionField;
}
public set _FundsTypeOtherDescription(value: string)
{
this._FundsTypeOtherDescriptionField = value;
}
public get _FinancedIndicator(): CLOSING_COST_FinancedIndicator
{
return this._FinancedIndicatorField;
}
public set _FinancedIndicator(value: CLOSING_COST_FinancedIndicator)
{
this._FinancedIndicatorField = value;
}
public get _FinancedIndicatorSpecified(): boolean
{
return this._FinancedIndicatorFieldSpecified;
}
public set _FinancedIndicatorSpecified(value: boolean)
{
this._FinancedIndicatorFieldSpecified = value;
} 
}
export enum CLOSING_COST_SourceType {
 LenderPremium,

Employer,

FederalAgency,

Other,

PropertySeller,

Borrower,

StateAgency,

LocalAgency,

CommunityNonProfit,

ReligiousNonProfit,

MortgageRevenueBond,

Relative
 }
export enum CLOSING_COST_FundsType {
 HousingRelocation,

GiftFunds,

CashOnHand,

StocksAndBonds,

LotEquity,

CreditCard,

EquityOnSoldProperty,

PledgedCollateral,

UnsecuredBorrowedFunds,

Contribution,

DepositOnSalesContract,

LifeInsuranceCashValue,

ForgivableSecuredLoan,

OtherEquity,

Other,

SaleOfChattel,

SecuredLoan,

EquityOnSubjectProperty,

CheckingSavings,

PremiumFunds,

RetirementFunds,

SweatEquity,

SalesPriceAdjustment,

TradeEquity,

EquityOnPendingSale,

TrustFunds,

RentWithOptionToPurchase,

SecondaryFinancing,

BridgeLoan,

MortgageCreditCertificates,

Grant,

CashOrOtherEquity
 }
export enum CLOSING_COST_FinancedIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class TRUST 
{
private nON_PERSON_ENTITY_DETAILField:NON_PERSON_ENTITY_DETAIL ;
private bENEFICIARYField:BENEFICIARY[] ;
private tRUSTEEField:TRUSTEE[] ;
private gRANTORField:GRANTOR[] ;
private _NameField:string ;
private _EstablishedDateField:string ;
private _StateField:string ;
private nonPersonEntityIndicatorField:TRUSTNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _IDField:string ;
public get NON_PERSON_ENTITY_DETAIL(): NON_PERSON_ENTITY_DETAIL
{
return this.nON_PERSON_ENTITY_DETAILField;
}
public set NON_PERSON_ENTITY_DETAIL(value: NON_PERSON_ENTITY_DETAIL)
{
this.nON_PERSON_ENTITY_DETAILField = value;
}
public get BENEFICIARY(): BENEFICIARY[]
{
return this.bENEFICIARYField;
}
public set BENEFICIARY(value: BENEFICIARY[])
{
this.bENEFICIARYField = value;
}
public get TRUSTEE(): TRUSTEE[]
{
return this.tRUSTEEField;
}
public set TRUSTEE(value: TRUSTEE[])
{
this.tRUSTEEField = value;
}
public get GRANTOR(): GRANTOR[]
{
return this.gRANTORField;
}
public set GRANTOR(value: GRANTOR[])
{
this.gRANTORField = value;
}
public get _Name(): string
{
return this._NameField;
}
public set _Name(value: string)
{
this._NameField = value;
}
public get _EstablishedDate(): string
{
return this._EstablishedDateField;
}
public set _EstablishedDate(value: string)
{
this._EstablishedDateField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get NonPersonEntityIndicator(): TRUSTNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: TRUSTNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
} 
}
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class GRANTOR 
{
private _ALIASField:_ALIAS[] ;
private _IDField:string ;
private _StreetAddressField:string ;
private _StreetAddress2Field:string ;
private _CityField:string ;
private _StateField:string ;
private _PostalCodeField:string ;
private _CountyField:string ;
private _CountryField:string ;
private _FirstNameField:string ;
private _MiddleNameField:string ;
private _LastNameField:string ;
private _NameSuffixField:string ;
private _UnparsedNameField:string ;
private _CapacityDescriptionField:string ;
private maritalStatusTypeField:GRANTORMaritalStatusType ;
private maritalStatusTypeFieldSpecified:boolean ;
private nonPersonEntityIndicatorField:GRANTORNonPersonEntityIndicator ;
private nonPersonEntityIndicatorFieldSpecified:boolean ;
private _SequenceIdentifierField:string ;
public get _ALIAS(): _ALIAS[]
{
return this._ALIASField;
}
public set _ALIAS(value: _ALIAS[])
{
this._ALIASField = value;
}
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get _StreetAddress(): string
{
return this._StreetAddressField;
}
public set _StreetAddress(value: string)
{
this._StreetAddressField = value;
}
public get _StreetAddress2(): string
{
return this._StreetAddress2Field;
}
public set _StreetAddress2(value: string)
{
this._StreetAddress2Field = value;
}
public get _City(): string
{
return this._CityField;
}
public set _City(value: string)
{
this._CityField = value;
}
public get _State(): string
{
return this._StateField;
}
public set _State(value: string)
{
this._StateField = value;
}
public get _PostalCode(): string
{
return this._PostalCodeField;
}
public set _PostalCode(value: string)
{
this._PostalCodeField = value;
}
public get _County(): string
{
return this._CountyField;
}
public set _County(value: string)
{
this._CountyField = value;
}
public get _Country(): string
{
return this._CountryField;
}
public set _Country(value: string)
{
this._CountryField = value;
}
public get _FirstName(): string
{
return this._FirstNameField;
}
public set _FirstName(value: string)
{
this._FirstNameField = value;
}
public get _MiddleName(): string
{
return this._MiddleNameField;
}
public set _MiddleName(value: string)
{
this._MiddleNameField = value;
}
public get _LastName(): string
{
return this._LastNameField;
}
public set _LastName(value: string)
{
this._LastNameField = value;
}
public get _NameSuffix(): string
{
return this._NameSuffixField;
}
public set _NameSuffix(value: string)
{
this._NameSuffixField = value;
}
public get _UnparsedName(): string
{
return this._UnparsedNameField;
}
public set _UnparsedName(value: string)
{
this._UnparsedNameField = value;
}
public get _CapacityDescription(): string
{
return this._CapacityDescriptionField;
}
public set _CapacityDescription(value: string)
{
this._CapacityDescriptionField = value;
}
public get MaritalStatusType(): GRANTORMaritalStatusType
{
return this.maritalStatusTypeField;
}
public set MaritalStatusType(value: GRANTORMaritalStatusType)
{
this.maritalStatusTypeField = value;
}
public get MaritalStatusTypeSpecified(): boolean
{
return this.maritalStatusTypeFieldSpecified;
}
public set MaritalStatusTypeSpecified(value: boolean)
{
this.maritalStatusTypeFieldSpecified = value;
}
public get NonPersonEntityIndicator(): GRANTORNonPersonEntityIndicator
{
return this.nonPersonEntityIndicatorField;
}
public set NonPersonEntityIndicator(value: GRANTORNonPersonEntityIndicator)
{
this.nonPersonEntityIndicatorField = value;
}
public get NonPersonEntityIndicatorSpecified(): boolean
{
return this.nonPersonEntityIndicatorFieldSpecified;
}
public set NonPersonEntityIndicatorSpecified(value: boolean)
{
this.nonPersonEntityIndicatorFieldSpecified = value;
}
public get _SequenceIdentifier(): string
{
return this._SequenceIdentifierField;
}
public set _SequenceIdentifier(value: string)
{
this._SequenceIdentifierField = value;
} 
}
export enum GRANTORMaritalStatusType {
 Unknown,

Unmarried,

NotProvided,

Separated,

Divorced,

Married
 }
export enum GRANTORNonPersonEntityIndicator {
 N,

Y
 }
export enum TRUSTNonPersonEntityIndicator {
 N,

Y
 }
/*[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.33440")]
[System.SerializableAttribute()]
[System.Diagnostics.DebuggerStepThroughAttribute()]
[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Xml.Serialization.XmlRootAttribute(Namespace="", IsNullable=false)]*/
export class LOAN_MODIFICATION 
{
private _IDField:string ;
private defaultStatusTypeField:LOAN_MODIFICATIONDefaultStatusType ;
private defaultStatusTypeFieldSpecified:boolean ;
private defaultStatusTypeOtherDescriptionField:string ;
private escrowAccountShortageAmountField:string ;
private escrowAccountShortageRepaymentPeriodYearsCountField:string ;
private escrowNotAllowedIndicatorField:LOAN_MODIFICATIONEscrowNotAllowedIndicator ;
private escrowNotAllowedIndicatorFieldSpecified:boolean ;
private forebearancePrincipalReductionAmountField:string ;
private interestBearingUPBAmountField:string ;
private modificationAdditionalEndorsementIndicatorField:LOAN_MODIFICATIONModificationAdditionalEndorsementIndicator ;
private modificationAdditionalEndorsementIndicatorFieldSpecified:boolean ;
private modificationAgreementAcceptanceCutoffDateField:string ;
private modificationEffectiveDateField:string ;
private modificationEstimatedRequestProcessingDaysCountField:string ;
private modificationSubmissionCutoffDateField:string ;
private modificationTrialPlanEffectiveDateField:string ;
private modificationTrialPlanReturnOfDocumentsCutoffDateField:string ;
private nonInterestBearingUPBAmountField:string ;
private previousChapterSevenBankruptcyDischargeIndicatorField:LOAN_MODIFICATIONPreviousChapterSevenBankruptcyDischargeIndicator ;
private previousChapterSevenBankruptcyDischargeIndicatorFieldSpecified:boolean ;
public get _ID(): string
{
return this._IDField;
}
public set _ID(value: string)
{
this._IDField = value;
}
public get DefaultStatusType(): LOAN_MODIFICATIONDefaultStatusType
{
return this.defaultStatusTypeField;
}
public set DefaultStatusType(value: LOAN_MODIFICATIONDefaultStatusType)
{
this.defaultStatusTypeField = value;
}
public get DefaultStatusTypeSpecified(): boolean
{
return this.defaultStatusTypeFieldSpecified;
}
public set DefaultStatusTypeSpecified(value: boolean)
{
this.defaultStatusTypeFieldSpecified = value;
}
public get DefaultStatusTypeOtherDescription(): string
{
return this.defaultStatusTypeOtherDescriptionField;
}
public set DefaultStatusTypeOtherDescription(value: string)
{
this.defaultStatusTypeOtherDescriptionField = value;
}
public get EscrowAccountShortageAmount(): string
{
return this.escrowAccountShortageAmountField;
}
public set EscrowAccountShortageAmount(value: string)
{
this.escrowAccountShortageAmountField = value;
}
public get EscrowAccountShortageRepaymentPeriodYearsCount(): string
{
return this.escrowAccountShortageRepaymentPeriodYearsCountField;
}
public set EscrowAccountShortageRepaymentPeriodYearsCount(value: string)
{
this.escrowAccountShortageRepaymentPeriodYearsCountField = value;
}
public get EscrowNotAllowedIndicator(): LOAN_MODIFICATIONEscrowNotAllowedIndicator
{
return this.escrowNotAllowedIndicatorField;
}
public set EscrowNotAllowedIndicator(value: LOAN_MODIFICATIONEscrowNotAllowedIndicator)
{
this.escrowNotAllowedIndicatorField = value;
}
public get EscrowNotAllowedIndicatorSpecified(): boolean
{
return this.escrowNotAllowedIndicatorFieldSpecified;
}
public set EscrowNotAllowedIndicatorSpecified(value: boolean)
{
this.escrowNotAllowedIndicatorFieldSpecified = value;
}
public get ForebearancePrincipalReductionAmount(): string
{
return this.forebearancePrincipalReductionAmountField;
}
public set ForebearancePrincipalReductionAmount(value: string)
{
this.forebearancePrincipalReductionAmountField = value;
}
public get InterestBearingUPBAmount(): string
{
return this.interestBearingUPBAmountField;
}
public set InterestBearingUPBAmount(value: string)
{
this.interestBearingUPBAmountField = value;
}
public get ModificationAdditionalEndorsementIndicator(): LOAN_MODIFICATIONModificationAdditionalEndorsementIndicator
{
return this.modificationAdditionalEndorsementIndicatorField;
}
public set ModificationAdditionalEndorsementIndicator(value: LOAN_MODIFICATIONModificationAdditionalEndorsementIndicator)
{
this.modificationAdditionalEndorsementIndicatorField = value;
}
public get ModificationAdditionalEndorsementIndicatorSpecified(): boolean
{
return this.modificationAdditionalEndorsementIndicatorFieldSpecified;
}
public set ModificationAdditionalEndorsementIndicatorSpecified(value: boolean)
{
this.modificationAdditionalEndorsementIndicatorFieldSpecified = value;
}
public get ModificationAgreementAcceptanceCutoffDate(): string
{
return this.modificationAgreementAcceptanceCutoffDateField;
}
public set ModificationAgreementAcceptanceCutoffDate(value: string)
{
this.modificationAgreementAcceptanceCutoffDateField = value;
}
public get ModificationEffectiveDate(): string
{
return this.modificationEffectiveDateField;
}
public set ModificationEffectiveDate(value: string)
{
this.modificationEffectiveDateField = value;
}
public get ModificationEstimatedRequestProcessingDaysCount(): string
{
return this.modificationEstimatedRequestProcessingDaysCountField;
}
public set ModificationEstimatedRequestProcessingDaysCount(value: string)
{
this.modificationEstimatedRequestProcessingDaysCountField = value;
}
public get ModificationSubmissionCutoffDate(): string
{
return this.modificationSubmissionCutoffDateField;
}
public set ModificationSubmissionCutoffDate(value: string)
{
this.modificationSubmissionCutoffDateField = value;
}
public get ModificationTrialPlanEffectiveDate(): string
{
return this.modificationTrialPlanEffectiveDateField;
}
public set ModificationTrialPlanEffectiveDate(value: string)
{
this.modificationTrialPlanEffectiveDateField = value;
}
public get ModificationTrialPlanReturnOfDocumentsCutoffDate(): string
{
return this.modificationTrialPlanReturnOfDocumentsCutoffDateField;
}
public set ModificationTrialPlanReturnOfDocumentsCutoffDate(value: string)
{
this.modificationTrialPlanReturnOfDocumentsCutoffDateField = value;
}
public get NonInterestBearingUPBAmount(): string
{
return this.nonInterestBearingUPBAmountField;
}
public set NonInterestBearingUPBAmount(value: string)
{
this.nonInterestBearingUPBAmountField = value;
}
public get PreviousChapterSevenBankruptcyDischargeIndicator(): LOAN_MODIFICATIONPreviousChapterSevenBankruptcyDischargeIndicator
{
return this.previousChapterSevenBankruptcyDischargeIndicatorField;
}
public set PreviousChapterSevenBankruptcyDischargeIndicator(value: LOAN_MODIFICATIONPreviousChapterSevenBankruptcyDischargeIndicator)
{
this.previousChapterSevenBankruptcyDischargeIndicatorField = value;
}
public get PreviousChapterSevenBankruptcyDischargeIndicatorSpecified(): boolean
{
return this.previousChapterSevenBankruptcyDischargeIndicatorFieldSpecified;
}
public set PreviousChapterSevenBankruptcyDischargeIndicatorSpecified(value: boolean)
{
this.previousChapterSevenBankruptcyDischargeIndicatorFieldSpecified = value;
} 
}
export enum LOAN_MODIFICATIONDefaultStatusType {
 Forbearance,

Bankruptcy,

Other,

Foreclosure,

DefaultImminent,

InDefault
 }
export enum LOAN_MODIFICATIONEscrowNotAllowedIndicator {
 N,

Y
 }
export enum LOAN_MODIFICATIONModificationAdditionalEndorsementIndicator {
 N,

Y
 }
export enum LOAN_MODIFICATIONPreviousChapterSevenBankruptcyDischargeIndicator {
 N,

Y
 }