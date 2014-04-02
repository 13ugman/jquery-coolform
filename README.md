jquery-coolform
===============

[![License](https://poser.pugx.org/leaphly/cart-bundle/license.png)](https://packagist.org/packages/leaphly/cart-bundle)

**jQuery plugin for styling form fields**

Author
======

13ugman: [13ugman.com][website]

License
=======

Licensed under [MIT][mit]

Demo
====

13ugman.com/coolform.html[demo]

How to use
==========

Load **jQuery**[jquery] library and include **coolForm** plugin files:

```html
<link rel="stylesheet" type="text/css" href="assets/css/jquery.coolform.css">
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.coolform.js"></script>
```

Enjoy!

Customizing
===========

Color
-----

coolForm gets your website font. Besides this, you can **custom the coolButtons color**. Just select the color that most fits your website and **add the corresponding class** to your forms:

```html
<form class="darkgrey">
...
</form>
```

```html
<form class="blue">
...
</form>
```

```html
<form class="green">
...
</form>
```

```html
<form class="gold">
...
</form>
```

```html
<form class="red">
...
</form>
```

```html
<form class="pink">
...
</form>
```

```html
<form class="purple">
...
</form>
```

```html
<!-- Default coolButton -->
<form>
...
</form>
```

Wide fields
-----------

You can make text fields have a 100% width for all resolutions or only for small resolutions:

```html
<!-- Default coolButton -->
<!-- Full width text fields in all devices -->
<form class="wide-fields">
...
</form>

<!-- Full width text fields in small devices (≤992px) -->
<form class="wide-fields-s">
...
</form>

<!-- Full width text fields in extra small devices (≤768px) -->
<form class="wide-fields-xs">
...
</form>
```

[website]: http://13ugman.com
[demo]: http://www.13ugman.com/coolform.html
[mit]: http://www.opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
