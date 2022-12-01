function reverseString(s) {
    try
    {
        const splitted= s.split("");
        const reversd= splitted.reverse("");
        const st= reversd.join("");
        console.log(st)
    }
    catch(err)
    {
        console.log(err.message);
        console.log(s);
    }
    
}
