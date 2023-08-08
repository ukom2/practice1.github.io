---
title: Introduction to Natas Wargame
author: ukom2
date: 2023-08-07 20:55:00 +0800
categories: [Blogging, Tutorial]
tags: [getting-started]
pin: true
img:
  path: '/_posts/nataslogo.png'
  alt: Natas Wargame Logo
---

![Desktop View](/assets/img/favicons/nataslogo.png){: .normal }

# What is the Natas Wargame?

Natas teaches the basics of serverside cybersecurity. Each level of natas consists of its own website located at http://natasX.natas.labs.overthewire.org, where X is the level number. There is no SSH login. To access a level, enter the username for that level (e.g. natas0 for level 0) and its password. Each level has access to the password of the next level. The objective is to somehow obtain that next password and level up. All passwords are also stored in /etc/natas_webpass/. E.g. the password for natas5 is stored in the file /etc/natas_webpass/natas5 and only readable by natas4 and natas5.

