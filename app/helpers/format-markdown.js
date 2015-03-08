// This is to make JSHint happy
/*global Showdown:false*/
/*global Handlebars:false*/

import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
	var showdown = new Showdown.converter();

	return new Handlebars.SafeString(showdown.makeHtml(markdown));
});