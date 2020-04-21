$('#profile_form').on('submit', function (evt) {
    evt.preventDefault();
    submitEditProfile();
});
function saveAvatar() {
    let avatarImg = $('#profile_avatar').attr('src');
    if (avatarImg.length < 1000) {
        customAlert(messages[9]);
        return;
    }
    $.ajax({
        url: '/admin/account-settings/change-avatar',
        method: 'post',
        data: {
            avatarImg: avatarImg
        },
        success: function (res) {
            if (res.status === 'success') {
                customAlert(res.message, true);
                $('.user__info .user__img').attr('src', res.avatarPath);
            }
            else customAlert(res.message);
        }
    })
}
function submitEditProfile() {
    let username = $('#profile_user_name').val();
    let email = $('#profile_email').val();
    let old_password = $('#profile_old_password').val();
    let new_password = $('#profile_new_password').val();
    let confirm_password = $('#profile_confirm_password').val();
    if (username === '') {
        customAlert(messages[0]);
        customValid('profile_user_name');
        return;
    }
    if (old_password === '') {
        customAlert(messages[2]);
        customValid('profile_old_password');
        return;
    }
    if (new_password === '') {
        customAlert(messages[3]);
        customValid('profile_new_password');
        return;
    }
    if (confirm_password === '') {
        customAlert(messages[4]);
        customValid('profile_confirm_password');
        return;
    }
    if (new_password !== confirm_password) {
        customAlert(messages[5]);
        customValid('profile_new_password');
        customValid('profile_confirm_password');
        return;
    }
    let avatarImg = $('#profile_avatar').attr('src');
    let url = '/admin/account-settings/edit-profile';
    let data = {
        username: username,
        email: email,
        old_password: old_password,
        new_password: new_password,
        avatarImg: avatarImg
    };
    $.ajax({
        url: url,
        method: 'post',
        data: data,
        success: function (res) {
            if (res.status === 'success') {
                customAlert(res.message, true);
            } else customAlert(res.message);
        }
    })
}
function previewProfileAvatar(evt) {
    let reader = new FileReader();
    reader.onload = function (evt) {
        $('#profile_avatar').attr('src', evt.target.result);
    };
    reader.readAsDataURL(evt.target.files[0]);
}