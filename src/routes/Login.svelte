
<style lang="scss">
    form {
        border: 2px solid black;

        input {
            background: none;
            border: none;
            outline: none;
            border: 8px solid red;
            padding: 1rem;
        }

        button {
            border: none;
            outline: none;
            color: rgb(16, 15, 15);
            background-color: red;
            font-size: 1.5rem;
            padding: 1rem;
            transition: 0.3s ease;

            &:active {
                background-color: pink;
            }
        }
    }
</style>


<form>
    <h1>Login</h1>
    <input class="email" type="email" placeholder="Email: ">
    <input class="password" type="password" placeholder="Password: ">
    <button type="submit">
        Log In
    </button>
</form>