const { MT5Request } = require('./mt5request.service');
const { Server, Port, Password, User, Version, Agent } = require('../config.json');
const qs = require('qs');
const req = new MT5Request(Server, Port);

module.exports = {
    getopenorderbyticket,
    totalopenorder,
    getopenorderbypage,
    getclosedorderbyticket,
    totalclosedorder,
    getclosedorderbypage,
    deleteopenorder,
    deleteclosedorder,
    updateopenorder,
    updateclosedorder,
    reopenorder
}

async function getopenorderbyticket(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/order/get?ticket=' + params.ticket, function(error, res, body) {
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

async function totalopenorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/order/get_total?login=' + params.login, function(error, res, body) {
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

async function getopenorderbypage(params) {
    var query = qs.stringify(params);
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/order/get_page?' + query, function(error, res, body) {
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

async function deleteopenorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/order/delete?ticket=' + params.ticket, function(error, res, body) {
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

async function updateopenorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/order/update', JSON.stringify(params), function(error, res, body) {
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

async function getclosedorderbyticket(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/history/get?ticket=' + params.ticket, function(error, res, body) {
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

async function totalclosedorder(params) {
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

        req.Get('/api/history/get_total?login=' + params.login + '&from=' + from_sec + '&to=' + to_sec, function(error, res, body) {
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

async function getclosedorderbypage(params) {
    var date = new Date(params.from_date);
    params.from = date.getTime() / 1000;
    date = new Date(params.to_date);
    params.to = date.getTime() / 1000;

    delete params.from_date;
    delete params.to_date;

    var query = qs.stringify(params);
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/history/get_page?' + query, function(error, res, body) {
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

async function deleteclosedorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/history/delete?ticket=' + params.ticket, function(error, res, body) {
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

async function updateclosedorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Post('/api/history/update', JSON.stringify(params), function(error, res, body) {
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

async function reopenorder(params) {
    // Authenticate on the server using the Auth command 
    await req.Auth(User, Password, Version, Agent, function(error) {
        if (error) {
            console.log(error);
            return;
        }
        req.Get('/api/order/reopen?ticket=' + params.ticket, function(error, res, body) {
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