function unique(arr) {
   return Array.from(new Set(arr));
}

let relatives = ["mother" ,"father","son", "daughter", "son","grandmother","father"];

console.log( unique(relatives ) ); 