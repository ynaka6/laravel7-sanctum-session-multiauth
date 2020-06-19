<template>
    <div id="app" class="relative">
        <div
            class="relative w-full max-w-lg h-screen mx-auto bg-white shadow-xl"
        >
            <img
                src="@/assets/laravel-sanctum.svg"
                alt="Laravel Sanctum"
                class="absolute inset-0 mx-auto my-5 z-10"
            />
            <router-view />
        </div>
        <div class="absolute bottom-0 w-full p-5">
            <p
                class="bg-white mx-auto p-4 border-2 rounded-full shadow-2xl font-bold text-center text-xs text-gray-800"
            >
                Laravel Sanctumのセッション認証を利用して、Multi
                Authを実装したサンプルです。
            </p>
        </div>
    </div>
</template>
