import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import Flag from 'react-flagpack'
import '../../css/nav.css'
import { Link } from 'react-router-dom'
import data from '../data'
 

const PWAInstallButton = React.lazy(()=>import('./pwa-install-button/PWAInstallButton'))
 

const Navbar = () => {
    const [ iconRotate, setIconRotate] = React.useState( null )
  
    return (
    
        <div className="nav row w-100 p-0 m-0 border-bottom align-items-center position-fixed position-fixed d-flex flex-row justify-content-between">          
            <div className="col-1">
                <Avatar className="border bg-danger border-dark border-dark-1 text-body p-0 m-0" ><small> <strong>ソロ</strong> </small> </Avatar>
            </div>
            {/* desktop menu */}

                <div className="menu col-6 d-flex justify-content-between">                 
                
                { data.nav.map( ( item, index)=>{
                    return(

                            <Button key={ index } variant="text" size="small"> 
                                <Link to={ "/" + item.title } className="link text-body text-decoration-none" key={ index }> { item.title } </Link> 
                            </Button>
                        
                        )
                     })
                
                }
                </div>

            <div className="lan col-1 m-0 p-0 d-flex justify-content-between">
                <Flag code='US' size= "l" className=""/>  
                <Flag code='JP' size="l" className=""/>
            </div>
        

            <div className="pwa-install col-1 p-0 m-0"> 
                <PWAInstallButton/>
            </div>

            <div className="login col-1 p-0 m-0"> <Avatar/> </div>
            
            {/* phone menu */}
            <div className="icon-menu col-6" onClick={ ()=>setIconRotate(pre=>!pre) }>
                <CgMenuGridO className="bar" style={{color:"black", transform: iconRotate && 'rotate(45deg)',transition:'.3s' }}/>
            </div>

            <div className= { iconRotate ? "phone-menu showMenu" : "phone-menu hideMenu" } >
                <items className="m-1  d-flex justify-content-around align-items-center ">
                    <div> 
                        <Flag code='US' size= "m" className="mx-2"/>  
                        <Flag code='JP' size="m" className="mx-2"/>
                    </div>
                    <PWAInstallButton className="pwa-install-phone"/>
                    <div className="phone-login align-items-center"> <Avatar/> </div>
                </items>
                <hr/>
                { data.nav.map( ( item, index)=>{
                    return(                        
                        <Button variant="text" key={ index } size="small" className="bg-info w-50 mx-auto my-2  d-flex justify-content-center" onClick={e=>setIconRotate(pre=>!pre) }> 
                           <Link to={ "/" + item.title } className="link w-100 text-body text-decoration-none" key={ index }> { item.title } </Link> 
                        </Button>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Navbar
