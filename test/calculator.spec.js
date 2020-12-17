/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import App from './../src/js/app';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

describe('App Component', function () {
  this.timeout(6500);
  this.slow(3000);

  it('should shallow render', () => {
    expect(shallow(<App />).contains(<h3>Mortgage Calculator</h3>)).to.equal(true);
  });
});
//hello
