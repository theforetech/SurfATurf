<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <!--    <ul class="nav navbar-nav d-xl-none">-->
    <!--      <li class="nav-item">-->
    <!--        <b-link-->
    <!--          class="nav-link"-->
    <!--          @click="toggleVerticalMenuActive"-->
    <!--        >-->
    <!--          <feather-icon-->
    <!--            icon="MenuIcon"-->
    <!--            size="21"-->
    <!--          />-->
    <!--        </b-link>-->
    <!--      </li>-->
    <!--    </ul>-->

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1">
      <search-bar />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <!--      <locale />-->
      <dark-Toggler class="d-none d-lg-block" />

      <!--      <cart-dropdown />-->
      <notification-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BNavbarNav,
} from 'bootstrap-vue'
// import Locale from './components/Locale.vue'
import SearchBar from './components/SearchBar.vue'
import DarkToggler from './components/DarkToggler.vue'
// import CartDropdown from './components/CartDropdown.vue'
import NotificationDropdown from './components/NotificationDropdown.vue'
import UserDropdown from './components/UserDropdown.vue'

export default {
  components: {

    // Navbar Components
    BNavbarNav,
    SearchBar,
    DarkToggler,
    NotificationDropdown,
    UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
