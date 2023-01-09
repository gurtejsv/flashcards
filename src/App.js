import { useState, useEffect } from "react"
import "./App.css"
import FlashcardList from "./FlashcardList"
import { v4 as uuidv4 } from "uuid"

const LOCAL_STORAGE_KEY = "flashcards"

function App() {
  const [flashcards, setFlashcards] = useState(
    [
      {
        id: uuidv4(),
        front: "mitochondria",
        back: "the powerhouse of the cell"
      }
    ]
  )

  const [back, setBack] = useState("")
  const [front, setFront] = useState("")

  useEffect(() => {
    const storedFlashcards = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if (storedFlashcards) setFlashcards(storedFlashcards)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(flashcards))
  }, [flashcards])

  function removeFlashcard(id) {
    const newFlashcards = flashcards.filter(flashcard => flashcard.id !== id)

    setFlashcards(newFlashcards)
  }

  return (
    <>
      <h1 className="fw-bold text-center m-3">Flashcards</h1>
      <div className="d-flex justify-content-center m-3">
        <input type="text" className="form-control m-2" style={{ maxWidth: "250px" }} placeholder="Front" onChange={(event) => { setFront(event.target.value) }} />
        <input type="text" className="form-control m-2" style={{ maxWidth: "250px" }} placeholder="Back" onChange={(event) => { setBack(event.target.value) }} />
        <button className="btn btn-primary m-2" style={{ whiteSpace: "nowrap" }} onClick={() => {
          if (back === "" || front === "") {
            return
          }
          setFlashcards(prevFlashcards => {
            return [{ id: uuidv4(), front: front, back: back }, ...prevFlashcards]
          })
        }}>Add a new card</button>
      </div>
      <div className="mx-auto" style={{ maxWidth: "1120px" }}>
        <FlashcardList flashcards={flashcards} removeFlashcard={removeFlashcard} />
      </div>
    </>
  )
}



export default App
