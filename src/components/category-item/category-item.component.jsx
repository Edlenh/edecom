import './category-item.styles.scss'

const CategoryItem  = ({category}) =>{
    //destructure from the category object. 
    const {imageUrl, title} = category
    return(
        <div className="category-container">
        <div className="background-image" style={{
          //destructuring a json object 
          backgroundImage: `url(${imageUrl})`
        }} />
          <div className="category-body-container ">
            <h2>{title}</h2>
            <p>Shop Now</p>
           </div>
         </div>
    )
}

export default CategoryItem