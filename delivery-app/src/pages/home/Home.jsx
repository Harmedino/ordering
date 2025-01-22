import { useState } from 'react'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/explore-menu/ExploreMenu'
import './Home.css'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

const Home = () => {

    const [category,setCategory] = useState("All")
  return (
      <div>
          <Header />
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
    </div>
  )
}

export default Home