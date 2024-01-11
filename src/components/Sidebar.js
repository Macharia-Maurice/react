import React from "react";
export function Sidebar(props){
    return(
        <aside className="sidebar">
            <h2>{props.greetings} from Sidebar</h2>
        </aside>
        
    );
}