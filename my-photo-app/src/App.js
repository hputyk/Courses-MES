import React from 'react';

const photos = [
  {
    "albumId": 1,
    "id": 1,
    "Заголовок": "зелёный",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "Заголовок": "фиолетовый",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
];

const PhotoItem = ({ photo }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img src={photo.thumbnailUrl} alt={photo.Заголовок} width="150" />
      <h3>{photo.Заголовок}</h3>
      <p>ID: {photo.id} | Album ID: {photo.albumId}</p>
      <a href={photo.url} target="_blank" rel="noopener noreferrer">Смотреть</a>
    </div>
  );
};

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Моя галерея</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default App;