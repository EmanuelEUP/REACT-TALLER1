import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => (

  <div >
    <h1 className="font-weight-bold text-light">{title.toUpperCase()}</h1>
   
  <div className="container ">
    <div className = "row d-flex justify-content-center">

        {
        items
        .filter((item, idx) => idx < 14)
        .map(({ id, ...otherItemProps }) => (
          <div className="col-12 col-sm-3 mt-3">
        <CollectionItem key={id} {...otherItemProps} />
        </div>
        ))
        }
   
    </div>
  </div>

 
  </div>



);

export default CollectionPreview;
