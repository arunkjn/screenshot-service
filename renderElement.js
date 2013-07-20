function renderElement(page, selector) {
	var prevClipRect = page.clipRect;
 
	page.clipRect = page.evaluate(function(selector) {
		return document.querySelector(selector).getBoundingClientRect();
	}, selector);
 
 
	var pic = 'data:image/png;base64,' + page.renderBase64('png');
	page.clipRect = prevClipRect;
	return pic;
}
 
if (module && module.exports) module.exports = renderElement;