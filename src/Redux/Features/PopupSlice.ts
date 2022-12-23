import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {isShow: boolean} = {
    isShow : false
}

const popupSlice = createSlice({
    name: 'toast',
    initialState,
    reducers : {
        setIsShow: (state , action: PayloadAction<boolean>)=> {
            state.isShow = action.payload
        }
    }

})

export default popupSlice.reducer
export const { setIsShow } = popupSlice.actions