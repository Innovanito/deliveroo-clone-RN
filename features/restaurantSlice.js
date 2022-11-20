import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  imgUrl: null,
  title: null,
  rating: null,
  genre: null,
  address: null,
  short_description: null,
  dishes: null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant 
    }
  },
})

export const { addToBasket, removeFromBasket } = restaurantSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) => 
  state.basket.items.filter((items) => items.id === id)

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total += item.price, 0)

export default restaurantSlice.reducer