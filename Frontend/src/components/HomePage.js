import React from "react";


const Home = () => {


   return (
       <div>
            <p>Hullo</p>
           
         <form>
            <div id="inputType">
             <input type='radio' id='meeting' name='type' value='meeting'/>
            <label>Meeting</label>

            <input type='radio' id='booking' name='type' value='booking'/>
            <label>booking</label>

            <input type='radio' id='newRoom' name='type' value='newRoom'/>
            <label>New Room</label>

            </div>
        </form>
        
       </div>
   )
}

export default Home;