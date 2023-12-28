<script setup>
import { laravel } from '../manifest.json'

useHead({
  title: laravel[0],
})

defineRobotMeta()

useSeoMeta({
  title: 'Шпаргалка по Laravel Artisan',
  description: "Шпаргалка с возможностью добавления в закладки и поиска для команд Laravel PHP Artisan.",

  ogDescription: "Шпаргалка с возможностью добавления в закладки и поиска для команд Laravel PHP Artisan.",
  ogImage: 'https://artisan.getlaravel.ru/og.png',
  ogTitle: 'Шпаргалка по Laravel Artisan',
  ogType: 'website',

  twitterCreator: '@jbrooksuk',
  twitterDescription: "Шпаргалка с возможностью добавления в закладки и поиска для команд Laravel PHP Artisan.",
  twitterSite: '@jbrooksuk',
  twitterImage: 'https://artisan.getlaravel.ru/og.png',
  twitterTitle: 'Шпаргалка по Laravel Artisan',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <RobotMeta />

    <slot />
  </div>
</template>
