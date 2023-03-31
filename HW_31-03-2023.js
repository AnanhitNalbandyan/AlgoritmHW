
//!Реализуйте программу, которая принимает на вход строку и 
//!возвращает список букв и то как часто они в этой строке встречаются
//Пример:
//Входные данные: "абракадабра"
//Выходные данные: "а" : 5 , "б" : 2 , "р" : 2 , "к" : 1 , "д" : 1

const makerString =(str)=>{
    const strArr= str.split('').sort().reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {})    

    return strArr
}
console.log(makerString('abrakadabra'));
