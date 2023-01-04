import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const apiKey="cc7338a88c23669f3b7a0b8cb90b6310"
  const [data,setData]=useState({})
const[inputCity,setInputCity]=useState("") //take usestate for input city koa set karne ke liye



  const getWheatherDetails=(cityName)=>{
    if(!cityName)return;
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
console.log("response",res.data)
setData(res.data)  //data gets saved
    }).catch((err)=>{
console.log("err",err);
    })
  }
const handleChangeInput=(e)=>{
 setInputCity(e.target.value)
 //we get here the city which we have input in the input box after clicking search
}




const handleSearch=()=>{
//alert("clicked");// when search button clicked then api must be called so funct getWheatherDetails=(cityName) is called because in this all api is present
getWheatherDetails(inputCity)
}  //is  a function which handle search



// useEffect(()=>{
// getWheatherDetails("delhi")
// },[])




  //WE WILL CALL THE API THROUGH axios
  return (
    
    <div  className=" col-md-12 "  >
      <div className="wbg">
      <h1>WEATHER APP</h1>
      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput}/>
<button className="btn btn-primary" type="button" onClick={handleSearch}>SEARCH</button>
      </div>

      

 {/* //when there is no input given then  shadow box will not appear    */}
 { Object.keys(data).length>0 &&
   <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded weatherResultBox">
<img  className="iconweather"   src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"></img>
<h5 className="wcity">{data?.name}</h5>
<h6 className="wtemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
{/* //toFixed is used for telling kitne decimal digit tak dikhana hai */}
    </div>
   </div>
} 

</div>
</div> 

    
  );
}

export default App;
