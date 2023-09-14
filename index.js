--2667
function createHelloWorld(){
    return function(){
        return "Hello World";
    };
}
const f = createHelloWorld();
console.log(f());

--2620
function createCounter(n) {
    let currentValue = n;
    
    function counter() {
        const result = currentValue;
        currentValue++;
        return result;
    }

    return counter;
}

const n = 10;
const counter = createCounter(n);
const output = [counter(), counter(), counter()];
console.log(output); 


--2704
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

--2665
function createCounter(init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue++;
      return currentValue;
    },
    decrement: function () {
      currentValue--;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
}


--2635
var map = function(arr, fn) {
  const result = [];

  for (let i=0; i< arr.length; i++) {
    result.push(fn(arr[i],i));
  }

  return result;    
};


--2634

var filter = function(arr, fn) {
    const filteredArr =[];

    for (let i=0; i< arr.length; i++) {
        if (fn (arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
    
};

--2626
var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};


--2629

var compose = function(functions) {
    return function(x) {
        
        if (functions.length === 0) {
            return x;
        }
        
        let result = functions[functions.length - 1](x);
        
        for (let i = functions.length - 2; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};


--2703

var argumentsLength = function(...args) {
    return args.length;
};

--2666

var once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        } else {
            return undefined;
        }
    };
};

--2723
var addTwoPromises = async function(promise1, promise2) {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    const sum = result1 + result2;
    return Promise.resolve(sum);
};
--2621
async function sleep(millis) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve(millis);
    }, millis);
  });
    
}
--2715
const cancellable = (fn, args, t) => {
  let timeoutId;
  let cancelled = false;
  
  const executeFn = () => {
    if (!cancelled) {
      const result = fn(...args);
      console.log({"time": t, "returned": result});
    }
  };
  
  timeoutId = setTimeout(executeFn, t);
  
  const cancelFn = () => {
    clearTimeout(timeoutId);
    cancelled = true;
  };

  return cancelFn;
};

--2725
function cancellable(fn, args, t) {
  let intervalId;

  const initialResult = fn(...args);

  const cancelFn = () => {
    clearInterval(intervalId);
  };

  intervalId = setInterval(() => {
    const result = fn(...args);
  }, t);

  return cancelFn;
}

--2727
var isEmpty = function(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  
  return false;
};
--2677
var chunk = function(arr, size) {
  if (size <= 0) {
    return [];
  }

  const chunkedArr = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArr;
};
--2619
Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const nums = [null, {}, 3];
console.log(nums.last()); 

const emptyArr = [];
console.log(emptyArr.last()); 
--2724
function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}
--2695
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, val) => acc + val, 0);
};

ArrayWrapper.prototype.toString = function() {
    return "[" + this.nums.join(",") + "]";
};
--2726

class Calculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}