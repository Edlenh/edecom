import CategoryItem from './components/category-item/category-item.component';
import categories from './components/category-item/category-data.component';

const App=()=> {
  //initialize an array for scalablity
  //DRY dont repeat yourself
  return (
    <div className="categories-container">
      {/* take the category array and destructre it */}
      {/* {}=>{} expects a explicit return statement () implicit return takes place */}
      {/* "Implicitly" means that the JS engine does it. "Explicitly" means that you must do it. */}
      {/* destructre use {} entire object () */}
    {categories.map(( category )=>(
      <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
