module.exports = (Franz, options) => {
	function getMessages() {
    let notifications = $('[data-entity="Entity.UserNotification"] > span > span.scene-space-tab-button__count');
    let notification_counter = parseInt(notifications.innerText);
    Franz.setBadge(notification_counter);
	}

	Franz.loop(getMessages);
}
