import React, { PropTypes } from 'react'
import qs from 'query-string'

const embedUrls = {
    'youtube': 'http://www.youtube.com/embed/',
    'vimeo': 'http://player.vimeo.com/video/'
  };

const VideoEmbed = React.createClass({
	propTypes: {
	 	service: PropTypes.oneOf(Object.keys(embedUrls)).isRequired,
    	video: PropTypes.string.isRequired
	},
	getIdFromVideoString(vString) {
		const urlArr = vString.split('/');
		const idString = urlArr[urlArr.length - 1];
		const queryParams = qs.extract(vString);

		return (queryParams && qs.parse(queryParams).v) || idString || '';
	},
	render() {
		const { service, video } = this.props;
		const src = `${embedUrls[service]}${this.getIdFromVideoString(video)}`;
		return (
			<iframe
				src={src}
				frameBorder= '0'
				webkitAllowFullScreen
				mozallowfullscreen
				webkitAllowFullScreen
				allowfullscreen
			/>
		)
	}
});

export default VideoEmbed