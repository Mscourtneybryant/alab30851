//------------------------------PART ONE------------------------------//

//add up all the numbers in an array to find the sum

function addingArrayNumbers(num1,num2,num3,num4,num5,num6){

    const mathArray = [num1, num2, num3, num4, num5, num6]

    let sum = 0;
    
    for (i = 0; i < mathArray.length; i++){
    
        sum += mathArray[i]
    }
    console.log(`The sum of the numbers in this array is ${sum}.`)
}

(addingArrayNumbers(1,2,1,4,12,20))




//find the average of all the numbers in an array

function findingTheArrayAverage(num1,num2,num3,num4,num5,num6){

    const mathArray2 = [num1, num2, num3, num4, num5, num6]

    let avrg = 0;
    for (i = 0; i < mathArray2.length; i++){
        avrg += mathArray2[i] / mathArray2.length
    }
    console.log(`The average of the numbers is this array is ${avrg}.`)
}

findingTheArrayAverage(1,2,6,4,12,20)



// take an array of strings and return the largest string

let array = ["this", "is", "my", "array", "of", "strings"];
let longestString = array[5];

//loop through the array to find the length of each string

for (i = 0; i < array.length; i++){
console.log(array[i].length)   
}

//print the string with the largest length

if (longestString.length = 7){
    console.log(`The longest string is ${longestString}`)
}



        
         //take an array of strings and a a number. return the strings that are larger than the choosen number

         function checkStringLength (n){
            let myArray = ["this", "is", "my", "array", "of", "strings"];


            for (i = 0; i < 1; i++){
           
                  if(n < myArray[0].length){
                 console.log (`${myArray[0]}, ${myArray[3]}, and ${myArray[5]} are larger strings than ${n}`);
                 }else if (n < myArray[1].length){
                    console.log(`${myArray[0]}, ${myArray[1]}, ${myArray[2]}, ${myArray[3]}, ${myArray[4]}, and ${myArray[5]} are longer strings than ${n}`);
                 }else if(n < myArray[2].length){
                    console.log(`${myArray[0]}, ${myArray[1]}, ${myArray[2]}, ${myArray[3]}, ${myArray[4]}, and ${myArray[5]} are larger strings than ${n}`);
                 }else if(n < myArray[3].length){
                    console.log(`${myArray[3]} and ${myArray[5]} are larger strings than ${n}`);
                 }else if(n < myArray[4].length){
                    console.log(`${myArray[0]}, ${myArray[1]}, ${myArray[2]}, and ${myArray[4]}} are larger strings than ${n}`);
                 }else if (n < myArray[5].length){
                    console.log(`${myArray[5]} is larger a string than ${n}`)
                 }else if(n > myArray[0].length && myArray[1].length && myArray[2].length && myArray[3].length && myArray[4].length && myArray[5].length){
                        console.log(`There is no string with a length larger than ${n}`)
                 }
             }

         }

         checkStringLength(1)




         //use recursion to print number 1 through n

          function printNumbers (num01,num02){
            if (num01 < num02){
               return;
         }
        console.log(num02)
         printNumbers(num01, num02 + 1)}

            const num01 = 20
            printNumbers(num01,1)
            
            


            //sort an array by age            


let residents =  [
   { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
]



              function sortingArr(arrayToSort){
               residents.sort((a,b) => a.age - b.age) 
               console.log(residents) 
              }
  
              sortingArr(residents)


              function removeAgesOver50(arr){
               
               let youngerThan50 = residents.sort((a,b) => a.age - b.age).filter(big => big.age<50)
               console.log(youngerThan50)
              }

              removeAgesOver50(residents)




               //map through the array and change occupation to job


   let columns =  [
   { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
   { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
   { id: "7", name: "Bilbo", occupation: "None", age: "111" }
   ]

const options = columns.map(function(row){
   return {id: row.id, name: row.name, job: row.occupation, age: row.age}
})
console.log(options)


//increment the ages in the array by 1



   let residentsList =  [
      { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
      { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ]
     

 residentsList.forEach((item, key) => {
   item.age = item.age * 1 + 1
 })

 console.log(residentsList)



  //find the sum of all the ages using the reduce method

      
  const sumOfAllResidents = residentsList.reduce((accumulator , item) => accumulator + item.age, 0)

  console.log(sumOfAllResidents)




  //create a function that takes an object and increments its age field



   residents.forEach((item, key) => {
      item.age = item.age * 1 + 1
    })
   
    console.log(residents)
   



 
    //make a copy of the object then increment the age field


    let myResidentsList =  [
      { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
      { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ]
 
   const obj = Object.assign(myResidentsList)
   console.log(obj)


   obj.forEach((item, key) => {
      item.age = item.age * 1 + 1
    })
   
    console.log(obj)
   

