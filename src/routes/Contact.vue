<!-- @format -->

<template>

    <div class="contact">
    <div class="text-center"> 
    <h3 class="mt-5">if possible please contact me via LinkedIn</h3>
    </div>
        <form action="https://formspree.io/f/xayaaqko" method="POST">
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left"></div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT</span>
                                    <span>ME</span>
                                </div>
                                <div class="app-contact"></div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="NAME"
                                            name="name"
                                        />
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="EMAIL"
                                            type="email"
                                            name="_replyto"
                                            required
                                        />
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="SUBJECT"
                                            name="_subject"
                                            required
                                        />
                                    </div>
                                    <div class="app-form-group message">
                                        <input
                                            class="app-form-control"
                                            placeholder="MESSAGE"
                                            name="message"
                                        />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">
                                            SEND
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <b-container class="d-flex">
            <div class="d-flex mx-auto">
                <a
                    v-for="sl in socialLinks"
                    :key="sl.link"
                    :href="sl.link"
                    target="_blank"
                    class="mx-3 social-btn"
                >
                    <img :src="sl.img" height="60" width="60" />
                </a>
            </div>
        </b-container>

        <div class="built-with-banner text-center">
            <div class="hr"></div>
            <h3 class="mt-5">This page is built with</h3>
            <div class="mt-5 mx-auto">
                <img
                    class="mx-3"
                    height="45"
                    src="../assets/vue-logo-450x450.png"
                />
                <img
                    class="mx-3"
                    height="45"
                    src="../assets/js-logo-480x480.png"
                />
                <img
                    class="mx-3"
                    height="45"
                    src="../assets/html5-logo-512x512.png"
                />
                <img
                    class="mx-3"
                    height="45"
                    src="../assets/node-logo-266x266.png"
                />
                <img
                    class="mx-3"
                    height="45"
                    src="../assets/love-128x128.png"
                />
            </div>
            <div class="mt-5"></div>
            <div class="mt-3">
                <p>
                    © 2020 Jan Ripken
                    <br />Covered by MIT License.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
/** @format */


import logoLinkedIn from '../assets/social/linkedin-4-128.png';
import logoYoutube from '../assets/social/youtube-128x128.png';
import logoGithub from '../assets/social/github-128x128.png';

import {RouterEventBus} from '../js/router-eventbus';

export default {
    name: 'Contact',

    props: {},

    data() {
        return {
            socialLinks: [
                {
                    img: logoLinkedIn,
                    link:
                        'https://www.linkedin.com/feed/?trk=DACH-SEM_google-adwords_brand-ghp',
                },
                {
                    img: logoYoutube,
                    link:
                        'https://www.youtube.com/channel/UCiyVtEvaxBDmwqPD8_1W7KA',
                },
                {
                    img: logoGithub,
                    link: 'https://github.com/JanRipken',
                },
            ],
        };
    },

    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped>
/** @format */

a {
    text-decoration: underline;
}

td {
    padding-right: 20px;
}

.contact {
    margin-top: 150px;
}

.social-btn {
    transition: all 0.25s ease-in-out;
}

.social-btn:hover {
    transform: scale(1.06);
}

.tfont {
    font-size: 20px;
}

.built-with-banner {
    margin-top: 20px;
}

.built-with-banner > .hr {
    width: 80%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.25);
    margin: 0px auto;
}

@media screen and (max-width: 690px) {
}

*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);
    font-size: 12px;
}

body,
button,
input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
}

.background {
    display: flex;
    min-height: 50vh;
}

.container {
    flex: 0 1 700px;
    margin: auto;
    padding: 10px;
}

.screen {
    position: relative;
    background: #3e3e3e;
    border-radius: 15px;
}

.screen:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
}

.screen-header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #4d4d4f;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.screen-header-left {
    margin-right: auto;
}

.screen-header-button {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
}

.screen-header-right {
    display: flex;
}

.screen-header-ellipsis {
    width: 3px;
    height: 3px;
    margin-left: 2px;
    border-radius: 8px;
    background: #999;
}

.screen-body {
    display: flex;
}

.screen-body-item {
    flex: 1;
    padding: 50px;
}

.screen-body-item.left {
    display: flex;
    flex-direction: column;
}

.app-title {
    display: flex;
    flex-direction: column;
    position: relative;
    color: #ea1d6f;
    font-size: 26px;
}

.app-title:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: #ea1d6f;
}

.app-contact {
    margin-top: auto;
    font-size: 8px;
    color: #888;
}

.app-form-group {
    margin-bottom: 15px;
}

.app-form-group.message {
    margin-top: 40px;
}

.app-form-group.buttons {
    margin-bottom: 0;
    text-align: right;
}

.app-form-control {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
    transition: border-color 0.2s;
}

.app-form-control::placeholder {
    color: #666;
}

.app-form-control:focus {
    border-bottom-color: #ddd;
}

.app-form-button {
    background: none;
    border: none;
    color: #ea1d6f;
    font-size: 14px;
    cursor: pointer;
    outline: none;
}

.app-form-button:hover {
    color: #b9134f;
}

@media screen and (max-width: 520px) {
    .screen-body {
        flex-direction: column;
    }

    .screen-body-item.left {
        margin-bottom: 30px;
    }

    .app-title {
        flex-direction: row;
    }

    .app-title span {
        margin-right: 12px;
    }

    .app-title:after {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .screen-body {
        padding: 40px;
    }

    .screen-body-item {
        padding: 0;
    }
}
</style>
