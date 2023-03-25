import CategoryItem from "../category-item/category-item.component"
import './directory.styles.scss'

const Directory = ({categories})=>{
    return(
        <div className="directory-container">
        {/* take the category array and destructre it */}
        {/* {}=>{} expects a explicit return statement () implicit return takes place */}
        {/* "Implicitly" means that the JS engine does it. "Explicitly" means that you must do it. */}
        {/* destructre use {} entire object () */}
        {categories.map(( category )=>(
        <CategoryItem key={category.id} category={category} />
        ))}
    </div>
   )
 }

 export default Directory
