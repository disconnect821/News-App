
import React ,{useState}from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const api = process.env.REACT_APP_NEWS_API

  const [mode, setmode] = useState('light')
  const [progress, setprogress] = useState(0)
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor ='#374151'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
    }
  }
  const setProgress=(progress)=>{
    setprogress(progress)
  }
    return (
      <div>
        <Router>
        <LoadingBar
        color='white'
        progress={progress}
        />
        <NavBar toggle = {toggleMode}/>
        <Routes>
        <Route exact path='/sports' element = {<News api = {api} setProgress={setProgress}  key="sports" country ='in' pageNumber={15}  category="sports" mode={mode}/>}/>
        <Route exact path='/'element={<News api = {api} setProgress={setProgress}  key="general" country ='in' pageNumber={15} category="general" mode={mode}/>}/>
        <Route exact path='/health'element={<News api = {api} setProgress={setProgress}  key="health" country ='in' pageNumber={15} category="health" mode={mode}/>}/>
        <Route exact path='/science'element={<News api = {api} setProgress={setProgress}  key="science" country ='in' pageNumber={15} category="science" mode={mode}/>}/>
        <Route exact path='/technology'element={<News api = {api} setProgress={setProgress} skey="technology" country ='in' pageNumber={15} category="technology" mode={mode}/>}/>
        <Route exact path='/business'element={<News api = {api} setProgress={setProgress}  key="business" country ='in' pageNumber={15} category="business" mode={mode}/>}></Route>       
        <Route exact path='/entertainment'element={<News api = {api} setProgress={setProgress}  key="entertainment" country ='in' pageNumber={15} category="entertainment" mode={mode}/>}/>
        </Routes>    
        </Router>
      </div>
    )
  }
export default App;

