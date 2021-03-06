
$(document).ready(function(){
    $('#char0').focus()
    codeInput()
})

var codeInput = function() {
    $('.char-field').focus(function () {
        $(this).select()
    }).keyup(function (e) {
        /*删除键控制*/
        if (e.keyCode == 8) {
            var value = $(this).val()
            var pre = $(this).parent().prev().children('.char-field')
            if (!value) {
                if (pre) {
                    pre.val('');
                    pre.focus();
                }
            } else {
                $(this).val('');
            }
            /*验证按钮处理*/
            $('#verify').attr('disabled', true)
            return true
        }

        /*输入字符校验，只允许输入数字*/
        if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105))
            return false

        buttonControl()

        /*输入按键太快时的校正处理，可无，快速输入时会有空露问题*/
        if(!$(this).val()) {
            $(this).val(getKeyCodeValue(e.keyCode))
        }


        var next = $(this).parent().next().children('.char-field')
        if (!next) {
            return true
        }
        if (next.val()) {
            next.select()
        } else {
            next.focus()
        }
    }).keydown(function (e) {
        if (e.keyCode == 46) {
            var value = $(this).val()
            var pre = $(this).parent().prev().children('.char-field')
            if (!value) {
                if (pre) {
                    pre.val('')
                    pre.focus()
                }
            }
        }
        if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105))
            return false
    })
}

var buttonControl = function (){
    /* 根据输入数字个数判断是否显示验证按钮*/
    if (char0.value && char1.value && char2.value && char3.value
    ) {
        $('#verify').attr('disabled', false)
    } else {
        $('#verify').attr('disabled', true)
    }
}

/*读取按键的数值，横条+小键盘*/
var getKeyCodeValue = function(keycode){
    if(keycode == 48 || keycode == 96)
        return 0;
    if(keycode == 49 || keycode == 97)
        return 1;
    if(keycode == 50 || keycode == 98)
        return 2;
    if(keycode == 51 || keycode == 99)
        return 3;
    if(keycode == 52 || keycode == 100)
        return 4;
    if(keycode == 53 || keycode == 101)
        return 5;
    if(keycode == 54 || keycode == 102)
        return 6;
    if(keycode == 55 || keycode == 103)
        return 7;
    if(keycode == 56 || keycode == 104)
        return 8;
    if(keycode == 57 || keycode == 105)
        return 9;
    return '';
}
