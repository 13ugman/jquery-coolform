# [jquery-coolform](http://13ugman.com/coolform.html)

**jQuery plugin for styling form fields**

## Author

[13ugman](http://13ugman.com)

## License

Licensed under [MIT](http://www.opensource.org/licenses/mit-license.php)

## How to use

   1. Load [**jQuery**](http://jquery.com/) library and include **coolForm** plugin files:

    <pre><code>&lt;link <span class="atn">rel</span>=<span class="atv">"stylesheet"</span> <span class="atn">type</span>=<span class="atv">"text/css"</span> <span class="atn">href</span>=<span class="atv">"assets/css/jquery.coolform.css"</span>&gt;
&lt;script <span class="atn">type</span>=<span class="atv">"text/javascript"</span> <span class="atn">src</span>=<span class="atv">"assets/js/jquery.min.js"</span>&gt;&lt;/script&gt;
&lt;script <span class="atn">type</span>=<span class="atv">"text/javascript"</span> <span class="atn">src</span>=<span class="atv">"assets/js/jquery.coolform.js"</span>&gt;&lt;/script&gt;</code></pre>

   2. Enjoy!

## Customizing

### Color

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

### Wide fields

You can make text fields have a 100% width for all resolutions or only for small resolutions:

```html
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
