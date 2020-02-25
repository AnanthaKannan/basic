// @ts-check
const data = `https://edabit.com?a=1&b=2&a=2`
const split = data.split('?')[1]
if(split){
    console.log(split)
}