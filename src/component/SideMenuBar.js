import React, { useState } from 'react'
import useOnclickOutside from "react-cool-onclickoutside";
import "./Sidemenu.css"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './Fb.css'

const SideMenuBar = ({open,setOpen}) => {
    const [image,setImage]=useState()
    const [name,setName]=useState()

    const ref = useOnclickOutside(() => {
        setOpen(!open)
      });

      const responseFacebook = (response) => {
        console.log(response.name)
        setName(response.name)
        console.log(response.picture.data.url)
        setImage(response.picture.data.url)
      }
    const componentClicked = (response) => {
        console.log('you logged in',response);
      }
    return (
        <div className="sidemenu"  ref={ref}>
            <div className='login-google'>
                <p>Login With Facebook</p>
                <div>
                    <FacebookLogin
                        appId="425792075506086"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}    
                        render={renderProps => (
                            <button onClick={renderProps.onClick} className='fb-login'>Sign In</button>
                        )}
                  />
        </div>
                 <div className="profile">
                      <img src={image} alt={name}/>
                     <p className="profile-name">{name}</p>
                 </div>
            </div>
        </div>
    )
}

export default SideMenuBar
