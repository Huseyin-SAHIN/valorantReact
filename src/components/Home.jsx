import React from 'react'
import { useGlobalContext } from '../Context/GlobalContext'
import vl from '../assets/images/vl.png'
import { Link } from 'react-router-dom'

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
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}>
          <div style={{
            position: "sticky",
            top: "0",
            left: "0",
            zIndex: "0",
            height: "100vh",
            width: "100%",
            background: `url(${vl}) no-repeat center center/cover`
          }}></div>
        </div>
        <div className="row"
          style={{
            textAlign: "center",
            margin: "auto",
            gap: "4rem",
            padding: "2rem 0",

          }}
        >
          <h1 style={{
            color: themeMode.color,
            zIndex: "1",
          }}>VALOGAMES'E HOŞ GELDİNİZ</h1>
          <div className='col-12'>
            <div className="card col-md-6" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Ajanlar</h5>
                <p className="card-text">Valorant, rekabetçi bir nişancı oyunu olup birçok farklı oynanabilir ajan sunmaktadır. Her ajanın benzersiz yetenekleri, taktiksel avantajları ve oynanış tarzları bulunmaktadır. Bu sayfa sayesinde, oyun içindeki ajanları daha yakından tanıma fırsatını yakalayacaksınız.</p>
                <Link to="./agents" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className="card col-md-6 ms-auto" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Silahlar</h5>
                <p className="card-text">Sihalhar, mistik varlıkların, büyülü manzaraların ve sıra dışı olayların ev sahibi olduğu bir dünyadır. Bu gizemli diyar, yüzyıllardır pek çok efsane ve hikayenin merkezinde yer almıştır. Şimdi, siz de bu eşsiz dünyayı ziyaret ederek kendinizi büyülenmiş bir yolculuğun içinde bulabilirsiniz.</p>
                <Link to="./weapons" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className="card col-md-6 mx-auto" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Oyun Kartları</h5>
                <p className="card-text">Her ajan, kendine özgü yetenekleri ve oynanış tarzıyla takımınıza katkıda bulunabilir. Oyun kartları sayesinde ajanları daha yakından tanıma fırsatı elde edebilir ve stratejik seçimler yapabilirsiniz. Unutmayın ki, doğru ajan kombinasyonları ve takım stratejileri, Valorant'ta zafer elde etmenin anahtarıdır.</p>
                <Link to="./playingcards" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className="card col-md-6" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Spreyler</h5>
                <p className="card-text">Valorant'ta, silahları ateşlerken "sprey kontrolü" becerisi önemlidir. Bu, silahın geri tepmesini düzgünce idare ederek nişanı tutma sanatıdır. Her silahın kendine has bir sprey deseni vardır. </p>
                <Link to="./sprays" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className="card col-md-6 ms-auto" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Silah Paketleri</h5>
                <p className="card-text">
                  Valorant Silah Paketleri: Çeşitlilik ve Taktiksel Seçenekler

                  Valorant, rekabetçi bir nişancı oyunu olarak sadece ajanların değil, aynı zamanda silahların da stratejik bir rol oynadığı bir oyundur. Oyuncular, farklı silah türleri ve silah paketleri arasından seçim yaparak takım stratejilerini şekillendirebilir.</p>
                <Link to="./bundles" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className="card col-md-6 mx-auto" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">Haritalar</h5>
                <p className="card-text">Valorant'ın sunduğu haritalar, her biri benzersiz özelliklere sahip olan çeşitli mekanlardan oluşuyor. Bind, Haven, Split, Ascent ve daha birçok harita, farklı taktiksel yaklaşımları teşvik ediyor. Her harita, oyuncuların stratejilerini geliştirebileceği ve rakiplerine karşı üstünlük sağlayabileceği farklı alanlar sunuyor.</p>
                <Link to="./maps" className="btn btn-primary">Hemen İncele</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home