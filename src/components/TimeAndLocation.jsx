import React from 'react';

const TimeAndLocation = ({weather: {formattedLocalTime,name, country}}) => {
  return (
    <div>
      <div className='flex items-center justify-around my-6'>
        <p className='text-xl font-extralight'>
         {formattedLocalTime}
        </p>
      </div>

    <div className="flex flex-row justify-center my-3">
    <p className='text-3xl font-medium'>
          {`${name}, ${country}`}
    </p>
    </div>

    </div>
  )
}

export default TimeAndLocation;