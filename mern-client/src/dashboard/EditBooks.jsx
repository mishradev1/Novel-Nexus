import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

import { Button, Checkbox, Label, Select, TextInput, Textarea, Alert } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = [
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

  const[selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectionValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,authorName,imageURL,bookDescription,category,bookPDFURL
    }
    // console.log(bookObj)

    //update book data

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    })
   .then(res => res.json()).then(data => {
    <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
   })
   
  }


  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
         <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" defaultValue={bookTitle} required />
         </div>
         <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
         </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
         <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
         </div>

         {/* category */}
         <div className='lg:w-1/2'>
          <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
          </div>

          <Select id='inputState' name="categoryName" className='w-full rounded ' value={selectedBookCategory} 
          onChange={handleChangeSelectionValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>
         </div>
        </div>

        {/* bookDescription */}
        
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' type="text" placeholder="Write your book description..." defaultValue={bookDescription} required className='w-full' rows={7} />

      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="book pdf url" defaultValue={bookPDFURL} required shadow />
      </div>

      <Button type="submit" className='mt-5'>
        Update Book
      </Button>
        
    </form>
    </div>
  )

}

export default EditBooks