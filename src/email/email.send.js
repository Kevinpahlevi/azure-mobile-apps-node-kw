var temp = {
  sender: 'Ноде Майлер <kevinplevi@gmail.com>', // sender address
  replyTo: 'frnz <frznkvn@gmail.com>', // list of receivers
  subject: 'Email Verif - Apps with sender', // Subject line
  template: `<style type="text/css">
  .header {
    background: #8a8a8a;
  }
  .header .columns {
    padding-bottom: 0;
  }
  .header p {
    color: #fff;
    padding-top: 15px;
  }
  .header .wrapper-inner {
    padding: 20px;
  }
  .header .container {
    background: transparent;
  }
  table.button.facebook table td {
    background: #3B5998 !important;
    border-color: #3B5998;
  }
  table.button.twitter table td {
    background: #1daced !important;
    border-color: #1daced;
  }
  table.button.google table td {
    background: #DB4A39 !important;
    border-color: #DB4A39;
  }
  .wrapper.secondary {
    background: #f3f3f3;
  }
</style>



<wrapper class="header">
  <container>
    <row class="collapse">
      <columns small="6">
        <img src="https://rescdn.imtxwy.com/ro/home/images/logo.png">
      </columns>
      <columns small="6">
        <p class="text-right">BASIC</p>
      </columns>
    </row>
  </container>
</wrapper>

<container>

  <spacer size="16"></spacer>

  <row>
    <columns small="12">

      <h1>Hi, <%= name %></h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iste, amet consequatur a veniam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut optio nulla et, fugiat. Maiores accusantium nostrum asperiores provident, quam modi ex inventore dolores id aspernatur architecto odio minima perferendis, explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos quasi itaque beatae natus fugit provident delectus, magnam laudantium odio corrupti sit quam. Optio aut ut repudiandae velit distinctio asperiores?</p>
      <callout class="primary">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellendus natus, sint ea optio dignissimos asperiores inventore a molestiae dolorum placeat repellat excepturi mollitia ducimus unde doloremque ad, alias eos!</p>
      </callout>
    </columns>
  </row>
  <wrapper class="secondary">

    <spacer size="16"></spacer>

    <row>
      <columns large="6">
        <h5>Connect With Us:</h5>
        <button class="facebook expand" href="http://zurb.com">Facebook</button>
        <button class="twitter expand" href="http://zurb.com">Twitter</button>
        <button class="google expand" href="http://zurb.com">Google+</button>
      </columns>
      <columns large="6">
        <h5>Contact Info:</h5>
        <p>Phone: 408-341-0600</p>
        <p>Email: <a href="mailto:foundation@zurb.com">foundation@zurb.com</a></p>
      </columns>
    </row>
  </wrapper>
</container>`

}

module.exports = temp