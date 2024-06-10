'use client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const changeColor = () => {
    setClicked(true);
  };

  return (
    <> 
    <div className="container">
      <div style={{ marginLeft: "100px" }}>
        <div className='picture'>   
        <img src="/images/picture.png" alt="Logo" className={`img-fluid ${styles.picture}`} />
        </div>
        </div>
      <div className={`box ${styles.box}`}>
        <b style={{ fontSize: '50px', color: '#00008B' }}> Grow your business with <br />Akeshya</b>
        <br></br>
        <p className={`box ${styles.box2}`}>We are team of talented website designers, developers & digital marketeers</p> 
        <button  onClick={changeColor} style={{ color: clicked ? 'white' : 'blue' }}  className={`btn book_now ${styles.book_now}`}>Get Started</button>
      </div>
    </div>
      
      <div>
      <div className={`custom ${styles.custom}`}>
        <div className="brand_img1">
               <img src="/images/client-1.png" className={`img-fluid ${styles.brand_img1}`}  />
                  </div>
          <div className="brand_img2" style={{ height: '80%' ,  width: '210px', marginLeft: '-95px'}}>
                  <img src="/images/client-2.png" className={`img-fluid ${styles.brand_img2}`} />
                 </div>
                 <div className="brand_img3" style={{ marginLeft: '80px'}}>
                  <img src="/images/client-3.png" className={`img-fluid ${styles.brand_img3}`}  />
                 </div>
                  <div className="brand_img4" style={{ height:"80px", width:"160px"}}>
                  <img src="/images/client-4.png" className={`img-fluid ${styles.brand_img4}`}  />
                 </div>
                 <div className="brand_img5" style={{ height: '80%' ,  width: '230px', marginLeft: '95px', marginTop: '100px'}}>
                  <img src="/images/client-5.png" className={`img-fluid ${styles.brand_img5 }`}  />
                 </div>
                  <div className="brand_img6" style={{marginLeft: '109px'}}>
                  <img src="/images/client-6.png" className={`img-fluid ${styles.brand_img6}`}  />
                 </div>
                </div>
      </div>
      </>
  )
}
