import React, { useState } from 'react';
import letni from './assets/letni.jpg';
import krzyk from './assets/krzyk.jpg';
import noc from './assets/noc.jpg';
import slonieczniki from './assets/slonieczniki.jpg';

function Galleria() {
    const initialImages = [
        { src: letni, alt: 'Letni', title: 'Letni' },
        { src: krzyk, alt: 'Krzyk', title: 'Krzyk' },
        { src: noc, alt: 'Noc', title: 'Noc' },
        { src: slonieczniki, alt: 'Słoneczniki', title: 'Słoneczniki' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    const filteredImages = initialImages.filter(image =>
        image.title.toLowerCase().includes(filter)
    );

    return (
        <div className="galleria-container">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Filtruj..."
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>

            <div className="gallery">
                {filteredImages.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => handleImageClick(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeImage}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <button className="close-btn" onClick={closeImage}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Galleria;
