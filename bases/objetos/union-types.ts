
(()=>{

    type Hero = {
        name: string,
        age?:number,
        powers: number[],
        getNombre?: () => string
    }

    let myCustomVariables: (string | number | Hero) = 'bray'
    console.log(typeof myCustomVariables);
    
    myCustomVariables= 20
    console.log(typeof myCustomVariables)

    myCustomVariables = {
        name: 'bruce',
        age:43,
        powers:[1],
    }
    console.log(typeof myCustomVariables);
    console.log(myCustomVariables);
    
    
    

})()