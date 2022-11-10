import { View, Text , TouchableOpacity, Image} from 'react-native'
import Currency from "react-currency-formatter"
import React from 'react'
import {urlFor} from '../sanity'

const DishRow = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity className='bg-white border p-4'>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className='text-gray-400 mt-2'>
          <Currency quantity={price} currency="GBP" />
        </Text>
      </View>
      <View>
        <Image
          style={{
            borderWidth: 1,
            borderColor: '#F3F3F4',
          }}
          source={{url: urlFor(image).url()}}
          className='h-20 w-20 bg-gray-300 p-4'
        />
      </View>
    </TouchableOpacity>
  )
}

export default DishRow