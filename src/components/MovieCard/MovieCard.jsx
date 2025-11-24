import { Card } from 'antd';
import './MovieCard.css';

const MovieCard = ({ title, year, img }) => {
  return (
    <Card
      hoverable
      className="movie-card"
      cover={
        <div style={{ overflow: 'hidden', height: '200px' }}>
          <img 
            alt={title} 
            src={img} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </div>
      }
    >
      <Card.Meta 
        title={title} 
        description={year} 
      />
    </Card>
  );
};

export default MovieCard;