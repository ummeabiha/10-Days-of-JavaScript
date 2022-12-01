function getLetter(s) {
    let letter;
    const A = 'aeiou';
    const B = 'bcdfg';
    const C = 'hjklm';      
    switch(true){
        case A.includes(s.charAt(0)):
            letter='A';
            break;
        case B.includes(s.charAt(0)):
            letter='B';
            break;
        case C.includes(s.charAt(0)):
            letter='C';
            break;
        default:
            letter='D';
            break;
}
  
    return letter;
}
