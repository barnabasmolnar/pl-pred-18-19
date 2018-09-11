import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isResNavOpen: false
        };

        this.handleResNavToggle = this.handleResNavToggle.bind(this);
    }

    handleResNavToggle() {
        this.setState(prevState => ({isResNavOpen: !prevState.isResNavOpen}));
    }

    render() {
        return (
            <header className="bg-purple-darkest mb-4">
                <div className="container mx-auto">
                    <nav className="navbar lg:flex justify-between text-white">
                        <div className="flex flex-1 items-center">
                            <Link to="/">
                                <div className="logo bg-green inline-flex p-1 items-center justify-center">
                                    <svg className="w-12 h-12 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.343 6.35" height="23.999" width="16.415">
                                        <path className="fill-current text-white" d="M2.046 1.448l.16.69.69.16.902-.903-.85-.85zm.213-.53a.3.3 0 1 0-.425-.426.3.3 0 0 0 .425.425zM3.85 2.084a.3.3 0 1 0-.424.425.3.3 0 0 0 .424-.425zM2.661.512c.326-.06.66.044.893.278.23.229.334.558.28.879a.21.21 0 0 0 .414.07A1.427 1.427 0 0 0 2.585.098a.21.21 0 0 0 .076.413zm.35 1.98A1.008 1.008 0 0 1 1.853 1.32a.21.21 0 0 0-.414-.075 1.427 1.427 0 0 0 1.64 1.663.21.21 0 0 0-.07-.415z" fill="none" strokeWidth=".15"/>
                                        <path d="M.265 1.59h.529c.146 0 .264.118.264.264V6.35H0V1.854c0-.146.118-.265.265-.265zm1.587 1.587h.53c.145 0 .264.118.264.264V6.35H1.587V3.44c0-.146.119-.264.265-.264zM3.44 4.764h.529c.146 0 .264.119.264.265v1.32H3.175V5.03c0-.146.118-.265.265-.265z"/>
                                        <path className="fill-current text-green" d="M2.783 1.652l-.149-.149.02-.02q.034-.034.074-.046.04-.013.123-.01l.05.003q.045.002.075-.006t.049-.027q.029-.029.025-.064-.003-.037-.039-.072-.033-.033-.085-.058-.053-.025-.122-.04l.13-.129q.066.033.116.065.05.033.087.072.1.1.112.194.012.093-.066.172-.04.04-.089.056-.048.015-.123.013l-.05-.002q-.053-.003-.077.004t-.043.025zm-.21-.088l.149.149-.146.146-.149-.148z" aria-label="?" fontWeight="400" fontSize="1.191" fontFamily="sans-serif"  letterSpacing="0" wordSpacing="0" strokeWidth=".03"/>
                                        <path d="M.145 1.26h.254V.536L.138.59V.394L.398.34h.274v.92h.255v.199H.145z" aria-label="1" fontWeight="400" fontSize="1.535" fontFamily="sans-serif"  letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
                                        <path d="M3.906 4.031q.113.03.172.102.059.072.059.184 0 .166-.127.253-.128.086-.372.086-.086 0-.173-.014-.086-.013-.171-.041v-.223q.08.04.16.062.08.02.158.02.114 0 .175-.04.061-.04.061-.114 0-.076-.063-.115-.062-.04-.184-.04h-.115v-.186h.121q.109 0 .162-.033.053-.035.053-.104 0-.065-.051-.1-.052-.035-.147-.035-.07 0-.14.015-.072.016-.142.047v-.212q.085-.024.17-.036.083-.012.164-.012.218 0 .326.072.109.072.109.216 0 .098-.052.16-.052.063-.153.088z" aria-label="3" fontWeight="400" fontSize="1.535" fontFamily="sans-serif"  letterSpacing="0" wordSpacing="0" strokeWidth=".038"/>
                                    </svg>
                                </div>
                            </Link>
                            <div className="flex flex-1 justify-between items-center pl-4">
                                <Link to="/" className="text-white no-underline">
                                    <div className="uppercase tracking-wide font-semibold">
                                        PL Prediction 18/19
                                    </div>
                                </Link>
                                <div className="lg:hidden" onClick={this.handleResNavToggle}>
                                    <svg className="block w-8 h-8 mr-2 fill-current" version="1.1" id="Menu" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 20 20"  enableBackground="new 0 0 20 20">
                                        <path d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,9,16.4,9z
                                        M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1h12.8c0.552,0,0.6-0.447,0.6-1S16.952,13,16.4,13z M3.6,7h12.8
                                        C16.952,7,17,6.553,17,6s-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6S3.048,7,3.6,7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={ classnames({"hidden": !this.state.isResNavOpen}, "menu lg:block") }>
                            <ul className="list-reset h-full block lg:flex">
                                <li>
                                    <NavLink
                                        exact
                                        to="/"
                                        className="[ text-white no-underline w-full flex items-center px-4 py-4 h-full ] [ lg:py-0 ]"
                                        activeClassName="active bg-pink-dark"
                                    >
                                        <svg className="block w-4 h-4 mr-2 fill-current" version="1.1" id="Home" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 20 20"  enableBackground="new 0 0 20 20">
                                            <path d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328
                                                c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031
                                                C19.142,10.676,19.27,11,18.672,11z"/>
                                        </svg>
                                        <div>Home</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/predictions"
                                        className="[ text-white no-underline w-full flex items-center px-4 py-4 h-full ] [ lg:py-0 ]"
                                        activeClassName="active bg-pink-dark"
                                    >
                                        <svg className="block w-4 h-4 mr-2 fill-current" version="1.1" id="List" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 20 20"  enableBackground="new 0 0 20 20">
                                            <path d="M14.4,9H8.6C8.048,9,8,9.447,8,10s0.048,1,0.6,1h5.8c0.552,0,0.6-0.447,0.6-1S14.952,9,14.4,9z M16.4,14H8.6
                                                C8.048,14,8,14.447,8,15s0.048,1,0.6,1h7.8c0.552,0,0.6-0.447,0.6-1S16.952,14,16.4,14z M8.6,6h7.8C16.952,6,17,5.553,17,5
                                                s-0.048-1-0.6-1H8.6C8.048,4,8,4.447,8,5S8.048,6,8.6,6z M5.4,9H3.6C3.048,9,3,9.447,3,10s0.048,1,0.6,1h1.8C5.952,11,6,10.553,6,10
                                                S5.952,9,5.4,9z M5.4,14H3.6C3.048,14,3,14.447,3,15s0.048,1,0.6,1h1.8C5.952,16,6,15.553,6,15S5.952,14,5.4,14z M5.4,4H3.6
                                                C3.048,4,3,4.447,3,5s0.048,1,0.6,1h1.8C5.952,6,6,5.553,6,5S5.952,4,5.4,4z"/>
                                        </svg>
                                        <div>Predictions</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/stats"
                                        className="[ text-white no-underline w-full flex items-center px-4 py-4 h-full ] [ lg:py-0 ]"
                                        activeClassName="active bg-pink-dark"
                                    >
                                        <svg className="block w-4 h-4 mr-2 fill-current" version="1.1" id="Line_graph" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 20 20"  enableBackground="new 0 0 20 20">
                                            <path d="M0.69,11.331l1.363,0.338l1.026-1.611l-1.95-0.482c-0.488-0.121-0.981,0.174-1.102,0.66
                                                C-0.094,10.719,0.202,11.209,0.69,11.331z M18.481,11.592l-4.463,4.016l-5.247-4.061c-0.1-0.076-0.215-0.133-0.338-0.162
                                                l-0.698-0.174l-1.027,1.611l1.1,0.273l5.697,4.408c0.166,0.127,0.362,0.189,0.559,0.189c0.219,0,0.438-0.078,0.609-0.232
                                                l5.028-4.527c0.372-0.334,0.401-0.906,0.064-1.277C19.428,11.286,18.854,11.256,18.481,11.592z M8.684,7.18l4.887,3.129
                                                c0.413,0.264,0.961,0.154,1.24-0.246l5.027-7.242c0.286-0.412,0.183-0.977-0.231-1.26c-0.414-0.285-0.979-0.182-1.265,0.23
                                                l-4.528,6.521L8.898,5.165C8.694,5.034,8.447,4.991,8.21,5.042c-0.236,0.053-0.442,0.197-0.571,0.4L0.142,17.209
                                                c-0.27,0.422-0.144,0.983,0.28,1.25c0.15,0.096,0.319,0.141,0.486,0.141c0.301,0,0.596-0.149,0.768-0.42L8.684,7.18z"/>
                                        </svg>
                                        <div>Statistics</div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className="[ text-white no-underline w-full flex items-center px-4 py-4 h-full ] [ lg:py-0 ]"
                                        activeClassName="active bg-pink-dark"
                                    >
                                        <svg className="block w-4 h-4 mr-2 fill-current" version="1.1" id="Info" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 20 20"  enableBackground="new 0 0 20 20">
                                            <path d="M12.432,0c1.34,0,2.01,0.912,2.01,1.957c0,1.305-1.164,2.512-2.679,2.512c-1.269,0-2.009-0.75-1.974-1.99
                                                C9.789,1.436,10.67,0,12.432,0z M8.309,20c-1.058,0-1.833-0.652-1.093-3.524l1.214-5.092c0.211-0.814,0.246-1.141,0-1.141
                                                c-0.317,0-1.689,0.562-2.502,1.117L5.4,10.48c2.572-2.186,5.531-3.467,6.801-3.467c1.057,0,1.233,1.273,0.705,3.23l-1.391,5.352
                                                c-0.246,0.945-0.141,1.271,0.106,1.271c0.317,0,1.357-0.392,2.379-1.207l0.6,0.814C12.098,19.02,9.365,20,8.309,20z"/>
                                        </svg>                   
                                        <div>About</div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}