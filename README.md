RCController for Raspberry Pi
============

New RC Controller Interface that uses IOS gyroscopes

Pre-Requisits...

Raspbery Pi
Chroma Servo Board 3 - http://electronics.chroma.se/rpisbv3.php
Raspbian - Pi OS
Hobby Level RC Car - Servo and ESC Controlled
iPhone or other device that supports onDevice Function (most tablets will do this)

OS Setup...

Apache2
PHP
HostAPD - Note this is if you want to run your Pi as hotspot so you can drive it away from your local wireless network... Check your Wireless dongile supports AP mode.

Pi Apache2 Setup

CGI Enabled in /var/www - Check defaul Site config for CGI enabled  - sudo nano /etc/apache2/sites-available/default
Allow www-data user to to have permission to tty group for servo output to car - sudo usermod -aG tty www-data, run id www-data to check it worked.

Install all code to /var/www directory...

Add apache to the tty group. This is slightly less safe since it will have access to a bunch of other dev nodes too, but realistically, if you are not serving pages on line, it's the most orthodox, simple, and all round best option.

> sudo usermod -aG tty www-data
> id www-data
uid=33(www-data) gid=33(www-data) groups=33(www-data),5(tty)
Voila, the apache user is now permanently in the tty group and has read-write permissions on /dev/ttyAMA0. To undo that:

> sudo usermod -G www-data www-data
