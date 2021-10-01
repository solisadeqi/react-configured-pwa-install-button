import React from 'react';
import { useReactPWAInstall } from "react-pwa-install";
import { Avatar, Button, Tooltip } from '@material-ui/core';
import { FaAndroid } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { DiWindows } from 'react-icons/di'


const InstallpwaButton = () => {
    const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
    

    const handleClick = () => {
      pwaInstall({
        title: <Avatar className="border border-danger bg-dark" > <small>ソロ</small> </Avatar>,
        // logo:Logo,
        features: (
          <ul>
            <li> Example </li>
            <li> Example </li>
            <li> Example </li>
          </ul>
        ),
        description: "Have app on your  IOS / Android / Desktop !",
      })
        .then(() => alert("Installed successfully ! Thanks for installation"))
        // .catch(() => alert(" Installation cancelled ! "))
    }


    return (  
 
        <>
                { supported && !isInstalled() && (
                
                        <Tooltip title={<h5> <FaAndroid className="text-success"/> ￤ <AiFillApple className=""/> ￤ <DiWindows className="text-primary"/> </h5>}>
                            <Button size="small" type="button" variant="contained"  onClick={ handleClick } >
                            Install
                            </Button>
                        </Tooltip>
                )}
        </>
     
    )
}

export default InstallpwaButton
