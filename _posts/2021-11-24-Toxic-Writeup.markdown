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

{% highlight javascript %}
class PageModel
{
    public $file;

    public function __destruct()
    {
        include($this->file);
    }
}
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

Translated: Our cookie is base64 encoded and contains an internal file to view. We can exploit this!
Putting the cookie into a base64 decoder, we get given the following:
`O:9:"PageModel":1:{s:4:"file";s:15:"/www/index.html";}`
