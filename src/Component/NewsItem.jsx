import Breaking_News from "../Component/Assets/Breaking_News.png"
import '../App.css'
const NewsItem = ({title, description , src, url}) => {
  return (
        <div className="card  bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src || Breaking_News} style={{height:"200px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-bolder">{title.slice(0,50)}</h5>
                <a href={url} className="card-link news-link">{description ? description.slice(0,50) : "This is a latest news"}</a>
            </div>
        </div>
  )
}

export default NewsItem