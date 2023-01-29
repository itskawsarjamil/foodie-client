import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <>
          <div className='flex flex-col min-h-[700px] justify-center items-center'>
            <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
            <br />
            {error && (
              <div>
                <p className='text-red-500 text-xl'>{error.status}</p>
                <p className='text-2xl'>{error.data}</p>
              </div>
            )}
          </div>
        </>
      )
};

export default Error;