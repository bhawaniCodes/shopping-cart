import { loadState, saveState } from '../utils/localStorage';
import rootReducer from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const persistedState = loadState();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
});

store.subscribe(() => {
    saveState({
        cart: store.getState().cart
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;