import { configureStore } from "@reduxjs/toolkit"
import firstSlice from "./CreateSlice"


 const store=configureStore(
  {
   reducer:{
    Mode:firstSlice
   }
  }
 )
  
 export default store
