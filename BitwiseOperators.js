function getMaxLessThanK(n, k) 
{
    let max = 0
    for (let i=1; i<= n; i++) 
    {
        for (let j = i+1; j<=n; j++) 
        {
            const val = i & j
            if ((val > max) && (val < k)) 
            {
                (max = val)
            }
        }
    }
    return max
}
