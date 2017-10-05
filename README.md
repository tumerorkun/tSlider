# tSlider
jQuery Slider Plugin controlled via Data Attributes

### By Orkun Tümer, [tumerorkun](http://tumerorkun.com/) 2017

**tSlider** uses [jQuery 3.1.1](https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js "jQuery") and a bunch of icons from [Font-Awesome](https://use.fontawesome.com/a0eb305f86.js "Font Awesome")

[Try the Demo](http://www.tumerorkun.com/tSlider/ "Demo")

## Documentation

1. HTML and jSON syntax.
	
	  ```html
    HTML;
      <div id="tSlider"></div><!-- id is not neccessary to work with plugin, it is neccessary for style.css -->
	  ```
	  ```json
    jSON; (json file should be in img folder)
      {"photos":[
      {
      "number":1,
      "name":"Your Photo Name",
      "ext":"Photo Extension",
      "location":"Folder Location"
      },
      {
      "number":2,
      "name":"SamplePhoto",
      "ext":"jpg",
      "location":"img"
      }
      ]}
	  ```
	    
2. Activate the slider.
	
	  ```html		
    <div id="tSlider" data-slider="tSlider"> <!-- call the function and initialize the tSlider -->
	  ```
		
3. Control the available options.
	
	```html		
     <div id="tSlider" data-slider="tSlider" 
                       data-speed="1500" 
                       data-wait="2500" 
                       data-navonhover="false" 
                       data-lines="true"
                       data-autoplay="false"
                       data-effect="lineer"> 
	```
  * **speed:** Control the duration of the cross fade transition effect. Default is 1000 _(in milliseconds)_
  * **wait:** Control the waiting time between the transitions. Default is 2000 _(in milliseconds)_
  * **navonhover:** Activate/Deactivate the visualization of navigation arrows. Default is false _(bool)_
  * **lines:** Activate/Deactivate the visualization of the navigation lines. Default is true _(bool)_
  * **autoplay:** Activate/Deactivate the autoplay. Default is true _(bool)_
  * **effect:** Choose transition effect there are two option for now (fade and lineer). Default is fade
	
### IE support
	
Sorry, obsolete browsers like IE 6,7 and 8 are not supported
	
#### Help
	
If you have some trouble please let me know <tumerorkun@outlook.com>
