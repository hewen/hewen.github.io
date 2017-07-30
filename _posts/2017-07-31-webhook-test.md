---
layout: post
title: "github webhook test"
categories: github
tags: github

---

github webhook test
=============
* caddy server [download]( https://caddyserver.com/download) add git plugin
* caddy config file add
{% highlight sh %}
git your/github/project/path {
    path /your/build/path
    then jekyll build /your/build/path
    hook /webhooks your_github_secret_key
    hook_type github
    clone_args --recursive
    pull_args --recurse-submodules
}
{% endhighlight %}
* github webhook add you hook path
