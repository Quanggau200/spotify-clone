
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//  var item = webTechs.indexOf('Sass')
 
//   if(item===-1)
//   {
//     console.log ('khong co trong mang')
//     webTechs.push('Sass')
//   }
//   else
//   {
//     console.log('co o trong mang')
//   }
//   console.log(webTechs)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// console.log (fullstack= frontEnd.concat.backEnd)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let max=19
let min=19
for(let i=0;i<ages.length;i++)
  {
     if(ages[i]>max)
     {
        max=ages[i]
     }
     if(ages[i]<min)
      {
         min=ages[i]
      }
  }
  console.log(max,min)


  let summin=0
  let countmin=0

  const minage= ages.slice(0,5)
  for(let i=0;i<minage.length;i++)
    {
      summin= summin+minage[i]
      countmin++
    }
  let avgmin = summin/countmin
  console.log(avgmin)


  const maxage= ages.slice(5,10)
  let summax=0
  let countmax=0
  for(let i=0;i<maxage.length;i++)
    {
       summax=summax+maxage[i]
       countmax++
    }
    let avgmax = summax/countmax
    console.log(avgmax)




console.log(ages)
let sum=0
let count=0
for(let i=0;i<ages.length;i++)
{
   sum=sum+ages[i]
   count++
}
let avg = sum/count
console.log(avg)


let minabs= Math.abs(avgmin)
let maxabs= Math.abs(avgmax)
if(avgmax<avgmin)
{
  console.log('tuổi trung bình cao bé hơn tuổi trung bình thấp')
}
else
{
  console.log('tuổi trung bình cao lon hơn tuổi trung bình thấp')
}





