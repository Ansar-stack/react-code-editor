import React, { useState, useEffect, useContext } from "react";
import TabButton from "./TabButton";
import { FaCss3, FaHtml5, FaUndo, FaJs } from "react-icons/fa";
import { BsPlay, BsDownload } from "react-icons/bs";
import Tabs from "./Tabs";
import Button from "./Button";
import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { emmetCSS, emmetHTML, emmetJSX } from "emmet-monaco-es";
import { SettingContext } from "../../context/SettingContext";
import { defaultCss, defaultHtml, defaultJs } from "../../utils/DefaultCode";
import { useHotkeys } from "react-hotkeys-hook";
import { runShortcuts } from "../../utils/ShortcutFunc";
loader.config({ monaco });
const CodeEditor = ({ code, setCode }) => {
  const [toggle, setToggle] = useState(1);
  const { settings, setSettings } = useContext(SettingContext);
  const handleToggle = (id) => {
    setToggle(id);
  };
  // Reset Code
  const resetCode = () =>
    setCode({
      html: defaultHtml,
      css: defaultCss,
      javascript: defaultJs,
    });
  // Code Editor Options
  const options = {
    validate: true,
    fontSize: settings.fontSize,
    fontFamily: settings.fontFamily,
    fontWeight: settings.fontWeight,
    lineHeight: settings.lineHeight,
    autoClosingBrackets: true,
    autoClosingQuotes: true,
    autoClosingTags: true,
    wordWrap: settings.wordWrap ? "on" : "off",
  };
  // Clear code shortcut key
  useHotkeys("ctrl+1", (e) => {
    e.preventDefault();
    resetCode();
  });
 
  return (
    <div className="w-full mt-3 border border-[#23235b] rounded-md flex flex-col">
      {/* Header */}
      <div className="border-b border-[#23235b] flex justify-between items-center">
        <Tabs toggle={toggle} handleToggle={handleToggle} />
        <div className="px-3 flex gap-0.5 sm:gap-3">
          <Button
            text={"Reset"}
            onClick={resetCode}
            icon={
              <FaUndo className="hidden text-[8px] sm:flex sm:text-[15px]" />
            }
            className={
              "bg-[#07073A] border border-[#1E1E6A] text-xs sm:text-md md:text-xl"
            }
          />
          <Button
            text={"Download"}
            icon={
              <BsDownload className="hidden sm:flex text-[8px] sm:text-[15px]" />
            }
            className={
              "bg-[#07073A] py-1 sm:py-0.5 px-1 sm:px-3 border text-xs sm:text-md md:text-xl border-[#1E1E6A]"
            }
          />
        </div>
      </div>

      {/* Code Editors */}
      <div className="flex">
        <div className={toggle === 1 ? "flex w-full" : "hidden"}>
          <Editor
            theme={settings.theme}
            language="html"
            height={250}
            options={options}
            onMount={(editor, monaco) => {
              // Shortcut to reset code
              emmetHTML(monaco, ["html"]);
            }}
            value={code.html}
            onChange={(value) => setCode((prev) => ({ ...prev, html: value }))}
          />
        </div>
        <div className={toggle === 2 ? "flex w-full" : "hidden"}>
          <Editor
            options={options}
            theme={settings.theme}
            language="css"
            onMount={(editor, monaco) => {
              emmetCSS(monaco, ["css"]);
            }}
            height={250}
            value={code.css}
            onChange={(value) => setCode((prev) => ({ ...prev, css: value }))}
          />
        </div>
        <div className={toggle === 3 ? "flex w-full" : "hidden"}>
          <Editor
            options={options}
            theme={settings.theme}
            onMount={(editor, monaco) => {
              emmetJSX(monaco, ["javascript"]);
            }}
            language="javascript"
            height={250}
            value={code.javascript}
            onChange={(value) =>
              setCode((prev) => ({ ...prev, javascript: value }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
