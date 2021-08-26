const express = require("express");
const router = express.Router();

const {
	addNotification,
	deleteNotification,
	fetchAllNotifications,
	fetchUserNotification,
	updateNotification,
} = require("../services/notifications.service");

router.get("/", (req, res) => {
	fetchAllNotifications()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).send(err));
});

router.get("/:user", (req, res) => {
	const { user } = req.params;
	fetchUserNotification(user)
		.then((data) => res.json(data))
		.catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
	addNotification(req)
		.then((id) => res.status(201).send(id))
		.catch((err) => res.status(500).json(err));
});

router.delete("/:notificationId", (req, res) => {
	const { notificationId } = req.params;
	deleteNotification(notificationId)
		.then(() => res.status(200).send("Deleted successfully"))
		.catch((err) => res.status(500).send(err));
});

router.put("/", (req, res) => {
	const { notification } = req.body;
	updateNotification(notification)
		.then(() => res.status(200).send("Notification updated successfully"))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
