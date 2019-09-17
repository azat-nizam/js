/**
 * Пример работы с валиадотором и маской
 * https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js
 * https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js
 */
$(function() {
    // Пример собственного метода валидатора
    jQuery.validator.addMethod("checkPhone", function(value, element) {
        return /\+\d{1}\s\d{3}\s\d{3}\s\d{4}/g.test(value);
    });

    $("#fujidaRegistration").validate({
        rules: {
            // "form.input.name"
            "REGISTER[PERSONAL_MOBILE]": {
                checkPhone: true
            },
            "USER_AGREEMENT": {
                required: true
            }
        },
        messages: {
            "REGISTER[PERSONAL_MOBILE]": {
                checkPhone: "Номер введен неверно"
            },
            "USER_AGREEMENT": {
                required: "Необходимо принять пользовательское соглашение"
            }
        },
        // Если нужно сделать вывод ошибок в кастомный контейнер
        errorLabelContainer: "#form-error",
        errorElement: "div"
    });

    $('#phoneField').mask( "+9 999 999 9999", {autoclear: false} );
});
