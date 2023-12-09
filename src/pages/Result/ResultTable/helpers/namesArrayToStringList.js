export const namesArrayToStringList = (array) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
     result += `${i + 1}. ${array[i]} \n`;
    }
    return result;
   };