$(function () {
    $("input").blur(function (e) {

        var stuid = $('#stuid').val();
        var stuname = $('#stuname').val();
        var phonenum = $('#phonenum').val();
        var email = $('#email').val();
        var desc = $('#desc').val();



        if (this.name == 'stuid') {
            let pattern = /\d{8}/;
            if (stuid.match(pattern) && stuid !== '') {
                document.getElementById('error').innerHTML = '';
            }
            else {
                document.getElementById('stuid-error').innerHTML = '请输入8位学号';
            }
        }
        if (this.name == 'stuname') {
            let pattern = /\*{1,255}/;
            if (stuname.match(pattern) && stuname!=='') {
                document.getElementById('stuname-error').innerHTML = '222';
            }
            else {
                document.getElementById('stuname-error').innerHTML = '请输入正确格式';
            }
        }

        if (this.name == 'phonenum') {
            let pattern = /\d{11}/;
            if (phonenum.match(pattern) && phonenum !== '') {
                document.getElementById('phonenum-error').innerHTML = '';

            }
            else {
                document.getElementById('phonenum-error').innerHTML = '请输入11位手机号';
            }
        }

        if (this.name == 'email') {
            let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.match(pattern) && email !== '') {
                document.getElementById('email-error').innerHTML = '';
            }
            else {
                document.getElementById('email-error').innerHTML = '请输入正确邮箱';
            }
        }

        if (this.name == 'desc') {
            let pattern = /\*{0,255}/;
            if (phonenum.match(pattern)) {
                document.getElementById('desc-error').innerHTML = '';
            }
            else {
                document.getElementById('email-error').innerHTML = '请输入正确格式';
            }
        }
    })
});

