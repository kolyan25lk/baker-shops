import React, {useRef, useState} from 'react';
import Provider from './containers/context';
import Header from './containers/header';
import Product from './containers/product';
import Order from './containers/order';
import Posts from './containers/posts';
import Footer from './containers/footer';
import Modal from './containers/modal/modal';


function App() {
  const [modalActive, setModalActive] = useState(false);
  const productRef = useRef(null);
  const orderRef = useRef(null);

  const handleProductScroll = () => {
    productRef.current.scrollIntoView({behavior: 'smooth', block : 'center'});
  };

  const handleOrderScroll = () => {
    orderRef.current.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <Provider>
    <Header handleProductScroll={handleProductScroll} />
    <Product ref={productRef} handleOrderScroll={handleOrderScroll} />
    <Posts />
    <Order ref={orderRef} />
    <Footer />
  <Modal active={modalActive} setActive={setModalActive}>
  </Modal>
 
    </Provider>
  );
}

export default App;
  