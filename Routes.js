import React, { Component } from 'react';
import {Platform} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './screens/Home';
import ViewNews from './screens/ViewNews';

export default class Routes extends Component<{}> {

	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={false}>
					<Scene key="home" component={Home} title="Home" initial={true} />
					<Scene key="viewnews" component={ViewNews} title="View News"/>
			    </Stack>
			</Router>
		)
	}
}