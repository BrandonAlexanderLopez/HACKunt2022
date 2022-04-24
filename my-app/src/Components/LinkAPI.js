//b567dd3de8a3d683dd053de91de53303

import React, { Component } from "react";

class LinkAPI extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/550?api_key=b567dd3de8a3d683dd053de91de53303')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render(){

        var { isLoaded, items } = this.state;

        if (!isLoaded){
            return<div>loading....</div>;
        }
        else{
            return(
                <div className="LinkAPI">

                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} | {item.original_title}
                            </li>
                        ))};
                    </ul>

                </div>
            );
        }
    }

}

export default LinkAPI;