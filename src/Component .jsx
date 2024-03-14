import React from 'react'
import axios from 'axios';

const Component  = () => {
    const response={
        "responseList":[
            {
                "id":21,
                "rightOption":2
                // "rightAnswer":"Through method overloading and overriding"
            },
            {
                "id":22,
                "rightOption":1
            },
            {
                "id":23,
                "rightOption":3
            }
    
        ],
        "totalQuestion":5,
        "maximumMarks":50,
        "category":"Java"
       
    }
     //paste token below
    const accesstoken="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYXJzaC0xMjM0NTY3ODkiLCJpYXQiOjE3MTA0NDIwMjksImV4cCI6MTcxMDQ0MzIyOX0.TjTr0fiTv_qNWqi1ONF_lsGF_4B2vMB2CYJB0OEXGBlCxaiqzAiAeTk9X3L6uipuAdd14PWYIVfZPQ8bi5TEoQ";
    //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYXJzaC0xMjM0NTY3ODkiLCJpYXQiOjE3MTA0NDExMDksImV4cCI6MTcxMDQ0MjMwOX0.C7Zuon9FVdugMH7ZZtQNJeqNR_aS7DydMgv0i0jTb0uQ3n2_SVD9NZwAgsJjWegFiQbuUjlMNK1QEfBwYckyuA"
    //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYXJzaC0xMjM0NTY3ODkiLCJpYXQiOjE3MTA0MzkzNTcsImV4cCI6MTcxMDQ0MDU1N30.0LTvTGinG46gb6MbLEj0iAo_VCA5ruPWcLvt6a7nT3ic0_obDpliN6dp7ry3f0bhKegfrLF7XeMZsAZTiwnAVQ";
    
    function clickHandler(){
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://b106-2405-201-6016-70d3-1e4-f980-2fdb-7ec7.ngrok-free.app/user/response',
          headers: { 
            'Authorization': `Bearer ${accesstoken}`, 
            'Content-Type': 'application/json', 
            'X-API-Key': '{{token}}'
          },
          data : response
        };
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      }
  return (
    <div>
        <button onClick={clickHandler}>click</button>
      
    </div>
  )
}

export default Component 
