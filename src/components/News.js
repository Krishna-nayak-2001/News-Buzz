import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'

export class News extends Component {


  static propTypes = {
    categories: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  static defaultProps = {
    categories:'',
    country: PropTypes.string,
    pageSize: 6
  }

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categories}&country=${this.props.country}&apiKey=dacaeb7b51c5437799da75ba9385f0bf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let convertInJsondata = await data.json();
    // console.log(convertInJsondata);

    this.setState({
      articles : convertInJsondata.articles,
      totalResults: convertInJsondata.totalResults,
      loading: false
    })
  }

  previousBtn = async () => {
    // console.log("hi previuos");
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categories}&country=${this.props.country}&apiKey=dacaeb7b51c5437799da75ba9385f0bf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let convertInJsondata = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles : convertInJsondata.articles,
      loading: false
    })
  }


  nextBtn = async () => {
    // console.log("hi next");
    if (!(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.categories}&country=${this.props.country}&apiKey=dacaeb7b51c5437799da75ba9385f0bf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let convertInJsondata = await data.json();

        this.setState({
          page: this.state.page + 1,
          articles : convertInJsondata.articles,
          loading: false
        })
    } 
  }

  render() {
    let { heading } = this.props;

    return (
      <>
      <h2 className="text-center my-4"> <strong> {heading}</strong> </h2>
        {this.state.loading && <Loading />}

        <div className="container">
          <div className="row">
            {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
              // console.log(element);
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem titlee={element.title?element.title:""} desc={element.description?element.description:""} imageUrl={element.urlToImage} readMoreUrl={element.url} />
                </div>
              );
            })}
          </div>
          
          <div className="d-flex justify-content-between">
           {!this.state.loading && <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.previousBtn}> &larr; Previous</button>}
           {!this.state.loading &&  <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.nextBtn}>Next &rarr;</button>}
          </div>

        </div>
      </>
    );
  }
}

export default News;
