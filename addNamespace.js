const { demo, group, wait, using } = require('demokit');
const { type, paste } = require('demokit/keyboard');
const scene = require('demokit/scene');
const recording = require('demokit/recording');
const browser = require('demokit/window/browser');
const { click } = require('demokit/mouse');
const { key } = require('demokit/keyboard');

const username = 'carl.winston';
const password = '123qweasd';
const slug = 'w4rxnto3';
const ns = 'contact-page';
const segmentKey = 'contact.label';
const segmentValue = 'Feel free to contact us!';
const segment2Key = 'contact.button';
const segment2Value = 'submit';

module.exports =
<demo>
    <scene width={1024} height={768} />

    <browser id = "locize"
             title = "locize"
             contentURL = "http://localhost:3000"
             contentRect = {{
               origin: {
                 x: "center",
                 y: "center"
               },
               size: {
                 width: 1024,
                 height: 768
               }
             }} />

    <using window="locize">
      {/* login page */}
      <wait.visible selector = ".e2e-login-page"/>
      <click selector="input[type=text][name=username]" />
      <type>{username}</type>
      <click selector="input[type=password][name=password]" />
      <type>{password}</type>
      <click selector=".e2e-login-button" />

      {/* dashboard page */}
      <wait.visible selector={`.e2e-project-link-${slug}`}/>
      <recording.start filePath="videos/addNamespace" />
      <click selector={`.e2e-project-link-${slug}`} />

      {/* project page */}
      <click selector=".e2e-add-namespace-link" />
      <click selector="input[type=text][name=ns]" />
      <type>{ns}</type>
      <click selector=".e2e-add-namespace-button" />
      <click selector={`.e2e-namespace-link-${ns}`} />

      {/* editor page */}
      <wait.visible selector = ".e2e-editor-page"/>
      <click selector=".e2e-editor-filter-add-key-button" />
      <click selector="input[type=text][name=key]" />
      <type>{segmentKey}</type>
      <click selector="input[type=text][name=value]" />
      <type>{segmentValue}</type>
      <click selector=".e2e-editor-filter-add-key-submit" />
      {/*<click selector=".e2e-editor-filter-add-key-button" />*/}
      <click selector="input[type=text][name=key]" />
      <type>{segment2Key}</type>
      <click selector="input[type=text][name=value]" />
      <type>{segment2Value}</type>
      <click selector=".e2e-editor-filter-add-key-submit" />
      <click selector=".e2e-editor-save" />

      <wait delay={2000}/>
    </using>

    <recording.stop />

</demo>
