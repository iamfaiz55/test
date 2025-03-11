const occurence = (arg)=> {
    const x = {}
    for (let i = 0; i < arg.length; i++) {

        if(x[arg[i]]){
            x[arg[i] = x[i]]
        }else{
            x[arg[i]]= 1
        }
        return x
        
    }
}

console.log(occurence([2 , 5 , 20, 40]));
