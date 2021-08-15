<!-- @format -->

<template>
    <div class="Resume">hello</div>
</template>

<script>
/** @format */

import {RouterEventBus} from '../js/router-eventbus';

export default {
    name: 'Resume',

    mounted() {
        RouterEventBus.$emit('mounted', this.$options.name);
    },
};
</script>

<style scoped></style>
