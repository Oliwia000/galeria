import React, { useState } from 'react';

function Galleria()
{
    const images = [
    { src: 'https://via.placeholder.com/150', alt: 'Zdjęcie 1', title: 'Zdjęcie 1' },
    { src: 'https://via.placeholder.com/150', alt: 'Zdjęcie 2', title: 'Zdjęcie 2' },
    { src: 'https://via.placeholder.com/150', alt: 'Zdjęcie 3', title: 'Zdjęcie 3' },
    { src: 'https://via.placeholder.com/150', alt: 'Zdjęcie 4', title: 'Zdjęcie 4' },
  ];

    const [selectedImage, setSelectedImage] = useState(null);

    // Funkcja do wybrania zdjęcia
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Funkcja do zamknięcia powiększonego zdjęcia
    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
  
      < div className = "galleria-container" >
      {/* Filtry - pasek */}
      < div className = "filters" >
        < input type = "text" placeholder = "Filtruj..." />
      </ div >

     
      <div className="gallery">
        {
        images.map((image, index) => (
          < div key ={ index}
        className = "gallery-item" onClick ={ () => handleImageClick(image)}>
            < img src ={ image.src}
        alt ={ image.alt} />
            < p >{ image.title}</ p >
          </ div >
        ))}
      </ div >

     
    {
        selectedImage && (

      < div className = "modal" onClick ={ closeImage}>

        < div className = "modal-content" onClick ={ (e) => e.stopPropagation()}>

          < img src ={ selectedImage.src}
        alt ={ selectedImage.alt} />

          < button className = "close-btn" onClick ={ closeImage}> X </ button >

        </ div >

      </ div >
      )}

    </ div >
  );
}

export default Galleria;


