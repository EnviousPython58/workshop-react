export const searchingFor =(text)=>{
    return function(x,i){
        return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}