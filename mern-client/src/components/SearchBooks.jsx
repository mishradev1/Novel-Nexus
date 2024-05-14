import React, { useState } from 'react';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';

function SearchBooks() {
    const {id} = useParams();
  const bookTitles = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Young Adult",
    "Horror",
    "Autobiography",
    "Historical",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [searchTerm, setSearchTerm] = useState(bookTitles[0]);
  
  const handleSearch = async () => {
    try {
      const response = await axios.get('https://novel-nexus-server.onrender.com//all-books', {
        params: {
          search: searchTerm
        }
      });
      console.log('Search Results:', response.data);
      // Handle the search results, such as updating state to display the results on the UI
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <input 
          type='text' 
          name='search' 
          id='search' 
          placeholder='Search a book' 
          className='py-2 px-2 rounded-s-sm outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBooks;
