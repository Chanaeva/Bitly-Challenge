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
const urls = ['https://api-ssl.bitly.com/v3/user/link_save?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&longUrl=https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/236845797/',
'https://api-ssl.bitly.com/v3/user/link_history?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a',
'https://api-ssl.bitly.com/v3/user/clicks?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&link=http://bit.ly/2oWzsR1/'];
let responses = [];
let completed_requests = 0;

for (let i in urls) {
    https.get(urls[i], function(res) {
        responses.push(res);
        completed_requests++;
        if (completed_requests == urls.length) {
          res.on('data', (d) => {
          process.stdout.write(d);
           });
       console.log(responses);
        }
    }).on('error', (e) => {
     console.error(e);
     });
}

const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'yourpass'
    }
});


let mailOptions = {
    from: '"chana" <foo@gmail.com>', // sender address
    to: 'chana@gmail.com, baz@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hi</b>' // html body
};
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });

// https.get('https://api-ssl.bitly.com/v3/user/clicks?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&link=http://bit.ly/2oWzsR1', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
//
// }).on('error', (e) => {
//   console.error(e);
// });

// https.get('https://api-ssl.bitly.com/v3/user/link_save?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a&longUrl=https://www.meetup.com/Women-Who-Code-Boulder-Denver/events/236845797/', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
//
// }).on('error', (e) => {
//   console.error(e);
// });
//
//
// https.get('https://api-ssl.bitly.com/v3/user/link_history?access_token=e6c2c87927aa1aaba416c9cbd0f9fc5f9c8e605a', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
//
// }).on('error', (e) => {
//   console.error(e);
// });
//
//
//
