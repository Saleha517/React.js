import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}




// import React from 'react';
// import { IconName } from "react-icons/fa6";
// import { FaAddressCard } from "react-icons/fa6";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import { FaCalculator } from "react-icons/fa6";
// import { FaComment } from "react-icons/fa6";

// const App = () => {
//   return (
//     <>
//     <button type='button' className='btn btn-dark txt white'> <FaArrowRotateLeft  color = 'white'/>
//       Reload
//     </button>

//      <br></br>
//      <br></br>

//       <button type='button' className='btn btn-dark txt white'> <FaCalculator  color = 'white'/>
//       Calculate
//     </button>

//     <br></br>
//     <br></br>

//     <button type='button' className='btn btn-dark txt white'> <FaComment  color = 'white'/>
//       Comment
//     </button>
//     </>
//   )
// }

// export default App;



