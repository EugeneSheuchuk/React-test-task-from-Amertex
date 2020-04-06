import React from 'react';
import style from './Network.module.css';
import IP from "../Ethernet/IP";
import DNS from "../DNS/DNS";

const Network = () => {
    return (
        <div className={style.container}>
            <div className={style.nets}>
                <div>
                    <p>Ethernet Settings</p>
                    <IP key={'Ethernet_1'}/>
                    <DNS key={'DNS_1'}/>
                </div>
                <div>
                    <p>Wireless Settings</p>
                </div>
            </div>
            <div className={style.footer}>

            </div>
        </div>
    );
};

export default Network;