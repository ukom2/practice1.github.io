---
title: Natas Wargame Writeup (Levels 0-10)
author: ukom2
date: 2023-08-07 20:57:00 +0800
categories: [Blogging, Writeup]
tags: [blogging, cybersecurity, programming, wargame, natas]
pin: false
math: true
mermaid: true
toc: true
---

## Introduction

This writeup demonstrates each level of the natas wargame and all solutions needed to solve each level alongside the password and possible real world fixes to prevent the exploiting of vulnerabilities.
In this writeup I will present everything in levels 0 - 10. The code in each level will be posted at the start of the level section, followed by the level credentials, and the password at the bottom.

If you haven't already, check out [**the introduction to the wargame.**](/posts/getting-started/)


## Level 0
##### URL: [http://natas0.natas.labs.overthewire.org](http://natas0.natas.labs.overthewire.org)
Credentials: `natas0:natas0`

***

### Code

```html
<html>
    <body>
        <h1>
          natas0
        </h1>
        <div id="content">
          You can find the password for the next level on this page.

          <!--The password for natas1 is g9D9cREhslqBKtcA2uocGHPfMZVzeFK6 -->
        </div>
    </body>
</html>
```

***

### Solution
In the first level of the Natas Wargame, the solution to acquiring the password was simple. 
All that was necessary was to right click and inspect and view the source code, where the password was commented out.
<br>
### Fix
The real world solution to a vulnerability such as this would be to store the sensitive information separately in a file that cannot be accessed by an attacker and can only be opened by the website that needs it.


<br>
`Password: g9D9cREhslqBKtcA2uocGHPfMZVzeFK6`


***

## Level 1
##### URL: [http://natas1.natas.labs.overthewire.org](http://natas1.natas.labs.overthewire.org)
Credentials: `natas1:g9D9cREhslqBKtcA2uocGHPfMZVzeFK6`

***

### Code

```html
<body oncontextmenu="javascript:alert('right clicking has been blocked!');return false;">
    <h1>
      natas1
    </h1>
    <div id="content">
      You can find the password for the
      next level on this page, but rightclicking has been blocked!

        <!--The password for natas2 is h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7 -->
    </div>
</body>
```

***

### Solution
In the second level, the solution was to, since right clicking was disabled, use the browser shortcut combination to inspect the page and read the source code. Since I used the Macintosh OS, I had to use `CMD + OPT + I`. (Ctrl+Shift+I for WIN OS) This level disabled right clicking, returning an alert saying that it was disabled whenever right clicking was attempted. Upon inspecting, I could see that the password was commented out via the `<!- -  (comment)  - - >` method.
<br>
### Fix
The fix for a vulnerability like this should be almost identical to the solution proposed in Level 0, and to sum it up, it is to store sensitive information in a secure file. Moreover, disabling right click in the website may be detrimental towards the overall user experience which may drive users away from visiting the page as without right click, some other features may be disabled which makes it harder for the user.


<br>
`Password: h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7`


***

## Level 2
##### URL: [http://natas2.natas.labs.overthewire.org](http://natas2.natas.labs.overthewire.org)
Credentials: `natas2:h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7`

***

### Code

```html
<body>
  <h1>natas2</h1>
    <div id="content">
      There is nothing on this page
    <img src="files/pixel.png">
  </div>
</body>
```

***

### Solution
On this level, there was a reference made to the page’s files. Upon inspecting the code, there was a `pixel.png` image. Upon clicking the link, I was redirected to `/files/pixel.png`. Then, having navigated to `/files/`, I found myself in the directory, where the password for this level was located in `users.txt`.
<br>
### Fix
The solution for this problem would be to disable access to the `/files` directory for regular users and store the user credentials page in a much more secure environment.


<br>
`Password: G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q`


***

## Level 3
##### URL: [http://natas3.natas.labs.overthewire.org](http://natas3.natas.labs.overthewire.org)
Credentials: `natas3:G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q`

***

### Code

```html
<body>
    <h1>
      natas3
    </h1>
    <div id="content">
        There is nothing on this page
        <!-- No more information leaks!! Not even Google will find it this time... -->
    </div>
</body>
```

***

