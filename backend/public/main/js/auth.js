let en_regex = /^[A-Za-z0-9]*$/;

$('#login_form').on('submit', function (evt) {
    evt.preventDefault();
    loginPost();
});
function loginPost() {
    let login_email = $('input[name="login_email"]').val();
    let login_password = $('input[name="login_password"]').val();
    $('#submit_login').prop('disabled', true);
    if (login_email === '') {
        customAlert(messages[0]);
        $('#submit_login').prop('disabled', false);
        return;
    }
    if (login_email.indexOf('@') <= 0) {
        customAlert(messages[1]);
        $('#submit_login').prop('disabled', false);
        return;
    }
    if (login_password === '') {
        customAlert(messages[2]);
        $('#submit_login').prop('disabled', false);
        return;
    }
    let login_url = '/auth/login';
    let data = $('#login_form').serialize();
    $.ajax({
        url: login_url,
        method: 'post',
        data: data,
        success: function (res) {
            if (res.status === 'success') {
                customAlert(res.message, true);
                setTimeout(function () {
                    location.reload();
                }, 1500);
            } else if (res.status === 'factor') {
                customAlert(res.message, true);
                $('#factor2_input').css('display', 'block');
            }
            else if (res.status === 'phone_verification') {
                customAlert(res.message, true);
                setTimeout(function () {
                    $('#submit_login').prop('disabled', false);
                    location.href = '/auth/verification-phone';
                }, 1500);
            } else customAlert(res.message);
            $('#submit_login').prop('disabled', false);
        }
    })
}