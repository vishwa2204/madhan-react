import React from 'react'
import '../assets/all-css/style.css'
import banner1 from '../assets/images/banner/2.jpg'
import banner2 from '../assets/images/banner/1.jpeg'
import { Link } from 'react-router-dom';


function Home() {
  return (

    <>
      {/* Banner Section Start */}

      <section className="home-banner">
        <div className="home-banner-container">
          <img src={banner1} alt="banner" />
        </div>
      </section>

      {/* Banner Section End */}

      {/* Home About Section Start */}

      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-aboout-content">
            <h2>Madhan Sundar</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima quam ab dolorum animi. Corrupti, a beatae? Perspiciatis ex modi dolorem iure quasi? Perspiciatis, porro quisquam? Quidem vel dicta minus, nisi at placeat ipsum odio officiis sit illum sapiente, veniam tempore ut nobis laboriosam qui magnam possimus cupiditate earum natus modi voluptate! Voluptatem veritatis fugiat omnis numquam harum dolor odio adipisci, rem doloribus ex hic, quaerat ipsam dolore dolorum consectetur? Possimus voluptatem, consectetur repudiandae facilis mollitia laborum cumque sit modi.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque animi nisi blanditiis! Sapiente fugit sint vel hic modi aut maxime magnam reprehenderit voluptatibus aliquam amet corrupti dolorum officiis, provident nulla sit harum repellat praesentium! Pariatur quidem obcaecati quae, nulla cupiditate aliquid aperiam facilis expedita, accusantium atque magni doloribus nobis quas voluptate repellendus eligendi recusandae quisquam repudiandae quod voluptatibus neque quo veritatis praesentium distinctio. Esse expedita, maxime quasi perferendis asperiores recusandae, est unde, consequuntur odio libero quibusdam quod eos adipisci ducimus? Eum magnam enim delectus aliquid, dolor quis inventore quod aut nulla odio perspiciatis sequi pariatur natus porro iusto aliquam?</p>
          </div>
          <div className="home-about-images">
            <img src={banner2} alt="home-about" />
          </div>
        </div>
      </section>

      {/* Home About Section End */}

    </>
  )
}

export default Home;