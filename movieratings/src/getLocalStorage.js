// "fetches" localStorage items and sorts them into an array based on userRating

export function getLocalStorage(){
    var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
  
        for (; key = keys[i]; i++) {
            
                archive.push(JSON.parse(localStorage.getItem(key)))
            
            
            
    }

    
    archive.sort((a, b) => {
        if (a.rating !== b.rating) return b.rating - a.rating;
      })
    
    
  
    console.log(archive)
    return archive
  }

 