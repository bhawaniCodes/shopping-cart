

export const loadState = () => {
    try {
        const state = localStorage.getItem('reduxState');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (error) {
        console.error('Could not load state', error);
        return undefined;
    }

}

export const saveState = (state: any) => {
    try {
        localStorage.setItem('reduxState', JSON.stringify(state));
    } catch (error) {
        console.error('Could not save state', error);
    }
}