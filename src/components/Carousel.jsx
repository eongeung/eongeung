import { useRef } from 'react';

export default function Carousel({ children }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 310, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn carousel-prev" onClick={() => scroll(-1)}>&#8249;</button>
      <div className="experience-carousel carousel-track" ref={trackRef}>
        {children}
      </div>
      <button className="carousel-btn carousel-next" onClick={() => scroll(1)}>&#8250;</button>
    </div>
  );
}
