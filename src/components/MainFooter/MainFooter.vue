<template>
  <div class="footer">
    <div class="inner-container">
      <div class="block">
        <h3 class="title">About Page</h3>
        <div class="description">Play tic tac toe or 4-in-a-row anytime!</div>
        <div class="description">
          Created by
          <a href="http://www.diogopaiva.com" target="_blank;">Diogo Paiva</a>
        </div>
      </div>
      <div class="block">
        <h3 class="title">Contacts</h3>
        <div class="description">(+351) 916657695</div>
        <div class="description">Rua da Farmácia, Aveiro</div>
      </div>
      <div class="block">
        <h3 class="title">Stay in touch</h3>
        <ul class="social-media">
          <li>
            <div class="icon-wrapper">
              <img
                src="../../assets/images/facebook.svg"
                alt="facebook-icon"
                title="Facebook"
              />
            </div>
          </li>
          <li>
            <div class="icon-wrapper">
              <img
                src="../../assets/images/twitter.svg"
                alt="twitter-icon"
                title="Twitter"
              />
            </div>
          </li>
          <li>
            <div class="icon-wrapper">
              <img
                src="../../assets/images/instagram.svg"
                alt="instagram-icon"
                title="Instagram"
              />
            </div>
          </li>
        </ul>
        <div class="newsletter">
          <input
            type="email"
            placeholder="Subscribe our games"
            class="input-newsletter"
          />
          <div class="submit-button">
            <div class="icon-wrapper">
              <img
                src="../../assets/images/send.svg"
                alt="send-icon"
                title="Send"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainFooter",
  props: {},
});
</script>
