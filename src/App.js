import React,{useReducer, useEffect, useRef ,createContext} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import './App.css';
import NavBar from './comp/navbar';
import Footer from './comp/footer';
import Home from './Home';
import Edit from './edit';
import Cs from './Cs';
import SignUp from './signup';
import New from './new';
import Search from "./search";
import Login from './login';
import IdFinder from './idfinder';
import ProtectedRoute from "./comp/protectedroute";
import { UserAuthContextProvider } from "./context/usercontext";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.no !== action.no);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.no === action.data.no ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("video",JSON.stringify(newState));
    return newState;
};

  export const VideoContext = createContext();
  export const VideoDispatchContext = createContext();
  
function App() {
  const [data, dispatch] = useReducer(reducer, []);

    useEffect(()=>{ 
      const localData=localStorage.getItem("video");
      if(localData){
        const videoList=JSON.parse(localData).sort(
          (a,b)=>parseInt(b.no)-parseInt(a.no)
        );
      if(videoList.length >=1){
        dataNo.current=parseInt(videoList[0].no)+1;
        dispatch({type:"INIT", data:videoList});
      }
    }
  },[]);

  const dataNo=useRef(0);
    
  const onCreate=(title,category,url)=>{   
      dispatch({
        type:"CREATE",
        data:{
          no:dataNo.current,
          title,
          category,
          url,
        }
      });
      dataNo.current += 1;
    };

  const onEdit=(no,title,category)=>{
    dispatch({
      type:"EDIT",
      data: { 
        no:no,
        title,
        category,
      },
    });
  };
   
  const onRemove = (no) => {
    dispatch({ type: "REMOVE", no});
  };

   
  return (
    <UserAuthContextProvider>
    <VideoContext.Provider value={data}>
      <VideoDispatchContext.Provider value={{
          onCreate,
          onEdit,
          onRemove,
          }}>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/search/:keyword" element={<ProtectedRoute><Search/></ProtectedRoute>} />
        <Route path="/new" element={<ProtectedRoute><New/></ProtectedRoute>} />
        <Route path="/edit" element={<ProtectedRoute><Edit/></ProtectedRoute>} />
        <Route path="/cs" element={<Cs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/idfinder" element={<IdFinder/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
      </VideoDispatchContext.Provider>
      </VideoContext.Provider>
      </UserAuthContextProvider>
  );
}

export default App;
