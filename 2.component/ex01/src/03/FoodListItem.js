import React, { Component } from 'react';

class FoodListItem extends Component {
    render() {
        return (
            <li>{this.props.name}: {this.props.count}</li>
        );
    }
}

export default FoodListItem;