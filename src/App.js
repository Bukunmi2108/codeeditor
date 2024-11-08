import Editor from "./components/Editor";
import { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavascript] = useState('')
  const [srcDoc, setSrcDoc] = useState(``)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html><body>${html}</body><style>${css}</style><script>${javascript}</script></html>`
      )
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, javascript])


  return (
    <>
    <div className="pane top-pane bg-gray-500 h-3/6 flex gap-2 p-2 w-full overflow-hidden">
      <Editor 
        language='xml'
        displayName='HTML'
        valueC={html}
        onChange={setHtml}
      />
      <Editor 
        language='css'
        displayName='CSS'
        valueC={css}
        onChange={setCss}
      />
      <Editor 
        language='javascript'
        displayName='JAVASCRIPT'
        valueC={javascript}
        onChange={setJavascript}
      />
    </div>
    <div className="pane h-3/6 flex-grow rounded-b-lg bg-gray-300 text-black">
      <iframe
        title="output"
        sandbox="allow-scripts"
        srcDoc={srcDoc}
        frameBorder='0'
        width='100%'
        height='100%'
      />
    </div>
    </>
  );
}

export default App;
