const { MT5Request } = require('./mt5request.service');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const qs = require('qs');
const req = new MT5Request(Server, Port);

module.exports = {
    getpositionbysymbol,
    totalposition,
    getpositionbypage,
    deleteposition,
    updateposition
}

async function getpositionbysymbol(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/position/get?login=' + params.login + '&symbol=' + params.symbol, function(error, res, body) {
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

async function totalposition(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/position/get_total?login=' + params.login, function(error, res, body) {
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

async function getpositionbypage(params) {
    var query = qs.stringify(params);
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/position/get_page?' + query, function(error, res, body) {
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

async function deleteposition(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        // Ticket can be multiple with comma separation 
        req.Get('/api/position/delete?ticket=' + params.ticket, function(error, res, body) {
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

async function updateposition(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/position/update', JSON.stringify(params), function(error, res, body) {
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