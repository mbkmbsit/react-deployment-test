import Raven from 'raven-js';

//analytic error logs
function init() {
	Raven,
		config('https://url', {
			release: '',
			environment: ''
		}).instal();
}
function log(error) {
	Raven.captureException(error);
}

export default {
	init,
	log
};
