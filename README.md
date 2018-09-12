# Premier League 18/19 prediction app

This app lets you predict the outcome of the English Premier League of season 18/19.

Users are presented with a drag-n-drop interface where they can rearrange teams. The drag-n-drop functionality works on touch devices as well. Having rearranged the teams, users are asked to provide some additional information before the prediction can be sent.

There is a list of all the predictions which can be sorted by username and date sent. Clicking on one element in this list will take the user to that particular prediction.

Some interesting statistics will also be implemented at a later date (after quite a few predictions have been made).

### Technologies used:
* React
* React router
* Redux
* Axios
* Tailwind.css

### SVGs used:
* [Entypo pictograms by Daniel Bruce](http://www.entypo.com)

### Done:
* [x] Prediction list sorting functionality
* [x] Proper handling of loading, success and error states with respect to ajax requests
* [x] Abstract Loading state into its own component
* [x] Abstarct error state into its own component and make it customisable via props
* [x] Polyfilled Array.find and Array.from for IE
* [x] Added purgeCSS as a dev dependency

### Todo:
* [ ] Stats
* [ ] Need to add some proper info/text for the About component
* [ ] Might want to look into animating the mobile menu (eg. a slideToggle animation or something similar)