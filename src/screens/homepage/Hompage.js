import React from 'react';

// import styles from './Homepage.module.css';
import commonStyles from '../../shared/Common.module.css'
import HomeLeftSection from '../../components/homepage/home-left-section/HomeLeftSection';
import Login from '../../components/homepage/Login/Login';
import Signup from '../../components/homepage/signup/Signup';
import ForgotPassword from '../../components/homepage/forgot-password/ForgotPassword';

class Homepage extends React.Component {

  getRightSectionComponent = (pathname) => {
    switch(pathname) {
      case '/signup': 
        return <Signup />;
      case '/forgot-password': 
        return <ForgotPassword />;
      default: 
        return <Login />;
    }
  }

  render() {
    return (
      <div>
        <div className={`row ${commonStyles.no_gutter}`}>
          <div className="col-md-5">
            <HomeLeftSection />
          </div>
          <div className="col-xs-12 col-md-7">
            { this.getRightSectionComponent( this.props.location.pathname) }
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;