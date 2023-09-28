import { createSlice, nanoid } from '@reduxjs/toolkit';

const giftsSlice = createSlice({
    name: 'gifts',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTem(state, action) {
            state.searchTerm = action.payload
        },
        addGift(state, action) {
            // assumption: action.payload will include name/cost properites
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeGift(state, action) {
            // assumption: actionpayload will include id of the gift we want to remove
            const updated = state.data.filter((gift) => {
                return gift.id !== action.payload;
            });
            state.data = updated;
        }
    }
});

export const { changeSearchTem, addGift, removeGift } = giftsSlice.actions;
export const giftsReducer = giftsSlice.reducer;