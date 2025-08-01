import React from "react"
import "./NewCollections.css"
import new_collections from "../../assets/newCollections"
import Item from "../Item/Item"
const NewCollections =() =>{
    return(
        <div className="newcollections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div>
                <div className="collections">
                    {new_collections.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}

                </div>
            </div>
        </div>
    )
}
export default NewCollections