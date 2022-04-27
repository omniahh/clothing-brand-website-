import React from 'react';
import Home from '.';
import btnStyle from '../styles/button.module.css'
import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <form className={styles.size}>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text"> we will never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className={btnStyle.myBtn}>Submit</button>
        <div>
        <Home></Home>
        </div>
      </form>

     
  
    );
};

export default login;