export const useLocalStorage = (key, value = null) => {
    const item = localStorage.getItem(key);
    
    if(item) {
        return JSON.parse(item);
    } else if (value) {
        const valueParsed = JSON.stringify(value);
        localStorage.setItem(key, valueParsed);
    }
}

export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
}

export const clearLocalStorage = () => {
    localStorage.clear();
}
