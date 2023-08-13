import { createSlice } from "@reduxjs/toolkit";
import { webSocketStatus } from "../../utils/ws-const";


export const webSocketSlice = createSlice({
  name: "webSocket",
  initialState: {
    status: '',
    feed: [],
    orderList: [],
    error: '',
  },
  reducers: {
    addDataFeed(state, action) {
      state.feed = action.payload;
    },
    addDataOrderList(state, action) {
        state.orderList = action.payload;
    }
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase((state, action) => {
//         const buns = action.payload.data.filter(item => item.type === 'bun');
//         state.bun = buns[0];
//       })
//   }
});

export const { reducer: WSReducer, actions: WSActions } = webSocketSlice;