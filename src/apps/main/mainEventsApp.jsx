import React from "react";

import {ItemEvent} from "../../components/itemEvent"

export const MainEventsApp = () => {
    return (
        <div className='mainEvents-container'>
            <p className="mainText"> Proximos eventos</p>

            <div className="mainEvents-ItemHolders">

                <ItemEvent/>
            </div>

            <button className="moreEventsButton">
                Ver más eventos
            </button>

        </div>
    );

}
