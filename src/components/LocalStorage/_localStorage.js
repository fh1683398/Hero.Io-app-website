export const getItemFromLocalStorage = () => {
    const storedItem = localStorage.getItem("installedApp")

    if(storedItem){
        return(JSON.parse(storedItem))
    }else{
        return []
    }
}

export const setItemToLocalStorage = (id) => {

    const storeApps = getItemFromLocalStorage()

    if(!storeApps.includes(id)){

        storeApps.push(id)
        localStorage.setItem("installedApp", JSON.stringify(storeApps))
    }
}

export const removeFromLocalStorage = (id) => {

    const storedApps = getItemFromLocalStorage().map(Number)
    
    const updatedApps = storedApps.filter(appid => appid !== id)

    localStorage.setItem("installedApp", JSON.stringify(updatedApps))
}