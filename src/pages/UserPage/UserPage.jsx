import { Typography, Card, Row, Col } from "antd";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./UserPage.css";
import { moviesData } from "../../utils/mockData";

const UserPage = () => {
  const profileData = [
    { label: 'имя', value: 'Ксения Цыгулева' },
    { label: 'почта', value: 'example@mail.ru' },
    { label: 'роль', value: 'критик' },
    { label: 'любимые жанры', value: 'драма, боевик, фантастика' },
  ];

  // Берем первые 6 фильмов из moviesData для страницы профиля
  const savedMovies = moviesData.slice(0, 6);

  return (
    <div className="user-page">
      <div className="user-info">
        <Card variant="borderless">
          <Typography.Title level={2}>Обо мне</Typography.Title>
          {profileData.map((item, index) => (
            <Row key={index} className='info-row'>
              <Col span={6}>
                <Typography.Text strong>{item.label}</Typography.Text>
              </Col>
              <Col span={18}>
                <Typography.Text>{item.value}</Typography.Text>
              </Col>
            </Row>
          ))}
        </Card>
      </div>
      <div className="saved-movies">
        <Card variant="borderless">
          <Typography.Title level={2}>Сохраненные фильмы</Typography.Title>
          <Row gutter={[40, 20]}>
            {savedMovies.map(movie => (
              <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
                <MovieCard 
                  title={movie.title} 
                  year={movie.year} 
                  img={movie.img_src}
                />
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default UserPage;