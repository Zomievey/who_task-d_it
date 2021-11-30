import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const App = () => {
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const book = useRef(null);

  const paper1 = useRef(null);
  const paper2 = useRef(null);
  const paper3 = useRef(null);

  // Event listeners
  //   prevBtn.addEventListener("click", goPrevious);
  //   nextBtn.addEventListener("click", goNext);

  // Business Logic
  let currentState = 1;
  let numOfPapers = 3;
  let maxState = numOfPapers + 1;

  function openBook() {
    book.current.style.transform = "translateX(50%)";
    prevBtn.current.style.transform = "translateX(-180px)";
    nextBtn.current.style.transform = "translateX(180px)";
  }

  function closeBook(isFirstPage) {
    if (isFirstPage) {
      book.current.style.transform = "translateX(0%)";
    } else {
      book.current.style.transform = "translateX(100%)";
    }
    prevBtn.current.style.transform = "translateX(0px)";
    nextBtn.current.style.transform = "translateX(0px)";
  }

  function goNext() {
    if (currentState < maxState) {
      switch (currentState) {
        case 1:
          openBook();
          paper1.current.classList.add("flipped");
          paper1.current.style.zIndex = 1;
          break;
        case 2:
          paper2.current.classList.add("flipped");
          paper2.current.style.zIndex = 2;
          break;
        case 3:
          closeBook(false);
          paper3.current.classList.add("flipped");
          paper3.current.style.zIndex = 3;
          break;
        default:
          throw new Error("unkown state");
      }
      //     if (currentState === maxState) {
      //         closeBook(true);
      //   }
      currentState++;
    }
  }

  function goPrevious() {
    if (currentState > 1) {
      switch (currentState) {
        case 2:
          closeBook(true);
          paper1.current.classList.remove("flipped");
          paper1.current.style.zIndex = 3;
          break;
        case 3:
          paper2.current.classList.remove("flipped");
          paper2.current.style.zIndex = 2;
          break;
        case 4:
          openBook();
          paper3.current.classList.remove("flipped");
          paper3.current.style.zIndex = 1;
          break;
      }

      currentState--;
    }
  }

    return (
      <>
      
          <div className="d-flex flex-row container-fluid">
     
      <div id="background" className="container-fluid">
        <button
          id="prev-btn"
          className="col-1"
          ref={prevBtn}
          onClick={goPrevious}
        >
          <i className="fas fa-arrow-circle-left"></i>
        </button>

        <div id="book" className="col-10" ref={book} className="book">
          <div id="p1" ref={paper1} className="paper">
            <div className="front">
              <div id="f1" className="front-content">
                <h1 className="book-title">Who Task'd It?</h1>
                <img className="cover-img" src="cover.jpg" alt="dog" />
              </div>
            </div>
            <div className="back">
              <div id="b1" className="back-content">
                <h2>Create a Note:</h2>
                <div className="content">
                  <textarea id="note" rows="12" cols="50"></textarea>
                </div>
                <input class="btn btn-dark" type="Save" value="Save"></input>
              </div>
            </div>
          </div>

          <div id="p2" ref={paper2} className="paper">
            <div className="front">
              <div id="f2" className="front-content">
                <h1></h1>
              </div>
            </div>
            <div className="back">
              <div id="b2" className="back-content">
                <h1>Create a To-Do list:</h1>
                <div className="content">
                  <textarea id="todo" rows="12" cols="50"></textarea>
                </div>
                <input
                  class="mt-2 btn btn-dark"
                  type="Save"
                  value="Save"
                ></input>
              </div>
            </div>
          </div>
          <div id="p3" ref={paper3} className="paper">
            <div className="front">
              <div id="f3" className="front-content">
                <h1></h1>
              </div>
            </div>
            <div className="back">
              <div id="b3" className="back-content">
                <h1>Your solved Mysteries:</h1>
                <div className="content">
                  <textarea id="note" rows="12" cols="50"></textarea>
                </div>
                <input class="btn btn-dark" type="Save" value="Save" />
              </div>
            </div>
          </div>
        </div>
        <button
          id="next-btn"
          className="mr-0 col-1"
          ref={nextBtn}
          onClick={goNext}
        >
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </div>
      <div class="sidebar">
        <ul>THIS IS THE MENU ARE WHERE I WILL PUT THE INSTRUCTIONS</ul>
          </div>
          </div>
    </>
  );
};
