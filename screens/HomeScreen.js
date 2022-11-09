import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline"

import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured"] {
        ...,
        resturants[]->{
          ...,
          dishes[]->
        }
      }`)
      .then((data) => {
        setFeaturedCategories(data)
      }) 
        
  }, [])

  console.log('featuredCategories', featuredCategories)
  
  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className=' flex-row pb-3 items-center mx-4 space-x-2 '>
          <Image
            source={{
              url: "https://links.papareact.com/wru"
            }} 
            className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver now!
            </Text>
            <Text className='font-bold text-xl '>
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"  />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 px-2'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 mb-3 rounded-sm'>
            <MagnifyingGlassIcon color='gray' />
            <TextInput
              placeholder='Search Restuarants and cuisines'
              keyboardType='default'
            />
          </View>
          <View>
            <AdjustmentsHorizontalIcon color='green' />
          </View>
        </View>

        {/* Body */}
        <ScrollView
        contentcontainerstyle={{
          paddingBottom: 100,
        }}
        >
          {/* Categories */}
          <Categories />
        
          {/* Featured */}
          {featuredCategories.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen