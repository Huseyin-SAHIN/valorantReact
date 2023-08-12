import React from 'react'
import { useGlobalContext } from '../Context/GlobalContext'

function Home() {

  const { themeMode } = useGlobalContext()

  const cardStyle = {
    background: themeMode.color,
    color: themeMode.background,
    height: '100%',
  }

  return (
    <div id='home' style={{
      background: themeMode.background,
    }}>
      <div className="container" style={{
        minHeight: "90vh",
        display: "flex",
      }}>
        <div className="row"
          style={{
            textAlign: "center",
            margin: "auto",

          }}
        >
          <h1 style={{ color: themeMode.color }}>VALOGAMES' E HOŞ GELDİNİZ</h1>
          <div className='col-lg-4 mb-4'>
            <div className="card p-4" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Ajanlar</h5>
                <p className="card-text">Valorant, rekabetçi bir nişancı oyunu olup birçok farklı oynanabilir ajan sunmaktadır. Her ajanın benzersiz yetenekleri, taktiksel avantajları ve oynanış tarzları bulunmaktadır. Bu sayfa sayesinde, oyun içindeki ajanları daha yakından tanıma fırsatını yakalayacaksınız.</p>
                <a href="./agents" className="btn btn-primary">Hemen İncele</a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <div className="card p-4" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Silahlar</h5>
                <p className="card-text">Sihalhar, mistik varlıkların, büyülü manzaraların ve sıra dışı olayların ev sahibi olduğu bir dünyadır. Bu gizemli diyar, yüzyıllardır pek çok efsane ve hikayenin merkezinde yer almıştır. Şimdi, siz de bu eşsiz dünyayı ziyaret ederek kendinizi büyülenmiş bir yolculuğun içinde bulabilirsiniz.</p>
                <a href="./weapons" className="btn btn-primary">Hemen İncele</a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mb-4 '>
            <div className="card p-4" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Haritalar</h5>
                <p className="card-text">Valorant'ın sunduğu haritalar, her biri benzersiz özelliklere sahip olan çeşitli mekanlardan oluşuyor. Bind, Haven, Split, Ascent ve daha birçok harita, farklı taktiksel yaklaşımları teşvik ediyor. Her harita, oyuncuların stratejilerini geliştirebileceği ve rakiplerine karşı üstünlük sağlayabileceği farklı alanlar sunuyor.</p>
                <a href="./maps" className="btn btn-primary">Hemen İncele</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home