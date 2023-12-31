import React from "react";
import'./Gallery.css'

class Gallery extends React.Component{
    render() {
        return (
            <div>
             {
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return(
                        <a key={index} 
                        className="book"
                        href={infoLink}
                        target="blank"
                        rel="noopener"
                        >
                            <img src={undefined !== imageLinks ? imageLinks.thumbnail : ""}
                             alt={`Pictured: The cover for the book is ${title}.`}
                             className="book-cover"
                             />
                             <header className="book-title">
                                {title}
                             </header>
                        </a>
                    )
                })
             }
            </div>
        )
    }
}

export default Gallery;