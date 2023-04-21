<p class="small m-n text-white must-be-hide d-none overflow-scroll">
    © Copyright {{date('Y')}}

    <a href="{{ env('ECOMMERCE_URL') }}" target="_blank"> {{env('ECOMMERCE_NAME')}} </a>
    @if ($_SERVER['SERVER_NAME'] != env('APP_PROD_URL'))
        <br>

        <span>Server: <b>{{ $_SERVER['SERVER_NAME'] }}</b> </span>
        <br>
        <span>Environment: <b>{{ env('APP_ENV') }}</b> </span>
        <br>
        <span>Database: <b>{{ env('DB_DATABASE') }}</b> </span>
    @endif

</p>

