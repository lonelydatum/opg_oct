const start = ()=>{

	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
		
	const time = .6

	tl.add("start")

	tl.set('.frame1', {opacity:1})
	tl.set('.frame2', {opacity:1})

	tl.add("t1")
	tl.from('.bg1', 5, {scale:.8}, "t1")
	
	tl.from('.bar', time, {y:'+=100', opacity:0}, "t1+=.3")
	tl.from('.t1a', time, {y:'+=100', opacity:0}, "t1+=.7")
	tl.from('.t1b', time, {y:'+=100', opacity:0}, "t1+=.9")
	

	tl.add("f2", 3)

	tl.to(".frame1", .5, {y:-250}, "f2")
	tl.from(".frame2", .5, {y:250}, "f2")
	
	tl.from('.t2a', time, {y:'+=100', opacity:0}, "f2+=.4")
	tl.from('.t2b', time, {y:'+=100', opacity:0}, "f2+=.6")

	tl.from(['.cta', '.replay'], .5, {opacity:0}, "f2+=1")
	tl.set('.cta2', {display:'block'})

	// tl.gotoAndPlay("f2")

	const replay = document.getElementById("replay")

	replay.addEventListener("click", ()=>{
		tl.gotoAndPlay("start")
	})
	

}

start()



module.exports = {};

