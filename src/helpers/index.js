export const searchingFor =(text)=>{
    return function(x,i){
        return x.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}