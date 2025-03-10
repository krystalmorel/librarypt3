import React from "react";
import {books} from "../data";
import Book from "./ui/book";

const Discounted = () => {
  return (
     <section id="recent">
        <div className="countainer">
            <div className="row">
            <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
                <div className="books">
                    {books
                    .filter(book => book.salePrice)
                    .slice(0, 8)
                    .map((book) => (
                        <Book book={book} key={book.id} />
                    ))}
                </div>
            </div>
        </div>
     </section>
  );
}

export default Discounted;
