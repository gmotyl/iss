import IssPositionAddress from '../components/IssPositionAddress';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('A suite', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<IssPositionAddress position=""/>).type()).toEqual("p");
    });

    it('should be selectable by class "iss-position"', function() {
        expect(shallow(<IssPositionAddress position="Warsaw"/>).is('.iss-position')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(<IssPositionAddress position="Warsaw"/>).find('.iss-position').length).toBe(1);
    });

    it('should render to static HTML', function() {
        expect(render(<IssPositionAddress position="Warsaw"/>).text()).toEqual('Currently ISS is over Warsaw');
    });
});
