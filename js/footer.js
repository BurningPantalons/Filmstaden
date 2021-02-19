readFooter();

async function readFooter() {

  let $footer = await $(`<!-- FOOTER START -->
    <div class="footer">
      <div class="contain">
        <div class="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div class="col social">
          <h1>Social</h1>
          <ul>
            <li><img src="" width="32" style="width: 32px;"></li>
            <li><img src="" width="32" style="width: 32px;"></li>
            <li><img src="" width="32" style="width: 32px;"></li>
            <a href="/index.html" class="homebutton">BIO
            </a>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- END OF FOOTER -->`);

  $('footer').append($footer);

}