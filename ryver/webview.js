module.exports = (Franz, options) => {
	function getMessages() {
		// get new conversations in My Queue
    const myQueue = $('#uniqName_1_7 > span.scene-space-tab-button__bubble > span.scene-space-tab-button__count').text();

    // get all missed conversations
    const missed = $('#uniqName_1_1 > span.scene-space-tab-button__bubble > span.scene-space-tab-button__count').text();

    // set Franz badge
    // myQueue => New conversations in My Queue
    // missed => All missed conversations
    Franz.setBadge(myQueue, missed);
	}

	Franz.loop(getMessages);
}
