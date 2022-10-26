import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentcontainerstyle={{
        paddingHorizonal: 15,
        paddingTop: 10,
      }}
      horizontal
      showhorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title="Testing"
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/wru'
        title="Testing"
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/wru'
        title="Testing"
      />
    </ScrollView>
  )
}

export default Categories