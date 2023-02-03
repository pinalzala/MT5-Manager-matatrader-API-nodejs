const { MT5Request } = require('./mt5request.service');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const qs = require('qs');
const req = new MT5Request(Server, Port);

module.exports = {
    addclient,
    updateclient,
    deleteclient,
    getclient
}

async function addclient(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/client/add', JSON.stringify(params), function(error, res, body) {
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

async function updateclient(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/client/update', JSON.stringify(params), function(error, res, body) {
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

async function deleteclient(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/client/delete?id=' + params.id, function(error, res, body) {
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

async function getclient(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/client/get?id=' + params.id, JSON.stringify(params), function(error, res, body) {
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