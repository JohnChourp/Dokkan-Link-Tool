export function sleep(duration){
	return new Promise(resolve => {
		setTimeout(resolve,duration)
	})
}

//example
// sleep(200).then(()  => {
//
// })