import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?title=${search || ""}`);

        setBooks(response.data.docs);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchData();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className='background__image'>
        <div className='text-white text-center content-details'>
          <h2>"Find the Books"</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, similique. Expedita a qui illo ut
            natus aspernatur similique accusantium? Minima in architecto id consectetur eaque inventore minus similique.
            Aspernatur, sunt?
          </p>
          <div className='text-serach'>
            <form>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
                onChange={handleChange}
              />
              <span className='search__icon'>
                <IoSearch color='black' fontSize={20} />
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className='row mt-3'>

        {books.map((book) => (
          <div className='col-lg-2 mb-2' key={book.key}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{book.title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{book.author_name ? book.author_name.join(', ') : 'Unknown'}</h6>
                <p className='card-text'>{book.publisher ? book.publisher[0] : 'Unknown'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
