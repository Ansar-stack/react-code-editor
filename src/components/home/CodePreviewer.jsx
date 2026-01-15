import React, { useState, useEffect } from "react";
import TabButton from "./TabButton";
const CodePreviewer = ({ code }) => {
  const [toggle, setToggle] = useState(1); // 1=Preview, 2=Console
  const [iframeContent, setIframeContent] = useState("");

  // Debounce iframe content update for performance
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIframeContent(`
        <html>
          <style>${code.css}</style>
          ${code.html}
          <script>
            // Capture console output
            const log = [];
            const oldLog = console.log;
            console.log = function(...args) {
              log.push(args.join(' '));
              oldLog.apply(console, args);
            };
            window.addEventListener('error', e => log.push(e.message));
            setInterval(() => {
              if(window.parent) {
                window.parent.postMessage({ type: 'console', logs: log }, '*');
              }
            }, 500);
          </script>
          <script>${code.javascript}</script>
        </html>
      `);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [code]);
    const [consoleLogs, setConsoleLogs] = useState([]);

  // Listen to messages from iframe
  useEffect(() => {
    const listener = (e) => {
      if (e.data?.type === "console") {
        setConsoleLogs([...e.data.logs]);
      }
    };
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  return (
    <div className="w-full flex flex-col border border-[#23235b] rounded-md">
      {/* Preview and console tabs */}
      <div className="flex gap-0.5 border-b border-[#23235b]">
        <TabButton
          text={"Code Previewer"}
          handleClick={() => setToggle(1)}
          className={`rounded-tl-md ${toggle === 1 ? "bg-[#0f0f90]" : ""}`}
        />
        <TabButton
          text={"Console"}
          handleClick={() => setToggle(2)}
          className={`${toggle === 2 ? "bg-[#0f0f90]" : ""}`}
        />
      </div>

      {/* Iframe Preview */}
      <div className={toggle === 1 ? `block` : `hidden`}>
        <iframe
          className="w-full h-60"
          srcDoc={iframeContent}
        ></iframe>
      </div>

      {/* Console */}
      <div
        className={`w-full h-60 overflow-auto bg-white text-black p-2 ${
          toggle === 2 ? "block" : "hidden"
        }`}
      >
        {consoleLogs.length === 0 && <p className="text-gray-400">Console is empty</p>}
        {consoleLogs.map((log, index) => (
          <div className="border-y border-b-gray-500" key={index}>{log}</div>
        ))}
      </div>
    </div>
  );
};

export default CodePreviewer;
