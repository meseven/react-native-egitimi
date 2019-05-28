const fcm = require('fcm-notification');
const FCM = new fcm('./my-push-notification-app-33865.json');
const tokens = [
	'cA-c34bpY70:APA91bEdn5CWJg7gevhO4LaMm3Mr_mSdbbWhEUKYj8vEo8e8lqXlAwzc0W-cXiFlEGNZJiKKsJ302WvcM1BCrqQkrcW8-lFAMbmnKfQJNm_5vpP2Pb7yvOter4lGDVuHH7iR2s9sgkcd',
	'dhj1ES9quA4:APA91bHQS8wp7pX-5S56-9prO4uTj0WYnhCqMuiha48xW-TCWsKJ9mcRH-2j6XrjcJlFNo5m_ipYO_u2-7ch5L_pK4WjD8bjKkTuIaJawjP5fmOgDujEw4a_x7lErvdhh_gv52sJr1mI'
];

const message = {
	data: {    //This is only optional, you can send any data
		score: '850',
		time: '2:45'
	},
	notification:{
		title : 'Test',
		body : 'Test body'
	},
};

FCM.sendToMultipleToken(message, tokens, function(err, response) {
	if(err){
		console.log('error found', err);
	}else {
		console.log('response here', response);
	}
})
