<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset Password Link</title>
</head>
<body>
    Hi <br/>
    Change Your Password <a href="http://localhost:3000/reset/{{ $token }}">Click Here</a><br/>
    Pincode: {{ $token }}
</body>
</html>
