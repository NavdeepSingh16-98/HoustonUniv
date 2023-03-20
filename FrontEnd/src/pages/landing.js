import React,{ useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

function Index(){
	const [name, setName] = useState({});
    
  return (
    <body>
    <Header />
        <Landing />
    <Footer />
</body>
  );
}

export default Index;