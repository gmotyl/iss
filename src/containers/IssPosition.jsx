import { connect } from 'react-redux'
import IssPositionAddress from '../components/IssPositionAddress';
import React from 'react';

export class IssPosition extends React.Component {
    render() {
        return (
            <div>
                <IssPositionAddress position={ this.props.address }/>
                { this.props.done ?
                    ''
                    :
                    <p> (Fetching API...)</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        address: state.googleMapsApi.address,
        done: (state.issApi.done && state.googleMapsApi.done)
    }
}

export default connect(mapStateToProps, null)(IssPosition);
