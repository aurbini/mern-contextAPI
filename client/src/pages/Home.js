import React from 'react';
import ShoppingList from '../components/ShoppingList'
import ModalOne from '../components/Modal'

const Home = () => {
  return ( 
    <div>
      <ModalOne /> 
      <ShoppingList />
    </div> 
   );
}
 
export default Home;