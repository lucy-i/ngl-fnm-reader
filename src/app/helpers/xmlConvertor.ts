const startConvertion = (dd: any | any[], rootEleName: string): HTMLElement => {
    console.log("startConvertion for {0}",rootEleName);
  let root: HTMLElement;
  if (Array.isArray(dd)) {
    root = document.createElement(rootEleName + "s");
    dd.forEach(element => {
      root.appendChild(startConvertion(element, rootEleName));
    });
  }else  if (typeof dd === "object") {
    root = document.createElement(rootEleName);
    for (var key in dd) {
      if (dd.hasOwnProperty(key)) {
        var element = dd[key];
        if (typeof element === "object" || Array.isArray(element)) {
          root.appendChild(startConvertion(element, key));
        } else {
          root.setAttribute(key, dd[key]);
        }
      }
    }
  } 
  return root;
};

export const convert = (dd: any | any[], rootEleName: string): string => {
    console.log("convert");
  return startConvertion(dd, rootEleName).innerHTML;
  
};
