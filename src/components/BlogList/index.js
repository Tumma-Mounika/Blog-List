// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  const {id, title, description, publishedDate} = blogsList

  return (
    <li className="bloglist-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </li>
  )
}

export default BlogList
