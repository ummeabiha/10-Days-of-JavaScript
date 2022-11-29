/*
 * Create the function factorial here
 */

function factorial(n){
    
    let factorial = 1;
    
    for(let i=1; i<=n; i++){
        factorial *=  i; 
    }
    
    return factorial;
}



function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
