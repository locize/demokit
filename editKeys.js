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
const addSegmentKey = 'contact.response';
const addSegmentValue = 'Thank you!';
const removeSegmentKey = 'contact.button';
const editSegmentKey = 'contact.label';
const editSegmentValue = ' We would be very happy!';


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
      <wait.visible selector=".e2e-login-page"/>
      <click selector="input[type=text][name=username]" />
      <type>{username}</type>
      <click selector="input[type=password][name=password]" />
      <type>{password}</type>
      <click selector=".e2e-login-button" />

      {/* dashboard page */}
      <click selector={`.e2e-project-link-${slug}`} />

      {/* project page */}
      <click selector={`.e2e-namespace-link-${ns}`} />

      {/* editor page */}
      <wait.visible selector=".e2e-editor-page"/>
      <recording.start filePath="videos/editKeys" />
      <click selector=".e2e-editor-filter-add-key-button" />
      <click selector="input[type=text][name=key]" />
      <type>{addSegmentKey}</type>
      <click selector="input[type=text][name=value]" />
      <type>{addSegmentValue}</type>
      <click selector=".e2e-editor-filter-add-key-submit" />

      <click selector={`.e2e-editor-key-button-menu-${removeSegmentKey.replace(/./g, '-')} button`} />
      <click selector={`.e2e-editor-del-key-button-${removeSegmentKey.replace(/./g, '-')}`} />

      <click selector={`.e2e-editor-segment-value-${editSegmentKey.replace(/./g, '-')} textarea`} />
      <type>{editSegmentValue}</type>

      <click selector=".e2e-editor-save" />

      <wait delay={4000}/>
    </using>

    <recording.stop />

</demo>
