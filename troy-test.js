var
  couchdb = require("./lib/couchdb.js");

//var testClient = couchdb.createClient(5984, 'couchdb-pre-1', 'admin', 'capps');
var testClient = couchdb.createClient({
  'port' : 5984,
  'host' : 'couchdb-pre-1',
  'user' : 'admin',
  'pass' : 'capps',
  'timeout' : 10000
});


// CLIENT TESTS
testClient.allDbs(function(er, r) {
  console.log('\n.allDbs test ===============================');
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .allDbs test ===============================');
});



testClient.config(function(er, r) {
  console.log('\n.config test ===============================');  
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .config test ==============================='); 
});

testClient.uuids(2, function(er, r) {
  console.log('\n .uuids test ===============================');  
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .uuids test ==============================='); 
});

testClient.replicate('mobilize', 'mobilize_clone', function(er, r) {
  console.log('\n .replicate test ===============================');  
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .replicate test ==============================='); 
});

testClient.stats(function(er, r) {
  console.log('\n .stats test ===============================');  
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .stats test ==============================='); 
});

testClient.activeTasks(function(er, r) {
  console.log('\n .activeTasks test ===============================');  
  
  if(er) console.log(er);
  
  if(r){
    console.log(r);
  }
  
  console.log('/ .activeTasks test ===============================');
});
/**/

/* DB TESTS */


var testDb = testClient.db('curation');
//var testDb = testClient.db('fakefoo');


console.log('\n db.name test ===============================');  
console.log(testDb.name);
console.log('/ db.name test ===============================');

console.log('\n db.client test ===============================');  
console.log(testDb.client);
console.log('/ db.client test ===============================');

/*
//Does not work in native code either, as far as I can tell
testDb.exists(function(er, r){
  console.log('\n db.exists test ===============================');   
  
  console.log(er);
  console.log(r);
  
  console.log('/ db.exists test ==============================='); 
});

var newDb = testClient.db('new_database_six');
newDb.create(function(er, r){
  console.log('\n db.create test ===============================');   
  if(er) {
    console.log('!!ERROR!!');    
    console.log(er);
  }
  
  if(r){
    console.log(r.body);
  }
  console.log('/ db.create test ==============================='); 
});

var newDb = testClient.db('new_database_ten');
newDb.remove(function(er, r){
  console.log('\n db.remove test ===============================');   
  if(er) {
    console.log('!!ERROR!!');
    console.log(er);
  }
  
  if(r){
    console.log(r);
  }
  console.log('/ db.remove test ==============================='); 
});

testDb.getDoc('f2a5dc48bc88cd0387c1255d7d0007fa', function(er, r){
  console.log('\n db.getDoc test ===============================');   
  if(er) {
    console.log('!!ERROR!!');
    console.log(er);
  }
  
  if(r){
    console.log(r.body);
  }
  console.log('/ db.getDoc test ==============================='); 
});
/**/

/*
testDb.saveDoc('hereisauniqueidtoworkwith222222222', {testBody : 'body content'}, function(er, r){
  console.log('\n db.saveDoc test ===============================');   
  if(er) {
    console.log('!!ERROR!!');
    console.log(er);
  }
  
  if(r){
    console.log(r.body);
  }
  console.log('/ db.saveDoc test ==============================='); 
});

testDb.removeDoc('hereisauniqueidtoworkwith222222222', '3-431720be4faeb94eeb458333aea526e9', function(er, r){
  console.log('\n db.removeDoc test ===============================');   
  if(er) {
    console.log('!!ERROR!!');
    console.log(er);
  }
  
  if(r){
    console.log(r.body);
  }
  console.log('/ db.removeDoc test ==============================='); 
});

testDb.copyDoc('ooheehoohaahbingbangwallabingbang', 'overwriteme', '1-967a00dff5e02add41819138abb3284d', function(er, r){
  console.log('\n db.copyDoc test ===============================');   
  if(er) {
    console.log('!!ERROR!!');
    console.log(er);
  }
  
  if(r){
    console.log(r.body);
  }
  console.log('/ db.copyDoc test ==============================='); 
});
/**/