### Solution
In this level, the inspect of the page made a reference to the `robots.txt` file - 'not even google (search engine -> robots) will find it...'. When I visited the robots page, it showed that `/s3cr3t` was disallowed, so I changed the url to end with `/s3cr3t` and came across the users.txt file which contained the login and password for the next level.
<br>
### Fix
In a real world scenario, the `robots.txt` file should never be exposed, as this would not only open up the vulnerability demonstrated here, it would also subject the site to possible attacks. The correct method to use would be to utilize `.httaccess` and disable all access to `robots.txt`.


<br>
`Password: tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm`


***

## Level 4
##### URL: [http://natas4.natas.labs.overthewire.org](http://natas4.natas.labs.overthewire.org)
Credentials: `natas4:tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm`

***

### Code

```html
<body>
    <h1>
      natas4
    </h1>
    <div id="content">
        Access disallowed. You are visiting from "" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/"
      <br/>
      <div id="viewsource">
        <a href="index.php">
          Refresh page
        </a>
      </div>
    </div>
</body>
```

***

### Solution
Level 4 showed on the page that the user had to come from the site/the referer had to be `natas5.natas.labs.overthewire.org` in order to be shown the password, or, the referer had to be changed to the desired url somehow. The method that I used for this was I used Burp Suite to intercept the proxy request and manipulate it so that it now had a different referer. Having done this, the page returned the password.
<br>
### Fix
This level demonstrated how attackers could manipulate referers to impersonate a legitimate user. In a real world scenario, checking the referer header as a means of security is an extremely poor choice. The solution would be to not use it as a means of authentication, rather to look towards a more practical means such as a login.


<br>
`Password: Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD`


***

## Level 5
##### URL: [http://natas5.natas.labs.overthewire.org](http://natas5.natas.labs.overthewire.org)
Credentials: `natas5:Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD`

***

### Code

```html
<body>
    <h1>
      natas5
    </h1>
    <div id="content">
        Access disallowed. You are not logged in
    </div>
</body>
```


#### Headers

```bash
GET / HTTP/1.1
Host: natas5.natas.labs.overthewire.org
Cache-Control: max-age=0
Authorization: Basic bmF0YXM1OlowTnNydElrSm9LQUxCQ0xpNWVxRmZjUk44MkF1Mm9E
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.110 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: loggedin=0
Connection: close
```

>The cookie in `Headers`{: .filepath } are a key part of authentication in almost all web servers.
{: .prompt-tip } 

***

### Solution
Level 5 consisted of a page that showed `Access Denied, you are not logged in`. Upon inspection, it could be seen that the login cookie was `loggedin = 0`. By utilizing Burp Suite to intercept the cookie and change it to 1, I was given the password.
<br>
### Fix
Using cookies that are not encrypted, unsigned and easily edited is a problem because it allows for session hijacking and cookie manipulation attacks. The solution for this would be to use a hidden encryption method to encode the cookie ID and sign it to ensure that the cookie was not tampered and secure, possibly by signing it.


<br>
`Password: fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR`


***

## Level 6
##### URL: [http://natas6.natas.labs.overthewire.org](http://natas6.natas.labs.overthewire.org)
Credentials: `natas6:fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR`

***

### Code

```php
<?

include "includes/secret.inc";

    if(array_key_exists("submit", $_POST)) {
        if($secret == $_POST['secret']) {
        print "Access granted. The password for natas7 is <censored>";
    } else {
        print "Wrong secret";
    }
    }
?>
```

***

### Solution
When I viewed the source code in this level, there was a line that showed that the url must include `includes/secret.inc`. Upon changing the URL to include `includes/secret.inc,` I was rewarded with the secret, which I promptly entered into the original page revealing the password.
<br>
### Fix
The easiest fix for this url vulnerability would be to disable direct access to the file using `.httaccess` and set it to deny for all. Another option would be to store the secret/sensitive information in a separate file located in a secure environment, which, in case of a breach, would still hide the info.


<br>
`Password: jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr`


***

## Level 7
##### URL: [http://natas7.natas.labs.overthewire.org](http://natas7.natas.labs.overthewire.org)
Credentials: `natas7:jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr`

***

### Code

