import RestoComponent from "./RestoComponent";
import { useEffect, useState } from "react";
// import BodyTwo from "./BodyTwo";
// BodyComponent
const BodyComponent = () => {
     let [testResto,updatedtestResto] = useState([]);
     let [AdditionalData,SetAdditionalData] =useState([]); 
     useEffect( () => {
        //callBackFunction
        getSwiggydata();
     }, []);
     const getSwiggydata = async () => {
         // Fecth
         const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4241693&lng=78.3476283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
         const jsonData = await data.json();
        ;
      const liveData = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants; 
      updatedtestResto(liveData);
    };
    //another
    useEffect( () => {
      //callBackFunction
      getAdditionalData();
   }, []);
   const getAdditionalData = async () => {
       // Fecth
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4241693&lng=78.3476283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       const jsonData = await data.json();
      ;
    const liveData = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants; 
    SetAdditionalData(liveData);
  };

   // let testResto2 = ;
    return (
        <div className="body">
            {/* <div className="search-resto">
              
              <button
              onClick={() => {
                filterResto = testResto.filter(
                    (resto) => resto.info.avgRating > 4
                );
                updatedtestResto(filterResto);
              }}
              name="Rating 4+" 
              className="btn btn-primary">Rating 4+</button>
              <button
              onClick={() => {
                filterResto = testResto.filter(
                    (resto) => resto.info.sla.deliveryTime < 20
                );
                updatedtestResto(filterResto);
              }}
              name="NearMe" 
              className="btn btn-primary">NearMe</button>
            </div> */}
            <div className="best-offers">
          
            <div className="best-offers-head">
            <b>Best Offers For You</b>
            </div>
            <div className="best-offer-img">
           <a href="#"><img class="boi1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/a7c83b571a2bc966c3844fdb4f43a913" width="425" height="252" alt="Flat deals"/></a> 
           <a href="#"> <img class="boi2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ccb04d7d920acde7e1443bf2032c68cb" width="425" height="252" alt="GOURMET Dinner"></img></a>
           <a href="#"> <img class="boi3" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/967140f5e000b2f1e35f54a7c965e7dc" width="425" height="252" alt="Coke"></img></a>
            </div>
            </div>
            
            <div className="resto-container">
              {
                testResto.map( restorent => <RestoComponent resData = { restorent } />)
              }
              
              {
                AdditionalData.map(restorent=><RestoComponent resData = { restorent } />)
              }
               
            </div>
        </div>
    )
 };

 export default BodyComponent;