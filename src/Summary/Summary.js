// import React, {Component} from 'react';
// import './Summary.css';
//
// export default class Summary extends Component {
//     render () {
//         return (
//             Object.keys(this.props.selected).map(key => {
//                 const featureHash = feature + '-' + idx;
//                 const selectedOption = this.state.selected[feature];
//                 return(
//                     <div className="summary__option" key={featureHash}>
//                         <div className="summary__option__label">{feature}</div>
//                         <div className="summary__option__value">{this.props.selected[key].name}</div>
//                         <div className="summary__option__cost">
//                             { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.selected[key].cost) }
//                         </div>
//                     </div>
//                 )
//             })
//         )
//     }
// }