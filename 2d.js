//Returning array values under 70 by 2
const ages = [25,31,42,77];


let d = ages.map((item)=>{
    if (item < 70)
    return item * 2;
    else
    
    return item;
})
//Values multiplied by 2 
console.log(d);