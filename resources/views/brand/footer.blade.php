<p class="small m-n text-white must-be-hide d-none overflow-scroll">
    © Copyright {{date('Y')}}
    <a href="{{ env('ECOMMERCE_URL') }}" target="_blank"> {{env('ECOMMERCE_NAME')}} </a>
    @if (env('APP_URL') != env('APP_PROD_URL'))
        <br>

        <span>URL: <b>{{ env('APP_URL') }}</b> </span>
        <br>
        <span>Environment: <b>{{ env('APP_ENV') }}</b> </span>
        <br>
        <span>Database: <b>{{ env('DB_DATABASE') }}</b> </span>
    @endif

</p>

