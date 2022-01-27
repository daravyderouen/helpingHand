import React, {useState} from 'react';



    const Form = () => {
        const[post, setPost] = useState('');
        const handleSubmit = (e) => {
            e.prevent();
            console.log(`Form submitted, ${post}`);
        }

  return (
      <div className='postRequestForm' id='postRequestForm'>
        
    <form onSubmit={handleSubmit} className='postRequestForm'>
        
      <h2>Enter Request</h2>
        <input type='checkbox' onChange = {(e) => setPost(e.target.value)} value = {post}></input>

        <div className='postReqPostDiv'>
         <label for="publicPost">Public Post</label>
         <input
          type="checkbox" className='radio'
          placeholder="Public Post"
          id="publicPost"
          value={true}
        />
        <label for="privatePost">Private Post</label>
         <input
          type="checkbox" className='radio'
          placeholder="Private Post"
          id="privatePost"
          value={true}
        />
        </div>
        <br />
        
      <div className="postReqPostDiv">
        <label for="volunteer">Volunteer</label>
        <input
          type="checkbox" className='radio'
          placeholder="Volunteer"
          id="volunteer"
          value={true}
        />
        
         <label for="recipient">Recipient</label>
         <input
          type="checkbox" className='radio'
          placeholder="Recipient"
          id="recipient"
          value={true}
        />
        </div>
        
        
        <div>
        <input type="text" placeholder="Please Enter Your Address" />
        </div>
        <div className=''>
        <input type="text" placeholder="Please Enter a City" />
        </div>
        <div>
        <input type="text" placeholder="Email" />
        </div>
        <div>
        <label for="dateOfAssignment">Please Pick a Date</label>
        </div><div>
        <input type="date" placeholder="Please Pick a Date" />
        </div>
        <div>
        <input type="text" placeholder="Enter Any Special Requests/Accommodations" />
        </div>
        <div>
          
        <button id='postReqBtn' type="submit">Click to Submit</button>
      </div>
    
    </form>
    </div>
  );
  }    
    
export default Form;
