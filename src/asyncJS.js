// Async and await are built on top of generators and Promises.

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}


async function asynccall() {
    console.log("Inside aysnccall");
    let result = await resolveAfter2Seconds(); // await waits until promise is resolved and returns the resolved value not promise
    return result; //result is wraped in a promise.resolve


}

asynccall().then( x => {
    console.log("Done Async")
});



console.log("Over");
