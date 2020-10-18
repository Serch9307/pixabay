import React, {useState, useEffect} from 'react';
import Form from './componentes/Form';
import ListImages from './componentes/ListImages';

function App() {
  // App State 
  const [search, setSearch] = useState('');
  const [myImages, setMyImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // useEffect to call everytime change the search
  useEffect(() => {
    // check if the search is empty
    if (search === '') return;

    const callApi = async () => {
      const imagePerPage = 30;
      const key = '18726332-47963855200e410c185abf330';
      const url =
        `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${currentPage}`;
      const result = await fetch(url);
      const resultJson = await result.json();
      
      setMyImages(resultJson.hits);
      //Calc total page
      setTotalPage( Math.ceil( resultJson.totalHits/imagePerPage ) )

      //move up 
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
      
    };
    callApi();
  }, [search, currentPage]);
  //definition before page
  const handleClickBefore = () => {    
    const newCurrentPage = currentPage - 1;    
    if (currentPage === 0) return;
    setCurrentPage(newCurrentPage)
  };
  //definition next page
  const handleClickNext = () => {     
    const newCurrentPage = currentPage + 1;
    if (currentPage > totalPage) return;
    setCurrentPage(newCurrentPage)
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Image Search!!!
        </p>
        <Form 
          setSearch={setSearch}
        />        
      </div>

      <div className="row justify-content-center">
        <ListImages
          myImages={myImages} 
        />
        {(currentPage === 1) ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={handleClickBefore}
          >&laquo;Before</button>          
        )}
        {(currentPage === totalPage) ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={handleClickNext}
          >Next &raquo;</button>          
        )}      
      </div>      
    </div>
  );
}

export default App;
