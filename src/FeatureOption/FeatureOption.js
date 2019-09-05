import React, {Component} from 'react';
import './FeatureOption.css';


export default class FeatureOption extends Component {
    render() {
        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id="itemHash"
                    className={this.props.featureClass}
                    onClick={e => this.props.onSelect(this.props.featureName, this.props.item)}>
                </input>
                <label htmlFor="itemHash" className="feature__label">
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.item.cost) })
                </label>
            </div>
        )
    }
}