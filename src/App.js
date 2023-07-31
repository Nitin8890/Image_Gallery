import { useState, useEffect } from "react";
import Search from "./Search";
import Card from "./Card";
function App() {
  const [images, setImages] = useState([]); //array of images returned by api
  const [isLoading, setisLoading] = useState(true); //for loading animation
  const [term, setterm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=38554740-d409440df9023d38dc1cfadcf&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits)
      setisLoading(false);
    })
    .catch(error=>{
      console.log("Error : ",error);
      setisLoading(false);
    })
  }, [term]);

  return (
    <div className="container mx-auto">
    <Search searchText ={(text)=>setterm(text)} />
      {isLoading?<h1 className="text-center mx-auto mt-32 text-6xl">Loading Images</h1>:<div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-3 sm:gap-4 ">
            {images.map(image=>(
              <Card key={image.id} image={image}/>
            ))}
      </div>}
    </div>
  );
}

export default App;
