import { Input, Row, Select, Col } from "antd";
import { moviesData } from "../../utils/mockData";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MoviesPage.css";
import { useEffect, useState } from "react";

function MoviesPage() {
  const [tagFilter, setTagFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");        
  const [filtered, setFiltered] = useState(moviesData);      

  const genreOptions = [
    { value: "фантастика", label: "Фантастика" },
    { value: "драма", label: "Драма" },
    { value: "приключения", label: "Приключения" },
    { value: "биография", label: "Биография" },
  ];

  useEffect(() => {
    if (!!tagFilter.length || !!searchQuery) {
      const result = moviesData.filter(
        (item) =>
          item.title.includes(searchQuery) || tagFilter.includes(item.genre)
      );
      setFiltered(result);
    } else setFiltered(moviesData);
  }, [tagFilter, searchQuery]);

  return (
    <>
      <div className="filter-container">
        <Input.Search
          onSearch={(event) => {
            setSearchQuery(event);
          }}
        />
        <Select
          options={genreOptions}
          mode="multiple"
          className="genre-filter"
          onChange={(event) => {
            setTagFilter(event);
          }}
        />
      </div>
      <div>
        <Row gutter={[40, 40]}>
          {filtered.map((item) => (
            <Col span={8}>
              <MovieCard 
                title={item.title} 
                year={item.year} 
                img={item.img_src} // Добавляем передачу изображения
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default MoviesPage;