const { MT5Request } = require('./mt5request.service');

module.exports = {
    tstapi
}

async function tstapi() {

    // Example of use 
    // var req = new MT5Request("my.broker.com", 443);
    var req = new MT5Request("64.74.253.36", 443);

    // Authenticate on the server using the Auth command 
    // req.Auth(1000, "Password", 1985, "WebManager", function(error) {
    await req.Auth(username, "password", 483, "WebManager", function(error) {
        if (error) {
            return;
        }
        // Let us request the symbol named TEST using the symbol_get command 
        req.Get("/api/symbol/get?symbol=TEST", function(error, res, body) {
            if (error) {
                console.log(error);
                return;
            }
            var answer = req.ParseBodyJSON(error, res, body, null);
            var symbol = answer.answer;
            console.log(symbol);
            // Changing the description 
            symbol.Description = 'My Description';
            // Sending changes to the server using the symbol_add command 
            req.Post('/api/symbol/add', JSON.stringify(symbol), function(error, res, body) {
                if (error) {
                    console.log(error);
                    return;
                }
                var answer = req.ParseBodyJSON(error, res, body, null);
                var symbol = answer.answer;
                console.log(symbol);
                return symbol;
            });
        });
    });
}