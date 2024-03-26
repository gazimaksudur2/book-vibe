const getItem = (id)=>{
    const item = localStorage.getItem(id);
    if(item){
        return JSON.parse(item);
    }
    return [];
}

const setItem = (key, val)=>{
    localStorage.setItem(key, JSON.stringify(val));
}

const addItem = (key, val)=>{
    const prev = getItem(key);
    const nw = [...prev, val];
    setItem(key, nw);
}

const removeItem = (key, val)=>{
    const prev = getItem(key);
    if(prev.includes(val)){
        const nw = prev.filter((ck)=>ck!==val);
        setItem(key, nw);
        return val;
    }else if(val==='all'){
        localStorage.removeItem(key);
        return val;
    }
    return null;
}

const exists = (key, val)=>{
    const prev = getItem(key);
    if(prev.includes(val)){
        return val;
    }
    return null;
}

export { getItem, addItem, removeItem, exists };