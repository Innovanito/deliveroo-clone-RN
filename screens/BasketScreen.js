import { View, Text } from 'react-native'
import React ,{ useMemo , useState } from 'react'
import {useNavigation} from "@react-navigation/native"
import {selectRestaurant} from "../features/restaurantSlice"
import { selectBasketItems } from '../features/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)

  const [groundItemsInBasket, setGroundItemsInBasket] = useState([])

  const dispatch = useDispatch()

  useMemo(() => {


  },[items])
  
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen