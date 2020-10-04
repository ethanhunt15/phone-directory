import React, {Component} from 'react'

const Header = function(props){
    const headerStyle = { textAlign: 'center', padding:20, background:'#000', color:'#fff', textTransform:'uppercase'};
    return(
        <div style={headerStyle}>
            {props.heading}
            </div>
    )
}

// class Header extends Component
// {
//         render()
//         {
//             return(<div class="header">
//             {this.props.heading}
//             </div>)
//         }
    
// }



export default Header