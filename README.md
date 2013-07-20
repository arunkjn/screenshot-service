screenshot-service
==================

Screenshot as a service with phantomJS headless browser

This is a small utility which makes a webservice to render the screenshot of any page.
Credit goes to @trevordixon for his awesome express like [router](https://gist.github.com/trevordixon/3061477)

Usage
--------------

- Assuming that you have [phantomJs](https://github.com/ariya/phantomjs) installed

```sh
git clone https://github.com/arunkjn/screenshot-service.git
cd screenshot-service
phantomjs server.js "YOUR_PORT_HERE"
```
- A server will start on your specified port, 8000 is the default port used.
- You can send a POST request now to YOUR_IP:PORT with the following options and get back a base64 encoded png image

    * *url* = "some_url" This parameter is required
    * *timeout* = "timeout in milliseconds to allow the page to load" defaults to 1000ms
    * *width* = "width of browser window" defaults to 1366px
    * *height* = "height of browser window" defaults to 768px


License
-

MIT
