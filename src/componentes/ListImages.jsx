import React from 'react';
import Image from './Image';
const ListImage = ({ myImages }) => {
    return (  
        <div className="col-12 p-5 row">
            {myImages.map(myImage => (
                <Image 
                    key={myImage.id}
                    myImage={myImage}
                />
            ))}
        </div>
    );
}
 
export default ListImage;