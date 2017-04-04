'use strict';

const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('nope', err)
    }

    console.log(`server is listening on ${port}`)
});


const https = require('https');
// const urls = ['https://api-ssl.bitly.com/v3/user/link_save?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&longUrl=https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/236845797/',
//     'https://api-ssl.bitly.com/v3/user/link_history?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a',
//     'https://api-ssl.bitly.com/v3/user/clicks?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&link=http://bit.ly/2oWzsR1/'
// ];
// let responses = [];
// let completed_requests = 0;
//
// for (let i in urls) {
//     https.get(urls[i], function(res) {
//         responses.push(res);
//         completed_requests++;
//         if (completed_requests == urls.length) {
//             res.on('data', (d) => {
//                 process.stdout.write(d);
//             });
//         }
//     }).on('error', (e) => {
//         console.error(e);
//     });
//     }


https.get('https://api-ssl.bitly.com/v3/user/clicks?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&link=http://bit.ly/2oWzsR1', (res) => {

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});



https.get('https://api-ssl.bitly.com/v3/user/link_save?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&longUrl=https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/236845797/', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);

    });

}).on('error', (e) => {
    console.error(e);
});



https.get('https://api-ssl.bitly.com/v3/user/link_history?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a', (res) => {

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
