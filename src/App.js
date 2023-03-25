const App=()=> {
  //initialize an array for scalablity
  //DRY dont repeat yourself
  const categories =[
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Women\'s',
    },
    {
      id: 5,
      title: 'Men\'s',
    },
  ]

  return (
    <div className="categories-container">
      {/* take the category array and destructre it */}
      {/* {}=>{} expects a explicit return statement () implicit return takes place */}
      {/* "Implicitly" means that the JS engine does it. "Explicitly" means that you must do it. */}

      {categories.map(({ title })=>(
         <div className="category-container">
         {/* <img></img> */}
         <div className="category-body-container">
           <h2>{title}</h2>
           <p>Shop Now</p>
         </div>
       </div>
      ))}
    </div>
  );
}

export default App;
