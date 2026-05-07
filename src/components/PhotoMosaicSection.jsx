import './PhotoMosaicSection.css';

const photos = [
  { src: '/images/mosaic-1.jpg',  alt: 'students learning' },
  { src: '/images/mosaic-2.jpg',  alt: 'school community' },
  { src: '/images/mosaic-3.jpg',  alt: 'student smiling' },
  { src: '/images/mosaic-4.jpg',  alt: 'students art' },
  { src: '/images/mosaic-5.jpg',  alt: 'students hugging' },
  { src: '/images/mosaic-6.jpg',  alt: 'student science' },
  { src: '/images/mosaic-7.jpg',  alt: 'student reading' },
  { src: '/images/mosaic-8.jpg',  alt: 'young student' },
  { src: '/images/mosaic-9.jpg',  alt: 'students hallway' },
  { src: '/images/mosaic-10.jpg', alt: 'students playing' },
  { src: '/images/mosaic-11.jpg', alt: 'students working' },
  { src: '/images/mosaic-12.jpg', alt: 'student campus' },
];

export default function PhotoMosaicSection() {
  return (
    <section className="mosaic">
      <div className="mosaic-grid">
        {photos.map((p, i) => (
          <div className="mosaic-cell" key={i}>
            <img src={p.src} alt={p.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
