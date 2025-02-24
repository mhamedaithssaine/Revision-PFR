// day_1 Exercice niveau 1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  


  //- Declare an empty array

  const arrayEmpty=[];

 //- Declare an array with more than 5 number of elements

 const array =['kelaat mgouna','Chmaaia','Casa','ilyass','ihyaa','salma','hmou'];

 //- Find the length of your array

 const lenthArray = array.length;
//  console.log(lenthArray);


// - Get the first item, the middle item and the last item of the array

const firstItem = array[array.length - array.length];

// console.log(firstItem);

// GET THE MIDLLE ITEM 
const middleItem = array[(array.length-1)/2];
// console.log(middleItem);

//GET THE LAST ITEM
const lastItem = array[(array.length-1)];
// console.log(lastItem);

//- Declare an array called `mixedDataTypes`, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes=[5,['m','f'],{name:"yahya",age:22},{name:"salma",age:21},true,'full Stack'];
const lengthMixedDatatypes = mixedDataTypes.length;
// console.log(lengthMixedDatatypes);

// - Declare an array variable name `itCompanies` and assign initial values `Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle` and `Amazon`


const itCompanies = ['facebook','google','Microsoft','apple','ibm','oracle','amazon'];

// console.log(itCompanies);

//- Print the number of companies in the array

const numberCompany = itCompanies.length;
// console.log(numberCompany);

// - Print the first company, middle and last company

const firstCompany = itCompanies[0];
// console.log(firstCompany);

const middleCompany = itCompanies[(itCompanies.length-1)/2];
// console.log(middleCompany);

const lastCompany = itCompanies[itCompanies.length-1];
// console.log(lastCompany);

// - Print out each company
itCompanies.forEach(Element => {
  // console.log(Element);
});

// - Change each company name to uppercase one by one and print them out

const uppecase= itCompanies.map(e => 
   e.toUpperCase());

// console.log(uppecase);










