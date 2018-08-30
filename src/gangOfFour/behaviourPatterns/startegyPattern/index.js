// With this pattern we can  group a set of algorithms and change them at run time.
// Good example is checkout in e-commerce sites. same checkout with credit card, debit card and cash.
// Can be similar to state pattern (in Cricket game) and be confusing



//here logger does multiple things based on the current set strategy

var logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

logger.changeStrategy('none');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');
