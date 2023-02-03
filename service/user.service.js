const { MT5Request } = require('./mt5request.service');
const qs = require('qs');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const req = new MT5Request(Server, Port);

module.exports = {
    adduser,
    updateuser,
    deleteuser,
    getuser
}

async function adduser(params) {
    var query = qs.stringify(params);
    // Authenticate on the server using the Auth command 

    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/user/add?' + query, function(error, res, body) {
            if (error) {
                console.log(error);
                return;
            }
            var response = req.ParseBodyJSON(error, res, body, null);
            var data = response.answer;
            console.log(data);
            return data;
        });

    });
}

async function updateuser(params) {
    var query = qs.stringify(params);
    // Authenticate on the server using the Auth command 

    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/user/update?' + query, function(error, res, body) {
            if (error) {
                console.log(error);
                return;
            }
            var response = req.ParseBodyJSON(error, res, body, null);
            var data = response.answer;
            console.log(data);
            return data;
        });

    });
}

async function deleteuser(params) {
    // Authenticate on the server using the Auth command 

    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/user/delete?login=' + params.login, function(error, res, body) {
            if (error) {
                console.log(error);
                return;
            }
            var response = req.ParseBodyJSON(error, res, body, null);
            var data = response.answer;
            console.log(data);
            return data;
        });

    });
}

async function getuser(params) {
    // Authenticate on the server using the Auth command 

    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/user/get?login=' + params.login, function(error, res, body) {
            if (error) {
                console.log(error);
                return;
            }
            var response = req.ParseBodyJSON(error, res, body, null);
            var data = response.answer;
            console.log(data);
            return data;
        });

    });
}