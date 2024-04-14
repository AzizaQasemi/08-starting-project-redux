import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { createStore } from 'redux'

const counterSlice = createSlice({
   name: 'counter',
   initialState: {counter: 0, showCounter: true},
   reducers: {
      increment(state) {
         state.counter++
      },
      dicrement(state) {
         state.counter--
      },
      increase(state, actions) {
         state.counter = state.counter + actions.payload
      },
      toggleCounter(state) {
         state.toggleCounter = !state.toggleCounter
      }
   }
})

const store = configureStore({reducer: counterSlice.reducer})

export const counterActions = counterSlice.actions
export default store