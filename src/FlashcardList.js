import React from "react"
import Flashcard from "./Flashcard"

export default function FlashcardList({ flashcards, removeFlashcard }) {
  return (
    <div className="cards-box m-3">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} removeFlashcard={removeFlashcard} />
      })}
    </div>
  )
}
