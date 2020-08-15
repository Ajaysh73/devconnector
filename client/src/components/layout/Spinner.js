import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
	<Fragment>
		<img alt='spinner'
			src={spinner}
			style={{ width: '200 px', margin: 'auto', display: 'block' }}
		/>
	</Fragment>
);
