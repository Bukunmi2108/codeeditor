import React from 'react'
import { useState, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";



const Editor = ({displayName, language, valueC, onChange}) => {

    const [code, setCode] = useState('');
    const [fullscreen, setFullscreen] = useState(false);
    const options = {
      mode: language,
      theme: 'material',
      lineNumbers: true,
      lineWrapping: true,
    }
    useEffect(() => {
      setCode(valueC);
    }, [valueC]);
  
    const handleChange = (editor, data, value) => {
      setCode(value);
      onChange(value);
    };
    // const handleUncontrolledChange = (editor, data, value) => {
    //   setCode(valueC)
    // }

    const handleBtn = () => {
      setFullscreen(prev => !prev)
    }
  return (
    <div className={`flex flex-col bg-gray-900 text-white p-2 rounded-r-lg rounded-l-lg flex-grow ${fullscreen? 'flex-1': ''}`}>
        <div className='flex justify-between p-2 pl-4 items-center'>
            <span>{displayName}</span>
            <button 
              className='text-white'
              onClick={handleBtn}  
            >
                {
                  !fullscreen? <AiOutlineFullscreen className='w-6 h-6' /> : <AiOutlineFullscreenExit className='w-6 h-6' />
                }
            </button>
        </div>
        <ControlledEditor 
            onBeforeChange={handleChange}
            value={code}
            className = "code-editor flex-grow flex flex-col p-2 bg-gray-700"
            options = {options}
        />
        {/* <CodeMirror
            className = "code-editor flex-grow flex flex-col p-2 bg-gray-700"
            value={code}
            options={options}
            onChange={handleUncontrolledChange}
        /> */}
    </div>
  )
}

export default Editor