

export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const loadData = (key) => {

    try {
        let data = JSON.parse(localStorage.getItem(key));
        return data;
    }
    catch (error) {
        return error
    }
}