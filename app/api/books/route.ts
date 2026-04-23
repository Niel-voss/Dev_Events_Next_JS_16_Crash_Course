import booksList from "../db";

export async function GET() {
  return (
    Response.json(booksList)
  )
}

export async function POST(request: Request) {
  const newBook = await request.json()
  booksList.push(newBook)

  return (
    Response.json(booksList)
  )
}

