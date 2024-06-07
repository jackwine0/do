import React from 'react';

const Portfolio = () => {
  // Define an array of image objects with their URLs and alt text
  const images = [
    {
      src: '/src/assets/Voice recognition.gif',
      alt: 'Image 1',
      link: 'https://github.com/jackwine0/Html',
    },
    {
      src: '/src/assets/F5 Quotes Janet Iwasa.gif',
      alt: 'Image 2',
      link: 'https://github.com/jackwine0/you/tree/master',
    },
    {
      src: '/src/assets/f26455cb-1352-449d-b8e9-9fa1ff52dea7.gif',
      alt: 'Image 3',
      link: '/path/to/image3',
    },
    {
      src: '/src/assets/A Collection Of Trippy _GIFs.gif',
      alt: 'Image 4',
      link: '/path/to/image4',
    },
    {
      src: '/src/assets/MAIN FIELD.gif',
      alt: 'Image 5',
      link: '/path/to/image5',
    },
    {
      src: '/src/assets/38bf1e17-1ed2-41f3-a511-5b9a092821a3.gif',
      alt: 'Image 6',
      link: '/path/to/image6',
    },
    {
      src: '/src/assets/7f383470-b800-4edb-a3e4-24d41368b2ab.gif',
      alt: 'Image 7',
      link: '/path/to/image7',
    },
    {
      src: '/src/assets/ec828ffa1181f74b16a33eddbbe26787_gif (500×500).gif',
      alt: 'Image 8',
      link: '/path/to/image8',
    },
    {
      src: '/src/assets/2412bf30-b954-487b-9845-578bca25c633.gif',
      alt: 'Image 9',
      link: '/path/to/image9',
    },
  ];

  return (
    <div id='portfolio-section'style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <h2>PORTFOLIO</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="column" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
