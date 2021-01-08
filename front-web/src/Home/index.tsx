import './styles.css'
import { ReactComponent as MainImage } from './main.svg'
import Footer from '../Footer'

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
              <a href="aaa" className="home-btn-order">
                Fazer pedido
            </a>
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