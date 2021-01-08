import Footer from '../Footer';
import { ReactComponent as MainImage } from './main.svg';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <>
      <div>
        <div className="home-container">
          <div className="home-content">
            <div className="home-actions">
              <h1 className="home-title">
                Faça seu pedido<br /> que entregamos<br />  pra você
            </h1>
              <h3 className="home-subtitle">
                Faça seu pedido que em poucos minutos <br />
              levaremos na sua porta
            </h3>
              <Link to="/orders" className="home-btn-order">
                Fazer pedido
            </Link>
            </div>
            <div className="home-image">
              <MainImage />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;