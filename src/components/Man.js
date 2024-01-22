import React from 'react';
import man from '/home/maurice/Learning React/basics/src/assets/images/splash.jpg';
function Man() {
  const randomIMage='https://images.unsplash.com/photo-1704137477371-bed38523c2eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div>
      <img
      width={200}
      src={man}
      alt="sdjhfn"
      />

      <img
      width={200}
      src={require('/home/maurice/Learning React/basics/src/assets/images/splash.jpg')}
      alt=''
      />
    <img
    width={200}
    src={randomIMage}
    alt=''
    />
    </div>

  )
}

export default Man;