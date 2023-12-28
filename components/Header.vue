<template>
  <div
    class="md:flex md:items-center md:justify-between md:space-x-5 bg-gray-100 dark:bg-gray-900 py-4 px-12 dark:text-gray-400"
  >
    <div class="flex flex-col items-center justify-center w-full">
      <div class="relative">
        <Logo class="h-16" />
        <span class="sr-only">Шпаргалка по Laravel Artisan</span>
      </div>
      <div>
        <h2 class="tracking-tight font-medium hidden md:block">
          Шпаргалка с возможностью поиска и закладками для команд
          <a
            href="https://laravel.com"
            class="text-artisan hover:text-artisan-light"
            >Laravel</a
          >
          Artisan.
        </h2>
      </div>
    </div>
  </div>
</template>
