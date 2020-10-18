import React, {useState} from 'react';
import Error from './Error';
const Form = ({setSearch}) => {

    // word state to find the images
    const [myWord, setMyWord] = useState('');
    const [error, setError] = useState(false);

    let handleSubmit = e =>{
        e.preventDefault();
        
        // validate input
        if ( myWord.trim() === "" ) {
            setError(true);
            return;
        };        

        // send the word to principal component
        setSearch(myWord);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search a image, ex. soccer or coffe"
                        onChange={ e => setMyWord(e.target.value) }
                        />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        placeholder="Search"
                        />
                </div>                                
            </div>

            { error ? <Error message='Add some word to find the images' /> : null}
        </form>
     );
}
 
export default Form;
