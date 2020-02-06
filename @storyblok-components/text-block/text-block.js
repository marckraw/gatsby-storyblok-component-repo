import React from "react";
import ReactMarkdown from "react-markdown";

const TextBlock = props => {
    return (
        <div>
            <h3>{props.blok.title}</h3>
            <ReactMarkdown source={props.blok.content} />
        </div>
    );
};

export default TextBlock;
