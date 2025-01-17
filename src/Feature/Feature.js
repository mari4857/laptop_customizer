import React, {Component} from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';
import './Feature.css';

export default class Feature extends Component {
    render() {
        const options = this.props.options.map((item, index) => {
            const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <FeatureOption
                    featureClass={featureClass}
                    key={index}
                    onSelect={this.props.onSelect}
                    item={item}
                    featureName={this.props.name}
                />
            )})

        return (


            <fieldset className="feature" key={this.props.name}>
                <legend className="feature__name">{this.props.name}</legend>
                {options}
            </fieldset>
        )
    }
}
