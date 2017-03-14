// region import

import ViewDevices from './devices'
import ViewMain from './main'
import ViewSettings from './settings'
import ViewSignIn from './sign-in'

// endregion

// region Views

export default {
	'/m/web-ui/': ViewMain,
	'/m/web-ui/devices': ViewDevices,
	'/m/web-ui/settings': ViewSettings,
	'/m/web-ui/sign-in': ViewSignIn,
}

// endregion
