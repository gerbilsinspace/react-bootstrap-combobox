# re-boot-select &middot; [![GitHub package.json version](https://img.shields.io/github/package-json/v/fdefelici/re-boot-select?color=blue&label=npm)](https://www.npmjs.com/package/@fdefelici/re-boot-select) [![Build Status](https://travis-ci.org/fdefelici/re-boot-select.svg?branch=master)](https://travis-ci.org/fdefelici/re-boot-select) [![codecov](https://codecov.io/gh/fdefelici/re-boot-select/branch/master/graph/badge.svg)](https://codecov.io/gh/fdefelici/re-boot-select)

Select Component for React based on Bootstrap which offer the following features:
* Single Selection
* Multiple Selection
* Selection Handling
* Search through items
* Scrollbar Control
* Localization 

![Component ShowCase](../example/images/showcase.png)

# Usage
This component is based on React and Bootstrap (only css part), so in your project you must have these dependencies. It's suggested to adopt the following versions:
* react >= 15.0.0
* bootstrap >= 3.3.0

Then import the library:
```shell
$ npm install @fdefelici/re-boot-select[@VERSION] --save
```

And use it in your code:
```javascript
import RBS from "@fdefelici/re-boot-select"

...

<RBS.Select
    data={["Apple", "Banana", "Citrus", "Grapefruit"]}
/>
```

> For a full working example take a look [here](../example).

# Configuration
This component allow customization tweeking the following parameters:

Param | Type | Description | Default 
----- | ---- | ----------- | ------- 
data | string array | List of items | []
isMultiSelect | boolean | Allow multiple selection | false
labels | object | Localization support (check paragraph below for [details](#localization-support)) | English
maxElementPlaceHolder | integer | Max number of elements ... | ??
onSelectAndDeselect | function | Function called when a selection/deselection happen | none
showButtonsSelectAll | boolean | Show Select All / Deselect All buttons | false


## Localization Support
Using ```labels``` property it is possible to customize any text the component shows.

Param | Type | Description | Default 
----- | ---- | ----------- | ------- 
selection.empty | string | Shown when there are no selections | "Select an item"
selection.singular | string | Shown when one item is selected | "..."
selection.plural | string | Shown when multiple items are selected | "..." 
btn.select.all | string | Label for Select All Button | "Select All"
btn.unselect.all | string | Label for Unselect All Button | "Unselect All"

**Special Markers**

To build your text it's possible to use the follow markers:
* ```{size}```: represent the total number of items
* ```{sele}```: represent the number of items currently selected

**Example**
```javascript
<RBS.Select
    ...
    labels={{
        "sel.empty": "Select an item",
        "sel.singular": "One item selected",
        "sel.plural": "{sele} of {size} items selected",
        "btn.select.all": "Pick All",
        "btn.unselect.all": "Release All",
    }}

/>
```

# Browsers Compatibility
This component has been tested against the following browsers:
* Chrome  76+
* Firefox 68+
* Internet Explorer Edge 