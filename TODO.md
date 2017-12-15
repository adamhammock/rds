Main tasks
- webpack-dev-server is not proxying socket.io properly
=> recommend having single server, with builtin proxy (I can use some of the code I've used before, probably 2-3 hours of work)
- current socket data also needs to send enough data on the first request to fully populate a graph (this will need to be replaced with actual data anyway)
=> probably .5 hour
- the socket data is not stored in the redux store
=> there is some code that seem to attempt to that, but I'm not sure that's the right approach, will need to think about this further to figure out whether that would be the right approach, we can also discuss
- need to pull data from postgres instead of using faked/random data (needed for demo?)
