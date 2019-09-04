// import React, {Component} from 'react';
// import './FeatureOption.css';
// import slugify from "../App";
//
// export default class FeatureOption extends Component {
//     render() {
//         const itemHash = slugify(JSON.stringify(item));
//         return (
//             <div key={itemHash} className="feature__item">
//                 <input
//                     type="radio"
//                     id={itemHash}
//                     className={this.props.featureClass}
//                     name={slugify(feature)}
//                 />
//                 <label htmlFor={itemHash} className="feature__label">
//                     { this.props.item.name }
//                     ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
//                 </label>
//             </div>
//         )
//     }
// }