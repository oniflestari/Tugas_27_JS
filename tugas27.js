var arr1 = ["No", " rumah saya", 30, "A"];
var arr1_string1 = arr1.slice(0, 2).toString().replace(',', '');
var arr1_string2 = arr1.slice(2).toString().replace(',', '');
var result1 = (arr1_string1 + ' ' + arr1_string2);
console.log(result1);

var arr2 = ["Jalan pangeran Tirtayasa No", 70];
var arr2_string1 = arr2.slice(0, 1).toString().replace(',', '');
var arr2_string2 = arr2.slice(1).toString().replace(',', '');
var result2 = (arr2_string1 + ' ' + arr2_string2);
console.log(result2);