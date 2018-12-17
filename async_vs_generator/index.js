const request_promise = require('request-promise-native');

function runner(genFn) {
	const itr = genFn();
	
	function run(arg) {
		let result = itr.next(arg);
		
		if (result.done) {
			return result.value;
		} else {
			return Promise.resolve(result.value).then(run);
		}
	};
	
	return run();
};

function* init() {
  const res = yield request_promise('https://jsonplaceholder.typicode.com/todos/1');
  console.log(res)
  const res2 = yield request_promise('https://jsonplaceholder.typicode.com/todos/2');
  console.log(res2)
  return res2;
}

runner(init)

async function asyncFunction() {
	const res = await request_promise('https://jsonplaceholder.typicode.com/todos/1');
	console.log(res)
	const res2 = await request_promise('https://jsonplaceholder.typicode.com/todos/2');
	console.log(res2)
	return res2;
}

asyncFunction()
