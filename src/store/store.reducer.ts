import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IState} from './store';



const initialState: IState = {
    activeSection: null,
};

export const rootSlice : any  = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setActiveSection: (state: IState, action: PayloadAction<string|null>) => {
            state.activeSection = action.payload;
        },
    },
});

export const {setActiveSection} = rootSlice.actions;

export default rootSlice.reducer;
