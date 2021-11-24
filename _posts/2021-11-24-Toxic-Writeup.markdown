---
layout: post
title:  "Toxic"
date:   2021-11-24 22:22:42 +0000
categories: Writeups
---
Looking through the source code of this project, a few things stood out:
* Commented out line in index.html
* Our PHPsession cookie
Since the commented out line is probably nothing, I decided to focus on the cookie we are given. Looking in the code we find the following lines:

```php
class PageModel
{
    public $file;

    public function __destruct()
    {
        include($this->file);
    }
}
```

```php
if (empty($_COOKIE['PHPSESSID']))
{
    $page = new PageModel;
    $page->file = '/www/index.html';

    setcookie(
        'PHPSESSID',
        base64_encode(serialize($page)),
        time()+60*60*24,
        '/'
    );
}
```

Translated: Our cookie is base64 encoded and contains an internal file to view. We can exploit this!
Putting the cookie into a base64 decoder, we get given:

`O:9:"PageModel":1:{s:4:"file";s:15:"/www/index.html";}`.

We have control over the file displayed here. Lets change the cookie to try and display /etc/passwd!

`O:9:"PageModel":1:{s:4:"file";s:25:"../../../../../etc/passwd";}`

(P.s Don't forget to change the size!)

And behold... It works!

![Passwd file](https://user-images.githubusercontent.com/38260830/143324638-11c9ba0a-3ebb-4f61-be4f-880e87a56875.png)

Now, let's exploit it to find the flag. Looking at the code again we can see the name of the flag will be random every time. So we'll have to find a way to execute commands on the server to list the directory

![Flag name code](https://user-images.githubusercontent.com/38260830/143324646-a79b6580-df72-40b1-b66d-b6cab76a3a72.png)

Googling how to escalate LFI to RCE gave me this [article][Useful-Article]. This gave me a POC to execute <?php phpinfo(); ?> then see the result in the server logs. We can see in the source code that the server uses nginx, so the log file will be located at /var/log/nginx/access.log
We can send the command by including it in a header on our GET request. For some reason, including it in the GET header crashed the website. So I'm gonna use User-Agent since it's printed in the log. Crafting the request looked like this:

![Payload](https://user-images.githubusercontent.com/38260830/143324647-707e9224-b2a9-49c6-b99e-e492d2dfbea3.png)

Sending the request and viewing the log gives us the name of the flag file!

![Flag name](https://user-images.githubusercontent.com/38260830/143324649-8b4932ba-99ee-4755-8f1c-a27234c66b6b.png)

Bingo! Let's cat the file using the same method and get us the flag :)

[Useful-Article]: https://outpost24.com/blog/from-local-file-inclusion-to-remote-code-execution-part-1
