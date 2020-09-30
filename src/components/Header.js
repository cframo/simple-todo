//Base
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {faCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect, useSelector} from "react-redux";

export default function (props) {

    const {navbar} = useSelector(state => state.config.appLanguage);
    const {header} = useSelector(state => state.config.colors);
    const selected = 'border-b border-white hover:border-teal-200 hover:text-teal-100 text-white';
    const [page, setPage] = useState({
        root: true,
        overview: false,
        why: false
    });

    const  handleStatusChange = location => {
        switch (location) {
            case 0:
                setPage({root: true, overview: false, why: false, how: false});
                break;
            case 1:
                setPage({root: false, overview: true, why: false, how: false})
                break;
            case 2:
                setPage({root: false, overview: false, why: true, how: false});
                break;
            default:
                setPage({root: false, overview: false, why: false, how: true})
                break;
        }
    }

    return (
        <>
            <nav className={`flex items-center justify-between flex-wrap p-6 shadow-lg fixed w-full ${header}`} >
                <div className="w-1/6 items-center text-white mr-6 border-white border-r-2 ">
                    <FontAwesomeIcon icon={props.icon} className="mr-2"></FontAwesomeIcon>
                    <Link to='/'
                          onClick={() => handleStatusChange(0)}>
                        <span className={`font-semibold text-xl tracking-tight
                         ${page.root === true ? 'text-white' : 'text-teal-200'}`}>{props.nameApp}</span>
                    </Link>
                </div>
                <div className="w-5/6 flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/Overview"
                              onClick={() => handleStatusChange(1)}
                              className={`block text-base font-semibold mt-4 lg:inline-block lg:mt-0 mr-4
                               ${page.overview === true ? selected : 'text-teal-100'}`}>
                            {navbar.overview}
                        </Link>
                        <Link to="/Why"
                              onClick={() => handleStatusChange(2)}
                              className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 
                              ${page.why === true ? selected : 'text-teal-200'} `}>
                            {navbar.why}
                        </Link>
                        <Link to="/HowToUse"
                              onClick={() => handleStatusChange(3)}
                              className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 
                              ${page.how === true ? selected : 'text-teal-200'}`}>
                            {navbar.how}
                        </Link>
                        <Link to="/Gitlab" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 leading-none border rounded text-white border-white hover:border-teal-300 mr-4">
                            Gitlab
                            <FontAwesomeIcon icon={faCode} className="ml-2"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <a href="#" className="inline-block text-white hover:text-teal-200 border rounded leading-none px-4 py-2 border-transparent hover:border-teal-100">
                        {navbar.meet}
                    </a>
                </div>
            </nav>
        </>
    );

}

/*
class Header extends React.Component {

    state = {
        selected: 'border-b border-white hover:border-teal-200 hover:text-teal-100 text-white',
        root: true,
        overview: false,
        why: false,
        how: false,
    }

    componentDidMount() {
    }

    onChageUrl = (location) => {
        switch (location) {
            case 0:
                this.setState({root: true, overview: false, why: false, how: false});
                break;
            case 1:
                this.setState({root: false, overview: true, why: false, how: false});
                break;
            case 2:
                this.setState({root: false, overview: false, why: true, how: false});
                break;
            default:
                this.setState({root: false, overview: false, why: false, how: true});
                break;
        }
    }


    render(){
        const {navbar} = this.props.language;
        return (
            <>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-lg">
                    <div className="w-1/6 items-center text-white mr-6 border-white border-r-2 ">
                        <FontAwesomeIcon icon={this.props.icon} className="mr-2"></FontAwesomeIcon>
                        <Link to='/'
                            onClick={() => this.onChageUrl(0)}>
                            <span className={`font-semibold text-xl tracking-tight
                             ${this.state.root === true ? 'text-white' : 'text-teal-200'}`}>{this.props.nameApp}</span>
                        </Link>
                    </div>
                    <div className="w-5/6 flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link to="/Overview"
                                  onClick={() => this.onChageUrl(1)}
                                  className={`block text-base font-semibold mt-4 lg:inline-block lg:mt-0 mr-4 ${this.state.overview === true ? this.state.selected : 'text-teal-100'}`}>
                                {navbar.overview}
                            </Link>
                            <Link to="/Why"
                                  onClick={() => this.onChageUrl(2)}
                                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${this.state.why === true ? this.state.selected : 'text-teal-200'} `}>
                                {navbar.why}
                            </Link>
                            <Link to="/HowToUse"
                                  onClick={() => this.onChageUrl(3)}
                                  className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${this.state.how === true ? this.state.selected : 'text-teal-200'}`}>
                                {navbar.how}
                            </Link>
                            <Link to="/Gitlab" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 leading-none border rounded text-white border-white hover:border-teal-300 mr-4">
                                    Gitlab
                                    <FontAwesomeIcon icon={faCode} className="ml-2"/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-white hover:text-teal-200 border rounded leading-none px-4 py-2 border-transparent hover:border-teal-100">
                            {navbar.meet}
                        </a>
                    </div>
                </nav>
            </>
        );
    }
}

const mapStateToProps = state => ({
    language: state.language
});

export default connect(mapStateToProps, null)(Header);*/
