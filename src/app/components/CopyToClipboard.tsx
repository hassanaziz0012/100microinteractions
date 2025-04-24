import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CopyToClipboard() {
    const snippet = `.sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }`;

    const [copied, setCopied] = useState(false);

    const copy = () => {
        setCopied(true);
        navigator.clipboard.writeText(snippet);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="m-20">
            <div>
                <div className="bg-slate-900 p-5 rounded-t-2xl flex items-center justify-between">
                    <div className="py-1 px-2 rounded-xl bg-slate-700 text-white font-mono">
                        CSS
                    </div>
                    <button
                        onClick={copy}
                        className="p-2 rounded-full bg-slate-700 text-white cursor-pointer active:scale-90 duration-300"
                    >
                        {copied === true ? (
                            <ClipboardCheck />
                        ) : (
                            <ClipboardCopy />
                        )}
                    </button>
                </div>
                <div className="[&>pre]:rounded-b-2xl [&>pre]:p-5!">
                    <SyntaxHighlighter language="css" style={atomOneDark}>
                        {snippet}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
