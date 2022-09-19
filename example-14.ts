// These functions take a funtion as an argument. 
// Set the type these parameters

// In all of the functions below type the callback

// This function takes a callback that receives a string. 

function callYouLater(callback: (value: s) => void, time: number): void {
	setTimeout(() => {
		callback({input: 'What it be like?'})
	}, time)
}

type s = {
	input: string
}

type Call = {
	success: boolean, 
	probability: number
}

function callMeMaybe(callback: (value: Call) => void, probability: number) {
	setTimeout(() => {
		if (Math.random() * 100 < probability) {
			return callback({ success: true, probability })
		}
		callback({ success: false, probability })
	}, 1000)
}

// 

export {
	callYouLater,
	callMeMaybe
}
