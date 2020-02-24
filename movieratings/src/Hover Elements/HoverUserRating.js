
//Fix so movies looked at but not rated also returns something 

export default function HoverUserRating(id){
    let storageInfo = JSON.parse(localStorage.getItem(id))
    if(storageInfo !== null ) {
        return storageInfo.rating
    } else {
        return "-"
    }
    
}