```php
<body>
<h1>natas7</h1>
<div id="content">

<a href="index.php?page=home">Home</a>
<a href="index.php?page=about">About</a>
<br>
<br>

<!-- hint: password for webuser natas8 is in /etc/natas_webpass/natas8 -->
</div>
</body>
```

***

### Solution
This page showed a home page. After inspecting the page, I found a hint that said that the password was in `/etc/natas_webpass/natas8`, so I changed the url to include it to perform a local file inclusion attack, which returned the password.
<br>
### Fix
Local File Inclusion is extremely dangerous to the host as it can lead to cross site scripting giving attackers full control of the website. To prevent LFI, proper filtering with a whitelist should be used as well as storing sensitive information within a database. Another solution for this would be to disable direct access to files containing sensitive info in the database, this can be done by removing the includes folder from the web root and adding a `.httaccess` deny for all file which denies all direct access to the sensitive information.


<br>
`Password: a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB`


***

## Level 8
##### URL: [http://natas8.natas.labs.overthewire.org](http://natas8.natas.labs.overthewire.org)
Credentials: `natas8:a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB`

***

### Code

```php
<?

$encodedSecret = "3d3d516343746d4d6d6c315669563362";

function encodeSecret($secret) {
    return bin2hex(strrev(base64_encode($secret)));
}

if(array_key_exists("submit", $_POST)) {
    if(encodeSecret($_POST['secret']) == $encodedSecret) {
    print "Access granted. The password for natas9 is <censored>";
    } else {
    print "Wrong secret";
    }
}
?>
```

***

### Solution
Level 8 consists of a form asking for a secret to be input and a link to its source code. Upon inspecting the source code, I could see that the secret was encoded through base64, string reversal and hexcode. I created a separate program and ran the reverse functions and inputted the encoded secret and was returned the original secret, which I entered in the box, showing the password.
<br>
### Fix
The solution to this would be to store the encryption method in a hidden file so that it would be much harder to decrypt the string and to hide the encrypted string and plaintext.


<br>
`Password: Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd`


***

## Level 9
##### URL: [http://natas9.natas.labs.overthewire.org](http://natas9.natas.labs.overthewire.org)
Credentials: `natas9:Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd`

***

### Code

```php
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    passthru("grep -i $key dictionary.txt");
}
?>
```

***

### Solution
This level involved a dictionary, where the password was hidden inside of it. It involved a query of 
`X /etc/natas_webpass/natas10`, which upon entered, revealed the password. The query that I submitted was 
`c /etc/natas_webpass/natas10`, due to the password itself containing a `c`. This was done after trial and error. Having looked into the level further, I found that the program returned everything that contained the key strings and characters.
<br>
### Fix
The solution to this would be to store the password in a separate file that can’t be accessed. Alternatively, code could be added disabling the usage of all special characters, converting it all to string and disabling input of sensitive url sections for example, in this particular scenario, ‘natas_webpass’.


<br>
`Password: D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE`


***

## Level 10
##### URL: [http://natas10.natas.labs.overthewire.org](http://natas10.natas.labs.overthewire.org)
Credentials: `natas10:D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE`

***

### Code

```php
<?
$key = "";

if(array_key_exists("needle", $_REQUEST)) {
    $key = $_REQUEST["needle"];
}

if($key != "") {
    if(preg_match('/[;|&]/',$key)) {
        print "Input contains an illegal character!";
    } else {
        passthru("grep -i $key dictionary.txt");
    }
}
?>
```

***

### Solution
This level was the same except it didn’t allow the input for any ‘special’ characters. My solution for this involved using `“”`, which tricked the system into showing the password. What I typed out was 
`“” /etc/natas_webpass/natas11`. This ended up returning everything within dictionary.txt, including the credentials for the next level.
<br>
### Fix
The solution to this would be the same as the previous level - store the password in a separate file that can’t be accessed. Alternatively, code could be added disabling the usage of all special characters, converting it all to string and disabling input of sensitive url sections such as ‘natas_webpass’.


<br>
`Password: 1KFqoJXi6hRaPluAmk8ESDW4fSysRoIg`


***


## What's Next?

If you are interested in reading about the next 10 levels, click [**here**](/posts/nataslevel11-20/).
<br>
