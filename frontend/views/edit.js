{{>header}}
{{>navbar}}
    <form method="post">
        <div class="mb-3">
            <input class="form-control" placeholder="name" name="name" disabled value="{{user.id}}">
        </div>
        <div class="mb-3">
            <input class="form-control" placeholder="name" name="name" value="{{user.name}}">
        </div>
        <div class="mb-3">
            <input class="form-control" placeholder="age" name="age" value="{{user.age}}">
        </div>
        <div class="mb-3">
            <button class="btn btn-primary">edit</button>
        </div>
    </form>
{{>footer}}
