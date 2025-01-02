//For add Item to card
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
}

//For Delete  Item Form  card
export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }
}