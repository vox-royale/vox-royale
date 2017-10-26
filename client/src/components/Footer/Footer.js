import React from 'react';
// import Link from './Link';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col col-md-4">
                                <h3>Location</h3>
                                <p>San Diego, CA</p>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>Around the Web</h3>
                                <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href="https://www.facebook.com/"
                                                            target="_blank" rel="noopener noreferrer">
                                   
                                    <i className="fa fa-fw fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href="https://plus.google.com/"
                                                            target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-fw fa-google-plus"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href="https://twitter.com/"
                                                            target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href="https://www.linkedin.com/feed/"
                                                            target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-fw fa-linkedin"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href=""
                                                            target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="footer-col col-md-4">
                                <h3>About Us</h3>
                                <li className="list-inline-item">
                                    <a className="btn-social btn-outline" href="">
   
                                    <i className="fa fa-users" aria-hidden="true"></i>
                                    </a>
 
                                    
                                </li>
                            </div>
                        
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    Copyright &copy; VOX Royale Team 2017
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}