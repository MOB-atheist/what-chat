import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    darkTheme: false,
}

export const counterSlice = createSlice({
    name: 'Storage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        Change: (state, provider) => {
            console.log(state)
            state.darkTheme = provider.payload
        }
    },
})

export const { Change } = counterSlice.actions;

export const darkTheme = (state) => state.darkTheme

export default counterSlice.reducer;