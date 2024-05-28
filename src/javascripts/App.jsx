import React from 'react'


export const App = () => {


const getData = async() => {
  console.log(process.env.REACT_APP_API_TOKEN)
  try{
    const res = await fetch("https://con-ezcomdemo.zendesk.com/api/v2/tickets/100.json", {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

  console.log(res);
  } catch (error) {
     console.log('error : ${error}');
  }
};





//   return (
//     <><div className="flex items-center justify-center text-lg">
//       "Welcome To React Scaffold add"
//     </div>
//     <div className="flex items-center justify-center text-lg" id="value-container">  {myValue}
//     </div>
//     </>
         
//   )
// }

return (
  <>
    <div className="flex items-center justify-center text-lg">
      Welcome To React Scaffold add
    </div>
    <div className="flex items-center justify-center mt-4">
      <button onClick={getData} className="px-4 py-2 bg-blue-500 text-white rounded">
        Fetch Data
      </button>
    </div>
  </>
);
};

