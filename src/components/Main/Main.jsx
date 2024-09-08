import React, { useContext } from 'react'
import './Main.css'

import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
function Main() {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
   <div className="main">
    <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}/>

    </div>
    <div className="main-container">
        {!showResult?<>
            <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest Beatuful place to see on ans upcoming trip</p>
            <img src={assets.compass_icon}/>
            </div>
            <div className="card">
                <p>reating it as an inline-level element.</p>
            <img src={assets.bulb_icon}/>
            </div>
            <div className="card">
                <p>Vertically aligns the child elements of</p>
            <img src={assets.message_icon}/>
            </div>
            <div className="card">
                <p>Adds padding of 10 pixels on the top and bottom,</p>
            <img src={assets.code_icon}/>
            </div>
        </div>
        </>:
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon}/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon}/>
               {loading?
            <div className='loader'>
                <hr />
                <hr />
                <hr />

            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
 }
            </div>
            </div>
            }
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text'placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                  {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}  
                </div>
            </div>
            <p className="bottom-info">
            reating it as an inline-level element.
            </p>
        </div>
    </div>
   </div>
  )
}

export default Main
