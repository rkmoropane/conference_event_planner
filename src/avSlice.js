import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
		img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
		name: "Projectors",
		cost: 200,
		quantity: 0,
	},
    {
		img: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_1280.jpg",
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    {
		img: "https://cdn.pixabay.com/photo/2020/06/25/17/57/microphone-5340340_1280.jpg",
		name: "Microphones",
		cost: 45,
		quantity: 0,
    },
    {
		img: "https://cdn.pixabay.com/photo/2018/03/07/02/31/whiteboard-3205088_1280.jpg",
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },

    {
		img: "https://cdn.pixabay.com/photo/2016/11/23/17/22/open-1853924_1280.jpg",
		name: "Signage",
		cost: 80,
		quantity: 0,
    },

    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }      
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
