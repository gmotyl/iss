import * as actions from '../actions/index';
import React from 'react';
import { connect } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { IssPosition } from '../containers/IssPosition';
import { shallowWithStore } from 'enzyme-redux';

describe('issPosition shallowWithStore', () => {
    describe('state', () => {
        it('works', () => {
            const expectedState = 'expectedState';
            const mapStateToProps = (state) => ({
                state,
            });
            const ConnectedComponent = connect(mapStateToProps)(IssPosition);
            const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
            expect(component.props().state).toBe(expectedState);
        });
    });

    describe('dispatch', () => {
        it('works', () => {
            const action = actions.fetchAddressFromCoordinatesSuccess('test')
            const mapDispatchToProps = (dispatch) => ({
                dispatchProp() {
                    dispatch(action);
                },
            });
            const store = createMockStore();

            const ConnectedComponent = connect(undefined, mapDispatchToProps)(IssPosition);
            const component = shallowWithStore(<ConnectedComponent />, store);
            component.props().dispatchProp();
            expect(store.isActionDispatched(action)).toBe(true);
        });
    });
});
