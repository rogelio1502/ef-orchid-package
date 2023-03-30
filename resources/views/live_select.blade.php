<link href="/css/app.css" rel="stylesheet"></link>
<div
data-controller="live-select-controller"
>
    <div class="form-group mb-3">
            <label class="form-label" for="{{$id}}">
            {{$title}}@if ($required)
                <sup class="text-danger">*</sup>
            @endif
            </label>

            <select
                class="{{$class}}"
                data-url="{{$url}}"
                data-limit="{{$limit}}"
                data-id="{{$id}}"
                id="{{$id}}"
                name="{{$name}}"
                placeholder="{{$placeholder}}"
                required="{{$required}}"
                data-include-csrf-token="{{$includeCsrfToken}}"
                >
                @foreach ($vals as $val)
                    <option value="{{$val['value']}}" selected>{{$val['text']}}</option>
                @endforeach
            </select>
    </div>
</div>
