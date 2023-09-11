import { FormEvent } from "react";


const EditBook = () => {
    const handleEditBookSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target;
        console.log(form.title.value);
        
    }
    return (
        <div>
          <form onSubmit={handleEditBookSubmit}>
            <label>
                Title:
                <input type="text" name="title" id="" />
            </label>
            <button type="submit">Submit</button>
            </form>  
        </div>
    );
};

export default EditBook;