const { demo, group, wait, using } = require('demokit');
const { type, paste } = require('demokit/keyboard');
const scene = require('demokit/scene');
const recording = require('demokit/recording');
const browser = require('demokit/window/browser');
const { click } = require('demokit/mouse');
const { key } = require('demokit/keyboard');

module.exports =
<demo>
    <scene width={1024} height={768} />

    <browser id = 'locize'
             title = 'locize'
             contentURL = 'http://localhost:3000'
             contentRect = {{
               origin: {
                 x: 'center',
                 y: 'center'
               },
               size: {
                 width: 1024,
                 height: 768
               }
             }} />

    <recording.start filePath='videos/getStarted' />

    <using window='locize'>
      {/* login page */}
      <wait.visible selector = '.e2e-login-page'/>
      <click selector='.e2e-register-link' />

      {/* register page */}
      <wait.visible selector = '.e2e-register-page'/>
      <click selector='input[type=text][name=firstname]' />
      <type>Carl</type>
      <click selector='input[type=text][name=lastname]' />
      <type>Winston</type>
      <click selector='input[type=text][name=email]' />
      <type>carl.winston@my-corporate-email.org</type>
      <click selector='input[type=text][name=username]' />
      <type>carl.winston</type>
      <click selector='input[type=password][name=password]' />
      <type>123qweasd</type>
      <click selector='input[type=password][name=confirmPassword]' />
      <type>123qweasd</type>
      <click selector='.e2e-register-button' />

      {/* login page */}
      <wait.visible selector = '.e2e-login-page'/>
      <click selector='input[type=text][name=username]' />
      <type>carl.winston</type>
      <click selector='input[type=password][name=password]' />
      <type>123qweasd</type>
      <click selector='.e2e-login-button' />

      {/* dashboard page */}
      <click selector='.herobutton' />

      {/* addProkect page */}
      <click selector='input[type=text][name=name]' />
      <type>Pocket CRM - moble app</type>
      <click selector='input[type=text][name=company]' />
      <type>Advanced Technology Services & more Inc.</type>
      <click selector='input[type=text][name=projectUrl]' />
      <type>http://advanced-tech-services.org/crm</type>
      <click selector='input[type=search]' />
      <type>en</type>
      <key code='enter'/>
      <click selector='.e2e-add-project-button' />

      <wait delay={2000}/>
    </using>

    <recording.stop />

</demo>
