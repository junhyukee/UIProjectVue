<template>
  <div class="home">
    <nav class="sticky">
      <div class="nav-content">
        <h3>S&J</h3>
        <img src="../static/nav-hamburger.png" class="ham-button" v-bind:class="{'show-icon': !isActive}" @click="myFilter()">
        <img src="../static/nav-hamburger-close.png" class="ham-button-close" v-bind:class="{'show-icon': isActive}" @click="myFilter()">
      </div>
      <div class="main-nav" v-bind:class="{'main-nav-show': isActive}">
        <a v-for="(page, index) in pages"
        :key="page.id"
        :href="`/${page.toLowerCase()}.html`"
        :class="{ 'active': index === 0 }"> {{ page }} </a>
      </div>
    </nav>

    <div class="home container">
      <div class="jumbotron">
        <img src="../static/home/home-jumbotron.png" alt="picture of one of our works" class="d-image">
        <img src="../static/home/home-mobile-jumbotron.png" alt="picture of one of our works" class="m-image">
        <div class="jumbotron-text">
          <h1>
            Integrity,<br>
            Excellence,<br>
            Progress.<br>
          </h1>
        </div>
      </div>
      <div class="main-content">
        <div class="content-box m-image">
          <img src="../static/home/home-mobile-img-1.png" alt="image of pen and paper" class="m-image">
        </div>
        <div class="content-box content-box-text content-box-first">
          <h3>Smith & Jones Architects</h3>
          <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem </p>
          <button>Learn More</button>
        </div>
        <div class="content-box" >
          <img src="../static/home/home-img-1.png" alt="image of pen and paper" class="d-image">
        </div>
        <div class="content-box">
          <img src="../static/home/home-img-2.png" alt="image of futuristic design" class="d-image">
          <img src="../static/home/home-mobile-img-2.png" alt="image of futuristic design" class="m-image">
        </div>
        <div class="content-box content-box-text content-box-last">
          <h3>Futuristic Designs</h3>
          <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem</p>
          <button>View Designs</button>
        </div>
        <div class="recent-projects">
          <h3>Recent Projects</h3>
          <display-project
          v-for='(project,index) in projects'
          v-bind:key='project.id'
          v-bind:project='project'
          v-bind:index='index'></display-project>
        </div>
      </div>
    </div>

    <footer class="container">
      <div class="footer-content">
        <div class="email">
          <h3>Interested in starting a project?<br>Let’s talk:</h3>
          <input type="text" name="email" placeholder="Enter email">
          <h5>We'll never share your email with anyone else.</h5>
        </div>
        <display-location
        v-for='location in locations'
        v-bind:key='location.id'
        v-bind:location='location'></display-location>
        <div class="copyright">
          <h5>Copyright © 2018 Smith and Jones</h5>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isActive: false,
      pages: ['Home', 'Services', 'Contact', 'Projects'],
      projects: [
        {id: 1, title: 'THE VILLAS', content: 'The Villas blah blah blah', desktopImage: require('../static/home/home-villas-img.png'), alt: 'Picture of villas', mobileImage: require('../static/home/home-mobile-villas-img.png')},
        {id: 2, title: 'OUTSKIRTS', content: 'The Outskirts blah blah blah', desktopImage: require('../static/home/home-outskirts-img.png'), alt: 'Picture of outskirts', mobileImage: require('../static/home/home-mobile-outskirts-img.png')},
        {id: 3, title: 'THE BLOCKS', content: 'The Blocks blah blah blah', desktopImage: require('../static/home/home-the-blocks-img.png'), alt: 'Picture of blocks', mobileImage: require('../static/home/home-mobile-the-blocks-img.png')}
      ],
      locations: [
        {id: 1, name: 'New York', address: '123 Lane<br> Suite 100<br> Albany, NY 12345<br> 202 555 0144'},
        {id: 2, name: 'Florida', address: 'Ocean Drive<br> Suite 201<br> Orlando, FL 22345<br> 502 555 0144'},
        {id: 3, name: 'California', address: 'Mountain Street<br> Suite 105<br> San Diego, CA 22345<br> 702 555 0144'}
      ]
    }
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>
