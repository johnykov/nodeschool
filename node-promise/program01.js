var q = require("q");
var defer = q.defer();

defer.promise.then(function() {
    console.log("RESOLVED!")
});

setTimeout(function() {
    defer.resolve()
}, 300)

// Promper answer?
// def.promise.then(console.log);
// setTimeout(def.resolve, 300, "RESOLVED!");