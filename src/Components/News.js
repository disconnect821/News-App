import React, { useState , useEffect } from 'react'
import NewsItem from './NewsItem'
import '../Css/NewsItem.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

 const News = (props)=> {
  
  document.title = `${props.category}-Daily Dose!!`
  
   const [articles, setarticles] = useState([]);
   const [loading, setloading] = useState(true);
   const [page, setpage] = useState(1);

useEffect(() => {
      UpdateNews()
     }, [])
    
const UpdateNews = async ()=>{
      props.setProgress(30)
      setloading(true)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageNumber=${props.pageNumber}`
      props.setProgress(70)
      const data = await fetch(url);
      const parsedData = await data.json()
      setarticles(parsedData.articles)
      setloading(false)
      props.setProgress(100)
     }

   
  //render se pehle chlta
  // async componentDidMount(){
  //   props.setProgress(30)
  //   this.setState({
  //     loading : true
  //   })
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${this.state.page-1}&pageNumber=${props.pageNumber}`
  //   props.setProgress(70)
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState ({articles : parsedData.articles , loading : false})
  //   props.setProgress(100)
  // }

  const handlePrevious = async ()=> {
    props.setProgress(30)
    setloading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageNumber=${props.pageNumber}`
    let data = await fetch(url);
    props.setProgress(70)
    let parsedData = await data.json()
    setarticles(parsedData.articles)
    setloading(false)
    setpage(prev=>prev-1)
    props.setProgress(100)
  }
  const handleNext = async () => {
    props.setProgress(30)
    setloading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageNumber${props.pageNumber}`
    props.setProgress(70)
    let data = await fetch(url);
    let parsedData = await data.json()

    setarticles(parsedData.articles)
    setloading(false)
    setpage(prev=>prev+1)
    setloading(false)
    props.setProgress(100)
  }


    return (
      <>
      <div className="container my-3">
        <h1 className="text-center" style={{color : `${props.mode ==='light'?'black':'white'}`}}>{"Top Daily Dose!!"}</h1>
        {loading && <Spinner/>}
        <div className="row">
          {articles.map((element)=>{
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,44):""} desc = {element.description?element.description.slice(0,88):""} imgUrl = {element.urlToImage?element.urlToImage :"https://www.naftemporiki.gr/wp-content/uploads/2022/06/1876050.jpeg"} newsUrl ={element.url} mode={props.mode}/>
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-center">
          <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevious}>Previous</button>
          <button type="button"  className="btn btn-dark" onClick={handleNext}>Next</button>
        </div>
      </div>
      </>
    )

  News.propTypes = {
    country : PropTypes.string,
    pageNumber: PropTypes.number,
    category : PropTypes.string,
    mode: PropTypes.string,
  }

  News.defaultProps ={
    country : 'in',
    pageNumber : 8,
    category : 'general',
    mode : 'light',
  }
}

export default News;
