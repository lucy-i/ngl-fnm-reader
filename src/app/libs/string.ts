// If we want to augment one of the global / native modules, like Array, we have to use
// the special "global" module reference.
declare global {
    // If we want to add INSTANCE METHODS to one of the native classes, we have
    // to "declaration merge" an interface into the existing class.
    interface String {
        //  filterMap<T, U>(operator: Operator<T, U>, context?: any): U[];
        toMMDDYYYY(): string;
        toCCMMDDYYYY(): string;
        getEmptyStr(length: number): string;
        fillString(length: number, preSpace?: boolean): string;
    }
}

interface StringConstructor {
    toMMDDYYYY(): string;
    toCCMMDDYYYY(): string;
    getEmptyStr(length: number): string;
    fillString(length: number, preSpace?: boolean): string;
}

// I map the contextual collection onto another collection by appending defined results
// of the operation onto the mapped collection. This means that "undefined" results will
// be omitted from the mapped collection.
// --
// CAUTION: Augmentations for the global scope can only be directly nested in external
// modules or ambient module declarations. As such, we are EXPORTING this function to
// force this file to become an "external module" (one that imports or exports other
// modules).
export function toMMDDYYYY(this) {
    if (!this)
        return this;
    if (typeof this === "string") {
        return this.substr(4, 2) + "/" + this.substr(6, 2) + "/" + this.substr(0, 4);
    }
}
export function toCCMMDDYYYY(this: string) {
    if (!this)
        return this;
    if (typeof this === "string") {
        try {
            let dateStr: string[] = this.split('/');
            return dateStr[2] + dateStr[0] + dateStr[1];
        } catch (error) {
            console.error(error);
            return this;
        }
    }
}
export function getEmptyStr(length: number): string {
    let strvalue: string = '';
    for (let index = 0; index < length; index++) {
        strvalue = strvalue + ' ';
    }
    return strvalue;
}
export function fillString(length: number, preSpace?: boolean): string {
    let tempStr = this;
    if (tempStr.length < length) {
        if (preSpace)
            tempStr = tempStr.getEmptyStr(length - this.length) + tempStr;
        else
            tempStr += tempStr.getEmptyStr(length - this.length);
    }
    return tempStr;
}



// Augment the global Array prototype (ie, add an instance method).
//Array.prototype.filterMap = filterMap;

export function externString() {
    if (String.prototype.toMMDDYYYY) {

        throw (new Error("Array.prototype.toMMDDYYYY is already defined - overriding it will be dangerous."));

    }
    String.prototype.toMMDDYYYY = toMMDDYYYY;
    if (String.prototype.toCCMMDDYYYY) {

        throw (new Error("Array.prototype.toCCMMDDYYYY is already defined - overriding it will be dangerous."));

    }
    String.prototype.toCCMMDDYYYY = toCCMMDDYYYY;
    if (String.prototype.getEmptyStr) {

        throw (new Error("Array.prototype.getEmptyStr is already defined - overriding it will be dangerous."));

    }
    String.prototype.getEmptyStr = getEmptyStr;
    if (String.prototype.fillString) {

        throw (new Error("Array.prototype.fillString is already defined - overriding it will be dangerous."));

    }
    String.prototype.fillString = fillString;

};
