import React, { useState } from "react"

export default function Flashcard({ flashcard, removeFlashcard }) {
  const [flip, setFlip] = useState(false)

  return (
    <div className={`card ${flip ? "flip" : ""} m-2`} onClick={() => { setFlip(!flip) }}>
      <div className="front bg-light border">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary m-3" onClick={() => { removeFlashcard(flashcard.id) }}>&#x2715;</button>
        </div>
        <p className="text-center m-3">{flashcard.front}</p>

      </div>
      <div className="back bg-light border">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary m-3" onClick={() => { removeFlashcard(flashcard.id) }}>&#x2715;</button>
        </div>
        <div className="d-block">
          <p className="text-center m-3">{flashcard.back}</p>
        </div>
      </div>
    </div>
  )
}
