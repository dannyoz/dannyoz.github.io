<template>
    <div class="intro">
        <div class="padded">
            <h1 class="primary">{{title}}</h1>
            <h5 class="secondary">{{subtitle}}</h5>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Dan Osborne',
                subtitle: 'Software developer',
                text: 'I have 10 years experience designing and building websites and apps in HTML Javascript and CSS...'
            }
        }
    }
</script>
