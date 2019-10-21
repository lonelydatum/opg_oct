(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var start = function start() {
	var tl = new TimelineMax();

	var time = .6;

	tl.add("start");
	tl.set('.frame1', { opacity: 1 });
	tl.set('.frame2', { opacity: 1 });

	tl.add("t1");
	tl.from('.bg1', 5, { scale: .8 }, "t1");

	tl.from('.bar', time, { y: '+=100', opacity: 0 }, "t1+=.3");
	tl.from('.t1a', time, { y: '+=100', opacity: 0 }, "t1+=.7");
	tl.from('.t1b', time, { y: '+=100', opacity: 0 }, "t1+=.9");

	tl.add("f2", 3);

	tl.to(".frame1", .5, { y: -250 }, "f2");
	tl.from(".frame2", .5, { y: 250 }, "f2");

	tl.from('.t2a', time, { y: '+=100', opacity: 0 }, "f2+=.4");
	tl.from('.t2b', time, { y: '+=100', opacity: 0 }, "f2+=.6");
	tl.from(['.cta', '.replay'], .5, { opacity: 0 }, "f2+=1");

	// tl.gotoAndPlay("f2")

	var replay = document.getElementById("replay");

	replay.addEventListener("click", function () {
		tl.gotoAndPlay("start");
	});
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
