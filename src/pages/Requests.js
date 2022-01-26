import React from 'react';
import '../components/Requests/Requests.css'
import PostRequests from '../components/Requests/PostRequest';

function Requests() {
  return (
    <div className='requests'>
      <h1 className='requestsH1'>Requests</h1>
      <div className='postRequestDiv'>
      <PostRequests />
      </div>
    </div>
  );
}

export default Requests;