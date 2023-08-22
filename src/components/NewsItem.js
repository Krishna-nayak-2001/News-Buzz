import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { titlee, desc, imageUrl, readMoreUrl } = this.props;

    return (
      <>
        <h2 className="my-4 text-center"> </h2>
        <div className="container my-3">
          <div className="card">
            <img
              src={
                !imageUrl
                  ? "https://images.cnbctv18.com/wp-content/uploads/2023/08/8-3-1019x573.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{titlee}</h5>
              <p className="card-text">{desc}</p>
              <a
                href={readMoreUrl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-success btn-sm d-flex justify-content-center"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
