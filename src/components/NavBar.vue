<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    menus: {
        type: Array as PropType<string[]>,
        required: true
    }
})
</script>

<template>
    <div class="navbar bg-base-100">
        <div v-for="menu in menus" :key="menu">
            <div class="flex-1">
                <a class="m-2 btn btn-primary normal-case text-xl" 
                :href="menu">{{ menu }}</a>
            </div>
        </div>
    </div>
</template>