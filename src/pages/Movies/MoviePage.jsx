import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import Alert from 'react-bootstrap/Alert';
import ReactPaginate from 'react-paginate';

const MoviePage = () => {
  const [query,setQuery] = useSearchParams();
  const [page,setPage] = useState(1)
  const keyword = query.get('q')
  const {data, isLoading,isError,error} = useSearchMovieQuery({keyword,page})
  console.log('ddaa0',data)
  

  const handlePageClick = ({selected})=>{
    setPage(selected+1)

  }

  if (isLoading){
        return <h1>loading</h1>
  }
  if (isError){
      return <Alert varient = "danger">{error.message}</Alert>
  }
  if (!data?.results || data.results.length === 0) {
    return <Alert variant="info">No movies found</Alert>;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} xs={12}></Col>
          <Col lg={8} xs={12}>
            <Row>
              {data?.results.map((movie,index) => (
                <Col 
                  key={index}><MovieCard movie={movie}/>
                </Col>
              ))}
            </Row>
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data?.total_pages}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page-1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MoviePage;
