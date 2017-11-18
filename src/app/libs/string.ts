// If we want to augment one of the global / native modules, like Array, we have to use
// the special "global" module reference.
declare global {
    // If we want to add INSTANCE METHODS to one of the native classes, we have
    // to "declaration merge" an interface into the existing class.
    interface String {
        //  filterMap<T, U>(operator: Operator<T, U>, context?: any): U[];
        toMMDDYYYY(): string;
    }
}

interface StringConstructor {
    toMMDDYYYY(): string;
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



// Augment the global Array prototype (ie, add an instance method).
//Array.prototype.filterMap = filterMap;

export function externString() {
    if (String.prototype.toMMDDYYYY) {

        throw (new Error("Array.prototype.toMMDDYYYY is already defined - overriding it will be dangerous."));

    }
    String.prototype.toMMDDYYYY = toMMDDYYYY;
};
