document.getElementById('header').innerHTML = `
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '681062802291391'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=681062802291391&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
<div class="left-part"></div>
    <a id="logo" href="index.html">NUCHL</a>
    <div class="bar-holder">
    <a class="menu_trigger" href="#">menu</a>
    <nav id="nav">
        <ul>
            <li><a href="events.html">Events/FAQ</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Join Us/Contact</a></li>
        </ul>
    </nav>
</div>
`