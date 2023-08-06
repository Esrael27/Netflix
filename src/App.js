import React from 'react'
import './App.css'
import Row from './Components/Row/Row'
import requests from './Components/Request/Reaquest'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row 
       title ="NETFLIX ORIGINALS"
       fetchUrl = {requests.fetchNetflixOriginals}
       islarge
      />
      <Row
       title ="Trending Now"
       fetchUrl = {requests.fetchTrending}
       />
        <Row
       title ="Top Rated"
       fetchUrl = {requests.fetchTopRatedMovies}
       />
        <Row
       title ="Actions"
       fetchUrl = {requests.fetchActionMovies}
       />
        <Row
       title ="Comedy"
       fetchUrl = {requests.fetchComedyMovies}
       />
        <Row
       title ="Documentaries"
       fetchUrl = {requests.fetchDocumentaries}
       />
        <Row
       title ="Horror"
       fetchUrl = {requests.fetchHorrorMovies}
       />
      

    </div>
    
  )
}

export default App