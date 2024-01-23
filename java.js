const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateAge = document.getElementById("btn")
const errorTags = document.getElementsByTagName( "h6")
const errorTags1 = document.querySelector(".text1")
const errorTags2 = document.querySelectorAll("input")
const errorTags3 = document.querySelector(".text2")
const errorTags4 = document.querySelector(".text3")
const resultOne = document.getElementById("result1")
const resultTwo = document.getElementById("result2")
const resultThree = document.getElementById("result3")
const actualDate = new Date()
const newAge = new Date(Number(yearInput.value)-1,monthInput.value,dayInput.value);
calculateAge.addEventListener("click",()=>{
    if(yearInput.value === null|| monthInput.value === null|| dayInput.value === null ){
        alert("Input Required")
    }
    else{
    if((actualDate.getFullYear()) < yearInput.value){
        const newArray3 = Array.from(errorTags4)
        newArray3.forEach(element => element.style.color = 'red')
        errorTags4.style.display = 'block'
        const newArray1 = Array.from(errorTags2)
        newArray1.forEach(element => element.style.border = '2px red solid')
        const newArray2 = Array.from(errorTags)
        newArray2.forEach(element => element.style.color = 'red')
        if(((Number(monthInput.value))-1) > 11){
            const newArray = Array.from(errorTags3)
            newArray.forEach(element => element.style.color = 'none')
            errorTags3.style.display = 'none'}
            if((Number(dayInput.value)) > 30){
                const newArray4 = Array.from(errorTags1)
                newArray4.forEach(element => element.style.color = 'none')
                errorTags1.style.display = 'none'}
    }
    else{
    if(((Number(monthInput.value))-1) > 11){
            const newArray = Array.from(errorTags3)
            newArray.forEach(element => element.style.color = 'red')
            errorTags3.style.display = 'block'
            const newArray1 = Array.from(errorTags2)
            newArray1.forEach(element => element.style.border = '2px red solid')
            const newArray2 = Array.from(errorTags)
            newArray2.forEach(element => element.style.color = 'red')
            if((actualDate.getFullYear()) < yearInput.value){
                const newArray3 = Array.from(errorTags4)
                newArray3.forEach(element => element.style.color = 'none')
                errorTags4.style.display = 'none'}
                if((Number(dayInput.value)) > 30){
                    const newArray4 = Array.from(errorTags1)
                    newArray4.forEach(element => element.style.color = 'none')
                    errorTags1.style.display = 'none'}
     }
     else{
     if((Number(dayInput.value)) > 31){
            const newArray4 = Array.from(errorTags1)
            newArray4.forEach(element => element.style.color = 'red')
            errorTags1.style.display = 'block'
            const newArray1 = Array.from(errorTags2)
            newArray1.forEach(element => element.style.border = '2px red solid')
            const newArray2 = Array.from(errorTags)
            newArray2.forEach(element => element.style.color = 'red')
            if(((Number(monthInput.value))-1) > 11){
                const newArray = Array.from(errorTags3)
                newArray.forEach(element => element.style.color = 'none')
                if((actualDate.getFullYear()) < yearInput.value){
                    const newArray3 = Array.from(errorTags4)
                    newArray3.forEach(element => element.style.color = 'none')
                    errorTags4.style.display = 'none'}
                errorTags3.style.display = 'none'}
        }
     else if((Number(monthInput.value)-1) === 3 || 
       (Number(monthInput.value)-1)=== 5 ||
       (Number(monthInput.value)-1) === 8 ||
       (Number(monthInput.value)-1) === 10){
        if((Number(dayInput.value)) > 30){
            const newArray4 = Array.from(errorTags1)
            newArray4.forEach(element => element.style.color = 'red')
            errorTags1.style.display = 'block'
            const newArray5 = Array.from(errorTags2)
            newArray5.forEach(element => element.style.border = '2px red solid')
            const newArray6 = Array.from(errorTags)
            newArray6.forEach(element => element.style.color = 'red')
            if((actualDate.getFullYear()) < yearInput.value){
                const newArray3 = Array.from(errorTags4)
                newArray3.forEach(element => element.style.color = 'none')
                errorTags4.style.display = 'none'}
                if(((Number(monthInput.value))-1) > 11){
                    const newArray = Array.from(errorTags3)
                    newArray.forEach(element => element.style.color = 'none')
                    errorTags3.style.display = 'none'}
                    if((Number(dayInput.value)) > 31){
                        const newArray4 = Array.from(errorTags1)
                        newArray4.forEach(element => element.style.color = 'none')
                        errorTags1.style.display = 'none'}
        }
        else{
            const resultAge = new Date()
            const inputDate = new Date(yearInput.value, monthInput.value, dayInput.value)
            const age = resultAge - inputDate
            const year = age/(1000 * 60 * 60 * 24 *365)
            const yearApp = Math.floor(year)
            const month = (year - yearApp) * 12
            const monthApp = Math.floor(month)
            let day = month - monthApp
            day = Math.floor(day * 31)
            resultOne.innerHTML = yearApp
            resultTwo.innerHTML = monthApp
            resultThree.innerHTML = day
            const newArray7 = Array.from(errorTags1)
            newArray7.forEach(element => element.style.color = 'black')
            errorTags1.style.display = 'none'
            const newArray10 = Array.from(errorTags2)
            newArray10.forEach(element => element.style.border = '2px black solid')
            const newArray3 = Array.from(errorTags4)
                newArray3.forEach(element => element.style.color = 'black')
                errorTags4.style.display = 'none'
                const newArray1 = Array.from(errorTags2)
                newArray1.forEach(element => element.style.border = '2px black solid')
                const newArray2 = Array.from(errorTags)
                newArray2.forEach(element => element.style.color = 'black')
                const newArray = Array.from(errorTags3)
                newArray.forEach(element => element.style.color = 'black')
                errorTags3.style.display = 'none'
                const newArray4 = Array.from(errorTags1)
                newArray4.forEach(element => element.style.color = 'black')
                errorTags1.style.display = 'none'
                const newArray5 = Array.from(errorTags2)
                newArray5.forEach(element => element.style.border = '2px black solid')
                const newArray6 = Array.from(errorTags)
                newArray6.forEach(element => element.style.color = 'black')
                
            }
    }

    else if((Number(monthInput.value)-1) === 1 ){
    if((Number(dayInput.value)) > 29){
        const newArray7 = Array.from(errorTags1)
        newArray7.forEach(element => element.style.color = 'red')
        errorTags1.style.display = 'block'
        const newArray10 = Array.from(errorTags2)
        newArray10.forEach(element => element.style.border = '2px red solid')
    }
    else{
        const resultAge = new Date()
        const inputDate = new Date(yearInput.value, monthInput.value, dayInput.value)
        const age = resultAge - inputDate
        const year = age/(1000 * 60 * 60 * 24 *365)
        const yearApp = Math.floor(year)
        const month = (year - yearApp) * 12
        const monthApp = Math.floor(month)
        let day = month - monthApp
        day = Math.floor(day * 31)
        resultOne.innerHTML = yearApp
        resultTwo.innerHTML = monthApp
        resultThree.innerHTML = day
        const newArray7 = Array.from(errorTags1)
        newArray7.forEach(element => element.style.color = 'black')
        errorTags1.style.display = 'none'
        const newArray10 = Array.from(errorTags2)
        newArray10.forEach(element => element.style.border = '2px black solid')
        const newArray3 = Array.from(errorTags4)
            newArray3.forEach(element => element.style.color = 'black')
            errorTags4.style.display = 'none'
            const newArray1 = Array.from(errorTags2)
            newArray1.forEach(element => element.style.border = '2px black solid')
            const newArray2 = Array.from(errorTags)
            newArray2.forEach(element => element.style.color = 'black')
            const newArray = Array.from(errorTags3)
            newArray.forEach(element => element.style.color = 'black')
            errorTags3.style.display = 'none'
            const newArray4 = Array.from(errorTags1)
            newArray4.forEach(element => element.style.color = 'black')
            errorTags1.style.display = 'none'
            const newArray5 = Array.from(errorTags2)
            newArray5.forEach(element => element.style.border = '2px black solid')
            const newArray6 = Array.from(errorTags)
            newArray6.forEach(element => element.style.color = 'black')
        }
   }
   else{
    const inputDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    const ageInMilliseconds = actualDate - inputDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; 
    const years = ageInMilliseconds / millisecondsInYear;
    const yearsFloored = Math.floor(years);
    const remainingMilliseconds = ageInMilliseconds - yearsFloored * millisecondsInYear;
    const months = remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
    const monthsFloored = Math.floor(months);
    const remainingDays = ageInMilliseconds - yearsFloored * millisecondsInYear - monthsFloored * (1000 * 60 * 60 * 24 * 30.44);
    const daysFloored = Math.floor(remainingDays / (1000 * 60 * 60 * 24));
    resultOne.innerHTML = yearsFloored;
    resultTwo.innerHTML = monthsFloored;
    resultThree.innerHTML = daysFloored;
    const newArray7 = Array.from(errorTags1)
    newArray7.forEach(element => element.style.color = 'black')
    errorTags1.style.display = 'none'
    const newArray10 = Array.from(errorTags2)
    newArray10.forEach(element => element.style.border = '2px black solid')
    const newArray3 = Array.from(errorTags4)
        newArray3.forEach(element => element.style.color = 'black')
        errorTags4.style.display = 'none'
        const newArray1 = Array.from(errorTags2)
        newArray1.forEach(element => element.style.border = '2px black solid')
        const newArray2 = Array.from(errorTags)
        newArray2.forEach(element => element.style.color = 'black')
        const newArray = Array.from(errorTags3)
        newArray.forEach(element => element.style.color = 'black')
        errorTags3.style.display = 'none'
        const newArray4 = Array.from(errorTags1)
        newArray4.forEach(element => element.style.color = 'black')
        errorTags1.style.display = 'none'
        const newArray5 = Array.from(errorTags2)
        newArray5.forEach(element => element.style.border = '2px black solid')
        const newArray6 = Array.from(errorTags)
        newArray6.forEach(element => element.style.color = 'black')
        
    }
}}}})


   