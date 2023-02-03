const { MT5Request } = require('./mt5request.service');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const qs = require('qs');
const req = new MT5Request(Server, Port);

module.exports = {
    balanceoperation,
    calculateratebuy,
    calculateratesell,
    calculatemargin,
    calculateprofit,
    traderequest
}

async function balanceoperation(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/trade/balance?login=' + params.login + '&type=' + params.type + '&balance=' + params.amount + '&comment=' + params.comment + '&check_margin=' + params.check_margin, function(error, res, body) {
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

async function calculateratebuy(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/trade/calc_rate_buy?base=' + params.from_currency + '&currency=' + params.to_currency + '&group=' + params.group + '&symbol=' + params.symbol + '&price=' + params.price, function(error, res, body) {
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

async function calculateratesell(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/trade/calc_rate_sell?base=' + params.from_currency + '&currency=' + params.to_currency + '&group=' + params.group + '&symbol=' + params.symbol + '&price=' + params.price, function(error, res, body) {
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

async function calculatemargin(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/trade/check_margin?login=' + params.login + '&symbol=' + params.symbol + '&type=' + params.type + '&volume=' + params.volume + '&price=' + params.price, function(error, res, body) {
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

async function calculateprofit(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/trade/calc_profit?group=' + params.group + '&symbol=' + params.symbol + '&type=' + params.type + '&volume=' + params.volume + '&price_open=' + params.open_price + '&price_close=' + params.close_price, function(error, res, body) {
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

async function traderequest(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/dealer/send_request', JSON.stringify(params), function(error, res, body) {
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