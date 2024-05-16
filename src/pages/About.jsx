import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import Book from "../assets/th.jpg"
function About() {
    const { state } = useLocation()
    console.log(state);
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div className='container'>
            <h5 onClick={handleClick} className='btn'><FaArrowLeft /> Go Back</h5>
            <div className='row '>
                <div className='col-lg-6 mb-5'>

                    <div className='w-50 m-auto'>
                        <img src={Book} alt='books' width="100%" />
                    </div>

                </div>
                <div className='col-lg-6 handle__scroll'>
                    <h4 className='card-title'>Already Read Count :{state.already_read_count ? state.already_read_count : <span className='text-danger'>Unknown</span>}</h4>
                    <h4 className='card-title'>Already Read Count :{state.title}</h4>

                    <h6 className='card-subtitle pt-3'>Author Alternative Name: {state.author_alternative_name ? state.author_alternative_name.join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                    <h6 className='card-subtitle pt-3'>Author Facet: {state.author_facet ? state.author_facet.join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                
                    <h6 className='card-subtitle pt-3'>Author Key: {state.author_key ? state.author_key.join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                    <h6 className='card-subtitle pt-3'>Author Name: {state.author_name ? state.author_name.join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                    <h6 className='card-subtitle pt-3'>Publisher: {state.publisher ? state.publisher.join(", ") : <span className='text-danger'>Unknown</span>}</h6>
                    <h6 className='card-subtitle pt-3'>isbn: {state.isbn ? state.isbn.join(", ") : <span className='text-danger'>Unknown</span>}</h6>




                </div>

            </div>
        </div>
    )
}

export default About






