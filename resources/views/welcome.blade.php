<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="{{ url('img/brand/favicon.png') }}" type="image/png">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Nelayan Cerdas K1000</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script> -->
    </head>
    <body class="{{ $class ?? '' }}">
        <noscript>
            <strong>Nelayan Cerdas K1000 tidak akan bekerja dengan baik tanpa JavaScript. Harap nyalakan untuk melanjutkan.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
        <!-- Argon JS -->
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>