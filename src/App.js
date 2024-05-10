import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="box1 box-border h-96 w-7/12 border-2 bg-amber-100">
        {userData && (
          <div className='flex-container'>
            <div className='flex-box bg-slate-200 rounded-full w-52 h-52 bottom-4'>
              {/* <p>Hello</p> */}
              <img src={userData.results[0].picture.large} alt="" className=" box-img object-cover w-full h-full rounded-full p-0.5" />
              {/* <p>Red Box</p> */}
            </div>
            <div className='flex-box2 m-10 flex-grow p-5 w-50'>
            {/* <p>Blue Box</p> */}
              <p className='details'>Name : {`${userData.results[0].name.title} ${userData.results[0].name.first} ${userData.results[0].name.last}`}</p>
              <p className='details'>Gender : {userData.results[0].gender}</p>
              <p className='details'>Phone Number : {`${userData.results[0].phone}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
