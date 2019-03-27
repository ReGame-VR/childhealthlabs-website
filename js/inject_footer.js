document.getElementById("footer").innerHTML = `
<div class="footer-holder">
    <div class="footer-frame">
        <div class="footer-content">
            <div class="col-holder">
                <div class="col_wrap">
                    <div class="col">
                        <h3>Our address</h3>
                        <address class="map">360 Huntington Ave, Boston, MA 02115</address>
                        <address class="mail"><a href="mailto:regamevrlab@neu.edu">regamevrlab@neu.edu</a></address>
                        <address class="phone"><a href="tel:617-373-6107">617-373-6107</a></address>
                    </div>
                </div>
                <div id="googleMap" class="col_wrap">
                    <h3>Directions</h3>
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=30%20Leon%20St%2C%20Boston%2C%20MA%2002115&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net"></a></div>
                        <style>.mapouter{text-align:right;}.gmap_canvas {overflow:hidden;background:none!important;}</style>
                    </div>
                </div>
                <div class="col_wrap">
                    <div class="col">
                        <h3>Follow us</h3>
                        <ul class="social">
                            <li><a class="facebook" href="#">Facebook</a></li>
                            <li><a class="twitter" href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="holder">
                <p>Copyright 2014 Kid’ school. All rights reserved.</p>
            </div>
        </div>
    </div>
</div>
`