import React from "react";
import "./tagcloud.css";

const TagCloud = () => {
    return (
        <div className="tagcloud__wrapper" style={'--num-elements: 20'}>

            <div className="tagcloud__control-button" style={'--index: 1'}>
                <input type="radio" name="tagcloud-control-input" />
            </div>

            <div className="tagcloud__rotation">
                <ul className="tagcloud-tags" style={'--num-elements: 93'}>
                    <li className="tagcloud-tag" style={'--index-1'}><div><a href="#" target="_blank">Node.js</a></div></li>
                </ul>
            </div>
        </div>
    );
}
