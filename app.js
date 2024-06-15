function makeIntoOneArray(csv) {
        let array =[]
        let data = csv.split("\n")

    for (let i = 0; i < data.length; i++) {
        let sections = data[i].split(",")
        array.push(sections)
    }
    return array

}



function feelingLoopy(csv ){
        let array = makeIntoOneArray(csv)
        let keys = array[0];
        let result= []
        let finalResult = []

    for (let j =1; j < array.length; j++){
    
    result.push(array[j])

    }
    for (let n = 0; n < result.length; n++){
        let nextResult = result[n]
        const merged = keys.reduce((obj, key, index, i) => ({ ...obj, [key]: nextResult[index]}), {});
        finalResult.push(merged)

    }
    return finalResult
}


feelingLoopy("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")



function sortingAndManipulating(){
let data = feelingLoopy("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")



    console.log(data)
    data.pop([data.length -1])
    console.log(data, "removed last item")


    data.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" })
    console.log(data, "Added Barry at the specific index")




    data.push({ ID: "7", Name: "Bilbo", Occupation: "None",Age: "111" })
    console.log(data, "added  Bilbo")

    let sum =0
    for(let i = 0; i < data.length; i++){
        console.log(data[i].Age)
        sum += parseInt(data[i].Age)
        
    }
    console.log("The average age is " + Math.floor(sum/ data.length))
}

sortingAndManipulating()