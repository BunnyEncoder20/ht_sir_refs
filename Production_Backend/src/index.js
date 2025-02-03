function do2(callback) {
  log.trace("Execute function: do2");

  return callback("do2 callback param");
}

var do2Result = do2((param) => {
  log.trace(`print ${param}`);

  return `return from callback(${param})`; // we could use that return
});

log.trace(`print ${do2Result}`);
