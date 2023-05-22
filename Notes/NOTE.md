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