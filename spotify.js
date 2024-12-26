const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
for ( let i=0;i<itCompanies.length;i++)
{
    const cut = itCompanies[i].split('')
    // console.log(cut)
    let count=0
    for( let j=0;j<cut.length;j++)
    {
        if(cut[j]==='o')
        {
            count++
            // console.log(cut[j])
        }
    }
    if(count>=2)
    {
        console.log(itCompanies[i])
    }
}
    itCompanies.slice('Facebook','IBM')
 
 


console.log(itCompanies)