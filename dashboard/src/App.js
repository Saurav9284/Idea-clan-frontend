import './App.css';
import Login from './Pages/Login/Login';
import { ChakraProvider } from '@chakra-ui/react'
import SignupFirst from './Pages/Signup/SignupFirst';
import SignupSecond from './Pages/Signup/SignupSecond';

function App() {
  return (
    <ChakraProvider>
      {/* <Login/> */}
      {/* <SignupFirst/> */}
      <SignupSecond/>
    </ChakraProvider>
    
  );
}

export default App;
