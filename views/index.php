<!DOCTYPE html>
<html lang="eng">
<head>
    <title></title>
    <meta name="viewport" content="initial-scale=1.0,width=device-width">
    <script type="text/javascript" defer src="../scripts/helpers.js"></script>
    <script type="text/javascript" defer src="../scripts/classes.js"></script>
    <script type="text/javascript" defer src="../scripts/listeners.js"></script>
    <script type="text/javascript" defer src="../scripts/HTMLCreations.js"></script>
    <link type="text/css" rel="stylesheet" href="../styles/index.css">
    <link type="text/css" rel="icon" href="../resources/images/logo.ico">
</head>
<body>
<header class="header">
    <span class="brandName">
        <h1>No be facebook o</h1>
    </span>
    <span class="login">
        <button class="login-button" type="button">Log In to Existing Account</button>
        <form class="loginForm" method="post">
            <span class="field">
                <label for="contact1">Email or phone</label>
                <input type="text" id="contact1" name="contact">
                <br>
            </span>
            <span class="field">
                <label for="password1">Password</label>
                <input type="password" id="password1" name="password">
                <a href="#" class="forgotPass">Forgotten account?</a>
            </span>
            <button class="login-button" type="submit">Log In</button>
        </form>
    </span>
</header>
<div class="container">
    <main class="main">
        <form class="signUpForm">
            <h1 class="formTitle">Create a new account</h1>
            <p>It's quick and easy.</p>
            <span class="field names">
                <span class="firsName">
                    <label for="firstName" hidden>First Name</label>
                    <input id="firstName" name="firstName" type="text" placeholder="First name">
                </span>
                <span class="lastName">
                    <label for="lastName" hidden>Surname</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Surname">
                </span>
            </span>
            <span class="field">
                <label for="contact" style="display: none">Contact</label>
                <input id="contact" name="contact" type="text" placeholder="Mobile number or email address">
            </span>
            <span class="field">
                <label for="password" style="display: none">Password</label>
                <input id="password" name="password" type="password" placeholder="New Password">
            </span>
            <span class="field">
                <label for="dob">Date of birth</label>
                <span id="dob">
                    <a href="" title="click for more information">
                    <img src="" alt="?">
                </a>
            </span>
            <span class="field">
                <label for="gender">Gender</label>
                <span class="radio">
                    <input id="female" type="radio" name="gender">
                    <label for="female">Female</label>
                </span>
                <span class="radio">
                    <input id="male" type="radio" name="gender">
                    <label for="male">Male</label>
                </span>
                <span class="radio">
                    <input id="custom" type="radio" name="gender">
                    <label for="custom">Custom</label>
                </span>
                <a href="" title="click for more information">
                    <img src="" alt="?">
                </a>
            </span>
            <p class="disclaimer">
                By clicking Sign Up, you agree to our <a href="" title="">Terms</a>, <a href="">Data Policy</a> and <a href="">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
            </p>
            <button name="signUp" type="submit" class="signUpButton">Sign Up</button>
        </form>
    </main>
</div>
</body>
</html>