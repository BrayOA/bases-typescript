(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volvanNegro: string = `Volcan Negro`;


    console.log(`I'm ${batman}`);
    console.log( batman.toUpperCase() );
    
    console.log(batman[10]?.toUpperCase() ||'no esta presente');
    


})()