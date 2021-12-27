//Packages
import React from 'react';
import Loader from 'react-loader-spinner';
//React Router
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Redux and state management
import { fetchUser, fetchUserToken } from '../redux';
//Components
import Auth from './UI/Auth/Auth';

const Authorization = ({ userData, onFetchUser, tokenChange }) => {
  return (
    <div>
      <div>
        <Auth />
        {/* <input
          type="text"
          value={userData.token}
          placeholder="API Token"
          onChange={(e) => {
            tokenChange(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onFetchUser();
          }}
        >
          Get
        </button> */}
      </div>
      {/* {userData.loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={40}
          width={40}
          timeout={10000}
        />
      ) : userData.error ? (
        <p>{userData.error}</p>
      ) : userData.error === '' || userData.error ? (
        <div>
          <Link to="/project-list">Show Info</Link>
        </div>
      ) : null} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: () => dispatch(fetchUser()),
    tokenChange: (e) => dispatch(fetchUserToken(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
