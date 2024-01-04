const RestoComponent = (props) =>  {
    return (
      <div className="resto-card">
        <div className="card">
          <div className="card-img">
                  <img src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId } style={{height:'150px',width:'200px'}} />
                  
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"> {props.resData.info.name}</h5>
                    <p className="card-text">Rating:{ props.resData.info.avgRating
}</p>
                    <p className="card-text">Biryani, Tandoori</p>
                    <p className="card-text">{ props.resData.info.areaName}</p>
                    <p className="card-text">{ props.resData.info.sla.deliveryTime} Mins.</p>
                   
                 </div>
            </div>
        </div>

    )
 }
 export default RestoComponent;

 