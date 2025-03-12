import './index.css'
import BlogItem from  '../BlogItem'
const BlogList = (props) =>{
   const {blogList} = props 
   return(
    <ul className="list-container">
        {blogList.map(eachBlog=>{
           return <BlogItem blogItemDetails={eachBlog} key={eachBlog.id}/>
        })}
    </ul>
   )
}
export default BlogList