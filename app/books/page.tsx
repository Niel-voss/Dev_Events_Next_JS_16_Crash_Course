import { Book } from "../api/db"
import React from "react"

export default async function BookPage() {
  const response = await fetch('http://localhost:3000/api/books', { cache: 'no-store' })

  const books = await response.json()

  return (


    <div>
      {
        books.map((book: Book) => (
          <div key={book.id}>
            {book.name}
          </div>
        ))
      }

    </div>


  )
}





