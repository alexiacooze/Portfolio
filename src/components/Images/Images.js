import React from 'react'
import "../Images/Images.scss"

export default function Images(props) {
  // passing down props from app.js. Using the find method to have the specific title and description accociated with the imgObj on app.js to display when clikcing directly on the image that is being mapped within projects. 
  // find is searching for one item within img obg, if the one item id is === to the imageId of props.match.params of the imgobj then store it in foundObj. item.id is the "item" place hold for  the imgObg i.e., id 1 within each obj within the imgObj array. if the id from the obj is === to the id that was set to the image that is clickable within projects, then it will return the infromation thats from the specifc id within the obj ie the specifc title, description etc. FoundObj will be the value that is returned when filtering for the information, which makes sure the id of the info is respective of the imageId that was set within routing
    console.log(props);
    console.log(props.imgObj);
    const foundObj = props.imgObj.find(item => item.id === Number(props.match.params.imageId));
      console.log(foundObj);

    return (
        <div className='images'>
        <p className='images__title'>{foundObj.title}</p>
        <p className='images__description'>{foundObj.description}</p>

        <p className='images__instructions-title'> Browser Download Instructions:</p>
        <p className='images__instructions'> {foundObj.instructions}</p>
        <p className='images__github'>{foundObj.github}</p>

    </div>
  )
}