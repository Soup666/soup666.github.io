---
layout: post
title:  "Toxic"
date:   2021-11-24 22:22:42 +0000
categories: Writeups
---
#Basic Overview

Looking through the source code of this project, a few things stood out:
*Commented out line in index.html
*Our PHPsession cookie

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
