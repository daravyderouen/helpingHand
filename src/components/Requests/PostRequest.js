import React, {useState} from 'react';



    const Form = () => {
        const[userName, setUserName] = useState('');
        const handleSubmit = (e) => {
            e.prevent();
            console.log(`Form submitted, ${userName}`);
        }

  return (
      <div className='postRequestForm' id='postRequestForm'>
    <form onSubmit={handleSubmit} className='postRequestForm'>
        
        
        {/* <input onChange = {(e) => setUserName(e.target.value)} value = {userName}></input> */}
        
      <div className="">
        <label for="volunteer">Volunteer</label>
        <input
          type="checkbox" className='radio'
          placeholder="Volunteer"
          id="volunteer"
          value={true}
        />
        </div>
        <div>
         <label for="recipient">Recipient</label>
         <input
          type="checkbox" className='radio'
          placeholder="Recipient"
          id="recipient"
          value={true}
        />
        </div>
        <div>
        <input type="text" placeholder="Please Enter a Username" />
        </div>
        <div>
        <input type="text" placeholder="Please Enter Your Address" />
        </div>
        <div>
        <input type="text" placeholder="Email" />
        </div>
        <div>
        <input type="date" placeholder="Please Pick a Date" />
        </div>
        <div>
        <input type="text" placeholder="Enter Any Special Requests/Accommodations" />
        </div>
        <div>
        <button type="submit">Click to Submit</button>
      </div>
    
    </form>
    </div>
  );
  }    
    
export default Form;
