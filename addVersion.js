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
const version = 'production';

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
      <wait.visible selector={`.e2e-project-link-${slug}`}/>
      <recording.start filePath="videos/addVersion" />
      <click selector={`.e2e-project-link-${slug}`} />

      {/* project page */}
      <click selector=".e2e-version-button-menu button:nth-child(2)" />
      <click selector=".e2e-add-version-link" />
      <click selector="input[type=text][name=version]" />
      <type>{version}</type>
      <click selector=".e2e-add-version-button" />

      <wait delay={2000}/>
    </using>

    <recording.stop />

</demo>
