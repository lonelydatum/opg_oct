const start = ()=>{
	const tl = new TimelineMax()
		
	const time = .6


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
	tl.from('.cta', .5, {opacity:0})

}

start()



module.exports = {};

