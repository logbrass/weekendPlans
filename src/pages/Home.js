import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import Typewriter from 'react-typewriter-effect';
import { Link } from 'react-router-dom';


const imageDescriptions = [
  "First date night... the suit does go kinda hard",
  "Your dress was amazing",
  "One of my faves... tbh fire duo",
  "Funny angle... wish we had some whole foods caramel",
  "TBH I like that shirt, studying was always fun",
  "This was after we found your ring",
  "I've had worst shades on me",
  "I really likes just sitting there with you... the pearls were fun too",
  "Gotta LOVE the LOVE statue",
  "Again... another amazing dress, third photo is perfect",
  "Still think it looks better one me... then again you gave me my own bear shirt to wear",
  "Airbuds twinning --> Fire music taste maggie miller",
  "Taro Boba >>>>> :)",
  "Cute photo fr",
  "Eepy af",
  "I love both of our sweaters in this",
  "Dhruv is the best... this photo is amazing",
  "Epitomy of s picture says a thousand words",
  "Where's Franklin???",
  "Again... just an amazing dress",
  "That view was great... I loved that meal",
  "Booth is sm fun",
  "Look at the flowers hanging >>",
  "Thank you for helping me with the Mac and Cheese (I know it could have used more ingrediants, but that is part of the fun",
  "Another epitomy fr",
  "Serious af",
  "That ball pit was fun... and we DID get your ring back so pretty fnu if you ask me",
  "ANGLE FR",
  "AHHHHHHHHHH ----> remember when I made a sticker of this?",
  "COZY mf",
  "Would run this night back the same exact way",
  "I think this is my very first photo of you...",
  "WELCOME TO THE DCC",
  "So much fun... makes me want to go to more concerts",
  "Thx for dressing up with me",
  "Blinged out fr... I think I still have mine",
  "Yi Pin... for once I think I out you onto something",
  "Award winning photography",
  "This is so funny... I love that door and that color + the pose still makes me laugh",
  "JJs AF",
  "Your style summed up in a dress... I'm glad you got the matching earrings",
  "Haha remeber what happened after this photo...?",
  "Again... the sweaters are the best",
  "Professing my love fr",
  "Classic maggie miller photo",
  "AHHH There's a cat!!! Franklin is the best",
  "Masked up fr",
  "Do you remeber what we were talking about???",
  "That museum was cool",
  "I mean... you could still ride alone...",
  "HAHAHAHHAHAH... MAD AFFFFFF",
  "Working the night shift",
  "Literally the funniest pose",
  "Hangover meal fr... tomatoe",
  "It is a very cool bracelet...",
  "Awesome night... another amazing dress (as always)",
  "Do you think they teach this in Physics???",
  "I still have these btw",
  "Might be my fave sticker...",
  "Wall decor is undefeated",
  "Haha we really did see eye 2 eye sometimes... get it??",
  "CBE fr",
  "So cool",
  "Dazed and confused... sending you off to NYC"
]

const images = Array.from({ length: 64 }, (_, index) => {
  const size = (index % 5 === 0) ? 'large' : 'small';
  return {
    src: `images/${index + 1}.jpeg`,
    alt: `Photo ${index + 1}`,
    size: size,
    description: imageDescriptions[index],
  };
});

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [popupText, setPopupText] = useState('');
  const [openPopup, setOpenPopup] = useState(false);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const handleOpenPopup = (text) => {
    setPopupText(text);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setPopupText('');
  };

  return (
    <div style={styles.galleryContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Hi Maggie Miller</h1>
        <div style={styles.buttonGroup}>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => handleOpenPopup('So... because you said I could do a bit better... I thought "well maybe I could"..... maggie miller... thank you for taking the time to talk to me last night, things just flow so easily when I\'m with you, it just connects, and gives me clarity..... you know exactly how I feel...... I picked out some of my favorite photos of us (and you, and a little bit me)... if you click on each out you\'ll see a little caption pop up... I will also note maggie miller, largely because of what you said last night, that if you did want to grab dinner Saturday... just let me know, because I know where you\'re at, but it can be nice to just talk (plus I literally have 10+ food places I want to try)............(PS: The video quality isn\'t the best, but that concert was amazing)')}
            style={styles.popupButton}
          >
            Click Me First
          </Button>
          <a href="https://youtu.be/uDJAwBf6O4Y" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <Button variant="contained" color="secondary" style={styles.button}>
              Remember This?
            </Button>
          </a>
  
  <Link to="/about">
  <Button 
  variant="contained" 
  color="secondary" 
  component={Link} 
  to="/about" 
  style={styles.button}
>
  Old Page
</Button>
  </Link>
        </div>
      </header>

      {/* Photo Grid */}
      <div style={styles.gridContainer}>
        {images.map((image, index) => {
          if (image.size === 'large') {
            return (
              <div
                key={index}
                style={styles.largeItem}
                onClick={() => handleOpenModal(image)}
              >
                <img src={image.src} alt={image.alt} style={styles.image} />
                <div style={styles.overlay}>
                  <Typography variant="body1" style={styles.overlayText}>
                    {image.description}
                  </Typography>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                style={styles.smallItem}
                onClick={() => handleOpenModal(image)}
              >
                <img src={image.src} alt={image.alt} style={styles.image} />
                <div style={styles.overlay}>
                  <Typography variant="body1" style={styles.overlayText}>
                    {image.description}
                  </Typography>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {selectedImage && (
            <div>
              <Typography variant="body1" style={styles.description}>
                {selectedImage.description}
              </Typography>
              <img src={selectedImage.src} alt={selectedImage.alt} style={styles.modalImage} />
              
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Popup Text with Typewriter Effect */}
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogContent>
          {popupText && (
            <Typewriter
              text={popupText}
              cursorColor="black"
              typeSpeed={50}
              eraseSpeed={50}
              delaySpeed={2000}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const styles = {
  galleryContainer: {
    padding: '0',
    margin: '0',
    backgroundColor: 'lightgray',
    minHeight: '100vh',
    overflowY: 'scroll',
  },
  header: {
    width: '100%',
    padding: '30px', 
    marginBottom: '20px',
    textAlign: 'left',
    backgroundColor: 'steelblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  headerText: {
    fontSize: '3rem',
    margin: 0,
    flexGrow: 1,
    fontFamily: '"Times New Roman", Times, serif', // Updated font
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    position: 'absolute',
    right: '20px',
    top: '30px',
  },
  button: {
    backgroundColor: 'steelblue',
    color: 'white',
    fontSize: '1.25rem',
    padding: '12px 24px',
    fontFamily: '"Times New Roman", Times, serif', // Updated font
  },
  popupButton: {
    backgroundColor: 'darkorange',
    color: 'white',
    fontSize: '1.25rem',
    padding: '12px 24px',
    fontFamily: '"Times New Roman", Times, serif', // Updated font
  },
  link: {
    textDecoration: 'none',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    boxSizing: 'border-box',
  },
  largeItem: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  smallItem: {
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '2px', // Subtle rounding of corners
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '5px',
    padding: '10px',
    boxSizing: 'border-box',
  },
  overlayText: {
    fontSize: '1rem',
    textAlign: 'center',
    fontFamily: '"Times New Roman", Times, serif', // Updated font
  },
  modalImage: {
    width: '100%',
    height: 'auto',
  },
  description: {
    marginTop: '10px',
    fontSize: '1rem',
    fontFamily: '"Times New Roman", Times, serif', // Updated font
  },
};


export default Home;
