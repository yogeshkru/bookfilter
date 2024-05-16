import React, { useEffect, useState,useRef } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const inputRef=useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {

      try {
        const url = search ? `https://openlibrary.org/search.json?isbn=${search}` : "https://openlibrary.org/search.json?title=the+lord+of+the+rings"
        const clearData=setTimeout(async()=>{
          const response = await axios.get(url);
          setBooks(response.data.docs);
          setIsLoading(false);
        })
        inputRef.current.focus()
        return ()=>{
          clearTimeout(clearData)
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };

    fetchData();
  }, [search]);


  const handleChange = (e) => {
    const inputValue = e.target.value.slice(0, 14);
    setSearch(inputValue);
  };
  const handleNavigate = (index) => {
    navigate(`/about`,{state:index})
  }



  return (
    <>
      <div className='background__image'>
        <div className='text-white text-center content-details'>
          <h1>"Find the Books"</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, similique. Expedita a qui illo ut
            natus aspernatur similique accusantium? Minima in architecto id consectetur eaque inventore minus similique.
            Aspernatur, sunt?
          </p>
          <div className='text-serach'>
            <form>
              <input
                className='form-control'
                type='number'
                placeholder='Enter only isbn number'
                aria-label='Search'
                value={search}
                onChange={handleChange}
                ref={inputRef}
                maxLength={7}
              />
              <span className='search__icon'>
                <IoSearch color='black' fontSize={20} />
              </span>
            </form>
          </div>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className='Books mt-3'>
        {books.map((book, index) => (
          <div className='Books__content mb-2' key={index}>
            <div className='card' onClick={() => handleNavigate(book)}>
              <div className='card-body'>
                <h5 className='card-title'>Title:{book?.title.slice(0, 24)}...</h5>


                <h6 className='card-subtitle mb-2 text-muted'>Author Name:{book?.author_name ? book?.author_name.slice(0, 2).join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                <p className='card-text'>Publisher:{book?.publisher ? book?.publisher.slice(0, 1).join(", ") : <span className='text-danger'>Unknown</span>}</p>
                <p className='card-text'>isbn:{book.isbn ? book.isbn.slice(0, 2).join(", ") : <span className='text-danger'>Unknown</span>}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
