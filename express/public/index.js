
const login = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "post",
            url: "http://localhost:3008/login/login",
            data: {
                username: $('#u').val(),
                password: $('#p').val()
            },
            success(data) {
                resolve(data);
                alert(data);

            },
            error(err) {
                reject(err);
            }
        })
    })
}
$('button').click(async () => {
    let data = await login();
    console.log(data);
});