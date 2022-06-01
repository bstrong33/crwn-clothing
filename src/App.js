import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home";
import Navigation from './routes/navigation/navigation';

const Shop = () => {
  return (
    <div>I Am the Shop</div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
};

export default App;
