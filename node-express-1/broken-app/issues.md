# Broken App Issues

Some of the variables names weren't specifing for their purposes.
The value result needed to get Promise.all so it can wait for the response of the axios and then return it as an object.
The output should show bio, then name and not the opposite.
At the error handeling, no callback was declared meaning no message and status code was sent back to the user.
