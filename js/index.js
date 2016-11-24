$(document).ready(function () {

    $('.test')[0].addEventListener('click', function () {


        var stuid = $('#stuid').val();
        var stuname = $('#stuname').val();
        var phonenum = $('#phonenum').val();
        var email = $('#email').val();
        var desc = $('#desc').val();


        function check() {
            isStuid();
            isName();
            isGender();
            isPhonenum();
            isEmail();
            isDesc();
        }

        //匹配学号
        function isStuid() {
            var pattern = /\d{8}/;
            if (stuid.match(pattern)) {
                // $(this).next().val("");
                alert('学号success');

            }
            else {
                // $(this).next().val("请输入8位学号");
                alert('学号error');
            }
        }

        //匹配姓名
        function isName() {
            var pattern = /\*{0,255}/;
            if (stuname.match(pattern)) {
                alert('姓名success');

            }
            else {
                alert('姓名error');
            }
        }

        /*获取一组名为(items)的radio被选中项的值*/
        function isGender() {
            var gender = $('input[name=gender]:checked').val(); //若未被选中 则val() = undefined
        }

        //匹配手机号码
        function isPhonenum() {
            var pattern = /\d{11}/;
            if (phonenum.match(pattern)) {
                alert('电话success');
            }
            else {
                alert('电话error');
            }
        }

        //匹配邮箱
        function isEmail() {
            var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.match(pattern)) {
                alert('邮箱success');
            }
            else {
                alert('邮箱error');
            }
        }

        //匹配个人简介
        function isDesc() {
            var pattern = /\*{0,255}/;
            if (phonenum.match(pattern)) {
                alert('个人简介success');
            }
            else {
                alert('个人简介error');
            }
        }

        check();
    })
});

