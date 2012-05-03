FactoryService = function(database){
  var object = {};
  object.define = function(name, template){
    database[name] = template; 
  }

  object.create = function(recordname){
    var template = database[recordname];
    console.log(database);
    if(!template){
      throw ("Template " + recordname + " was not defined");
    }
    return template;
  }
  return object;
}

