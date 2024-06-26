import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import {  useNavigate } from 'react-router-dom'


export default function Home() {
  const[search,setSearch] = useState('')
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([])

  const navigate = useNavigate();

  const password = localStorage.getItem("authToken");
  if(!password){
    navigate('/login');
  }
  
  const loadData = async () => {
    let response = await fetch("https://wefoodbackend.vercel.app/api/foodData");

    response = await response.json()

    setfoodItem(response[0])
    setfoodCat(response[1])

  }

  useEffect(() => {
    loadData()
  }, [])




  return (
    <div>
      <div> <Navbar /> </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div class="d-flex justify-content-center">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x700/?food" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?food" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?food" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
      <div className='conatainer m-3'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3'>{data.CategoryName}</div>
                  <hr />
                  {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      )
                    }) : <div>NO such Data found</div>}
                </div>
              )
            })
            : <div>""""""""""""</div>
        }
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
