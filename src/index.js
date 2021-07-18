
module.exports = function toReadable (number) {
    const A = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const B = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const C = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const D = ' hundred';
    const E = 'zero';
    const index_1 = ~~(number/100);
    const N1 = number - (100 * index_1);
    const index_2 = ~~(N1/10);
    const index_3 = N1 - (10 * index_2);
        
    if (number === 0) {
        const result = E;  
        return result; //0        
        } 

    else if ((index_1 === 0)&&(index_2 === 0)&&(index_3 !== 0))  {
        const result = A[index_3];
        return result; //2          
        }
    else if ((index_1 === 0)&&(index_2 === 1))  {
        const result = B[index_3];
        return result; //12        
        }
    else if ((index_1 === 0)&&(index_2 > 1)&&(index_3 === 0))  {
        const result = C[index_2];
        return result; //20           
        }
    else if ((index_1 === 0)&&(index_2 > 1)&&(index_3 > 0))  {
        const result = C[index_2] + ' ' + A[index_3];
        return result; //22           
        }
    else if ((index_1 !== 0)&&(index_2 === 0)&&(index_3 === 0))  {
        const result = A[index_1]+ D;
        return result; //200           
        }
    else if ((index_1 !== 0)&&(index_2 === 0))  {
        const result = A[index_1] + D + ' ' + A[index_3];
        return result; //202
        }
    else if ((index_1 !== 0)&&(index_2 === 1))  {
        const result = A[index_1] + D + ' ' + B[index_3];
        return result; //212
        }
    else if ((index_1 !== 0)&&(index_2 > 1)&&(index_3 === 0))  {
        const result = A[index_1] + D + ' ' + C[index_2];
        return result; //220
        }
    else if ((index_1 > 0)&&(index_2 > 1)&&(index_3 > 0))  {
        const result = A[index_1] + D + ' ' + C[index_2]+ ' ' + A[index_3];
        return result; //222
        }
       
}

     
   

