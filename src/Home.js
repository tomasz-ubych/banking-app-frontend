import axios from 'axios';
import React from 'react';

function Home() {
  return   <div className='home'>
  <h1>Po czym chcesz wyszukać klienta?</h1>
<input type="radio" value="Pesel" name="searchParameter" /> Pesel
<input type="radio" value="Id" name="searchParameter"/> Id
<div> 
  <input type="text"/>
</div>
<button onClick={getCustomers}> Pobierz dane klienta </button>
</div>;
}

function getCustomers(){
  axios('http://localhost:8088/customer')
  .then(response => this.setState({
    customers : response.data._embedded.customer
  }));
  console.log('dd');
}
export default Home;