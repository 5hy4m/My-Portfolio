import React,{useRef} from 'react'
import './login.css'
import {credRef} from '../firebase'

function LoginModal(props) {
  const usernameRef = useRef("")
  const passwordRef = useRef("")

  function handeLogin (e){
    credRef.on("value", snapshot => {
            const cred = snapshot.val()
            console.log(cred.username);
            console.log(usernameRef.current.value);
            if (cred.username == usernameRef.current.value && cred.password == passwordRef.current.value){
                console.log("Successful");
                props.handleAdminPage()
            }
            else{
                console.log("Not");

            }
            
        });
  }

    return (
        <div className="modal fade" id="LoginModal" tabIndex={-1} role="dialog" aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header shadow ">
              <h5 className="modal-title" id="LoginModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">UserName:</label>
              <input type="text " ref={usernameRef} className="form-control" id="username" placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Password:</label>
              <input type="password" ref={passwordRef} className="form-control" id="password" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={handeLogin} className="btn btncolor">Login</button>
        </div>
      </div>
          </div>
        </div>
      </div>
    )
}

export default LoginModal
