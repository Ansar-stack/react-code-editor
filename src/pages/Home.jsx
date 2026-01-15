import React, { useState } from "react";
import Header from "../components/navbar/Header";
import CodeEditor from "../components/home/CodeEditor";
import CodePreviewer from "../components/home/CodePreviewer";
import { defaultCss, defaultHtml, defaultJs } from "../utils/DefaultCode";
import Setting from "../components/settingModal/Setting";

const Home = () => {
  // Centralized state for code and editor settings
  const [code, setCode] = useState({
    html: defaultHtml,
    css: defaultCss,
    javascript: defaultJs,
  });

  return (
    <div className="w-full h-screen">
      <div className="px-1 sm:px-5 flex flex-col gap-1">
        <CodeEditor
          code={code}
          setCode={setCode}
        />
        <CodePreviewer code={code}/>
      </div>
    </div>
  );
};

export default Home;
