import React, { useState, useEffect } from 'react';
import { Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  // Typeform link
  const typeformLink = "https://your.typeform.com/to/yourformid"; // Replace with your Typeform link

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getBackgroundGradient = () => {
    const percentageScrolled = Math.min(offsetY / (document.body.scrollHeight - window.innerHeight), 1);
    const startColor = [70, 130, 180]; // Start at steel blue
    const endColor = [48, 25, 52]; // End at dark purple

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * percentageScrolled);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * percentageScrolled);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * percentageScrolled);

    return `rgb(${r},${g},${b})`;
  };

  const textStyle = {
    transform: `translateY(${offsetY * 0.3}px)`,
    opacity: Math.max(1 - offsetY / 300, 0),
    color: "#FFFFFF",
    textAlign: "center",
    position: "relative",
    zIndex: 10,
  };

  return (
    <div style={{ background: getBackgroundGradient(), transition: "background 0.5s ease" }}>
      {/* Section 1: Intro */}
      <section className="h-screen flex flex-col items-center justify-center relative text-white">
        <h1 style={textStyle} className="font-extrabold text-6xl z-10">
          Hi Maggie Miller
        </h1>
      </section>

      {/* Section 2: I think you're cute */}
      <section id="message" className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl px-4">
          I think you're awesome
        </h2>
      </section>

      {/* Section 3: Life's a journey */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          and super cool
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          really just amazing
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          ...
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          I think it'd be fun
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          to grab lunch/dinner this weekend
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          just fill out the form below
        </h2>
      </section>

      {/* Section 4: Pause for moments */}
      <section className="h-screen flex flex-col items-center justify-center text-white bg-dark">
        <h2 className="font-extrabold text-5xl text-center px-4">
          pick what place / time
        </h2>
      </section>


       {/* Section 7: Restaurant options */}
       <section id="restaurant" className="h-screen flex flex-col items-center justify-center bg-light text-black">
        <h3 className="font-extrabold text-4xl text-center mb-5"></h3>
        <div className="flex flex-wrap justify-center w-[80%] gap-8">
          <Card className="bg-white p-6 rounded-lg shadow-lg text-black max-w-xs">
            <CardContent>
              <Typography variant="h5" component="div" className="mb-2">Gnocchi</Typography>
              <img src="images/gnocchi.jpg" alt="Italian Bistro" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <Typography variant="body1" className="mb-1"><strong>Location:</strong> 613 E Passyunk Ave</Typography>
              <Typography variant="body1" className="mb-1"><strong>Type of Food:</strong> Italian</Typography>
              <Typography variant="body1" className="mb-2"><strong>Website:</strong> <a href="https://www.opentable.com/gnocchi" className="text-blue-500">gnocchi.com</a></Typography>
            </CardContent>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg text-black max-w-xs">
            <CardContent>
              <Typography variant="h5" component="div" className="mb-2">Sakartvelo</Typography>
              <img src="images/george.jpg" alt="Sushi House" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <Typography variant="body1" className="mb-1"><strong>Location:</strong> 705 Chestnut St</Typography>
              <Typography variant="body1" className="mb-1"><strong>Type of Food:</strong> Georgian</Typography>
              <Typography variant="body1" className="mb-2"><strong>Website:</strong> <a href="https://sakartvelopa.com" className="text-blue-500">sakartvelopa.com</a></Typography>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Section 8: Typeform */}
      <section id="form" className="h-screen flex flex-col items-center justify-center text-black bg-light">
        <h3 className="font-extrabold text-4xl text-center mb-10"></h3>
        <div style={{ width: '45%', height: '500px' }}>
          <iframe 
            src={"https://fhkul9uyqt7.typeform.com/to/Eb2HVfPV"}
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allow="camera; microphone; autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Submission Received</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Thank you! Your submission has been received.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
