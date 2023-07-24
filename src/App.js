import React from 'react';
import CaptionCarousel from './components/slider/Slider'
import Navbar from "./components/navbar/Navbar"
import MyCard from "./components/card/Card"
import Footer from "./components/footer/Footer"
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <div>
      <Navbar />
      <CaptionCarousel />
      <Box pb={10} display="grid" gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        <MyCard img={'https://i.ibb.co/CPpZKyd/IMG-20230717-WA0015.jpg'} text={'शिव जी की 51 फिट की प्रतिमा स्थापना हेतु कार्य तेज़ी से प्रारंभ'} />
        <MyCard img={'https://i.ibb.co/0ZSBYj0/IMG-20230717-WA0007.jpg'} text={'5 सालो में हुए विकास कार्यों का विवरण 5 सालो में हुए विकास'} />
        <MyCard img={'https://i.ibb.co/Y281ycx/IMG-20230717-WA0013.jpg'} text={'जुन्नारदेव नगर मध्य में फ्लाईओवर का कार्य तेज़ी से प्रारंभ'} />
        <MyCard img={'https://i.ibb.co/cyZ07Lc/IMG-20230718-WA0001.jpg'} text={'विधानसभा क्षेत्र में अनेक ओपन जिम का निर्माण कार्य'} />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
