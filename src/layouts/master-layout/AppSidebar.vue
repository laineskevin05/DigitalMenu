<template>
  <div class="layout-sidebar">
    <AppSidebarMenuHeader />
    <!-- <AppSidebarMenu /> -->

    <div class="layout-menu-container">
      <ul class="layout-menu">
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Dashboards</div><a class="" tabindex="0"><i
              class="pi pi-home layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Dashboards</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/" class="router-link-active" tabindex="0"><i
                  class="pi pi-fw pi-warehouse layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">E-Commerce</span><!----></a><!----></li>
            <li class="active-menuitem"><!----><!----><a href="/dashboard-banking"
                class="router-link-active router-link-exact-active active-route" tabindex="0" aria-current="page"><i
                  class="pi pi-fw pi-building-columns layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Banking</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/dashboard-marketing" class="" tabindex="0"><i
                  class="pi pi-fw pi-gauge layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Marketing</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Apps</div><a class="" tabindex="0"><i
              class="pi pi-th-large layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Apps</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><a class="" tabindex="0"><i class="pi pi-fw pi-comment layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Blog</span><i
                  class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
              <ul class="">
                <li class=""><!----><!----><a href="/apps/blog/list" class="" tabindex="0"><i
                      class="pi pi-fw pi-image layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">List</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/apps/blog/detail" class="" tabindex="0"><i
                      class="pi pi-fw pi-list layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Detail</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/apps/blog/edit" class="" tabindex="0"><i
                      class="pi pi-fw pi-pencil layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Edit</span><!----></a><!----></li>
              </ul>
            </li>
            <li class=""><!----><!----><a href="/apps/chat" class="" tabindex="0"><i
                  class="pi pi-fw pi-comments layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Chat</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/apps/files" class="" tabindex="0"><i
                  class="pi pi-fw pi-folder layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Files</span><!----></a><!----></li>
            <li class=""><!----><a class="" tabindex="0"><i class="pi pi-fw pi-envelope layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Mail</span><i
                  class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
              <ul class="">
                <li class=""><!----><!----><a href="/apps/mail/inbox" class="" tabindex="0"><i
                      class="pi pi-fw pi-inbox layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Inbox</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/apps/mail/compose" class="" tabindex="0"><i
                      class="pi pi-fw pi-pencil layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Compose</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/apps/mail/detail/1000" class="" tabindex="0"><i
                      class="pi pi-fw pi-comment layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Detail</span><!----></a><!----></li>
              </ul>
            </li>
            <li class=""><!----><!----><a href="/apps/tasklist" class="" tabindex="0"><i
                  class="pi pi-fw pi-check-square layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Task List</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">UI Kit</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-star-fill layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">UI Kit</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/uikit/formlayout" class="" tabindex="0"><i
                  class="pi pi-fw pi-id-card layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Form Layout</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/input" class="" tabindex="0"><i
                  class="pi pi-fw pi-check-square layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Input</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/button" class="" tabindex="0"><i
                  class="pi pi-fw pi-box layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Button</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/table" class="" tabindex="0"><i
                  class="pi pi-fw pi-table layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Table</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/list" class="" tabindex="0"><i
                  class="pi pi-fw pi-list layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">List</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/tree" class="" tabindex="0"><i
                  class="pi pi-fw pi-share-alt layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Tree</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/panel" class="" tabindex="0"><i
                  class="pi pi-fw pi-tablet layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Panel</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/overlay" class="" tabindex="0"><i
                  class="pi pi-fw pi-clone layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Overlay</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/media" class="" tabindex="0"><i
                  class="pi pi-fw pi-image layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Media</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/menu" class="" tabindex="0"><i
                  class="pi pi-fw pi-bars layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Menu</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/message" class="" tabindex="0"><i
                  class="pi pi-fw pi-comment layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Message</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/file" class="" tabindex="0"><i
                  class="pi pi-fw pi-file layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">File</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/charts" class="" tabindex="0"><i
                  class="pi pi-fw pi-chart-bar layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Chart</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/timeline" class="" tabindex="0"><i
                  class="pi pi-fw pi-calendar layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Timeline</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/uikit/misc" class="" tabindex="0"><i
                  class="pi pi-fw pi-circle-off layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Misc</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Prime Blocks</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-prime layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Prime Blocks</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/blocks" class="" tabindex="0"><i
                  class="pi pi-fw pi-eye layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Free Blocks</span><!----></a><!----></li>
            <li class=""><!----><a href="https://primeblocks.org" class="" target="_blank" tabindex="0"><i
                  class="pi pi-fw pi-globe layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">All Blocks</span><!----></a><!----><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Utilities</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-compass layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Utilities</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><a
                href="https://www.figma.com/design/3BgdXCQjva5nUEO8OidU1B/Preview-%7C-Diamond?node-id=0-1&amp;t=KdfljgRtYLzFPfKL-1"
                class="" target="_blank" tabindex="0"><i class="pi pi-fw pi-pencil layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Figma</span><!----></a><!----><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Pages</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-briefcase layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Pages</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/landing" class="" tabindex="0"><i
                  class="pi pi-fw pi-globe layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Landing</span><!----></a><!----></li>
            <li class=""><!----><a class="" tabindex="0"><i class="pi pi-fw pi-user layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Auth</span><i
                  class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
              <ul class="">
                <li class=""><!----><!----><a href="/auth/login" class="" tabindex="0"><i
                      class="pi pi-fw pi-sign-in layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Login</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/error" class="" tabindex="0"><i
                      class="pi pi-fw pi-times-circle layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Error</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/access" class="" tabindex="0"><i
                      class="pi pi-fw pi-lock layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Access Denied</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/register" class="" tabindex="0"><i
                      class="pi pi-fw pi-user-plus layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Register</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/forgot-password" class="" tabindex="0"><i
                      class="pi pi-fw pi-question layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Forgot Password</span><!----></a><!---->
                </li>
                <li class=""><!----><!----><a href="/auth/new-password" class="" tabindex="0"><i
                      class="pi pi-fw pi-cog layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">New Password</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/register/verification" class="" tabindex="0"><i
                      class="pi pi-fw pi-envelope layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Verification</span><!----></a><!----></li>
                <li class=""><!----><!----><a href="/auth/lock-screen" class="" tabindex="0"><i
                      class="pi pi-fw pi-eye-slash layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Lock Screen</span><!----></a><!----></li>
              </ul>
            </li>
            <li class=""><!----><!----><a href="/pages/crud" class="" tabindex="0"><i
                  class="pi pi-fw pi-pencil layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Crud</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/invoice" class="" tabindex="0"><i
                  class="pi pi-fw pi-dollar layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Invoice</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/aboutus" class="" tabindex="0"><i
                  class="pi pi-fw pi-user layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">About Us</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/help" class="" tabindex="0"><i
                  class="pi pi-fw pi-question-circle layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Help</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/auth/oops" class="" tabindex="0"><i
                  class="pi pi-fw pi-exclamation-circle layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Oops</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/notfound" class="" tabindex="0"><i
                  class="pi pi-fw pi-exclamation-circle layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Not Found</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/empty" class="" tabindex="0"><i
                  class="pi pi-fw pi-circle-off layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Empty</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/pages/faq" class="" tabindex="0"><i
                  class="pi pi-fw pi-question layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">FAQ</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/landing/contact" class="" tabindex="0"><i
                  class="pi pi-fw pi-phone layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Contact Us</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">E-Commerce</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-wallet layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">E-Commerce</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/ecommerce/product-overview" class="" tabindex="0"><i
                  class="pi pi-fw pi-image layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Product Overview</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/product-list" class="" tabindex="0"><i
                  class="pi pi-fw pi-list layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Product List</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/new-product" class="" tabindex="0"><i
                  class="pi pi-fw pi-plus layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">New Product</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/shopping-cart" class="" tabindex="0"><i
                  class="pi pi-fw pi-shopping-cart layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Shopping Cart</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/checkout-form" class="" tabindex="0"><i
                  class="pi pi-fw pi-check-square layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Checkout Form</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/order-history" class="" tabindex="0"><i
                  class="pi pi-fw pi-history layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Order History</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/ecommerce/order-summary" class="" tabindex="0"><i
                  class="pi pi-fw pi-file layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Order Summary</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">User Management</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-user layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">User Management</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><!----><a href="/profile/list" class="" tabindex="0"><i
                  class="pi pi-fw pi-list layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">List</span><!----></a><!----></li>
            <li class=""><!----><!----><a href="/profile/create" class="" tabindex="0"><i
                  class="pi pi-fw pi-plus layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Create</span><!----></a><!----></li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Hierarchy</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Hierarchy</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><a class="" tabindex="0"><i
                  class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Submenu 1</span><i
                  class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
              <ul class="">
                <li class=""><!----><a class="" tabindex="0"><i
                      class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Submenu 1.1</span><i
                      class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
                  <ul class="">
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          1.1.1</span><!----></a><!----><!----></li>
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          1.1.2</span><!----></a><!----><!----></li>
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          1.1.3</span><!----></a><!----><!----></li>
                  </ul>
                </li>
                <li class=""><!----><a class="" tabindex="0"><i
                      class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Submenu 1.2</span><i
                      class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
                  <ul class="">
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          1.2.1</span><!----></a><!----><!----></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class=""><!----><a class="" tabindex="0"><i
                  class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Submenu 2</span><i
                  class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
              <ul class="">
                <li class=""><!----><a class="" tabindex="0"><i
                      class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Submenu 2.1</span><i
                      class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
                  <ul class="">
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          2.1.1</span><!----></a><!----><!----></li>
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          2.1.2</span><!----></a><!----><!----></li>
                  </ul>
                </li>
                <li class=""><!----><a class="" tabindex="0"><i
                      class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                      class="layout-menuitem-text label-small text-inherit">Submenu 2.2</span><i
                      class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
                  <ul class="">
                    <li class=""><!----><a class="" tabindex="0"><i
                          class="pi pi-fw pi-align-left layout-menuitem-icon"></i><span
                          class="layout-menuitem-text label-small text-inherit">Submenu
                          2.2.1</span><!----></a><!----><!----></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu-separator"></li>
        <li class="layout-root-menuitem">
          <div class="layout-menuitem-root-text">Start</div><a class="" tabindex="0"><i
              class="pi pi-fw pi-download layout-menuitem-icon"></i><span
              class="layout-menuitem-text label-small text-inherit">Start</span><i
              class="pi pi-fw pi-angle-down layout-submenu-toggler"></i></a><!---->
          <ul class="layout-root-submenulist">
            <li class=""><!----><a href="https://www.primefaces.org/store" class="" tabindex="0"><i
                  class="pi pi-fw pi-shopping-cart layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Buy Now</span><!----></a><!----><!----></li>
            <li class=""><!----><!----><a href="/documentation" class="" tabindex="0"><i
                  class="pi pi-fw pi-info-circle layout-menuitem-icon"></i><span
                  class="layout-menuitem-text label-small text-inherit">Documentation</span><!----></a><!----></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

import AppSidebarMenuHeader from './AppSidebarMenuHeader.vue';
import { useUseLayoutStore } from './useLayout';

const store = useUseLayoutStore();
// const { collapsed } = storeToRefs(store);
</script>

<style scoped>
.app-sidebar {
  transition: width 0.3s ease-in-out;
}
</style>
