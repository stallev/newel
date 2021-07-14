//конвертируем коллекцию в массив
function convertToArray(collection){
 let newArray = Array.prototype.slice.call(collection);
 return newArray;
}