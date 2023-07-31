CDN link is not good way to add REACT. 
already have react in node module so no need to call another network for run react 

Biggest package manager, all the packeges hosted in that. 
- npm init 
NPM will take care of what versions of packages we are using in project, this will tack care inside the package.json.
NPM manages all depencies/packages 
Package.json is configuration of NPM, we need this file bcz of 
most IMP packege is bunddle(which comparess, clean , minified, bunddle our app) like *webpack, parcel, wit* bunddle 

- install parcel => npm install -D parcel 
1. dev dependency (development phase)
2. normal dependancy (for production phase)

if install any npm plugin in react configuration and version will go inside the package.json and code will go inside node module.


parcel : '^2.8.3'
^ is responsible if minor version is updated then automatically version will update on app 

parcel : '~2.8.3'
~ is responsible if major version or patch is updated then automatically version will update on app 

project dependes on parcel , parcel has own dependencies (need lot of other packeges/ dependence on other reposetory) that is know as transerative dependencies

node module collection of dependencies ,  it is huge 

package.json - has approx version (configuration file of project)
package-lock.json - has approx exact version all ()

why don't we add node_module on git. 


Why we need to add package and packege-lock on git. 
package and packege-lock are maintaing the versions of dependencies , if you have pkg and pkg-lock then we can regenerate node module

Whaterver you can regenerate don't put in git. just put essential things. 

#parcel
Parcel has bascially created server for us and our project will run on localhost(port) 
Build a app and render on browser 

- dev Build
- Local Server
- HMR = Hot module replacement 
- file watching algorithm -  that is written in c++
- caching things for you - Faster Builds (Created .parcel-cache folder so build will run faster due to cache)
- Image optimaization
- minification of file
- Bundling 
- Compressing (size, remove white spaces )
- Compress
- Consistant hashing
- Code splitting
- Different Bundling - support older browsers
- Diagnostic 
- Error Handling
- HTTPs // it relaods https 
- Tree shaking // removed unused code 
- different build for dev 
- different bundles for dev and production

remove app.js from package.json if run the prod build 
dist folder -  when generets dev buid it puts setup into dist folder 
when you refresh the page parcel-cache and dist foldere update the browser content 



NPM -> installing packages
NPX - > excuting pacakges


JSX => Babel transpiles it to React.createElement => ReactElement - JS object => HTMLElement(Render) 

Front End System design Interview
What is config driven UI ? 
All the UI is driven by config we can return UI once and controlling that by config driven. 


Two types of import/export 
- default Export/Import 
export default component
import Component from '../path'

- Named Export/Import 
export const Component;
import {component} from 'path'

UseState - Create state variable maintain state of your component. 
when state vairable is update/chnages react will re-render the component

why react is fast/optimize? 
- React doesn't do anything that it is  good at DOM operation/ DOM manipulation, it manipulate DOM very quickly

Reconcilation Algorithm, diff algoritham and React fiber (React about google acdilite(github link))
- In the we have DOM tree 

What is diff algoritham
- basicall finds out of differenct bt/w updated VDOM and previous VDOM
for ex. restoCard has 7 card after click the button on UI the new vDOM created has 3 card to tryies to find out the differect b/w old and new VDOM (4Card) it will then actually udpate the DOM.

- Virtual DOM is representation of actual DOM (VDOM has nested Object)

[listOfResto, setListOfResto] = useState(resList)
ASA setListOfResto calls reconcilation algorithm starts and re-rendering your page 
- listOfResto => re-rendered data again and again (evertytime state is changing react keep eye on state , react is monitoring constantly and why this happen due to spacial variable useState) (find out the div and update the UI)
- setListOfResto => ASA setListOfResto called  react starts reconcilation/re-rendering algorithm ant updated the data again and again (find out the div and update the UI) 
Why two things, why not only one bcz there needs to be trigger to start the Diff algo and update the UI that's why needed the 2nd function it will automaticall;y re rendering your component

[listOfResto, setListOfResto] this is arr destructuring how see below 
const arr = useState(resList)
[listOfResto, setListOfResto] = arr; or like 
const listOfResto = arr[0];
const setListOfResto = arr[1];

it is same useState return array. 