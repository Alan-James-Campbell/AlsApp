import React from 'react'
import { Parallax } from 'react-parallax'
import { Button } from '@material-ui/core'
import './Home.css'
import { getImageUrl } from '../utils/imageHelpers'

const Home = () => {

  return (
    <div id='homeContainer'>
      <div id='homeSubContainer'>
        <Parallax 
          bgImage={getImageUrl('newportParasailPic.jpg')} 
          strength={500} 
          bgImageStyle={{ height: '800px'}}
        >
          <div style={{ height: 550 }}>
            <div style={{
              position: "absolute",
              top: "30%",
              left: "48%",
              transform: "translate(-50%,-50%)"
            }}>
              <Button variant="contained" color="secondary" size="large">
                Reserve Now!
              </Button>
            </div>
          </div>
        </Parallax>

        <Parallax 
          bgImage={image2} 
          strength={-100}
          bgImageStyle={{ maxWidth: '1483px'}}
        >
          <div style={{ height: 500 }}>

          </div>
        </Parallax>
        <Parallax
          bgImage={image4}
          strength={200}
          bgImageStyle={{ maxWidth: '1483px'}}

          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(245,0,87, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={{
              background: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}>
              <Button variant="contained" color="primary" size="large">
                Let's Fly!
              </Button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Home

interface HomeProps {

}

const image1 =
  process.env.PUBLIC_URL + '/images/newportParasailPic.jpg';
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
