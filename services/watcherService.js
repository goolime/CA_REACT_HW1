import { storageService } from "./async-storage.service.js";

const WATCHERS_KEY = 'watchers';

export const watcherService = {
    getWatchers,
    removeWatcher
};

async function getWatchers() {
    var watchers = await storageService.query(WATCHERS_KEY);
    if (!watchers || watchers.length === 0) 
        watchers = _fillDB()
    return watchers;
}

async function _fillDB() {
    await storageService.post(WATCHERS_KEY, { 
        fullname : 'Puki Ba', 
        movies: ['Rambo', 'Rocky'] 
    });
    await storageService.post(WATCHERS_KEY, {  
        fullname : 'John Doe', 
        movies: ['Inception', 'Interstellar'] 
    });
    await storageService.post(WATCHERS_KEY, {  
        fullname : 'Jane Smith', 
        movies: ['The Matrix', 'John Wick'] 
    });
    return await getWatchers();
}

function removeWatcher(id) {
    return storageService.remove(WATCHERS_KEY, id);
}
