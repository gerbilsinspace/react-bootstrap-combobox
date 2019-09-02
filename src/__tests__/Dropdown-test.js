import React from 'react';
import {cleanup, fireEvent, render, create} from '@testing-library/react';
import { Dropdown } from '../index';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Dropdown tests', () => {

  it('Click select/deselect all', () => {
    
    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="5"
      labels={{deselectAll: "NoneSelected",selectAll: "AllSelected"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li><li><a>AB<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>CC<span class=\"\"></span></a></li><li><a>DD<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>EE<span class=\"\"></span></a></li><li><a>FF<span class=\"\"></span></a></li><li><a>GG<span class=\"\"></span></a></li></ul>")
    
    component.find('#rbs-menu-button-selectall-button-123').simulate('click');
    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>AB<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>BB<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>CC<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>DD<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>BB<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>EE<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>FF<span class=\"glyphicon glyphicon-ok\"></span></a></li><li><a>GG<span class=\"glyphicon glyphicon-ok\"></span></a></li></ul>")

    component.find('#rbs-menu-button-deselectall-button-123').simulate('click');
    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li><li><a>AB<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>CC<span class=\"\"></span></a></li><li><a>DD<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>EE<span class=\"\"></span></a></li><li><a>FF<span class=\"\"></span></a></li><li><a>GG<span class=\"\"></span></a></li></ul>")

  
  });

  it('Filter list', () => {
    
    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="5"
      labels={{deselectAll: "NoneSelected",selectAll: "AllSelected"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li><li><a>AB<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>CC<span class=\"\"></span></a></li><li><a>DD<span class=\"\"></span></a></li><li><a>BB<span class=\"\"></span></a></li><li><a>EE<span class=\"\"></span></a></li><li><a>FF<span class=\"\"></span></a></li><li><a>GG<span class=\"\"></span></a></li></ul>")
    
    let eventObj = { target: { value: 'AA' } };
    component.find('input').simulate('change', eventObj);
    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li></ul>")

    eventObj = { target: { value: 'A' } };
    component.find('input').simulate('change', eventObj);
    expect(component.find("#rbs-menu-button-dropdown-list-123").html()).toEqual("<ul id=\"rbs-menu-button-dropdown-list-123\" class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li><li><a>AB<span class=\"\"></span></a></li></ul>")
      
  });
  
  it('Singular/plural labels', () => {

    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="5"
      labels={{singular: "car", plural: "cars"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select car</span> <span class=\"caret\"></span></button>")
    
    component.find('#rbs-menu-button-selectall-button-123').simulate('click');
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">9 cars selected</span> <span class=\"caret\"></span></button>")

    component.find('#rbs-menu-button-deselectall-button-123').simulate('click');
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select car</span> <span class=\"caret\"></span></button>")

  
  });

  it('Select first element', () => {

    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="5"
      labels={{singular: "car", plural: "cars"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select car</span> <span class=\"caret\"></span></button>")
    shallow(component.find("a").get(0)).simulate("click")
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">AA</span> <span class=\"caret\"></span></button>")  
    
  });

  it('Select three elements, maxElementPlaceholder = 2', () => {

    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="2"
      labels={{singular: "car"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select car</span> <span class=\"caret\"></span></button>")
    shallow(component.find("a").get(0)).simulate("click")
    shallow(component.find("a").get(1)).simulate("click")
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">AA, AB</span> <span class=\"caret\"></span></button>")  
    shallow(component.find("a").get(2)).simulate("click")
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">3 items selected</span> <span class=\"caret\"></span></button>")  

  });

  it('Single select', () => {

    const component = shallow(
      <Dropdown
      isMultiSelect={false}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="2"
      labels={{singular: "car"}}
      uniqueId="123"
    ></Dropdown>,
    );

    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select car</span> <span class=\"caret\"></span></button>")
    shallow(component.find("a").get(0)).simulate("click")
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">AA</span> <span class=\"caret\"></span></button>")  
    shallow(component.find("a").get(1)).simulate("click")
    expect(component.find("#rbs-menu-button-123").html()).toEqual("<button id=\"rbs-menu-button-123\" type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">AB</span> <span class=\"caret\"></span></button>")  

  });
  

  it('Select/deselect all labels', () => {
    

    const {getByText} = render(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA", "AB", "BB", "CC", "DD", "BB", "EE", "FF", "GG"]}
      maxElementPlaceholder="5"
      labels={{deselectAll: "NoneSelected",selectAll: "AllSelected"}}
      uniqueId="123"
    ></Dropdown>,
    );
    
    expect(getByText(/AllSelected/i)).toBeTruthy()
    expect(getByText(/NoneSelected/i)).toBeTruthy()

  });

  it('No html ids', () => {
  
    const component = shallow(
      <Dropdown
      isMultiSelect={true}
      showButtonsSelectAll={true}
      data={["AA"]}/>
    );
    
    expect(component.find(".input-box").html()).toEqual("<div class=\"input-box\"><button type=\"button\" class=\"btn btn-default dropdown-toggle show-special-title button-dropdown\"><span class=\"pull-left filter-option\"></span><span class=\"pull-left special-title\">Select item</span> <span class=\"caret\"></span></button><div class=\"dropdown-menu \"><div class=\"bs-searchbox\"><input type=\"text\" class=\"form-control\"/></div><div class=\"bs-actionsbox \"><div class=\"btn-group btn-block\"><button type=\"button\" class=\"actions-btn bs-select-all btn btn-default select-all-button\">Select All</button><button type=\"button\" class=\"actions-btn bs-deselect-all btn btn-default deselect-all-button\">Deselect All</button></div></div><ul class=\"dropdown-menu inner\"><li><a>AA<span class=\"\"></span></a></li></ul></div></div>")
   
  });
  
});