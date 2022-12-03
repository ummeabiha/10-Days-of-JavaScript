function getCount(objects) 
{
    let total=0;
    for(let i=0; i<objects.length; i++)
    {
    if(objects[i].x==objects[i].y)
    {
        total++;
    }
    }
    return total;
}
