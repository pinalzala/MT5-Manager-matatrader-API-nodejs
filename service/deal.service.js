const { MT5Request } = require('./mt5request.service');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const qs = require('qs');
const req = new MT5Request(Server, Port);

module.exports = {
    getdealbyticket,
    totaldeal,
    getdealbypage,
    deletedeal,
    updatedeal
}

async function getdealbyticket(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/deal/get?ticket=' + params.ticket, function(error, res, body) {
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

async function totaldeal(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        var date = new Date(params.from_date);
        var from_sec = date.getTime() / 1000;
        date = new Date(params.to_date);
        var to_sec = date.getTime() / 1000;

        req.Get('/api/deal/get_total?login=' + params.login + '&from=' + from_sec + '&to=' + to_sec, function(error, res, body) {
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

async function getdealbypage(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        var date = new Date(params.from_date);
        var from_sec = date.getTime() / 1000;
        date = new Date(params.to_date);
        var to_sec = date.getTime() / 1000;

        req.Get('/api/deal/get_total?login=' + params.login + '&from=' + from_sec + '&to=' + to_sec + '&offset=' + params.offset + '&total=' + params.total, function(error, res, body) {
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

async function deletedeal(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/deal/delete?ticket=' + params.ticket, function(error, res, body) {
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

async function updatedeal(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/deal/update', JSON.stringify(params), function(error, res, body) {
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