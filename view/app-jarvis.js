/* eslint-disable no-console */
// eslint-disable-next-line no-undef
const app = angular.module('jarvis', ['ngRoute']),
	URL = 'http://127.0.0.1:3000',
	USER = 'default';
// eslint-disable-next-line no-undef
var recognition = new webkitSpeechRecognition();
var recognizing;

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl:'./components/main.html',
			controller:'MainController',
			title:'Jarvis - personal assistant',
		});
});

app.controller('MainController', function($scope,$location,$rootScope,$http) {

	$scope.messageStack = [];
	$scope.addMessagesToStack = function() {
		if (!$scope.message.startsWith('Type a message')) {
			let message = $scope.message,
				date = new Date(),
				hrs = date.getHours(),
				mins = date.getMinutes(),
				messageObj = {
					message: '',
					sender: '',
					time: '',
					length: null
				},
				data = null;

			messageObj.message = message;
			messageObj.length = message.length;
			messageObj.time = String(hrs + ':' + mins);
			messageObj.sender = 'you';

			$scope.messageStack.push(messageObj);
			data = 'username='+USER+'&message='+messageObj.message;

			$http({
				url:URL+'/message',
				method:'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data:data
			}).then(resp => {
				let res = resp.data;
				console.warn('response from service');
				console.warn(res);
			}).catch(e => {
				throw e;
			});

			$scope.message = 'Type a message ...';

			console.warn($scope.messageStack);
		} else {
			alert('Please enter a message');
		}
	};

	$scope.removeMessage = function(){
		if($scope.message.startsWith('Type a message ...')){
			$scope.message = '';
		}
	};

	$scope.initStack = function() {
		$scope.message = 'Type a message ...';
	};

	$scope.startSpeak = function() {
		// eslint-disable-next-line no-undef
		// var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		setTimeout(() => {
			reset();
		}, 1000);
		// reset();
		recognition.onend = reset;

		recognition.onresult = function (event) {
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					$scope.message = event.results[0][0].transcript;
				}
			}
		};

		function reset() {
			recognizing = false;
			var button = document.getElementById('message-input');
			// eslint-disable-next-line no-undef
			button.innerHTML = 'Click to Speak';
		}
	};

	$scope.toggleStartStop = function() {
		if (recognizing) {
			recognition.stop();
			this.reset();
		} else {
			recognition.start();
			recognizing = true;
			var button = document.getElementById('message-input');
			// eslint-disable-next-line no-undef
			button.innerHTML = 'Click to Stop';
		}
	};

	$scope.reset = function() {
		recognizing = false;
		var button = document.getElementById('message-input');
		// eslint-disable-next-line no-undef
		button.innerHTML = 'Click to Speak';
	};
});




