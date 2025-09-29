import React from 'react'
import Heroheader from '../Home/Heroheader';
import Getquote from '../Home/Getquote';
import Aboutus from '../Home/Aboutus';
import Imageinfo from '../Home/Imageinfo';
import Activity from '../Home/Activity';
import Cardsection from '../Home/Cardsection';
import Testimonials from '../Home/Testimonials';
import Blog from '../Home/Blog';
import Textsection from '../Home/Textsection';
import Contact from '../Home/Contact';
const Home = () => {
  return (
    <div>
      <Heroheader/>
      <Activity />
      <Aboutus/>
      <Getquote/>
      <Imageinfo />
      <Cardsection />
      <Testimonials />
      <Blog />
      <Textsection />
      <Contact />
    </div>
  )
}

export default Home;
