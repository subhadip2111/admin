// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], // Initialize the state as an empty array
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      // Set the entire user state to the payload
      console.log("data from store", state);
    },
    addUser: (state, action) => {
      state.push(action.payload);
      // Add a new user to the state
      console.log("all suer", state);
    },
    updateUser: (state, action) => {
      const { id, updatedUserData } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedUserData };
      }
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user.id !== userId); // Remove a user by ID
    },
  },
});

export const { addUser, setUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
